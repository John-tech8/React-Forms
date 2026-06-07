import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [heading, setHeading] = useState(name);

  function handleEvent(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function mouseOnClick() {
    setHeading(name);
  }
  return (
    <div className="container">
      <h1>Hello {heading} </h1>
      <input
        onChange={handleEvent}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={mouseOnClick}>Submit</button>
    </div>
  );
}

export default App;
