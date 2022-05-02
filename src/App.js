import React, { useState } from "react";
import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

function App() {
  const [currentSelect, setCurrentSelect] = useState("About Me");

  return (
    <div className="App flex flex-col min-h-screen justify-between">
      <Navbar
        currentSelect={currentSelect}
        setCurrentSelect={setCurrentSelect}
      />
      <h1>{currentSelect}</h1>
      <Footer />
    </div>
  );
}

export default App;
