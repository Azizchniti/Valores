"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

const KPIS = [
  { icon: "/logos/kpi1.png", value: "+3.277", subtitle: "Fluxos de trabalho automatizados" },
  { icon: "/logos/kpi2.png", value: "+2.2 Mi", subtitle: "De horas humanas economizadas anualmente" },
  { icon: "/logos/kpi3.png", value: "3.508%", subtitle: "De ROI gerado para nossos clientes" },
  { icon: "/logos/kpi4.png", value: "4-6 Meses", subtitle: "Tempo médio de Payback dos projetos" },
];

// ✅ Child component where hooks are used safely
function KPIItem({
  icon,
  value,
  subtitle,
  index,
}: {
  icon: string;
  value: string;
  subtitle: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const isMillion = value.includes("Mi");
  const isPlus = value.includes("+");

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center p-0 m-0"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
    >
      <Image
        src={icon}
        alt={`kpi-${index}`}
        width={50}
        height={50}
        className="mb-3 drop-shadow-md contrast-125"
      />

      <h3
        className="text-[#000] font-extrabold uppercase m-0 leading-none"
        style={{ fontFamily: "TT Commons Pro", fontSize: "24px", letterSpacing: "0.5px" }}
      >
        {index < 3 ? (
          <CountUp
            start={0}
            end={numericValue}
            duration={10}
            decimals={numericValue % 1 !== 0 ? 1 : 0}
            prefix={isPlus ? "+" : ""}
            suffix={isMillion ? " Mi" : value.includes("%") ? "%" : ""}
            redraw={true}
          />
        ) : (
          value
        )}
      </h3>

      <p
        className="text-[#000] font-normal m-0 mt-2 text-center max-w-[160px]"
        style={{
          fontFamily: "TT Commons Pro",
          fontSize: "15px",
          lineHeight: "18px",
        }}
      >
        {subtitle}
      </p>
    </motion.div>
  );
}

export default function ResultadosSection() {
  return (
    <section className="relative">
      <div className="relative z-10 bg-[#E0E0E0] py-16 px-6 md:py-20 md:px-10">
        {/* Section Title */}
        <div className="text-center">
          <h2
            className="text-[#01050A] font-black uppercase mt-2"
            style={{
              fontFamily: "TT Commons Pro",
              fontSize: "26px",
              lineHeight: "38px",
              letterSpacing: "0.8px",
              fontWeight: 950,
            }}
          >
            RESULTADOS QUE REDEFINEM <br /> O SEU NEGÓCIO
          </h2>
          <div className="mx-auto mt-2 h-[3px] w-[140px] bg-[#58A8AB] rounded-full" />
        </div>

        {/* KPI Items */}
        <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {KPIS.map((kpi, i) => (
            <KPIItem
              key={i}
              icon={kpi.icon}
              value={kpi.value}
              subtitle={kpi.subtitle}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
