import type { ReactNode } from 'react'
import Nav from './Nav'

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='flex md:pl-20 md:cursor-custom'>
      <Nav />
      <main className='flex-grow'>
        {children}
      </main>
    </div>
  )
}

export default Layout
