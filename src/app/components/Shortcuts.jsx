import React from "react";
import { First } from "./ui/First";
import { Second } from "./ui/Second";
import { Third } from "./ui/Third";
import { SparklesCore } from "./ui/sparkles";

export const Shortcuts = () => {
  return (
    <div className="flex flex-col sm:flex-col md:flex-row gap-6 md:gap-12 lg:gap-32 items-center justify-center relative bg-black p-10 md:p-12 lg:p-24">
      <div className="absolute inset-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <Second />
      <Third />
      <First />
    </div>
  );
};
