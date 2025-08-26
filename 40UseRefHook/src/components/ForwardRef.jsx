import React, { useRef } from 'react'
import UserInput from './UserInput'

function ForwardRef() {
    const inputRef= useRef(null)

    function updateInput(){
        console.log("function called")
        inputRef.current.value= 1000
        inputRef.current.focus()
        inputRef.current.style.color= 'red'
    }
  return (
    <div>
      <h1>Forward Ref</h1>
      <UserInput ref={inputRef}/>
      <button onClick={updateInput}>Update Input Field</button>
    </div>
  )
}

export default ForwardRef
