"use client";
import React, { useEffect, useState } from "react";

export default function Spotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (opacity === 0) setOpacity(0.85);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [opacity]);

  return (
    <div
      style={{
        background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.06), rgba(13, 148, 136, 0.04), transparent 80%)`,
        opacity: opacity,
      }}
      className="fixed inset-0 pointer-events-none z-35 transition-opacity duration-1000"
    />
  );
}
