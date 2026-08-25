import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../data/agencyData';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from 'lucide-react';

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
    <section id="testimonials" className="py-24 relative z-10 bg-slate-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-amber-300 text-xs font-semibold text-amber-800 mb-4 bg-white">
            <MessageSquare className="w-3.5 h-3.5" /> Client Trust & Endorsements
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900">
            What Founders <span className="text-gradient-gold">Say About AURA</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 sm:p-14 rounded-3xl border border-slate-200/80 relative overflow-hidden shadow-xl bg-white">
            <Quote className="absolute top-6 right-6 w-24 h-24 text-slate-100 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Star Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-500" />
                  ))}
                  <span className="ml-2 text-xs font-mono text-slate-600 px-2.5 py-0.5 rounded bg-slate-100 border border-slate-200">
                    {current.projectTag}
                  </span>
                </div>

                {/* Quote Text */}
                <blockquote className="text-xl sm:text-2xl font-medium text-slate-900 leading-relaxed font-sans italic">
                  "{current.content}"
                </blockquote>

                {/* Client Bio */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <img
                    src={current.avatar}
                    alt={current.clientName}
                    className="w-14 h-14 rounded-full object-cover border-2 border-purple-500 shadow-md"
                  />
                  <div>
                    <div className="font-display font-bold text-lg text-slate-900">
                      {current.clientName}
                    </div>
                    <div className="text-xs text-slate-600">
                      {current.clientRole} • <span className="text-purple-700 font-semibold">{current.company}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="mt-8 flex items-center justify-between pt-6 border-t border-slate-100">
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? 'w-8 bg-purple-600' : 'w-2 bg-slate-200'
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-xl glass-card border border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-xl glass-card border border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
                  aria-label="Next testimonial"
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
