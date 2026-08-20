"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlowingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  asAnchor?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
}

export default function GlowingButton({
  children,
  variant = "primary",
  size = "md",
  icon,
  className,
  asAnchor,
  href,
  target,
  rel,
  download,
  ...props
}: GlowingButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2.5 font-medium rounded-xl transition-all duration-200 active:scale-[0.98] cursor-pointer select-none font-sans";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2",
    md: "text-sm px-5 py-2.5",
    lg: "text-sm sm:text-base px-6 py-3",
  };

  const variantStyles = {
    primary:
      "bg-white text-zinc-950 font-semibold hover:bg-zinc-200 shadow-md shadow-white/5 border border-white",
    secondary:
      "bg-zinc-900/90 hover:bg-zinc-800 text-zinc-100 border border-white/15 backdrop-blur-md hover:border-white/30 shadow-sm",
    outline:
      "bg-transparent hover:bg-white/[0.06] text-zinc-300 hover:text-white border border-white/15 hover:border-white/35 backdrop-blur-sm",
    ghost:
      "bg-transparent hover:bg-white/[0.06] text-zinc-400 hover:text-white border-transparent",
  };

  const combinedClassName = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (asAnchor && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={combinedClassName}
      >
        {icon && <span className="inline-flex shrink-0">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      {children}
    </button>
  );
}
