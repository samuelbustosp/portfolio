import React from "react";
import { Zap } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Footer() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <footer className="relative z-10 border-t border-neutral-200/70 bg-white/60 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <p className="font-display font-bold text-base text-neutral-950">
              {personal.name}
            </p>
            <p className="text-xs font-mono text-neutral-500">
              {personal.role} · {personal.location}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono uppercase tracking-wider text-neutral-600">
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-950 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-950 transition-colors"
            >
              GitHub
            </a>
            <a
              href={personal.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-950 transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="hover:text-neutral-950 transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-neutral-200/60 flex items-center justify-center">
          <a
            href="https://bps-tech.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/85 backdrop-blur-md border border-neutral-200/85 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.08)] hover:border-blue-500/35 hover:bg-white hover:shadow-[0_10px_28px_-6px_rgba(37,99,235,0.2)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <span className="text-xs font-mono text-neutral-500 group-hover:text-neutral-700 transition-colors">
              Desarrollado por
            </span>
            <span className="inline-flex items-center gap-1.5 font-display font-bold text-xs tracking-wide text-neutral-950">
              <span>BPS</span>
              <span className="relative inline-flex items-center justify-center">
                <Zap className="relative w-3.5 h-3.5 text-blue-500 fill-blue-500 drop-shadow-[0_0_6px_rgba(59,130,246,0.85)] group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(37,99,235,1)] transition-all duration-300" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
