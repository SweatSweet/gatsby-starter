import React, { ReactNode, useCallback, useRef } from 'react'
import { useIsomorphicLayoutEffect } from '@/hooks'

import SEO from '@/components/SEO'
import Preloader from './Preloader'
import Header from './Header'
import Footer from './Footer'
import Cursor from './Cursor'

interface ILayout {
  children: ReactNode
  page: string
}

const Layout = ({ children, page }: ILayout): JSX.Element => {
  const hasInit = useRef<boolean>(false)
  const preload = useRef<any>(null)

  const init = useCallback(async () => {
    const App = (await import('@/animations')).App
    new App({ page })
  }, [])

  useIsomorphicLayoutEffect(() => {
    !hasInit.current && init()
    return () => {
      hasInit.current = true
    }
  }, [init])

  if (typeof window !== 'undefined') {
    preload.current = sessionStorage.getItem('preloader')
  }

  return (
    <main>
      {!preload.current && <Preloader />}
      <Header />
      <Cursor />
      <SEO />

      <div data-animation={page}>{children}</div>
      <Footer />
    </main>
  )
}

export default Layout
