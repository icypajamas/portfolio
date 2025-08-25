import React from "react";
import { First } from "./ui/First";
import { Second } from "./ui/Second";
import { Third } from "./ui/Third";
import { SparklesCore } from "./ui/sparkles";

export const Shortcuts = () => {
  return (
    <div className="flex bg-black relative">
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
      <First />
      <Second />
      <Third />
    </div>
  );
};
