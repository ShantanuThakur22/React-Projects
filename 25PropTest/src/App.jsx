import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './components/Clock'

function App() {
  const[color,setColor]= useState("red")

  return (
    <>
    <h1>Default props in React</h1>
    <select name="" id="" value={color} onChange={(e)=>setColor(e.target.value)} className='border-1'>
        <option value="green" >Green</option>
        <option value="red">red</option>
        <option value="yellow">yellow</option>
      </select>
      <Clock color= {color}/>
    </>
  )
}

export default App
