import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../data/agencyData';
import { Sparkles, Palette, Layers, Cpu, ArrowRight, Zap } from 'lucide-react';

interface BentoServicesProps {
  onOpenInquiry: () => void;
}

export const BentoServices: React.FC<BentoServicesProps> = ({ onOpenInquiry }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-purple-600" />;
      case 'Palette': return <Palette className="w-6 h-6 text-sky-600" />;
      case 'Layers': return <Layers className="w-6 h-6 text-pink-600" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-emerald-600" />;
      default: return <Zap className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <section id="services" className="py-24 relative z-10 bg-slate-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-sky-200 text-xs font-semibold text-sky-700 mb-4 bg-white">
            <Zap className="w-3.5 h-3.5" /> Core Capabilities
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900">
            End-to-End <span className="text-gradient">Digital Mastery</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            From preliminary visual strategy to production React deployment and 3D motion, we build digital products engineered for long-term category leadership.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card glass-card-hover rounded-3xl p-8 border border-slate-200/80 flex flex-col justify-between relative overflow-hidden group bg-white ${service.colSpan || 'col-span-1'}`}
            >
              {/* Card Ambient Glow Corner */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-purple-100 rounded-full blur-2xl group-hover:bg-purple-200 transition-colors" />

              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl glass-card border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform bg-slate-50">
                    {getIcon(service.iconName)}
                  </div>

                  {service.badge && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 border border-purple-200">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-display text-2xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-purple-700 mt-1">
                  {service.subtitle}
                </p>

                <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Tags & Action Link */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={onOpenInquiry}
                  className="text-xs font-semibold text-slate-900 hover:text-purple-700 flex items-center gap-1 group/btn"
                >
                  <span>Commission Service</span>
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
