import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  CheckCircle2,
  Gauge,
  Sliders,
  Search,
  Activity,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { AlphaRoosButton } from './AlphaRoosButton';

interface ProcessSectionProps {
  onOpenInquiry?: () => void;
  isDarkMode?: boolean;
}

interface StepConfig {
  id: string;
  num: string;
  phaseTime: string;
  badgeTag: string;
  title: string;
  headline: string;
  description: string;
  annotation: string;
  accentColor: string;
  deliverables: string[];
}

const simulatorSteps: StepConfig[] = [
  {
    id: 'entry',
    num: '01',
    phaseTime: 'DAY 01 • RAPID ENTRY',
    badgeTag: 'INSTANT TRACTION',
    title: 'Rapid Audit & Entry',
    headline: 'We Step In Within 24 Hours',
    description:
      'No 3-month onboarding delay. Within 24 hours of connecting, we dive straight into your site, messaging, and funnel to locate exact lost revenue points.',
    annotation: '30-min call • Zero fluff • Immediate clarity',
    accentColor: '#F97316',
    deliverables: [
      '30-minute discovery & bottleneck audit',
      'Locate immediate conversion leaks',
      'Clear, prioritized action plan for launch',
    ],
  },
  {
    id: 'positioning',
    num: '02',
    phaseTime: 'DAYS 02–05 • POSITIONING',
    badgeTag: 'POSITIONED TO WIN',
    title: 'Strategy & Copy',
    headline: 'Define What Makes You Unbeatable',
    description:
      'We craft sharp conversion messaging so potential buyers get your unique value in under 3 seconds and trust your brand immediately.',
    annotation: 'All decisions explained, no black boxes x',
    accentColor: '#FB923C',
    deliverables: [
      'Conversion-focused headline & body copy',
      'Distinct brand voice & market positioning',
      'Frictionless customer navigation roadmap',
    ],
  },
  {
    id: 'build',
    num: '03',
    phaseTime: 'DAYS 06–15 • BUILD SPRINT',
    badgeTag: '99+ SPEED PERFORMANCE',
    title: 'High-Velocity Build',
    headline: 'Production Without The Friction',
    description:
      'Custom, ultra-fast interfaces built in parallel. Up to 2 rounds of rapid collaborative edits ensure absolute perfection before deployment.',
    annotation: 'Up to 2 rounds of rapid collaborative edits',
    accentColor: '#38BDF8',
    deliverables: [
      'Custom modern UI/UX (No templates)',
      'High-speed code with 99+ Google score',
      'CMS integration & automated lead routing',
    ],
  },
  {
    id: 'scale',
    num: '04',
    phaseTime: 'DAY 16+ • LAUNCH & SCALE',
    badgeTag: '+3X GROWTH MULTIPLIER',
    title: 'Launch & Scale',
    headline: 'Go Live & Multiply Revenue',
    description:
      'Zero-downtime deployment with active conversion telemetry, analytics tracking, and continuous revenue tuning for long-term momentum.',
    annotation: 'Turn visitors into long-term revenue',
    accentColor: '#10B981',
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
  
  // Interactive Widget States
  const [scannedLeaksFixed, setScannedLeaksFixed] = useState<boolean>(false);
  const [clarityValue, setClarityValue] = useState<number>(85);
  const [boostedSpeed, setBoostedSpeed] = useState<boolean>(false);
  const [multiplierMode, setMultiplierMode] = useState<boolean>(true);

  const activeStep = simulatorSteps[activeStepIdx];

  return (
    <section
      id="process"
      className={`relative py-12 sm:py-16 transition-colors duration-500 overflow-hidden ${
        isDarkMode ? 'bg-[#0A0A0A] text-white' : 'bg-[#FAF9F6] text-[#111111]'
      }`}
    >
      {/* Background Architectural Grid */}
      <div
        className={`absolute inset-0 bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none ${
          isDarkMode
            ? 'bg-[linear-gradient(to_right,#27272A20_1px,transparent_1px),linear-gradient(to_bottom,#27272A20_1px,transparent_1px)]'
            : 'bg-[linear-gradient(to_right,#E4E4E760_1px,transparent_1px),linear-gradient(to_bottom,#E4E4E760_1px,transparent_1px)]'
        }`}
      />

      {/* Ambient Orange Glow Spotlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-radial from-[#F97316]/15 via-[#FB923C]/5 to-transparent blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 space-y-3"
        >
          <h2
            className={`font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[1.08] ${
              isDarkMode ? 'text-silver-gradient' : 'text-[#111111]'
            }`}
          >
            <span className="block">How We Step In & Get You</span>
            <span className="bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#EA580C] bg-clip-text text-transparent inline-block pb-2 pt-1">
              To The Goal Fast.
            </span>
          </h2>

          <p
            className={`text-base sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto transition-colors duration-500 ${
              isDarkMode ? 'text-[#D4D4D8]' : 'text-[#52525B]'
            }`}
          >
            Test our interactive execution engine below to experience how we eliminate friction and accelerate your launch.
          </p>
        </motion.div>

        {/* KINETIC PHASE SELECTOR BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto mb-6">
          {simulatorSteps.map((step, idx) => {
            const isSelected = idx === activeStepIdx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStepIdx(idx)}
                className={`flex flex-col items-center p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 cursor-pointer text-center relative ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#F97316] via-[#FB923C] to-[#EA580C] text-white border-[#FDBA74] shadow-xl shadow-[#F97316]/30 scale-105'
                    : isDarkMode
                    ? 'bg-[#141417] text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white'
                    : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:text-zinc-900 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-[#F97316]/10 text-[#F97316]'
                    }`}
                  >
                    {step.num}
                  </span>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-tight">
                    {step.phaseTime.split('•')[0]}
                  </span>
                </div>
                <div className="font-display text-xs sm:text-sm font-extrabold tracking-tight">
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* MAIN INTERACTIVE SIMULATOR CANVAS DECK */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.id}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={`max-w-5xl mx-auto rounded-3xl border p-6 sm:p-10 shadow-2xl relative overflow-hidden text-left transition-colors duration-500 ${
              isDarkMode
                ? 'bg-[#141417]/95 border-zinc-800 text-white shadow-black/80'
                : 'bg-white border-zinc-200 text-zinc-900 shadow-xl'
            }`}
          >
            {/* Top Accent Line */}
            <div
              className="absolute top-0 left-0 right-0 h-1.5"
              style={{ backgroundColor: activeStep.accentColor }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* LEFT COLUMN: HUMAN NARRATIVE & DELIVERABLES (6 COLS) */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-mono font-black text-[#F97316]">
                    {activeStep.num}
                  </span>
                  <div className="h-4 w-px bg-zinc-700" />
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
                    {activeStep.phaseTime}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                    {activeStep.headline}
                  </h3>
                  <div className="text-sm font-bold text-[#F97316] mt-1">
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

                {/* Floating Handwritten Callout Note */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F97316]/10 border border-[#F97316]/40 text-xs font-semibold text-[#F97316] shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 shrink-0" />
                  <span>"{activeStep.annotation}"</span>
                </div>

                {/* Key Milestone Bullet Points */}
                <div className="space-y-2.5 pt-2 border-t border-zinc-800/80">
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Key Deliverables:
                  </div>
                  {activeStep.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0" />
                      <span className={isDarkMode ? 'text-zinc-200' : 'text-zinc-800'}>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Switcher Buttons */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() =>
                      setActiveStepIdx(
                        (prev) => (prev - 1 + simulatorSteps.length) % simulatorSteps.length
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
                      setActiveStepIdx((prev) => (prev + 1) % simulatorSteps.length)
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
                </div>
              </div>

              {/* RIGHT COLUMN: LIVE TACTILE SIMULATOR WIDGET (6 COLS) */}
              <div className="lg:col-span-6">
                <div
                  className={`rounded-2xl border p-6 sm:p-7 relative text-left shadow-xl transition-all duration-500 ${
                    isDarkMode
                      ? 'bg-[#0E0E11] border-zinc-800 text-white'
                      : 'bg-zinc-50 border-zinc-200 text-zinc-900'
                  }`}
                >
                  
                  {/* WIDGET 01: RAPID BOTTLENECK SCANNER */}
                  {activeStepIdx === 0 && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                        <div className="flex items-center gap-2">
                          <Search className="w-4 h-4 text-[#F97316]" />
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300">
                            24h Bottleneck Telemetry Audit
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F97316]/10 text-[#F97316] font-bold">
                          LIVE ENGINE
                        </span>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                          <span className="text-zinc-300">Homepage Load Speed</span>
                          <span className={scannedLeaksFixed ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>
                            {scannedLeaksFixed ? '0.4s (Fixed)' : '3.8s (Slow Leak)'}
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-xs p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                          <span className="text-zinc-300">Headline Value Pitch</span>
                          <span className={scannedLeaksFixed ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>
                            {scannedLeaksFixed ? '100% Clear' : 'Vague / Confusing'}
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-xs p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                          <span className="text-zinc-300">Lead Capture Rate</span>
                          <span className={scannedLeaksFixed ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>
                            {scannedLeaksFixed ? '3.8X Conversion' : '1.2% (Dropping)'}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => setScannedLeaksFixed(!scannedLeaksFixed)}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#F97316]/30 hover:scale-[1.02] transition-transform cursor-pointer"
                      >
                        {scannedLeaksFixed ? 'Reset Audit Simulation' : 'Fix Bottlenecks Now'}
                      </button>
                    </div>
                  )}

                  {/* WIDGET 02: POSITIONING CLARITY TUNER */}
                  {activeStepIdx === 1 && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                        <div className="flex items-center gap-2">
                          <Sliders className="w-4 h-4 text-[#FB923C]" />
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300">
                            Brand Positioning Tuner
                          </span>
                        </div>
                        <span className="text-xs font-mono text-[#FB923C] font-bold">
                          {clarityValue}% CLARITY
                        </span>
                      </div>

                      <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2">
                        <div className="text-[11px] font-mono text-zinc-400 uppercase">Live Headline Pitch Output:</div>
                        <div className="text-sm font-bold text-white font-display">
                          {clarityValue > 80
                            ? '"We Build High-Speed Growth Sites That Convert Visitors Into Pipeline."'
                            : '"We offer comprehensive multi-disciplinary creative solutions for brands."'}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between text-[11px] text-zinc-400 font-mono">
                          <span>Generic Noise</span>
                          <span>Unbeatable Position</span>
                        </div>
                        <input
                          type="range"
                          min="30"
                          max="100"
                          value={clarityValue}
                          onChange={(e) => setClarityValue(Number(e.target.value))}
                          className="w-full accent-[#FB923C] cursor-pointer"
                        />
                      </div>
                    </div>
                  )}

                  {/* WIDGET 03: HIGH-SPEED ACCELERATION GAUGE */}
                  {activeStepIdx === 2 && (
                    <div className="space-y-4 text-center">
                      <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                        <div className="flex items-center gap-2">
                          <Gauge className="w-4 h-4 text-[#38BDF8]" />
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300">
                            Google Performance Telemetry
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#38BDF8]/10 text-[#38BDF8] font-bold">
                          {boostedSpeed ? '99/100 SPEED' : '45/100 SLOW'}
                        </span>
                      </div>

                      <div className="py-4 flex flex-col items-center justify-center">
                        <div className="text-5xl font-black font-mono tracking-tight text-[#38BDF8]">
                          {boostedSpeed ? '99 / 100' : '45 / 100'}
                        </div>
                        <div className="text-xs font-bold text-zinc-400 mt-1 uppercase tracking-wider">
                          {boostedSpeed ? 'Ultra-Fast Lighthouse Score' : 'Unoptimized Template Speed'}
                        </div>
                      </div>

                      <button
                        onClick={() => setBoostedSpeed(!boostedSpeed)}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#0284C7] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#38BDF8]/30 hover:scale-[1.02] transition-transform cursor-pointer"
                      >
                        {boostedSpeed ? 'Reset Speed Score' : 'Engage 99+ Speed Acceleration'}
                      </button>
                    </div>
                  )}

                  {/* WIDGET 04: REVENUE MULTIPLIER TRAJECTORY */}
                  {activeStepIdx === 3 && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                        <div className="flex items-center gap-2">
                          <Activity className="w-4 h-4 text-[#10B981]" />
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300">
                            Revenue Pipeline Multiplier
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold">
                          {multiplierMode ? '+3.4X MULTIPLIER' : '1.0X BASELINE'}
                        </span>
                      </div>

                      <div className="h-28 flex items-end justify-around p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                        <div className="w-10 bg-zinc-700 rounded-t-md h-1/3 text-[10px] text-center font-mono text-zinc-300">M1</div>
                        <div className="w-10 bg-zinc-600 rounded-t-md h-1/2 text-[10px] text-center font-mono text-zinc-300">M2</div>
                        <div
                          className="w-10 rounded-t-md transition-all duration-500 text-[10px] text-center font-mono font-bold text-white flex items-center justify-center"
                          style={{
                            height: multiplierMode ? '90%' : '40%',
                            backgroundColor: multiplierMode ? '#10B981' : '#52525B',
                          }}
                        >
                          {multiplierMode ? '3.4X' : '1.2X'}
                        </div>
                      </div>

                      <button
                        onClick={() => setMultiplierMode(!multiplierMode)}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-[#10B981] to-[#059669] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-emerald-500/30 hover:scale-[1.02] transition-transform cursor-pointer"
                      >
                        {multiplierMode ? 'Show Baseline Growth' : 'Engage Roos Growth Multiplier'}
                      </button>
                    </div>
                  )}

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
            className="mt-8 sm:mt-10 flex flex-col items-center justify-center text-center space-y-4"
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
