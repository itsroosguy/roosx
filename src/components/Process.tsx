import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../data/agencyData';
import { CheckCircle2, Clock, ShieldCheck, Milestone } from 'lucide-react';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-purple-200 text-xs font-semibold text-purple-700 mb-4 bg-white">
            <Milestone className="w-3.5 h-3.5" /> Our Execution Blueprint
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900">
            Designed for <span className="text-gradient-purple">Velocity & Precision</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            A transparent 4-stage development process honed across 140+ digital product launches.
          </p>
        </div>

        {/* Step Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => setActiveStep(idx)}
              className={`p-6 rounded-2xl glass-card text-left transition-all duration-300 border relative overflow-hidden bg-white ${
                activeStep === idx
                  ? 'border-purple-600 bg-purple-50/50 shadow-md ring-2 ring-purple-600/20'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`font-display text-2xl font-bold ${activeStep === idx ? 'text-purple-700' : 'text-slate-500'}`}>
                  {step.number}
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 flex items-center gap-1 border border-slate-200">
                  <Clock className="w-3 h-3" /> {step.duration}
                </span>
              </div>
              <div className={`font-display font-semibold text-base ${activeStep === idx ? 'text-slate-900' : 'text-slate-700'}`}>
                {step.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active Step Detailed Card */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-200 relative overflow-hidden bg-white shadow-xl"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display text-4xl font-extrabold text-gradient-purple">
                  Phase {PROCESS_STEPS[activeStep].number}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 border border-sky-200">
                  {PROCESS_STEPS[activeStep].duration}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                {PROCESS_STEPS[activeStep].title}
              </h3>

              <p className="text-slate-600 text-base leading-relaxed mb-6">
                {PROCESS_STEPS[activeStep].description}
              </p>
            </div>

            {/* Key Deliverables List */}
            <div className="md:col-span-5 glass-card p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> Guaranteed Phase Deliverables
              </div>

              <ul className="space-y-3">
                {PROCESS_STEPS[activeStep].deliverables.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
