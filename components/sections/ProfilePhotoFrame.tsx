"use client";

import React, { useState } from "react";
import Image from "next/image";
import { User, Camera } from "lucide-react";

interface ProfilePhotoFrameProps {
  photoSrc?: string;
  name?: string;
  className?: string;
}

export default function ProfilePhotoFrame({
  photoSrc = "/profile.jpg",
  name = "Samuel Bustos Puntis",
  className,
}: ProfilePhotoFrameProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`relative flex flex-col items-center justify-center ${className || ""}`}>
      
      {/* Subtle Ambient Backlight */}
      <div className="absolute inset-0 rounded-3xl bg-white/[0.02] blur-2xl pointer-events-none" />

      {/* Main Executive Photo Card */}
      <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl p-2 bg-gradient-to-b from-zinc-800/70 via-zinc-900/80 to-zinc-950/90 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/50 group overflow-hidden transition-all duration-300 hover:border-white/25">
        
        {/* Photo Canvas Container */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-zinc-950 flex items-center justify-center border border-white/5">
          {!imgError ? (
            <Image
              src={photoSrc}
              alt={name}
              fill
              sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgError(true)}
              priority
            />
          ) : (
            /* Elegant Minimalist Placeholder */
            <div className="flex flex-col items-center justify-center p-6 text-center text-zinc-400 select-none">
              <div className="relative mb-3">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white shadow-inner">
                  <User className="w-10 h-10 text-zinc-300 stroke-[1.5]" />
                </div>
                <div className="absolute -bottom-1 -right-1 p-1.5 rounded-lg bg-zinc-800 border border-white/10 text-zinc-300">
                  <Camera className="w-3.5 h-3.5" />
                </div>
              </div>
              <p className="font-mono text-xs text-zinc-200 font-semibold tracking-wide">
                Espacio para tu Foto
              </p>
              <p className="text-[11px] text-zinc-500 mt-1 max-w-[190px] leading-tight">
                Carga tu imagen en <span className="text-zinc-300 font-mono">public/profile.jpg</span>
              </p>
            </div>
          )}

          {/* Minimalist Hover Card (clean executive overlay) */}
          <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 z-10 text-xs">
            <div className="flex justify-between items-center text-zinc-300 border-b border-white/10 pb-2">
              <span className="font-mono text-xs font-semibold text-white">Samuel Bustos Puntis</span>
              <span className="text-[11px] text-zinc-400 font-mono">
                UTN FRVM
              </span>
            </div>
            
            <div className="space-y-1 text-left text-zinc-300">
              <p className="text-white font-medium">Ingeniero en Sistemas de Información</p>
              <p className="text-[11px] text-zinc-400 font-mono pt-1">
                Data Analytics & Data Science
              </p>
            </div>

            <div className="pt-2 border-t border-white/10 flex justify-between font-mono text-[10px] text-zinc-400">
              <span>Córdoba, Argentina</span>
              <span className="text-zinc-200 font-bold">Promedio: 8.44</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
