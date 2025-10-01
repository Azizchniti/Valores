"use client";

import React from "react";
import Image from "next/image";

const KPIS = [
  { icon: "/logos/kpi1.png", value: "+3.277", subtitle: "Fluxos de trabalho automatizados" },
  { icon: "/logos/kpi2.png", value: "+2.2 Mi", subtitle: "De horas humanas economizadas anualmente" },
  { icon: "/logos/kpi3.png", value: "3.508%", subtitle: "De ROI gerado para nossos clientes" },
  { icon: "/logos/kpi4.png", value: "4-6 Meses", subtitle: "Tempo médio de Payback dos projetos" },
];

export default function ResultadosSection() {
  return (
    <section className="relative">
      {/* Main container */}
      <div className="relative z-10 bg-[#E0E0E0] py-16 px-6 md:py-20 md:px-10">
        {/* First Title */}
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

        {/* KPI Section */}
        <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {KPIS.map(({ icon, value, subtitle }, i) => (
            <div key={i} className="flex flex-col items-center p-0 m-0">
              <Image
                src={icon}
                alt={`kpi-${i}`}
                width={50}
                height={50}
                className="mb-3 drop-shadow-md contrast-125"
              />
              <h3
                className="text-[#000] font-black uppercase m-0 leading-none"
                style={{
                  fontFamily: "TT Commons Pro",
                  fontSize: "26px",
                  letterSpacing: "0.5px",
                  fontWeight: 1150,
                }}
              >
                {value}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
