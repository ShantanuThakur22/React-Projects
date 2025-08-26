import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseFormHook from './component/UseFormHook'
import UseTransitionHook from './component/UseTransitionHook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UseFormHook/> */}
      <UseTransitionHook/>
    </>
  )
}

export default App
