import React from "react";
import { GlowingEffect } from "./glowing-effect";

export const First = () => {
  return (
    <div className="flex justify-center relative border rounded-xl">
      <GlowingEffect
        blur={0}
        borderWidth={8}
        spread={50}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div className="flex flex-col gap-2 relative rounded-xl p-4 bg-gradient-to-r from-slate-900 via-purple-800 to-gray-800 text-white min-h-28 min-w-62">
        <h1 className="text-lg font-bold underline w-auto flex flex-col">
          About me
        </h1>
        <div className="font-extralight">
          Jump to the "about me" section.
        </div>
      </div>
    </div>
  );
};
