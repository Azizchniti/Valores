"use client";

import React from "react";
import Image from "next/image";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/solid";

interface ReviewProps {
  name: string;
  image: string;
  stars: number;
  text: string;
}

const reviews: ReviewProps[] = [
  {
    name: "Isadora Martins",
    image: "/image/review1.png",
    stars: 5,
    text: "Implementamos a solução de automação da Valores e os resultados foram imediatos. A redução de falhas operacionais e o ganho em produtividade superaram nossas expectativas. Além disso, o suporte da equipe foi ágil e atencioso do início ao fim.",
  },
  {
    name: "Kelvin Amorim",
    image: "/image/review2.png",
    stars: 5,
    text: "Antes tínhamos processos manuais que atrasavam muito nosso fluxo de trabalho. Depois da Valores, conseguimos mais eficiência e controle total das operações. Hoje atendemos mais clientes com menos esforço, e isso impactou diretamente em nossas vendas.",
  },
  {
    name: "Leonardo Miscontti",
    image: "/image/review3.png",
    stars: 5,
    text: "O que mais nos impressionou na Valores foi a personalização da solução. A equipe entendeu exatamente a nossa necessidade e criou um sistema sob medida, que integrou perfeitamente com as ferramentas que já usávamos.",
  },
];

export default function ReviewsSection() {
  return (
    <section className="w-full flex flex-col gap-14">
            
      {/* Full-width horizontal bar */}
      <div
        className="w-full flex items-center justify-center py-8 gap-3"
        style={{ background: "#58A8AB" }}
      >
        <Image
      alt="Arrow"
      src="/image/icons/chat.png" // should point ↗ top-right
      width={27}
      height={27}
    />
        <span
          className="text-center font-[TT Commons Pro] font-bold uppercase"
          style={{
            fontSize: "28px",
            fontStyle: "normal",
            lineHeight: "normal",
            textTransform: "uppercase",
            color: "#000409",
          }}
        >
          O que nossos parceiros dizem sobre nós
        </span>
      </div>

      {/* Centered reviews */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-6 px-4">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="flex-1 flex flex-col items-center p-3 rounded-[10px] border border-[#57A7AA] bg-[#58A8AB] text-[#163132] font-[TT Commons Pro]"
          >
            <Image
              src={review.image}
              alt={review.name}
              width={60}
              height={60}
              className="rounded-full mb-2"
            />
            <h3
              className="text-center font-bold mb-1 overflow-hidden text-ellipsis"
              style={{ fontSize: "18px", lineHeight: "normal" }}
            >
              {review.name}
            </h3>
            <div className="flex mb-2">
              {Array.from({ length: review.stars }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-base mr-1">
                  ★
                </span>
              ))}
            </div>
            <p
              className="text-center"
              style={{
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "1.3",
              }}
            >
              {review.text}
            </p>
          </div>
        ))}
      </div>

       {/* <div className="mt-16 text-center">
          <h2
            className="text-[#01050A] font-extrabold uppercase"
            style={{
              fontFamily: "TT Commons Pro",
              fontSize: "28px",
              lineHeight: "40px",
            }}
          >
            Acompanhe nossa jornada e insights.
          </h2>
          <div className="mx-auto mt-2 h-[3px] w-[300px] bg-[#58A8AB] rounded-full" />
        </div> */}
        {/* Instagram Feed Placeholder */}
        {/* <div className="mt-4 mb-12 flex justify-center">
          <div className="w-full max-w-5xl h-64 flex items-center justify-center 
                          border-2 border-dashed border-red-500 rounded-2xl">
            <span className="text-red-600 font-bold uppercase text-lg">
              FEED INSTAGRAM
            </span>
          </div>
        </div> */}

    </section>
    
  );
}
