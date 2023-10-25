import { createMonster } from "@/prisma/scripts/monster"
import { z } from "zod"
import { revalidatePath } from "next/cache"
import Weak from '/public/icons/monsters/size-1.svg'
import Typical from '/public/icons/monsters/size-2.svg'
import Tough from '/public/icons/monsters/size-3.svg'
import Hulking from '/public/icons/monsters/size-4.svg'
import Colossal from '/public/icons/monsters/size-5.svg'
import Boss from '/public/icons/monsters/size-final.svg'


const schema = z.object({
  name: z.string(),
  background: z.string()
})

export default async function Add() {
  
  async function create(formData: FormData) {
    'use server'

    const parsed = schema.parse({
      name: formData.get('name'),
      background: formData.get('background')
    })

    try {
      const response = await createMonster(parsed.name, parsed.background)
    }
    catch (e) {
      return { message: 'Failed to create' }
    }
    
    return revalidatePath('/')
  }
 
  return (
      <form className="flex flex-col space-y-2 py-2" action={create}>
        <label htmlFor='name'>Name</label>
        <input type="text" id="name" name='name'></input>
        <label htmlFor='background'>Background</label>
        <input type="text" id="background" name='background'></input>
        <h3>Size</h3>
        <fieldset className="monster-radio">
          <span>
          <input type="radio" id="size_1" name='size'/>
          <label htmlFor='size_1'>
            <Weak className='form-icon'/>
            Weak
          </label>
          </span>
          <span>
          <input type="radio" id="size_2" name='size'/>
          <label htmlFor='size_2'>
            <Typical className='form-icon'/>
            Typical
          </label>
          </span>
          <span>
          <input type="radio" id="size_3" name='size'/>
          <label htmlFor='size_3'>
            <Tough className='form-icon'/>
            Tough
          </label>
          </span>
          <span>
          <input type="radio" id="size_4" name='size'/>
          <label htmlFor='size_4'>
            <Hulking className='form-icon'/>
            Hulking
          </label>
          </span>
          <span>
          <input type="radio" id="size_5" name='size'/>
          <label htmlFor='size_5'>
            <Colossal className='form-icon'/>
            Colossal
          </label>
          </span>
          <span>
          <input type="radio" id="size_6" name='size'/>
          <label htmlFor='size_6'>
            <Boss className='form-icon'/>
            Boss
          </label>
          </span>
        </fieldset>
        <fieldset className="monster-str">
          <span>
            <input type="radio" id="str_0" name='str'/>
            <label htmlFor='str_0'>0</label>
          </span>
          <span>
            <input type="radio" id="str_1" name='str'/>
            <label htmlFor='str_1'>1</label>
          </span>
          <span>
            <input type="radio" id="str_2" name='str'/>
            <label htmlFor='str_2'>2</label>
          </span>
          <span>
            <input type="radio" id="str_3" name='str'/>
            <label htmlFor='str_3'>3</label>
          </span>
        </fieldset>
        <span className="bg-white">
          <svg width="100" height="100" viewBox="0 0 2550 2550" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2118.33 1305L2118.33 1300L2113.33 1300L2113.33 1305L2118.33 1305ZM2525 1305L2530 1305L2530 1300L2525 1300L2525 1305ZM1305 2118.33L1305 2113.33L1300 2113.33L1300 2118.33L1305 2118.33ZM1305 2525L1300 2525L1300 2530L1305 2530L1305 2525ZM2118.33 1310L2525 1310L2525 1300L2118.33 1300L2118.33 1310ZM2113.33 1305C2113.33 1742.79 1742.79 2113.33 1305 2113.33L1305 2123.33C1748.32 2123.33 2123.33 1748.32 2123.33 1305L2113.33 1305ZM1310 2525L1310 2118.33L1300 2118.33L1300 2525L1310 2525ZM2520 1305C2520 1963.07 1963.07 2520 1305 2520L1305 2530C1968.59 2530 2530 1968.59 2530 1305L2520 1305Z" fill="black"/>
            <path d="M1305 1305L1711.67 1305C1711.67 1525.28 1525.28 1711.67 1305 1711.67L1305 1305Z" stroke="black" stroke-width="10"/>
            <path d="M2118.33 1305L2123.33 1305L2123.33 1300L2118.33 1300L2118.33 1305ZM1305 2118.33L1300 2118.33L1300 2123.33L1305 2123.33L1305 2118.33ZM1305 1305L1305 1300L1300 1300L1300 1305L1305 1305ZM1305 1305L1305 1300L1300 1300L1300 1305L1305 1305ZM1711.67 1305L1716.67 1305L1716.67 1300L1711.67 1300L1711.67 1305ZM1305 1711.67L1300 1711.67L1300 1716.67L1305 1716.67L1305 1711.67ZM2113.33 1305C2113.33 1742.79 1742.79 2113.33 1305 2113.33L1305 2123.33C1748.32 2123.33 2123.33 1748.32 2123.33 1305L2113.33 1305ZM1305 1310L2118.33 1310L2118.33 1300L1305 1300L1305 1310ZM1310 2118.33L1310 1305L1300 1305L1300 2118.33L1310 2118.33ZM1305 1310L1711.67 1310L1711.67 1300L1305 1300L1305 1310ZM1310 1711.67L1310 1305L1300 1305L1300 1711.67L1310 1711.67ZM1706.67 1305C1706.67 1522.52 1522.52 1706.67 1305 1706.67L1305 1716.67C1528.04 1716.67 1716.67 1528.04 1716.67 1305L1706.67 1305Z" fill="black"/>
            <path d="M1245 2118.33L1250 2118.33L1250 2113.33L1245 2113.33L1245 2118.33ZM1245 2525L1245 2530L1250 2530L1250 2525L1245 2525ZM431.667 1305L436.667 1305L436.667 1300L431.667 1300L431.667 1305ZM25 1305L25 1300L20 1300L20 1305L25 1305ZM1240 2118.33L1240 2525L1250 2525L1250 2118.33L1240 2118.33ZM1245 2113.33C807.206 2113.33 436.667 1742.79 436.667 1305L426.667 1305C426.667 1748.32 801.683 2123.33 1245 2123.33L1245 2113.33ZM25 1310L431.667 1310L431.667 1300L25 1300L25 1310ZM1245 2520C586.928 2520 30 1963.07 30 1305L20 1305C20 1968.59 581.405 2530 1245 2530L1245 2520Z" fill="black"/>
            <path d="M1245 1305L1245 1711.67C1024.72 1711.67 838.333 1525.28 838.333 1305L1245 1305Z" stroke="black" stroke-width="10"/>
            <path d="M431.668 1305L431.668 1300L426.668 1300L426.668 1305L431.668 1305ZM838.335 1305L843.335 1305L843.335 1300L838.335 1300L838.335 1305ZM1245 2118.33L1245 2123.33L1250 2123.33L1250 2118.33L1245 2118.33ZM1245 1711.67L1250 1711.67L1250 1706.67L1245 1706.67L1245 1711.67ZM431.668 1310L838.335 1310L838.335 1300L431.668 1300L431.668 1310ZM1245 2113.33C807.207 2113.33 436.668 1742.79 436.668 1305L426.668 1305C426.668 1748.32 801.684 2123.33 1245 2123.33L1245 2113.33ZM1240 1711.67L1240 2118.33L1250 2118.33L1250 1711.67L1240 1711.67ZM1245 1706.67C1027.48 1706.67 843.335 1522.52 843.335 1305L833.335 1305C833.335 1528.04 1021.96 1716.67 1245 1716.67L1245 1706.67Z" fill="black"/>
            <path d="M1305 431.667H1300V436.667H1305V431.667ZM1305 25V20H1300V25H1305ZM2118.33 1245H2113.33V1250H2118.33V1245ZM2525 1245V1250H2530V1245H2525ZM1310 431.667V25H1300V431.667H1310ZM1305 436.667C1742.79 436.667 2113.33 807.206 2113.33 1245H2123.33C2123.33 801.683 1748.32 426.667 1305 426.667V436.667ZM2525 1240H2118.33V1250H2525V1240ZM1305 30C1963.07 30 2520 586.928 2520 1245H2530C2530 581.405 1968.59 20 1305 20V30Z" fill="black"/>
            <path d="M1305 1245V838.333C1525.28 838.333 1711.67 1024.72 1711.67 1245H1305Z" stroke="black" stroke-width="10"/>
            <path d="M1305 838.333H1300V843.333H1305V838.333ZM1305 431.667V426.667H1300V431.667H1305ZM1711.67 1245H1706.67V1250H1711.67V1245ZM2118.33 1245V1250H2123.33V1245H2118.33ZM1310 838.333V431.667H1300V838.333H1310ZM1305 843.333C1522.52 843.333 1706.67 1027.48 1706.67 1245H1716.67C1716.67 1021.96 1528.04 833.333 1305 833.333V843.333ZM2118.33 1240H1711.67V1250H2118.33V1240ZM1305 436.667C1742.79 436.667 2113.33 807.206 2113.33 1245H2123.33C2123.33 801.683 1748.32 426.667 1305 426.667V436.667Z" fill="black"/>
            <path d="M431.667 1245V1250H436.667L436.667 1245L431.667 1245ZM25 1245L20 1245L20 1250H25V1245ZM1245 431.667V436.667H1250L1250 431.667L1245 431.667ZM1245 25L1250 25L1250 20L1245 20L1245 25ZM431.667 1240H25V1250H431.667V1240ZM436.667 1245C436.667 807.206 807.206 436.667 1245 436.667V426.667C801.683 426.667 426.667 801.683 426.667 1245L436.667 1245ZM1240 25L1240 431.667L1250 431.667L1250 25L1240 25ZM30 1245C30 586.928 586.928 30 1245 30L1245 20C581.405 20 20 581.405 20 1245L30 1245Z" fill="black"/>
            <path d="M1245 1245L838.333 1245C838.333 1024.72 1024.72 838.333 1245 838.333L1245 1245Z" stroke="black" stroke-width="10"/>
            <path d="M1245 1245L1246.21 1249.85L1250 1248.9L1250 1245L1245 1245ZM1245 1245H1240V1251.4L1246.21 1249.85L1245 1245ZM1245 431.667L1250 431.667L1250 426.667L1245 426.667L1245 431.667ZM431.667 1245L426.667 1245L426.667 1250L431.667 1250L431.667 1245ZM838.333 1245L838.333 1250L843.333 1250V1245H838.333ZM1245 838.333H1250V833.333L1245 833.333L1245 838.333ZM1243.79 1240.15L1243.79 1240.15L1246.21 1249.85L1246.21 1249.85L1243.79 1240.15ZM1240 431.667L1240 1245L1250 1245L1250 431.667L1240 431.667ZM436.667 1245C436.667 807.206 807.206 436.667 1245 436.667L1245 426.667C801.683 426.667 426.667 801.683 426.667 1245L436.667 1245ZM838.333 1240L431.667 1240L431.667 1250L838.333 1250L838.333 1240ZM843.333 1245C843.333 1027.48 1027.48 843.333 1245 843.333L1245 833.333C1021.96 833.333 833.333 1021.96 833.333 1245H843.333ZM1240 838.333V1245H1250V838.333H1240Z" fill="black"/>
          </svg>
        </span>
        <span className="flex flex-row-reverse w-full justify-between items-center">
          <button type='submit'>Submit</button>
          <button className="cancel">Cancel</button>
        </span>
      </form>
  )
}