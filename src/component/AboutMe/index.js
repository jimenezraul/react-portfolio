import React from "react";
import profile from "../../img/profile.jpg";

const AboutMe = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col flex-grow justify-center">
        <div className="flex flex-row flex-wrap justify-center">
          <div className="flex w-full md:w-5/12 justify-center md:justify-end md:pr-3 md:border-r border-gray-300 dark:border-gray-500">
            <img
              className="rounded-full h-64 w-64 border-2 dark:border-gray-500"
              src={profile}
              alt="Profile"
            />
          </div>
          <div className="w-full md:w-7/12 my-auto text-gray-600 dark:text-gray-400">
            <p className="text-center pl-5 pr-5 md:pr-9">
              Full Stack Developer with experience in HTML, CSS, JavaScript,
              React, NodeJS, ExpressJS, Bootstrap, and Tailwind CSS, RESTful
              API, Django, NoSQL and MySQL. Expert in the implementation of
              interactive websites, with focus on the user experience and web
              performance.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
