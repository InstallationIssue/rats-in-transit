import Link from "next/link"
import { getItemById } from "@/prisma/scripts/item"
import Coins from "/public/icons/items/coins.svg"

export default async function ItemCard({
    id,
  }: {
    id: number
  }) {
    const item = await getItemById(Number(id))

    return (
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 p-2">
        <Link href={`/item/${id}`} className="flex flex-row gap-2 h-10 items-center overflow-clip border rounded-lg p-2 border-primary-light fill-primary-light">
            <span className="flex-grow whitespace-nowrap overflow-clip">
              <p className="scrolling-text capitalize">{item.name}</p>
            </span>
            <p>{item.value}</p>
            <Coins className="aspect-square h-5 cursor-pointer"/>
        </Link>
      </div>
    )
}