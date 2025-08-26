import React from 'react'
import { useState } from 'react'

function Radio() {
    const [gender,setGender] = useState("female")
    const [city,setCity] = useState("Delhi")
  return (
    <div>
      <h1>Handle Radio and Dropdown</h1>
      <h3>Select Gender</h3>
      <input type="radio" name='gender' id='male' value={'male'} checked={gender=='male'} onChange={(e)=> setGender(e.target.value)} />
      <label htmlFor="male">Male</label>
      <input type="radio" name='gender' id='female' value={'female'} checked={gender=='female'} onChange={(e)=> setGender(e.target.value)}/>
      <label htmlFor="female">Female</label>

      <p>Selected Gender: {gender}</p>

      <br /><br />
      <h3>Select city</h3>
      <select name="" id="" defaultValue={'delhi'} onChange={(e)=> setCity(e.target.value)}>
        <option value="noida" >Noida</option>
        <option value="delhi" >Delhi</option>
        <option value="gurgaon" >Gurgaon</option>
      </select>
      <h2>Selected City: {city}</h2>
    </div>
  )
}

export default Radio
