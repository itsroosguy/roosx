import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../data/agencyData';
import { CheckCircle2, Cpu, ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  onOpenInquiry?: () => void;
  isDarkMode?: boolean;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenInquiry, isDarkMode = true }) => {
  return (
    <section id="process" className={`py-24 sm:py-32 relative z-10 transition-colors duration-500 ${
      isDarkMode ? 'bg-[#050505] text-white' : 'bg-white text-[#111111]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7A1A]/10 border border-[#FF7A1A]/30 text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5" /> THE STRATEGIC OPERATING SYSTEM
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08]">
            The Roos <span className="bg-gradient-to-r from-[#FF7A1A] via-[#FFA665] to-amber-500 bg-clip-text text-transparent">Growth OS</span>
          </h2>

          <p className={`text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto ${
            isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            We do not follow rigid project checklists. We execute a disciplined 4-phase operating system engineered to reduce market risk, optimize conversion velocity, and drive enterprise scale.
          </p>
        </div>

        {/* 4-Phase Operating System Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className={`rounded-3xl p-8 border flex flex-col justify-between relative overflow-hidden transition-all duration-500 hover:scale-[1.02] shadow-xl ${
                isDarkMode
                  ? 'bg-[#0E0E12] border-zinc-800/90 hover:border-[#FF7A1A]/60 shadow-black/70'
                  : 'bg-zinc-50 border-zinc-200 hover:border-[#FF7A1A]/60 shadow-zinc-200'
              }`}
            >
              {/* Top Phase Badge */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-3xl font-black text-[#FF7A1A] opacity-90">
                    {step.number}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#FF7A1A]/10 text-[#FF7A1A] border border-[#FF7A1A]/20">
                    {step.duration}
                  </span>
                </div>

                <h3 className={`font-display text-xl font-bold mb-3 ${
                  isDarkMode ? 'text-white' : 'text-[#111111]'
                }`}>
                  {step.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed font-medium mb-6 ${
                  isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
                }`}>
                  {step.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="pt-6 border-t border-zinc-800/60 space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FF7A1A] block mb-3">
                  SYSTEM DELIVERABLES
                </span>
                {step.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-medium text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A1A] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom OS Action CTA */}
        {onOpenInquiry && (
          <div className="mt-16 text-center">
            <button
              onClick={onOpenInquiry}
              className="px-8 py-4 rounded-full bg-[#FF7A1A] hover:bg-[#EA580C] text-white text-xs font-mono font-bold uppercase tracking-widest transition-all shadow-lg shadow-[#FF7A1A]/25 cursor-pointer inline-flex items-center gap-2"
            >
              <span>Audit Your Digital Growth Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
