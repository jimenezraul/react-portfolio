import React, { useState } from "react";
import "./navbar.css";

const Navbar = ({ currentSelect, setCurrentSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") || "light"
  );
  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleDarkMode = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setDarkMode("light");
      localStorage.setItem("theme", "light");
    }
  };

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  return (
    <nav className="bg-gray-300 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://flowbite.com" className="flex items-center">
          <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white text-gray-600">
            My Portfolio
          </span>
        </a>
        <button
          type="button"
          data-toggle-dark="light"
          onClick={handleDarkMode}
          className="flex items-center p-2 mr-2 text-xs font-medium text-gray-700 bg-gray-200 rounded-lg border border-gray-200 toggle-dark-state-example hover:bg-gray-400 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          <svg
            data-toggle-icon="moon"
            className={`${darkMode === "light" ? "" : "hidden"} w-4 h-4`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg
            data-toggle-icon="sun"
            className={`${darkMode === "dark" ? "" : "hidden"} w-4 h-4`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="hidden">Toggle dark mode</span>
        </button>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={handleMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "w-full" : "hidden"
          } md:inline md:w-auto" id="mobile-menu`}
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium justify-center">
            <li>
              <button
                onClick={() => { setCurrentSelect("About Me");  setIsOpen(false); }}
                className={`${
                  currentSelect === "About Me"
                  ? "text-gray-700 bg-gray-200 dark:bg-gray-600 dark:text-white rounded"
                  : "dark:text-gray-400 text-gray-700"
                } w-full py-2 pr-4 pl-3 hover:decoration-1 hover:text-white hover:bg-gray-400 hover:rounded md:border-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-gray-600 dark:border-gray-700`}
                aria-current="page"
              >
                About Me
              </button>
            </li>
            <li>
              <button
                onClick={() => {setCurrentSelect("Portfolio"); setIsOpen(false);}}
                className={`${
                  currentSelect === "Portfolio"
                    ? "text-gray-700 bg-gray-200 dark:bg-gray-600 dark:text-white rounded"
                    : "dark:text-gray-400 text-gray-700"
                } w-full py-2 pr-4 pl-3 text-gray-700 hover:text-white hover:bg-gray-400 md:border-0 hover:rounded md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-gray-600 dark:border-gray-700`}
              >
                Portfolio
              </button>
            </li>
            <li>
              <button
                href="/"
                onClick={() => {setCurrentSelect("Contact"); setIsOpen(false);}}
                className={`${
                  currentSelect === "Contact"
                  ? "text-gray-700 bg-gray-200 dark:bg-gray-600 dark:text-white rounded"
                  : "dark:text-gray-400 text-gray-700"
                } w-full py-2 pr-4 pl-3 text-gray-700 hover:text-white hover:bg-gray-400 md:border-0 hover:rounded  md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-gray-600 dark:border-gray-700`}
              >
                Contact
              </button>
            </li>
            <li>
              <button
                href="/"
                onClick={() => {setCurrentSelect("Resume"); setIsOpen(false);}}
                className={`${
                  currentSelect === "Resume"
                  ? "text-gray-700 bg-gray-200 dark:bg-gray-600 dark:text-white rounded"
                  : "dark:text-gray-400 text-gray-700"
                } w-full py-2 pr-4 pl-3 text-gray-700 hover:text-white hover:bg-gray-400 md:border-0 hover:rounded md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-gray-600 dark:border-gray-700`}
              >
                Resume
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
