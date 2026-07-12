"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { User, Download, GraduationCap, MapPin, Globe } from "lucide-react";

const personalTraits = [
  "Data Intelligence",
  "Analytical Thinking",
  "Rapid Self-Learner",
  "Problem Solver",
  "Detail Oriented",
  "Structured Data Workflows"
];

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full py-28 px-4 sm:px-6 md:px-12 bg-zinc-950 flex items-center justify-center relative">
      <div className="max-w-6xl w-full flex flex-col gap-16">

        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-2 text-teal-400 font-mono text-xs tracking-[0.2em] uppercase">
            <User className="w-4 h-4" />
            <span>01 / PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white text-center md:text-left">
            ABOUT ME
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full mt-1" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

          {/* Left Side: Photo Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-5 flex justify-center md:justify-start relative group"
          >
            {/* Ambient Background Glow behind profile pic */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-indigo-500/20 rounded-2xl blur-2xl opacity-40 group-hover:opacity-75 transition-opacity pointer-events-none" />

            {/* Wrapper to hold absolute corners and relative photo card */}
            <div className="relative w-72 h-[350px] sm:w-80 sm:h-[390px]">
              {/* The Photo Container */}
              <div className="w-full h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-2.5 backdrop-blur-sm">
                <div className="relative w-full h-full rounded-xl overflow-hidden md:grayscale md:group-hover:grayscale-0 transition-all duration-700">
                  <Image
                    src="/images/profile.png"
                    alt="Rassel A Sadat"
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>
              </div>

              {/* Accent floating border corners relative to card wrapper */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-teal-500 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-indigo-500 pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Side: Text Information */}
          <div className="md:col-span-7 flex flex-col gap-6 text-zinc-300">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Hi, I'm Rassel A Sadat
              </h3>
              <p className="text-base sm:text-lg leading-relaxed font-light text-zinc-400">
                I am a curious and detail-oriented Computer Science post graduate student with a strong focus on Data Intelligence, Artificial Intelligence, and data-driven problem solving. I enjoy collecting, organizing, and transforming raw information into structured data that powers intelligent applications.
              </p>
              <p className="text-base leading-relaxed font-light text-zinc-400">
                My technical journey involves building robust backends with Node.js and Express, configuring RESTful APIs, working with MongoDB, and designing machine learning models using Python. I take pride in building structured, modular architectures that are both efficient and easy to scale.
              </p>
            </motion.div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-b border-zinc-800/80 py-6 my-2 text-sm font-mono text-zinc-400">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <span>M.Tech CSE @ VIT-AP (CGPA: 8.73)</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <span>Thrissur, Kerala, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <span>Malayalam, English, Hindi</span>
              </div>
            </div>

            {/* Hobbies Badges */}
            <div className="flex flex-wrap gap-2.5">
              {personalTraits.map((trait, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider border border-zinc-800 bg-zinc-900/30 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all cursor-default"
                >
                  {trait}
                </span>
              ))}
            </div>

            {/* Download Button */}
            <div className="mt-4">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold tracking-wider text-black bg-white hover:bg-zinc-200 transition-all hover:scale-105"
              >
                <Download className="w-4 h-4" />
                DOWNLOAD RESUME PDF
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
