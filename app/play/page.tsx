import { getScenarioById } from "@/prisma/scripts/scenario"

import Default from '/public/landscapes/Default.svg'
import IcelandLupin from '/public/landscapes/Iceland-Lupin.svg'
import MistyValley from '/public/landscapes/Misty-Valley.svg'
import NeonCity from '/public/landscapes/Neon-City.svg'
import NightMountains from '/public/landscapes/Night-Mountains.svg'
import SunsetDesert from '/public/landscapes/Sunset-Desert.svg'
import { Metadata } from "next"
import Event from "../(reference)/scenario/event"
import Thread from "../(reference)/scenario/thread"

export const metadata: Metadata = {
  title: 'Play'
}

export default async function Play() {
    const scenario = await getScenarioById(18);

    return (
      <div className="w-full h-full flex flex-col gap-2 p-2">
        <div className="relative overflow-clip rounded-lg border flex h-16">
          <p className="w-full font-play text-2xl bg-secondary-dark bg-opacity-40 px-2 backdrop-blur-sm h-fit self-center">{scenario.name}</p>
          <div className="absolute -z-10 left-0 w-full -top-1/2">
            {scenario.image == 'IcelandLupin' && <IcelandLupin/>}
            {scenario.image == 'MistyValley' && <MistyValley/>}
            {scenario.image == 'NeonCity' && <NeonCity/>}
            {scenario.image == 'NightMountains' && <NightMountains/>}
            {scenario.image == 'SunsetDesert' && <SunsetDesert/>}
            {scenario.image == '' && <Default/>}
            {scenario.image == 'Default' && <Default/>}
          </div>
        </div>
        <div className="flex flex-row gap-2 h-full">
          <div className="flex flex-col w-1/3 h-full border rounded-lg overflow-clip p-1 gap-2">
            <div className="relative -m-1 border border-x-0 border-t-0">
              {scenario.image == 'IcelandLupin' && <IcelandLupin/>}
              {scenario.image == 'MistyValley' && <MistyValley/>}
              {scenario.image == 'NeonCity' && <NeonCity/>}
              {scenario.image == 'NightMountains' && <NightMountains/>}
              {scenario.image == 'SunsetDesert' && <SunsetDesert/>}
              {scenario.image == '' && <MistyValley/>}
              <p className="w-full absolute z-10 top-0 bg-slate-500 bg-opacity-60 invisible">{scenario.description}</p>
            </div>
            <p className="font-play font-bold text-lg">Story Threads</p>
            <div className="flex flex-col gap-1">
              {scenario.threads.map((id) => (
                <Thread key={id.id} id={id.id} name={id.name} description={id.description}/>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-2/3 h-full gap-2">
            <div className="border rounded-lg p-1">
              <p className="font-play font-bold text-lg">Setting</p>
              <div className="font-roboto first-letter:capitalize">
                {scenario.setting}
              </div>
            </div>
            <div className="border rounded-lg p-1 flex-grow">
              <p className="font-play font-bold text-lg">Events</p>
              <div className="flex flex-col gap-1">
                {scenario.events.map((id) => (
                  <Event key={id.id} id={id.id} name={id.name} description={id.description}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}