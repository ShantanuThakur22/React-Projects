import React, {useState,useEffect} from 'react'

function Clock({color}) {
    const[time,setTime]= useState("")
    

    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        },1000)
    },[time])
  return (
    <div>
        
      <h3 className='text-green-500 bg-black w-40 p-4 ml-4 mt-6' style={color={color}}>{time}</h3>
    </div>
  )
}

export default Clock
