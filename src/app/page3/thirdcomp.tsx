"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const DEPARTMENTS = [
  {
    title: "Transparência",
    description:
      "Criamos fluxos de informação claros para decisões mais rápidas e seguras.",
  },
  {
    title: "Accountability",
    description:
      "Desenvolvemos uma cultura de responsabilidade, onde cada líder presta contas dos seus resultados.",
  },
  {
    title: "Responsabilidade Corporativa",
    description:
      "Alinhamos sua operação a princípios éticos e sustentáveis, preparando-a para certificações como ESG, ISO e ONA.",
  },
  {
    title: "Equidade",
    description:
      "Garantimos tratamento justo e processos claros para todas as partes interessadas, fortalecendo a confiança no negócio.",
  },
];

export default function DepartmentsSection() {
  // Motion variants for entrance animation
  const fadeUpSmooth = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        delay: i * 0.25,
        ease: [0.16, 1, 0.3, 1], // smooth “ease out”
      },
    }),
  };

  return (
    <section className="relative w-full py-20 px-6 flex flex-col items-center text-center overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ scale: 1.2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/image/backgrounds/teams3.png"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>

      {/* Top Icon */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/image/icons/bluearrow.png"
          alt="Robot Icon"
          width={50}
          height={50}
          className="mb-4"
        />
      </motion.div>

      {/* Title */}
      <motion.h2
        className="text-white font-extrabold text-lg md:text-xl leading-snug"
        style={{ fontFamily: "TT Commons Pro" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Nossa Solução: Gestão para Resultados
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="mt-3 text-[#B8C3CE] max-w-2xl text-sm md:text-base"
        style={{ fontFamily: "TT Commons Pro" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Nosso projeto de Governança Corporativa vai além de manuais e regras.
        Implementamos um modelo de gestão dinâmico, baseado em uma metodologia
        inovadora com foco em resultados. Alinhamos processos, pessoas e
        tecnologia para criar uma estrutura organizacional sólida e preparada
        para o futuro.
      </motion.p>

      {/* Second Title */}
      <motion.h2
        className="text-white font-extrabold text-lg md:text-xl leading-snug mt-8"
        style={{ fontFamily: "TT Commons Pro" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        Construímos seu sucesso sobre 4 pilares essenciais
      </motion.h2>

      {/* Cards Section */}
      <div className="mt-12 flex flex-wrap justify-center gap-6 w-full max-w-6xl">
        {DEPARTMENTS.map(({ title, description }, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeUpSmooth as any}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="group relative flex flex-col items-stretch w-[240px] min-h-[230px] rounded-[24px] overflow-hidden 
                       bg-gradient-to-br from-[#e9f9fa] to-[#c0e7e8]
                       shadow-[0_8px_20px_rgba(0,0,0,0.15)] 
                       hover:shadow-[0_12px_25px_rgba(0,0,0,0.25)]
                       transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] 
                       hover:-translate-y-2 hover:scale-[1.02]"
          >
            {/* Decorative glow layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#007C80]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Header */}
            <div className="bg-[#007C80] text-white font-bold py-3 text-center rounded-t-[24px] tracking-wide shadow-sm">
              {title}
            </div>

            {/* Body */}
            <div
              className="flex-grow flex items-center justify-center text-[#1C1C1C] px-4 py-3 text-sm md:text-base text-center"
              style={{ fontFamily: "TT Commons Pro" }}
            >
              {description}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
