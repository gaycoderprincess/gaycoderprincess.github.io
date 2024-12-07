import * as fs from "node:fs/promises";

import {evaluate} from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'

import {overrideComponents} from "@/mdx-components";
import remarkGfm from "remark-gfm";

const Card = async ({
                        contentFile
                    }: Readonly<{
    contentFile: string
}>) => {
    const {metadata}: {
        metadata: { image: string, name: string, url: string }
    } = await import('@/content/' + contentFile)
    const content: string = await fs.readFile('content/' + contentFile, {encoding: "utf-8"});

    const {default: MDXContent} = await evaluate(content, {remarkPlugins: [remarkGfm], ...runtime})

    return (
        <div className={`flex flex-col even:lg:flex-row-reverse odd:lg:flex-row`}>
            <div className="lg:w-1/2 p-4">
                <a href={metadata.url}>
                    <img className="rounded-xl aspect-video object-cover w-full h-auto"
                         src={metadata.image} alt="Big Project 1"/>
                </a>
            </div>
            <div className="lg:w-1/2 p-4">
                <MDXContent components={overrideComponents}/>
            </div>
        </div>
    )
}

export default Card