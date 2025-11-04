"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const DEPARTMENTS = [
  {
    title: "Compras",
    description:
      "Aprovação de pedidos, comparação de cotações, qualificação de fornecedores.",
  },
  {
    title: "Prospecção",
    description:
      "Prospecção 24h de clientes, auditoria de políticas comerciais.",
  },
  {
    title: "RH",
    description: "Recrutamento, onboarding e gestão de férias.",
  },
  {
    title: "Financeiro",
    description:
      "Conciliação bancária, gestão de fluxo de caixa, detecção de fraudes.",
  },
    {
    title: "Logística",
    description:
      "Roteirização inteligente e acompanhamento 24h de frotas.",
  },
];

export default function DepartmentsSection() {
  return (
    <section className="relative w-full py-20 px-6 flex flex-col items-center text-center">
      {/* Background */}
      <Image
        src="/image/backgrounds/teams3.png"
        alt="Background"
        fill
        className="object-cover object-center -z-10"
        priority
      />

      {/* Robot icon */}
      <Image
        src="/image/icons/robot.png"
        alt="Robot Icon"
        width={50}
        height={50}
        className="mb-4"
      />

      {/* Title */}
      <h2
        className="text-white font-extrabold text-lg md:text-xl leading-snug"
      >
        Automatize Qualquer <br />
        <span className="font-extrabold">Departamento, De Ponta A Ponta.</span>
      </h2>

      {/* Subtitle */}
      <p
        className="mt-3 text-[#68788B] max-w-2xl text-sm md:text-base"
      >
        Conectamos todas as áreas da sua empresa, do chão de fábrica à diretoria,
        criando uma operação unificada e inteligente. Veja alguns exemplos:
      </p>

  <div
  className="mt-12 flex flex-wrap justify-center gap-6 w-full max-w-6xl
              md:flex-nowrap md:justify-center"
>
  {DEPARTMENTS.map(({ title, description }, i) => (
    <motion.div
      key={i}
      className="flex-shrink-0 flex flex-col items-stretch w-[220px] min-h-[220px] rounded-[20px] overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.7, delay: i * 0.15, ease: 'easeOut' }}
    >
      {/* Header */}
      <div className="bg-[#007C80] text-white font-bold py-3 text-center rounded-t-[20px]">
        {title}
      </div>

      {/* Body */}
      <div
        className="flex-grow flex items-center justify-center bg-[#D9D9D9] px-4 py-3 
                   text-[#323232] text-sm sm:text-base text-center leading-snug
                   rounded-b-[20px] whitespace-normal"
        style={{
          wordBreak: 'break-word', // makes sure long words don’t overflow
        }}
      >
        {description}
      </div>
    </motion.div>
  ))}
</div>


    </section>
  );
}
