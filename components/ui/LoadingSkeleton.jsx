"use client";
import React from "react";
import { motion } from "framer-motion";

// Shimmer highlight element to reuse across skeleton blocks
const Shimmer = () => (
  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
);

export default function LoadingSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 bg-zinc-950 flex flex-col justify-between p-6 sm:p-12 pointer-events-auto"
    >
      {/* Background gradients */}
      <div className="absolute top-[10%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-teal-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-[35vw] h-[35vw] rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

      {/* Header Skeleton */}
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between py-2 border-b border-zinc-900/50">
        <div className="w-28 h-6 bg-zinc-900 rounded-lg relative overflow-hidden">
          <Shimmer />
        </div>
        <div className="hidden md:flex items-center gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-16 h-4 bg-zinc-900 rounded relative overflow-hidden">
              <Shimmer />
            </div>
          ))}
        </div>
        <div className="w-20 h-7 bg-zinc-900 rounded-full relative overflow-hidden">
          <Shimmer />
        </div>
      </div>

      {/* Hero Grid Skeleton */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
        
        {/* Left Side Column */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Sparkle Tag */}
          <div className="w-32 h-6 bg-zinc-900 rounded-full relative overflow-hidden">
            <Shimmer />
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-3">
            <div className="w-4/5 h-14 bg-zinc-900 rounded-xl relative overflow-hidden">
              <Shimmer />
            </div>
            <div className="w-3/5 h-14 bg-zinc-900 rounded-xl relative overflow-hidden">
              <Shimmer />
            </div>
          </div>

          {/* Paragraphs */}
          <div className="flex flex-col gap-2.5 mt-2">
            <div className="w-full h-4 bg-zinc-900 rounded relative overflow-hidden">
              <Shimmer />
            </div>
            <div className="w-11/12 h-4 bg-zinc-900 rounded relative overflow-hidden">
              <Shimmer />
            </div>
            <div className="w-4/5 h-4 bg-zinc-900 rounded relative overflow-hidden">
              <Shimmer />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 mt-4">
            <div className="w-44 h-12 bg-zinc-900 rounded-full relative overflow-hidden">
              <Shimmer />
            </div>
            <div className="w-36 h-12 bg-zinc-900 rounded-full relative overflow-hidden">
              <Shimmer />
            </div>
          </div>
        </div>

        {/* Right Side Column: Mac Terminal shape */}
        <div className="lg:col-span-5 w-full mx-auto max-w-md">
          <div className="w-full rounded-xl border border-zinc-900 bg-zinc-900/10 overflow-hidden shadow-2xl p-4 flex flex-col gap-4 relative">
            {/* Header circles */}
            <div className="flex items-center gap-1.5 pb-2 border-b border-zinc-900/50">
              <div className="w-3 h-3 rounded-full bg-zinc-900" />
              <div className="w-3 h-3 rounded-full bg-zinc-900" />
              <div className="w-3 h-3 rounded-full bg-zinc-900" />
            </div>
            
            {/* Code Lines */}
            <div className="flex flex-col gap-3 mt-1">
              <div className="w-2/3 h-4 bg-zinc-900 rounded relative overflow-hidden">
                <Shimmer />
              </div>
              <div className="w-11/12 h-4 bg-zinc-900 rounded relative overflow-hidden">
                <Shimmer />
              </div>
              <div className="w-4/5 h-4 bg-zinc-900 rounded relative overflow-hidden">
                <Shimmer />
              </div>
              <div className="w-5/6 h-4 bg-zinc-900 rounded relative overflow-hidden">
                <Shimmer />
              </div>
              <div className="w-1/2 h-4 bg-zinc-900 rounded relative overflow-hidden">
                <Shimmer />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Skeleton */}
      <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between border-t border-zinc-900/50 pt-8 mt-auto">
        <div className="w-48 h-3 bg-zinc-900 rounded relative overflow-hidden">
          <Shimmer />
        </div>
        <div className="w-32 h-3 bg-zinc-900 rounded relative overflow-hidden mt-4 sm:mt-0">
          <Shimmer />
        </div>
      </div>
    </motion.div>
  );
}
