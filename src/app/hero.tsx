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
          src="https://res.cloudinary.com/dkrnjy7fy/video/upload/q_auto:good,f_auto,vc_auto/v1773867643/Hero_tkc5zi.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#000409] to-transparent" />
      
    </section>
  );
};

export default Hero;