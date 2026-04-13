"use client";

import React, { useEffect, useRef } from "react";

const Hero: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    let player: any;

    const initPlayer = async () => {
      if (!iframeRef.current) return;

      const Player = (await import("@vimeo/player")).default;

      player = new Player(iframeRef.current);
      playerRef.current = player;

      try {
        await player.setMuted(true);
        await player.setLoop(true);
        await player.play();
      } catch (err) {
        // 🔁 Retry autoplay if blocked
        setTimeout(() => {
          player.play().catch(() => {});
        }, 1000);
      }
    };

    initPlayer();

    return () => {
      if (playerRef.current) {
        playerRef.current.unload();
      }
    };
  }, []);

  return (
    <section className="relative w-full h-[60svh] min-h-[420px] sm:h-[70svh] lg:h-[90vh] overflow-hidden bg-black">
      
      {/* Vimeo Background */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          ref={iframeRef}
          src="https://player.vimeo.com/video/1182021752?background=1&autoplay=1&muted=1&loop=1&playsinline=1"
          className="absolute top-1/2 left-1/2 
                     w-[177.77vh] h-[100vh] 
                     min-w-[100vw] min-h-[56.25vw] 
                     -translate-x-1/2 -translate-y-1/2 
                     pointer-events-none"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#000409] to-transparent" />
      
    </section>
  );
};

export default Hero;