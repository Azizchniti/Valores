"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const KPIS = [
  { icon: "/logos/kpi1.png", value: "+3.277", subtitle: "Fluxos de trabalho automatizados" },
  { icon: "/logos/kpi2.png", value: "+2.2 Mi", subtitle: "De horas humanas economizadas anualmente" },
  { icon: "/logos/kpi3.png", value: "3.508%", subtitle: "De ROI gerado para nossos clientes" },
  { icon: "/logos/kpi4.png", value: "4-6 Meses", subtitle: "Tempo médio de Payback dos projetos" },
];

const SOLUTIONS = [
  {
    icon: "/logos/sol1.png",
    title: "Automação de Processos",
    description: "Elimine gargalos, reduza custos operacionais e libere sua equipe para focar no que realmente importa: a inovação.",
    buttonText: "Conheça a Automação Inteligente",
  },
  {
    icon: "/logos/sol2.png",
    title: "Governança Corporativa",
    description: "Estruture o crescimento sustentável com processos transparentes, compliance (ESG, ISO, ONA) e uma cultura de melhoria contínua que blinda seu negócio.",
    buttonText: "Descubra a Governança 4P's",
  },
  {
    icon: "/logos/sol3.png",
    title: "Inteligência Comercial",
    description: "Transforme dados em decisões estratégicas. Otimize canais de venda, aumente a performance e acelere o crescimento com uma visão 360º do seu mercado.",
    buttonText: "Veja a Inteligência em Ação",
  },
];

