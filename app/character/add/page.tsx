import { createCharacter } from "@/prisma/scripts/character"
import { z } from "zod"
import { revalidatePath } from "next/cache"


const schema = z.object({
  name: z.string(),
  setting: z.string()
})

export default async function Add() {
  
  async function create(formData: FormData) {
    'use server'

    const parsed = schema.parse({
      name: formData.get('name'),
      setting: formData.get('setting'),
    })

    try {
      const response = await createCharacter(parsed.name, parsed.setting)
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
        <label htmlFor='setting'>Setting</label>
        <input type="text" id="setting" name='setting'></input>
        <button type='submit'>Submit</button>
      </form>
  )
}