import { getLocationById, updateLocation } from "@/prisma/scripts/location"
import { z } from "zod"

import Boat from '/public/icons/locations/boat.svg'
import Building from '/public/icons/locations/building.svg'
import Campground from '/public/icons/locations/campground.svg'
import City from '/public/icons/locations/city.svg'
import Dungeon from '/public/icons/locations/dungeon.svg'
import Entrance from '/public/icons/locations/entrance.svg'
import Factory from '/public/icons/locations/factory.svg'
import Hideout from '/public/icons/locations/hideout.svg'
import Home from '/public/icons/locations/home.svg'
import Hospital from '/public/icons/locations/hospital.svg'
import Institution from '/public/icons/locations/institution.svg'
import Landmark from '/public/icons/locations/landmark.svg'
import LocationIcon from '/public/icons/locations/location.svg'
import Medical from '/public/icons/locations/medical.svg'
import Mountain from '/public/icons/locations/mountain.svg'
import Mountown from '/public/icons/locations/mountown.svg'
import Obelisk from '/public/icons/locations/obelisk.svg'
import Outpost from '/public/icons/locations/outpost.svg'
import Ship from '/public/icons/locations/ship.svg'
import Store from '/public/icons/locations/store.svg'
import Tent from '/public/icons/locations/tent.svg'
import Volcano from '/public/icons/locations/volcano.svg'
import Warehouse from '/public/icons/locations/warehouse.svg'
import Worship from '/public/icons/locations/worship.svg'

export default async function Location({
    params 
  }: { 
    params: { id: number } 
  }) {
    const data = await getLocationById(Number(params.id))

    return (
      <div className="p-1">
        <span className="flex flex-row items-center rounded justify-between w-full h-10">
          <span className="flex gap-2 grow items-center">
            <svg className="h-10 aspect-square" fill={data.color} viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40"></circle>
            </svg>
            <span className="flex-grow whitespace-nowrap overflow-clip">
              <p className="capitalize font-play text-2xl">{data.name}</p>
            </span>
          </span>
          {data.icon == 'boat' && <Boat className='h-full aspect-square fill-primary-light'/>}
          {data.icon == 'building' && <Building className='h-full aspect-square fill-primary-light'/>}
          {data.icon == 'campground' && <Campground className='h-full aspect-square fill-primary-light'/>}
          {data.icon == 'city' && <City className='h-full aspect-square fill-primary-light'/>}
          {data.icon == 'dungeon' && <Dungeon className='h-full aspect-square fill-primary-light'/>}
          {data.icon == 'entrance' && <Entrance className='h-full aspect-square fill-primary-light'/>}
          {data.icon == 'factory' && <Factory className='h-full aspect-square fill-primary-light'/>}
          {data.icon == 'hideout' && <Hideout className='h-full aspect-square fill-primary-light'/>}
          {data.icon == 'home' && <Home className='h-full aspect-square fill-primary-light'/>}
          {data.icon == 'hospital' && <Hospital className='h-full aspect-square fill-primary-light'/>}
          {data.icon == 'institution' && <Institution className='h-full aspect-square fill-primary-light'/>}
          {data.icon == 'landmark' && <Landmark className='h-full aspect-square fill-primary-light'/>}
          {data.icon == 'location' && <LocationIcon className='h-full aspect-square fill-primary-light'/>}
          {data.icon == 'medical' && <Medical className='h-full aspect-square fill-primary-light'/>}
          {data.icon == 'mountain' && <Mountain className='h-full aspect-square fill-primary-light'/>}
          {data.icon == 'mountown' && <Mountown className='h-full aspect-square fill-primary-light'/>}
          {data.icon == 'obelisk' && <Obelisk className='h-full aspect-square fill-primary-light'/>}
          {data.icon == 'outpost' && <Outpost className='h-full aspect-square fill-primary-light'/>}
          {data.icon == 'ship' && <Ship className='h-full aspect-square fill-primary-light'/>}
          {data.icon == 'store' && <Store className='h-full aspect-square fill-primary-light'/>}
          {data.icon == 'tent' && <Tent className='h-full aspect-square fill-primary-light'/>}
          {data.icon == 'volcano' && <Volcano className='h-full aspect-square fill-primary-light'/>}
          {data.icon == 'warehouse' && <Warehouse className='h-full aspect-square fill-primary-light'/>}
          {data.icon == 'worship' && <Worship className='h-full aspect-square fill-primary-light'/>}
        </span>
        <p className="mt-2">{data.description}</p>
      </div>
    )
}