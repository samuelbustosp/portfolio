import React from "react";
import Badge from "./Badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badgeText: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  badgeText,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <Badge variant="neutral" size="sm" className="mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        {badgeText}
      </Badge>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
