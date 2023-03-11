/* eslint-disable quotes */
import gsap from 'gsap'
import React from 'react'
import { Link as GatsbyLink, navigate } from 'gatsby'

export function Link({ href, children, ...rest }) {
  if (
    typeof href === 'string' &&
    (href.startsWith('http') || href.startsWith('mailto'))
  ) {
    return (
      <a href={href} target='_blank' rel='noopener noreferrer' {...rest}>
        {children}
      </a>
    )
  }

  return (
    <GatsbyLink
      onClick={e => {
        e.preventDefault()
        if (window.location.pathname !== href) {
          gsap
            .timeline()
            .to("[data-animation='transition']", {
              y: 0,
              ease: 'expo.inOut',
              duration: 1.5,
            })
            .set('body', {
              backgroundColor: 'rgb(250, 198, 180)',
            })
            .to("[data-animation='transition'] .char", {
              opacity: 1,
              stagger: { each: 0.025, from: 'random' },
            })
            .to("[data-animation='transition'] .char", {
              delay: 1.5,
              opacity: 0,
              stagger: { each: 0.025, from: 'random' },
            })
            .to("[data-animation='transition']", {
              y: '100%',
            })
            .set("[data-animation='transition'] .char", {
              opacity: 0,
            })
            .set("[data-animation='transition']", {
              y: '-100%',
              ease: 'expo.inOut',
              duration: 1.5,
            })

          setTimeout(() => {
            navigate(href)
            window.scroll(0, 0)
          }, 1500)
        }
      }}
      to={href}
      {...rest}>
      {children}
    </GatsbyLink>
  )
}
