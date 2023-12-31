import HealthCircle from "./vitality"

import Strength from '/public/icons/stats/strength.svg'
import Dexterity from '/public/icons/stats/dexterity.svg'
import Willpower from '/public/icons/stats/willpower.svg'
import Attack from '/public/icons/stats/attack.svg'

import Weak from '/public/icons/beings/size-1.svg'
import Typical from '/public/icons/beings/size-2.svg'
import Tough from '/public/icons/beings/size-3.svg'
import Hulking from '/public/icons/beings/size-4.svg'
import Colossal from '/public/icons/beings/size-5.svg'
import Boss from '/public/icons/beings/size-final.svg'

export default function AlertMonster ({
    params
  }: { 
    params: {
      id: number,
      name: string,
      background: string,
      health_max: number,
      health_lost: number,
      armor: number,
      str: number,
      dex: number,
      wil: number,
      size: string,
      attack: number
  }}) {
    return (
      <div className="flex flex-row justify-center items-start self-stretch rounded-md border w-80 p-2 h-20 border-primary-dark">
        <div className="flex flex-grow justify-center items-start self-stretch gap-2">
          <HealthCircle
            health_max={params.health_max}
            health_lost={params.health_lost}
            armor={params.armor}/>
          <div className="flex flex-col flex-grow self-stretch justify-between">
            <p>{params.name}</p>
            <div className="flex items-center gap-3 self-stretch">
              <div>
                <Strength className='aspect-square h-5 fill-primary-light cursor-pointer'/>
                <p>{params.str}</p>
              </div>
              <div>
                <Dexterity className='aspect-square h-5 fill-primary-light cursor-pointer'/>
                <p>{params.dex}</p>
              </div>
              <div>
                <Willpower className='aspect-square h-5 fill-primary-light cursor-pointer'/>
                <p>{params.wil}</p>
              </div>
              <div>
                <Attack className='aspect-square h-5 fill-primary-light cursor-pointer'/>
                <p>{params.attack}</p>
              </div>
            </div>
          </div>
        </div>
        {params.size == 'Weak' && <Weak className='h-full aspect-square fill-primary-light'/>}
        {params.size == 'Typical' && <Typical className='h-full aspect-square fill-primary-light'/>}
        {params.size == 'Tough' && <Tough className='h-full aspect-square fill-primary-light'/>}
        {params.size == 'Hulking' && <Hulking className='h-full aspect-square fill-primary-light'/>}
        {params.size == 'Colossal' && <Colossal className='h-full aspect-square fill-primary-light'/>}
        {params.size == 'Boss' && <Boss className='h-full aspect-square fill-primary-light'/>}
      </div>
    )
}