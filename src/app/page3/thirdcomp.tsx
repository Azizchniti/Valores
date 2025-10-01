"use client";

import React from "react";
import Image from "next/image";

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
        style={{ fontFamily: "TT Commons Pro" }}
      >
        Automatize Qualquer <br />
        <span className="font-extrabold">Departamento, De Ponta A Ponta.</span>
      </h2>

      {/* Subtitle */}
      <p
        className="mt-3 text-[#68788B] max-w-2xl text-sm md:text-base"
        style={{ fontFamily: "TT Commons Pro" }}
      >
        Conectamos todas as áreas da sua empresa, do chão de fábrica à diretoria,
        criando uma operação unificada e inteligente. Veja alguns exemplos:
      </p>

    {/* Cards */}
<div className="mt-12 flex justify-center gap-6 w-full max-w-6xl ">
  {DEPARTMENTS.map(({ title, description }, i) => (
    <div
      key={i}
      className="flex-shrink-0 flex flex-col items-stretch w-[220px] min-h-[220px] rounded-[20px] overflow-hidden"
    >
      {/* Header */}
      <div className="bg-[#007C80] text-white font-bold py-3 text-center rounded-t-[20px]">
        {title}
      </div>

      {/* Body */}
      <div
        className="flex-grow flex items-center justify-center bg-[#D9D9D9] px-4 py-2 text-[#323232] text-sm md:text-base text-center rounded-b-[20px]"
        style={{ fontFamily: "TT Commons Pro" }}
      >
        {description}
      </div>
    </div>
  ))}
</div>


    </section>
  );
}
