"use client";
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Code, Database, Settings } from "lucide-react";
import IconCloud from "./ui/IconCloud";

const skillCategories = [
  {
    title: "Programming",
    icon: <Code className="w-5 h-5 text-teal-400" />,
    skills: ["Python", "Java", "JavaScript", "HTML5 & CSS3"]
  },
  {
    title: "Data & AI",
    icon: <Cpu className="w-5 h-5 text-indigo-400" />,
    skills: [
      "Data Preprocessing",
      "Data Collection & Cleaning",
      "Machine Learning",
      "Random Forest Models",
      "Model Evaluation (ROC-AUC)"
    ]
  },
  {
    title: "Backend & Web",
    icon: <Settings className="w-5 h-5 text-cyan-400" />,
    skills: [
      "Node.js & Express.js",
      "RESTful API Design",
      "React (Vite)",
      "Modular Architecture"
    ]
  },
  {
    title: "Databases & Tools",
    icon: <Database className="w-5 h-5 text-purple-400" />,
    skills: ["MongoDB (NoSQL)", "Git & GitHub", "VS Code", "Figma"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen w-full py-28 px-4 sm:px-6 md:px-12 bg-zinc-950 flex items-center justify-center relative">
      
      {/* Background visual element */}
      <div className="absolute top-[20%] right-[10%] w-72 h-72 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl w-full flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-2 text-teal-400 font-mono text-xs tracking-[0.2em] uppercase">
            <Cpu className="w-4 h-4" />
            <span>02 / EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white text-center md:text-left">
            SKILLS & TOOLKIT
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full mt-1" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Categorized skill lists */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/20 backdrop-blur-sm hover:border-zinc-700/80 hover:bg-zinc-900/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-lg text-white group-hover:text-teal-400 transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <ul className="flex flex-col gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="text-sm text-zinc-400 font-light border-l border-zinc-800 pl-3.5 hover:border-teal-500 hover:text-white transition-all cursor-default"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Right Column: 3D Canvas Cloud */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <IconCloud />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
