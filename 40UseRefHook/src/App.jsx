import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseRefHook from './components/UseRefHook'
import Uncontrolled from './components/Uncontrolled'
import ForwardRef from './components/ForwardRef'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UseRefHook/> */}
      {/* <Uncontrolled/> */}
      <ForwardRef/> 
    </>
  )
}

export default App
//This is my comment