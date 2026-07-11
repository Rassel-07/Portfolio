"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { stiffness: 350, damping: 28 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      const isClickable = 
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest(".cursor-pointer") ||
        target.classList.contains("cursor-pointer");

      setIsHovered(!!isClickable);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer trailing circle */}
      <motion.div
        className="fixed left-0 top-0 w-8 h-8 rounded-full border border-teal-400 pointer-events-none z-50 hidden md:block"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          scale: isHovered ? 1.4 : 1,
          backgroundColor: isHovered ? "rgba(45, 212, 191, 0.15)" : "rgba(45, 212, 191, 0)",
          borderColor: isHovered ? "#38bdf8" : "#2dd4bf",
          boxShadow: isHovered ? "0 0 15px rgba(56, 189, 248, 0.4)" : "none",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 25 }}
      />
      {/* Inner precise dot */}
      <motion.div
        className="fixed left-0 top-0 w-1.5 h-1.5 bg-teal-400 rounded-full pointer-events-none z-50 hidden md:block"
        style={{
          // Follow cursor instantly without spring lag
          x: cursorX,
          y: cursorY,
          // Offset position to center dot inside outer ring (ring is 32x32, dot is 6x6, so offset by 13px)
          translateX: 13,
          translateY: 13,
          scale: isHovered ? 0.5 : 1,
        }}
      />
    </>
  );
}
