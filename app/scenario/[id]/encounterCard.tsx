import { getEncounterById } from "@/prisma/scripts/encounter"

export default async function EncounterCard({
    id
  }: {
    id: number
  }) {
    const encounter = await getEncounterById(id)

    return (
        <div>
            <p>{encounter.name}</p>
            <p></p>
        </div>
    )
}