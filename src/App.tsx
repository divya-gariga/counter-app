import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1>Counter</h1>
      <button
        style={{ padding: "8px" }}
        onClick={() => setCounter(counter - 1)}
      >
        -
      </button>
      <span style={{ padding: "15px", fontSize: "25px" }}>{counter}</span>
      <button
        style={{ padding: "8px" }}
        onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
    </div>
  );
}

export default App;
