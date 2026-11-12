"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section
      id="hero"
      className="pt-28 sm:pt-40 pb-16 sm:pb-28 border-b border-neutral-200/70"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: easeOutExpo }}
        className="max-w-6xl mx-auto px-5 sm:px-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Staggered Blur-to-Focus Entrance */}
          <div className="lg:col-span-7 space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.65, delay: 0.1, ease: easeOutExpo }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full light-glass"
            >
              <span className="w-2 h-2 rounded-full bg-neutral-950 inline-block" />
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-600">
                {personal.location} · {personal.focus}
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 22, scale: 0.98, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.85, delay: 0.18, ease: easeOutExpo }}
                className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.06]"
              >
                {personal.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.75, delay: 0.3, ease: easeOutExpo }}
                className="text-xl sm:text-2xl text-neutral-700 font-normal leading-snug"
              >
                {personal.role}.{" "}
                <span className="text-neutral-500">
                  Enfocado en resolver problemas reales con datos, criterio y producto.
                </span>
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.4, ease: easeOutExpo }}
              className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl"
            >
              {personal.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.48, ease: easeOutExpo }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-neutral-950 text-white text-xs font-mono uppercase tracking-widest hover:bg-neutral-800 hover:scale-[1.02] transition-all shadow-md"
              >
                <span>Ver proyectos</span>
                <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full light-glass text-neutral-950 hover:bg-white/90 hover:scale-[1.02] text-xs font-mono uppercase tracking-widest transition-all"
              >
                <span>Contacto directo</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Main Portrait with B&W-to-Color Entrance */}
          <motion.div
            initial={{ opacity: 0, scale: 1.08, filter: "grayscale(100%)" }}
            animate={{ opacity: 1, scale: 1, filter: "grayscale(0%)" }}
            transition={{
              opacity: { duration: 0.7, delay: 0.15, ease: easeOutExpo },
              scale: { duration: 0.95, delay: 0.15, ease: easeOutExpo },
              filter: { duration: 1.2, delay: 0.55, ease: "easeInOut" },
            }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[300px] sm:max-w-[360px]">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 rounded-[2rem] light-glass"
              />
              <div className="relative aspect-[4/5] w-full rounded-[2rem] bg-white/80 border border-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)] overflow-hidden">
                <Image
                  src={personal.avatarPath}
                  alt={personal.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 360px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Rounded Glass Key Facts Strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.55, ease: easeOutExpo }}
          className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6"
        >
          {personal.stats.map((stat, index) => (
            <div
              key={stat.label}
              className="light-glass rounded-3xl p-6 sm:p-7 flex flex-col space-y-1.5"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                0{index + 1} / {stat.label}
              </span>
              <span className="text-lg sm:text-xl font-semibold text-neutral-950 tracking-tight">
                {stat.value}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
