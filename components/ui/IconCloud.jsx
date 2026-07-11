"use client";
import React, { useEffect, useRef, useState } from "react";

const skills = [
  { name: "Python", color: "#3776AB" },
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#339933" },
  { name: "Express.js", color: "#828282" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Java", color: "#007396" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "HTML5", color: "#E34F26" },
  { name: "CSS3", color: "#1572B6" },
  { name: "Git", color: "#F05032" },
  { name: "GitHub", color: "#FFFFFF" },
  { name: "VS Code", color: "#007ACC" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Machine Learning", color: "#FF6F00" },
  { name: "Random Forest", color: "#4CAF50" },
  { name: "Data Collection", color: "#00BCD4" },
  { name: "Data Cleaning", color: "#009688" },
  { name: "RESTful APIs", color: "#E91E63" },
  { name: "NoSQL", color: "#9C27B0" },
  { name: "Data Analytics", color: "#3F51B5" }
];

export default function IconCloud() {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const animationFrameRef = useRef(null);

  // 3D coordinates for each item
  const pointsRef = useRef([]);

  useEffect(() => {
    // Generate initial coordinates on a sphere
    const count = skills.length;
    const tempPoints = [];
    
    for (let i = 0; i < count; i++) {
      // Fibonacci sphere distribution
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      
      tempPoints.push({
        x: Math.cos(theta) * Math.sin(phi),
        y: Math.sin(theta) * Math.sin(phi),
        z: Math.cos(phi),
        label: skills[i].name,
        color: skills[i].color
      });
    }
    
    pointsRef.current = tempPoints;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    
    // Set high-DPI scaling
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Initial speeds
    let speedX = 0.003;
    let speedY = 0.003;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.4;
      
      // Determine rotation speeds based on mouse position relative to canvas center
      let targetSpeedX = 0.002;
      let targetSpeedY = 0.002;

      if (isHovering) {
        // Adjust speed based on mouse distance from center
        targetSpeedX = (mousePos.y - centerY) * 0.00005;
        targetSpeedY = (mousePos.x - centerX) * 0.00005;
      }

      // Smooth out speed changes
      speedX += (targetSpeedX - speedX) * 0.1;
      speedY += (targetSpeedY - speedY) * 0.1;

      // Trigonometry values for rotation
      const cosX = Math.cos(speedX);
      const sinX = Math.sin(speedX);
      const cosY = Math.cos(speedY);
      const sinY = Math.sin(speedY);

      // Draw points with 3D projection
      pointsRef.current = pointsRef.current.map((pt) => {
        // Rotate around Y axis
        let x1 = pt.x * cosY - pt.z * sinY;
        let z1 = pt.x * sinY + pt.z * cosY;

        // Rotate around X axis
        let y2 = pt.y * cosX - z1 * sinX;
        let z2 = pt.y * sinX + z1 * cosX;

        // 3D Perspective scale
        // z range is [-1, 1], map to perspective depth [0.5, 1.5]
        const depth = 1.8;
        const scale = depth / (depth + z2);
        
        const canvasX = centerX + x1 * radius * scale;
        const canvasY = centerY + y2 * radius * scale;

        // Calculate visual properties based on depth
        const opacity = Math.max(0.15, Math.min(1, scale - 0.3));
        const fontSize = Math.max(10, Math.min(18, 14 * scale));

        // Draw the tech badge
        ctx.save();
        ctx.globalAlpha = opacity;
        
        // Background Pill/Badge for each item
        ctx.font = `600 ${fontSize}px system-ui, -apple-system, sans-serif`;
        const textWidth = ctx.measureText(pt.label).width;
        const paddingY = 5 * scale;
        const badgeH = fontSize + paddingY * 2;
        const r = badgeH / 2;
        const badgeW = textWidth + 22 * scale + r * 2;

        // Draw capsule background
        ctx.fillStyle = "rgba(24, 24, 27, 0.75)";
        ctx.strokeStyle = pt.color;
        ctx.lineWidth = 1.2 * scale;
        
        ctx.beginPath();
        const rx = canvasX - badgeW / 2;
        const ry = canvasY - badgeH / 2;
        ctx.roundRect(rx, ry, badgeW, badgeH, r);
        ctx.fill();
        ctx.stroke();

        // Draw dot indicator
        ctx.beginPath();
        ctx.arc(rx + r + 6 * scale, canvasY, 3.2 * scale, 0, Math.PI * 2);
        ctx.fillStyle = pt.color;
        ctx.fill();

        // Draw text label
        ctx.fillStyle = "#fafafa";
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillText(pt.label, rx + r + 14 * scale, canvasY);

        ctx.restore();

        return {
          x: x1,
          y: y2,
          z: z2,
          label: pt.label,
          color: pt.color
        };
      });

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePos, isHovering]);

  const handleMouseMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div className="relative w-full aspect-square max-w-[480px] mx-auto flex items-center justify-center">
      {/* Background ambient glow inside cloud */}
      <div className="absolute inset-0 rounded-full bg-radial from-indigo-500/10 via-transparent to-transparent blur-3xl pointer-events-none -z-10" />
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        style={{ touchAction: "none" }}
      />
    </div>
  );
}
