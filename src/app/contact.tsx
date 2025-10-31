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
    <div
      className="relative bg-cover bg-center bg-no-repeat py-12 px-6"
      style={{
        backgroundImage: "url('/image/backgrounds/form-bg.svg')",
      }}
    >
      <section className="flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-24">
        {/* Left side - Text section */}
        <div className="mt-16 flex flex-col items-start text-left px-4 lg:px-0 font-luxora">
          <h2
            className="text-[#E3E3E3] font-extrabold uppercase"
            style={{
              fontSize: "36px",
              lineHeight: "48px",
            }}
          >
            Chega de navegar em meio às<br /> tempestades do dia a dia.
          </h2>

          <div className="mt-4 h-[7px] w-[230px] bg-[#58A8AB] rounded-full" />

          <p
            className="text-[#8B949E] font-light mt-4 mb-12"
            style={{
              fontSize: "20px",
              lineHeight: "1.6",
              maxWidth: "340px",
            }}
          >
            Nossa equipe de especialistas está pronta para mapear suas oportunidades e apontar o caminho para a alta performance. Preencha o formulário e agende um diagnóstico estratégico, sem compromisso.
          </p>
        </div>

        {/* Right side - Form */}
        <div className="relative z-10 w-full max-w-2xl rounded-2xl border border-[#58A8AB] bg-[rgba(27,34,42,0.9)] backdrop-blur-md p-6 shadow-lg font-luxora">
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

          <h2
            className="text-center mb-3 font-semibold"
            style={{
              color: "#E3E3E3",
              fontSize: "18px",
            }}
          >
            Pronto para recalcular a rota do seu negócio?
          </h2>

          <div className="w-[85%] h-[1px] bg-[#58A8AB] mx-auto mb-4"></div>

          {/* Form */}
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            {/* Nome */}
            <div className="flex items-center gap-2 rounded-xl border border-black bg-[rgba(0,0,0,0.3)] px-3 py-2">
              <Image src="/image/icons/nome.png" alt="Nome" width={18} height={18} />
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Nome"
                className="flex-1 bg-transparent outline-none text-sm text-white placeholder-gray-300 font-luxora"
              />
            </div>

            {/* Email + Empresa */}
            <div className="flex flex-col md:flex-row gap-3">
              {[
                { name: "email", placeholder: "Seu melhor e-mail", icon: "email" },
                { name: "empresa", placeholder: "Empresa", icon: "empresa" },
              ].map((field) => (
                <div
                  key={field.name}
                  className="flex items-center gap-2 rounded-xl border border-black bg-[rgba(0,0,0,0.3)] px-3 py-2 flex-1"
                >
                  <Image
                    src={`/image/icons/${field.icon}.png`}
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
                    className="flex-1 bg-transparent outline-none text-sm text-white placeholder-gray-300 font-luxora"
                  />
                </div>
              ))}
            </div>

            {/* Cargo + Whatsapp */}
            <div className="flex flex-col md:flex-row gap-3">
              {[
                { name: "cargo", placeholder: "Cargo", icon: "cargo" },
                { name: "whatsapp", placeholder: "DDD + Whatsapp", icon: "whatsapp" },
              ].map((field) => (
                <div
                  key={field.name}
                  className="flex items-center gap-2 rounded-xl border border-black bg-[rgba(0,0,0,0.3)] px-3 py-2 flex-1"
                >
                  <Image
                    src={`/image/icons/${field.icon}.png`}
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
                    className="flex-1 bg-transparent outline-none text-sm text-white placeholder-gray-300 font-luxora"
                  />
                </div>
              ))}
            </div>

            {/* Remaining fields */}
            {[
              {
                name: "faturamento",
                placeholder: "Qual é o faturamento médio de sua empresa?",
                icon: "faturamento",
              },
              {
                name: "segmento",
                placeholder: "Qual é o segmento de atuação de sua empresa?",
                icon: "segmento",
              },
              {
                name: "quantidade",
                placeholder: "Qual a quantidade de colaboradores de sua empresa?",
                icon: "quantidade",
              },
            ].map((field) => (
              <div
                key={field.name}
                className="flex items-center gap-2 rounded-xl border border-black bg-[rgba(0,0,0,0.3)] px-3 py-2"
              >
                <Image
                  src={`/image/icons/${field.icon}.png`}
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
                  className="flex-1 bg-transparent outline-none text-sm text-white placeholder-gray-300 font-luxora"
                />
              </div>
            ))}

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-3 w-full rounded-[36px] py-2 text-black font-luxora font-semibold text-sm 
                        transform transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110 disabled:opacity-60"
              style={{
                background:
                  "linear-gradient(178deg, #56A6A9 1.38%, #254749 166.25%)",
              }}
            >
              {loading ? "Enviando..." : "AGENDAR DIAGNÓSTICO GRATUITO"}
            </button>

            {status && (
              <p className="text-center text-white mt-2 text-sm font-luxora">{status}</p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
