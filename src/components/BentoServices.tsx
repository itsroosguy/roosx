import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../data/agencyData';
import { Sparkles, Palette, Layers, Cpu, ArrowRight, Zap } from 'lucide-react';

interface BentoServicesProps {
  onOpenInquiry: () => void;
  isDarkMode?: boolean;
}

export const BentoServices: React.FC<BentoServicesProps> = ({ onOpenInquiry, isDarkMode = true }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#FF7A1A]" />;
      case 'Palette': return <Palette className="w-5 h-5 text-[#FF7A1A]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#FF7A1A]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#FF7A1A]" />;
      default: return <Zap className="w-5 h-5 text-[#FF7A1A]" />;
    }
  };

  return (
    <section id="services" className={`py-24 sm:py-32 relative z-10 transition-colors duration-500 ${
      isDarkMode ? 'bg-[#0A0A0C] text-white' : 'bg-[#FAF9F6] text-[#111111]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7A1A]/10 border border-[#FF7A1A]/30 text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" /> STRATEGIC CORE CAPABILITIES
          </div>
          
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08]">
            Engineered for <span className="bg-gradient-to-r from-[#FF7A1A] via-[#FFA665] to-amber-500 bg-clip-text text-transparent">Business Transformation</span>
          </h2>
          
          <p className={`text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto ${
            isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            We do not sell tasks or design hours. We engineer high-authority brand architectures, digital revenue engines, and automated AI infrastructure designed for enterprise valuation scale.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-3xl p-8 border flex flex-col justify-between relative overflow-hidden group transition-all duration-500 hover:scale-[1.02] shadow-xl ${
                service.colSpan || 'col-span-1'
              } ${
                isDarkMode
                  ? 'bg-[#121215] border-zinc-800/90 hover:border-[#FF7A1A]/60 shadow-black/60'
                  : 'bg-white border-zinc-200 hover:border-[#FF7A1A]/60 shadow-zinc-200'
              }`}
            >
              {/* Card Ambient Glow Corner */}
              <div className="absolute -top-12 -right-12 w-44 h-44 bg-[#FF7A1A]/10 rounded-full blur-3xl group-hover:bg-[#FF7A1A]/20 transition-colors pointer-events-none" />

              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#18181C] border border-zinc-800 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    {getIcon(service.iconName)}
                  </div>

                  {service.badge && (
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-[#FF7A1A]/15 text-[#FF7A1A] border border-[#FF7A1A]/30">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className={`font-display text-2xl font-black transition-colors ${
                  isDarkMode ? 'text-white group-hover:text-[#FF7A1A]' : 'text-[#111111] group-hover:text-[#FF7A1A]'
                }`}>
                  {service.title}
                </h3>
                <p className="text-xs font-mono font-semibold text-[#FF7A1A] mt-1.5 uppercase tracking-wider">
                  {service.subtitle}
                </p>

                <p className={`mt-4 text-sm leading-relaxed font-medium ${
                  isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
                }`}>
                  {service.description}
                </p>
              </div>

              {/* Tags & Action Link */}
              <div className="mt-8 pt-6 border-t border-zinc-800/60 flex items-center justify-between flex-wrap gap-4">
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold ${
                        isDarkMode ? 'bg-[#18181C] text-zinc-300 border border-zinc-800' : 'bg-zinc-100 text-zinc-700 border border-zinc-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={onOpenInquiry}
                  className="text-xs font-bold text-[#FF7A1A] hover:text-[#FFA665] flex items-center gap-1.5 transition-colors cursor-pointer group/btn"
                >
                  <span>Initiate Engagement</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
