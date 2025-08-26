import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Home() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => setPost(res));
  }, []);
  return <div>{post.map((item,index) => (
    <NavLink style={{ display: "block" }} to={`/post/${item.id}`}>
          {item.title}
        </NavLink>
  ))}</div>;
}

export default Home;
