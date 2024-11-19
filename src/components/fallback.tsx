import { useRouteError } from 'react-router-dom'

const Fallback = () => {
  let error = useRouteError()
  console.error(error)

  return (
    <div className='text-center'>
      <p>Ops... Algo salió mal:</p> Intenta nuevamente
    </div>
  )
}

export default Fallback
