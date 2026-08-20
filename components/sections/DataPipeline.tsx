"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import {
  Database,
  Cpu,
  Brain,
  Cloud,
  LineChart,
  ArrowRight,
  CheckCircle2,
  Workflow,
} from "lucide-react";

export default function DataPipeline() {
  const { pipelineStages } = PORTFOLIO_DATA;
  const [activeStageId, setActiveStageId] = useState(pipelineStages[0].id);

  const getStageIcon = (id: string) => {
    switch (id) {
      case "ingestion":
        return <Database className="w-4 sm:w-5 h-4 sm:h-5 text-cyan-400" />;
      case "etl":
        return <Workflow className="w-4 sm:w-5 h-4 sm:h-5 text-amber-400" />;
      case "ml":
        return <Brain className="w-4 sm:w-5 h-4 sm:h-5 text-purple-400" />;
      case "infra":
        return <Cloud className="w-4 sm:w-5 h-4 sm:h-5 text-blue-400" />;
      case "bi":
        return <LineChart className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400" />;
      default:
        return <Cpu className="w-4 sm:w-5 h-4 sm:h-5 text-zinc-300" />;
    }
  };

  const activeStage =
    pipelineStages.find((s) => s.id === activeStageId) || pipelineStages[0];

  return (
    <section id="pipeline" className="relative py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badgeText="ARQUITECTURA // CICLO DE DATOS"
          title="Pipeline de Datos de Extremo a Extremo"
          subtitle="Proceso integral de ingeniería y análisis: desde la ingesta de fuentes heterogéneas y transformación analítica hasta modelos predictivos e inteligencia de negocio."
        />

        {/* Interactive Pipeline Node Graph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Stage Selector Grid */}
          <div className="lg:col-span-6 flex flex-col gap-2.5 sm:gap-3">
            {pipelineStages.map((stage, index) => {
              const isActive = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`w-full text-left p-3.5 sm:p-5 rounded-2xl border transition-all duration-200 backdrop-blur-xl flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? "bg-zinc-900 border-white/30 shadow-xl shadow-black/40 ring-1 ring-white/20"
                      : "bg-zinc-950/50 border-white/[0.06] hover:border-white/15 hover:bg-zinc-900/60"
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div
                      className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                        isActive
                          ? "bg-zinc-800 border border-white/20 shadow-sm"
                          : "bg-zinc-900 border border-white/5 group-hover:bg-zinc-850"
                      }`}
                    >
                      {getStageIcon(stage.id)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] sm:text-[11px] text-zinc-400 font-semibold tracking-wider">
                          ETAPA 0{index + 1}
                        </span>
                        <span className="text-zinc-600 text-xs hidden sm:inline">•</span>
                        <span className="font-mono text-xs text-zinc-500 hidden sm:inline">
                          {stage.category}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-lg font-semibold text-white group-hover:text-zinc-200 transition-colors truncate">
                        {stage.name}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 ml-2">
                    <span
                      className={`text-[11px] font-mono px-2 py-0.5 rounded-md border hidden md:inline-block ${
                        isActive
                          ? "bg-zinc-800 text-zinc-200 border-white/20 font-medium"
                          : "bg-zinc-950 text-zinc-500 border-white/5"
                      }`}
                    >
                      {stage.metric}
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isActive
                          ? "text-white translate-x-1"
                          : "text-zinc-600 group-hover:text-zinc-400"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Stage Inspector Card */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <GlassCard
              variant="glow"
              className="p-5 sm:p-8 relative overflow-hidden border-white/15"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5 sm:mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-zinc-800 border border-white/10">
                    {getStageIcon(activeStage.id)}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] sm:text-xs text-zinc-400 font-semibold">
                      INSPECTOR TÉCNICO
                    </span>
                    <h3 className="text-lg sm:text-2xl font-bold text-white">
                      {activeStage.name}
                    </h3>
                  </div>
                </div>
                <Badge variant="neutral" size="sm">{activeStage.metric}</Badge>
              </div>

              {/* Description */}
              <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
                  {activeStage.description}
                </p>
              </div>

              {/* Technologies Used */}
              <div className="space-y-2.5 sm:space-y-3 pt-4 border-t border-white/10">
                <h5 className="font-mono text-[11px] sm:text-xs text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-zinc-400" />
                  Herramientas y Tecnologías:
                </h5>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                  {activeStage.tools.map((tool, idx) => (
                    <Badge
                      key={idx}
                      variant="neutral"
                      size="sm"
                      className="bg-zinc-900 border-white/10"
                    >
                      <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between text-[11px] sm:text-xs font-mono text-zinc-500">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  FLUJO OPTIMIZADO
                </span>
                <span>DATA ARCHITECTURE</span>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
