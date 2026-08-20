"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "glow" | "subtle" | "cyber";
  hoverEffect?: boolean;
  className?: string;
}

export default function GlassCard({
  children,
  variant = "default",
  hoverEffect = true,
  className,
  ...props
}: GlassCardProps) {
  const variantStyles = {
    default:
      "bg-zinc-900/50 backdrop-blur-xl border border-white/[0.08] shadow-lg shadow-black/20",
    glow:
      "bg-zinc-900/70 backdrop-blur-xl border border-white/[0.14] shadow-xl shadow-black/30",
    subtle:
      "bg-zinc-950/40 backdrop-blur-md border border-white/[0.05]",
    cyber:
      "bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 backdrop-blur-xl border border-white/[0.09] shadow-2xl relative overflow-hidden",
  };

  return (
    <div
      className={cn(
        "rounded-2xl transition-all duration-300",
        variantStyles[variant],
        hoverEffect &&
          "hover:border-white/25 hover:bg-zinc-900/80 hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-0.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
