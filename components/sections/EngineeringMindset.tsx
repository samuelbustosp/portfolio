"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export default function EngineeringMindset() {
  const { principles } = PORTFOLIO_DATA;

  return (
    <section
      id="thoughts"
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
            01 // CRITERIO DE INGENIERÍA
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950">
            Cómo encaro cada proyecto.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed pt-1">
            Cuatro pilares que guían mi forma de analizar problemas, leer datos y construir tecnología útil.
          </p>
        </motion.div>

        {/* Spacious Rounded Glass 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-9">
          {principles.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: idx * 0.08,
                ease: easeOutExpo,
              }}
              whileHover={{ y: -4 }}
              className="light-glass rounded-3xl p-6 sm:p-11 flex flex-col justify-between gap-7 sm:gap-8 transition-shadow hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.09)]"
            >
              <div className="flex items-center justify-between border-b border-neutral-200/60 pb-5">
                <span className="px-3.5 py-1 rounded-full bg-neutral-900/5 font-mono text-xs uppercase tracking-widest text-neutral-600">
                  {item.label}
                </span>
                <span className="font-mono text-2xl font-semibold text-neutral-300">
                  {item.number}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
