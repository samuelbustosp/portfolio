"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { PORTFOLIO_DATA, CourseItem } from "@/data/portfolioData";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import {
  GraduationCap,
  Award,
  Calendar,
  CheckCircle2,
  Eye,
  X,
  FileCheck,
} from "lucide-react";

interface ModalCertificate {
  title: string;
  institution: string;
  period: string;
  imageSrc: string;
}

export default function ExperienceEducation() {
  const { education, courses } = PORTFOLIO_DATA;
  const [activeCertificate, setActiveCertificate] = useState<ModalCertificate | null>(null);
  const [imgErrorMap, setImgErrorMap] = useState<{ [key: string]: boolean }>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (activeCertificate) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeCertificate]);

  const handleOpenCertificate = (item: CourseItem) => {
    if (!item.certificateImage) return;
    setActiveCertificate({
      title: item.title,
      institution: item.institution,
      period: item.period,
      imageSrc: item.certificateImage,
    });
  };

  return (
    <section id="education" className="relative py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badgeText="FORMACIÓN ACADÉMICA"
          title="Educación & Certificaciones"
          subtitle="Grado en Ingeniería en Sistemas de Información y especializaciones en Big Data, Machine Learning, Ingeniería de Datos y Desarrollo Web."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: University Degree (Clean, no modal) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs uppercase text-zinc-400 font-semibold tracking-wider flex items-center gap-2 font-mono">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              Título de Grado Universitario
            </h3>

            {education.map((edu) => (
              <GlassCard
                key={edu.id}
                variant="glow"
                className="p-5 sm:p-8 border-white/15 relative overflow-hidden"
              >
                {/* Grade Badge */}
                <div className="absolute top-5 sm:top-6 right-5 sm:right-6">
                  <div className="flex flex-col items-end">
                    <span className="font-mono text-[10px] text-zinc-500 uppercase">
                      Promedio
                    </span>
                    <span className="font-mono text-xl sm:text-2xl font-bold text-white">
                      {edu.grade} <span className="text-xs text-zinc-400 font-normal">/10</span>
                    </span>
                  </div>
                </div>

                <div className="space-y-4 pr-16 sm:pr-20">
                  <Badge variant="emerald" size="sm">
                    {edu.status}
                  </Badge>

                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white font-sans">
                      {edu.degree}
                    </h4>
                    <p className="text-xs sm:text-sm font-mono text-zinc-300 mt-1">
                      {edu.institution}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {edu.description && (
                  <div className="mt-6 pt-4 border-t border-white/10 space-y-2.5 text-sm text-zinc-300">
                    {edu.description.map((desc, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <p className="text-xs leading-relaxed text-zinc-300">{desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </GlassCard>
            ))}
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs uppercase text-zinc-400 font-semibold tracking-wider flex items-center gap-2 font-mono">
              <Award className="w-4 h-4 text-zinc-300" />
              Especializaciones & Certificaciones
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {courses.map((course) => {
                const hasCert = Boolean(course.certificateImage);

                return (
                  <GlassCard
                    key={course.id}
                    variant="default"
                    className={`p-4 sm:p-5 flex flex-col justify-between border-white/[0.08] transition-all duration-300 ${
                      hasCert
                        ? "cursor-pointer hover:border-white/30 hover:bg-zinc-900/90"
                        : ""
                    }`}
                    onClick={() => hasCert && handleOpenCertificate(course)}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <Badge
                            variant={course.status === "En curso" ? "purple" : "neutral"}
                            size="sm"
                          >
                            {course.status}
                          </Badge>
                          {hasCert && (
                            <span className="inline-flex items-center gap-1 font-mono text-[10px] text-zinc-400 bg-zinc-950 px-2 py-0.5 rounded-full border border-white/5 group-hover:text-white">
                              <FileCheck className="w-3 h-3 text-emerald-400" />
                              Certificado
                            </span>
                          )}
                        </div>
                        <span className="font-mono text-[11px] text-zinc-500">
                          {course.period}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-white font-sans">
                          {course.title}
                        </h4>
                        <p className="text-xs font-mono text-zinc-400">
                          {course.institution}
                        </p>
                      </div>

                      <p className="text-xs text-zinc-400 leading-relaxed line-clamp-4">
                        {course.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1.5">
                        {course.tags.slice(0, 3).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="font-mono text-[10px] px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {hasCert && (
                        <span className="text-[11px] font-mono text-zinc-300 flex items-center gap-1 hover:text-white transition-colors bg-zinc-900 px-2 py-0.5 rounded border border-white/10">
                          <Eye className="w-3 h-3 text-emerald-400" /> Ver Certificado
                        </span>
                      )}
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Certificate Modal using React Portal directly into body to prevent any z-index or stacking overlap */}
      {mounted && activeCertificate && createPortal(
        <div
          className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-150"
          onClick={() => setActiveCertificate(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-zinc-950 border border-white/20 rounded-3xl p-5 sm:p-7 shadow-2xl space-y-4 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4 gap-4">
              <div>
                <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
                  Certificación Oficial
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-white mt-0.5">
                  {activeCertificate.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 mt-0.5">
                  {activeCertificate.institution} • {activeCertificate.period}
                </p>
              </div>

              <button
                onClick={() => setActiveCertificate(null)}
                className="p-2 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer shrink-0"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Certificate Image Canvas */}
            <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 flex items-center justify-center">
              {!imgErrorMap[activeCertificate.imageSrc] ? (
                <Image
                  src={activeCertificate.imageSrc}
                  alt={activeCertificate.title}
                  fill
                  sizes="(max-width: 768px) 95vw, 768px"
                  className="object-contain p-2"
                  onError={() =>
                    setImgErrorMap((prev) => ({
                      ...prev,
                      [activeCertificate.imageSrc]: true,
                    }))
                  }
                />
              ) : (
                <div className="p-6 text-center text-zinc-400 space-y-2">
                  <FileCheck className="w-10 h-10 text-zinc-400 mx-auto" />
                  <p className="text-xs sm:text-sm font-mono text-zinc-200 font-semibold">
                    Archivo: {activeCertificate.imageSrc}
                  </p>
                  <p className="text-xs text-zinc-500 max-w-sm mx-auto leading-relaxed">
                    Guarda la imagen de tu certificado en{" "}
                    <code className="text-zinc-300 font-mono">
                      public{activeCertificate.imageSrc}
                    </code>{" "}
                    para que se visualice aquí.
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between pt-2 text-xs font-mono text-zinc-500">
              <span className="truncate max-w-[200px] sm:max-w-none">{activeCertificate.imageSrc}</span>
              <button
                onClick={() => setActiveCertificate(null)}
                className="px-4 py-2 rounded-xl bg-white text-zinc-950 font-semibold text-xs cursor-pointer hover:bg-zinc-200 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
