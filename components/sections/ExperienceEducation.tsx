"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA, CertificationItem } from "@/data/portfolioData";
import { ArrowUpRight, X } from "lucide-react";

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export default function ExperienceEducation() {
  const { education, certifications, nextSteps } = PORTFOLIO_DATA;
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(
    null
  );

  useEffect(() => {
    document.body.style.overflow = selectedCert ? "hidden" : "unset";
    if (!selectedCert) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedCert]);

  return (
    <section
      id="education"
      className="py-24 sm:py-32 border-b border-neutral-200/70"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-10 space-y-16 sm:space-y-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="max-w-2xl space-y-3"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            03 // FORMACIÓN ACADÉMICA & CERTIFICACIONES
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950">
            Base universitaria y capacitación continua.
          </h2>
        </motion.div>

        {/* University Degree — Rounded Glass Block */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="light-glass-strong rounded-3xl p-8 sm:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-neutral-500">
                <span className="px-3.5 py-1 rounded-full bg-neutral-950 text-white">
                  {education.status}
                </span>
                <span>{education.period}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
                {education.degree}
              </h3>

              <p className="font-mono text-sm text-neutral-600">
                {education.institution}
              </p>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl pt-2">
                {education.summary}
              </p>
            </div>

            <div className="lg:col-span-4 lg:border-l lg:border-neutral-200/70 lg:pl-12 flex flex-col justify-center">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                Promedio Académico
              </span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-5xl sm:text-6xl font-bold text-neutral-950 tracking-tight">
                  {education.average}
                </span>
                <span className="font-mono text-sm text-neutral-400">/ 10</span>
              </div>
              <span className="text-xs font-mono text-neutral-500 mt-2">
                Título de grado finalizado
              </span>
            </div>
          </div>
        </motion.div>

        {/* Completed Certifications — Spacious Rounded Glass 2x2 Grid */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-neutral-200/70 pb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-950">
              Especializaciones Completadas
            </h3>
            <span className="font-mono text-xs text-neutral-500">
              Seleccioná cualquiera para ver el diploma original
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-9">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 28, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.08,
                  ease: easeOutExpo,
                }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedCert(cert)}
                className="group light-glass rounded-3xl p-8 sm:p-10 flex flex-col justify-between gap-8 cursor-pointer transition-shadow hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.09)]"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between font-mono text-xs text-neutral-500">
                    <span className="px-3 py-1 rounded-full bg-neutral-900/5 uppercase tracking-wider text-neutral-600">
                      {cert.institution}
                    </span>
                    <span>{cert.date}</span>
                  </div>

                  <div className="relative w-full h-48 rounded-2xl bg-white/70 border border-neutral-200/70 overflow-hidden">
                    <Image
                      src={cert.certificateImage}
                      alt={cert.title}
                      fill
                      sizes="(max-width: 768px) 90vw, 480px"
                      className="object-contain p-3 group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight">
                      {cert.title}
                    </h4>
                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                      {cert.detail}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-200/60 flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {cert.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white/75 border border-neutral-200/80 font-mono text-[11px] text-neutral-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-950 text-white font-mono text-xs uppercase tracking-wider shrink-0 group-hover:bg-neutral-800 transition-colors">
                    <span>Ver</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Next Learning Goals */}
        <div className="space-y-6">
          <div className="border-b border-neutral-200/70 pb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-950">
              Próximos pasos de formación
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-9">
            {nextSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: easeOutExpo,
                }}
                className="light-glass rounded-3xl p-8 sm:p-10 space-y-3"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                  0{index + 1} · {step.subtitle}
                </span>
                <h4 className="text-2xl font-bold text-neutral-950">
                  {step.title}
                </h4>
                <p className="text-base text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Rounded Glass Lightbox Modal (Responsive for 1333x766 & Mobile) */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedCert && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[9999] bg-neutral-950/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
                onClick={() => setSelectedCert(null)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.94, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: 12 }}
                  transition={{ duration: 0.25, ease: easeOutExpo }}
                  className="light-glass-strong rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col p-5 sm:p-7 gap-4 sm:gap-5 overflow-hidden my-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-start justify-between gap-4 border-b border-neutral-200/70 pb-4 shrink-0">
                    <div className="min-w-0">
                      <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-neutral-500 block">
                        {selectedCert.institution} · {selectedCert.date}
                      </span>
                      <h3 className="text-lg sm:text-2xl font-bold text-neutral-950 mt-1 leading-snug">
                        {selectedCert.title}
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedCert(null)}
                      className="p-2 rounded-full border border-neutral-300 hover:border-neutral-950 text-neutral-950 transition-colors cursor-pointer shrink-0"
                      aria-label="Cerrar"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="relative w-full h-[52vh] sm:h-[62vh] max-h-[520px] min-h-[220px] rounded-2xl bg-white/80 border border-neutral-200/70 overflow-hidden">
                    <Image
                      src={selectedCert.certificateImage}
                      alt={selectedCert.title}
                      fill
                      sizes="(max-width: 768px) 95vw, 900px"
                      className="object-contain p-2 sm:p-3"
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
