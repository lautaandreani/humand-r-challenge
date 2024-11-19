import { Link, useParams } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'
import { getCharacter } from '../services/character'
import { Character } from '../interfaces/character'
import CharacterDetail from '../components/character-detail'
import Layout from '../components/layout'
import Spinner from '../components/ui/spinner'

function CharacterPage() {
  const params = useParams<{ id: string }>()
  const [loading, setLoading] = useState(true)
  const [character, setCharacter] = useState<Character | null>(null)

  useEffect(() => {
    getCharacter(Number(params.id))
      .then((response) => {
        setCharacter(response.data)
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <Spinner />

  if (!character)
    return (
      <div className='flex justify-center flex-col items-center'>
        <h1 className='text-3xl text-center'>Personaje no encontrado</h1>
        <Link to='/'>← Volver al inicio</Link>
      </div>
    )

  return (
    <Layout>
      <Link to='/'>← Volver al inicio</Link>
      <div className='bg-gray-200 p-2 rounded'>
        <CharacterDetail character={character} />
      </div>
    </Layout>
  )
}

export default CharacterPage
