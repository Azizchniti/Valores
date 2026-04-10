"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    video:
      "https://vimeo.com/1182021716?share=copy&fl=sv&fe=ci",
    author: "Faculdade Bahiana de Medicina",
    quote:
      "Conseguimos eliminar gargalos e melhorar a eficiência dos nossos processos internos, trazendo mais agilidade para toda a equipe.",
  },
  {
    video:
      "https://vimeo.com/1182021641?share=copy&fl=sv&fe=ci",
    author: "NAMI - Gestor Clínica Escola Unifor",
    quote:
      "A solução trouxe mais controle e organização para nossa operação, permitindo decisões mais rápidas e assertivas no dia a dia.",
  },
];

export default function VideoReviewsSection() {
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Next / Prev controls
  const next = () =>
    setIndex((prev) => (prev + 1) % reviews.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );

  // Auto-advance when video ends
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => next();

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, []);

  // Reset & autoplay when index changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, [index]);

  return (
    <section className="relative">
      {/* Bottom white continuation */}
      <div
        className="absolute inset-x-0 bottom-0 h-24 md:h-32"
        style={{ backgroundColor: "#ffffff" }}
      />

      {/* Main Card */}
      <div
        className="relative z-10 w-full py-20 rounded-b-[92px] overflow-hidden"
        style={{
          backgroundColor: "#9ECFD0",
          backgroundImage: "url('/image/backgrounds/Grid_dark.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "700px",
        }}
      >
     
          {/* Title */}
          <h2 className="text-center text-3xl md:text-4xl font-regular text-[#0B1E23] mb-16">
            O QUE NOSSOS <span className="text-white">PARCEIROS</span>
            <br />
            DIZEM SOBRE NÓS
          </h2>

          {/* Main Content */}
          <div className="flex justify-center px-6 lg:pl-[20%]">
            <div className="relative flex flex-col lg:flex-row items-center w-full max-w-7xl gap-10 lg:gap-0">

              {/* Video */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 shrink-0"
                >
                  <div className="w-[280px] h-[460px] rounded-[32px] overflow-hidden shadow-xl bg-black">
                    <iframe
                      src={`https://player.vimeo.com/video/${
                        reviews[index].video.split("/").pop()?.split("?")[0]
                      }?autoplay=1&muted=1&loop=0`}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    />
                  </div>
                </motion.div>
              </AnimatePresence>


              {/* Quote Box */}
              <div className="relative flex items-center bg-[#4FA6AA] h-[320px] flex-1 px-10 md:px-20 mt-10 lg:mt-0">
                <div className="relative max-w-[680px]">
                  <Image
                    src="/image/icons/A1.svg"
                    alt="quote start"
                    width={36}
                    height={36}
                    className="absolute -left-12 -top-2 opacity-70"
                  />

                  <p className="text-lg italic text-[#0B1E23] leading-relaxed">
                    {reviews[index].quote}

                    <span className="block mt-4 text-sm opacity-80">
                      {reviews[index].author}
                    </span>
                  </p>

                  <Image
                    src="/image/icons/A2.svg"
                    alt="quote end"
                    width={36}
                    height={36}
                    className="absolute -right-8 -bottom-2 opacity-70"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Indicator Buttons */}
          <div className="flex justify-center items-center gap-3 mt-10">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === index
                    ? "w-16 h-2 bg-white"
                    : "w-2 h-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
    </section>
  );
}