"use client";
import React from "react";
import { motion } from "framer-motion";
import { Award, Calendar, GraduationCap, Briefcase } from "lucide-react";

const experienceData = [
  {
    type: "work",
    role: "Software Development Track Participant",
    company: "Flipkart GRID 6.0 (National Hackathon)",
    period: "Aug 2024 – Sep 2024",
    icon: <Briefcase className="w-5 h-5 text-teal-400" />,
    points: [
      "Collaborated in a national-level software engineering competition to solve real-world technical challenges under strict timelines.",
      "Applied data structures, algorithms, and analytical thinking to design scalable and efficient software solutions.",
      "Worked within structured development workflows emphasizing clean implementation, performance optimization, and effective problem solving."
    ]
  },
  {
    type: "education",
    role: "Integrated M.Tech in Computer Science Engineering",
    company: "VIT-AP University, Amaravati",
    period: "2022 – Present",
    icon: <GraduationCap className="w-5 h-5 text-indigo-400" />,
    points: [
      "Pursuing M.Tech in CSE with a current CGPA of 8.73, focusing on AI/ML, data preprocessing, and modular backend systems.",
      "Developed research projects like the AI Personalized Drug Response framework and MERN News Aggregator.",
      "Mastered core concepts: Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, and Software Development Lifecycle."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen w-full py-28 px-4 sm:px-6 md:px-12 bg-zinc-950 flex items-center justify-center relative">
      
      {/* Background decoration */}
      <div className="absolute top-[30%] left-[10%] w-72 h-72 rounded-full bg-teal-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl w-full flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-2 text-teal-400 font-mono text-xs tracking-[0.2em] uppercase">
            <Award className="w-4 h-4" />
            <span>04 / TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white text-center md:text-left">
            EXPERIENCE & EDUCATION
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full mt-1" />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-zinc-800 ml-4 sm:ml-6 flex flex-col gap-12 py-2">
          
          {experienceData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="relative pl-8 sm:pl-10 group"
            >
              {/* Timeline dot node */}
              <div className="absolute left-[-16px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full border border-zinc-800 bg-zinc-950 z-10 group-hover:border-teal-400 group-hover:shadow-[0_0_15px_rgba(45,212,191,0.3)] transition-all duration-300">
                {item.icon}
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-xl border border-zinc-800/80 bg-zinc-900/10 backdrop-blur-sm hover:border-zinc-700/80 hover:bg-zinc-900/20 transition-all">
                
                {/* Meta details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-sm font-mono text-zinc-400 mt-0.5">
                      {item.company}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono border border-zinc-800 bg-zinc-900/40 px-3 py-1 rounded-full w-fit">
                    <Calendar className="w-3.5 h-3.5 text-teal-500" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Point details */}
                <ul className="flex flex-col gap-3 font-light text-zinc-400 text-sm sm:text-base leading-relaxed">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex gap-2.5 items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400/80 mt-2 flex-shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
          
        </div>

      </div>
    </section>
  );
}
