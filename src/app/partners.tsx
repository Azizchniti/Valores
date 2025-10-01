"use client";

import React from "react";
import Image from "next/image";

export default function AboutUs() {
  // Generate logo names dynamically
  const logos = Array.from({ length: 19 }, (_, i) => `logo${i + 1}`);

  return (
    <section className="relative py-12 px-6 bg-[#000409] overflow-hidden">
      {/* Background Blur Overlay */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-16 bg-blue-200/20 blur-3xl rounded-full"></div>

      <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Title */}
        <h2
          className="text-white text-center font-[TT Commons Pro] uppercase font-bold mb-4"
          style={{ fontSize: "32px", fontWeight: 700, lineHeight: "normal" }}
        >
          A CONFIANÇA DE LÍDERES EM DIVERSOS SETORES
        </h2>

        {/* Subtitle */}
        <p
          className="text-[#68788B] text-center font-[TT Commons Pro] font-light mb-12 max-w-4xl"
          style={{ fontSize: "18px", lineHeight: "1.3" }}
        >
          Nossa expertise transcende setores. Navegamos com a mesma desenvoltura
          pelo agronegócio, indústria, educação e varejo. Por quê? Porque a
          gestão de alta performance não depende do segmento, mas da coragem de
          recalcular a rota.
        </p>

        {/* Logos Marquee */}
        <div className="w-full overflow-hidden relative">
          <div className="flex animate-marquee gap-8 w-max">
            {logos.concat(logos).map((logo, idx) => (
              <div
                key={idx}
                className="relative w-[140px] h-[60px] flex items-center justify-center flex-shrink-0"
              >
                <Image
                  src={`/logos/${logo}.png`}
                  alt={logo}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          gap: 2rem;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
