import MagicCard from "../../_cards/magicCard"
import Header from "../../_components/header"
import { getMagics } from "@/prisma/scripts/magic"

export default async function Page() {
    const data = await getMagics()

    return (
        <div>
            <Header title="Magics" link="/magic/add"></Header>
            <div className="flex flex-row flex-wrap">
                {data.map((id, index) => (
                    <MagicCard key={id.id} id={id.id}/>
                ))}
            </div>
        </div>
    )
}