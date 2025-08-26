import React,{useRef} from 'react'

function UseRefHook() {
    const inputRef= useRef(null)

    function handleInput(){
        inputRef.current.focus()
        inputRef.current.style.color= 'red'
        inputRef.current.placeholder= 'Aao raja'
    }
  return (
    <div>
      <h3>All about UseRef Hook</h3>
      <input type="text" placeholder='Type Something' ref={inputRef}/>
      <button onClick={handleInput}>Click to focus on Input field</button>
    </div>
  )
}

export default UseRefHook
