import React from "react";
import { GlowingEffect } from "./glowing-effect";
import { PinContainer } from "./3d-pin";

export const First = () => {
  return (
    <PinContainer
      title="/ui.aceternity.com"
      href="https://twitter.com/mannupaaji"
      className="p-2 transparent text-white rounded-lg"
    >
      <GlowingEffect
        blur={0}
        borderWidth={6}
        spread={50}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      MEAGBEAJEH CONISDIAWIEkfjlkajf jlfkjsafjsfjdsj
    </PinContainer>
  );
};
