"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, FileText, ArrowDown, Cpu, Sparkles } from "lucide-react";

export default function Hero() {
  const [typedName, setTypedName] = useState("Rassel");

  useEffect(() => {
    const remainingText = " A Sadat";
    let index = 0;
    
    // Wait for loader skeleton to fade before typing starts
    const delayTimer = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (index < remainingText.length) {
          setTypedName("Rassel" + remainingText.substring(0, index + 1));
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 150);
      return () => clearInterval(typingInterval);
    }, 1500);

    return () => clearTimeout(delayTimer);
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-zinc-950 bg-grid-pattern pt-24 pb-16 px-4 sm:px-6 md:px-12"
    >
      {/* Background gradients */}
      <div className="absolute top-[10%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-teal-500/10 blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-[20%] right-[20%] w-[35vw] h-[35vw] rounded-full bg-indigo-500/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">

        {/* Left Side: Typography & Details */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col gap-6 text-left"
        >
          {/* <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-950/30 text-teal-400 text-xs font-mono font-medium tracking-wider w-fit"
          >
            <Sparkles className="w-3.5 h-3.5 animate-spin-gradient-slow" />
            <span>PORTFOLIO 2026</span>
          </motion.div> */}

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none text-white animate-once"
          >
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              {typedName}
            </span>
            <span className="text-teal-400 animate-pulse font-light">|</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-zinc-400 font-light max-w-lg leading-relaxed"
          >
            Computer Science Graduate &bull; AI/ML Developer. Specialize in transforming complex raw datasets into intelligent, structured systems.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-2">
            <button
              onClick={() => handleScrollTo("projects")}
              className="px-6 py-3 rounded-full text-sm font-semibold tracking-wider text-black bg-teal-400 hover:bg-teal-300 transition-all hover:scale-105 shadow-[0_4px_20px_rgba(45,212,191,0.25)] flex items-center gap-2 cursor-pointer"
            >
              <Cpu className="w-4 h-4" />
              EXPLORE PROJECTS
            </button>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-full text-sm font-semibold tracking-wider text-white border border-zinc-700 hover:border-zinc-500 bg-zinc-900/60 backdrop-blur-sm transition-all hover:scale-105 flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-zinc-400" />
              GET RESUME
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Interactive Developer Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 w-full mx-auto max-w-md"
        >
          <div className="w-full rounded-xl border border-zinc-800 bg-zinc-950/70 backdrop-blur-md overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <span className="font-mono text-xs text-zinc-500">terminal &mdash; zsh</span>
              <TerminalIcon className="w-3.5 h-3.5 text-zinc-600" />
            </div>

            {/* Terminal Content */}
            <div className="p-5 font-mono text-xs sm:text-sm text-zinc-300 leading-relaxed flex flex-col gap-3.5">
              <div className="flex items-center gap-2">
                <span className="text-teal-400">&gt;</span>
                <span>npx init rassel --profile</span>
              </div>

              <div className="text-zinc-500 border-l-2 border-zinc-800 pl-3 flex flex-col gap-1.5">
                <div>[1/3] Parsing education credentials...</div>
                <div className="text-teal-400/90">&bull; VIT-AP University [CGPA: 8.73]</div>
                <div>[2/3] Mapping core engineering skills...</div>
                <div className="text-indigo-400/90">&bull; Python, ML, Node.js</div>
                <div>[3/3] Scanning active repositories...</div>
                <div className="text-cyan-400/90">&bull; News Aggregator | AI Digital Twin</div>
              </div>

              <div className="text-emerald-400 font-semibold mt-1">✓ Setup complete! Rassel is ready.</div>

              <div className="flex items-center gap-1.5 mt-2 bg-zinc-900/60 p-2.5 rounded border border-zinc-800/50">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                <span className="text-[11px] text-zinc-400">Available for internship & roles</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Prompt */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity" onClick={() => handleScrollTo("about")}>
        <span className="text-[10px] tracking-[0.25em] font-mono text-zinc-500 uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-teal-400" />
        </motion.div>
      </div>
    </section>
  );
}
