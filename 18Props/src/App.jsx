import { useState } from 'react'
import './App.css'
import User from './User'
import College from './College'
import Student from './Student'
import Wrapper from './Wrapper'
import { Children } from 'react'

function App() {
  const [clgNames, setClgNames] = useState(["IIT","NIT","DU"])

  const[studentName,setStudentName]= useState()

  let obj = {
    name:"Mutthi",
    id:23,
    age:234
  }

  

  return (
    <>
    <h1>Props in React</h1>
      {/* <User name={"Shantanu"}/>
      <User name={"Thakur"}/> */}
      {/* <College colleges= {clgNames}/> */}
      <User obj= {obj} />
      {clgNames.map((prev)=>{
        
        return    <p>{prev}</p>
      })}

      {
        studentName && <Student name={studentName}/>
      }

      <button onClick={()=>{
        setStudentName("Kutiya")
      }}>Click me!</button>

      <Wrapper>
      <h1>Hey guys</h1>
      
      </Wrapper>
    </>
  )
}

export default App
