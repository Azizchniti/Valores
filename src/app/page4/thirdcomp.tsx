"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const DEPARTMENTS = [
  {
    title: "Precificação Estratégica",
    description:
      "Implementamos pricing dinâmico para maximizar suas margens em cada venda.",
  },
  {
    title: "Estruturação de S&OP e S&OE",
    description:
      "Alinhamos planejamento e operação para otimizar vendas, estoque e logística.",
  },
  {
    title: "Automação de KPIs Comerciais",
    description:
      "Você passa a gerenciar sua equipe em tempo real com indicadores de performance automatizados.",
  },
  {
    title: "Estudo de Mercado e Expansão",
    description:
      "Usamos geomarketing e IA para identificar novos mercados e prever demandas.",
  },
];

export default function DepartmentsSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40, rotateY: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        mass: 0.8,
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <section className="relative w-full py-20 px-6 flex flex-col items-center text-center overflow-hidden">
      {/* Background */}
      <Image
        src="/image/backgrounds/teams3.png"
        alt="Background"
        fill
        className="object-cover object-center -z-10"
        priority
      />

      {/* Icon */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src="/image/icons/bluearrow.png"
          alt="Robot Icon"
          width={50}
          height={50}
          className="mb-4"
        />
      </motion.div>

      {/* Titles */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-white font-extrabold text-lg md:text-xl leading-snug"
        style={{ fontFamily: "Luxora Grotesk" }}
      >
        Inteligência Comercial é a capacidade de <br />
        <span className="font-extrabold">antecipar o mercado.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-3 text-[#68788B] max-w-2xl text-sm md:text-base"
        style={{ fontFamily: "Luxora Grotesk" }}
      >
        Nossa metodologia data-driven ajuda atacadistas, distribuidoras e indústrias
        a ler o cenário, prever demandas e estruturar processos e equipes para
        liderar seu segmento. Deixamos de lado os {"achismos"} e implementamos
        uma cultura de decisões baseadas em dados que geram lucro.
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="text-white font-extrabold text-lg md:text-xl leading-snug mt-8"
        style={{ fontFamily: "Luxora Grotesk" }}
      >
        Nossos projetos entregam uma transformação completa.
      </motion.h2>

      {/* Cards */}
      <motion.div
        className="mt-12 flex justify-center flex-wrap gap-6 w-full max-w-6xl"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {DEPARTMENTS.map(({ title, description }, i) => (
         <motion.div
            key={i}
            variants={cardVariants as any} // <-- quick workaround
            whileHover={{ scale: 1.05, rotateY: i % 2 === 0 ? 5 : -5, transition: { type: "spring", stiffness: 150 } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-shrink-0 flex flex-col items-stretch w-[220px] min-h-[220px] rounded-[20px] overflow-hidden shadow-lg cursor-pointer"
          >

            {/* Header */}
            <div className="bg-[#007C80] text-white font-bold py-3 text-center rounded-t-[20px]">
              {title}
            </div>

            {/* Body */}
            <div
              className="flex-grow flex items-center justify-center bg-[#D9D9D9] px-4 py-3 text-[#323232] text-sm md:text-base text-center rounded-b-[20px]"
              style={{ fontFamily: "Luxora Grotesk" }}
            >
              {description}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
