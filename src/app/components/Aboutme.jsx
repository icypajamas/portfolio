import React from "react";
import { motion } from "motion/react";
import { AboutmeLogos } from "./ui/AboutmeLogos";

export const Aboutme = () => {
  return (
    <div id="aboutme" className="flex flex-col pt-8 pb-8 w-full justify-center items-center bg-gradient-to-r from-slate-900 via-purple-800 to-gray-800">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex flex-col sm:flex-col gap-4 md:flex-row w-23/24 bg-transparent border border-gray-700 rounded-xl p-4"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">about_me</h1>
          <p className="text-gray-200 text-base sm:text-sm md:text-xl lg:text-2xl font-extralight text-justify leading-relaxed">
            I’m a first-year Computer Science student with a strong interest in
            web development and problem-solving. I enjoy building clean,
            functional, and modern websites using React and Next.js. My goal is
            to grow into a full-stack developer while exploring areas like
            cybersecurity and automation along the way. I tried coding 5 years ago in C#
            for the first time. That's when I knew what I wanted to do. Now I'm here, learning
            languages and exploring technologies. I'm excited to see where I end up. Take me away!
          </p>
        </div>
        <AboutmeLogos />
      </motion.div>
    </div>
  );
};
