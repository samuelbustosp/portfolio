"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-zinc-950/80 backdrop-blur-2xl py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Monogram & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-zinc-950 font-mono font-bold text-sm shadow-sm">
            SP
          </div>
          <div>
            <p className="text-sm font-bold text-white">
              {PORTFOLIO_DATA.personal.name}
            </p>
            <p className="text-xs text-zinc-400 font-normal">
              © 2026 — Diseñado con Next.js, React 19, TypeScript & Tailwind CSS.
            </p>
          </div>
        </div>

        {/* Center: Status Indicator */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-white/5 text-xs font-mono text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Sistemas Operativos // 2026</span>
        </div>

        {/* Right Side: Back to top */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white transition-all flex items-center gap-2 text-xs font-medium cursor-pointer"
        >
          <span>Volver arriba</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
