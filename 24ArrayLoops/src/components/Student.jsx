//It is related with NestedLoop.jsx

import React from 'react'

function Student({student}) {
  return (
    <div>
      <li>
                    {
                        student.map((student)=>(
                            <ul>
                                <li>Student name :{student.name}</li>
                                <li>Student name :{student.id}</li>
                                <li>Student name :{student.age}</li>
                            </ul>
                        ))
                    }
                </li>
    </div>
  )
}

export default Student
