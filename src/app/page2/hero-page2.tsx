"use client";

import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Background */}
      <Image
        src="/image/backgrounds/bgteam.png"
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
  <h1 className="text-xl md:text-2xl font-bold text-white leading-snug">
    Sua equipe gasta tempo trabalhando ou apenas executando tarefas?
  </h1>

  <p className="text-[#68778a] text-sm md:text-base font-light leading-relaxed">
    Liberte o potencial humano da sua empresa. Nós automatizamos o trabalho operacional para que seu time foque em estratégia, inovação e crescimento.
  </p>

  {/* Button */}
  <button
  onClick={() => {
    const target = document.getElementById("trabalhe");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="flex items-center gap-3 px-5 py-2 bg-[#58a8ab] rounded-full border-solid shadow-[0px_6px_16px_#58a8ab57,0px_20px_20px_#58a8ab4c] hover:bg-[#4a9699] transition leading-snug max-w-xs"
>
    <div className="flex w-7 h-7 items-center justify-center bg-[#fafdff] rounded-full">
      <Image alt="Arrow" src="/image/icons/arrow.png" width={12} height={12} />
    </div>
    <span className="font-bold text-[#000409] text-sm text-left">
      Diagnosticar Meus Processos
    </span>
  </button>
</div>

    </section>
  );
};

export default Hero;
