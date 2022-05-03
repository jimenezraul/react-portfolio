import React from "react";
import resume from "../../resume/resume.pdf";

const frontEnd = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "NodeJS",
  "ExpressJS",
  "Bootstrap",
  "TailwindCSS",
];

const backEnd = [
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "MySQL",
    "NoSQL",
    "RESTful API",
    "NoSQL",
    "MySQL",
];

const Resume = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col flex-grow justify-center mb-8">
        <div className="flex flex-row flex-wrap-reverse justify-center">
          <div className="dark:text-gray-300 flex flex-col w-full md:w-5/12 text-gray-700">
            <h2 className="py-4 text-2xl font-semibold w-full md:border-b border-gray-300 dark:border-gray-500">
              Front-end{" "}
            </h2>
            {frontEnd.map((skill, index) => (
              <p className="p-1" key={index}>
                &bull; {skill}
              </p>
            ))}
                      
            <h2 className="py-4 text-2xl font-semibold w-full md:border-b border-gray-300 dark:border-gray-500">
            Back-end{" "}
                      </h2>
                      {backEnd.map((skill, index) => (
                        <p className="p-1" key={index}>
                          &bull; {skill}
                        </p>
                      ))}
          </div>
          <div className="w-full md:w-7/12 my-auto text-gray-600 dark:text-gray-400">
            <p className="text-center pl-5 pr-5 md:pr-9">
              <div className="App">
                <a
                  className="py-2 px-5 rounded text-gray-200 bg-gray-600 hover:bg-gray-700 dark:text-gray-800 dark:hover:bg-gray-400 font-bold dark:bg-gray-300"
                  href={resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Resume
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
