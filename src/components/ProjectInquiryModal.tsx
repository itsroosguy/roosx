import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Send, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { InquiryFormData } from '../types';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState<InquiryFormData>({
    serviceTypes: ['Immersive Web Development'],
    budgetRange: '$15k - $35k',
    timeline: 'Within 1 Month',
    name: '',
    email: '',
    company: '',
    projectDetails: '',
  });

  if (!isOpen) return null;

  const availableServices = [
    'Immersive Web Development',
    'Brand Architecture & Identity',
    '3D Spatial & Motion Design',
    'AI Product UX & Strategy',
    'Full Product Design System',
  ];

  const budgetOptions = [
    '$8,500 - $15,000',
    '$15,000 - $35,000',
    '$35,000 - $75,000',
    '$75,000+',
  ];

  const timelineOptions = [
    'Immediate (Next 2 Weeks)',
    'Within 1 Month',
    'Flexible / Q4 Planning',
  ];

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.serviceTypes.includes(service);
      if (exists) {
        return { ...prev, serviceTypes: prev.serviceTypes.filter((s) => s !== service) };
      } else {
        return { ...prev, serviceTypes: [...prev.serviceTypes, service] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Trigger celebratory confetti effect with Brand Orange & Gold
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F97316', '#FB923C', '#FDBA74'],
      });
    } catch {
      // Fallback silent
    }
  };

  const resetForm = () => {
    setStep(1);
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0A0A0A]/60 backdrop-blur-md"
        />

        {/* Modal Main Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl rounded-3xl border border-[#E4E4E7] dark:border-[#27272A] overflow-hidden z-10 my-auto shadow-2xl bg-white dark:bg-[#18181B] text-[#111111] dark:text-white"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#E4E4E7] dark:border-[#27272A] bg-[#FAFAFA] dark:bg-[#111111]">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#F97316]" />
              <span className="font-display font-bold text-lg text-[#111111] dark:text-white">
                Start Your Project Brief
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#52525B] dark:text-[#D4D4D8] hover:text-[#111111] dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8">
            {!submitted ? (
              <div>
                {/* Step Indicators */}
                <div className="flex items-center justify-between mb-8">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-display text-xs font-bold transition-colors ${
                          step >= s
                            ? 'bg-[#F97316] text-white shadow-md'
                            : 'bg-[#F4F4F5] dark:bg-[#27272A] text-[#52525B] dark:text-[#D4D4D8] border border-[#E4E4E7] dark:border-[#27272A]'
                        }`}
                      >
                        {s}
                      </div>
                      <span className="text-xs text-[#52525B] dark:text-[#D4D4D8] hidden sm:inline font-medium">
                        {s === 1 ? 'Services' : s === 2 ? 'Budget & Timeline' : 'Contact Details'}
                      </span>
                      {s < 3 && <div className="w-12 h-[1px] bg-[#E4E4E7] dark:bg-[#27272A] hidden sm:block" />}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Step 1: Select Services */}
                  {step === 1 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <h3 className="font-display text-xl font-bold text-[#111111] dark:text-white mb-2">
                        What capabilities do you require?
                      </h3>
                      <p className="text-sm text-[#52525B] dark:text-[#D4D4D8] mb-6">
                        Select all services relevant to your project objectives.
                      </p>

                      <div className="space-y-3 mb-8">
                        {availableServices.map((service) => {
                          const isSelected = formData.serviceTypes.includes(service);
                          return (
                            <button
                              key={service}
                              type="button"
                              onClick={() => toggleService(service)}
                              className={`w-full p-4 rounded-2xl border flex items-center justify-between transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#F97316]/10 border-[#F97316] text-[#F97316] font-semibold'
                                  : 'bg-[#FAFAFA] dark:bg-[#111111] border-[#E4E4E7] dark:border-[#27272A] text-[#111111] dark:text-white hover:border-[#F97316]/50'
                              }`}
                            >
                              <span className="text-sm">{service}</span>
                              <div
                                className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                  isSelected ? 'border-[#F97316] bg-[#F97316] text-white' : 'border-[#E4E4E7] dark:border-[#27272A]'
                                }`}
                              >
                                {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="px-6 py-3 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md"
                        >
                          <span>Next: Budget & Timeline</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Budget & Timeline */}
                  {step === 2 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <h3 className="font-display text-xl font-bold text-[#111111] dark:text-white mb-2">
                        Estimated Budget & Schedule
                      </h3>
                      <p className="text-sm text-[#52525B] dark:text-[#D4D4D8] mb-6">
                        This helps us align expectations and tailor the approach.
                      </p>

                      <div className="mb-6">
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#52525B] dark:text-[#D4D4D8] mb-3">
                          Anticipated Investment
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {budgetOptions.map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setFormData({ ...formData, budgetRange: opt })}
                              className={`p-3.5 rounded-xl border text-sm font-medium transition-all cursor-pointer ${
                                formData.budgetRange === opt
                                  ? 'bg-[#F97316] text-white border-[#F97316] shadow-md'
                                  : 'bg-[#FAFAFA] dark:bg-[#111111] border-[#E4E4E7] dark:border-[#27272A] text-[#111111] dark:text-white hover:border-[#F97316]/50'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="mb-8">
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#52525B] dark:text-[#D4D4D8] mb-3">
                          Desired Timeline
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {timelineOptions.map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setFormData({ ...formData, timeline: opt })}
                              className={`p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                                formData.timeline === opt
                                  ? 'bg-[#F97316] text-white border-[#F97316] shadow-md'
                                  : 'bg-[#FAFAFA] dark:bg-[#111111] border-[#E4E4E7] dark:border-[#27272A] text-[#111111] dark:text-white hover:border-[#F97316]/50'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="px-5 py-2.5 rounded-full border border-[#E4E4E7] dark:border-[#27272A] text-xs font-bold text-[#52525B] dark:text-[#D4D4D8] hover:text-[#111111] dark:hover:text-white flex items-center gap-2 transition-all cursor-pointer"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>Back</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setStep(3)}
                          className="px-6 py-3 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md"
                        >
                          <span>Next: Contact Details</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Contact Details & Submit */}
                  {step === 3 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <h3 className="font-display text-xl font-bold text-[#111111] dark:text-white mb-2">
                        Your Contact Information
                      </h3>
                      <p className="text-sm text-[#52525B] dark:text-[#D4D4D8] mb-6">
                        Where should we send your preliminary project analysis?
                      </p>

                      <div className="space-y-4 mb-6">
                        <div>
                          <label className="block text-xs font-bold text-[#111111] dark:text-white mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Sarah Jenkins"
                            className="w-full px-4 py-3 rounded-xl border border-[#E4E4E7] dark:border-[#27272A] bg-[#FAFAFA] dark:bg-[#111111] text-[#111111] dark:text-white focus:outline-none focus:border-[#F97316]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#111111] dark:text-white mb-1.5">
                            Work Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="sarah@company.com"
                            className="w-full px-4 py-3 rounded-xl border border-[#E4E4E7] dark:border-[#27272A] bg-[#FAFAFA] dark:bg-[#111111] text-[#111111] dark:text-white focus:outline-none focus:border-[#F97316]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#111111] dark:text-white mb-1.5">
                            Company Name / Organization
                          </label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="e.g. Acme Corp"
                            className="w-full px-4 py-3 rounded-xl border border-[#E4E4E7] dark:border-[#27272A] bg-[#FAFAFA] dark:bg-[#111111] text-[#111111] dark:text-white focus:outline-none focus:border-[#F97316]"
                          />
                        </div>
                      </div>

                      <div className="flex justify-between pt-2">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="px-5 py-2.5 rounded-full border border-[#E4E4E7] dark:border-[#27272A] text-xs font-bold text-[#52525B] dark:text-[#D4D4D8] flex items-center gap-2 transition-all cursor-pointer"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>Back</span>
                        </button>

                        <button
                          type="submit"
                          className="px-7 py-3 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-[#F97316]/25"
                        >
                          <Send className="w-4 h-4" />
                          <span>Submit Project Brief</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </form>
              </div>
            ) : (
              /* Success Screen */
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#22C55E]/15 text-[#22C55E] flex items-center justify-center mx-auto mb-4 border border-[#22C55E]/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#111111] dark:text-white mb-2">
                  Project Brief Received
                </h3>
                <p className="text-sm text-[#52525B] dark:text-[#D4D4D8] max-w-md mx-auto mb-8">
                  Thank you, <span className="font-bold text-[#111111] dark:text-white">{formData.name}</span>. An executive partner from Roos StudioX will review your requirements and respond within 24 business hours.
                </p>

                <button
                  onClick={resetForm}
                  className="px-8 py-3 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white text-sm font-bold transition-all cursor-pointer shadow-md"
                >
                  Done
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
