import React from 'react'
import { useState } from 'react'

function CheckBox() {
    const[skills,setSkills]= useState([])

    const handleSkill= (event)=>{
        console.log(event.target.value,event.target.checked)
        if(event.target.checked){
            setSkills([...skills,event.target.value])
        }
        else{
            setSkills([...skills.filter((item)=> item!= event.target.value)]) //Creates a new array, including only items that do not equal the value of the unchecked checkbox.
        }
    }
  return (
    <div>
      <h3>Select your skills</h3>
      <input type="checkbox" id='php' value="php" onChange={handleSkill}/>
      <label htmlFor="php">PHP</label>
      <br /><br />
      <input type="checkbox" id='JS' value="JS" onChange={handleSkill}/>
      <label htmlFor="JS">JS</label>
      <br /><br />
      <input type="checkbox" id='Node' value="Node" onChange={handleSkill}/>
      <label htmlFor="Node">Node</label>
      <br /><br />
      <input type="checkbox" id='Pthon' value="Pthon" onChange={handleSkill}/>
      <label htmlFor="Pthon">Python</label>
      <br /><br />
      <h2>{skills.toString()}</h2>
    </div>
  )
}

export default CheckBox
