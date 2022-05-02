import React, { useState } from "react";
import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import AboutMe from "./component/AboutMe";

function App() {
  const [currentSelect, setCurrentSelect] = useState("About Me");

  return (
    <div className="dark:bg-gray-900 flex flex-col min-h-screen justify-between">
      <Navbar
        currentSelect={currentSelect}
        setCurrentSelect={setCurrentSelect}
      />
      {currentSelect === "About Me" && <AboutMe />}
      <Footer />
    </div>
  );
}

export default App;
