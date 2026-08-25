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
  Layers,
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
  jitterRotate: number;
  jitterY: number;
  spreadX: number;
  spreadY: number;
  spreadRotate: number;
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
    jitterRotate: -4,
    jitterY: -8,
    spreadX: -260,
    spreadY: 10,
    spreadRotate: -8,
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
    annotation: 'All decisions explained, no black boxes',
    accentColor: '#FB923C',
    deliverables: [
      'Conversion-focused headline & body copy',
      'Distinct brand voice & market positioning',
      'Frictionless customer navigation roadmap',
    ],
    jitterRotate: 2,
    jitterY: -4,
    spreadX: -80,
    spreadY: -5,
    spreadRotate: -2,
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
    jitterRotate: -2,
    jitterY: 4,
    spreadX: 100,
    spreadY: 5,
    spreadRotate: 3,
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
    jitterRotate: 4,
    jitterY: 8,
    spreadX: 270,
    spreadY: -10,
    spreadRotate: 8,
  },
];

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  onOpenInquiry,
  isDarkMode = false,
}) => {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);
  const [isStackedFannedOut, setIsStackedFannedOut] = useState<boolean>(false);
  
  // Interactive Widget States
  const [scannedLeaksFixed, setScannedLeaksFixed] = useState<boolean>(false);
  const [clarityValue, setClarityValue] = useState<number>(85);
  const [boostedSpeed, setBoostedSpeed] = useState<boolean>(false);
  const [multiplierMode, setMultiplierMode] = useState<boolean>(true);

  const activeStep = simulatorSteps[activeStepIdx];

  return (
    <section
      id="process"
      className={`relative py-16 sm:py-24 transition-colors duration-500 overflow-hidden ${
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* HEADER BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F97316]/10 border border-[#F97316]/30 text-xs font-mono font-bold text-[#F97316] uppercase tracking-widest backdrop-blur-md">
            <Layers className="w-3.5 h-3.5" />
            <span>INTERACTIVE TEAM-STACK PROCESS DECK</span>
          </div>

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
            className={`text-base sm:text-xl font-medium leading-relaxed max-w-3xl mx-auto transition-colors duration-500 ${
              isDarkMode ? 'text-[#D4D4D8]' : 'text-[#52525B]'
            }`}
          >
            Hover or tap the fanned-out deck below to inspect each stage of our high-velocity execution framework.
          </p>
        </motion.div>

        {/* TEAM-STACK FAN-OUT PROCESS CARDS DECK (UNLUMEN TEAM-STACK ANIMATION) */}
        <div
          onMouseEnter={() => setIsStackedFannedOut(true)}
          onMouseLeave={() => setIsStackedFannedOut(false)}
          className="relative min-h-[160px] sm:min-h-[200px] max-w-5xl mx-auto flex items-center justify-center py-6 cursor-pointer"
        >
          {simulatorSteps.map((step, idx) => {
            const isSelected = idx === activeStepIdx;

            return (
              <motion.button
                key={step.id}
                onClick={() => {
                  setActiveStepIdx(idx);
                  setIsStackedFannedOut(true);
                }}
                animate={
                  isStackedFannedOut
                    ? {
                        x: window.innerWidth > 768 ? step.spreadX : (idx - 1.5) * 80,
                        y: step.spreadY,
                        rotate: step.spreadRotate,
                        scale: isSelected ? 1.06 : 0.96,
                        zIndex: isSelected ? 40 : 20 - idx,
                      }
                    : {
                        x: (idx - 1.5) * 18,
                        y: step.jitterY,
                        rotate: step.jitterRotate,
                        scale: isSelected ? 1.04 : 0.96,
                        zIndex: isSelected ? 40 : 20 - idx,
                      }
                }
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className={`absolute p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 w-56 sm:w-64 shadow-xl backdrop-blur-xl ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#18181B] to-[#09090B] border-[#F97316] text-white shadow-[#F97316]/30 ring-2 ring-[#F97316]/40'
                    : isDarkMode
                    ? 'bg-[#141417]/90 text-zinc-300 border-zinc-800 hover:border-zinc-700'
                    : 'bg-white/95 text-zinc-800 border-zinc-200 shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                      isSelected ? 'bg-[#F97316] text-white' : 'bg-[#F97316]/10 text-[#F97316]'
                    }`}
                  >
                    {step.num}
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase text-zinc-400">
                    {step.phaseTime.split('•')[0]}
                  </span>
                </div>

                <div className="font-display text-sm sm:text-base font-extrabold tracking-tight mb-1 text-white">
                  {step.title}
                </div>

                <div className="text-[11px] font-mono text-zinc-400 line-clamp-1 mb-3">
                  {step.headline}
                </div>

                {/* Animated Spring CTA Pill */}
                <div className="pt-1 flex items-center justify-between border-t border-zinc-800/80">
                  <span className="text-[10px] font-mono font-bold text-[#F97316] uppercase">
                    {isSelected ? 'ACTIVE PHASE' : 'INSPECT PHASE →'}
                  </span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 text-[#F97316] transition-transform ${
                      isSelected ? 'translate-x-1' : ''
                    }`}
                  />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* MAIN ACTIVE STEP CANVAS DECK */}
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

                  <span className="text-xs font-mono text-zinc-400">
                    Step {activeStepIdx + 1} of {simulatorSteps.length}
                  </span>
                </div>
              </div>

              {/* RIGHT COLUMN: INTERACTIVE ENGINE CANVAS (6 COLS) */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-zinc-800 bg-[#09090B] p-5 sm:p-6 shadow-2xl relative space-y-4">
                  
                  {/* STEP 01 WIDGET: 24H BOTTLENECK TELEMETRY AUDIT */}
                  {activeStep.id === 'entry' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                        <div className="flex items-center gap-2">
                          <Search className="w-4 h-4 text-[#F97316]" />
                          <span className="text-xs font-mono font-bold text-white uppercase">24H BOTTLENECK TELEMETRY AUDIT</span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F97316]/20 text-[#F97316] font-bold">LIVE ENGINE</span>
                      </div>

                      <div className="space-y-2.5 font-mono text-xs">
                        <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 flex justify-between items-center">
                          <span className="text-zinc-400">Homepage Load Speed</span>
                          <span className={scannedLeaksFixed ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>
                            {scannedLeaksFixed ? '0.48s (Instant baseline)' : '3.8s (Slow Leak)'}
                          </span>
                        </div>
                        <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 flex justify-between items-center">
                          <span className="text-zinc-400">Headline Value Pitch</span>
                          <span className={scannedLeaksFixed ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>
                            {scannedLeaksFixed ? '100% Unbeatable Clarity' : 'Vague / Confusing'}
                          </span>
                        </div>
                        <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 flex justify-between items-center">
                          <span className="text-zinc-400">Lead Capture Rate</span>
                          <span className={scannedLeaksFixed ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>
                            {scannedLeaksFixed ? '7.9% (+340% Lift)' : '1.2% (Dropping)'}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => setScannedLeaksFixed(!scannedLeaksFixed)}
                        className="w-full py-3 rounded-xl bg-[#F97316] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#EA580C] transition-all cursor-pointer shadow-lg shadow-[#F97316]/30"
                      >
                        {scannedLeaksFixed ? '✓ BOTTLENECKS ELIMINATED' : 'FIX BOTTLENECKS NOW'}
                      </button>
                    </div>
                  )}

                  {/* STEP 02 WIDGET: VALUE PROPOSITION CLARITY METER */}
                  {activeStep.id === 'positioning' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                        <div className="flex items-center gap-2">
                          <Sliders className="w-4 h-4 text-[#FB923C]" />
                          <span className="text-xs font-mono font-bold text-white uppercase">MESSAGING CLARITY TELEMETRY</span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FB923C]/20 text-[#FB923C] font-bold">3 SEC RULE</span>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-zinc-400">Buyer Attention Clarity:</span>
                          <span className="text-[#FB923C] font-bold">{clarityValue}%</span>
                        </div>

                        <input
                          type="range"
                          min="30"
                          max="100"
                          value={clarityValue}
                          onChange={(e) => setClarityValue(parseInt(e.target.value))}
                          className="w-full accent-[#FB923C] cursor-pointer"
                        />

                        <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300">
                          {clarityValue > 80 ? (
                            <span className="text-emerald-400 font-bold">✓ High Conversion Pitch: Prospects instantly grasp your market advantage in 3 seconds.</span>
                          ) : (
                            <span className="text-amber-400">× Generic Noise: Potential buyers leave because your positioning sounds like everyone else.</span>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 03 WIDGET: LIGHTHOUSE 99+ SPEED BOOST */}
                  {activeStep.id === 'build' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                        <div className="flex items-center gap-2">
                          <Gauge className="w-4 h-4 text-[#38BDF8]" />
                          <span className="text-xs font-mono font-bold text-white uppercase">LIGHTHOUSE SPEED ENGINE</span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#38BDF8]/20 text-[#38BDF8] font-bold">REACT CODE</span>
                      </div>

                      <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-2 text-xs font-mono">
                        <div className="flex justify-between">
                          <span className="text-zinc-400">Performance Score</span>
                          <span className={boostedSpeed ? 'text-emerald-400 font-bold' : 'text-zinc-300'}>
                            {boostedSpeed ? '100 / 100' : '62 / 100'}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-400">First Contentful Paint</span>
                          <span className={boostedSpeed ? 'text-emerald-400 font-bold' : 'text-zinc-300'}>
                            {boostedSpeed ? '0.3s' : '2.1s'}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => setBoostedSpeed(!boostedSpeed)}
                        className="w-full py-3 rounded-xl bg-[#38BDF8] text-zinc-950 font-mono text-xs font-bold uppercase tracking-wider hover:bg-sky-400 transition-all cursor-pointer shadow-lg shadow-[#38BDF8]/30"
                      >
                        {boostedSpeed ? '✓ LIGHTHOUSE 100/100 ACTIVE' : 'OPTIMIZE SPEED ENGINE'}
                      </button>
                    </div>
                  )}

                  {/* STEP 04 WIDGET: REVENUE SCALE TELEMETRY */}
                  {activeStep.id === 'scale' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                        <div className="flex items-center gap-2">
                          <Activity className="w-4 h-4 text-[#10B981]" />
                          <span className="text-xs font-mono font-bold text-white uppercase">REVENUE SCALE TELEMETRY</span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#10B981]/20 text-[#10B981] font-bold">4.8X ROAS</span>
                      </div>

                      <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-2 text-xs font-mono text-zinc-300">
                        <div className="flex justify-between">
                          <span>Monthly Inbound Pipeline:</span>
                          <span className="text-[#10B981] font-bold">{multiplierMode ? '$142,500' : '$28,000'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Conversion Rate:</span>
                          <span className="text-[#10B981] font-bold">{multiplierMode ? '7.9%' : '1.8%'}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => setMultiplierMode(!multiplierMode)}
                        className="w-full py-3 rounded-xl bg-[#10B981] text-zinc-950 font-mono text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 transition-all cursor-pointer shadow-lg shadow-[#10B981]/30"
                      >
                        {multiplierMode ? '✓ 4.8X MULTIPLIER ACTIVE' : 'ENABLE REVENUE MULTIPLIER'}
                      </button>
                    </div>
                  )}

                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* BOTTOM ACTION CTA */}
        <div className="pt-4 text-center">
          <AlphaRoosButton
            text="Get Your Free Growth Audit"
            onClick={() => onOpenInquiry?.()}
            isDarkMode={isDarkMode}
          />
        </div>

      </div>
    </section>
  );
};
