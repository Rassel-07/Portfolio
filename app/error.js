"use client";
import React, { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function ErrorBoundary({ error, reset }) {
  useEffect(() => {
    // Log unexpected client exceptions for debugging
    console.error("Runtime error caught by Next.js boundary:", error);
  }, [error]);

  return (
    <main className="min-h-screen w-full bg-zinc-950 text-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute w-72 h-72 rounded-full bg-rose-500/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-md w-full p-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md flex flex-col items-center text-center gap-6 shadow-2xl">
        <div className="p-3 rounded-full bg-rose-950/50 border border-rose-500/30 text-rose-400">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold tracking-tight text-white">
            Something unexpected occurred
          </h2>
          <p className="text-sm font-light text-zinc-400 leading-relaxed">
            An unhandled runtime exception was caught. You can attempt to re-render the layout without losing your current session.
          </p>
        </div>

        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider text-black bg-teal-400 hover:bg-teal-300 transition-all hover:scale-105 cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>RETRY SYSTEM</span>
        </button>
      </div>
    </main>
  );
}
