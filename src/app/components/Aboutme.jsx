import React from "react";
import { motion } from "motion/react";
import { GlowingEffect } from "./ui/glowing-effect";

export const Aboutme = () => {
  return (
    <div className="flex flex-col pt-8 pb-8 w-full justify-center items-center bg-gradient-to-r from-gray-800 via-gray-500 to-purple-900">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex flex-col sm:flex-col md:flex-row w-23/24 bg-transparent border rounded-xl border-white p-4"
      >
        <div className="flex flex-col gap-4">
          <h1 className="flex text-white text-6xl">about_me</h1>
          <p className="text-white text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aperiam.
          Ea reprehenderit dolorum saepe maxime cum quam excepturi accusantium,
          ratione quod fugit quibusdam autem! Nesciunt dicta perspiciatis eum
          adipisci voluptate! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eaque illum a perspiciatis? Quam veniam, molestiae quod
          recusandae sunt cupiditate maxime quia ipsum eligendi nisi doloremque?
          Iure beatae harum quis tenetur.
          </p>
        </div>
        <div className="flex relative w-240 h-80 border rounded-xl border-white">
          <GlowingEffect
            blur={0}
            borderWidth={8}
            spread={100}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
        </div>
      </motion.div>
    </div>
  );
};
