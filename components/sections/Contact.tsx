"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import GlowingButton from "@/components/ui/GlowingButton";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  MessageSquare,
} from "lucide-react";

export default function Contact() {
  const { personal } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      window.location.href = `mailto:${personal.email}?subject=Contacto%20Portfolio%20de%20${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(formData.message)}`;
    }, 800);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badgeText="CONTACTO DIRECTO"
          title="Iniciemos una Conversación"
          subtitle="¿Interesado en colaborar en proyectos de ingeniería de datos, analítica avanzada, machine learning o desarrollo web? Conectemos."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
            
            {/* Email Card */}
            <GlassCard
              variant="default"
              className="p-4 sm:p-5 flex items-center justify-between border-white/[0.08] hover:border-white/20 gap-3"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900 border border-white/10 text-zinc-200 shrink-0">
                  <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-[11px] font-mono text-zinc-500 uppercase">
                    Correo Electrónico
                  </p>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-xs sm:text-sm font-semibold text-white hover:text-zinc-300 transition-colors truncate block"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-colors cursor-pointer shrink-0"
                title="Copiar email"
                aria-label="Copiar email"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </GlassCard>

            {/* Phone / WhatsApp Card */}
            <GlassCard
              variant="default"
              className="p-4 sm:p-5 flex items-center justify-between border-white/[0.08] hover:border-emerald-500/30 gap-3"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900 border border-white/10 text-emerald-400 shrink-0">
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-[11px] font-mono text-zinc-500 uppercase">
                    Teléfono & WhatsApp
                  </p>
                  <a
                    href={personal.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-300 transition-colors truncate block"
                  >
                    {personal.phoneFormatted}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyPhone}
                className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-emerald-300 hover:border-white/20 transition-colors cursor-pointer shrink-0"
                title="Copiar teléfono"
                aria-label="Copiar teléfono"
              >
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </GlassCard>

            {/* Location Card */}
            <GlassCard
              variant="subtle"
              className="p-4 sm:p-5 flex items-center gap-3 border-white/[0.08]"
            >
              <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 shrink-0">
                <MapPin className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <div>
                <p className="text-[10px] sm:text-[11px] font-mono text-zinc-500 uppercase">
                  Ubicación
                </p>
                <p className="text-xs sm:text-sm font-semibold text-white">{personal.location}</p>
              </div>
            </GlassCard>

            {/* Social Links Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 sm:p-4 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-white/[0.08] hover:border-white/20 transition-all flex items-center gap-3 group"
              >
                <LinkedinIcon className="w-5 h-5 text-zinc-300 group-hover:text-white transition-colors shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-white">LinkedIn</p>
                  <p className="text-[10px] font-mono text-zinc-400 truncate">/samuel-bustos-puntis</p>
                </div>
              </a>

              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 sm:p-4 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-white/[0.08] hover:border-white/20 transition-all flex items-center gap-3 group"
              >
                <GithubIcon className="w-5 h-5 text-zinc-300 group-hover:text-white transition-colors shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-white">GitHub</p>
                  <p className="text-[10px] font-mono text-zinc-400 truncate">/SamuelBustosPuntis</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <GlassCard
              variant="glow"
              className="p-5 sm:p-8 border-white/15 relative"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1 flex items-center gap-2">
                <MessageSquare className="w-4 sm:w-5 h-4 sm:h-5 text-zinc-300" />
                Enviar Mensaje Directo
              </h3>
              <p className="text-xs text-zinc-400 mb-5 sm:mb-6">
                Completa el formulario para enviar un mensaje instantáneo.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-zinc-900 border border-emerald-500/30 text-center space-y-2">
                  <Check className="w-8 h-8 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="text-lg font-bold text-white">
                    ¡Mensaje Preparado!
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Redirigiendo a tu cliente de correo para confirmar el envío a {personal.email}...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-300">
                        Nombre / Organización
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Ej. Martín González"
                        className="w-full bg-zinc-950/80 border border-white/10 focus:border-white/30 rounded-xl px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-600 outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-300">
                        Tu Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="tu@empresa.com"
                        className="w-full bg-zinc-950/80 border border-white/10 focus:border-white/30 rounded-xl px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-600 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-300">
                      Mensaje / Proyecto
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Cuéntame sobre la posición, proyecto o desafío de datos..."
                      className="w-full bg-zinc-950/80 border border-white/10 focus:border-white/30 rounded-xl px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-600 outline-none transition-colors resize-none"
                    />
                  </div>

                  <GlowingButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center"
                    icon={<Send className="w-4 h-4" />}
                  >
                    Enviar Mensaje
                  </GlowingButton>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
