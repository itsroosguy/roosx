import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  Sparkles,
  Car,
  Award,
  Wrench,
  Rocket,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { AlphaRoosButton } from './AlphaRoosButton';

interface ProcessSectionProps {
  onOpenInquiry?: () => void;
  isDarkMode?: boolean;
}

interface StepDetail {
  id: string;
  num: string;
  timeframe: string;
  badgeTag: string;
  title: string;
  headline: string;
  description: string;
  annotation: string;
  accentColor: string;
  glowShadow: string;
  trackIcon: React.ElementType;
  trackLabel: string;
  deliverables: string[];
}

const roadmapSteps: StepDetail[] = [
  {
    id: 'step-01',
    num: '01',
    timeframe: 'DAY 01 • RAPID ENTRY',
    badgeTag: 'INSTANT TRACTION',
    title: 'Rapid Audit & Entry',
    headline: 'We Step In Within 24 Hours',
    description:
      'No 3-month onboarding delay. Within 24 hours of connecting, we dive straight into your website, messaging, and funnel to locate exact points of lost revenue.',
    annotation: '30-min call • Zero fluff • Immediate clarity',
    accentColor: '#F97316',
    glowShadow: 'rgba(249, 115, 22, 0.6)',
    trackIcon: Car,
    trackLabel: 'entry',
    deliverables: [
      '30-minute discovery & bottleneck audit',
      'Locate immediate conversion leaks',
      'Prioritized action plan for launch',
    ],
  },
  {
    id: 'step-02',
    num: '02',
    timeframe: 'DAYS 02–05 • POSITIONING',
    badgeTag: 'POSITIONED TO WIN',
    title: 'Strategy & Copy',
    headline: 'Define What Makes You Unbeatable',
    description:
      'We craft sharp, high-converting conversion copy so potential buyers get your unique value in under 3 seconds and trust your brand immediately.',
    annotation: 'All decisions explained, no black boxes x',
    accentColor: '#FB923C',
    glowShadow: 'rgba(251, 146, 60, 0.6)',
    trackIcon: Award,
    trackLabel: 'unbeatable',
    deliverables: [
      'Conversion headline & high-impact copy',
      'Distinct brand voice & market positioning',
      'Frictionless customer navigation roadmap',
    ],
  },
  {
    id: 'step-03',
    num: '03',
    timeframe: 'DAYS 06–15 • BUILD SPRINT',
    badgeTag: '99+ SPEED PERFORMANCE',
    title: 'High-Velocity Build',
    headline: 'Production Without The Friction',
    description:
      'Custom, ultra-fast interfaces built in parallel. Up to 2 rounds of rapid collaborative edits ensure absolute perfection before deployment.',
    annotation: 'Up to 2 rounds of rapid collaborative edits',
    accentColor: '#38BDF8',
    glowShadow: 'rgba(56, 189, 248, 0.6)',
    trackIcon: Wrench,
    trackLabel: 'friction',
    deliverables: [
      'Custom modern UI/UX (No templates)',
      'High-speed code with 99+ Google score',
      'CMS integration & automated lead routing',
    ],
  },
  {
    id: 'step-04',
    num: '04',
    timeframe: 'DAY 16+ • LAUNCH & SCALE',
    badgeTag: '+3X GROWTH MULTIPLIER',
    title: 'Launch & Scale',
    headline: 'Go Live & Multiply Revenue',
    description:
      'Zero-downtime deployment with active conversion telemetry, lead analytics tracking, and continuous revenue tuning for long-term momentum.',
    annotation: 'Turn visitors into long-term revenue',
    accentColor: '#10B981',
    glowShadow: 'rgba(16, 185, 129, 0.6)',
    trackIcon: Rocket,
    trackLabel: 'launch',
    deliverables: [
      'Zero-downtime deployment & DNS handoff',
      'Active conversion tracking & lead analytics',
      'Ongoing speed & conversion optimization',
    ],
  },
];

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  onOpenInquiry,
  isDarkMode = false,
}) => {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

  const activeStep = roadmapSteps[activeStepIdx];

  return (
    <section
      id="process"
      className={`relative py-20 sm:py-28 transition-colors duration-500 overflow-hidden ${
        isDarkMode ? 'bg-[#0A0A0A] text-white' : 'bg-[#FAF9F6] text-[#111111]'
      }`}
    >
      {/* Subtle Background Grid Mesh */}
      <div
        className={`absolute inset-0 bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none ${
          isDarkMode
            ? 'bg-[linear-gradient(to_right,#27272A20_1px,transparent_1px),linear-gradient(to_bottom,#27272A20_1px,transparent_1px)]'
            : 'bg-[linear-gradient(to_right,#E4E4E760_1px,transparent_1px),linear-gradient(to_bottom,#E4E4E760_1px,transparent_1px)]'
        }`}
      />

      {/* Ambient Radial Spotlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-radial from-[#F97316]/15 via-[#FB923C]/5 to-transparent blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER BLOCK WITH GIANT ROADMAP TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F97316]/10 border border-[#F97316]/30 text-xs font-mono font-bold text-[#F97316] uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" />
            <span>High-Velocity Execution Engine</span>
          </div>

          <h2 className="font-display text-5xl sm:text-7xl font-black tracking-tight leading-none bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#10B981] bg-clip-text text-transparent opacity-95">
            Roadmap
          </h2>

          <p
            className={`text-base sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto transition-colors duration-500 ${
              isDarkMode ? 'text-[#D4D4D8]' : 'text-[#52525B]'
            }`}
          >
            Click any milestone on the glowing highway to inspect how we step in and reach your goal fast.
          </p>
        </motion.div>

        {/* TOP GLOWING ROADMAP HIGHWAY TRACK (MATCHING USER SKETCH / PINTEREST IMAGE) */}
        <div className="relative py-8 mb-12 max-w-6xl mx-auto">
          
          {/* HIGHWAY SVG GLOWING CURVED PATH (DESKTOP & TABLET) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none hidden md:block">
            <svg
              className="w-full h-36 overflow-visible"
              viewBox="0 0 1000 140"
              fill="none"
            >
              <defs>
                <linearGradient id="highwayGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F97316" />
                  <stop offset="33%" stopColor="#FB923C" />
                  <stop offset="66%" stopColor="#38BDF8" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
                <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Outer Neon Glow Beam */}
              <path
                d="M 60,70 C 250,10 450,130 650,20 C 800,10 900,100 940,70"
                stroke="url(#highwayGrad)"
                strokeWidth="10"
                strokeLinecap="round"
                className="opacity-30 blur-md"
              />
              {/* Inner Glowing Track Line */}
              <path
                d="M 60,70 C 250,10 450,130 650,20 C 800,10 900,100 940,70"
                stroke="url(#highwayGrad)"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* 4 INTERACTIVE WAYPOINT NODES ON THE HIGHWAY */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 relative z-10">
            {roadmapSteps.map((step, idx) => {
              const TrackIcon = step.trackIcon;
              const isSelected = idx === activeStepIdx;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepIdx(idx)}
                  className={`group relative flex flex-col items-center p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer text-center ${
                    isSelected
                      ? 'bg-[#18181B] border-[#FDBA74] text-white shadow-2xl scale-105'
                      : isDarkMode
                      ? 'bg-[#141417]/80 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white'
                      : 'bg-white/90 text-zinc-600 border-zinc-200 hover:border-zinc-400 hover:text-zinc-900 shadow-sm'
                  }`}
                  style={{
                    boxShadow: isSelected ? `0 0 25px ${step.glowShadow}` : undefined,
                  }}
                >
                  {/* Floating Micro-Label Pill */}
                  <span
                    className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-2 border transition-colors"
                    style={{
                      backgroundColor: `${step.accentColor}15`,
                      color: step.accentColor,
                      borderColor: `${step.accentColor}40`,
                    }}
                  >
                    {step.trackLabel}
                  </span>

                  {/* Node Circle Button */}
                  <div className="relative mb-2">
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full text-white flex items-center justify-center font-display text-xl sm:text-2xl font-black transition-transform group-hover:scale-110 shadow-lg"
                      style={{
                        backgroundColor: step.accentColor,
                        boxShadow: `0 0 15px ${step.glowShadow}`,
                      }}
                    >
                      {step.num}
                    </div>

                    {/* Active Ping Animation */}
                    {isSelected && (
                      <span
                        className="absolute -inset-2 rounded-full border animate-ping opacity-40 pointer-events-none"
                        style={{ borderColor: step.accentColor }}
                      />
                    )}
                  </div>

                  {/* Step Title & Icon */}
                  <div className="flex items-center gap-1.5 text-xs font-bold font-display tracking-tight">
                    <TrackIcon className="w-3.5 h-3.5 shrink-0" style={{ color: step.accentColor }} />
                    <span>{step.title}</span>
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-zinc-500 mt-0.5">
                    {step.timeframe.split('•')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* BOTTOM ACTIVE CONTENT EXPANSION DRAWER (CLICK TO REVEAL DETAILS) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.id}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={`max-w-4xl mx-auto rounded-3xl border p-6 sm:p-10 shadow-2xl relative overflow-hidden text-left transition-colors duration-500 ${
              isDarkMode
                ? 'bg-[#141417]/95 border-zinc-800 text-white shadow-black/70'
                : 'bg-white border-zinc-200 text-zinc-900 shadow-xl'
            }`}
          >
            {/* Top Accent Color Line */}
            <div
              className="absolute top-0 left-0 right-0 h-1.5"
              style={{ backgroundColor: activeStep.accentColor }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* LEFT CONTENT NARRATIVE (7 COLS) */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs font-mono font-bold px-3 py-1 rounded-full border uppercase tracking-wider"
                    style={{
                      backgroundColor: `${activeStep.accentColor}15`,
                      color: activeStep.accentColor,
                      borderColor: `${activeStep.accentColor}40`,
                    }}
                  >
                    {activeStep.timeframe}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    {activeStep.badgeTag}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                    {activeStep.headline}
                  </h3>
                  <div className="text-sm font-bold mt-1" style={{ color: activeStep.accentColor }}>
                    {activeStep.title}
                  </div>
                </div>

                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    isDarkMode ? 'text-zinc-300' : 'text-zinc-600'
                  }`}
                >
                  {activeStep.description}
                </p>

                {/* Floating Handwritten Callout Annotation */}
                <div
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold shadow-sm"
                  style={{
                    backgroundColor: `${activeStep.accentColor}15`,
                    color: activeStep.accentColor,
                    borderColor: `${activeStep.accentColor}40`,
                  }}
                >
                  <Sparkles className="w-3.5 h-3.5 shrink-0" />
                  <span>"{activeStep.annotation}"</span>
                </div>

                {/* Step Switcher Buttons */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() =>
                      setActiveStepIdx(
                        (prev) => (prev - 1 + roadmapSteps.length) % roadmapSteps.length
                      )
                    }
                    className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                      isDarkMode
                        ? 'bg-[#18181B] border-zinc-800 text-white hover:border-zinc-600'
                        : 'bg-white border-zinc-200 text-zinc-900 hover:border-zinc-400'
                    }`}
                    aria-label="Previous Step"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() =>
                      setActiveStepIdx((prev) => (prev + 1) % roadmapSteps.length)
                    }
                    className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                      isDarkMode
                        ? 'bg-[#18181B] border-zinc-800 text-white hover:border-zinc-600'
                        : 'bg-white border-zinc-200 text-zinc-900 hover:border-zinc-400'
                    }`}
                    aria-label="Next Step"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <span className="text-xs font-mono text-zinc-400 ml-2">
                    Step {activeStepIdx + 1} of {roadmapSteps.length}
                  </span>
                </div>
              </div>

              {/* RIGHT DELIVERABLES CARD (5 COLS) */}
              <div className="lg:col-span-5">
                <div
                  className={`rounded-2xl border p-6 text-left space-y-4 shadow-lg ${
                    isDarkMode ? 'bg-[#0E0E11] border-zinc-800' : 'bg-zinc-50 border-zinc-200'
                  }`}
                >
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 pb-2 border-b border-zinc-800/60 flex items-center justify-between">
                    <span>Key Deliverables:</span>
                    <span className="font-mono text-emerald-400">NO DELAYS</span>
                  </div>

                  <div className="space-y-3">
                    {activeStep.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs font-semibold">
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: activeStep.accentColor }}
                        />
                        <span className={isDarkMode ? 'text-zinc-200' : 'text-zinc-800'}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* BOTTOM CTA BUTTON */}
        {onOpenInquiry && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 flex flex-col items-center justify-center text-center space-y-4"
          >
            <AlphaRoosButton
              text="Get Your Free Audit"
              onClick={onOpenInquiry}
              isDarkMode={isDarkMode}
            />
          </motion.div>
        )}

      </div>
    </section>
  );
};
