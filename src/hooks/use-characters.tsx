import { useEffect, useMemo, useState } from 'react'
import { Character } from '../interfaces/character'
import { PaginatedResponse } from '../interfaces/pagination'
import { getCharacters } from '../services/character'
import { INITIAL_PAGE } from '../lib/constants'
import useSearch from './use-search'

const useCharacters = () => {
  const [characters, setCharacters] = useState<PaginatedResponse<Character[]> | null>(null)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [loadingCharacters, setLoadingCharacters] = useState(true)
  const { search, onSetSearch} = useSearch()

  useEffect(() => {
    getCharacters(page).then((response) => {
      setCharacters(response.data)
    }).finally(() => setLoadingCharacters(false))
  }, [page])

  const filteredCharacters = useMemo(() => {
    return search
      ? characters?.results.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
      : characters?.results
  }, [search, characters])

  const handleNextPage = () => {
    if (characters?.info.next) {
      setPage((prevPage) => prevPage + 1)
    }
  }

  const handlePreviousPage = () => {
    if (characters?.info.prev) {
      setPage((prevPage) => prevPage - 1)
    }
  }

  return { characters, search, filteredCharacters, handleNextPage, handlePreviousPage, onSetSearch, loadingCharacters }
}

export default useCharacters
