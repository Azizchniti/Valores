"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const videoReviews = [
  "https://res.cloudinary.com/ddewzsm7q/video/upload/v1761915329/Valores/Profa._Lia_Brasil_-_Diretora_CCS_Unifor_Feito_com_o_Clipchamp_1_kffkoe.mp4",
  "https://res.cloudinary.com/ddewzsm7q/video/upload/v1761913325/Valores/Prof._Marcelo_-_Diplan_Unifor_Feito_com_o_Clipchamp_1_xbai7t.mp4",
  "https://res.cloudinary.com/ddewzsm7q/video/upload/v1761913322/Valores/Depoimento_Wesley_NAMI_Gestor_Cl%C3%ADnica_Escola_Unifor_ebrijg.mp4",
  "https://res.cloudinary.com/ddewzsm7q/video/upload/v1761913289/Valores/Telma_Gestora_RH_Faculdade_Bahiana_de_Medicina_2_nkdxnw.mp4",
];

export default function VideoReviewsSection() {
  const [index, setIndex] = useState(0);

  const prevVideo = () => {
    setIndex((prev) => (prev - 1 + videoReviews.length) % videoReviews.length);
  };

  const nextVideo = () => {
    setIndex((prev) => (prev + 1) % videoReviews.length);
  };

  return (
    <section className="w-full flex flex-col gap-8 overflow-hidden relative mb-6">
      {/* Header */}
      <div
        className="w-full flex items-center justify-center py-8 gap-3"
        style={{ background: "#58A8AB" }}
      >
        <Image alt="Arrow" src="/image/icons/chat.png" width={35} height={35} />
        <span
          className="text-center font-bold uppercase"
          style={{ fontSize: "28px", color: "#000409" }}
        >
          O que nossos parceiros dizem sobre nós
        </span>
      </div>

      {/* Video showcase */}
      <div className="relative flex items-center justify-center w-full h-[500px]">
        {/* Background blurred videos */}
        <div className="absolute inset-0 flex items-center justify-center gap-6 overflow-hidden">
          {videoReviews.map((vid, i) => {
            if (i === index) return null; // skip active
            const offset = i < index ? -1 : 1;
            return (
              <motion.video
                key={vid}
                src={vid}
                muted
                loop
                autoPlay
                className={`absolute w-[160px] sm:w-[200px] md:w-[220px] rounded-lg opacity-80 blur-[3px] border-2 border-[#58A8AB]/30`}
                style={{
                  transform: `translateX(${offset * (250 + Math.random() * 40)}px) rotate(${offset * 3}deg)`,
                }}
              />
            );
          })}
        </div>

        {/* Center main video */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <video
              src={videoReviews[index]}
              controls
              autoPlay
              muted
              loop
              className="rounded-xl shadow-2xl max-h-[420px] max-w-[240px] sm:max-w-[280px] md:max-w-[300px] object-contain border-4 border-[#57A7AA] bg-black"
            />

            {/* Navigation buttons close to main video */}
            <button
              onClick={prevVideo}
              className="absolute left-[-45px] top-1/2 transform -translate-y-1/2 bg-[#58A8AB] hover:bg-[#57A7AA] text-white p-3 rounded-full shadow-lg"
            >
              ‹
            </button>
            <button
              onClick={nextVideo}
              className="absolute right-[-45px] top-1/2 transform -translate-y-1/2 bg-[#58A8AB] hover:bg-[#57A7AA] text-white p-3 rounded-full shadow-lg"
            >
              ›
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-4">
        {videoReviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-[#58A8AB]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
