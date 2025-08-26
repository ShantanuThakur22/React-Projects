import React from 'react'

function Map() {
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
        }
      ]
  return (
    <div>
      <h1>Before Loop data</h1>
      <table border={1}>
        <thead >
          <tr>
            <td>name</td>
            <td>id</td>
            <td>age</td>
            <td>mail</td>
          </tr>
          <tr>
            <td>{userData[0].name}</td>
            <td>{userData[0].id}</td>
            <td>{userData[0].age}</td>
            <td>{userData[0].mail}</td>
          </tr>
        </thead>
      </table>
      <br /><br />
      <h1>After Loop data</h1>
      <table border={1}>
        <thead>
        <tr>
            <td>name</td>
            <td>id</td>
            <td>age</td>
            <td>mail</td>
          </tr>
        </thead>
        <tbody>
          {
            userData.map((item)=>(
              <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.id}</td>
            <td>{item.age}</td>
            <td>{item.mail}</td>
          </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Map
