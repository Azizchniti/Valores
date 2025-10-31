"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

export default function AboutSection() {
  return (
    <section className="relative py-20 px-8 overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-stretch gap-8 relative">
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-stretch">
          <div className="relative w-full max-w-sm h-auto lg:h-full flex items-center">
            <Image
              src="/image/Foto_perfil.png"
              alt="Business illustration"
              fill
              className=" object-cover"
            />
          </div>
        </div>

        {/* Right side - Text with vertical bar */}
        <div className="w-full lg:w-1/2 flex gap-4 items-center">
          {/* Vertical bar */}
          <div className="w-1 bg-blue-200 rounded-full self-stretch" />

          {/* Text */}
          <div className="flex flex-col items-start gap-6 max-w-sm">
            <Typography
              variant="h2"
              className="text-xl lg:text-2xl font-bold leading-snug"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              <span style={{ color: "#58a8ab" }}>Descomplicamos a complexidade</span>{" "}
              para empoderar negócios
            </Typography>

            <Typography className="text-base lg:text-lg text-gray-700 leading-relaxed text-justify" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              A Valores é uma consultoria de gestão e tecnologia focada em médias e
              grandes corporações. <br /> <br />
              Com mais de 83 especialistas, atuamos em todo o território nacional e
              em projetos internacionais para um único fim: construir empresas
              sustentáveis, com equipes de alta performance e resultados
              estratégicos. Acreditamos que o fundamental é ter Valores.
            </Typography>

            {/* Signature section */}
            <div className="mt-2">
              <Typography className="font-bold text-black text-base"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                EDSON ANDRADE
              </Typography>
              <Typography className="text-sm text-gray-500 font-light"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Diretor Executivo
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
