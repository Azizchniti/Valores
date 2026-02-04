"use client";

import React from "react";
import Image from "next/image";

export default function Partners() {
  const logos = Array.from({ length: 19 }, (_, i) => `logo${i + 1}`);

  const rows = [];
  for (let i = 0; i < logos.length; i += 4) {
    rows.push(logos.slice(i, i + 4));
  }

  return (
   <section className="relative">
  {/* MAIN PART */}
  <div className="relative z-10 py-24 px-6 overflow-hidden rounded-b-[92px] bg-[#000000]">
    
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
      
      {/* LEFT COLUMN */}
      <div className="
            flex
            flex-col
            justify-between
            text-white
            ml-0 lg:ml-24
          ">
        <div className="
            flex
            flex-col
            gap-4
            max-w-md
            mx-auto lg:mx-0
          ">
         <h2 className="
              uppercase
              font-regular
              tracking-wide
              text-[1.6rem] sm:text-[1.8rem] md:text-[2rem] xl:text-[2.25rem]
              leading-tight
              text-center lg:text-left
            ">
            <span style={{ color: "#58A8AB" }}>CONFIANÇA</span> DE LÍDERES EM DIVERSOS SETORES
          </h2>

          <p className="text-[#A7B6C5] font-regular text-justify text-[1rem] md:text-[1.125rem] xl:text-[1.25rem] leading-relaxed">
            Nossa expertise transcende setores. Navegamos com a mesma desenvoltura pelo agronegócio, indústria, educação e varejo.
          </p>

          <p className="text-[#A7B6C5] font-regular text-justify text-[1rem] md:text-[1.125rem] xl:text-[1.25rem] leading-relaxed">
            Por quê? Porque a gestão de alta performance não depende do segmento, mas da coragem de recalcular a rota.
          </p>
        </div>

        <button
          onClick={() => {
            const target = document.getElementById("trabalhe");
            if (target) target.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex items-center gap-3 px-5 py-2 bg-[#58a8ab] rounded-full shadow-[0px_6px_16px_#58a8ab57,0px_20px_20px_#58a8ab4c] hover:bg-[#4a9699] transition max-w-md mt-8"
        >
          <div className="flex w-7 h-7 items-center justify-center bg-[#fafdff] rounded-full">
            <Image alt="WhatsApp" src="/image/icons/whatsapp2.png" width={20} height={20} />
          </div>
          <span className="text-[#FFFFFF] text-base md:text-lg">
            SOLICITAR DIAGNÓSTICO <span className="font-regular">GRATUITO!</span>
          </span>
        </button>
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex flex-col justify-between mr-8">
        <div className="flex flex-col">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 py-4">
              {row.map((logo, idx) => (
                <div key={idx} className="relative w-full h-14 flex items-center justify-center">
                  <Image src={`/logos/${logo}.png`} alt={logo} fill className="object-contain" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
  {/* BOTTOM CONTINUATION BACKGROUND */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 md:h-32"
          style={{
          backgroundColor: "#9ECFD0",
          backgroundImage: "url('/image/backgrounds/Grid.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "700px",
          
        }}
        />
</section>

  );
}
