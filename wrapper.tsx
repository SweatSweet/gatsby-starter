import * as React from 'react'
import Transition from './src/Layout/Transition'

const Wrapper = ({ element }) => {
  return (
    <>
      <Transition />
      {element}
    </>
  )
}

export default Wrapper
