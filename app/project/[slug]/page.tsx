import * as fs from "node:fs/promises";
import CardGroup from "@/app/cardGroup";
import Card from "@/app/card";
import TextCard from "@/app/textCard";

export const dynamicParams = false;

export async function generateStaticParams() {
    return (await fs.readdir('content/projects')).map(path => {
        return {slug: path}
    })
}

export default async function Project({params}: { params: Promise<{ slug: string }> }) {
    const {slug}: { slug: string } = await params;
    const {metadata}: {
        metadata: { image: string, name: string, link: string }
    } = await import(`@/content/projects/${slug}/main.mdx`)
    const changelogs = (await fs.readdir(`content/projects/${slug}/changelog`))
        .map(file => parseInt(file.substring(0, file.length - 4)))
        .sort((a, b) => b-a)
    return (<>
        <img className="w-full aspect-[21/9] object-cover" src={metadata.image}
             alt="Header Image"/>
        <div className="p-16 bg-gradient-to-b from-[#f38cb1] to-[#f0aec3]">
            <CardGroup>
                <div className="flex justify-between">
                    <div className={'text-4xl text-center p-4'}>{metadata.name}</div>
                    <div className={'flex justify-end'}>
                        <a href={metadata.link}
                           className={'text-center text-white bg-[#f573a3] hover:bg-[#dd6994] px-4 py-2 rounded m-4'}>Download</a>
                    </div>
                </div>
                <TextCard contentFile={`projects/${slug}/main.mdx`}/>
                {changelogs.map((card) => (
                    <Card contentFile={`projects/${slug}/changelog/${card}.mdx`} key={card}/>))}
            </CardGroup>
        </div>
    </>
    )
}
