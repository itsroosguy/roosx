import React from 'react';
import { motion } from 'framer-motion';

interface HeroMarqueeProps {
  isDarkMode?: boolean;
}

export const HeroMarquee: React.FC<HeroMarqueeProps> = ({ isDarkMode }) => {
  const marqueeItems = [
    'Digital Transformation',
    'Growth Infrastructure',
    'Creative Intelligence Studio',
    'Digital Experiences',
    'Websites & Platforms',
    'AI Automation',
    'Brand Systems',
  ];

  // Duplicate items twice to ensure seamless infinite looping
  const doubleItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div
      className={`w-full py-4 border-y overflow-hidden relative z-20 shadow-lg transition-colors duration-500 ${
        isDarkMode
          ? 'bg-[#0A0A0A] border-[#27272A] text-white'
          : 'bg-[#111111] border-[#111111] text-white'
      }`}
    >
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          className="flex items-center gap-8 sm:gap-12"
          animate={{ x: ['0%', '-33.333%'] }}
          transition={{
            duration: 25,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {doubleItems.map((item, idx) => (
            <span
              key={idx}
              className={`font-display text-sm sm:text-base font-semibold tracking-wider uppercase shrink-0 px-4 sm:px-6 ${
                isDarkMode ? 'text-[#FDBA74]' : 'text-white'
              }`}
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
