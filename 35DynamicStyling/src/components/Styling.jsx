import React from "react";

function Styling({ user, cardStyle, textClr }) {
  return (
    <div style={cardStyle}>
      <img
        className="w-50"
        src="https://images.unsplash.com/photo-1701518035740-a33935aeb3ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVjaXZpbmclMjBtYWlsfGVufDB8fDB8fHww"
        alt="Mail Box"
      />
      <div className="p-3" style={textClr}>
        <h4>{user.name}</h4>
        <p>{user.profession}</p>
      </div>
    </div>
  );
}

export default Styling;
