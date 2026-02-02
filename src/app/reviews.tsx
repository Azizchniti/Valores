"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    video:
      "https://res.cloudinary.com/ddewzsm7q/video/upload/v1761915329/Valores/Profa._Lia_Brasil_-_Diretora_CCS_Unifor_Feito_com_o_Clipchamp_1_kffkoe.mp4",
    author: "Empresa 01",
  },
  {
    video:
      "https://res.cloudinary.com/ddewzsm7q/video/upload/v1761913325/Valores/Prof._Marcelo_-_Diplan_Unifor_Feito_com_o_Clipchamp_1_xbai7t.mp4",
    author: "Empresa 02",
  },
];

export default function VideoReviewsSection() {
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () =>
      setIndex((prev) => (prev + 1) % reviews.length);

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, [index]);

  return (
    <section className="relative">
      {/* 🔻 BOTTOM CONTINUATION (THIS IS THE KEY) */}
      <div
        className="absolute inset-x-0 bottom-0 h-24 md:h-32"
        style={{
          backgroundColor: "#ffffff",
        }}
      />

      {/* 🔹 ROUNDED MAIN CARD */}
      <div
        className="relative z-10 w-full py-20 rounded-b-[92px] overflow-hidden"
        style={{
          backgroundColor: "#9ECFD0",
          backgroundImage: "url('/image/backgrounds/Grid_dark.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "700px",
        }}
      >

      {/* CONTENT */}
      <div className="relative z-10 py-20">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-regular text-[#0B1E23] mb-16">
          O QUE NOSSOS <span className="text-white">PARCEIROS</span>
          <br />
          DIZEM SOBRE NÓS
        </h2>

        {/* Main Content */}
        <div className="flex justify-center px-6">
          <div className="relative flex flex-col lg:flex-row items-center w-full max-w-[1600px] gap-10 lg:gap-0">
            <div className="hidden lg:block w-[250px]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 shrink-0"
              >
                <video
                  ref={videoRef}
                  src={reviews[index].video}
                  autoPlay
                  muted
                  controls
                  className="w-[280px] h-[460px] object-cover rounded-[32px] shadow-xl bg-black"
                />
              </motion.div>
            </AnimatePresence>

            {/* Quote Box */}
            <div className="relative flex items-center bg-[#4FA6AA] h-[320px] flex-1 px-20">
              <div className="relative max-w-[680px]">
                <Image
                  src="/image/icons/A1.svg"
                  alt="quote start"
                  width={36}
                  height={36}
                  className="absolute -left-12 -top-2 opacity-70"
                />

                <p className="text-lg italic text-[#0B1E23] leading-relaxed">
                  Conseguimos eliminar gargalos, reduzir custos operacionais e,
                  pela primeira vez, liberar nossa equipe para focar no que
                  realmente importa: <strong>inovar.</strong>

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

        {/* Indicator */}
        <div className="flex justify-center items-center gap-3 mt-10">
          <div className="w-16 h-2 rounded-full bg-white/70" />
          {reviews.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
