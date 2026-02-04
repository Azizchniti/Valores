"use client";

import React from "react";
import Image from "next/image";
export default function AboutSection() {
  return (
    <section className="relative bg-transparent md:-mt-10 z-10">
      <div
        className="relative max-w-[1600px] mx-auto overflow-hidden rounded-t-[48px]"
        style={{
          backgroundColor: "#4FB3B6",
          backgroundImage: "url('/image/backgrounds/Grid.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "700px",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-12 mt-12 flex flex-col md:flex-row items-center md:items-start">
          
          {/* IMAGE */}
          <div className="absolute top-[-110%] right-[-20%] hidden md:block">
            <div className="relative w-[110vw] max-w-[880px] aspect-[3/4]">
              <Image
                src="/image/Modelos.png"
                alt="Equipe Valores"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="max-w-full md:max-w-[480px] md:ml-16 mx-auto flex flex-col items-center md:items-start text-center md:text-left">

            <h1 className="text-white text-[20px] sm:text-[24px] md:text-[38px] lg:text-[28px] leading-[1.2] tracking-wide font-semibold uppercase">
              <span className="text-black">
                SIMPLIFICAMOS PROCESSOS
              </span>
              <br />
              PARA IMPACTAR A EXPERIÊNCIA <br />
              DO SEU CLIENTE E COLABORADOR
            </h1>

            <p className="mt-6 text-white text-[16px] sm:text-[18px] leading-[1.45]">
              A Valores é uma empresa de tecnologia e consultoria em
              gestão empresarial focada em médias e grandes
              corporações.
            </p>

            <p className="mt-4 text-white text-[16px] sm:text-[18px] leading-[1.45]">
              Com mais de <strong>83 especialistas</strong>, atuamos em todo o
              território nacional e em projetos internacionais.
              Construímos empresas sustentáveis, equipes de alta
              performance e resultados estratégicos.{" "}
              <strong>Valores que constroem legados.</strong>
            </p>

            <div className="mt-8 text-center md:text-left">
              <p className="text-white text-[14px] font-semibold">
                Edson Andrade
              </p>
              <p className="text-white/70 text-[12px]">
                Diretor Executivo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
