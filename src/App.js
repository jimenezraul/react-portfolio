import React, { useState } from "react";
import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import AboutMe from "./component/AboutMe";
import Header from "./component/Header";
import Portfolio from "./component/Portfolio";
import Resume from "./component/Resume";

function App() {
  const [currentSelect, setCurrentSelect] = useState("About Me");

  return (
    <div className="bg-gray-50 dark:bg-gray-900 flex flex-col min-h-screen justify-between">
      <Navbar
        currentSelect={currentSelect}
        setCurrentSelect={setCurrentSelect}
      />
      <Header currentSelect={currentSelect} />
      {currentSelect === "About Me" && <AboutMe />}
      {currentSelect === "Portfolio" && <Portfolio />}
      {currentSelect === "Resume" && <Resume />}
      <Footer />
    </div>
  );
}

export default App;
