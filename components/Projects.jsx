"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ArrowRight, ExternalLink, X, ShieldAlert, Newspaper, Cpu, CheckCircle } from "lucide-react";
import BorderBeam from "./ui/BorderBeam";

const Github = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


const projectsData = [
  {
    id: "digital-twin",
    title: "AI-Powered Digital Twin Framework",
    subtitle: "Personalized Drug Response Simulation",
    category: "AI / Machine Learning",
    period: "2025",
    logo: <Cpu className="w-8 h-8 text-teal-400" />,
    shortDesc: "A machine learning digital twin framework simulating patient-specific clinical drug efficacy using Random Forest models, achieving an ROC-AUC of 0.96.",
    techs: ["Python", "Random Forest", "Data Processing", "Pandas", "Scikit-Learn", "Model Evaluation"],
    stats: { name: "ROC-AUC Score", value: "0.96" },
    github: "https://github.com/Rassel-07",
    architecture: `Clinical Data Preprocessing ➔ Feature Engineering ➔ Random Forest Regressor/Classifier ➔ ROC-AUC Evaluation ➔ Visualized Response Insights`,
    highlights: [
      "Designed and trained Random Forest models to predict specific patient clinical drug tolerances.",
      "Conducted extensive data collection, cleaning, and preprocessing of raw multi-dimensional medical parameters.",
      "Achieved a verified ROC-AUC of 0.96, validating high predictive model accuracy.",
      "Engineered clean pipelines for feature selection and data normalization to reduce training bias."
    ]
  },
  {
    id: "news-aggregator",
    title: "News Aggregator Platform",
    subtitle: "Real-time Multi-source RSS Content Delivery",
    category: "Full-Stack Web Dev",
    period: "2024",
    logo: <Newspaper className="w-8 h-8 text-indigo-400" />,
    shortDesc: "A robust MERN stack application collecting, filtering, categorizing, and delivering news feeds from multiple sources in real time using RESTful APIs.",
    techs: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Data Sanitization"],
    stats: { name: "API Response", value: "<150ms" },
    github: "https://github.com/Rassel-07",
    architecture: `External APIs ➔ Node/Express RSS Ingestion ➔ Sanitization & MongoDB Storage ➔ Express Controllers ➔ React Dashboard UI`,
    highlights: [
      "Developed secure backend API services to ingest, validate, and sanitize incoming raw RSS feeds.",
      "Implemented intelligent server-side search algorithms and data categorizations.",
      "Designed a responsive React client utilizing optimized state management and API pagination.",
      "Engineered indexing schemas in MongoDB to optimize queries and support rapid document retrievals."
    ]
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="min-h-screen w-full py-28 px-4 sm:px-6 md:px-12 bg-zinc-950 flex items-center justify-center relative">
      {/* Background gradients */}
      <div className="absolute bottom-[10%] left-[5%] w-80 h-80 rounded-full bg-teal-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl w-full flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-2 text-teal-400 font-mono text-xs tracking-[0.2em] uppercase">
            <Briefcase className="w-4 h-4" />
            <span>03 / PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white text-center md:text-left">
            FEATURED PROJECTS
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full mt-1" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className="relative p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-zinc-900/10 backdrop-blur-sm hover:border-transparent transition-all group cursor-pointer overflow-hidden flex flex-col justify-between min-h-[380px]"
            >
              {/* Magic UI Border Beam Component */}
              <BorderBeam colorFrom="#0d9488" colorTo="#6366f1" />

              <div>
                {/* Header info */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-850">
                    {project.logo}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest bg-zinc-900 border border-zinc-800 text-zinc-400 px-3 py-1 rounded-full uppercase">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-zinc-500 mb-4">{project.subtitle}</p>

                {/* Description */}
                <p className="text-sm font-light text-zinc-400 leading-relaxed mb-6">
                  {project.shortDesc}
                </p>
              </div>

              <div>
                {/* Metrics */}
                <div className="flex items-center justify-between border-t border-zinc-900 pt-5 mb-5">
                  <span className="text-xs text-zinc-500 font-mono">{project.stats.name}</span>
                  <span className="text-sm font-bold text-teal-400 font-mono">{project.stats.value}</span>
                </div>

                {/* Hover Indicator */}
                <div className="flex items-center justify-between text-xs font-bold font-mono tracking-widest text-zinc-400 group-hover:text-white transition-colors">
                  <span>EXPLORE TECHNICAL DETAILS</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl z-10"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-zinc-900 border-b border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800">
                    {selectedProject.logo}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white leading-tight">{selectedProject.title}</h3>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">{selectedProject.category} &bull; {selectedProject.period}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 overflow-y-auto max-h-[70vh] flex flex-col gap-6 text-sm text-zinc-400 font-light">
                
                {/* Overview */}
                <div className="flex flex-col gap-2">
                  <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Overview</h4>
                  <p className="leading-relaxed text-zinc-300">
                    {selectedProject.shortDesc}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-col gap-2.5">
                  <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Technologies & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techs.map((tech, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Architecture Pipeline */}
                <div className="flex flex-col gap-2 bg-zinc-900/40 p-4 rounded-xl border border-zinc-850">
                  <h4 className="font-mono text-xs text-teal-400 uppercase tracking-widest font-semibold">Modular System Flow</h4>
                  <div className="font-mono text-[11px] leading-relaxed text-zinc-300 mt-1 whitespace-pre-wrap">
                    {selectedProject.architecture}
                  </div>
                </div>

                {/* Features / Bullet Points */}
                <div className="flex flex-col gap-3">
                  <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Key Engineering Implementation</h4>
                  <ul className="flex flex-col gap-2.5">
                    {selectedProject.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed text-zinc-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 py-4 bg-zinc-900 border-t border-zinc-800 flex items-center justify-end gap-3">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider text-white border border-zinc-700 hover:border-zinc-500 bg-zinc-950 transition-all hover:scale-105"
                >
                  <Github className="w-4 h-4" />
                  GITHUB REPO
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
