"use client";

import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Background video */}
      <video
        src="https://res.cloudinary.com/ddewzsm7q/video/upload/v1761913696/Valores/Video_hero_njtlhi.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Gradient overlay for better text readability if you add text later */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#000409] to-transparent" />

      {/* Optional centered content (you can safely remove this if you want a pure video hero) */}
     
    </section>
  );
};

export default Hero;
