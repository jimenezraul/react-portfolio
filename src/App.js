import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import AboutMe from "./component/AboutMe";
import Header from "./component/Header";
import Portfolio from "./component/Portfolio";
import Resume from "./component/Resume";
import Contact from "./component/Contact";
import { capitalizeFirstLetter } from "./utils/helpers";

function App() {
  const [currentSelect, setCurrentSelect] = useState("About Me");

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentSelect);
  }, [currentSelect]);

  return (
    <div className="bg-gray-200 dark:bg-gray-900 flex flex-col min-h-screen justify-between">
      <Navbar
        currentSelect={currentSelect}
        setCurrentSelect={setCurrentSelect}
      />
      <Header currentSelect={currentSelect} />
      {currentSelect === "About Me" && <AboutMe />}
      {currentSelect === "Portfolio" && <Portfolio />}
      {currentSelect === "Contact" && <Contact />}
      {currentSelect === "Resume" && <Resume />}
      <Footer />
    </div>
  );
}

export default App;
