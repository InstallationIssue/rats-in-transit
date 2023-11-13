import prisma from "../main"

export async function getItems(){
    return await prisma.item.findMany({
        select: {
            id          : true,
            name        : true,
            description : true,
            value       : true
        }
    })
}

export async function createItem(name: string, description: string, value: number){
    const item = await prisma.item.create({
        data: {
            name        : name,
            description : description,
            value       : value
        }
      })
    return item
}

export async function updateItem(id: number, name?: string, description?: string, value?: number) {
    const item = await prisma.item.update({
        where: {
            id: id
        },
        data: {
            name        : name,
            description : description,
            value       : value
        }
    })
    return item
}

export async function getItemById(id: number){
    return await prisma.item.findUniqueOrThrow({
        where: {
            id: id
        },
        select: {
            name        : true,
            description : true,
            value       : true
        }
    })
}

export async function deleteItem(id: number){
    return await prisma.item.delete({
        where: {
            id: id
        }
    })
}