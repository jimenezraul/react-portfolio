import React from "react";
import ims from "../../assets/img/ims.png";
import coinhiz from "../../assets/img/coinhiz.jpg";
import runbuddy from "../../assets/img/run-buddy.jpg";
import myportfolio from "../../assets/img/about-dark.png";
import thetechblog from "../../assets/img/thetechblog.png";
import quiz from "../../assets/img/quiz.png";

const Portfolio = () => {
  const portfolio = [
    {
      title: "Investment Management System",
      description:
        "This Inventory Management System application will allow a company with large amount of products to manage their inventory. It will allow employees to add, update, delete and view Categories, Supplier, Products and Inventory. In the main dashboard, it will display all categories with all product and each will have a button to view inventory. In the Product section, it will display the product information with total quantity in stock and total inventory value. Also it will display the supplier info, stock locations and quantity for the selected product.",
      image: ims,
      technologies: [
        "HTML5",
        "Bootstrap",
        "MVC",
        "Handlebars",
        "NodeJS",
        "Express",
        "MySQL",
      ],
      github_link: "https://github.com/jimenezraul/IMS",
      live_link: "https://ims-inventory-s.herokuapp.com/",
    },
    {
      title: "My Portfolio",
      description:
        "This is my portfolio built with React and tailwindsCSS. Includes About Me, Projects, Contact Me, and Resume, fully responsive and mobile friendly. Also includes dark mode.",
      image: myportfolio,
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
      github_link: "https://github.com/jimenezraul/react-portfolio",
      live_link: "https://steady-trifle-a7e022.netlify.app/",
    },
    {
      title: "The Tech Blog",
      description:
        "This is a tech blog created using MVC architecture. It is a simple blog that allows users to create, edit, and delete posts. It also allows users to comment on posts.",
      image: thetechblog,
      technologies: ["HTML5", "CSS3", "JavaScript", "Express", "MVC", "MySQL", "Handlebars"],
      github_link: "https://github.com/jimenezraul/mvc-tech-blog",
      live_link: "https://peaceful-hollows-93155.herokuapp.com/",
    },
    {
      title: "CoinHiz",
      description:
        "This Inventory Management System application will allow a company with large amount of products to manage their inventory. It will allow employees to add, update, delete and view Categories, Supplier, Products and Inventory. In the main dashboard, it will display all categories with all product and each will have a button to view inventory. In the Product section, it will display the product information with total quantity in stock and total inventory value. Also it will display the supplier info, stock locations and quantity for the selected product.",
      image: coinhiz,
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Tailwind CSS",
        "ServerSide API",
        "jQuery",
      ],
      github_link: "https://github.com/jimenezraul/coinhiz",
      live_link: "https://jimenezraul.github.io/coinhiz/",
    },
    {
      title: "Timed Code Quiz",
      description:
        "This is a timed quiz that tests your knowledge of JavaScript fundamentals. On start, you will have 75 seconds and every wrong answer will penalize you by 10 seconds. On finish, you will be given the time left as a score. Once you input your initials, your score will be saved to a local storage as a high score and you will be redirected to the high score page.",
      image: quiz,
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
      github_link: "https://github.com/jimenezraul/web-apis-timed-quiz",
      live_link: "https://jimenezraul.github.io/web-apis-timed-quiz/",
    },
    {
      title: "Run Buddy",
      description: "A website that offers fitness training services.",
      image: runbuddy,
      technologies: ["HTML5", "CSS3", "JavaScript"],
      github_link: "https://github.com/jimenezraul/run-buddy",
      live_link: "https://jimenezraul.github.io/run-buddy/",
    },
  ];

  return (
    <>
      <div className="container mx-auto flex flex-col flex-grow justify-center">
        <div className="flex flex-row flex-wrap justify-center">
          {portfolio.map((item, index) => (
            <div
              key={index}
              className="flex justify-center flex-row flex-wrap flex-auto text-gray-600 dark:text-gray-400 pb-4"
            >
              <div className="flex w-11/12 justify-center">
                <div className="md:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img className="rounded-t-lg" src={item.image} alt=""></img>
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-gray-300">
                      {item.title}
                    </h5>
                    <div className="">
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                    <p className="font-bold">Tech used:</p>
                    <div className="flex flex-row flex-wrap pb-2">
                      {item.technologies.map((tech, i, arr) => (
                        <span key={i} className="mr-2">
                          {i === arr.length - 1 ? `${tech}` : `${tech} |`}
                        </span>
                      ))}
                    </div>
                    <a
                      href={item.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Live Demo
                      <svg
                        className="ml-2 -mr-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href={item.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-3 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Github
                      <svg
                        className="ml-2 -mr-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
