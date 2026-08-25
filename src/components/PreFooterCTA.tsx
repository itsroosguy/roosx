import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

interface PreFooterCTAProps {
  onOpenInquiry: () => void;
  isDarkMode?: boolean;
}

export const PreFooterCTA: React.FC<PreFooterCTAProps> = ({
  onOpenInquiry,
  isDarkMode = true,
}) => {
  return (
    <section
      className={`relative py-20 sm:py-28 transition-colors duration-500 overflow-hidden ${
        isDarkMode ? 'bg-[#050505] text-white' : 'bg-[#FAF9F6] text-[#111111]'
      }`}
    >
      {/* Background Architectural Mesh */}
      <div
        className={`absolute inset-0 bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none ${
          isDarkMode
            ? 'bg-[linear-gradient(to_right,#27272A25_1px,transparent_1px),linear-gradient(to_bottom,#27272A25_1px,transparent_1px)]'
            : 'bg-[linear-gradient(to_right,#E4E4E780_1px,transparent_1px),linear-gradient(to_bottom,#E4E4E780_1px,transparent_1px)]'
        }`}
      />

      {/* Radiant Backdrop Radial Spotlight */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[550px] bg-radial from-[#FF7A1A]/18 via-[#FF7A1A]/4 to-transparent blur-[160px] pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SIDE-BY-SIDE LAYOUT: LEFT-ALIGNED 2-LINE TITLE (LEFT 7 COLS) | RIGHT CTA BUTTONS (RIGHT 5 COLS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT 7 COLS: LEFT-ALIGNED MASSIVE 2-LINE HEADLINE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 text-left space-y-2"
          >
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08]">
              <span
                className={
                  isDarkMode
                    ? 'bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent block pb-1'
                    : 'text-[#111111] block pb-1'
                }
              >
                Starting a new project or
              </span>
              <span className="bg-gradient-to-r from-[#FF7A1A] via-[#FF944D] to-[#EA580C] bg-clip-text text-transparent block pt-1">
                want to collaborate with us?
              </span>
            </h2>
          </motion.div>

          {/* RIGHT 4 COLS: BUTTONS & CTA BOX ON RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch lg:items-end justify-center gap-4"
          >
            {/* PRIMARY BOOK DEMO BUTTON */}
            <button
              onClick={onOpenInquiry}
              className="w-full sm:w-auto lg:w-full px-8 py-4.5 rounded-2xl bg-[#FF7A1A] text-white font-mono font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#FF8833] transition-all shadow-[0_12px_35px_rgba(255,122,26,0.4)] cursor-pointer flex items-center justify-center gap-3 group"
            >
              <Calendar className="w-4 h-4 text-white shrink-0" />
              <span>Book A Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* SECONDARY FREE AUDIT BUTTON */}
            <button
              onClick={onOpenInquiry}
              className={`w-full sm:w-auto lg:w-full px-8 py-4.5 rounded-2xl font-mono font-bold text-xs sm:text-sm uppercase tracking-wider transition-all border flex items-center justify-center gap-2.5 cursor-pointer ${
                isDarkMode
                  ? 'bg-[#121215] text-zinc-200 border-zinc-800 hover:border-[#FF7A1A] hover:text-white shadow-lg'
                  : 'bg-white text-[#111111] border-zinc-300 hover:border-[#FF7A1A] hover:bg-zinc-50 shadow-sm'
              }`}
            >
              <span>Get Your Free Audit</span>
              <ArrowRight className="w-4 h-4 text-[#FF7A1A]" />
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
