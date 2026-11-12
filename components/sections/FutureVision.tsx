"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export default function FutureVision() {
  const { visions } = PORTFOLIO_DATA;
  const [factory, speaker] = visions;

  return (
    <section
      id="future"
      className="py-24 sm:py-32 border-b border-neutral-200/70"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-10 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="max-w-2xl space-y-3"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            04 // VISIÓN & PROYECCIÓN
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950">
            Hacia dónde construyo mi camino.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed pt-1">
            Dos objetivos claros que impulsan mi crecimiento técnico y profesional a mediano y largo plazo.
          </p>
        </motion.div>

        {/* Two Contrasting Cards: 01 Frosted White, 02 Soft Charcoal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-9">
          {/* Card 01: Frosted White */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
            whileHover={{ y: -4 }}
            className="light-glass rounded-3xl p-8 sm:p-11 flex flex-col justify-between gap-10 transition-shadow hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.09)]"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-200/70 pb-5">
                <span className="px-3.5 py-1 rounded-full bg-neutral-900/5 font-mono text-xs uppercase tracking-widest text-neutral-600">
                  {factory.horizon}
                </span>
                <span className="font-mono text-2xl font-semibold text-neutral-300">
                  01
                </span>
              </div>

              <h3>
                <a
                  href="#contact"
                  className="group/title flex items-center justify-between gap-3 text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight leading-snug w-full"
                >
                  <span className="flex items-center gap-2 min-w-0">
                    <span className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg overflow-hidden border border-neutral-200/90 shrink-0 shadow-xs bg-white transition-transform duration-300 group-hover/title:scale-105">
                      <Image
                        src={factory.image}
                        alt={factory.imageAlt}
                        fill
                        sizes="36px"
                        className="object-cover"
                      />
                    </span>
                    <span className="relative inline-block">
                      <span>{factory.title}</span>
                      <span
                        aria-hidden="true"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle, #d4d4d4 2px, transparent 2px)",
                          backgroundSize: "10px 3px",
                          backgroundRepeat: "repeat-x",
                        }}
                        className="absolute left-0 right-0 bottom-[1px] h-[3px] scale-x-0 group-hover/title:scale-x-100 origin-left transition-transform duration-300 ease-out"
                      />
                    </span>
                  </span>

                  <ArrowUpRight className="w-5 h-5 shrink-0 text-neutral-300 opacity-0 -translate-x-1.5 translate-y-1.5 group-hover/title:opacity-100 group-hover/title:translate-x-0 group-hover/title:translate-y-0 transition-all duration-300 ease-out" />
                </a>
              </h3>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                {factory.description}
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-200/70 space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block">
                Ejes principales
              </span>
              <ul className="space-y-2.5">
                {factory.pillars.map((pillar) => (
                  <li
                    key={pillar}
                    className="flex items-center gap-3 text-sm sm:text-base font-medium text-neutral-800"
                  >
                    <span className="w-2 h-2 rounded-full bg-neutral-950 shrink-0" />
                    <span>{pillar}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Card 02: Soft Charcoal / Dark Gray */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
            whileHover={{ y: -4 }}
            className="rounded-3xl bg-neutral-800/95 backdrop-blur-xl text-white p-8 sm:p-11 flex flex-col justify-between gap-10 border border-neutral-700/80 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.22)]"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/15 pb-5">
                <span className="px-3.5 py-1 rounded-full bg-white/10 font-mono text-xs uppercase tracking-widest text-neutral-200">
                  {speaker.horizon}
                </span>
                <span className="font-mono text-2xl font-semibold text-white/25">
                  02
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                {speaker.title}
              </h3>

              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                {speaker.description}
              </p>
            </div>

            <div className="pt-6 border-t border-white/15 space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block">
                Ejes principales
              </span>
              <ul className="space-y-2.5">
                {speaker.pillars.map((pillar) => (
                  <li
                    key={pillar}
                    className="flex items-center gap-3 text-sm sm:text-base font-medium text-neutral-100"
                  >
                    <span className="w-2 h-2 rounded-full bg-white shrink-0" />
                    <span>{pillar}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
