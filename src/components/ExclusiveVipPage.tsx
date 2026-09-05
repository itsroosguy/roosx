import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, CheckCircle2, ArrowRight, Shield, Sparkles, Building2, User, Mail, Send, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ExclusiveVipPageProps {
  onNavigateHome: () => void;
  onOpenInquiry?: () => void;
}

export const ExclusiveVipPage: React.FC<ExclusiveVipPageProps> = ({
  onNavigateHome,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    linkedinUrl: '',
    company: '',
    scope: 'Brand Architecture',
    timeline: 'Immediate (1-2 Weeks)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const scopeOptions = [
    'Brand Architecture',
    '3D Spatial Web Experience',
    'Autonomous AI Automation',
    'Growth Engine & Telemetry',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.linkedinUrl) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#FF7A1A', '#FFA665', '#111111', '#0077B5'],
      });
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] font-sans pt-28 sm:pt-36 pb-20 selection:bg-[#FF7A1A] selection:text-white">
      {/* Background Architectural Mesh Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E4E4E750_1px,transparent_1px),linear-gradient(to_bottom,#E4E4E750_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Ambient Warm Golden Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-r from-orange-200/30 via-amber-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* TOP HEADER BLOCK: EXCLUSIVE EXECUTIVE VIP INVITATION */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-950 text-xs font-mono font-bold tracking-wider uppercase">
            <Lock className="w-3.5 h-3.5 text-[#FF7A1A]" />
            <span>Exclusive Founder Submission</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] text-[#111111]">
            Executive Strategic Access & <span className="bg-gradient-to-r from-[#FF7A1A] via-[#FF944D] to-[#EA580C] bg-clip-text text-transparent">LinkedIn Network</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-zinc-600 font-medium leading-relaxed max-w-2xl mx-auto">
            Directly connect your executive background with Praveen Aryan and the Roos StudioX leadership team. Designed for ambitious founders and high-growth ventures seeking category authority.
          </p>
        </motion.div>

        {/* MAIN 2-COLUMN LAYOUT: FOUNDER TRUST CARD (LEFT) + AESTHETIC WHITE FORM (RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: FOUNDER EXECUTIVE CARD & ADVISORY TRUST BADGES (5 COLS) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200/90 shadow-xl shadow-zinc-200/60 relative overflow-hidden space-y-6">
              
              {/* Founder Header Badge */}
              <div className="flex items-center gap-4 border-b border-zinc-100 pb-5">
                <div className="relative shrink-0">
                  <img
                    src="/images/praveen-aryan.png"
                    alt="Praveen Aryan — Founder & Managing Director"
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-[#FF7A1A]/60 shadow-md"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#FF7A1A] flex items-center justify-center text-white">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-lg font-extrabold text-[#111111] flex items-center gap-1.5">
                    Praveen Aryan
                  </h3>
                  <p className="text-xs font-mono font-semibold text-[#FF7A1A] uppercase tracking-wider">
                    Founder & Managing Director
                  </p>
                  <a
                    href="https://www.linkedin.com/in/itsroosguy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-500 hover:text-[#0077B5] transition-colors mt-0.5"
                  >
                    <Linkedin className="w-3 h-3 text-[#0077B5]" />
                    <span>linkedin.com/in/itsroosguy</span>
                  </a>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-medium italic border-l-2 border-[#FF7A1A] pl-3.5">
                "We bypass account managers and junior delegates. Every exclusive submission is reviewed directly by leadership for maximum strategic alignment."
              </p>

              {/* Advisory Metrics Matrix */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                  <span className="font-mono text-lg font-black text-[#111111] block">7+ Yrs</span>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-semibold block">Global Advisory</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                  <span className="font-mono text-lg font-black text-[#111111] block">UAE • CA • IN</span>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-semibold block">Market Scope</span>
                </div>
              </div>

              {/* Security & Confidentiality Directives */}
              <div className="space-y-2.5 pt-2 border-t border-zinc-100">
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700">
                  <Shield className="w-4 h-4 text-[#FF7A1A] shrink-0" />
                  <span>100% Confidential Executive Review</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700">
                  <Sparkles className="w-4 h-4 text-[#FF7A1A] shrink-0" />
                  <span>Direct Founder Feedback Within 24 Hrs</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT COLUMN: AESTHETIC WHITE SUBMISSION FORM (7 COLS) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-zinc-200 shadow-2xl shadow-zinc-200/80 relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {submitted ? (
                  /* SUBMISSION CONFIRMATION STATE */
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-8 text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-orange-50 border border-orange-200 text-[#FF7A1A] flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2 max-w-md mx-auto">
                      <h3 className="font-display text-2xl font-black text-[#111111]">
                        Application Received
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed">
                        Thank you, <span className="font-bold text-[#111111]">{formData.fullName}</span>. Praveen Aryan and our leadership team will review your LinkedIn submission (<span className="font-mono text-xs text-[#0077B5]">{formData.linkedinUrl}</span>) and respond within 24 business hours.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-zinc-100 flex justify-center">
                      <button
                        onClick={onNavigateHome}
                        className="px-6 py-3 rounded-full bg-[#111111] hover:bg-black text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
                      >
                        <span>Return to Studio Home</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  /* EXCLUSIVE SUBMISSION FORM */
                  <form key="form" onSubmit={handleSubmit} className="space-y-5">
                    
                    <div className="border-b border-zinc-100 pb-4">
                      <h3 className="font-display text-xl font-black text-[#111111]">
                        Strategic Inquiry & LinkedIn Profile
                      </h3>
                      <p className="text-xs text-zinc-500 font-medium">
                        Fill out your background details below for direct executive review.
                      </p>
                    </div>

                    {/* NAME & EMAIL GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono font-bold text-zinc-800 uppercase tracking-wider flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-[#FF7A1A]" />
                          <span>Full Name *</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Sarah Jenkins"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm font-medium text-[#111111] placeholder:text-zinc-400 focus:outline-none focus:border-[#FF7A1A] focus:ring-2 focus:ring-[#FF7A1A]/20 transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono font-bold text-zinc-800 uppercase tracking-wider flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-[#FF7A1A]" />
                          <span>Work Email *</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. sarah@enterprise.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm font-medium text-[#111111] placeholder:text-zinc-400 focus:outline-none focus:border-[#FF7A1A] focus:ring-2 focus:ring-[#FF7A1A]/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* LINKEDIN PROFILE URL (FEATURED HIGHLIGHT FIELD) */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold text-zinc-800 uppercase tracking-wider flex items-center gap-1.5">
                        <Linkedin className="w-3.5 h-3.5 text-[#0077B5]" />
                        <span>LinkedIn Profile URL *</span>
                      </label>
                      <div className="relative">
                        <input
                          type="url"
                          required
                          placeholder="https://www.linkedin.com/in/yourprofile"
                          value={formData.linkedinUrl}
                          onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-orange-50/50 border border-orange-200/90 text-sm font-medium text-[#111111] placeholder:text-zinc-400 focus:outline-none focus:border-[#FF7A1A] focus:ring-2 focus:ring-[#FF7A1A]/20 transition-all"
                        />
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-zinc-400 pointer-events-none hidden sm:block">
                          Required
                        </div>
                      </div>
                    </div>

                    {/* COMPANY NAME */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold text-zinc-800 uppercase tracking-wider flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-[#FF7A1A]" />
                        <span>Company / Venture Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Vortex Quantum / Stealth AI"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm font-medium text-[#111111] placeholder:text-zinc-400 focus:outline-none focus:border-[#FF7A1A] focus:ring-2 focus:ring-[#FF7A1A]/20 transition-all"
                      />
                    </div>

                    {/* INTERACTIVE SCOPE SELECTORS */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-bold text-zinc-800 uppercase tracking-wider block">
                        Primary Scope of Interest
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {scopeOptions.map((option) => {
                          const isSelected = formData.scope === option;
                          return (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setFormData({ ...formData, scope: option })}
                              className={`p-3 rounded-xl text-xs font-bold text-left border transition-all flex items-center justify-between cursor-pointer ${
                                isSelected
                                  ? 'bg-[#111111] text-white border-[#111111] shadow-md'
                                  : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:border-zinc-300'
                              }`}
                            >
                              <span>{option}</span>
                              {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A1A]" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* BRIEF MESSAGE */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold text-zinc-800 uppercase tracking-wider block">
                        Project Brief / Strategic Goals
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Share your primary objectives, timeline, or key bottlenecks..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm font-medium text-[#111111] placeholder:text-zinc-400 focus:outline-none focus:border-[#FF7A1A] focus:ring-2 focus:ring-[#FF7A1A]/20 transition-all resize-none"
                      />
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF7A1A] via-[#FF944D] to-[#EA580C] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-[#FF7A1A]/30 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {loading ? (
                        <span>Processing Application...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Executive Application</span>
                        </>
                      )}
                    </button>

                  </form>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
};
