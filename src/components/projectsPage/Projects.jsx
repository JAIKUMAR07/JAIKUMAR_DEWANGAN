import { useState } from "react";
import nex_lib from "../../../public/projects_image/nex_lib.png";
import prpertyEase from "../../../public/projects_image/prpertyEase.png";
import social_media from "../../../public/projects_image/social_media.png";
import speeliable from "../../../public/projects_image/speeliable.png";
import treasure_hunt from "../../../public/projects_image/treasure_hunt.png";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const projectData = [
    {
      id: 1,
      title: "Nex-Lib",
      description:
        "A full-stack Library Management System that provides a platform for users to search and browse books by category. Includes an admin panel for managing books and borrower details.",
      image: nex_lib,
      type: "fullstack",
      technologies: ["React.js", "TailwindCSS", "Firebase"],
      features: [
        "Users can search and view books by category.",
        "Admin can add, delete, and update book records.",
        "Borrower management with detailed tracking.",
        "Admin Login: Username - Rahul | Password - 123456",
      ],
      github: "https://github.com/yourusername/project1",
      demo: "https://nex-lib.vercel.app/",
    },
    {
      id: 2,
      title: "PropertyEase",
      description:
        "A real estate frontend platform integrated with a machine learning-based house price prediction model. Showcases how AI can be used to estimate property values in real-world applications.",
      image: prpertyEase,
      type: "machine learning",
      technologies: ["HTML", "TailwindCSS", "Flask", "scikit-learn"],
      features: [
        "Interactive real estate listing interface.",
        "Machine learning model to predict house prices.",
        "Helps users make informed decisions when buying or selling homes.",
      ],
      github: "https://github.com/JAIKUMAR07/PropertiEase",
      demo: "https://propertiease-as1r.onrender.com/",
    },
    {
      id: 3,
      title: "Social Media Platform",
      description:
        "A content-sharing platform backend project where users can register, log in, and create posts. Focuses on user authentication and secure content sharing.",
      image: social_media,
      type: "backend",
      technologies: ["Express.js", "Tailwind CSS", "MongoDB", "JWT"],
      features: [
        "User registration and login system.",
        "JWT-based authentication with session cookies.",
        "Create and manage personal posts and content.",
      ],
      github: "https://github.com/JAIKUMAR07/Backend_Social_Post_",
      demo: "https://github.com/JAIKUMAR07/Backend_Social_Post_",
    },
    {
      id: 4,
      title: "Speeliable",
      description:
        "A delivery optimization platform designed to enhance the productivity of delivery personnel. It provides real-time delivery routing and smart scanning features.",
      image: speeliable,
      type: "fullstack",
      technologies: ["React", "Tailwind CSS", "FastAPI"],
      features: [
        "Scan QR codes to fetch precise delivery locations.",
        "Optimize delivery routes to save time and distance.",
        "Automatically skip unavailable delivery points and reroute accordingly.",
      ],
      github: "https://github.com/JAIKUMAR07/Speeliable",
      demo: "https://speeliable.vercel.app/",
    },
    {
      id: 5,
      title: "Treasure Box",
      description:
        "A creative showcase website developed during my role as a Toastmasters Moderator. It highlights the real 'treasure' of Toastmasters — personal and leadership skills.",
      image: treasure_hunt,
      type: "frontend",
      technologies: ["HTML", "CSS"],
      features: [
        "Smooth scroll animations and interactive UI.",
        "Elegant layout to showcase skills as gems.",
      ],
      github: "https://github.com/JAIKUMAR07/treassure-hunt",
      demo: "https://treassure-hunt-brown.vercel.app/",
    },
  ];

  // Filter projects based on selected type
  const filteredProjects = projectData.filter(
    (project) => filter === "all" || project.type === filter
  );

  return (
    <div className="container mx-auto sm:w-[80%] px-4 py-12 pt-[100px]">
      <div className="mb-12 mt-10">
        <h1 className="text-4xl text-center  font-black mb-8  bg-clip-text bg-gradient-to-r text-green-400 ">
          My Projects
        </h1>
        <div className="mt-2 flex flex-wrap gap-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              filter === "all"
                ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/50"
                : "bg-gray-800/50 text-gray-300 hover:bg-gray-800"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("fullstack")}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              filter === "fullstack"
                ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/50"
                : "bg-gray-800/50 text-gray-300 hover:bg-gray-800"
            }`}
          >
            Full-Stack
          </button>
          <button
            onClick={() => setFilter("frontend")}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              filter === "frontend"
                ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/50"
                : "bg-gray-800/50 text-gray-300 hover:bg-gray-800"
            }`}
          >
            Frontend
          </button>

          <button
            onClick={() => setFilter("machine learning")}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              filter === "machine learning"
                ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/50"
                : "bg-gray-800/50 text-gray-300 hover:bg-gray-800"
            }`}
          >
            Machine Learning
          </button>

          <button
            onClick={() => setFilter("backend")}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              filter === "backend"
                ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/50"
                : "bg-gray-800/50 text-gray-300 hover:bg-gray-800"
            }`}
          >
            Backend
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm transition-all duration-500 hover:transform hover:scale-[1.02] opacity-100 translate-y-0"
          >
            <div className="relative h-58 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 brightness-75"
              />
              <div className="absolute inset-0 opacity-10"></div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-yellow-400 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-700/50 text-sm text-gray-300"
                    >
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-yellow-400 mb-2">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition-colors"
                >
                  Github
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-600 text-white hover:bg-cyan-700 transition-colors"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
