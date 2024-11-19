import { Link } from 'react-router-dom'
import { Character } from '../interfaces/character'

type CharacterCardProps = {
  character: Character
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <Link to={`/${character.id}`}>
    <div className='border p-2 rounded'>
      <img src={character.image} alt={character.name} className='rounded' />
      <h2>{character.name}</h2>
      <p>{character.species}</p>
    </div>
    </Link>
  )
}

export default CharacterCard
