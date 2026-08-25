import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const InteractiveGlobe: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position values for 3D tilt reaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth physics springs
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [18, -18]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-25, 25]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate normalized mouse coordinates (-0.5 to 0.5)
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Major global hubs
  const globalHubs = [
    { name: 'Tokyo', cx: 330, cy: 150, delay: 0 },
    { name: 'New York', cx: 160, cy: 140, delay: 0.5 },
    { name: 'London', cx: 220, cy: 110, delay: 1.0 },
    { name: 'Singapore', cx: 310, cy: 200, delay: 1.5 },
    { name: 'Dubai', cx: 260, cy: 160, delay: 2.0 },
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto perspective-1000 cursor-grab active:cursor-grabbing"
    >
      {/* 3D Reacting Motion Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-full relative flex items-center justify-center"
      >
        {/* Outer Glow Halo */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-400/20 via-sky-400/15 to-purple-600/20 blur-2xl pointer-events-none" />

        {/* Round Globe SVG */}
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full drop-shadow-xl overflow-visible"
        >
          <defs>
            {/* Globe Sphere Gradient */}
            <radialGradient id="globeGrad" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#F1F5F9" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#E2E8F0" stopOpacity="0.6" />
            </radialGradient>

            {/* Atmosphere Glow */}
            <radialGradient id="atmoGlow" cx="50%" cy="50%" r="50%">
              <stop offset="70%" stopColor="#7C3AED" stopOpacity="0" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.25" />
            </radialGradient>
          </defs>

          {/* Main Round Sphere Base */}
          <circle
            cx="200"
            cy="200"
            r="160"
            fill="url(#globeGrad)"
            stroke="#CBD5E1"
            strokeWidth="1.5"
          />

          {/* Latitude Lines */}
          <ellipse cx="200" cy="200" rx="160" ry="40" fill="none" stroke="#94A3B8" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
          <ellipse cx="200" cy="200" rx="160" ry="90" fill="none" stroke="#94A3B8" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
          <ellipse cx="200" cy="200" rx="160" ry="135" fill="none" stroke="#94A3B8" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />

          {/* Longitude Lines */}
          <ellipse cx="200" cy="200" rx="40" ry="160" fill="none" stroke="#94A3B8" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
          <ellipse cx="200" cy="200" rx="90" ry="160" fill="none" stroke="#94A3B8" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
          <ellipse cx="200" cy="200" rx="135" ry="160" fill="none" stroke="#94A3B8" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />

          {/* Animated Orbital Outer Rings */}
          <motion.circle
            cx="200"
            cy="200"
            r="175"
            fill="none"
            stroke="url(#globeGrad)"
            strokeWidth="1.5"
            strokeDasharray="20 40 10 30"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          />

          <motion.circle
            cx="200"
            cy="200"
            r="190"
            fill="none"
            stroke="#7C3AED"
            strokeWidth="1"
            strokeOpacity="0.3"
            strokeDasharray="15 50"
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          />

          {/* Simplified Continents Dot-Matrix Simulation */}
          <g fill="#0F172A" opacity="0.75">
            {/* North America */}
            <circle cx="140" cy="130" r="3" /><circle cx="150" cy="120" r="4" />
            <circle cx="160" cy="135" r="3.5" /><circle cx="130" cy="145" r="3" />
            <circle cx="170" cy="140" r="4" /><circle cx="150" cy="150" r="3.5" />

            {/* South America */}
            <circle cx="180" cy="210" r="3.5" /><circle cx="190" cy="230" r="4" />
            <circle cx="195" cy="250" r="3" /><circle cx="185" cy="270" r="2.5" />

            {/* Europe & Africa */}
            <circle cx="210" cy="115" r="3.5" /><circle cx="225" cy="120" r="4" />
            <circle cx="220" cy="160" r="4" /><circle cx="230" cy="180" r="4.5" />
            <circle cx="235" cy="205" r="4" /><circle cx="225" cy="225" r="3.5" />

            {/* Asia & Australia */}
            <circle cx="270" cy="125" r="4" /><circle cx="290" cy="130" r="4.5" />
            <circle cx="310" cy="140" r="4" /><circle cx="330" cy="150" r="3.5" />
            <circle cx="300" cy="170" r="3" /><circle cx="320" cy="240" r="4" />
            <circle cx="335" cy="255" r="3.5" />
          </g>

          {/* Glowing Beacon Nodes */}
          {globalHubs.map((hub, idx) => (
            <g key={idx}>
              {/* Pulsing Beacon Ring */}
              <motion.circle
                cx={hub.cx}
                cy={hub.cy}
                r="10"
                fill="none"
                stroke="#7C3AED"
                strokeWidth="1.5"
                initial={{ scale: 0.5, opacity: 1 }}
                animate={{ scale: [0.5, 2.2, 0.5], opacity: [1, 0, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: hub.delay,
                  ease: 'easeInOut',
                }}
              />
              {/* Inner Solid Node */}
              <circle cx={hub.cx} cy={hub.cy} r="4" fill="#7C3AED" />
              <circle cx={hub.cx} cy={hub.cy} r="2" fill="#FFFFFF" />
            </g>
          ))}
        </svg>

        {/* Center Brand Badge Floating Badge */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-2 bg-slate-900/90 backdrop-blur-md border border-slate-700/60 px-3.5 py-1.5 rounded-full text-white text-[11px] font-bold tracking-wider uppercase shadow-xl flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Global Network Ready</span>
        </motion.div>
      </motion.div>
    </div>
  );
};
