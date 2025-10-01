"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

export default function AboutSection() {
  return (
    <section className="py-20 px-8 bg-gray-50">
      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-8 relative">
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src="/image/man.png"
            alt="Business illustration"
            width={320}
            height={450}
            className="rounded-[20px] shadow-lg object-cover"
          />
        </div>

        {/* Right side - Text with vertical bar */}
        <div className="w-full lg:w-1/2 flex gap-4">
          {/* Vertical bar */}
          <div className="w-1 bg-blue-200 rounded-full mt-2" />

          {/* Text */}
    <div className="flex flex-col items-start gap-6 max-w-sm">
  <Typography
              variant="h2"
              className="text-xl lg:text-2xl font-bold leading-snug"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}  >
    <span className="text-blue-200">Descomplicamos a complexidade</span>{" "}
    para empoderar negócios
  </Typography>

  <Typography
              className="text-base lg:text-lg text-gray-700 leading-relaxed"  placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}  >
    A Valores é uma consultoria de gestão e tecnologia focada em médias e
    grandes corporações. <br /> <br />
    Com mais de 83 especialistas, atuamos em todo o território nacional e
    em projetos internacionais para um único fim: construir empresas
    sustentáveis, com equipes de alta performance e resultados
    estratégicos. Acreditamos que o fundamental é ter Valores.
  </Typography>
</div>


        </div>
      </div>
    </section>
  );
}
