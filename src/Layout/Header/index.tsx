import React from 'react'
import * as style from './Header.module.scss'
import { Link } from '@/shared'

const Header = (): JSX.Element => {
  const navLinks: {
    linkUrl: string
    linkName: string
  }[] = [
    {
      linkUrl: '/',
      linkName: 'Home',
    },
    {
      linkUrl: '/works',
      linkName: 'Works',
    },
    {
      linkUrl: '/about',
      linkName: 'About',
    },
  ]
  return (
    <>
      <div data-animation='header' className={style.header}>
        <Link
          className={style.header__icon}
          aria-label='home'
          href={'/'}
          data-cursor='link'>
          LOGO
        </Link>

        <nav>
          {navLinks.map(link => (
            <Link
              key={link.linkUrl}
              activeClassName={style.active}
              href={link.linkUrl}
              data-txt={link.linkName}
              aria-label={link.linkName}
              data-animation='link'
              data-cursor='link'>
              {link.linkName}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}

export default Header
