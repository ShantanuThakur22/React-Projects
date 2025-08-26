import React from 'react'
import { useState } from 'react'

function UpdatingArray() {
    const[name,setName]= useState([
        'shantanu','sam','peter'
    ])

    const[data,setData] = useState([
        {name:'Srishti', age:28},
        {name:'Nidhish', age:5},
        {name:'Hanvika', age:6}
    ])

    const handleName= (newname)=>{
        name[name.length-1] = newname //Here I am updatig last user's name
        setName([...name])
    }

    function updateAge(newage){ 
        data[data.length-1].age= newage  //Here I am updatig last user's age

        setData([...data])
    }
  return (
    <div>
      <h2>Updating Array in state</h2>
      <input type="text" placeholder='enter last user name' onChange={(e)=> handleName(e.target.value)} />
      {
        name.map((item,index)=>(
            <ul key={index}>
                <li>{item}</li>
            </ul>
        ))
      }
      <hr />
      <h2>Updating Array of Object</h2>
      <input type="number" placeholder='Enter age' onChange={(e)=> updateAge(e.target.value)}/>
      {
        data.map((item)=>(
            <p>{item.name}, {item.age}</p>
        ))
      }
    </div>
  )
}

export default UpdatingArray
