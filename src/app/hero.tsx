"use client";

import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[60svh] min-h-[420px] sm:h-[70svh] lg:h-[90vh] overflow-hidden bg-black">
      
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/ddewzsm7q/video/upload/f_auto,q_auto/v1761913696/Valores/Video_hero_njtlhi"
          type="video/mp4"
        />
      </video>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#000409] to-transparent" />
      
    </section>
  );
};

export default Hero;