export default function ResultadosSection() {
  return (
      <section className="relative">
        {/* Top background: white */}
        <div className="absolute inset-x-0 top-0 h-[33%] bg-white rounded-t-[92px]" />

        {/* Bottom background: dark */}
        <div className="absolute inset-x-0 bottom-0 h-[67%] bg-[#000409] rounded-b-[92px]" />

        {/* Main container */}
        <div className="relative z-10 rounded-[92px] bg-[#E0E0E0] py-16 px-6 md:py-20 md:px-10">
        {/* First Title */}
        <div className="text-center">
          <h2
            className="text-[#01050A] font-extrabold uppercase mt-2"
            style={{
              fontFamily: "TT Commons Pro",
              fontSize: "26px",
              lineHeight: "38px",
              letterSpacing: "0.8px",
              fontWeight: 900,
            }}
          >
            RESULTADOS QUE REDEFINEM <br /> O SEU NEGÓCIO
          </h2>
          <div className="mx-auto mt-2 h-[3px] w-[140px] bg-[#58A8AB] rounded-full" />
        </div>

      {/* KPI Section */}
<div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2">
  {KPIS.map(({ icon, value, subtitle }, i) => {
    // Parse numeric part for CountUp
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
    const isMillion = value.includes("Mi");
    const isPlus = value.includes("+");

    return (
      <motion.div
        key={i}
        className="flex flex-col items-center p-0 m-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
      >
        <Image src={icon} alt={`kpi-${i}`} width={40} height={40} className="mb-2" />
      <h3
        className="text-[#000] font-extrabold uppercase m-0 leading-none"
        style={{ fontFamily: "TT Commons Pro", fontSize: "24px", letterSpacing: "0.5px" }}
      >
        {i < 3 ? ( // change from i < 2 to i < 3
          <CountUp
            start={0}
            end={numericValue}
            duration={10}
            decimals={numericValue % 1 !== 0 ? 1 : 0}
            prefix={isPlus ? "+" : ""}
            suffix={isMillion ? " Mi" : value.includes("%") ? "%" : ""}
            redraw={true} // re-animates each scroll
          />
        ) : (
          value
        )}
      </h3>
        <p
          className="text-[#000] font-normal m-0 mt-2 text-center max-w-[160px]"
          style={{ fontFamily: "TT Commons Pro", fontSize: "15px", lineHeight: "18px" }}
        >
          {subtitle}
        </p>
      </motion.div>
    );
  })}
</div>


        {/* Second Title */}
        <div className="mt-16 text-center">
          <h2
            className="text-[#01050A] font-extrabold uppercase"
            style={{
              fontFamily: "TT Commons Pro",
              fontSize: "28px",
              lineHeight: "40px",
            }}
          >
            Soluções integradas para uma <br /> gestão à prova de futuro
          </h2>
          <div className="mx-auto mt-2 h-[3px] w-[300px] bg-[#58A8AB] rounded-full" />
        </div>

        {/* Solutions Section */}
        <div className="mt-12 grid grid-flow-col auto-cols-max gap-x-4 justify-center">
        {SOLUTIONS.map(({ icon, title, description, buttonText }, i) => (
        <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
             whileHover={{ scale: 1.05, rotateY: i % 2 === 0 ? 5 : -5, transition: { type: "spring", stiffness: 150 } }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
            className="flex flex-col items-center w-[260px] min-h-[430px] rounded-[30px] border-[2px] border-[#58A8AB] bg-[#005255] p-5 gap-4"
          >
            {/* Icon container with fixed height */}
            <div className="flex items-center justify-center w-full" style={{ minHeight: "70px" }}>
              <Image src={icon} alt={`sol-${i}`} width={50} height={50} />
            </div>

            {/* Title */}
            <h3
              className="text-white font-bold uppercase text-center"
              style={{
                fontFamily: "TT Commons Pro",
                fontSize: "22px",
                lineHeight: "28px",
              }}
            >
              {title}
            </h3>

            {/* Description */}
            <p
              className="text-white text-center"
              style={{
                fontFamily: "TT Commons Pro",
                fontSize: "18px",
                lineHeight: "20px",
                fontWeight: 300,
                opacity: 0.7,
              }}
            >
              {description}
            </p>

    {/* Buttons with redirect */}
    {i === 0 ? (
   <Link
  href="/page2"
  scroll={false}
  onClick={() => window.scrollTo(0, 0)}
  className="w-full mt-auto flex"
>
  <button
    className="w-full flex items-center justify-start gap-2 
      rounded-full bg-[#58A8AB] py-2 px-4 
      text-white font-semibold text-[0.8rem] leading-tight
      shadow-[0_8px_20px_0_rgba(88,168,171,0.15)]
      transition-all duration-300 ease-in-out
      hover:bg-[#49A2A5] hover:shadow-[0_12px_20px_0_rgba(88,168,171,0.2)]
      hover:scale-105
      overflow-hidden whitespace-nowrap"
    style={{
      fontFamily: "TT Commons Pro",
      letterSpacing: "-0.2px",
    }}
  >
    <span className="flex w-[20px] h-[20px] items-center justify-center bg-[#fafdff] rounded-full transition-colors duration-300 hover:bg-[#e0f4ff] shrink-0">
      <Image alt="Arrow" src="/image/icons/arrow.png" width={10} height={10} />
    </span>
    <span className="truncate shrink text-center">{buttonText}</span>
  </button>
</Link>

    ) : i === 1 ? (
      <Link href="/page3" onClick={() => window.scrollTo(0,0)} scroll={false} className="w-full mt-auto flex">
        <button
          className="w-full flex items-center justify-start gap-3 rounded-full bg-[#58A8AB]
           py-1 px-2 text-white font-semibold text-sm whitespace-nowrap
            shadow-[0_80px_30px_0_rgba(88,168,171,0.05)] text-xs
            transition-all duration-300 ease-in-out
            hover:bg-[#49A2A5] hover:shadow-[0_12px_20px_0_rgba(88,168,171,0.2)] 
            hover:scale-105"
          style={{ fontFamily: "TT Commons Pro" }}
        >
          <span>
            <div className="flex w-[20px] h-[20px] items-center justify-center p-1 bg-[#fafdff] 
            rounded-full transition-colors duration-300
            hover:bg-[#e0f4ff]">
              <Image alt="Arrow" src="/image/icons/arrow.png" width={10} height={10} />
            </div>
          </span>
          {buttonText}
        </button>
      </Link>
    ) : 
    i === 2 ? (
      <Link href="/page4" scroll={false} onClick={() => window.scrollTo(0,0)} className="w-full mt-auto flex">
        <button
          className="w-full flex items-center justify-start gap-3 rounded-full bg-[#58A8AB] py-1 px-2 
          text-white font-semibold text-sm whitespace-nowrap shadow-[0_80px_30px_0_rgba(88,168,171,0.05)]
           text-xs  transition-all duration-300 ease-in-out
            hover:bg-[#49A2A5] hover:shadow-[0_12px_20px_0_rgba(88,168,171,0.2)] 
            hover:scale-105"
          style={{ fontFamily: "TT Commons Pro" }}
        >
          <span>
            <div className="flex w-[20px] h-[20px] items-center justify-center p-1 bg-[#fafdff] rounded-full
                =rounded-full transition-colors duration-300
              hover:bg-[#e0f4ff]">
              <Image alt="Arrow" src="/image/icons/arrow.png" width={10} height={10} />
            </div>
          </span>
          {buttonText}
        </button>
      </Link>
     ): (
      <button
        className="mt-auto w-full flex items-center justify-start gap-3 rounded-full bg-[#58A8AB] py-1 px-2 text-white font-semibold text-sm whitespace-nowrap shadow-[0_80px_30px_0_rgba(88,168,171,0.05)] text-xs"
        style={{ fontFamily: "TT Commons Pro" }}
      >
        <span>
          <div className="flex w-[20px] h-[20px] items-center justify-center p-1 bg-[#fafdff] rounded-full">
            <Image alt="Arrow" src="/image/icons/arrow.png" width={10} height={10} />
          </div>
        </span>
        {buttonText}
      </button>
      )}
   </motion.div>
))}
        </div>
      </div>
    </section>
  );
}
