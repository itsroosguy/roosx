import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

interface PreFooterCTAProps {
  onOpenInquiry: () => void;
  isDarkMode?: boolean;
}

export const PreFooterCTA: React.FC<PreFooterCTAProps> = ({
  onOpenInquiry,
  isDarkMode = true,
}) => {
  const [emailInput, setEmailInput] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        onOpenInquiry();
        setIsSubmitted(false);
      }, 800);
    } else {
      onOpenInquiry();
    }
  };

  return (
    <section
      className={`relative py-24 sm:py-36 transition-colors duration-500 overflow-hidden ${
        isDarkMode ? 'bg-[#050505] text-white' : 'bg-[#FAF9F6] text-[#111111]'
      }`}
    >
      {/* Background Architectural Mesh */}
      <div
        className={`absolute inset-0 bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none ${
          isDarkMode
            ? 'bg-[linear-gradient(to_right,#27272A20_1px,transparent_1px),linear-gradient(to_bottom,#27272A20_1px,transparent_1px)]'
            : 'bg-[linear-gradient(to_right,#E4E4E780_1px,transparent_1px),linear-gradient(to_bottom,#E4E4E780_1px,transparent_1px)]'
        }`}
      />

      {/* Ambient Orange Backlight Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[550px] bg-radial from-[#FF7A1A]/18 via-[#FF7A1A]/3 to-transparent blur-[160px] pointer-events-none opacity-80" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ROUNDED BANNER CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`rounded-[36px] p-8 sm:p-16 md:p-20 relative overflow-hidden backdrop-blur-2xl transition-colors duration-500 text-center shadow-2xl border ${
            isDarkMode
              ? 'bg-[#0A0A0C]/95 border-zinc-800/90 text-white shadow-black/80 ring-1 ring-zinc-800/50'
              : 'bg-white border-zinc-200 text-[#111111] shadow-xl'
          }`}
        >
          
          {/* CENTER COLUMN CONTENT */}
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7A1A]/10 border border-[#FF7A1A]/30 text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> STRATEGIC PARTNERSHIP ENGAGEMENT
            </div>

            {/* CENTER HEADLINE */}
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08]">
              <span
                className={
                  isDarkMode
                    ? 'bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent block pb-1'
                    : 'text-[#111111] block pb-1'
                }
              >
                Ready to Build Unrivaled
              </span>
              <span className="bg-gradient-to-r from-[#FF7A1A] via-[#FFA665] to-amber-500 bg-clip-text text-transparent inline-block">
                Digital Momentum?
              </span>
            </h2>

            {/* SUBHEAD DESCRIPTION */}
            <p className={`text-sm sm:text-base md:text-lg font-medium max-w-xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              Partner directly with Alpha Roos to audit your digital growth architecture, elevate your brand authority, and build high-conversion digital infrastructure.
            </p>

            {/* ACTION BUTTON & DISPATCH FORM */}
            <form
              onSubmit={handleSubmit}
              className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto"
            >
              <div className="relative w-full sm:w-auto flex-1">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your work email for growth audit..."
                  className={`w-full px-6 py-4 rounded-full text-xs sm:text-sm font-medium transition-all outline-none border ${
                    isDarkMode
                      ? 'bg-[#121215] text-white border-zinc-800 focus:border-[#FF7A1A] placeholder:text-zinc-500'
                      : 'bg-zinc-100 text-[#111111] border-zinc-300 focus:border-[#FF7A1A] placeholder:text-zinc-400'
                  }`}
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FF7A1A] text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#EA580C] transition-all shadow-[0_10px_30px_rgba(255,122,26,0.35)] cursor-pointer flex items-center justify-center gap-2 shrink-0 group"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>Connecting...</span>
                  </>
                ) : (
                  <>
                    <span>Schedule Strategic Session</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* TRUST SIGNALS */}
            <div className="pt-4 flex items-center justify-center gap-6 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF7A1A]" />
                Founder-Led Advisory
              </span>
              <span className="hidden sm:inline text-zinc-600">•</span>
              <span className="hidden sm:flex items-center gap-1.5">
                Direct Confidentiality Guarantee
              </span>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
