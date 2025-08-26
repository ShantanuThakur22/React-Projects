import React from "react";
import Student from "./Student";

function NestedLoop() {
  const collegeData = [
    {
      name: "IIt",
      city: "Delhi",
      website: "IIT.com",
      studentDetails: [
        {
          name: "Shantanu",
          id: 1,
          age: 27,
        },
        {
          name: "Nidhish",
          id: 2,
          age: 5,
        },
        {
          name: "Hanvika",
          id: 3,
          age: 0.6,
        },
      ],
    },
    {
      name: "NIt",
      city: "Raipur",
      website: "NIT.com",
      studentDetails: [
        {
          name: "Shantanu",
          id: 1,
          age: 27,
        },
        {
          name: "Nidhish",
          id: 2,
          age: 5,
        },
        {
          name: "Hanvika",
          id: 3,
          age: 0.6,
        },
      ],
    },
    {
      name: "SSEC",
      city: "Bhilai",
      website: "SSEC.com",
      studentDetails: [
        {
          name: "Shantanu",
          id: 1,
          age: 27,
        },
        {
          name: "Nidhish",
          id: 2,
          age: 5,
        },
        {
          name: "Hanvika",
          id: 3,
          age: 0.6,
        },
      ],
    },
  ];
  return (<div>
    {/* <h3>Nested Loops</h3> */}
    {
        
        collegeData.map((data,index)=>(
            <div key={index}>
            <h3 >College name : {data.name}</h3>
            <ul>
                <li>College Website: {data.website}</li>
                <li>City: {data.city}</li>
                
            </ul>
            <h3>Students</h3>
            <Student student= {data.studentDetails}/>
            </div>
        ))
    }
     </div>);
}

export default NestedLoop;
