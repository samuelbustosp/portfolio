"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowUpRight } from "lucide-react";

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 border-b border-neutral-200/70"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-10 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
              02 // PROYECTOS EN PRODUCCIÓN
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950">
              Soluciones reales en funcionamiento.
            </h2>
          </div>
          <p className="text-base text-neutral-600 max-w-md">
            Productos diseñados de punta a punta para resolver necesidades concretas de operación, ventas y gestión.
          </p>
        </motion.div>

        {/* Wide, Breathable, Rounded Glass Project Cards */}
        <div className="space-y-9">
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 32, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.06,
                ease: easeOutExpo,
              }}
              className="light-glass rounded-3xl p-6 sm:p-12 transition-shadow hover:shadow-[0_24px_60px_-18px_rgba(0,0,0,0.09)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                {/* Left Column: Identity & Direct Link */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                        PROYECTO {project.number}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-neutral-900/5 font-mono text-[11px] text-neutral-600">
                        {project.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-5">
                      <div className="relative w-16 h-16 rounded-2xl bg-white/90 border border-neutral-200/80 p-1.5 shrink-0 flex items-center justify-center shadow-xs overflow-hidden">
                        <div className="relative w-full h-full rounded-xl overflow-hidden">
                          <Image
                            src={project.logoPath}
                            alt={project.name}
                            fill
                            sizes="64px"
                            unoptimized={project.logoPath.endsWith(".svg")}
                            className="object-cover rounded-xl"
                          />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
                          {project.name}
                        </h3>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-1.5 font-mono text-xs text-neutral-500 hover:text-neutral-950 mt-1 transition-colors"
                        >
                          <span>{project.domain}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-neutral-950 text-white text-xs font-mono uppercase tracking-widest hover:bg-neutral-800 hover:scale-[1.02] transition-all shadow-sm"
                    >
                      <span>Abrir plataforma</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>

                {/* Right Column: Clear Summary, 3 Key Points & Tags */}
                <div className="lg:col-span-7 lg:border-l lg:border-neutral-200/70 lg:pl-12 space-y-8">
                  <p className="text-lg sm:text-xl text-neutral-800 leading-relaxed font-normal">
                    {project.summary}
                  </p>

                  <ul className="space-y-3 border-t border-neutral-200/60 pt-6">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-base text-neutral-600"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-950 mt-2.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3.5 py-1.5 rounded-full bg-white/75 border border-neutral-200/80 font-mono text-xs text-neutral-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
