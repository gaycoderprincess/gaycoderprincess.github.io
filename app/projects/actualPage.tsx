import siteMetadata from "@/content/metadata.json"
import CardGroup from "@/app/cardGroup";
import * as fs from "node:fs/promises";
import Card from "@/app/card";

export default async function ProjectsPage(sortingFunnction: ((a: {
    path: string;
    metadata: { name: string; lastUpdated: string; };
}, b: { path: string; metadata: { name: string; lastUpdated: string; }; }) => number)) {
    const cards = (await Promise.all((await fs.readdir("content/projects")).map(async card => {
        const {metadata}: {
            metadata: { name: string, lastUpdated: string }
        } = await import('@/content/projects/' + card + '/main.mdx')
        return {path: card, metadata}
    }))).sort(sortingFunnction)
    return (<>
        <img className="w-full aspect-[21/9] object-cover" src={siteMetadata.projects.headerImage}
             alt="Header Image"/>
        <div className="p-16 bg-gradient-to-b from-[#f38cb1] to-[#f0aec3]" id={'content'}>
            <CardGroup>
                <div className={'grid grid-cols-1 lg:grid-cols-5'} id={'sorting'}>
                    <div className={'text-center px-4 py-2 m-4'}>
                        Sort by:
                    </div>
                    <a href={'/projects/by-name#content'}
                       className={'text-center text-white bg-[#f573a3] hover:bg-[#dd6994] px-4 py-2 rounded m-4'}>A-Z</a>
                    <a href={'/projects/by-name-desc#content'}
                       className={'text-center text-white bg-[#f573a3] hover:bg-[#dd6994] px-4 py-2 rounded m-4'}>Z-A</a>
                    <a href={'/projects/by-date#content'}
                       className={'text-center text-white bg-[#f573a3] hover:bg-[#dd6994] px-4 py-2 rounded m-4'}>Oldest first</a>
                    <a href={'/projects/by-date-desc#content'}
                       className={'text-center text-white bg-[#f573a3] hover:bg-[#dd6994] px-4 py-2 rounded m-4'}>Newest first</a>
                </div>
                <div>
                    {cards.map((card) => (
                        <Card contentFile={'projects/' + card.path + '/mini.mdx'} key={card.path}/>))}
                </div>
            </CardGroup>
        </div>
    </>);
}
