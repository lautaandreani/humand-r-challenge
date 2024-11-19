import { PropsWithChildren } from 'react'

type ButtonProps = PropsWithChildren & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ disabled, ...props }: ButtonProps) => {
  return (
    <button
      type='button'
      className={`text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${disabled ? 'bg-gray-300 text-gray-500 pointer-events-none hover:bg-gray-300' : 'bg-blue-500 text-white'}`}
      {...props}
    >
      {props.children}
    </button>
  )
}

export default Button
