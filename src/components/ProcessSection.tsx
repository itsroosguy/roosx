import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  Target,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  PhoneCall,
  Code2,
  TrendingUp,
} from 'lucide-react';
import { AlphaRoosButton } from './AlphaRoosButton';

interface ProcessSectionProps {
  onOpenInquiry?: () => void;
  isDarkMode?: boolean;
}

interface ProcessStep {
  id: string;
  num: string;
  timeframe: string;
  title: string;
  headline: string;
  description: string;
  annotation: string;
  badgeText: string;
  icon: React.ElementType;
  keyPoints: string[];
}

const fastTrackSteps: ProcessStep[] = [
  {
    id: 'step-1',
    num: '01',
    timeframe: 'DAY 01',
    title: 'Rapid Audit & Entry',
    headline: 'We Step In Within 24 Hours',
    description:
      'No bloated agency onboarding. Within 24 hours of connecting, we dive deep into your current website, messaging, and funnel bottlenecks to locate exact points of lost revenue.',
    annotation: '30-min call. Zero fluff. Immediate clarity.',
    badgeText: 'Instant Traction',
    icon: PhoneCall,
    keyPoints: [
      '30-minute discovery & bottleneck audit',
      'Identify immediate lost conversion points',
      'Clear, prioritized action plan for launch',
    ],
  },
  {
    id: 'step-2',
    num: '02',
    timeframe: 'DAYS 02–05',
    title: 'Strategy & Copy',
    headline: 'Define What Makes You Unbeatable',
    description:
      'We craft sharp, high-converting messaging and brand positioning so visitors understand your value in under 3 seconds and trust your business instantly.',
    annotation: 'All decisions explained, no black boxes.',
    badgeText: 'Positioned To Win',
    icon: Target,
    keyPoints: [
      'Conversion-focused headline & body copy',
      'Distinct brand voice & customer positioning',
      'Frictionless user navigation roadmap',
    ],
  },
  {
    id: 'step-3',
    num: '03',
    timeframe: 'DAYS 06–15',
    title: 'High-Velocity Build',
    headline: 'Production Without The Friction',
    description:
      'We design and build custom, ultra-fast interfaces in parallel. Up to 2 rounds of collaborative revisions ensure the final product exceeds your standards.',
    annotation: 'Up to 2 rounds of rapid collaborative edits.',
    badgeText: '99+ Speed Score',
    icon: Code2,
    keyPoints: [
      'Custom modern UI/UX design (No templates)',
      'High-speed code with 99+ Google performance',
      'CMS integration & automated lead routing',
    ],
  },
  {
    id: 'step-4',
    num: '04',
    timeframe: 'DAY 16+',
    title: 'Launch & Scale',
    headline: 'Go Live & Multiply Revenue',
    description:
      'We launch your new digital experience with active lead tracking, analytics telemetry, and continuous conversion tuning to keep turning traffic into pipeline.',
    annotation: 'Turn visitors into long-term revenue.',
    badgeText: 'Continuous Momentum',
    icon: TrendingUp,
    keyPoints: [
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
  const [activeStep, setActiveStep] = useState<number>(0);

  const currentStep = fastTrackSteps[activeStep];

  return (
    <section
      id="process"
      className={`relative py-20 sm:py-28 transition-colors duration-500 overflow-hidden ${
        isDarkMode ? 'bg-[#0A0A0A] text-white' : 'bg-[#FAF9F6] text-[#111111]'
      }`}
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className={`absolute inset-0 bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none ${
          isDarkMode
            ? 'bg-[linear-gradient(to_right,#27272A25_1px,transparent_1px),linear-gradient(to_bottom,#27272A25_1px,transparent_1px)]'
            : 'bg-[linear-gradient(to_right,#E4E4E780_1px,transparent_1px),linear-gradient(to_bottom,#E4E4E780_1px,transparent_1px)]'
        }`}
      />

      {/* Ambient Orange Glow Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-radial from-[#F97316]/15 via-[#F97316]/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* EDITORIAL HEADER BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto mb-14 sm:mb-20 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F97316]/10 border border-[#F97316]/30 text-xs font-mono font-bold text-[#F97316] uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" />
            <span>High-Velocity Execution Engine</span>
          </div>

          <h2
            className={`font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[1.08] ${
              isDarkMode ? 'text-silver-gradient' : 'text-[#111111]'
            }`}
          >
            <span className="block">How We Step In & Get You</span>
            <span className="bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#EA580C] bg-clip-text text-transparent inline-block pb-2 pt-1">
              To The Goal — Fast.
            </span>
          </h2>

          <p
            className={`text-base sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto transition-colors duration-500 ${
              isDarkMode ? 'text-[#D4D4D8]' : 'text-[#52525B]'
            }`}
          >
            No bloated 3-month agency timelines or confusing jargon. We plug in within 24 hours, eliminate friction, and execute with extreme speed.
          </p>
        </motion.div>

        {/* PINTEREST-INSPIRED EDITORIAL TIMELINE STEPPER (4 STEPS) */}
        <div className="mb-12 relative max-w-5xl mx-auto">
          {/* Flowing Connector Beam */}
          <div
            className={`absolute top-1/2 left-8 right-8 -translate-y-1/2 h-1 rounded-full pointer-events-none hidden sm:block ${
              isDarkMode ? 'bg-[#27272A]' : 'bg-[#E4E4E7]'
            }`}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#EA580C] rounded-full shadow-[0_0_15px_rgba(249,115,22,0.6)]"
              animate={{ width: `${((activeStep + 1) / fastTrackSteps.length) * 100}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* Stepper Node Buttons */}
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {fastTrackSteps.map((step, idx) => {
              const isActive = idx === activeStep;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`group flex flex-col items-center p-4 rounded-2xl border transition-all duration-300 cursor-pointer text-center relative ${
                    isActive
                      ? 'bg-gradient-to-br from-[#F97316] via-[#FB923C] to-[#EA580C] text-white border-[#FDBA74] shadow-xl shadow-[#F97316]/30 scale-105'
                      : isDarkMode
                      ? 'bg-[#141417] text-[#A1A1AA] border-[#27272A] hover:border-[#F97316]/50 hover:text-white'
                      : 'bg-white text-[#52525B] border-[#E4E4E7] hover:border-[#F97316]/50 hover:text-[#111111] shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-[#F97316]/10 text-[#F97316]'
                      }`}
                    >
                      {step.timeframe}
                    </span>
                  </div>

                  <div className="font-display text-sm font-extrabold tracking-tight mt-1">
                    {step.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* MASTER EDITORIAL WORKFLOW CANVAS DECK */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.id}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={`rounded-3xl border p-6 sm:p-10 shadow-2xl relative overflow-hidden transition-colors duration-500 ${
              isDarkMode
                ? 'bg-[#141417]/95 border-[#27272A] text-white shadow-black/60'
                : 'bg-white border-[#E4E4E7] text-[#111111] shadow-black/10'
            }`}
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#EA580C]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* LEFT COLUMN: HUMAN EXPLICIT NARRATIVE (6 COLS) */}
              <div className="lg:col-span-6 space-y-6 text-left">
                
                {/* Stage Header */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl font-mono font-black text-[#F97316]">
                      {currentStep.num}
                    </span>
                    <div className="h-4 w-px bg-zinc-700" />
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
                      {currentStep.timeframe} • ACCELERATED PHASE
                    </span>
                  </div>

                  <h3
                    className={`font-display text-3xl sm:text-5xl font-black tracking-tight leading-tight ${
                      isDarkMode ? 'text-white' : 'text-[#111111]'
                    }`}
                  >
                    {currentStep.headline}
                  </h3>
                </div>

                {/* Narrative Description */}
                <p
                  className={`text-base leading-relaxed font-normal ${
                    isDarkMode ? 'text-[#D4D4D8]' : 'text-[#52525B]'
                  }`}
                >
                  {currentStep.description}
                </p>

                {/* Human Editorial Callout Note (Pinterest Style) */}
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F97316]/10 border border-[#F97316]/30 text-xs font-semibold text-[#F97316] rotate-[-1deg] shadow-sm">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>"{currentStep.annotation}"</span>
                </div>

                {/* Action Buttons */}
                <div className="pt-3 flex items-center gap-3 flex-wrap">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        setActiveStep(
                          (prev) => (prev - 1 + fastTrackSteps.length) % fastTrackSteps.length
                        )
                      }
                      className={`p-3 rounded-xl border transition-all cursor-pointer ${
                        isDarkMode
                          ? 'bg-[#18181B] border-[#27272A] text-white hover:border-[#F97316]'
                          : 'bg-white border-[#E4E4E7] text-[#111111] hover:border-[#F97316]'
                      }`}
                      aria-label="Previous Step"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() =>
                        setActiveStep((prev) => (prev + 1) % fastTrackSteps.length)
                      }
                      className={`p-3 rounded-xl border transition-all cursor-pointer ${
                        isDarkMode
                          ? 'bg-[#18181B] border-[#27272A] text-white hover:border-[#F97316]'
                          : 'bg-white border-[#E4E4E7] text-[#111111] hover:border-[#F97316]'
                      }`}
                      aria-label="Next Step"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {onOpenInquiry && (
                    <AlphaRoosButton
                      text="Get Your Free Audit"
                      onClick={onOpenInquiry}
                      isDarkMode={isDarkMode}
                      compact
                    />
                  )}
                </div>
              </div>

              {/* RIGHT COLUMN: PINTEREST-INSPIRED ORGANIC ROADMAP DECK (6 COLS) */}
              <div className="lg:col-span-6">
                <div
                  className={`rounded-2xl border p-6 sm:p-8 relative text-left shadow-xl transition-all duration-500 ${
                    isDarkMode
                      ? 'bg-[#0E0E11] border-[#27272A] text-white'
                      : 'bg-[#FAFAFA] border-[#E4E4E7] text-[#111111]'
                  }`}
                >
                  {/* Organic Badge & Icon Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F97316] via-[#FB923C] to-[#EA580C] text-white flex items-center justify-center shadow-lg shadow-[#F97316]/30">
                        <currentStep.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold text-[#F97316] uppercase">
                          {currentStep.badgeText}
                        </div>
                        <div className="text-sm font-bold">{currentStep.title}</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#F97316]/10 text-[#F97316] font-bold">
                      {currentStep.timeframe}
                    </span>
                  </div>

                  {/* Tactile Execution Checklist */}
                  <div className="py-6 space-y-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      Exact Deliverables & Speed Milestones:
                    </div>

                    <div className="space-y-3">
                      {currentStep.keyPoints.map((point, pIdx) => (
                        <motion.div
                          key={pIdx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: pIdx * 0.1 }}
                          className={`flex items-start gap-3 p-3 rounded-xl border text-sm font-medium transition-all ${
                            isDarkMode
                              ? 'bg-[#18181B] border-[#27272A] text-zinc-200'
                              : 'bg-white border-[#E4E4E7] text-zinc-800 shadow-sm'
                          }`}
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Organic Winding Flow Path Graphic */}
                  <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span>AGILE SPEED: <strong className="text-emerald-400">NO DELAYS</strong></span>
                    <span className="text-[#F97316] font-bold">ROOS QUALITY GUARANTEE</span>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
