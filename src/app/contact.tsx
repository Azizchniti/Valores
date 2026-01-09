"use client";

import React, { useState } from "react";

export default function BusinessForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    servicos: "",
    mensagem: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | "">("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // ⛔ prevents page refresh
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Erro ao enviar");

      setStatus("success");
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        empresa: "",
        servicos: "",
        mensagem: "",
      });
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
     <section className="relative">
         {/* 🔻 BOTTOM CONTINUATION (THIS IS THE KEY) */}
      <div
        className="absolute inset-x-0 bottom-0 h-24 md:h-32"
        style={{
          backgroundColor: "#4FB3B6",
          backgroundRepeat: "repeat",
        }}
      />
    <div className="relative py-28 px-6 rounded-b-[92px]"
      style={{
        backgroundColor: "#000",
        backgroundImage: "url('/image/backgrounds/Grid.png')",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-2 gap-8 items-start">
        {/* LEFT TEXT */}
        <div className="max-w-md lg:ml-24 mt-28">
          <h1 className="text-[#5BC4C6] text-4xl font-semibold leading-tight uppercase">
            Chega de navegar em meio às tempestades do dia a dia.
          </h1>

          <p className="mt-6 text-white text-lg leading-relaxed">
            Nossa equipe de especialistas está pronta para mapear suas oportunidades
            e apontar o caminho para a alta performance. Preencha o formulário e
            agende um diagnóstico estratégico, sem compromisso.
          </p>
        </div>

        {/* FORM CARD */}
        <div className="bg-[#5BC4C6] rounded-[36px] px-10 py-10 max-w-md w-full">
          <h2 className="text-white text-lg font-semibold uppercase mb-6">
            Pronto para recalcular a rota do <b>seu negócio</b>?
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {["nome", "email", "telefone", "empresa"].map((field) => (
              <input
                key={field}
                name={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                placeholder={
                  field === "email"
                    ? "E-mail"
                    : field.charAt(0).toUpperCase() + field.slice(1)
                }
                required
                className="bg-transparent border-b border-white/50 pb-2 text-white placeholder-white/70 outline-none"
              />
            ))}

            {/* SERVICES */}
            <select
              name="servicos"
              value={formData.servicos}
              onChange={handleChange}
              required
              className="bg-transparent border-b border-white/50 pb-2 text-white outline-none"
            >
              <option value="" className="text-black">
                Nossos serviços
              </option>
              <option className="text-black">Automação de Processos</option>
              <option className="text-black">RH & Departamento Pessoal</option>
              <option className="text-black">Comercial & Vendas</option>
              <option className="text-black">Financeiro</option>
              <option className="text-black">Marketing & Trade Marketing</option>
            </select>

            {/* MESSAGE */}
            <textarea
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              placeholder="Mensagem"
              rows={3}
              className="mt-4 rounded-md p-3 text-black outline-none resize-none"
            />

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="mt-6 mx-auto rounded-full bg-black px-8 py-3 text-sm font-semibold text-white transition hover:scale-105 disabled:opacity-60"
            >
              {loading ? "ENVIANDO..." : "AGENDAR DIAGNÓSTICO "}
              {!loading && (
                <span className="text-[#5BC4C6]">GRATUITO!</span>
              )}
            </button>

            {/* STATUS MESSAGE */}
            {status === "success" && (
              <div className="mt-4 rounded-lg bg-black/80 px-4 py-3 text-center text-sm text-[#5BC4C6]">
                ✅ Mensagem enviada com sucesso!  
                Nossa equipe entrará em contato em breve.
              </div>
            )}

            {status === "error" && (
              <div className="mt-4 rounded-lg bg-black/80 px-4 py-3 text-center text-sm text-red-400">
                ❌ Erro ao enviar. Tente novamente.
              </div>
            )}
          </form>
        </div>
      </div>
      </div> 
    </section>
  );
}
