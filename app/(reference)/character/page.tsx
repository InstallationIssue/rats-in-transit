import PlayerCard from "../../_cards/characterCard"
import Header from "../../_components/header"
import { getCharacters } from "@/prisma/scripts/character"

export default async function Character(){
    const data = await getCharacters()

    return (
        <div>
            <Header title="Characters" link="/character/add"></Header>
            <div className="flex flex-row flex-wrap">
                {data.map((id, index) => (
                    <PlayerCard key={id.id} id={id.id}/>
                ))}
            </div>
        </div>
    )
}