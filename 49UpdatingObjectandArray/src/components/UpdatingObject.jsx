import React from 'react'
import { useState } from 'react'

function UpdatingObject() {

    const[data,setData]= useState({
        name:"shantanu",
        address:{
            city:'Gaurella',
            pincode:495117
        }
    })

    function handleName(val){
        // console.log(val)
        setData({...data,name: val})
    }
    function handleCity(city){
        data.address.city= city
        setData({...data,address:{...data.address,city}})
    }
  return (
    <div>
      <h1>Updating Objects</h1>

      <input type="text" placeholder='Enter name' onChange={(e)=> handleName(e.target.value)} />
      <input type="text" placeholder='Enter City' onChange={(e)=> handleCity(e.target.value)} />

      <h3>name : {data.name}</h3>
      <h3>City : {data.address.city}</h3>
      <h3>Pincode : {data.address.pincode}</h3>
    </div>
  )
}

export default UpdatingObject
