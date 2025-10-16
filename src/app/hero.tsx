"use client";

import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  const statisticsData = [
    {
      id: 1,
      title: "Fluxos de trabalho automatizados",
      value: "+3.277",
      progress: 90, // %
       style: "translate-y-[17rem] -translate-x-[450px]",
    },
    {
      id: 2,
      title: "Horas humanas economizadas anualmente",
      value: "+2.2 Milhões",
      progress: 70, // %
      style: "translate-y-[11rem] -translate-x-[50px]",
    },
  ];

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
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

      {/* Main content */}
     <div
  className="
    relative z-10 flex flex-col gap-4 
    max-w-md          /* narrower width → taller block */
    pl-12 md:pl-28    /* aligns with navbar */
    top-1/4
  "
>
    <h1 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold text-white leading-snug">
      Sua empresa opera no <span className="text-[#58a8ab]">máximo potencial</span> ou apenas no limite do possível?
    </h1>

    <p className="text-sm md:text-base lg:text-base xl:text-lg text-[#68778a] font-light leading-relaxed">
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
    className="flex items-center gap-3 px-5 py-2 bg-[#58a8ab] rounded-full border-solid shadow-[0px_6px_16px_#58a8ab57,0px_20px_20px_#58a8ab4c] hover:bg-[#4a9699] transition leading-snug whitespace-nowrap"
  >
    <div className="flex w-7 h-7 items-center justify-center bg-[#fafdff] rounded-full">
      <Image alt="Arrow" src="/image/icons/arrow.png" width={12} height={12} />
    </div>
    <span className="font-bold text-[#000409] text-sm">
      SOLICITAR DIAGNÓSTICO ESTRATÉGICO
    </span>
  </button>


</div>


      {/* Stats */}
      <div className="absolute top-1/4 right-12 flex gap-4">
        {statisticsData.map((stat) => (
          <div
            key={stat.id}
            className={`z-10 w-[160px] h-[90px] bg-[#000408ad] rounded-xl backdrop-blur-md p-2 flex flex-col ${stat.style}`}
          >
            <h3 className="font-bold text-[#e3e3e3] text-xs leading-tight">
              {stat.title}
            </h3>
            <p className="text-[#58a8ab] font-semibold text-sm">{stat.value}</p>

            {/* Progress bar */}
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
