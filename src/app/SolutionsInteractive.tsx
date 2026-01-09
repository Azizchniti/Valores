"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AutomacaoProcessos from "@/components/solutions/expanded/AutomacaoProcessos";
import InteligenciaComercial from "@/components/solutions/expanded/InteligenciaComercial";
import GovernancaCorporativa from "@/components/solutions/expanded/GovernançaCorporativa";

interface Solution {
  icon: string;
  title: string;
  description: string;
}

interface Props {
  solutions?: Solution[];
}

export default function SolutionsInteractive({ solutions = [] }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);
  const lerMaisRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null); // <-- ref for top of component
  
  useEffect(() => {
  if (expanded && containerRef.current) {
    containerRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}, [expanded]);
  
  const activeSolution = activeIndex !== null ? solutions[activeIndex] : null;
  if (!solutions.length) return null;

  const hasExpandedContent =
    activeSolution?.title.toLowerCase().includes("automação") ||
    activeSolution?.title.toLowerCase().includes("inteligência") ||
    activeSolution?.title.toLowerCase().includes("corporativa");

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };



  return (
    <div ref={containerRef} className="mt-14 flex flex-col items-center w-full">
      {/* TOP SELECTOR CARDS */}
      <div className="flex gap-6 justify-center flex-wrap">
        {solutions.map((solution, i) => (
          <motion.button
            key={i}
            onClick={() => {
              setActiveIndex(i);
              setExpanded(false);
            }}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.97 }}
            className={`
              flex flex-col items-center justify-center
              w-[260px] h-[260px]
              rounded-[26px] bg-white shadow-md transition-all
              ${activeIndex === i ? "ring-2 ring-[#58A8AB]" : ""}
            `}
          >
            <Image src={solution.icon} alt={solution.title} width={72} height={72} />
            <span
              className="mt-5 text-center font-semibold uppercase"
              style={{ color: "#58A8AB", fontSize: "22px", letterSpacing: "1px" }}
            >
              {solution.title.split(" ").map((word, idx) => (
                <span key={idx} className="block">{word}</span>
              ))}
            </span>
          </motion.button>
        ))}
      </div>

      {/* EXPANDED CONTENT */}
      <AnimatePresence mode="wait">
        {activeSolution && (
          <motion.div
            key={activeSolution.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.35 }}
            className="mt-10 w-full max-w-[1200px] rounded-[40px] bg-[#58A8AB] shadow-xl overflow-hidden relative"
          >
            {/* COLLAPSED: Image + Description */}
            {!expanded && (
              <div className="relative flex">
                <div className="absolute -top-20 -left-20 w-[40%] h-[125%] opacity-80 pointer-events-none">
                  <Image src="/image/Watch.png" alt="" fill className="object-contain" />
                </div>
                <div className="relative z-10 pl-[38%] pr-12 py-12 flex flex-col gap-6">
                  <p className="text-black text-[28px] leading-[34px] max-w-[560px]">
                    {(() => {
                      const text = activeSolution.description.slice(0, 170);
                      const words = text.split(" ");
                      const lastWord = words.pop();
                      return (
                        <>
                          {words.join(" ")}{" "}
                          <span className="text-white font-semibold">{lastWord}</span>
                        </>
                      );
                    })()}
                  </p>

                  {/* Ler mais button */}
                  {hasExpandedContent && (
                    <div ref={lerMaisRef} className="flex justify-center mt-6">
                      <button
                        onClick={() => setExpanded(true)}
                        className="
                          inline-flex
                          items-center
                          gap-3
                          px-8
                          py-3
                          border
                          border-white
                          rounded-full
                          text-white
                          text-sm
                          font-semibold
                          tracking-wide
                          hover:bg-white/10
                          transition
                        "
                      >
                        Ler mais
                        <span className="text-lg">↓</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* EXPANDED CONTENT: Full width, no image */}
            {expanded && (
              <div className="relative z-10 px-12 py-12 flex flex-col gap-6">
                {activeSolution.title.toLowerCase().includes("automação") && <AutomacaoProcessos />}
                {activeSolution.title.toLowerCase().includes("corporativa") && <GovernancaCorporativa />}
                {activeSolution.title.toLowerCase().includes("inteligência") && <InteligenciaComercial />}

                {/* Resumo button */}
                <div className="flex justify-center mt-8 pb-10">
                  <button
                    onClick={() => {
                      setExpanded(false);
                      scrollToTop(); // <-- scroll back to top of component
                    }}
                    className="
                      inline-flex
                      items-center
                      gap-3
                      px-8
                      py-3
                      border
                      border-white
                      rounded-full
                      text-white
                      text-sm
                      font-semibold
                      tracking-wide
                      hover:bg-white/10
                      transition
                    "
                  >
                    Resumo
                    <span className="text-lg">↑</span>
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
