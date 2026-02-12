import CardGroup from "@/app/cardGroup";
import TextCard from "@/app/textCard";

export default function Downloads() {
    return (<>
            <div className="p-16 bg-gradient-to-b from-[#f38cb1] to-[#f0aec3]">
                <CardGroup>
                    <TextCard contentFile={'downloads.mdx'}/>
                </CardGroup>
            </div>
        </>);
}
