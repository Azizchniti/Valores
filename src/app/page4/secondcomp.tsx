"use client";

import React from "react";
import Image from "next/image";

export default function secondcomp() {
  return (
    <section className="py-16 px-6 bg-gray-50 flex flex-col items-center text-center">
      {/* Title */}
      <h2 className="text-lg md:text-xl font-extrabold uppercase text-gray-900">
        Sua operação comercial enfrenta estes desafios?
      </h2>

      {/* Pills */}
      <div className="mt-6 flex flex-col gap-3">
        {[
          "Baixa rentabilidade e margens de lucro cada vez mais apertadas?",
          "Dificuldade em expandir a base de clientes e aumentar a recorrência de compras?",
          "Falta de previsibilidade nas vendas que impacta todo o fluxo de caixa?",
          "Equipe comercial desalinhada e com performance abaixo do potencial?",
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
    </section>
  );
}
