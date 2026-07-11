"use client";
import React from "react";

export default function ShineBorder({
  children,
  colorFrom = "#0d9488",
  colorTo = "#6366f1",
  className = "",
  innerClassName = "p-6 sm:p-8"
}) {
  return (
    <div className={`relative rounded-2xl p-[1.2px] overflow-hidden bg-zinc-800/40 backdrop-blur-sm ${className}`}>
      {/* Dynamic continuous rotating glow background */}
      <div
        style={{
          background: `conic-gradient(from 0deg, transparent 20%, ${colorFrom} 40%, ${colorTo} 60%, transparent 80%)`
        }}
        className="absolute inset-[-250%] animate-spin-gradient-slow pointer-events-none -z-10"
      />
      {/* Inner Mask (Content Container) */}
      <div className={`relative z-10 w-full h-full bg-zinc-950/98 rounded-[15px] ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
}
