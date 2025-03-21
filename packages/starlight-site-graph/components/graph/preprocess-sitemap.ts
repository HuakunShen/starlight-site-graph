import type { LinkData, NodeData } from './types';
import type { Sitemap } from '../../config';
import type { GraphComponent } from './graph-component';
import type { NodeStyle } from '../../config';

import { getVisitedEndpoints, simplifySlug } from '../util';

import { DEFAULT_CORNER_RADIUS, DEFAULT_POLYGON_POINTS, DEFAULT_STAR_POINTS, DEFAULT_STROKE_WIDTH } from './constants';

export type GraphData = {
	nodes: NodeData[];
	links: LinkData[];
};

// TODO: Preprocess sitemap at build time and bundle together (client load performance vs. built page size)
export function processSitemapData(context: GraphComponent, siteData: Sitemap): GraphData {
	const visitedPages: Set<string> = getVisitedEndpoints();

	let slug = context.currentPage;

	let corrected_data = Object.entries(siteData).map(([k, v]) => [simplifySlug(k), v] as const);
	if (!context.config.renderUnresolved) {
		corrected_data = corrected_data.filter(([_, v]) => v.exists);
	}
	if (!context.config.renderExternal) {
		corrected_data = corrected_data.filter(([_, v]) => !v.external);
	}

	const data = new Map(corrected_data);

	let depth = context.config.depth;
	if (depth >= 5) depth = -1;

	let links: LinkData[] = [];
	const tags: Set<string> = new Set();
	const validLinks = new Set(data.keys());
	const neighbourhood = new Set<string>();

	// __SENTINEL is used to separate levels in the BFS
	const queue: (string | '__SENTINEL')[] = [slug, '__SENTINEL'];
	if (depth >= 0) {
		while (depth >= 0 && queue.length > 0) {
			const current = queue.shift()!;
			if (current === '__SENTINEL') {
				depth -= 1;
				if (queue.length === 0) {
					break;
				}
				queue.push('__SENTINEL');
			} else if (!neighbourhood.has(current)) {
				const node = data.get(current)!;
				// FIXME: This means that the target does not exist, link should have been removed
				//   NOTE 2: Depends on whether node is unresolved
				if (!node) {
					// console.error("[STARLIGHT-SITE-GRAPH] Node doesn't exist in sitemap:", current, data);
					continue;
				}

				neighbourhood.add(current);
				if (context.config.depthDirection === 'outgoing' || context.config.depthDirection === 'both') {
					for (const link of node.links ?? []) {
						if (validLinks.has(link)) {
							links.push({ source: current, target: link });
						}
						queue.push(link);
					}
				}

				if (context.config.depthDirection === 'incoming' || context.config.depthDirection === 'both') {
					for (const link of node.backlinks ?? []) {
						if (validLinks.has(link)) {
							links.push({ source: link, target: current });
						}
						queue.push(link);
					}
				}

				if (context.config.tagRenderMode === 'node' || context.config.tagRenderMode === 'both') {
					for (const tag of node.tags ?? []) {
						neighbourhood.add(tag);
						tags.add(tag);
						links.push({ source: current, target: tag });
					}
				}
			}
		}
	} else {
		for (const [source, details] of data.entries()) {
			neighbourhood.add(source);
			for (const link of details.links ?? []) {
				if (validLinks.has(link)) {
					links.push({ source: source, target: link });
				}
			}

			if (context.config.tagRenderMode === 'node' || context.config.tagRenderMode === 'both') {
				for (const tag of details.tags ?? []) {
					neighbourhood.add(tag);
					tags.add(tag);
					links.push({ source: source, target: tag });
				}
			}
		}
	}

	links = links.filter(l => neighbourhood.has(l.target as unknown as string));

	const nodes: NodeData[] = [];
	for (const id of neighbourhood) {
		const node = data.get(id);
		if (!node) continue;

		const adjacent = new Set([...(node.links ?? []), ...(node.backlinks ?? [])]);

		// Chain of declarations determines style priority
		let style: NodeStyle = { ...context.config.nodeDefaultStyle } as NodeStyle;
		if (node.external) {
			style = { ...style, ...(context.config.nodeExternalStyle as NodeStyle) };
		}

		if (visitedPages.has(id)) {
			style = { ...style, ...(context.config.nodeVisitedStyle as NodeStyle) };
		}

		if (context.config.tagRenderMode === 'same' || context.config.tagRenderMode === 'both') {
			style = {
				...style,
				...((node.tags ?? []).reduce((acc, tag) => ({ ...acc, ...context.config.tagStyles[tag] }), {}) as NodeStyle),
			};
		}

		if (id === context.currentPage) {
			style = { ...style, ...(context.config.nodeCurrentStyle as NodeStyle) };
		}

		if (!node.exists) {
			style = { ...style, ...(context.config.nodeUnresolvedStyle as NodeStyle) };
		}

		style = processStyle({ ...style, ...((node.nodeStyle ?? {}) as NodeStyle) });

		const { computedSize, fullRadius, colliderSize } = computeSizes(style, adjacent.size);
		nodes.push({
			id: id,
			exists: node.exists,
			external: node.external,
			text: node.title,
			tags: node.tags ?? [],
			adjacent,

			shape: style.shape,
			shapeSize: style.shapeSize,
			shapeColor: style.shapeColor,
			strokeWidth: style.strokeWidth,
			strokeColor: style.strokeColor,
			shapePoints: style.shapePoints,
			shapeRotation: style.shapeRotation,
			shapeCornerRadius: style.shapeCornerRadius,
			strokeCornerRadius: style.strokeCornerRadius,

			cornerType: style.cornerType,

			// TODO: computedSize may be removed if no use for it is found
			computedSize,
			fullRadius,
			colliderSize,
		});
	}

	for (const tag of tags) {
		const tagStyle = processStyle({
			...context.config.tagDefaultStyle,
			...(context.config.tagStyles[tag] ?? {}),
		} as NodeStyle);

		const adjacent = new Set([...links.filter(l => l.source === tag).map(l => l.target as string)]);
		const { computedSize, fullRadius, colliderSize } = computeSizes(tagStyle, adjacent.size);
		nodes.push({
			id: tag,
			exists: true,
			external: false,
			text: tag,
			tags: [tag],
			type: 'tag',
			adjacent,

			...tagStyle,

			computedSize,
			fullRadius,
			colliderSize,
		});
	}

	return {
		nodes,
		links: links.filter(
			l => neighbourhood.has(l.source as unknown as string) && neighbourhood.has(l.target as unknown as string),
		),
	};
}

