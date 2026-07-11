"use client";
import React from "react";

export default function BorderBeam({
  colorFrom = "#0d9488",
  colorTo = "#6366f1",
  className = "",
}) {
  return (
    <div className={`absolute inset-0 rounded-[inherit] p-[1.5px] overflow-hidden pointer-events-none -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${className}`}>
      <div
        style={{
          background: `conic-gradient(from 0deg, transparent 30%, ${colorFrom} 45%, ${colorTo} 55%, transparent 70%)`,
        }}
        className="absolute inset-[-200%] animate-spin-gradient"
      />
    </div>
  );
}
