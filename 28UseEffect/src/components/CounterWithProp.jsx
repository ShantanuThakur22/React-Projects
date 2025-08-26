import React from 'react'
import { useEffect } from 'react'

function CounterWithProp({count,data}) {
   const handleCounter=  ()=>{
    console.log("counter called")
   }


   useEffect(handleCounter,[])
  return (
    <div>
      <h3>Counter with Prop {count}</h3>
    </div>
  )
}

useEffect(
    ()=> console.log("data fun called"),[data])

export default CounterWithProp
