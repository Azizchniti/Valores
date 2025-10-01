"use client";

import React from "react";
import Image from "next/image";

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
    description: "Você passa a gerenciar sua equipe em tempo real com indicadores de performance automatizados.",
  },
  {
    title: "Estudo de Mercado e Expansão",
    description:
      "Usamos geomarketing e IA para identificar novos mercados e prever demandas.",
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
        src="/image/icons/bluearrow.png"
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
        Inteligência Comercial é a capacidade de <br />
        <span className="font-extrabold">antecipar o mercado.</span>
      </h2>

      {/* Subtitle */}
      <p
        className="mt-3 text-[#68788B] max-w-2xl text-sm md:text-base"
        style={{ fontFamily: "TT Commons Pro" }}
      >
          Nossa metodologia data-driven ajuda atacadistas, distribuidoras e indústrias a ler o cenário, prever demandas e estruturar processos e equipes para liderar seu segmento.Deixamos de lado os "achismos" e implementamos uma cultura de decisões baseadas em dados que geram lucro.
      </p>

       <h2
        className="text-white font-extrabold text-lg md:text-xl leading-snug mt-6"
        style={{ fontFamily: "TT Commons Pro" }}
      >
        Nossos projetos entregam uma transformação completa.<br />
     
      </h2>

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
