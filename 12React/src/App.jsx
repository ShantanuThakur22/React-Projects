import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //  const name= "shantanu"

  const userObj= {
    name:"Shantanu",
    mail:"abc@mail.com",
    age:27
  }
  function callFun(){
    console.log("Function called")
    // alert("This is the ")
  }

  const fruit= ()=>{
    return "Apple"
  }
  let image= "https://plus.unsplash.com/premium_photo-1672433237558-69cedd6ae40e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVjaXZpbmclMjBtYWlsfGVufDB8fDB8fHww"


  
  return (
    <>
      <h1>{name? "Shantanu" : "Batti"}</h1>
      <img src= {image} alt="Photu" />
      <ul>
        <li>first</li>
        <li>Second</li>
        <li>Third</li>
      </ul>
      <button onClick={callFun}>ClickMe!</button>
      {/* <p>{fruit}</p> */}
      {/* <p>{fruit}</p> */}
      {userObj.age}
    </>
  )
}

export default App
