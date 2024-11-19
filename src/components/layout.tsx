import { PropsWithChildren } from "react"

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className='max-w-screen-xl mx-auto my-2'>
        {children}
    </main>
  )
}

export default Layout