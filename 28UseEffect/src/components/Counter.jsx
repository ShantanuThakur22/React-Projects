import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Counter() {

  const[counter,setCounter]= useState(0)
  const[data,setData]= useState(0)

  useEffect(()=>{
    callOnce()
  },[counter])

  function callOnce(){
    console.log("function called")
  }
  
  return (
    <div>
      <button onClick={()=> setCounter(counter+1)}>Counter: {counter}</button>
      <button onClick={()=> setData(data+1)}>data: {data}</button>
    </div>
  )
}

export default Counter
