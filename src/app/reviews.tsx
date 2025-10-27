"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ReviewProps {
  name: string;
  image: string;
  stars: number;
  text: string;
}

const reviews: ReviewProps[] = [
  {
    name: "Isadora Martins",
    image: "/image/review1.png",
    stars: 5,
    text: "Implementamos a solução de automação da Valores e os resultados foram imediatos. A redução de falhas operacionais e o ganho em produtividade superaram nossas expectativas. Além disso, o suporte da equipe foi ágil e atencioso do início ao fim.",
  },
  {
    name: "Kelvin Amorim",
    image: "/image/review2.png",
    stars: 5,
    text: "Antes tínhamos processos manuais que atrasavam muito nosso fluxo de trabalho. Depois da Valores, conseguimos mais eficiência e controle total das operações. Hoje atendemos mais clientes com menos esforço, e isso impactou diretamente em nossas vendas.",
  },
  {
    name: "Leonardo Miscontti",
    image: "/image/review3.png",
    stars: 5,
    text: "O que mais nos impressionou na Valores foi a personalização da solução. A equipe entendeu exatamente a nossa necessidade e criou um sistema sob medida, que integrou perfeitamente com as ferramentas que já usávamos.",
  },
];

export default function ReviewsSection() {
  const [index, setIndex] = useState(0);

  // Auto-change focus every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Helper to determine position of each review relative to index
  const getPosition = (i: number) => {
    const diff = (i - index + reviews.length) % reviews.length;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === 2 && reviews.length === 3) return "left";
    return "hidden";
  };

  return (
    <section className="w-full flex flex-col gap-14 overflow-hidden relative">
      {/* Header */}
      <div
        className="w-full flex items-center justify-center py-8 gap-3"
        style={{ background: "#58A8AB" }}
      >
        <Image alt="Arrow" src="/image/icons/chat.png" width={35} height={35} />
        <span
          className="text-center font-[TT Commons Pro] font-bold uppercase"
          style={{ fontSize: "28px", color: "#000409" }}
        >
          O que nossos parceiros dizem sobre nós
        </span>
      </div>

      {/* Carousel container */}
      <div className="relative w-full max-w-6xl mx-auto h-[420px] flex items-center justify-center overflow-hidden">
        {reviews.map((review, i) => {
          const position = getPosition(i);

          const variants = {
            center: { x: "0%", scale: 1, opacity: 1, zIndex: 3 },
            left: { x: "-50%", scale: 0.85, opacity: 0.6, zIndex: 2 },
            right: { x: "50%", scale: 0.85, opacity: 0.6, zIndex: 2 },
            hidden: { opacity: 0, scale: 0.8, zIndex: 1 },
          };

          return (
            <motion.div
              key={i}
              initial={false}
              animate={variants[position as keyof typeof variants]}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute flex flex-col items-center p-6 rounded-[10px] border border-[#57A7AA] bg-[#58A8AB] text-[#163132] font-[TT Commons Pro] max-w-md shadow-xl cursor-pointer"
              style={{
                width: "350px",
                pointerEvents: position === "center" ? "auto" : "none",
              }}
              onClick={() => setIndex(i)}
            >
              <Image
                src={review.image}
                alt={review.name}
                width={70}
                height={70}
                className="rounded-full mb-3"
              />
              <h3 className="text-center font-bold mb-1 text-lg">
                {review.name}
              </h3>

              <div className="flex mb-2">
                {Array.from({ length: review.stars }).map((_, s) => (
                  <span key={s} className="text-yellow-400 text-base mr-1">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-center leading-relaxed text-sm md:text-base text-[#0b2020]">
                {review.text}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-2">
        {reviews.map((_, i) => (
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
