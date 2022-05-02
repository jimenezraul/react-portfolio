import React, { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";

function App() {
  const [currentSelect, setCurrentSelect] = useState("About Me");

  return (
    <div className="App">
      <Navbar
        currentSelect={currentSelect}
        setCurrentSelect={setCurrentSelect}
      />
      <h1>{currentSelect}</h1>
    </div>
  );
}

export default App;
