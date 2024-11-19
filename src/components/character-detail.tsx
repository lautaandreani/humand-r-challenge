import { Character } from '../interfaces/character'
import StatusPill from './ui/pill'

type CharacterDetailProps = {
  character: Character
}

const CharacterDetail = ({ character }: CharacterDetailProps) => {
  return (
    <>
      <h3 className='text-3xl font-medium'>{character.name}</h3>
      <section className='flex gap-2 mx-auto'>
        <aside className='border p-2 rounded-md'>
          <img src={character.image} alt={character.image} className='size-96' />
        </aside>
        <aside>
          <div className="flex items-center gap-2">
          <h3 className='text-xl'>{character.name}</h3> - <StatusPill status={character.status}/>
          </div>
          <ul className='[&>li]:list-disc'>
            <li>Specie: {character.species || character.type}</li>
            <li>Location: {character.location.name}</li>
            <li>Episodes: {character.episode.length}</li>
          </ul>
        </aside>
      </section>
    </>
  )
}

export default CharacterDetail
