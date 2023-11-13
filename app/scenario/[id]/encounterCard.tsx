import { getEncounterById } from "@/app/api/encounter/encounter"

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