import React from 'react'

function User({name,obj}) {
  return (
    <div>
      User Components {name}
      <p>{obj.name}</p>
      <p>{obj.id}</p>
      <p>{obj.age}</p>
    </div>
  )
}

export default User
