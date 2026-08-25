import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Sparkles } from 'lucide-react';
import { AlphaRoosButton } from './AlphaRoosButton';

interface ProcessSectionProps {
  onOpenInquiry?: () => void;
  isDarkMode?: boolean;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  onOpenInquiry,
  isDarkMode = false,
}) => {
  return (
    <section
      id="process"
      className={`relative py-24 sm:py-32 transition-colors duration-500 overflow-hidden ${
        isDarkMode ? 'bg-[#0A0A0A] text-white' : 'bg-[#FAF9F6] text-[#111111]'
      }`}
    >
      {/* Subtle Background Architectural Mesh */}
      <div
        className={`absolute inset-0 bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none ${
          isDarkMode
            ? 'bg-[linear-gradient(to_right,#27272A20_1px,transparent_1px),linear-gradient(to_bottom,#27272A20_1px,transparent_1px)]'
            : 'bg-[linear-gradient(to_right,#E4E4E760_1px,transparent_1px),linear-gradient(to_bottom,#E4E4E760_1px,transparent_1px)]'
        }`}
      />

      {/* Ambient Orange Glow Spotlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[950px] h-[500px] bg-radial from-[#F97316]/12 via-[#F97316]/4 to-transparent blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* EDITORIAL HEADER BLOCK (NO BOXES) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto mb-20 sm:mb-28 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F97316]/10 border border-[#F97316]/30 text-xs font-mono font-bold text-[#F97316] uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" />
            <span>High-Velocity Execution Engine</span>
          </div>

          <h2
            className={`font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[1.08] ${
              isDarkMode ? 'text-silver-gradient' : 'text-[#111111]'
            }`}
          >
            <span className="block">How We Step In & Get You</span>
            <span className="bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#EA580C] bg-clip-text text-transparent inline-block pb-2 pt-1">
              To The Goal — Fast.
            </span>
          </h2>

          <p
            className={`text-base sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto transition-colors duration-500 ${
              isDarkMode ? 'text-[#D4D4D8]' : 'text-[#52525B]'
            }`}
          >
            No bloated 3-month agency timelines or PPT slides. We plug in within 24 hours and execute with extreme speed.
          </p>
        </motion.div>

        {/* PINTEREST EDITORIAL ORGANIC DYNAMIC CANVAS ARTWORK */}
        <div className="relative max-w-6xl mx-auto py-6 text-left">
          
          {/* FLOWING DYNAMIC SVG WINDING VECTOR LINE */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none hidden md:block">
            <svg
              className="w-full h-full max-w-4xl overflow-visible"
              viewBox="0 0 1000 600"
              fill="none"
            >
              <path
                d="M 150,120 C 450,40 550,280 850,160 C 950,220 850,480 500,450 C 250,420 150,520 850,500"
                stroke="#F97316"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className="opacity-60"
              />
            </svg>
          </div>

          {/* 4 ORGANICALLY STAGGERED EDITORIAL NODES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 relative">
            
            {/* NODE 01: TOP LEFT (ORGANIC POSITIONING) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start space-y-4 md:pr-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F97316] to-[#EA580C] text-white flex items-center justify-center font-display text-2xl font-black shadow-lg shadow-[#F97316]/30 border-2 border-[#FDBA74]/50 shrink-0">
                  01
                </div>
                <div>
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#F97316]/10 text-[#F97316] border border-[#F97316]/30 uppercase tracking-wider block w-max mb-1">
                    DAY 01 • RAPID ENTRY
                  </span>
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Instant Traction
                  </div>
                </div>
              </div>

              <div>
                <h3 className={`font-display text-2xl sm:text-3xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-[#111111]'}`}>
                  We Step In Within 24 Hours
                </h3>
                <p className={`text-sm leading-relaxed mt-2 ${isDarkMode ? 'text-[#D4D4D8]' : 'text-[#52525B]'}`}>
                  No 3-month onboarding delay. Within 24 hours of connecting, we dive straight into your site & messaging to locate exact lost revenue points.
                </p>
              </div>

              {/* Floating Organic Callout Note */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F97316]/10 border border-[#F97316]/40 text-xs font-semibold text-[#F97316] rotate-[-2deg] shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>"30-min call • Zero fluff • Immediate clarity"</span>
              </div>
            </motion.div>

            {/* NODE 02: TOP RIGHT (STAGGERED DOWN) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col items-start space-y-4 md:pl-6 md:mt-12 lg:mt-16"
            >
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F97316] to-[#EA580C] text-white flex items-center justify-center font-display text-2xl font-black shadow-lg shadow-[#F97316]/30 border-2 border-[#FDBA74]/50 shrink-0">
                  02
                </div>
                <div>
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#F97316]/10 text-[#F97316] border border-[#F97316]/30 uppercase tracking-wider block w-max mb-1">
                    DAYS 02–05 • POSITIONING
                  </span>
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Positioned To Win
                  </div>
                </div>
              </div>

              <div>
                <h3 className={`font-display text-2xl sm:text-3xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-[#111111]'}`}>
                  Define What Makes You Unbeatable
                </h3>
                <p className={`text-sm leading-relaxed mt-2 ${isDarkMode ? 'text-[#D4D4D8]' : 'text-[#52525B]'}`}>
                  We craft sharp conversion messaging so potential buyers get your unique value in under 3 seconds and trust your brand immediately.
                </p>
              </div>

              {/* Floating Organic Callout Note */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F97316]/10 border border-[#F97316]/40 text-xs font-semibold text-[#F97316] rotate-[2deg] shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>"All decisions explained, no black boxes x"</span>
              </div>
            </motion.div>

            {/* NODE 03: BOTTOM LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-start space-y-4 md:pr-6 md:mt-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F97316] to-[#EA580C] text-white flex items-center justify-center font-display text-2xl font-black shadow-lg shadow-[#F97316]/30 border-2 border-[#FDBA74]/50 shrink-0">
                  03
                </div>
                <div>
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#F97316]/10 text-[#F97316] border border-[#F97316]/30 uppercase tracking-wider block w-max mb-1">
                    DAYS 06–15 • BUILD SPRINT
                  </span>
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    99+ Speed Performance
                  </div>
                </div>
              </div>

              <div>
                <h3 className={`font-display text-2xl sm:text-3xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-[#111111]'}`}>
                  Production Without The Friction
                </h3>
                <p className={`text-sm leading-relaxed mt-2 ${isDarkMode ? 'text-[#D4D4D8]' : 'text-[#52525B]'}`}>
                  Custom, ultra-fast interfaces built in parallel. Up to 2 rounds of rapid collaborative edits ensure absolute perfection.
                </p>
              </div>

              {/* Floating Organic Callout Note */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F97316]/10 border border-[#F97316]/40 text-xs font-semibold text-[#F97316] rotate-[-1deg] shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>"Up to 2 rounds of rapid collaborative edits"</span>
              </div>
            </motion.div>

            {/* NODE 04: BOTTOM RIGHT (STAGGERED DOWN) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col items-start space-y-4 md:pl-6 md:mt-16 lg:mt-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F97316] to-[#EA580C] text-white flex items-center justify-center font-display text-2xl font-black shadow-lg shadow-[#F97316]/30 border-2 border-[#FDBA74]/50 shrink-0">
                  04
                </div>
                <div>
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider block w-max mb-1">
                    DAY 16+ • LAUNCH & SCALE
                  </span>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#22C55E]">
                    +3X Growth Multiplier
                  </div>
                </div>
              </div>

              <div>
                <h3 className={`font-display text-2xl sm:text-3xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-[#111111]'}`}>
                  Go Live & Multiply Revenue
                </h3>
                <p className={`text-sm leading-relaxed mt-2 ${isDarkMode ? 'text-[#D4D4D8]' : 'text-[#52525B]'}`}>
                  Zero-downtime deployment with active conversion telemetry, analytics tracking, and continuous revenue tuning.
                </p>
              </div>

              {/* Floating Organic Callout Note */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-xs font-semibold text-emerald-400 rotate-[1.5deg] shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>"Turn visitors into long-term revenue"</span>
              </div>
            </motion.div>

          </div>
        </div>

        {/* BOTTOM CTA AUDIT TRIGGER (NO PPT BOX) */}
        {onOpenInquiry && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 sm:mt-28 flex flex-col items-center justify-center text-center space-y-4"
          >
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#F97316]">
              READY TO ACCELERATE YOUR LAUNCH?
            </div>
            <AlphaRoosButton
              text="Get Your Free Audit"
              onClick={onOpenInquiry}
              isDarkMode={isDarkMode}
            />
          </motion.div>
        )}

      </div>
    </section>
  );
};
