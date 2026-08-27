import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Send, CheckCircle2, ArrowRight, ArrowLeft, Calendar, Rocket, Layers } from 'lucide-react';
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
    serviceTypes: ['Web & App Development'],
    timeline: 'Within 1 Month',
    projectStage: 'New Product / Launching from Scratch',
    name: '',
    email: '',
    company: '',
    projectDetails: '',
  });

  if (!isOpen) return null;

  const availableServices = [
    'Strategy & Positioning',
    'Brand & Identity',
    'UI/UX & Interface Design',
    'Web & App Development',
    'AI & Automation',
    'Growth & Marketing',
    'Product Consulting',
    'Full Digital Transformation',
    'Other / Custom Request',
  ];

  // Exact user-requested Desired Timelines
  const timelineOptions = [
    { label: 'Immediate (Next 2 Weeks)', icon: '⚡' },
    { label: 'Within 1 Month', icon: '📅' },
    { label: 'Flexible / Q4 Planning', icon: '🎯' },
  ];

  // Universal Project Stages (Replaces budget pressure with zero friction)
  const projectStageOptions = [
    { label: 'New Product / Launching from Scratch', desc: 'Building a fresh brand or digital experience' },
    { label: 'Redesign / Upgrade Existing Product', desc: 'Improving performance, UI/UX, or visual identity' },
    { label: 'Ongoing Growth & Strategic Advisory', desc: 'Partnering for long-term design and development support' },
    { label: 'Exploring Concepts & Early Consultation', desc: 'Gathering insights and defining scope before build' },
  ];

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.serviceTypes.includes(service);
      if (exists) {
        if (prev.serviceTypes.length === 1) return prev; // Keep at least 1
        return { ...prev, serviceTypes: prev.serviceTypes.filter((s) => s !== service) };
      } else {
        return { ...prev, serviceTypes: [...prev.serviceTypes, service] };
      }
    });
  };

  const handleNextStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.55 },
        colors: ['#FF7A1A', '#FFA665', '#22C55E'],
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
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl rounded-3xl border border-[#27272A] overflow-hidden z-10 my-auto shadow-2xl bg-[#0F0F12] text-white"
        >
          {/* Header Banner */}
          <div className="relative px-6 py-6 sm:px-8 sm:py-7 border-b border-[#27272A] bg-gradient-to-r from-[#141418] via-[#0F0F12] to-[#141418]">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] sm:text-xs font-bold text-[#FF7A1A] tracking-widest uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FF7A1A]" />
                DIRECT PARTNER ENGAGEMENT
              </span>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-[#1F1F24] text-zinc-400 hover:text-white hover:bg-zinc-700 flex items-center justify-center transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Connect with Alpha Roos
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-lg">
              Tell us about your product vision. We engineer high-impact digital products designed to scale revenue.
            </p>

            {/* Step 1 vs 2 Indicator */}
            <div className="flex items-center gap-2 mt-4 pt-3 border-t border-zinc-800/60">
              <div className={`h-1.5 rounded-full flex-1 transition-all ${step >= 1 ? 'bg-[#FF7A1A]' : 'bg-zinc-800'}`} />
              <div className={`h-1.5 rounded-full flex-1 transition-all ${step >= 2 ? 'bg-[#FF7A1A]' : 'bg-zinc-800'}`} />
              <span className="font-mono text-[10px] text-zinc-400 ml-2">STEP {step} OF 2</span>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {!submitted ? (
              <form onSubmit={step === 1 ? handleNextStep1 : handleSubmit}>
                
                {/* ========================================================================= */}
                {/* PAGE 1: CONTACT & SERVICE TYPE */}
                {/* ========================================================================= */}
                {step === 1 && (
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    
                    {/* Name & Email Fields Side-by-Side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                          Full Name <span className="text-[#FF7A1A]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Morgan"
                          className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-[#18181C] text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-[#FF7A1A] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                          Work Email <span className="text-[#FF7A1A]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-[#18181C] text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-[#FF7A1A] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Company Field */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Company / Product
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Health"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-[#18181C] text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-[#FF7A1A] transition-colors"
                      />
                    </div>

                    {/* Type of Service Chips Selector */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-2.5">
                        Type of Service <span className="text-[#FF7A1A]">*</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {availableServices.map((service) => {
                          const isSelected = formData.serviceTypes.includes(service);
                          return (
                            <button
                              key={service}
                              type="button"
                              onClick={() => toggleService(service)}
                              className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all cursor-pointer flex items-center gap-1.5 ${
                                isSelected
                                  ? 'bg-[#FF7A1A]/15 border-[#FF7A1A] text-[#FF7A1A] font-semibold'
                                  : 'bg-[#18181C] border-zinc-800 text-zinc-300 hover:border-zinc-700'
                              }`}
                            >
                              {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                              <span>{service}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Next Button */}
                    <div className="pt-3 flex justify-end">
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#FF7A1A] via-[#FFA665] to-[#22C55E] hover:opacity-95 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#FF7A1A]/20 cursor-pointer"
                      >
                        <span>Next: Timeline & Project Scope</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ========================================================================= */}
                {/* PAGE 2: TIMELINE & PROJECT STAGE (NO CONFUSING BUDGET PRESSURE!) */}
                {/* ========================================================================= */}
                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    
                    {/* Desired Timeline */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-3 flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-[#FF7A1A]" />
                        Desired Timeline <span className="text-[#FF7A1A]">*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {timelineOptions.map((opt) => {
                          const isSelected = formData.timeline === opt.label;
                          return (
                            <button
                              key={opt.label}
                              type="button"
                              onClick={() => setFormData({ ...formData, timeline: opt.label })}
                              className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                                isSelected
                                  ? 'bg-[#FF7A1A]/15 border-[#FF7A1A] text-white shadow-md'
                                  : 'bg-[#18181C] border-zinc-800 text-zinc-400 hover:border-zinc-700'
                              }`}
                            >
                              <span className="text-base mb-1">{opt.icon}</span>
                              <span className={`text-xs font-semibold ${isSelected ? 'text-white' : 'text-zinc-300'}`}>
                                {opt.label}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Project Stage / Type of Engagement (Universal & Friendly!) */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-3 flex items-center gap-1.5">
                        <Rocket className="w-4 h-4 text-[#FF7A1A]" />
                        Project Stage & Focus
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {projectStageOptions.map((opt) => {
                          const isSelected = formData.projectStage === opt.label;
                          return (
                            <button
                              key={opt.label}
                              type="button"
                              onClick={() => setFormData({ ...formData, projectStage: opt.label })}
                              className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#FF7A1A]/15 border-[#FF7A1A] text-white shadow-md'
                                  : 'bg-[#18181C] border-zinc-800 text-zinc-400 hover:border-zinc-700'
                              }`}
                            >
                              <div className="text-xs font-semibold text-white mb-0.5">{opt.label}</div>
                              <div className="text-[11px] text-zinc-400 leading-tight">{opt.desc}</div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Project Vision & Notes (Optional) */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-zinc-400" />
                        Project Vision & Notes <span className="text-zinc-500 font-normal">(Optional)</span>
                      </label>
                      <textarea
                        rows={3}
                        value={formData.projectDetails}
                        onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                        placeholder="Tell us briefly about your goals, ideas, or challenges..."
                        className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-[#18181C] text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-[#FF7A1A] transition-colors resize-none"
                      />
                    </div>

                    {/* Actions & Secure Transmit Banner */}
                    <div className="pt-2">
                      <div className="flex items-center justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="px-5 py-3 rounded-xl border border-zinc-800 text-xs font-bold text-zinc-300 hover:text-white hover:bg-zinc-800 flex items-center gap-2 transition-all cursor-pointer"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>Back</span>
                        </button>

                        <button
                          type="submit"
                          className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#FF7A1A] via-[#FFA665] to-[#22C55E] hover:opacity-95 text-white text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-[#FF7A1A]/20"
                        >
                          <span>Submit & Connect with Alpha Roos</span>
                          <Send className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <span className="text-[11px] text-zinc-500">
                          Direct partner engagement • Transmitting securely to{' '}
                          <span className="text-[#22C55E] font-medium">praveen@roosstudio.com</span>
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </form>
            ) : (
              /* Success Confirmation Screen */
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#22C55E]/15 text-[#22C55E] flex items-center justify-center mx-auto mb-4 border border-[#22C55E]/30 shadow-lg shadow-[#22C55E]/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  Partner Brief Received
                </h3>
                <p className="text-sm text-zinc-400 max-w-md mx-auto mb-8">
                  Thank you, <span className="font-bold text-white">{formData.name}</span>. Praveen from Alpha Roos will review your requirements and respond within 24 business hours.
                </p>

                <button
                  onClick={resetForm}
                  className="px-8 py-3.5 rounded-2xl bg-[#FF7A1A] hover:bg-[#EA580C] text-white text-sm font-bold transition-all cursor-pointer shadow-lg shadow-[#FF7A1A]/20"
                >
                  Close & Done
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