function computeSizes(style: NodeStyle, neighborCount: number): { computedSize: number, fullRadius: number, colliderSize: number } {
	// Magick radius calculations
	const scaleFactor = Math.max(
		0.00000001,
		(-9.67101 * 0.99868 ** neighborCount + 10.6354) ** style.neighborScale * style.nodeScale,
	);
	const computedSize = style.shapeSize * scaleFactor,
		fullRadius = computedSize + style.strokeWidth / 2,
		colliderSize = fullRadius * style.colliderScale;
	return { computedSize, fullRadius, colliderSize };
}

function processStyle(style: Partial<NodeStyle>): NodeStyle {
	if (style.strokeColor) {
		style.strokeWidth ??= DEFAULT_STROKE_WIDTH;
	} else if (style.strokeWidth) {
		style.strokeColor = 'inherit';
	}

	if (style.shapeColor === 'stroke') {
		if (style.strokeColor && style.strokeColor !== 'inherit') {
			style.shapeColor = style.strokeColor;
			style.strokeColor = 'inherit';
		} else {
			style.shapeColor = 'nodeColor';
		}
	}

	if (style.shapeRotation === 'random') {
		style.shapeRotation = Math.random() * Math.PI * 2;
	} else {
		style.shapeRotation = ((style.shapeRotation ?? 0) * Math.PI) / 180;
	}

	if (style.shape === 'star') {
		style.shapePoints ??= DEFAULT_STAR_POINTS;
	} else if (style.shape === 'polygon') {
		style.shapePoints ??= DEFAULT_POLYGON_POINTS;
	} else if (style.shape === 'square') {
		style.shapePoints = 4;
		style.shape = 'polygon';
		// Ensures that square (and triangle) is upright at 0 degrees shapeRotation
		style.shapeRotation += Math.PI / 4;
	} else if (style.shape === 'triangle') {
		style.shapePoints = 3;
		style.shape = 'polygon';
		style.shapeRotation -= Math.PI / 2;
	}

	if (style.shapeCornerRadius && typeof style.shapeCornerRadius === 'string') {
		style.shapeCornerRadius = (parseFloat(style.shapeCornerRadius.slice(0, -1)) / 100) * style.shapeSize!;
	}
	if (style.strokeCornerRadius && typeof style.strokeCornerRadius === 'string') {
		style.strokeCornerRadius = (parseFloat(style.strokeCornerRadius.slice(0, -1)) / 100) * style.strokeWidth!;
	}

	if (style.cornerType === 'round' || style.cornerType === 'bevel') {
		style.shapeCornerRadius = Math.min(Math.max(0, Number(style.shapeCornerRadius ?? DEFAULT_CORNER_RADIUS)), style.shapeSize!);
		style.strokeCornerRadius = Math.min(Math.max(0, Number(style.strokeCornerRadius ?? DEFAULT_CORNER_RADIUS)), style.strokeWidth!);
	} else {
		style.shapeCornerRadius = 0;
		style.strokeCornerRadius = 0;
	}

	return style as NodeStyle;
}
