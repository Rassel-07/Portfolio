"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Spotlight from "@/components/ui/Spotlight";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import LoadingSkeleton from "@/components/ui/LoadingSkeleton";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to guarantee the premium layout loader displays on fast connections
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen bg-zinc-950 text-white w-full overflow-hidden">
      <AnimatePresence mode="wait">
        {loading && <LoadingSkeleton />}
      </AnimatePresence>

      <CustomCursor />
      <Spotlight />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
