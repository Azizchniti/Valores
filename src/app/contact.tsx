"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function BusinessForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: "",
    cargo: "",
    whatsapp: "",
    faturamento: "",
    segmento: "",
    quantidade: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Enviado com sucesso!");
        setFormData({
          nome: "",
          email: "",
          empresa: "",
          cargo: "",
          whatsapp: "",
          faturamento: "",
          segmento: "",
          quantidade: "",
        });
      } else {
        setStatus("❌ Falha ao enviar. Tente novamente.");
      }
    } catch {
      setStatus("⚠️ Erro de rede. Verifique sua conexão.");
    }

    setLoading(false);
  };

  return (
    <div>
      {/* Main Section */}
      <section className="relative py-8 px-4 flex items-center justify-center">
        <div className="relative z-10 w-full max-w-3xl rounded-2xl border border-[#58A8AB] bg-[rgba(27,34,42,0.87)] backdrop-blur-md p-6">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div
              className="flex items-center justify-center rounded-lg p-2"
              style={{
                background: "#58A8AB",
                boxShadow:
                  "0 205px 57px 0 rgba(88, 168, 171, 0.00), 0 131px 52px 0 rgba(88, 168, 171, 0.04), 0 74px 44px 0 rgba(88, 168, 171, 0.14), 0 33px 33px 0 rgba(88, 168, 171, 0.21), 0 8px 18px 0 rgba(88, 168, 171, 0.25)",
              }}
            >
              <Image
                src="/image/icons/pencilicon.png"
                alt="Pencil Icon"
                width={15}
                height={15}
              />
            </div>
          </div>

          {/* Title */}
          <h2
            className="text-center mb-3"
            style={{
              color: "#E3E3E3",
              fontFamily: "TT Commons Pro",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            Pronto para recalcular a rota do seu negócio?
          </h2>

          {/* Thin line */}
          <div className="w-[85%] h-[1px] bg-[#58A8AB] mx-auto mb-4"></div>

          {/* Form */}
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            {[
              { name: "nome", placeholder: "Nome", icon: "nome" },
              { name: "email", placeholder: "Seu melhor e-mail", icon: "email" },
              { name: "empresa", placeholder: "Empresa", icon: "empresa" },
              { name: "cargo", placeholder: "Cargo", icon: "cargo" },
              { name: "whatsapp", placeholder: "DDD + Whatsapp", icon: "whatsapp" },
              { name: "faturamento", placeholder: "Qual é o faturamento médio de sua empresa?", icon: "faturamento" },
              { name: "segmento", placeholder: "Qual é o segmento de atuação de sua empresa?", icon: "segmento" },
              { name: "quantidade", placeholder: "Qual a quantidade de colaboradores de sua empresa?", icon: "quantidade" },
            ].map((field, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-xl border border-black bg-[rgba(0,0,0,0.3)] px-3 py-2"
              >
                <Image
                  src={`/image/${field.icon}.png`}
                  alt={field.placeholder}
                  width={18}
                  height={18}
                />
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="flex-1 bg-transparent outline-none text-sm text-white placeholder-gray-300 font-[TT Commons Pro]"
                />
              </div>
            ))}

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-3 w-full rounded-[36px] py-2 text-black font-[TT Commons Pro] font-semibold text-sm 
                        transform transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110 disabled:opacity-60"
              style={{
                background: "linear-gradient(178deg, #56A6A9 1.38%, #254749 166.25%)",
                boxShadow:
                  "0 100px 40px 0 rgba(88, 168, 171, 0.00), 0 60px 35px 0 rgba(88, 168, 171, 0.04), 0 30px 25px 0 rgba(88, 168, 171, 0.13), 0 15px 18px 0 rgba(88, 168, 171, 0.21), 0 5px 12px 0 rgba(88, 168, 171, 0.25)",
              }}
            >
              {loading ? "Enviando..." : "AGENDAR DIAGNÓSTICO GRATUITO"}
            </button>

            {status && (
              <p className="text-center text-white mt-2 text-sm">{status}</p>
            )}
          </form>
        </div>
      </section>

          <div className="mt-16 text-center">
        <h2
          className="text-[#E3E3E3] font-extrabold uppercase"
          style={{
            fontFamily: "TT Commons Pro",
            fontSize: "28px",
            lineHeight: "40px",
            color: "#ffffffff",
          }}
        >
          Chega de navegar em meio às<br /> tempestades do dia a dia.
        </h2>
        <div className="mx-auto mt-2 h-[7px] w-[230px] bg-[#58A8AB] rounded-full" />

        <p
          className="text-[#68788B] text-center font-[TT Commons Pro] font-light mb-12 mx-auto mt-4"
          style={{
            fontSize: "18px",
            lineHeight: "1.6",
            maxWidth: "340px", // restrict width to break into ~6 lines
          }}
        >
        Nossa equipe de especialistas está pronta para mapear suas oportunidades e apontar o caminho para a alta performance. Preencha o formulário e agende um diagnóstico estratégico, sem compromisso.
        </p>
        {/* <h2
          className="text-[#E3E3E3] font-extrabold uppercase"
          style={{
            fontFamily: "TT Commons Pro",
            fontSize: "28px",
            lineHeight: "40px",
            color: "#ffffffff",
          }}
        >
          Confira nosso blog
        </h2> */}
    {/* <div className="mx-auto mt-2 h-[7px] w-[230px] bg-[#58A8AB] rounded-full" /> */}
      {/* </div> */}
      {/* Blog posts section */}
      {/* <div className="mt-12 mb-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4"> */}
        {/* Spot 1 */}
        {/* <div className="rounded-2xl bg-[rgba(27,34,42,0.85)] border border-[#58A8AB] h-48"></div> */}

        {/* Spot 2 */}
        {/* <div className="rounded-2xl bg-[rgba(27,34,42,0.85)] border border-[#58A8AB] h-48"></div> */}

        {/* Spot 3 */}
        {/* <div className="rounded-2xl bg-[rgba(27,34,42,0.85)] border border-[#58A8AB] h-48"></div> */}
      </div>
    </div>
  );
}
