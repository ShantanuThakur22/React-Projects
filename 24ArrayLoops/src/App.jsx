import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Map from './components/Map'
import MoreOnLoop from './components/MoreOnLoop'
import NestedLoop from './components/NestedLoop'

function App() {
  const [count, setCount] = useState(0)

  const userData= [
    {
      name:"Shantanu",
      id:1,
      age:27,
      mail:"abc@mail.com"
    },
    {
      name:"Sam",
      id:2,
      age:29,
      mail:"abc123@mail.com"
    },
    {
      name:"Nidhish",
      id:3,
      age:5,
      mail:"abc123xyz@mail.com"
    },
    {
      name:"Hanvika",
      id:4,
      age:0.5,
      mail:"abc123xyz456@mail.com"
    }
  ]

  return (
    
    <>
    
    {/* <Map/> */}
    {
      userData.map((item)=>(
        <div key={item.id}>
          <MoreOnLoop user={item}/>
        </div>
      ))
    }
    {/* <NestedLoop/> */}
    
    </>
  )
}

export default App
