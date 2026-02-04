"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import SolutionsInteractive from "./SolutionsInteractive";

const KPIS = [
  { value: "+3.277", subtitle: "Fluxos de trabalho automatizados" },
  { value: "+2.2 Mi", subtitle: "De horas humanas economizadas anualmente" },
  { value: "+3.508%", subtitle: "De ROI gerado para nossos clientes" },
  { value: "4-6 meses", subtitle: "Tempo médio de Payback dos projetos" },
];

const KPI_COLOR = "#203b5eff";
const ACCENT_COLOR = "#58A8AB";

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
  return (
    <section className="relative">
      {/* TOP CONTINUATION BACKGROUND */}
      <div
        className="absolute inset-x-0 top-0 h-24 md:h-32"
        style={{
          backgroundColor: "#4FB3B6",
          backgroundImage: "url('/image/backgrounds/Grid.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "700px",
        }}
      />

      {/* BOTTOM CONTINUATION BACKGROUND */}
      <div
        className="absolute inset-x-0 bottom-0 h-24 md:h-32"
        style={{
          backgroundColor: "#000000",
        }}
      />

      {/* MAIN CONTAINER / CARD */}
      <div
        className="relative z-10 rounded-t-[92px] rounded-b-[92px] py-12 px-4 md:py-20 md:px-10 mx-auto max-w-[1600px]"
        style={{ backgroundColor: "#E0E0E0" }}
      >
        {/* First Title */}
        <div className="text-center">
          <h2 className="text-[#01050A] font-regular uppercase mt-2 text-lg md:text-[26px] leading-7 md:leading-[38px] tracking-wide">
            RESULTADOS QUE REDEFINEM O
            <br />
            <span className="text-[#58A8AB]"> SEU NEGÓCIO</span>
          </h2>
        </div>

        {/* KPI Section */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-x-2 md:gap-y-2">
          {KPIS.map(({ value, subtitle }, i) => {
            const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
            const isPlus = value.includes("+");

            return (
              <motion.div
                key={i}
                className="flex flex-col items-center w-full sm:w-[200px] md:w-[280px] px-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
              >
                <h3 className="uppercase leading-none text-center font-regular text-2xl sm:text-3xl md:text-[34px] tracking-tight">
                  {i < 3 ? (
                    <span>
                      {isPlus && (
                        <span style={{ color: ACCENT_COLOR, marginRight: "2px" }}>+</span>
                      )}
                      <span style={{ color: KPI_COLOR }}>
                        <CountUp
                          start={0}
                          end={numericValue}
                          duration={15}
                          decimals={numericValue % 1 !== 0 ? 1 : 0}
                          redraw
                        />
                        {(i === 0 || i === 1) && " mi"}
                        {i === 2 && "%"}
                      </span>
                    </span>
                  ) : (
                    <span>
                      <span style={{ color: KPI_COLOR }}>4–6</span>
                      <span
                        style={{
                          color: ACCENT_COLOR,
                          fontSize: "20px",
                          fontWeight: 600,
                          marginLeft: "4px",
                          textTransform: "lowercase",
                        }}
                      >
                        meses
                      </span>
                    </span>
                  )}
                </h3>
                <p className="text-center text-sm md:text-[15px] mt-2 max-w-[140px] md:max-w-[160px]">
                  {subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Second Title */}
        <div className="mt-16 text-center">
          <h2 className="text-[#01050A] font-regular uppercase text-lg sm:text-xl md:text-[28px] leading-7 sm:leading-8 md:leading-[40px]">
            Soluções integradas para uma <br />
            <span className="text-[#58A8AB]">gestão à prova de tempo</span>
          </h2>
        </div>

        {/* Solutions Section */}
        <SolutionsInteractive solutions={SOLUTIONS} />
      </div>
    </section>
  );
}
