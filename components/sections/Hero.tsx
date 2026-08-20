"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import ProfilePhotoFrame from "./ProfilePhotoFrame";
import GlowingButton from "@/components/ui/GlowingButton";
import GlassCard from "@/components/ui/GlassCard";
import {
  ArrowRight,
  MapPin,
  GraduationCap,
  Layers,
  Activity,
  Terminal,
} from "lucide-react";

export default function Hero() {
  const { personal, telemetry } = PORTFOLIO_DATA;

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] pt-24 sm:pt-32 pb-12 sm:pb-16 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Executive Identity */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-5 sm:space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 backdrop-blur-xl shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-xs text-zinc-300 font-medium tracking-wide">
                Disponible para contratación
              </span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white font-sans leading-[1.1]">
                Samuel <br />
                <span className="text-gradient-silver">
                  Bustos Puntis
                </span>
              </h1>
              
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                <span className="text-base sm:text-xl lg:text-2xl font-medium text-zinc-300">
                  {personal.role}
                </span>
                <span className="text-zinc-600 font-mono hidden sm:inline">•</span>
                <span className="text-base sm:text-xl lg:text-2xl font-medium text-zinc-400">
                  {personal.specialization}
                </span>
              </div>
            </div>

            {/* Bio summary */}
            <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-2xl bg-zinc-900/40 p-4 rounded-2xl border border-white/[0.06] backdrop-blur-md">
              Graduado de la <strong className="text-white font-medium">UTN FRVM</strong> con especialización en <strong className="text-zinc-200 font-medium">Data Analytics, Data Science e Ingeniería de Datos</strong>. Enfoque en transformar información compleja en soluciones accionables, pipelines ETL escalables y modelos analíticos de alto impacto para la toma de decisiones.
            </p>

            {/* Quick Metadata Chips */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5 bg-zinc-900/80 px-2.5 sm:px-3 py-1.5 rounded-xl border border-white/[0.08]">
                <MapPin className="w-3.5 h-3.5 text-zinc-300" />
                {personal.location}
              </span>
              <span className="flex items-center gap-1.5 bg-zinc-900/80 px-2.5 sm:px-3 py-1.5 rounded-xl border border-white/[0.08]">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                UTN FRVM (Promedio: 8.44)
              </span>
              <span className="flex items-center gap-1.5 bg-zinc-900/80 px-2.5 sm:px-3 py-1.5 rounded-xl border border-white/[0.08]">
                <Layers className="w-3.5 h-3.5 text-zinc-300" />
                Python • SQL • AWS • React
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2 w-full sm:w-auto">
              <GlowingButton
                asAnchor
                href="#projects"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto text-center"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Ver Proyectos
              </GlowingButton>

              <GlowingButton
                asAnchor
                href="#pipeline"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto text-center"
                icon={<Activity className="w-4 h-4 text-emerald-400" />}
              >
                Arquitectura de Datos
              </GlowingButton>

              <GlowingButton
                asAnchor
                href="#terminal"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-center"
                icon={<Terminal className="w-4 h-4 text-zinc-400" />}
              >
                Terminal
              </GlowingButton>
            </div>
          </div>

          {/* Right Column: Single Photo Slot with responsive ordering */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <ProfilePhotoFrame
              photoSrc={personal.avatarPath}
              name={personal.name}
            />
          </div>
        </div>

        {/* Executive Telemetry Grid */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {telemetry.map((item, index) => (
              <GlassCard
                key={index}
                variant="default"
                className="p-3.5 sm:p-5 flex flex-col items-start relative group border-white/[0.08]"
              >
                <span className="text-[10px] sm:text-[11px] font-mono text-zinc-500 uppercase mb-1">
                  {item.label}
                </span>
                <div className="flex items-baseline gap-1.5 sm:gap-2">
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold font-mono text-white">
                    {item.value}
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono text-zinc-500 font-medium">
                    {item.unit}
                  </span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
