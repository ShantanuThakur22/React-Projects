import React from 'react'
import { useState } from 'react'

function DerivedState() {
    const [users,setUsers]= useState([])
    const [user,setUser]= useState('')

    const handleBtn= ()=>{
        setUsers([...users,user])
        setUser("")
    }
  return (
    <div>
        <h2>Total Users: {users.length}</h2>
        <h2>Last user added: {users[users.length-1]}</h2>
        <h2>Unique User : {[...new Set(users)].length}</h2>
      <input type="text" placeholder='Enter name' value={user} onChange={(e)=> setUser(e.target.value)}/>
      <button onClick={handleBtn}>Add User</button>
      {
        users.map((item,index)=>(
            <ul key={index}>
                <li>{item}</li>
            </ul>
        ))
      }
    </div>
  )
}

export default DerivedState

/**
 * !Set is a built-in JavaScript object that only keeps unique values.

!When you do new Set(users), it creates a new set containing only the unique values from your users array.
 */