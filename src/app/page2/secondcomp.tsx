"use client";

import React from "react";
import Image from "next/image";

export default function secondcomp() {
  return (
    <section className="py-16 px-6 bg-gray-50 flex flex-col items-center text-center">
      {/* Title */}
      <h2 className="text-lg md:text-xl font-extrabold uppercase text-gray-900">
        O FIM DO TRABALHO OPERACIONAL.
      </h2>

      {/* Pills */}
      <div className="mt-6 flex flex-col gap-3">
        {[
          "EXCESSO DE TRABALHO MANUAL E PLANILHAS",
          "PROCESSOS LENTOS QUE ATRASAM DECISÕES",
          "CUSTOS ELEVADOS COM TAREFAS REPETITIVAS",
        ].map((text, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-[#58A8AB] text-[#00000] px-4 py-2 rounded-full font-semibold text-sm"
          >
            <Image
              src="/image/block.png" // replace with your actual icon
              alt="icon"
              width={16}
              height={16}
            />
            {text}
          </div>
        ))}
      </div>

      {/* Paragraph */}
      <p className="mt-6 text-sm md:text-base text-gray-700 max-w-xl">
        Nossa resposta: um time de Agentes de IA que trabalha para você 24/7.
        Eles executam tarefas, validam dados e integram todos os seus sistemas
        com precisão absoluta.
      </p>
    </section>
  );
}
