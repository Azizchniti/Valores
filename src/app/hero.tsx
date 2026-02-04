"use client";

import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="
        relative
        w-full
        h-[60vh] sm:h-[70vh] lg:h-[90vh]
        overflow-hidden
        bg-black
      "
    >
      {/* Background video */}
      <video
        src="https://res.cloudinary.com/ddewzsm7q/video/upload/v1761913696/Valores/Video_hero_njtlhi.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="
          absolute
          inset-0
          w-full
          h-full
          object-contain
          lg:object-cover
        "
      />

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#000409] to-transparent" />
    </section>
  );
};

export default Hero;
