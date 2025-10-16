"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SecondComp() {
  const challenges = [
    "Baixa rentabilidade e margens de lucro cada vez mais apertadas?",
    "Dificuldade em expandir a base de clientes e aumentar a recorrência de compras?",
    "Falta de previsibilidade nas vendas que impacta todo o fluxo de caixa?",
    "Equipe comercial desalinhada e com performance abaixo do potencial?",
  ];

  return (
    <section className="relative py-16 px-6 bg-gray-50 flex flex-col items-center text-center overflow-hidden">
      {/* Title Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-lg md:text-xl font-extrabold uppercase text-gray-900"
      >
        Sua operação comercial enfrenta estes desafios?
      </motion.h2>

      {/* Pills with staggered animation */}
      <motion.div
        className="mt-8 flex flex-col gap-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {challenges.map((text, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08 }}
            variants={{
              hidden: { opacity: 0, x: -30, scale: 0.95 },
              visible: {
                opacity: 1,
                x: 0,
                scale: 1,
                transition: { duration: 0.6, ease: "easeOut" },
                
              },
            }}
            className="flex items-center gap-2 bg-[#58A8AB] text-black px-5 py-2.5 rounded-full font-semibold text-sm shadow-md hover:scale-105 transition-transform duration-300"
          >
            <Image
              src="/image/icons/block.png"
              alt="icon"
              width={18}
              height={18}
              className="flex-shrink-0"
            />
            {text}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
