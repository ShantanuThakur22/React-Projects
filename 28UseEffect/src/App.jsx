import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import CounterWithProp from './components/CounterWithProp'

function App() {
  const [counter, setCounter] = useState(0)
  const [data, setData] = useState(0)

  const[display,setDisplay]= useState(true)

  function handleClick(){
    setCounter(counter+1)
  }
  function handleData(){
    setData(data+1)
  }

  

  return (
    <>
      <CounterWithProp count={counter} data={data}/>
      <button onClick={handleClick}>click</button>
      <button onClick={handleData}>Data</button>
      <button onClick={()=> setDisplay(!display)}>display</button>

      {
        display? <p>Count: {counter} & Data: {data}</p>:null
      }
    </>
  )
}

export default App
