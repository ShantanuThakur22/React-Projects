import React from 'react'
import Children from './Children'

function Wrapper({children}) {
  return (
    <div>
      {children}
      <Children/>
    </div>
  )
}

export default Wrapper
