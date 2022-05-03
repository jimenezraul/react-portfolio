import React from "react";
import resume from "../../assets/resume/resume.pdf";

const Resume = () => {
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
    "Python",
    "Django",
  ];
  return (
    <>
      <div className="container mx-auto flex flex-col flex-grow justify-center mb-8">
        <div className="flex flex-row flex-wrap-reverse justify-center">
          <div className="dark:text-gray-300 flex justify-around  w-full md:w-5/12 text-gray-700">
            <div className="w-5/12">
              <h2 className="p-4 text-2xl font-semibold w-full border-b border-gray-300 dark:border-gray-400">
                Front-end{" "}
              </h2>
              {frontEnd.map((skill, index) => (
                <p className="py-1 px-4" key={index}>
                  &bull; {skill}
                </p>
              ))}
            </div>
            <div className="w-5/12">
              <h2 className="p-4 text-2xl font-semibold w-full border-b border-gray-300 dark:border-gray-400">
                Back-end{" "}
              </h2>
              {backEnd.map((skill, index) => (
                <p className="py-1 px-4" key={index}>
                  &bull; {skill}
                </p>
              ))}
            </div>
          </div>
          <div className="w-full md:w-7/12 my-auto text-gray-600 dark:text-gray-400">
            <div className="text-center pl-5 pr-5 md:pr-9">
              <div className="pb-8">
                <a
                  className="py-2 px-5 rounded text-gray-200 bg-gray-600 hover:bg-gray-700 dark:text-gray-800 dark:hover:bg-gray-400 font-bold dark:bg-gray-300"
                  href={resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
