"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  // Your 19 logos
  const logos = Array.from({ length: 19 }, (_, i) => `logo${i + 1}`);

  // Break logos into rows of 4
  const rows = [];
  for (let i = 0; i < logos.length; i += 4) {
    rows.push(logos.slice(i, i + 4));
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.6, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 12 },
    },
    hover: {
      scale: 1.15,
      rotate: 3,
      filter: "drop-shadow(0px 0px 12px rgba(88,168,171,0.6))",
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };

  return (
    <section className="relative py-24 px-6 bg-[#000409] overflow-hidden">
      {/* Background glow gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001219] via-[#000409] to-[#000409] opacity-90"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[70%] h-[40%] bg-[#58A8AB]/20 blur-3xl rounded-full"></div>

      <motion.div
        className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Left Text Section */}
        <motion.div
          className="flex flex-col gap-4 text-white"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2
            className="uppercase font-extrabold max-w-md mt-12 ml-8 tracking-wider"
            style={{ fontSize: "32px", lineHeight: "normal" }}
          >
            A CONFIANÇA DE LÍDERES EM DIVERSOS SETORES
          </h2>

          <p
            className="text-[#A7B6C5] font-light max-w-md mt-8 ml-8 text-justify leading-relaxed"
            style={{ fontSize: "18px" }}
          >
            Nossa expertise transcende setores. Navegamos com a mesma
            desenvoltura pelo agronegócio, indústria, educação e varejo. Por quê?
            Porque a gestão de alta performance não depende do segmento, mas da
            coragem de recalcular a rota.
          </p>
        </motion.div>

        {/* Right Logos Grid */}
        <motion.div
          className="w-full flex flex-col mr-8"
          variants={containerVariants}
        >
          {rows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 py-6 ${
                rowIndex < rows.length - 1 ? "border-b border-gray-800/70" : ""
              }`}
              variants={containerVariants}
            >
              {row.map((logo, idx) => (
                <motion.div
                  key={idx}
                  className="relative w-full h-16 flex items-center justify-center cursor-pointer group"
                  variants={logoVariants as any}
                  whileHover="hover"
                >
                  {/* Logo image */}
                  <Image
                    src={`/logos/${logo}.png`}
                    alt={logo}
                    fill
                    className="object-contain transition-all duration-300 group-hover:opacity-100"
                  />

                  {/* Hover highlight ring */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl bg-gradient-to-tr from-[#58A8AB]/30 via-transparent to-transparent blur-sm"></div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
