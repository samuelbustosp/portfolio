"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import {
  Database,
  Cloud,
  Code2,
  Cpu,
  Globe2,
  Layers,
} from "lucide-react";

export default function SkillsMatrix() {
  const { skillCategories, languages } = PORTFOLIO_DATA;

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Database":
        return <Database className="w-5 h-5 text-cyan-400" />;
      case "Cloud":
        return <Cloud className="w-5 h-5 text-blue-400" />;
      case "Code2":
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-purple-400" />;
      default:
        return <Layers className="w-5 h-5 text-zinc-300" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badgeText="HABILIDADES & TECNOLOGÍAS"
          title="Stack Tecnológico & Competencias"
          subtitle="Conjunto integral de herramientas aplicadas en ingeniería de datos, modelado analítico, arquitectura en la nube y desarrollo de software."
        />

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <GlassCard
              key={idx}
              variant="default"
              className="p-6 sm:p-7 flex flex-col justify-between border-white/[0.08] hover:border-white/20"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/[0.06]">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/10">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-normal mt-0.5">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono border transition-all ${
                        skill.highlight
                          ? "bg-zinc-800/90 text-white border-white/20 font-medium"
                          : "bg-zinc-950/60 text-zinc-400 border-white/[0.06] hover:border-white/15 hover:text-zinc-200"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          skill.highlight ? "bg-white" : "bg-zinc-600"
                        }`}
                      />
                      <span>{skill.name}</span>
                      <span className="text-[10px] text-zinc-500 font-normal">
                        [{skill.level}]
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-8 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>HABILIDAD VALIDADA</span>
                <span className="text-zinc-400">PRODUCCIÓN READY</span>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Languages & Soft Skills */}
        <div className="mt-6">
          <GlassCard variant="subtle" className="p-6 border-white/[0.08]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              
              {/* Languages */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center gap-2 text-zinc-300 font-mono text-xs font-semibold">
                  <Globe2 className="w-4 h-4 text-zinc-400" />
                  <span>IDIOMAS:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang, lIdx) => (
                    <Badge key={lIdx} variant="neutral" size="md">
                      <strong className="text-white">{lang.language}:</strong> {lang.level}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Core Competencies */}
              <div className="flex flex-wrap items-center justify-start md:justify-end gap-2 text-xs font-mono text-zinc-400">
                <span className="px-3 py-1 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300">
                  Pensamiento Analítico
                </span>
                <span className="px-3 py-1 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300">
                  Trabajo en Equipo
                </span>
                <span className="px-3 py-1 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300">
                  Aprendizaje Continuo
                </span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
