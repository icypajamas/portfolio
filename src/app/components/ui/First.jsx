import React from "react";
import { GlowingEffect } from "./glowing-effect";

export const First = () => {
  return (
    <div className="flex justify-center relative border-4 rounded-xl p-2 bg-amber-800">
      <GlowingEffect
        blur={0}
        borderWidth={8}
        spread={50}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div className="flex flex-col gap-2 relative rounded-xl p-4 bg-gray-800 text-white min-h-28 min-w-62">
        <h1 className="text-lg font-bold underline w-auto flex flex-col">
          About and Links
        </h1>
        <div className="font-extralight">
          View an about me, with links and contact info.
        </div>
      </div>
    </div>
  );
};
