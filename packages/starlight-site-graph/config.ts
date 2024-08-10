import { AstroError } from "astro/errors";
import { z } from "astro/zod";


export const defaultGraphConfig: GraphConfig = {
    enableDrag: true,
    enableZoom: true,
    depth: 1,
    scale: 1.1,

    opacityScale: 1.3,
    autoScale: true,
    focusOnHover: true,
    renderArrows: false,
    labelOffset: 8,
    labelHoverOffset: 6,

    repelForce: 0.5,
    centerForce: 0.3,
    linkDistance: 30,

    showTags: false,
    removeTags: [],
    customFolderTags: {},
};

export type GraphConfig = {
    enableDrag: boolean,
    enableZoom: boolean,
    depth: number,

    scale: number,
    autoScale: boolean,
    renderArrows: boolean,
    opacityScale: number,
    focusOnHover: boolean,
    labelOffset: number,
    labelHoverOffset: number,

    repelForce: number,
    centerForce: number,
    linkDistance: number,

    customFolderTags: Record<string, string>,
    showTags: boolean,
    removeTags: string[],
};

export const starlightSiteGraphConfigSchema = z
    .object({
        /**
         * The root directory of the content to generate links from
         *
         * @default "docs"
         */
        contentRoot: z.string().default("./src/content/docs"),

        /**
         * Configuration for the graph
         *
         * @default {
         *     enableDrag: true,
         *     enableZoom: true,
         *     depth: 1,
         *     scale: 1.1,
         *
         *     opacityScale: 1.3,
         *     autoScale: true,
         *     focusOnHover: true,
         *     renderArrows: false,
         *     labelOffset: 8,
         *     labelHoverOffset: 6,
         *
         *     repelForce: 0.5,
         *     centerForce: 0.3,
         *     linkDistance: 30,
         *
         *     showTags: false,
         *     removeTags: [],
         *     customFolderTags: {},
         * }
         */
        graphConfig: z.object({
            enableDrag: z.boolean().default(defaultGraphConfig.enableDrag),
            enableZoom: z.boolean().default(defaultGraphConfig.enableZoom),
            depth: z.number().default(defaultGraphConfig.depth),
            scale: z.number().default(defaultGraphConfig.scale),

            opacityScale: z.number().default(defaultGraphConfig.opacityScale),
            autoScale: z.boolean().default(defaultGraphConfig.autoScale),
            focusOnHover: z.boolean().default(defaultGraphConfig.focusOnHover),
            renderArrows: z.boolean().default(defaultGraphConfig.renderArrows),
            labelOffset: z.number().default(defaultGraphConfig.labelOffset),
            labelHoverOffset: z.number().default(defaultGraphConfig.labelHoverOffset),

            repelForce: z.number().default(defaultGraphConfig.repelForce),
            centerForce: z.number().default(defaultGraphConfig.centerForce),
            linkDistance: z.number().default(defaultGraphConfig.linkDistance),

            showTags: z.boolean().default(defaultGraphConfig.showTags),
            removeTags: z.array(z.string()).default(defaultGraphConfig.removeTags),
            customFolderTags: z.record(z.string()).default(defaultGraphConfig.customFolderTags),
        }).default(defaultGraphConfig),
        sitemap: z.record(z.string(), z.object({
            title: z.string(),
            content: z.string().optional(),
            links: z.array(z.string()),
            backlinks: z.array(z.string()),
            tags: z.array(z.string())
        })).optional()
    }).default({
        contentRoot: "./src/content/docs",
        graphConfig: defaultGraphConfig
    });


export type StarlightSiteGraphConfig = z.infer<typeof starlightSiteGraphConfigSchema>;

export function validateConfig(userConfig: unknown): StarlightSiteGraphConfig {
    const config = starlightSiteGraphConfigSchema.safeParse(userConfig);

    if (!config.success) {
        const errors = config.error.flatten();
        throw new AstroError(
            `Invalid starlight-site-graph configuration:

            ${errors.formErrors
                .map((formError) => ` - ${formError}`)
                .join("\n")}
            ${Object.entries(errors.fieldErrors)
                .map(
                    ([fieldName, fieldErrors]) =>
                        `- ${fieldName}: ${JSON.stringify(fieldErrors)}`
                )
                .join("\n")}
            `
        );
    }

    return config.data;
}
