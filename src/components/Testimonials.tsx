import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../data/agencyData';
import { ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 sm:py-32 relative z-10 bg-[#08080A] text-white overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FF7A1A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7A1A]/10 border border-[#FF7A1A]/30 text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" /> STRATEGIC ENDORSEMENTS
          </div>
          
          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight">
            Curated Executive <span className="bg-gradient-to-r from-[#FF7A1A] via-[#FFA665] to-amber-500 bg-clip-text text-transparent">Recommendations</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-medium max-w-xl mx-auto">
            Authentic endorsements from enterprise partners, product leaders, and global strategy executives across UAE, Canada, and APAC.
          </p>
        </div>

        {/* Editorial Recommendation Card */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl p-8 sm:p-14 border border-zinc-800/90 bg-[#121215]/90 backdrop-blur-2xl relative overflow-hidden shadow-2xl">
            <Quote className="absolute top-6 right-8 w-28 h-28 text-zinc-800/40 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45 }}
                className="space-y-8 relative z-10"
              >
                {/* Project Category Tag */}
                <div className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#FF7A1A]/15 text-[#FF7A1A] border border-[#FF7A1A]/30">
                  {current.projectTag}
                </div>

                {/* Quote Text */}
                <blockquote className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-white leading-relaxed italic">
                  "{current.content}"
                </blockquote>

                {/* Client Profile */}
                <div className="flex items-center gap-4 pt-6 border-t border-zinc-800/80">
                  <img
                    src={current.avatar}
                    alt={current.clientName}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#FF7A1A] shadow-lg shadow-[#FF7A1A]/20"
                  />
                  <div>
                    <div className="font-display font-bold text-lg text-white">
                      {current.clientName}
                    </div>
                    <div className="text-xs text-zinc-400 font-medium">
                      {current.clientRole} • <span className="text-[#FF7A1A] font-semibold">{current.company}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="mt-10 flex items-center justify-between pt-6 border-t border-zinc-800/60">
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? 'w-8 bg-[#FF7A1A]' : 'w-2 bg-zinc-700'
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-xl bg-[#18181C] border border-zinc-800 hover:border-[#FF7A1A] text-zinc-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Previous recommendation"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-xl bg-[#18181C] border border-zinc-800 hover:border-[#FF7A1A] text-zinc-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Next recommendation"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
