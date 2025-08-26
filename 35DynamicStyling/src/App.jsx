import React, { useState } from "react";
import Styling from "./components/Styling";

function App() {
  const students = [
    { name: "shantanu", profession: "SDE", id: 1 },
    { name: "Siddhatnt", profession: "Civil engineer", id: 2 },
    { name: "Mutthi", profession: "MutthiBazi", id: 3 },
    { name: "Sam", profession: "Plumber", id: 4 },
    { name: "Nidhish", profession: "Athlete", id: 5 },
    { name: "Hanvika", profession: "Best in the world", id: 6 },
    { name: "Srishti", profession: "Tester", id: 7 },
  ];

  // Move shared state here:
  const [cardStyle, setCardStyle] = useState({
    border: "1px solid #ccc",
    width: "200px",
    boxShadow: "1px 2px 3px 0px #cccccc57",
    margin: "10px",
  });
  const [textClr, setTextClr] = useState({ color: "red" });
  const [toggleGrid, setToggleGrid] = useState(true);

  function updateTheme(bgColor, textColor) {
    setCardStyle((style) => ({ ...style, backgroundColor: bgColor }));
    setTextClr({ color: textColor });
  }

  return (
    <div>
      <h1 className="text-red-800 text-left ml-4">Dynamic Styling</h1>
      {/* CONTROL BUTTONS: only appear ONCE */}
      <div className="flex gap-2 mt-4">
        <button className="border-1 cursor-pointer" onClick={() => updateTheme("gray", "orange")}>Gray Theme</button>
        <button className="border-1 cursor-pointer" onClick={() => updateTheme("white", "black")}>Default Theme</button>
        <button className="border-1 cursor-pointer" onClick={() => setToggleGrid((g) => !g)}>Toggle Grid</button>
      </div>

      {/* CARDS */}
      <div style={{ display: toggleGrid ? "flex" : "block", flexWrap: "wrap" }}>
        {students.map((student) => (
          <Styling
            key={student.id}
            user={student}
            cardStyle={cardStyle}
            textClr={textClr}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
