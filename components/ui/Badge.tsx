import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "neutral" | "emerald" | "cyan" | "purple" | "amber" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export default function Badge({
  children,
  variant = "neutral",
  size = "sm",
  className,
}: BadgeProps) {
  const variants = {
    neutral:
      "bg-zinc-800/80 text-zinc-200 border-white/[0.08] hover:border-white/20",
    emerald:
      "bg-zinc-900/90 text-emerald-400 border-emerald-500/30",
    cyan:
      "bg-zinc-900/90 text-cyan-400 border-cyan-500/30",
    purple:
      "bg-zinc-900/90 text-purple-400 border-purple-500/30",
    amber:
      "bg-zinc-900/90 text-amber-400 border-amber-500/30",
    outline:
      "bg-transparent text-zinc-400 border-white/10",
  };

  const sizes = {
    sm: "text-xs px-2.5 py-1",
    md: "text-xs sm:text-sm px-3.5 py-1.5",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono font-medium rounded-full border backdrop-blur-md transition-all",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
