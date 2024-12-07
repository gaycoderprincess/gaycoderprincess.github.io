import * as fs from "node:fs/promises";

import {evaluate} from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'
import remarkGfm from 'remark-gfm'
import {overrideComponents} from "@/mdx-components";

const TextCard = async ({
                            contentFile
                        }: Readonly<{
    contentFile: string
}>) => {

    const content: string = await fs.readFile('content/' + contentFile, {encoding: "utf-8"});

    const {default: MDXContent} = await evaluate(content, {remarkPlugins: [remarkGfm], ...runtime})

    return (
        <div className={"p-4"}>
            <MDXContent components={overrideComponents}/>
        </div>
    )
}

export default TextCard