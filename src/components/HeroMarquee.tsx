import React from 'react';
import { motion } from 'framer-motion';

interface HeroMarqueeProps {
  isDarkMode?: boolean;
}

export const HeroMarquee: React.FC<HeroMarqueeProps> = ({ isDarkMode }) => {
  const trustStatements = [
    'GLOBAL MARKET EXPOSURE (UAE • CANADA • APAC)',
    '7+ YEARS STRATEGIC CONSULTING',
    'FOUNDER-LED EXECUTION MODEL',
    'STRATEGY + DESIGN + AI INFRASTRUCTURE',
    'HIGH-CONVERSION DIGITAL SYSTEMS',
  ];

  const doubleItems = [...trustStatements, ...trustStatements, ...trustStatements];

  return (
    <div
      id="trust-bar"
      className={`w-full py-4 border-y overflow-hidden relative z-20 transition-colors duration-500 ${
        isDarkMode
          ? 'bg-[#08080A] border-[#27272A]/80 text-zinc-300'
          : 'bg-[#111111] border-[#111111] text-zinc-200'
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
                className={`font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase ${
                  isDarkMode ? 'text-zinc-300' : 'text-zinc-200'
                }`}
              >
                {item}
              </span>
              <span className="text-[#FF7A1A] font-bold text-xs">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
