import React from 'react'
import { useContext } from 'react'
import { counterContext} from '../Context/Context'

function Counter() {
    const conterChange= useContext(counterContext)
  return (
    <div>
      <button onClick={()=> conterChange.setCount(conterChange.count+1)}>Increament</button>
      <button onClick={()=> conterChange.setCount(conterChange.count-1  )}>Decreament</button>
    </div>
  )
}

export default Counter
