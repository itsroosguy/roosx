import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Compass,
  Palette,
  Layout,
  Code2,
  Cpu,
  TrendingUp,
  Boxes,
  Sparkles,
} from 'lucide-react';

export interface EcosystemNode {
  id: string;
  name: string;
  insight: string;
  icon: React.ElementType;
  angle: number; // in degrees
  color: string;
}

const ecosystemNodes: EcosystemNode[] = [
  {
    id: 'strategy',
    name: 'Strategy',
    insight: 'Creates Direction',
    icon: Compass,
    angle: -90, // Top center
    color: '#8B5CF6', // Purple
  },
  {
    id: 'branding',
    name: 'Branding',
    insight: 'Creates Recognition',
    icon: Palette,
    angle: -38.5,
    color: '#EC4899', // Pink
  },
  {
    id: 'uiux',
    name: 'UI/UX Design',
    insight: 'Improves Experience',
    icon: Layout,
    angle: 12.8,
    color: '#3B82F6', // Electric Blue
  },
  {
    id: 'dev',
    name: 'Development',
    insight: 'Builds Platforms',
    icon: Code2,
    angle: 64.2,
    color: '#10B981', // Emerald
  },
  {
    id: 'ai',
    name: 'AI & Automation',
    insight: 'Automates Operations',
    icon: Cpu,
    angle: 115.7,
    color: '#6366F1', // Indigo
  },
  {
    id: 'marketing',
    name: 'Marketing',
    insight: 'Generates Demand',
    icon: TrendingUp,
    angle: 167.1,
    color: '#F59E0B', // Amber
  },
  {
    id: 'consulting',
    name: 'Consulting',
    insight: 'Accelerates Growth',
    icon: Boxes,
    angle: 218.5,
    color: '#06B6D4', // Cyan
  },
];

export const HeroEcosystemAnimation: React.FC = () => {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Parallax values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-16, 16]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHoveredNodeId(null);
  };

  // Center coordinate in SVG viewBox (500x500)
  const cx = 250;
  const cy = 250;
  const radius = 170; // Orbit radius

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[560px] h-[480px] sm:h-[540px] mx-auto flex items-center justify-center cursor-default perspective-1000 my-4"
    >
      {/* Dynamic 3D Parallax Motion Layer */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-full relative flex items-center justify-center"
      >
        {/* Soft Ambient Background Aura Glow */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.35, 0.6, 0.35],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-8 rounded-full bg-gradient-to-tr from-purple-300/30 via-sky-300/25 to-indigo-300/30 blur-3xl pointer-events-none"
        />

        {/* SVG Network Lines & Pulsing Particles */}
        <svg
          viewBox="0 0 500 500"
          className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
        >
          <defs>
            {/* Pulsing Gradient definition */}
            <linearGradient id="activeLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>

            <radialGradient id="centerHaloGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Concentric Subtle Orbit Rings */}
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke="#CBD5E1"
            strokeWidth="1"
            strokeDasharray="4 6"
            className="opacity-50"
          />
          <circle
            cx={cx}
            cy={cy}
            r={radius * 0.55}
            fill="none"
            stroke="#E2E8F0"
            strokeWidth="1"
            strokeDasharray="2 4"
            className="opacity-40"
          />

          {/* Connection Lines from Center to each Satellite Node */}
          {ecosystemNodes.map((node, i) => {
            const rad = (node.angle * Math.PI) / 180;
            const nx = cx + radius * Math.cos(rad);
            const ny = cy + radius * Math.sin(rad);

            const isHovered = hoveredNodeId === node.id;
            const isAnyHovered = hoveredNodeId !== null;

            return (
              <g key={node.id}>
                {/* SVG Connection Line */}
                <line
                  x1={cx}
                  y1={cy}
                  x2={nx}
                  y2={ny}
                  stroke={isHovered ? 'url(#activeLineGrad)' : '#CBD5E1'}
                  strokeWidth={isHovered ? '2.5' : '1.5'}
                  strokeOpacity={isHovered ? '1' : isAnyHovered ? '0.2' : '0.55'}
                  className="transition-all duration-300"
                />

                {/* Traveling Energy Pulse Particle */}
                <motion.circle
                  r={isHovered ? '3.5' : '2'}
                  fill={isHovered ? '#8B5CF6' : '#3B82F6'}
                  initial={{ cx, cy }}
                  animate={{
                    cx: [cx, nx],
                    cy: [cy, ny],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: isHovered ? 1.5 : 3.5,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: 'easeInOut',
                  }}
                />
              </g>
            );
          })}
        </svg>

        {/* Central Roos StudioX Ecosystem Core Node */}
        <motion.div
          animate={{
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative z-30 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-2xl shadow-purple-600/15 flex flex-col items-center justify-center p-3 group cursor-pointer"
        >
          {/* Pulsing Core Halo Ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-sky-500/20 animate-ping opacity-30 pointer-events-none" />

          <img
            src="/mark.png"
            alt="Roos StudioX Ecosystem Core"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
            style={{ filter: 'brightness(0)' }}
          />
          <span className="text-[9px] font-extrabold tracking-widest text-slate-800 uppercase mt-1">
            ROOS SYSTEM
          </span>
        </motion.div>

        {/* 7 Orbiting Capability Nodes */}
        {ecosystemNodes.map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          // Position relative to center (in percentage offsets)
          const leftPercent = 50 + (radius / 2.5) * Math.cos(rad);
          const topPercent = 50 + (radius / 2.5) * Math.sin(rad);

          const isHovered = hoveredNodeId === node.id;
          const NodeIcon = node.icon;

          return (
            <motion.div
              key={node.id}
              style={{
                left: `${leftPercent}%`,
                top: `${topPercent}%`,
                transform: 'translate(-50%, -50%)',
              }}
              onMouseEnter={() => setHoveredNodeId(node.id)}
              onMouseLeave={() => setHoveredNodeId(null)}
              animate={{
                scale: isHovered ? 1.15 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="absolute z-30"
            >
              <div className="relative group cursor-pointer">
                {/* Node Pill Icon Button */}
                <div
                  className={`px-3 py-2 sm:px-3.5 sm:py-2 rounded-2xl flex items-center gap-2 transition-all duration-300 border shadow-md ${
                    isHovered
                      ? 'bg-slate-900 text-white border-purple-500/40 shadow-purple-600/20 shadow-lg scale-105'
                      : 'bg-white/90 backdrop-blur-md text-slate-800 border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-xl flex items-center justify-center text-xs ${
                      isHovered ? 'bg-purple-600 text-white' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    <NodeIcon className="w-3.5 h-3.5" />
                  </div>

                  <span className="text-xs font-bold tracking-tight whitespace-nowrap">
                    {node.name}
                  </span>
                </div>

                {/* Hover Micro Insight Badge */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-40 bg-slate-900 text-white px-3 py-1.5 rounded-xl text-[10px] font-semibold whitespace-nowrap shadow-xl border border-slate-700/80 flex items-center gap-1.5 pointer-events-none"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>{node.insight}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}

        {/* Global Connection Badge at Bottom */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1 bg-white/90 backdrop-blur-md border border-slate-200/80 px-4 py-1.5 rounded-full text-slate-800 text-[11px] font-bold tracking-wider uppercase shadow-md flex items-center gap-2 z-30"
        >
          <Sparkles className="w-3.5 h-3.5 text-purple-600" />
          <span>Unified Growth Ecosystem</span>
        </motion.div>
      </motion.div>
    </div>
  );
};
