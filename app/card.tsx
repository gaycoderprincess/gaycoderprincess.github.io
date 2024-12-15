import * as fs from "node:fs/promises";

import {evaluate} from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'

import remarkGfm from "remark-gfm";

const Card = async ({
                        contentFile
                    }: Readonly<{
    contentFile: string
}>) => {

    const {metadata}: {
        metadata: { image: string, name: string, url: string, miniImage?: string }
    } = await import('@/content/' + contentFile.replace('mini', 'main'))

    const content: string = await fs.readFile('content/' + contentFile, {encoding: "utf-8"});

    const {default: MDXContent} = await evaluate(content, {remarkPlugins: [remarkGfm], baseUrl: import.meta.url.replace('app/card.tsx', 'content/') + contentFile, ...runtime})

    return (
        <div className={`flex flex-col even:lg:flex-row-reverse odd:lg:flex-row`}>
            <div className="lg:w-1/2 p-4">
                <a href={metadata.url}>
                    <img className="rounded-xl aspect-video object-cover w-full h-auto"
                         src={metadata.miniImage ?? metadata.image} alt={metadata.name}/>
                </a>
            </div>
            <div className="lg:w-1/2 p-4 prose dark:prose-invert max-w-none">
                <MDXContent metadata={metadata}/>
            </div>
        </div>
    )
}

export default Card