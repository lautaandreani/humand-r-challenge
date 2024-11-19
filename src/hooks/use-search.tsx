import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const useSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState('')

  const onSetSearch = (value: string) => {
    setSearch(value)
  }

  useEffect(() => {
    if (search === '') {
        setSearchParams({})
        return
      }
  
      setSearchParams({ search })
  }, [search])

  useEffect(() => {
    const search = searchParams.get('search') || ''
    setSearch(search)
  }, [])

  return { search, onSetSearch }
}

export default useSearch
