"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import {
  CheckCircle2,
  Calendar,
} from "lucide-react";

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const categories = [
    "Todos",
    "Data & Analytics",
    "Full-Stack",
    "Cloud & Architecture",
  ];

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            badgeText="PROYECTOS & CASOS DE USO"
            title="Proyectos Destacados"
            subtitle="Sistemas en producción, proyectos finales de ingeniería y soluciones de datos enfocadas en rendimiento y valor de negocio."
            className="mb-0"
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-zinc-950/80 border border-white/10 backdrop-blur-xl shrink-0">
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`text-xs px-3.5 py-1.5 rounded-xl transition-all cursor-pointer font-medium ${
                    isSelected
                      ? "bg-white text-zinc-950 font-semibold shadow-sm"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <GlassCard
              key={project.id}
              variant="default"
              className="p-6 sm:p-7 flex flex-col justify-between group border-white/[0.08] hover:border-white/20 relative"
            >
              {/* Header Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="neutral" size="sm">
                    {project.badge}
                  </Badge>
                  <span className="font-mono text-xs text-zinc-400 flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-zinc-500" />
                    {project.period}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-zinc-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-1">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Key Project Highlights */}
                <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                  <h5 className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider">
                    Aspectos Clave:
                  </h5>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Tech Stack & Metrics */}
              <div className="mt-8 pt-4 border-t border-white/[0.08] space-y-4">
                {project.metrics && (
                  <div className="grid grid-cols-2 gap-2 bg-zinc-950/80 p-2.5 rounded-xl border border-white/5 font-mono text-xs">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-[10px] text-zinc-500 uppercase">
                          {m.label}
                        </span>
                        <span className="text-zinc-200 font-semibold">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-zinc-900 text-zinc-400 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
