import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Footer() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <footer className="relative z-10 border-t border-neutral-200/70 bg-white/60 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
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
    </footer>
  );
}
