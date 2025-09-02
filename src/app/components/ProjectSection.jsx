import React from "react";
import { motion } from "motion/react";
import { GlowingEffect } from "./ui/glowing-effect";

export const ProjectSection = () => {
  const projects = [
    {
      name: "To-Do List",
      description:
        "A simple to-do list application built with React and Tailwind CSS. Features task addition, deletion, and completion functionalities.",
      thumbnail: "/next.svg",
      link: "https://github.com/icypajamas/todolist-react",
    },

    {
      name: "Stock Portfolio Tracker",
      description:
        "A CLI based stock portfolio tracker built with Java. Utilizes OOP, file handling, and exception handling. Done as First Semester Programming Fundamentals Final Project.",
      thumbnail: "/next.svg",
      link: "",
    },
  ];

  return (
    <div id="projects" className="flex flex-col pt-8 pb-8 w-full justify-center items-center bg-gradient-to-r from-slate-900 via-purple-800 to-gray-800">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="flex flex-col sm:flex-col gap-4 md:flex-row w-23/24 bg-transparent border border-gray-700 rounded-xl p-4"
      >
        <div className="flex flex-col gap-8 sm:gap-8 lg:gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
              my_projects
            </h1>
            <p className="text-white text-xl lg:text-2xl font-extralight">
              Here are some of the projects I've made:
            </p>
          </div>
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3 + index * 0.3,
                duration: 1.5,
                ease: "easeInOut",
              }}
              key={index}
              className="flex flex-col sm:flex-col gap-4 md:flex-row md:gap-12 bg-transparent border border-gray-700 rounded-xl p-4 relative"
            >
              <GlowingEffect
                blur={0}
                borderWidth={8}
                spread={50}
                glow={true}
                disabled={false}
                proximity={32}
                inactiveZone={0.01}
              />
              <img
                src={project.thumbnail}
                alt={project.name}
                className="flex w-full md:w-48 h-auto rounded-lg"
              />
              <div className="flex flex-col gap-4 text-justify leading-relaxed">
                <h2 className="flex text-white text-lg lg:text-xl font-semibold">
                  {project.name}
                </h2>
                <p className="flex text-gray-200">{project.description}</p>
                <p className="flex text-gray-200">
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-blue-400"
                  >
                    Github Link
                  </a>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
