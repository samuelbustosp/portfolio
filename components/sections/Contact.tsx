"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowUpRight, Check, Copy } from "lucide-react";

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export default function Contact() {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${personal.email}?subject=Contacto%20de%20${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(formData.message)}`;
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Channels */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                05 // CONTACTO
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950">
                Conectemos.
              </h2>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed pt-1">
                Abierto a conversar sobre proyectos, datos, desarrollo de producto o nuevas oportunidades.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email Card */}
              <div className="light-glass rounded-3xl p-6 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block">
                    Email
                  </span>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-base font-medium text-neutral-950 hover:underline mt-0.5 block truncate"
                  >
                    {personal.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-4 py-2 rounded-full border border-neutral-300 hover:border-neutral-950 text-xs font-mono uppercase tracking-wider text-neutral-700 hover:text-neutral-950 inline-flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 bg-white/70"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              {/* WhatsApp Card */}
              <div className="light-glass rounded-3xl p-6 flex items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block">
                    WhatsApp
                  </span>
                  <a
                    href={personal.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium text-neutral-950 hover:underline mt-0.5 block"
                  >
                    {personal.phoneFormatted}
                  </a>
                </div>
                <a
                  href={personal.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2.5 rounded-full border border-neutral-300 hover:border-neutral-950 text-neutral-950 transition-colors bg-white/70"
                  aria-label="Abrir WhatsApp"
                >
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* LinkedIn & GitHub */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="light-glass rounded-3xl p-5 group flex items-center justify-between hover:bg-white/90 transition-all"
                >
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-400 block">
                      Red
                    </span>
                    <span className="text-base font-medium text-neutral-950 mt-0.5 block">
                      LinkedIn
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-neutral-950 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="light-glass rounded-3xl p-5 group flex items-center justify-between hover:bg-white/90 transition-all"
                >
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-400 block">
                      Código
                    </span>
                    <span className="text-base font-medium text-neutral-950 mt-0.5 block">
                      GitHub
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-neutral-950 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Rounded Glass Form */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="light-glass-strong rounded-3xl p-8 sm:p-12 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-widest text-neutral-600 block">
                    Nombre
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Tu nombre"
                    className="w-full rounded-2xl bg-white/80 border border-neutral-200 focus:border-neutral-950 px-4 py-3.5 text-base text-neutral-950 placeholder-neutral-400 outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-widest text-neutral-600 block">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="tu@correo.com"
                    className="w-full rounded-2xl bg-white/80 border border-neutral-200 focus:border-neutral-950 px-4 py-3.5 text-base text-neutral-950 placeholder-neutral-400 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest text-neutral-600 block">
                  Mensaje
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Contame brevemente sobre el proyecto o propuesta..."
                  className="w-full rounded-2xl bg-white/80 border border-neutral-200 focus:border-neutral-950 px-4 py-3.5 text-base text-neutral-950 placeholder-neutral-400 outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-neutral-950 text-white text-xs font-mono uppercase tracking-widest hover:bg-neutral-800 hover:scale-[1.02] transition-all cursor-pointer shadow-md"
              >
                <span>Enviar mensaje</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
