"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SecondComp() {
  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const pillContainerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2, // delay between each pill
      },
    },
  };

  const pillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="py-16 px-6 bg-gray-50 flex flex-col items-center text-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={containerVariants as any}
    >
      {/* Title */}
      <motion.h2
        className="text-lg md:text-xl font-extrabold uppercase text-gray-900 tracking-wide"
        variants={containerVariants as any}
      >
        O FIM DO TRABALHO OPERACIONAL.
      </motion.h2>

      {/* Pills with staggered animation */}
      <motion.div
        className="mt-6 flex flex-col gap-3"
        variants={pillContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {[
          "EXCESSO DE TRABALHO MANUAL E PLANILHAS",
          "PROCESSOS LENTOS QUE ATRASAM DECISÕES",
          "CUSTOS ELEVADOS COM TAREFAS REPETITIVAS",
        ].map((text, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-2 bg-[#58A8AB] text-[#000] px-4 py-2 rounded-full font-semibold text-sm shadow-md hover:scale-105 transition-transform duration-300"
            variants={pillVariants as any}
            whileHover={{ scale: 1.08 }}
          >
            <Image
              src="/image/icons/block.png"
              alt="icon"
              width={16}
              height={16}
              className="animate-pulse"
            />
            {text}
          </motion.div>
        ))}
      </motion.div>

      {/* Paragraph with fade-in */}
      <motion.p
        className="mt-6 text-sm md:text-base text-gray-700 max-w-xl leading-relaxed"
        variants={containerVariants as any}
      >
        Nossa resposta: um time de Agentes de IA que trabalha para você 24/7.
        Eles executam tarefas, validam dados e integram todos os seus sistemas
        com precisão absoluta.
      </motion.p>
    </motion.section>
  );
}
