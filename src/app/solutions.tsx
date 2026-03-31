"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import SolutionsInteractive from "./SolutionsInteractive";
import { useInView } from "framer-motion";

const KPI_COLOR = "#203b5eff";
const ACCENT_COLOR = "#58A8AB";

const KPIS = [
  {
    number: 3.277,
    suffix: "Mil",
    prefix: "+",
    subtitle: "Fluxos de trabalho automatizados",
  },
  {
    number: 2.2,
    suffix: "Mi",
    prefix: "+",
    subtitle: "De horas humanas economizadas anualmente",
  },
  {
    number: 3.508,
    suffix: "%",
    prefix: "+",
    subtitle: "De ROI gerado para nossos clientes",
  },
  {
    number: "4-6",
    suffix: "meses",
    prefix: "",
    subtitle: "Tempo médio de Payback dos projetos",
  },
];

interface Solution {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
}

const SOLUTIONS: Solution[] = [
  {
    icon: "/logos/sol1.png",
    title: "Automação de Processos",
    description:
      "Elimine gargalos, reduza custos operacionais e libere sua equipe para focar no que realmente importa: a inovação.",
    buttonText: "Conheça a Automação Inteligente",
  },
  {
    icon: "/logos/sol23.png",
    title: "Inteligência Comercial",
    description:
      "Transforme dados em decisões estratégicas. Otimize canais de venda, aumente a performance e acelere o crescimento com uma visão 360º do seu mercado.",
    buttonText: "Veja a Inteligência em Ação",
  },
  {
    icon: "/logos/sol22.png",
    title: "Governança Corporativa",
    description:
      "Estruture o crescimento sustentável com processos transparentes, compliance (ESG, ISO, ONA) e uma cultura de melhoria contínua que blinda seu negócio.",
    buttonText: "Descubra a Governança 4P's",
  },
];

export default function ResultadosSection() {
  const ref = React.useRef(null);
const isInView = useInView(ref, { once: true });
  return (
    <section className="relative">
      {/* TOP BACKGROUND */}
      <div
        className="absolute inset-x-0 top-0 h-24 md:h-32"
        style={{
          backgroundColor: "#4FB3B6",
          backgroundImage: "url('/image/backgrounds/Grid.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "700px",
        }}
      />

      {/* BOTTOM BACKGROUND */}
      <div
        className="absolute inset-x-0 bottom-0 h-24 md:h-32"
        style={{ backgroundColor: "#000000" }}
      />

      {/* MAIN CONTAINER */}
      <div
        className="relative z-10 rounded-t-[92px] rounded-b-[92px] py-12 px-4 md:py-20 md:px-10 w-full"
        style={{ backgroundColor: "#E0E0E0" }}
      >
        {/* TITLE */}
      <div className="text-center">
      <h2 className="text-[#01050A] font-bold uppercase mt-2 text-lg md:text-[32px] leading-7 md:leading-[42px] tracking-wide">
        RESULTADOS QUE REDEFINEM O
        <br />
        <span className="text-[#58A8AB] font-bold"> SEU NEGÓCIO</span>
      </h2>
    </div>

    {/* KPI SECTION */}
    <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-x-2 md:gap-y-2">
      {KPIS.map(({ number, suffix, prefix, subtitle }, i) => (
        
        <motion.div
          key={i}
           ref={ref}
          className="flex flex-col items-center w-full sm:w-[200px] md:w-[280px] px-2"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: i * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h3 className="uppercase leading-none text-center font-bold text-3xl sm:text-3xl md:text-[34px] tracking-tight">
            {typeof number === "number" ? (
              <span className="flex items-end justify-center gap-1">
                {prefix && (
                  <span
                    style={{ color: ACCENT_COLOR }}
                    className="text-[0.8em] font-bold"
                  >
                    {prefix}
                  </span>
                )}

                <span
                  style={{
                    color: KPI_COLOR,
                    textShadow: "0px 0px 12px rgba(88,168,171,0.25)",
                  }}
                  className="font-bold"
                      >
                  <CountUp
                  key={isInView ? "visible" : "hidden"}
                  start={0}
                  end={number}
                  duration={4.0}
                  decimals={number % 1 !== 0 ? 1 : 0}
                  separator="."
                  useEasing
                />
                </span>

                <span
                  style={{ color: ACCENT_COLOR }}
                  className="text-[0.6em] ml-1 font-bold tracking-wide"
                >
                  {suffix}
                </span>
              </span>
            ) : (
              <span className="flex items-end justify-center gap-1">
                <span style={{ color: KPI_COLOR }} className="font-bold">
                  {number}
                </span>
                <span
                  style={{ color: ACCENT_COLOR }}
                  className="text-[0.7em] font-bold"
                >
                  {suffix}
                </span>
              </span>
            )}
          </h3>

          <p className="text-center text-base md:text-[16px] leading-snug mt-2 max-w-[140px] md:max-w-[160px] font-semibold">
            {subtitle}
          </p>
        </motion.div>
      ))}
    </div>

        {/* SECOND TITLE */}
        <div className="mt-16 text-center">
         <h2 className="text-[#01050A] font-bold uppercase mt-2 text-lg md:text-[32px] leading-7 md:leading-[42px] tracking-wide">
            Soluções integradas para uma <br />
            <span className="text-[#58A8AB]">
              gestão à prova de tempo
            </span>
          </h2>
        </div>

        {/* SOLUTIONS */}
        <SolutionsInteractive solutions={SOLUTIONS} />
      </div>
    </section>
  );
}