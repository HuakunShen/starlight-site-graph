import { Container, Graphics, Text } from 'pixi.js';
import * as d3 from 'd3';
import type {SitemapEntry} from "../types";

type ContentDetails = SitemapEntry & {
	content: string;
	richContent?: string;
	date?: Date;
	description?: string;
};

type NodeData = {
	id: string;
	exists: boolean;
	node?: Graphics;
	text?: string;
	label?: Text;
	arrowHead?: Graphics;
	neighborCount?: number;
	size?: number;
} & d3.SimulationNodeDatum;

type LinkData = {
	source: NodeData;
	target: NodeData;
};

interface AnimatedValues {
	zoom: number;
	transformX: number;
	transformY: number;

	nodeColor: string;
	nodeColorHover: string;
	currentNodeColor: string;
	currentNodeColorHover: string;
	visitedNodeColor: string;
	visitedNodeColorHover: string;
	unresolvedNodeColor: string;
	unresolvedNodeColorHover: string;

	linkColor: string;
	linkColorHover: string;

	labelOpacity: number;
	labelOpacityHover: number;
	labelOffset: number;
	labelColorHover: string;
}
