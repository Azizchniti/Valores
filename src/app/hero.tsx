"use client";

import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  const statisticsData = [
    {
      id: 1,
      title: "Fluxos de trabalho automatizados",
      value: "+3.277",
      progress: 90,
      desktopStyle: "translate-y-[17rem] -translate-x-[450px]",
    },
    {
      id: 2,
      title: "Horas humanas economizadas anualmente",
      value: "+2.2 Milhões",
      progress: 70,
      desktopStyle: "translate-y-[11rem] -translate-x-[50px]",
    },
  ];

  return (
    <section className="relative w-full h-[90vh] md:h-[90vh] overflow-hidden flex items-center">
      {/* Background */}
      <Image
        src="/image/FUNDO.png"
        alt="Fundo"
        fill
        className="object-cover object-center"
        priority
        quality={100}
      />

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#000409] to-transparent" />

      {/* Main text and button */}
      <div
        className="
          relative z-10 flex flex-col gap-4 
          max-w-[90%] md:max-w-md 
          mx-auto md:mx-0 
          text-center md:text-left 
          px-6 md:pl-28
        "
      >
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-snug">
          Sua empresa opera no{" "}
          <span className="text-[#58a8ab]">máximo potencial</span> ou apenas no
          limite do possível?
        </h1>

        <p className="text-sm sm:text-base md:text-base text-[#68778a] font-light leading-relaxed">
          Nós somos a bússola que aponta o caminho para a alta performance.
          Transformamos processos, tecnologia e pessoas no seu maior ativo
          competitivo para destravar resultados que você ainda não alcançou.
        </p>

        {/* Button */}
        <button
          onClick={() => {
            const target = document.getElementById("trabalhe");
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="flex items-center justify-center md:justify-start gap-3 px-5 py-2 bg-[#58a8ab] rounded-full shadow-[0px_6px_16px_#58a8ab57,0px_20px_20px_#58a8ab4c] hover:bg-[#4a9699] transition leading-snug whitespace-nowrap mt-2"
        >
          <div className="flex w-7 h-7 items-center justify-center bg-[#fafdff] rounded-full">
            <Image alt="Arrow" src="/image/icons/arrow.png" width={12} height={12} />
          </div>
          <span className="font-bold text-[#000409] text-xs sm:text-sm">
            SOLICITAR DIAGNÓSTICO ESTRATÉGICO
          </span>
        </button>
      </div>

      {/* Stats */}
      <div
        className="
          absolute 
          flex flex-col md:flex-row gap-4 
          top-[70%] md:top-1/4 
          left-1/2 md:left-auto 
          -translate-x-1/2 md:translate-x-0 
          md:right-12
          items-center md:items-start
        "
      >
        {statisticsData.map((stat) => (
          <div
            key={stat.id}
            className={`
              z-10 w-[150px] sm:w-[160px] h-[80px] sm:h-[90px] 
              bg-[#000408ad] rounded-xl backdrop-blur-md p-2 flex flex-col 
              text-center md:text-left
              md:absolute md:${stat.desktopStyle}
            `}
          >
            <h3 className="font-bold text-[#e3e3e3] text-[10px] sm:text-xs leading-tight">
              {stat.title}
            </h3>
            <p className="text-[#58a8ab] font-semibold text-sm">{stat.value}</p>
            <div className="mt-auto">
              <div className="h-1 bg-white rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#58a8ab] transition-all duration-500"
                  style={{ width: `${stat.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
