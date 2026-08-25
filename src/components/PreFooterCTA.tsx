import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { AlphaRoosButton } from './AlphaRoosButton';

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
      className={`relative py-16 sm:py-24 transition-colors duration-500 overflow-hidden ${
        isDarkMode ? 'bg-[#0A0A0A] text-white' : 'bg-white text-[#111111]'
      }`}
    >
      {/* Background Architectural Mesh */}
      <div
        className={`absolute inset-0 bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none ${
          isDarkMode
            ? 'bg-[linear-gradient(to_right,#27272A30_1px,transparent_1px),linear-gradient(to_bottom,#27272A30_1px,transparent_1px)]'
            : 'bg-[linear-gradient(to_right,#E4E4E760_1px,transparent_1px),linear-gradient(to_bottom,#E4E4E760_1px,transparent_1px)]'
        }`}
      />

      {/* Radiant Backdrop Radial Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-r from-[#F97316]/20 via-[#FB923C]/10 to-[#FDBA74]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`rounded-3xl p-8 sm:p-14 border shadow-2xl relative overflow-hidden text-center backdrop-blur-2xl transition-colors duration-500 ${
            isDarkMode
              ? 'bg-[#141417]/95 border-[#27272A] text-white shadow-black/80 ring-1 ring-[#27272A]'
              : 'bg-white border-[#E4E4E7] text-[#111111] shadow-black/15'
          }`}
        >
          {/* Top Laser Accent Beam */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#EA580C]" />

          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-[#F97316]/15 text-[#F97316] border border-[#F97316]/30 mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready To Scale Your Brand?</span>
          </div>

          {/* User Requested Impact Narrative */}
          <h2
            className={`font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-snug max-w-4xl mx-auto mb-6 ${
              isDarkMode ? 'text-silver-gradient' : 'text-[#111111]'
            }`}
          >
            Your product, service, or idea may be exceptional—but is it{' '}
            <span className="bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#FDBA74] bg-clip-text text-transparent inline-block">
              reaching the right audience?
            </span>
          </h2>

          <p
            className={`text-base sm:text-xl font-medium leading-relaxed max-w-3xl mx-auto mb-10 ${
              isDarkMode ? 'text-[#CBD5E1]' : 'text-[#52525B]'
            }`}
          >
            We help brands cut through the noise, solve the right problems, and create the impact they deserve.
          </p>

          {/* Book A Demo Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <AlphaRoosButton
              text="BOOK A DEMO"
              onClick={onOpenInquiry}
              isDarkMode={isDarkMode}
              leadingIcon={<Calendar className="w-4 h-4" />}
            />

            <button
              onClick={onOpenInquiry}
              className={`px-7 py-3.5 rounded-2xl text-sm font-bold tracking-wider uppercase transition-all duration-300 border flex items-center gap-2 cursor-pointer ${
                isDarkMode
                  ? 'bg-[#18181B] text-white border-[#27272A] hover:border-[#F97316] hover:bg-[#27272A]'
                  : 'bg-[#F4F4F5] text-[#111111] border-[#E4E4E7] hover:border-[#F97316] hover:bg-white'
              }`}
            >
              <span>Get Your Free Audit</span>
              <ArrowRight className="w-4 h-4 text-[#F97316]" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
