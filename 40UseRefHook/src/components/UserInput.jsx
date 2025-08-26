import React from 'react'

function UserInput(props) {
  return (
    <div>
      <input type="text" ref={props.ref}/>
    </div>
  )
}

export default UserInput
