import siteMetadata from "@/content/metadata.json"
import ProfileCard from '@/content/profileCard.mdx'
import CardGroup from "@/app/cardGroup";
import Card from "@/app/card";

export default function Home() {
    return (<>
            <img className="w-full aspect-[21/9] object-cover" src={siteMetadata.index.headerImage}
                 alt="Header Image"/>
            <div className="p-16 bg-gradient-to-b from-[#f38cb1] to-[#f0aec3]">

                <div
                    className="max-w-2xl mx-auto bg-[#fee1ed] dark:bg-slate-800 text-slate-800 dark:text-[#fee1ed] mt-16 mb-32 rounded-xl">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 p-4">
                            <a href="#contact">
                                <img className="rounded-full" src="/img/chloe.png" alt="Profile picture"/>
                            </a>
                        </div>
                        <div className="lg:w-1/2 p-4">
                            <ProfileCard/>
                        </div>
                    </div>
                </div>

                {siteMetadata.index.cards.map(cards => (<CardGroup key={cards.toString()}>
                        <>
                        {cards.map((card) => (
                            <Card contentFile={`index/${card}.mdx`} key={card}/>))}
                        </>
                    </CardGroup>))}
            </div>
        </>);
}
