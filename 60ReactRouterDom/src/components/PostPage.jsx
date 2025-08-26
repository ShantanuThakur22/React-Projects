import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";

function PostPage() {
    const[body,setBody]= useState(null)
    const param = useParams()



    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${param.postid}`)
        .then(res=> res.json())
        .then(data=> setBody(body))
    },[])
    console.log(body)
    if(body===null)  return <p>Loading...</p>

  return (
    <div>
      <p>{body.title}</p>
      <p>{body.body}</p>
    </div>
  );
}

export default PostPage;
