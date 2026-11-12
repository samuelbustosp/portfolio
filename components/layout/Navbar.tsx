"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Enfoque", href: "#thoughts" },
  { label: "Proyectos", href: "#projects" },
  { label: "Formación", href: "#education" },
  { label: "Visión", href: "#future" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 36);
      const scrollPos = window.scrollY + 260;

      const sections = [...navLinks, { label: "Contacto", href: "#contact" }];
      for (const item of sections) {
        const id = item.href.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[padding] duration-300 ease-out ${
        scrolled ? "px-4 sm:px-6 pt-4" : "px-4 sm:px-8 pt-5"
      }`}
    >
      <motion.div
        animate={{
          backgroundColor: scrolled
            ? "rgba(255, 255, 255, 0)"
            : "rgba(255, 255, 255, 0.62)",
          boxShadow: scrolled
            ? "0 0 0 0 rgba(0,0,0,0)"
            : "0 8px 30px rgba(0, 0, 0, 0.04)",
          paddingLeft: scrolled ? "0px" : "18px",
          paddingRight: scrolled ? "0px" : "18px",
          paddingTop: scrolled ? "0px" : "10px",
          paddingBottom: scrolled ? "0px" : "10px",
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`max-w-6xl mx-auto flex items-center justify-between gap-3 rounded-full ${
          scrolled ? "" : "backdrop-blur-xl"
        }`}
      >
        {/* Left Part: Portrait Avatar Pill */}
        <motion.a
          href="#hero"
          animate={{
            backgroundColor: scrolled
              ? "rgba(255, 255, 255, 0.88)"
              : "rgba(255, 255, 255, 0)",
            borderColor: scrolled
              ? "rgba(229, 229, 229, 0.9)"
              : "rgba(255, 255, 255, 0)",
            boxShadow: scrolled
              ? "0 12px 32px -12px rgba(0,0,0,0.12)"
              : "0 0 0 0 rgba(0,0,0,0)",
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`group flex items-center gap-3 rounded-full border ${
            scrolled ? "backdrop-blur-xl px-3 py-1.5" : "px-1 py-0.5"
          }`}
        >
          <span className="relative w-9 h-9 rounded-full overflow-hidden border border-neutral-200/80 shrink-0 bg-neutral-100 transition-all duration-300 group-hover:ring-2 group-hover:ring-neutral-950/20 group-hover:scale-105">
            <Image
              src={PORTFOLIO_DATA.personal.avatarPath}
              alt={PORTFOLIO_DATA.personal.name}
              fill
              sizes="36px"
              className="object-cover object-top"
            />
          </span>
          <div className="hidden sm:flex flex-col leading-tight pr-1 transition-transform duration-300 group-hover:translate-x-0.5">
            <span className="font-display font-bold text-sm text-neutral-950">
              {PORTFOLIO_DATA.personal.name}
            </span>
            <span className="font-mono text-[10px] text-neutral-500">
              Ing. en Sistemas
            </span>
          </div>
        </motion.a>

        {/* Center Part: White Nav Pill with Black Active Slide */}
        <nav
          className={`hidden md:flex items-center gap-1 rounded-full border transition-[background-color,border-color,box-shadow,padding] duration-300 ease-out ${
            scrolled
              ? "bg-white/90 backdrop-blur-xl border-neutral-200/90 shadow-[0_14px_38px_-8px_rgba(0,0,0,0.22),0_0_24px_-6px_rgba(0,0,0,0.16)] px-2 py-1.5"
              : "bg-white/80 border-neutral-200/80 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.12)] px-1.5 py-1"
          }`}
        >
          {navLinks.map((item) => {
            const id = item.href.substring(1);
            const isActive = activeSection === id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative z-10 px-4 py-1.5 rounded-full text-xs sm:text-[13px] font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-neutral-600 hover:text-neutral-950"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-neutral-950 shadow-[0_4px_16px_rgba(0,0,0,0.3)] -z-10"
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Part: Contact Pill with Animated Arrow */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className={`group inline-flex items-center gap-2 rounded-full border text-xs font-mono uppercase tracking-wider transition-[background-color,color,border-color,box-shadow] duration-300 ease-out ${
              scrolled
                ? "bg-white/88 backdrop-blur-xl border-neutral-200/90 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.12)] px-5 py-2.5 text-neutral-950 hover:bg-neutral-950 hover:text-white hover:border-neutral-950"
                : "bg-neutral-950 border-neutral-950 text-white px-5 py-2.5 hover:bg-neutral-800"
            }`}
          >
            <span>Contacto</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2.5 rounded-full light-glass-strong text-neutral-950 cursor-pointer"
          aria-label="Abrir menú"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 max-w-sm mx-auto light-glass-strong rounded-3xl p-4 space-y-2"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-neutral-800 hover:text-neutral-950 hover:bg-neutral-900/5 px-4 py-2.5 rounded-2xl transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="group w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-neutral-950 text-white text-xs font-mono uppercase tracking-widest"
            >
              <span>Contacto</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
