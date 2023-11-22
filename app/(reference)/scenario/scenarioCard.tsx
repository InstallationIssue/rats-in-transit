import CardButtons from "../../_components/cardButtons"
import Link from "next/link"
import IcelandLupin from '/public/landscapes/Iceland-Lupin.svg'
import MistyValley from '/public/landscapes/Misty-Valley.svg'
import NeonCity from '/public/landscapes/Neon-City.svg'
import NightMountains from '/public/landscapes/Night-Mountains.svg'
import SunsetDesert from '/public/landscapes/Sunset-Desert.svg'
import Default from '/public/landscapes/Default.svg'

export default function ScenarioCard({
  id, name, description,image
}: {
  id: number, 
  name: string, 
  description: string,
  image: string
}) {
    return (
      <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 p-2">
        <div className="flex flex-col border rounded-lg overflow-clip relative justify-end fill-primary-light">
          <Link href={`/scenario/${id}`}>
            {image == 'IcelandLupin' && <IcelandLupin/>}
            {image == 'MistyValley' && <MistyValley/>}
            {image == 'NeonCity' && <NeonCity/>}
            {image == 'NightMountains' && <NightMountains/>}
            {image == 'SunsetDesert' && <SunsetDesert/>}
            {image == '' && <Default/>}
            {image == 'Default' && <Default/>}
          </Link>
          <div className="w-full px-2 absolute backdrop-blur-sm">
            <p className="capitalize text-center text-lg font-play overflow-x-auto whitespace-nowrap scroll-m-0">{name}</p>
            <CardButtons id={id} name={name} image={image}/>
          </div>
        </div>
      </div>
    )
}