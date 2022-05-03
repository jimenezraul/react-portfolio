import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-600 dark:text-gray-500 bg-gray-300 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800 p-3">
      <div className="container mx-auto align-middle">
        <div className="flex flex-col justify-center text-center">
          <div>
            <a className="pr-2" href="https://github.com/jimenezraul">
              <i class="text-2xl fa-brands fa-github"></i>
            </a>
            <a className="pl-2" href="https://www.linkedin.com/in/raul-jimenez-778b2a196/">
            <i class="text-2xl fa-brands fa-linkedin"></i>
            </a>
          </div>
          <p>
            My Portfolio
            <strong> &copy; Raul Jimenez</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
