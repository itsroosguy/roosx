import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { AlphaRoosButton } from './AlphaRoosButton';
import { KangarooMascot } from './mascot/KangarooMascot';
import { AntiGravityElements } from './AntiGravityElements';

interface HeroProps {
  onOpenInquiry: () => void;
  isDarkMode?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry, isDarkMode }) => {
  // Staggered motion container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const scrollToNextSection = () => {
    const el = document.getElementById('services');
    if (el) {
      const yOffset = -75;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      className={`relative pt-32 sm:pt-36 pb-0 transition-colors duration-500 overflow-hidden ${
        isDarkMode ? 'bg-[#0A0A0A]' : 'bg-white'
      }`}
    >
      {/* Background Mesh Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className={`absolute inset-0 bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none ${
          isDarkMode
            ? 'bg-[linear-gradient(to_right,#27272A30_1px,transparent_1px),linear-gradient(to_bottom,#27272A30_1px,transparent_1px)]'
            : 'bg-[linear-gradient(to_right,#E4E4E780_1px,transparent_1px),linear-gradient(to_bottom,#E4E4E780_1px,transparent_1px)]'
        }`}
      />

      {/* Floating Animated Brand Glow Orb (Center Backlight) */}
      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.35, 0.65, 0.35],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[500px] rounded-full blur-3xl pointer-events-none z-0 ${
          isDarkMode
            ? 'bg-gradient-to-r from-[#F97316]/30 via-[#FB923C]/20 to-[#FDBA74]/15'
            : 'bg-gradient-to-r from-[#F97316]/15 via-[#FB923C]/10 to-[#FDBA74]/10'
        }`}
      />

      <div className="max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
        
        {/* 1. TOP CENTER: 2-LINE HEADLINE (SILVER TOP LINE & ORANGE BOTTOM LINE) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto space-y-4 flex flex-col items-center mb-1 sm:mb-2"
        >
          <motion.h2
            variants={itemVariants}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] text-center"
          >
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent block pb-1">
              You Bring Ambition.
            </span>
            <span className="bg-gradient-to-r from-[#FF7A1A] via-[#FF944D] to-[#EA580C] bg-clip-text text-transparent inline-block pb-2 pt-1">
              We’ll Build The Win.
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`font-sans text-lg sm:text-xl md:text-2xl text-center max-w-2xl transition-colors duration-500 ${
              isDarkMode ? 'text-[#D4D4D8]' : 'text-[#52525B]'
            }`}
          >
            From brand positioning and custom web development to growth marketing and automation—explore how we turn your vision into market momentum.
          </motion.p>
        </motion.div>

        {/* 2. MIDDLE 2-COLUMN GRID (+15% WIDER SECTION CONTAINER) */}
        <div className="w-full max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center -mt-4 sm:-mt-8 md:-mt-10 relative z-20">
          
          {/* MASCOT IN CENTER/LEFT (5 COLS) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end items-center relative z-20 w-full"
          >
            <div className="relative w-full max-w-[440px] flex items-center justify-center">
              <KangarooMascot />
            </div>
          </motion.div>

          {/* VERTICALLY CENTER-ALIGNED RIGHT COLUMN TEXT, FLOATING PILLS & BUTTON (7 COLS) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start justify-center text-left space-y-4 sm:space-y-5 lg:pl-4 py-4"
          >
            <p
              className={`text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-[645px] text-left transition-colors duration-500 ${
                isDarkMode ? 'text-[#D4D4D8]' : 'text-[#52525B]'
              }`}
            >
              Roos StudioX is an elite design and engineering powerhouse. We craft bespoke digital products, brand identities, and high-conversion web experiences for ambitious founders and market leaders.
            </p>

            {/* FLOATING CAPABILITY PILLS */}
            <div className="flex flex-wrap items-center gap-2 pt-1 pb-1 max-w-[640px]">
              <AntiGravityElements />
            </div>

            {/* ACTION BUTTON */}
            <motion.div variants={buttonVariants} className="pt-2 sm:pt-3">
              <AlphaRoosButton
                text="Start Your Transformation"
                onClick={onOpenInquiry}
                isDarkMode={isDarkMode}
              />
            </motion.div>
          </motion.div>

        </div>

        {/* 3. SCROLL DOWN CHEVRON INDICATOR */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="pt-6 sm:pt-8 pb-4 z-20 flex justify-center"
        >
          <button
            onClick={scrollToNextSection}
            aria-label="Scroll to services"
            className={`p-2.5 rounded-full transition-all duration-300 group cursor-pointer border ${
              isDarkMode
                ? 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-[#F97316] hover:bg-zinc-900'
                : 'bg-zinc-100 border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-[#F97316] hover:bg-zinc-200'
            }`}
          >
            <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-[#F97316]" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
