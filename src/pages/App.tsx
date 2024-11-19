import './App.css'
import CharacterCard from '../components/character-card'
import useCharacters from '../hooks/use-characters'
import Button from '../components/ui/button'
import Layout from '../components/layout'
import SearchInput from '../components/search-input'
import Spinner from '../components/ui/spinner'

function App() {
  const { characters, filteredCharacters, search, loadingCharacters, handleNextPage, onSetSearch, handlePreviousPage } = useCharacters()

  if (loadingCharacters) return <Spinner />

  return (
    <Layout>
      <h1 className='text-3xl text-center'>Rick And Morty</h1>
      <p>Resultados: {characters?.info.count}</p>

      <SearchInput onChange={(e) => onSetSearch(e.target.value)} defaultValue={search}/>

      {!filteredCharacters?.length ? (
        <p className='text-center text-gray-600'>No se encontraron resultados</p>
      ) : (
        <section className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4'>
          {filteredCharacters?.map((character) => {
            return <CharacterCard key={character.id} character={character} />
          })}
        </section>
      )}

      <footer className='flex w-full justify-center items-center mx-auto mt-4'>
        <Button onClick={handlePreviousPage} disabled={!characters?.info.prev} aria-label='Anterior pagina'>
          Previous
        </Button>
        <Button onClick={handleNextPage} disabled={!characters?.info.next} aria-label='Siguiente pagina'>
          Next
        </Button>
      </footer>
    </Layout>
  )
}

export default App
