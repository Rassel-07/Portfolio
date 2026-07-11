"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, Phone, MapPin, CheckCircle, Terminal } from "lucide-react";
import ShineBorder from "./ui/ShineBorder";

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

const Linkedin = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/razelsadat@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `New Portfolio Message from ${formState.name}`
        })
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormState({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try emailing directly to razelsadat@gmail.com");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try emailing directly to razelsadat@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact" className="min-h-screen w-full pt-28 pb-12 px-4 sm:px-6 md:px-12 bg-zinc-950 flex items-center justify-center relative">

      {/* Background radial highlight */}
      <div className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-indigo-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl w-full flex flex-col gap-10">

        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-2 text-teal-400 font-mono text-xs tracking-[0.2em] uppercase">
            <Mail className="w-4 h-4" />
            <span>05 / INQUIRIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white text-center md:text-left">
            GET IN TOUCH
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full mt-1" />
        </div>

        {/* Form and Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Left Side: Contact Information & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Let's talk data!
              </h3>
              <p className="text-sm font-light text-zinc-400 leading-relaxed max-w-sm">
                Curious? Let's connect and chat about AI, Data & Technologies!
              </p>
            </div>

            {/* Info Cards */}
            <div className="flex flex-col gap-4 font-mono text-xs text-zinc-400">
              <a
                href="mailto:razelsadat@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:border-zinc-800 hover:text-white transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-teal-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <span>razelsadat@gmail.com</span>
              </a>

              <a
                href="tel:+918330033024"
                className="flex items-center gap-4 p-4 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:border-zinc-800 hover:text-white transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-teal-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 8330033024</span>
              </a>


              <div className="flex items-center gap-4 p-4 rounded-xl border border-zinc-900 bg-zinc-950/40">
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-teal-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Thrissur, Kerala, India</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://linkedin.com/in/rassel-a-sadat"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-zinc-800 bg-zinc-900/30 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all hover:scale-105"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Rassel-07"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-zinc-800 bg-zinc-900/30 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all hover:scale-105"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Side: Form */}
          <ShineBorder
            className="lg:col-span-7 flex flex-col justify-center min-h-[380px]"
            innerClassName="p-6 sm:p-8 flex flex-col justify-center h-full w-full relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 text-sm"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="p-3 rounded-lg border border-zinc-800 bg-zinc-950/50 text-white placeholder-zinc-600 focus:outline-none focus:border-teal-500 transition-colors font-light"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@example.com"
                        className="p-3 rounded-lg border border-zinc-800 bg-zinc-950/50 text-white placeholder-zinc-600 focus:outline-none focus:border-teal-500 transition-colors font-light"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Your Message</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hey Rassel, I would like to discuss..."
                      className="p-3 rounded-lg border border-zinc-800 bg-zinc-950/50 text-white placeholder-zinc-600 focus:outline-none focus:border-teal-500 transition-colors font-light resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 w-full sm:w-fit px-8 py-3 rounded-full text-xs font-bold tracking-widest text-black bg-teal-400 hover:bg-teal-300 disabled:bg-zinc-800 disabled:text-zinc-600 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-zinc-600 border-t-black rounded-full animate-spin" />
                        <span>PROCESSING...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>SEND A MESSAGE</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center text-center gap-5 p-4"
                >
                  <div className="p-4 rounded-full bg-teal-950 border border-teal-500/30 text-teal-400 mb-2">
                    <CheckCircle className="w-12 h-12 animate-pulse" />
                  </div>
                  <h4 className="font-bold text-2xl text-white tracking-tight">Transmission Complete</h4>
                  <p className="text-zinc-400 font-light max-w-xs leading-relaxed text-sm">
                    Thank you! Your message was structured successfully. I will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-2.5 rounded-full border border-zinc-800 bg-zinc-900/40 text-xs font-mono tracking-wider hover:text-white hover:border-zinc-700 transition-all cursor-pointer"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </ShineBorder>
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-center border-t border-zinc-900 pt-6 mt-2 font-mono text-[10px] text-zinc-650 tracking-wider w-full text-center">
          <span>&copy; {new Date().getFullYear()} RASSEL A SADAT. ALL RIGHTS RESERVED.</span>
        </div>
      </div>
    </section>
  );
}
