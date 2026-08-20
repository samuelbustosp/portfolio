"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Menu, X, Send } from "lucide-react";
import GlowingButton from "@/components/ui/GlowingButton";

const navItems = [
  { label: "Pipeline", href: "#pipeline" },
  { label: "Proyectos", href: "#projects" },
  { label: "Habilidades", href: "#skills" },
  { label: "Educación", href: "#education" },
  { label: "Terminal", href: "#terminal" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Monogram Brand */}
        <a
          href="#"
          className="group relative flex items-center gap-3 bg-zinc-900/80 hover:bg-zinc-800/90 backdrop-blur-xl border border-white/10 hover:border-white/20 px-3.5 py-2 rounded-xl transition-all duration-200 shadow-lg shadow-black/20"
        >
          <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-950 font-mono font-bold text-sm shadow-sm">
            SP
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-white font-semibold tracking-wide group-hover:text-zinc-200 transition-colors">
              Samuel Bustos Puntis
            </span>
            <span className="font-mono text-[10px] text-zinc-400">
              Data & Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Pill */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/70 backdrop-blur-2xl border border-white/10 px-3 py-1.5 rounded-full shadow-2xl shadow-black/40">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`text-xs px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-white text-zinc-950 font-semibold shadow-sm"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={PORTFOLIO_DATA.personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-zinc-400 hover:text-white transition-colors px-2 py-1"
          >
            LinkedIn
          </a>
          <GlowingButton
            asAnchor
            href="#contact"
            variant="primary"
            size="sm"
            icon={<Send className="w-3.5 h-3.5" />}
          >
            Contactar
          </GlowingButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-zinc-900/80 border border-white/10 text-zinc-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 max-w-sm mx-auto bg-zinc-950/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-4 shadow-2xl space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm px-4 py-2.5 rounded-xl text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <GlowingButton
              asAnchor
              href="#contact"
              variant="primary"
              size="sm"
              className="w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
              icon={<Send className="w-4 h-4" />}
            >
              Contactar
            </GlowingButton>
          </div>
        </div>
      )}
    </header>
  );
}
