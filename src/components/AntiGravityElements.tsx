import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  TrendingUp,
  Target,
  Megaphone,
  Workflow,
} from 'lucide-react';

interface AntiGravityElementsProps {
  isDarkMode?: boolean;
}

export const AntiGravityElements: React.FC<AntiGravityElementsProps> = ({
  isDarkMode = true,
}) => {
  const [pointerOffset, setPointerOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth - 0.5) * 20;
      const normY = (e.clientY / window.innerHeight - 0.5) * 20;
      setPointerOffset({ x: normX, y: normY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-30 overflow-visible">
      
      {/* 1. TOP-LEFT OUTER PERIMETER: SMALL 3D BROWSER WINDOW WIREFRAME ("Website Development") */}
      <motion.div
        animate={{
          y: [-6, 6, -6],
          rotate: [-1.5, 1.5, -1.5],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          transform: `translate3d(${pointerOffset.x * 0.5}px, ${pointerOffset.y * 0.5}px, 0)`,
        }}
        className="absolute -top-10 -left-6 sm:-top-12 sm:-left-10 hidden sm:flex"
      >
        <div
          className={`flex items-center gap-2.5 px-3 py-1.5 rounded-2xl border backdrop-blur-xl transition-all duration-500 shadow-2xl ${
            isDarkMode
              ? 'bg-[#141417]/85 border-[#27272A] text-white shadow-black/60 ring-1 ring-white/5'
              : 'bg-white/90 border-[#E4E4E7] text-[#111111] shadow-black/10'
          }`}
        >
          {/* Mini 3D Browser Wireframe Header */}
          <div className="flex items-center gap-1 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]/80" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]/80" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]/80" />
          </div>
          <div className="w-px h-3 bg-[#27272A]" />
          <Globe className="w-3.5 h-3.5 text-[#F97316]" />
          <span className="text-[11px] font-semibold tracking-tight">Website Development</span>
        </div>
      </motion.div>

      {/* 2. TOP-RIGHT OUTER PERIMETER: SLEEK ASCENDING REVENUE GRAPH ("+3X Growth") */}
      <motion.div
        animate={{
          y: [6, -6, 6],
          rotate: [1.5, -1.5, 1.5],
        }}
        transition={{
          duration: 6.2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.8,
        }}
        style={{
          transform: `translate3d(${pointerOffset.x * -0.6}px, ${pointerOffset.y * -0.6}px, 0)`,
        }}
        className="absolute -top-8 right-2 sm:-top-10 sm:right-4"
      >
        <div
          className={`flex items-center gap-2 px-3 py-1.5 rounded-2xl border backdrop-blur-xl transition-all duration-500 shadow-2xl ${
            isDarkMode
              ? 'bg-[#141417]/85 border-[#27272A] text-white shadow-black/60 ring-1 ring-white/5'
              : 'bg-white/90 border-[#E4E4E7] text-[#111111] shadow-black/10'
          }`}
        >
          {/* Ascending Sparkline Curve */}
          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-[#22C55E]" />
            <span className="text-[11px] font-bold font-mono text-[#22C55E] bg-[#22C55E]/10 px-1.5 py-0.5 rounded-md border border-[#22C55E]/20">
              +3X Growth
            </span>
          </div>
        </div>
      </motion.div>

      {/* 3. FAR-LEFT MID PERIMETER: TARGET ICON WITH THIN ORBIT RING ("Brand Positioning") */}
      <motion.div
        animate={{
          y: [5, -5, 5],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 5.8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.4,
        }}
        style={{
          transform: `translate3d(${pointerOffset.x * 0.4}px, ${pointerOffset.y * 0.4}px, 0)`,
        }}
        className="absolute top-1/3 -left-8 sm:-left-14 hidden md:flex"
      >
        <div
          className={`flex items-center gap-2 px-3 py-1.5 rounded-2xl border backdrop-blur-xl transition-all duration-500 shadow-2xl relative ${
            isDarkMode
              ? 'bg-[#141417]/85 border-[#27272A] text-white shadow-black/60 ring-1 ring-white/5'
              : 'bg-white/90 border-[#E4E4E7] text-[#111111] shadow-black/10'
          }`}
        >
          {/* Thin Glowing Orbit Ring around Icon */}
          <div className="relative flex items-center justify-center">
            <span className="absolute -inset-1 rounded-full border border-[#F97316]/30 animate-ping opacity-30" />
            <Target className="w-3.5 h-3.5 text-[#F97316]" />
          </div>
          <span className="text-[11px] font-semibold tracking-tight">Brand Positioning</span>
        </div>
      </motion.div>

      {/* 4. BOTTOM-LEFT OUTER PERIMETER: MINIMAL MEGAPHONE ICON ("Digital Marketing") */}
      <motion.div
        animate={{
          y: [-7, 7, -7],
          rotate: [1.5, -1.5, 1.5],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2.1,
        }}
        style={{
          transform: `translate3d(${pointerOffset.x * 0.5}px, ${pointerOffset.y * 0.5}px, 0)`,
        }}
        className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8"
      >
        <div
          className={`flex items-center gap-2 px-3 py-1.5 rounded-2xl border backdrop-blur-xl transition-all duration-500 shadow-2xl ${
            isDarkMode
              ? 'bg-[#141417]/85 border-[#27272A] text-white shadow-black/60 ring-1 ring-white/5'
              : 'bg-white/90 border-[#E4E4E7] text-[#111111] shadow-black/10'
          }`}
        >
          <Megaphone className="w-3.5 h-3.5 text-[#F97316]" />
          <span className="text-[11px] font-semibold tracking-tight">Digital Marketing</span>
        </div>
      </motion.div>

      {/* 5. BOTTOM-RIGHT OUTER PERIMETER: AUTOMATION WORKFLOW NODE DIAGRAM */}
      <motion.div
        animate={{
          y: [-5, 5, -5],
          rotate: [-1, 1, -1],
        }}
        transition={{
          duration: 5.2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.8,
        }}
        style={{
          transform: `translate3d(${pointerOffset.x * -0.5}px, ${pointerOffset.y * -0.5}px, 0)`,
        }}
        className="absolute -bottom-6 right-2 sm:-bottom-8 sm:right-6"
      >
        <div
          className={`flex items-center gap-2 px-3 py-1.5 rounded-2xl border backdrop-blur-xl transition-all duration-500 shadow-2xl ${
            isDarkMode
              ? 'bg-[#141417]/85 border-[#27272A] text-white shadow-black/60 ring-1 ring-white/5'
              : 'bg-white/90 border-[#E4E4E7] text-[#111111] shadow-black/10'
          }`}
        >
          {/* Workflow Connected Mini Nodes */}
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
            <span className="w-2.5 h-px bg-[#F97316]/50" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#FB923C]" />
          </div>
          <Workflow className="w-3.5 h-3.5 text-[#F97316] ml-0.5" />
          <span className="text-[10px] font-semibold tracking-tight opacity-90">Workflow Automation</span>
        </div>
      </motion.div>

    </div>
  );
};
