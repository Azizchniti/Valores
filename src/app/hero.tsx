"use client";

import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[60svh] min-h-[420px] sm:h-[70svh] lg:h-[90vh] overflow-hidden bg-black">
      
      {/* Vimeo Background */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1182021752?background=1&autoplay=1&loop=1&muted=1"
          className="absolute top-1/2 left-1/2 
                     w-[177.77vh] h-[100vh] 
                     min-w-[100vw] min-h-[56.25vw] 
                     -translate-x-1/2 -translate-y-1/2 
                     pointer-events-none"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#000409] to-transparent" />
      
    </section>
  );
};

export default Hero;