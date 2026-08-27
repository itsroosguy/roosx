import React from 'react';
import { motion } from 'framer-motion';

interface HeroMarqueeProps {
  isDarkMode?: boolean;
}

export const HeroMarquee: React.FC<HeroMarqueeProps> = ({ isDarkMode }) => {
  const marqueeItems = [
    'FOUNDER-LED STRATEGIC EXECUTION',
    'GLOBAL MARKET EXPOSURE (UAE • CANADA • APAC)',
    '7+ YEARS STRATEGIC CONSULTING',
    'CREATIVE INTELLIGENCE STUDIO',
    'HIGH-CONVERSION DIGITAL SYSTEMS',
    'STRATEGY + DESIGN + AI INFRASTRUCTURE',
    'DIRECT FOUNDER ADVISORY',
  ];

  // Duplicate items to ensure seamless infinite looping
  const doubleItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div
      id="trust-bar"
      className={`w-full py-4 border-y overflow-hidden relative z-20 transition-colors duration-500 ${
        isDarkMode
          ? 'bg-[#08080A] border-[#27272A]/80 text-white'
          : 'bg-[#111111] border-[#111111] text-white'
      }`}
    >
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          className="flex items-center gap-10 sm:gap-14"
          animate={{ x: ['0%', '-33.333%'] }}
          transition={{
            duration: 28,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {doubleItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-10 sm:gap-14 shrink-0">
              <span
                className={`font-display text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#D97706] bg-clip-text text-transparent filter drop-shadow-[0_0_10px_rgba(251,191,36,0.35)]`}
              >
                {item}
              </span>
              <span className="text-[#FBBF24] font-bold text-xs opacity-80">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
