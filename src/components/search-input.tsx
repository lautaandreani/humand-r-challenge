type SearchInputProps = React.InputHTMLAttributes<HTMLInputElement>

const SearchInput = ({ ...props }: SearchInputProps) => {
  return <input type='text' placeholder='Morty, Rick...' className='border w-full mb-2' {...props} />
}

export default SearchInput
