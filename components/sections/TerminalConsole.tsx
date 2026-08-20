"use client";

import React, { useState, useRef } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { Terminal as TerminalIcon, CornerDownLeft } from "lucide-react";

interface TerminalLog {
  command?: string;
  output: React.ReactNode;
}

export default function TerminalConsole() {
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<TerminalLog[]>([
    {
      output: (
        <div className="space-y-1 text-zinc-300 text-xs sm:text-sm">
          <p className="text-white font-bold">
            SBP_DATA_CLI v2.6
          </p>
          <p className="text-zinc-400">
            Escribe <span className="text-white font-bold">&apos;help&apos;</span> para listar comandos o haz clic en los botones rápidos.
          </p>
        </div>
      ),
    },
  ]);

  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollTerminalToBottom = () => {
    setTimeout(() => {
      if (terminalBodyRef.current) {
        terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
      }
    }, 50);
  };

  const handleCommand = (cmdStr: string) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    let response: React.ReactNode = null;

    switch (cleanCmd) {
      case "help":
        response = (
          <div className="space-y-1 text-xs sm:text-sm">
            <p className="text-zinc-200 font-semibold mb-1">COMANDOS DISPONIBLES:</p>
            <p><span className="text-emerald-400 font-mono">whoami</span> - Resumen del perfil profesional</p>
            <p><span className="text-emerald-400 font-mono">skills</span> - Listado de tecnologías y herramientas</p>
            <p><span className="text-emerald-400 font-mono">projects</span> - Proyectos principales desarrollados</p>
            <p><span className="text-emerald-400 font-mono">education</span> - Título de grado UTN y especializaciones</p>
            <p><span className="text-emerald-400 font-mono">contact</span> - Canales directos de contacto</p>
            <p><span className="text-emerald-400 font-mono">clear</span> - Limpiar la pantalla de la consola</p>
          </div>
        );
        break;

      case "whoami":
      case "about":
        response = (
          <div className="space-y-2 text-xs sm:text-sm text-zinc-200">
            <p className="text-white font-bold">
              {PORTFOLIO_DATA.personal.name}
            </p>
            <p className="text-zinc-300">{PORTFOLIO_DATA.personal.role} | {PORTFOLIO_DATA.personal.specialization}</p>
            <p className="text-zinc-400 leading-relaxed">{PORTFOLIO_DATA.personal.bio}</p>
            <p className="text-emerald-400">📍 {PORTFOLIO_DATA.personal.location} | Promedio UTN: 8.44</p>
          </div>
        );
        break;

      case "skills":
        response = (
          <div className="space-y-3 text-xs sm:text-sm">
            {PORTFOLIO_DATA.skillCategories.map((c, i) => (
              <div key={i}>
                <p className="text-zinc-200 font-semibold">{c.title}:</p>
                <p className="text-zinc-400 font-mono">
                  {c.skills.map((s) => s.name).join(" • ")}
                </p>
              </div>
            ))}
          </div>
        );
        break;

      case "projects":
        response = (
          <div className="space-y-3 text-xs sm:text-sm">
            {PORTFOLIO_DATA.projects.map((p) => (
              <div key={p.id} className="border-l-2 border-white/20 pl-3">
                <p className="text-white font-bold">{p.title} ({p.period})</p>
                <p className="text-zinc-300">{p.subtitle}</p>
                <p className="text-zinc-500 font-mono text-[11px]">Stack: {p.techStack.join(", ")}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "education":
        response = (
          <div className="space-y-2 text-xs sm:text-sm">
            <p className="text-emerald-400 font-bold">
              🎓 {PORTFOLIO_DATA.education[0].degree} — {PORTFOLIO_DATA.education[0].institution}
            </p>
            <p className="text-white">Promedio: {PORTFOLIO_DATA.education[0].grade} / 10 (Graduado)</p>
            <div className="pt-2 text-zinc-300 space-y-1">
              <p className="text-zinc-400 font-semibold">Cursos Coderhouse:</p>
              {PORTFOLIO_DATA.courses.map((c) => (
                <p key={c.id}>• {c.title} ({c.status}) — {c.period}</p>
              ))}
            </div>
          </div>
        );
        break;

      case "contact":
        response = (
          <div className="space-y-1.5 text-xs sm:text-sm text-zinc-200">
            <p className="text-zinc-200 font-semibold">INFORMACIÓN DE CONTACTO:</p>
            <p>📧 Email: <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-white underline">{PORTFOLIO_DATA.personal.email}</a></p>
            <p>📞 Teléfono / WhatsApp: <a href={PORTFOLIO_DATA.personal.socials.whatsapp} target="_blank" rel="noreferrer" className="text-white underline">{PORTFOLIO_DATA.personal.phoneFormatted}</a></p>
            <p>🌐 LinkedIn: <a href={PORTFOLIO_DATA.personal.socials.linkedin} target="_blank" rel="noreferrer" className="text-white underline">linkedin.com/in/samuel-bustos-puntis</a></p>
            <p>💻 GitHub: <a href={PORTFOLIO_DATA.personal.socials.github} target="_blank" rel="noreferrer" className="text-white underline">github.com/SamuelBustosPuntis</a></p>
          </div>
        );
        break;

      case "clear":
        setLogs([]);
        return;

      default:
        response = (
          <p className="text-rose-400 text-xs sm:text-sm">
            Comando no reconocido: &apos;{cmdStr}&apos;. Escribe <span className="text-white font-bold">&apos;help&apos;</span> para ver la lista de comandos.
          </p>
        );
    }

    setLogs((prev) => [...prev, { command: cmdStr, output: response }]);
    scrollTerminalToBottom();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput("");
  };

  const quickCommands = ["help", "whoami", "skills", "projects", "education", "contact", "clear"];

  return (
    <section id="terminal" className="relative py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          badgeText="CONSOLA INTERACTIVA"
          title="Terminal CLI"
          subtitle="Explora la información de perfil, habilidades y arquitectura directamente desde la línea de comandos."
          align="center"
        />

        {/* Quick chip buttons */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-6">
          <span className="text-xs font-mono text-zinc-500 mr-1 hidden sm:inline">Comandos rápidos:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="text-xs font-mono px-2.5 sm:px-3 py-1 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-white/10 transition-colors cursor-pointer"
            >
              ${cmd}
            </button>
          ))}
        </div>

        {/* Terminal Window Card */}
        <GlassCard
          variant="glow"
          className="rounded-2xl border-white/15 overflow-hidden shadow-2xl p-0"
        >
          {/* Header Bar */}
          <div className="bg-zinc-950 px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-zinc-700" />
              <div className="w-3 h-3 rounded-full bg-zinc-700" />
              <div className="w-3 h-3 rounded-full bg-zinc-700" />
              <span className="ml-2 font-mono text-xs text-zinc-400 truncate">
                sbp@terminal ~ (zsh)
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
              <TerminalIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">TERMINAL</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div
            ref={terminalBodyRef}
            className="p-4 sm:p-6 bg-zinc-950 font-mono text-xs sm:text-sm min-h-[240px] sm:min-h-[280px] max-h-[380px] overflow-y-auto space-y-4"
            onClick={() => inputRef.current?.focus()}
          >
            {logs.map((log, index) => (
              <div key={index} className="space-y-1.5">
                {log.command && (
                  <div className="flex items-center gap-2 text-zinc-400 text-xs">
                    <span className="text-emerald-400">guest@sbp:~$</span>
                    <span className="text-white font-medium">{log.command}</span>
                  </div>
                )}
                <div>{log.output}</div>
              </div>
            ))}
          </div>

          {/* Terminal Prompt Input */}
          <form
            onSubmit={handleSubmit}
            className="bg-zinc-900/90 px-3 sm:px-4 py-2.5 sm:py-3 border-t border-white/10 flex items-center gap-2 sm:gap-3"
          >
            <span className="text-emerald-400 font-mono text-xs sm:text-sm shrink-0">
              guest@sbp:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe un comando (ej: help, skills)..."
              className="flex-1 bg-transparent border-none outline-none font-mono text-xs sm:text-sm text-white placeholder-zinc-600 min-w-0"
            />
            <button
              type="submit"
              className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-white/10 cursor-pointer transition-colors shrink-0"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
        </GlassCard>
      </div>
    </section>
  );
}
