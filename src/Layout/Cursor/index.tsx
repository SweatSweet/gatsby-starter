import React, { useState } from 'react'
import { useMousePosition } from '@/hooks'
import * as styles from './Cursor.module.scss'

import { useRef, useEffect, ReactElement } from 'react'
import gsap from 'gsap/src/all'

const Cursor = (): ReactElement => {
  const { x, y, cursor } = useMousePosition()
  const main = useRef(null)
  const [scale, setScale] = useState<number>(1)

  useEffect(() => {
    if (cursor === 'link') {
      setScale(0.3)
    } else {
      setScale(1)
    }
  }, [cursor])

  useEffect(() => {
    gsap.to(main.current, {
      top: y,
      left: x,
      x: '-50%',
      y: '-50%',
      scale: scale,
      backgroundColor: cursor === 'view' ? 'rgba(255, 225, 183, 0.2)' : 'transparent',
      ease: 'none',
      duration: 0.15,
    })
  }, [x, y, scale])

  return (
    <>
      <div ref={main} className={styles.cursorStyle} />
    </>
  )
}

export default Cursor
