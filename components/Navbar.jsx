"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 flex justify-center px-4 sm:px-6 py-4`}>
        <motion.div
          initial={{ y: -80, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 18,
            delay: 0.8
          }}
          className={`flex items-center justify-between w-full max-w-4xl px-4 sm:px-6 py-3 rounded-full border transition-all duration-500 ${scrolled
              ? "bg-zinc-950/80 border-zinc-800/80 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "bg-transparent border-transparent"
            }`}
        >
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 font-mono text-base font-bold tracking-tight text-white hover:opacity-80 transition-opacity"
          >
            <Terminal className="w-5 h-5 text-teal-500 animate-pulse" />
            <span>RASSEL.CONNECT</span>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="relative px-4 py-2 text-sm font-medium tracking-wide transition-colors cursor-pointer text-zinc-400 hover:text-white"
              >
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-zinc-900 rounded-full border border-zinc-800 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={activeSection === item.id ? "text-teal-400 font-semibold" : ""}>
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          {/* Connect Button */}
          <button
            onClick={() => handleNavClick("contact")}
            className="hidden md:flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-black bg-teal-400 hover:bg-teal-300 transition-all hover:scale-105"
          >
            CONNECT
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-38 md:hidden bg-zinc-950/98 backdrop-blur-lg flex flex-col justify-center px-8"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-2xl font-bold tracking-wider ${activeSection === item.id ? "text-teal-400" : "text-zinc-500"
                    } hover:text-white transition-colors`}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
            <div className="absolute bottom-12 left-0 right-0 text-center text-xs tracking-widest font-mono text-zinc-600">
              RASSEL A SADAT &bull; PORTFOLIO
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
