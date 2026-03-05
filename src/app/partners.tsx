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
      <div className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-b-[40px] sm:rounded-b-[60px] md:rounded-b-[92px] bg-[#000000]">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-between text-white ml-0 lg:ml-24">
            <div className="flex flex-col gap-3 sm:gap-4 max-w-full lg:max-w-md mx-auto lg:mx-0">
              <h2 className="uppercase font-regular tracking-wide text-2xl sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2.25rem] leading-tight text-center lg:text-left">
                <span style={{ color: "#58A8AB" }}>CONFIANÇA</span> DE LÍDERES EM DIVERSOS SETORES
              </h2>

              <p className="text-[#A7B6C5] font-regular text-center lg:text-left text-[0.9rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] leading-relaxed">
                Nossa expertise transcende setores. Navegamos com a mesma desenvoltura pelo agronegócio, indústria, educação e varejo.
              </p>

              <p className="text-[#A7B6C5] font-regular text-center lg:text-left text-[0.9rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] leading-relaxed">
                Por quê? Porque a gestão de alta performance não depende do segmento, mas da coragem de recalcular a rota.
              </p>
            </div>

            {/* ✅ Button as a safe link */}
        <a
  href="https://wa.me/553187954089"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-3 px-6 py-3 bg-[#58a8ab] rounded-full hover:bg-[#4a9699] transition w-full lg:w-auto max-w-md mt-6 sm:mt-8 mx-auto lg:mx-0"
>
  <div className="flex w-6 h-6 sm:w-7 sm:h-7 items-center justify-center bg-[#fafdff] rounded-full shrink-0">
    <Image
      alt="WhatsApp"
      src="/image/icons/whatsapp2.png"
      width={16}
      height={16}
      className="sm:w-5 sm:h-5"
    />
  </div>

  <span className="text-white text-sm sm:text-base md:text-lg text-center">
    FALAR COM <span className="font-normal">ESPECIALISTA</span>
  </span>
</a>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col justify-between mr-0 sm:mr-4 md:mr-8">
            <div className="flex flex-col">
              {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 py-3 sm:py-4">
                  {row.map((logo, idx) => (
                    <div key={idx} className="relative w-full h-12 sm:h-14 md:h-16 flex items-center justify-center bg-white/5 rounded-lg hover:bg-white/10 transition">
                    <Image
                        src={`/logos/${logo}.png`}
                        alt={logo}
                        fill
                        className="
                          object-contain
                          p-2
                          max-w-[90%] 
                          max-h-[90%]
                          sm:max-w-none
                          sm:max-h-none
                        "
/>
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
