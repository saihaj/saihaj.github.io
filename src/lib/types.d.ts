export type MDXFrontMatter = {
    layout: string,
    __resourcePath: string,
    __scans: {},
    title?:string
    description?: string
} & Record<string, any>

