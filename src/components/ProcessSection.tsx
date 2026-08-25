import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Target, Pencil, Code, TrendingUp, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface ProcessSectionProps {
  onOpenInquiry?: () => void;
  isDarkMode?: boolean;
}

interface StepCard {
  id: string;
  num: string;
  title: string;
  tagline: string;
  icon: any;
  headline: string;
  description: string;
  deliverables: string[];
}

const process5StepCards: StepCard[] = [
  {
    id: 'discover',
    num: '01',
    title: 'Discover',
    tagline: 'Uncover opportunities.',
    icon: Search,
    headline: '01. Research & Strategic Audit',
    description: 'We analyze your target market, buyer friction points, and competitor blind spots to locate immediate growth levers.',
    deliverables: [
      '30-minute discovery & bottleneck audit',
      'Locate immediate conversion leaks',
      'Clear, prioritized action plan for launch',
    ],
  },
  {
    id: 'define',
    num: '02',
    title: 'Define',
    tagline: 'Create the blueprint.',
    icon: Target,
    headline: '02. Positioning & Copy Strategy',
    description: 'We craft sharp positioning headlines and value props so potential buyers grasp your unique advantage in under 3 seconds.',
    deliverables: [
      'Conversion-focused headline & body copy',
      'Distinct brand voice & market positioning',
      'Frictionless customer navigation roadmap',
    ],
  },
  {
    id: 'design',
    num: '03',
    title: 'Design',
    tagline: 'Craft the experience.',
    icon: Pencil,
    headline: '03. Meticulous UI/UX Systems',
    description: 'Bespoke design tokens, interactive prototypes, and pixel-perfect responsive layouts built for maximum conversion momentum.',
    deliverables: [
      'Custom modern UI/UX design (No templates)',
      'Interactive Figma prototype',
      'Design token system & responsive layout',
    ],
  },
  {
    id: 'build',
    num: '04',
    title: 'Build',
    tagline: 'Engineer the system.',
    icon: Code,
    headline: '04. High-Velocity Code Sprint',
    description: 'Bespoke React codebase engineered in parallel with Lighthouse 100/100 performance baseline and zero template bloat.',
    deliverables: [
      'High-speed code with 99+ Google score',
      'CMS integration & automated lead routing',
      'Zero-latency edge CDN deployment',
    ],
  },
  {
    id: 'accelerate',
    num: '05',
    title: 'Accelerate',
    tagline: 'Scale the momentum.',
    icon: TrendingUp,
    headline: '05. Rollout & Growth Tuning',
    description: 'Continuous conversion rate telemetry monitoring, live A/B split testing, and revenue tuning for compounding momentum.',
    deliverables: [
      'Zero-downtime deployment & DNS handoff',
      'Active conversion tracking & lead analytics',
      'Ongoing speed & conversion optimization',
    ],
  },
];

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  onOpenInquiry,
  isDarkMode = true,
}) => {
  const [activeCardId, setActiveCardId] = useState<string>('discover');
  const activeStep = process5StepCards.find((c) => c.id === activeCardId) || process5StepCards[0];

  return (
    <section
      id="process"
      className={`relative pt-12 sm:pt-16 pb-20 sm:pb-24 transition-colors duration-500 overflow-hidden ${
        isDarkMode ? 'bg-[#050505] text-white' : 'bg-[#FAF9F6] text-[#111111]'
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
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-radial from-[#FF7A1A]/18 via-[#FF7A1A]/4 to-transparent blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* HEADER BLOCK (CENTERED TOP TITLE) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3 max-w-4xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest">
            <span className="w-8 h-px bg-[#FF7A1A]/60" />
            <span>OUR 5-PHASE</span>
            <span className="w-8 h-px bg-[#FF7A1A]/60" />
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08]">
            <span className="text-white">Execution </span>
            <span className="text-[#FF7A1A]">Methodology</span>
          </h2>

          <p className="text-base sm:text-xl font-medium text-zinc-400">
            Built For High-Velocity Growth
          </p>
        </motion.div>

        {/* 2-COLUMN SIDE-BY-SIDE LAYOUT: LEFT STACKED CARDS | RIGHT EXPANDED CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-7xl mx-auto">
          
          {/* LEFT COLUMN: LEFT-ALIGNED COMPACT 3D OVERLAPPING CARDS */}
          <div className="lg:col-span-5 relative min-h-[380px] sm:min-h-[400px] flex items-center justify-start py-2 select-none overflow-x-auto sm:overflow-visible">
            <div className="relative w-full h-[350px] flex items-center justify-start">
              {process5StepCards.map((card, idx) => {
                const isActive = card.id === activeCardId;
                const IconComp = card.icon;
                const activeIdx = process5StepCards.findIndex((c) => c.id === activeCardId);
                const offsetFromActive = idx - activeIdx;

                return (
                  <motion.div
                    key={card.id}
                    onClick={() => setActiveCardId(card.id)}
                    animate={{
                      x: idx * (window.innerWidth > 640 ? 68 : 52),
                      y: isActive ? -8 : Math.abs(idx) * 2,
                      scale: isActive ? 1.04 : 0.96,
                      zIndex: isActive ? 50 : 30 - Math.abs(offsetFromActive),
                    }}
                    transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                    className={`w-44 sm:w-48 h-[310px] sm:h-[330px] rounded-2xl p-4 border text-left cursor-pointer transition-all duration-300 shadow-2xl backdrop-blur-xl flex flex-col justify-between absolute left-0 ${
                      isActive
                        ? 'bg-[#121215] text-white border-[#FF7A1A] ring-2 ring-[#FF7A1A]/40 shadow-[0_15px_40px_rgba(255,122,26,0.35)]'
                        : 'bg-[#0A0A0C] text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white'
                    }`}
                  >
                    {/* Top Step Number */}
                    <div className="space-y-1">
                      <div
                        className={`text-lg sm:text-xl font-mono font-extrabold transition-colors ${
                          isActive ? 'text-[#FF7A1A]' : 'text-zinc-500'
                        }`}
                      >
                        {card.num}
                      </div>
                      <div
                        className={`w-5 h-0.5 rounded-full transition-colors ${
                          isActive ? 'bg-[#FF7A1A]' : 'bg-zinc-700'
                        }`}
                      />
                    </div>

                    {/* Icon Center */}
                    <div className="my-auto py-2 flex justify-start">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                          isActive
                            ? 'bg-[#FF7A1A]/10 border border-[#FF7A1A]/40 text-[#FF7A1A] scale-110 shadow-md shadow-[#FF7A1A]/20'
                            : 'bg-zinc-900 border border-zinc-800 text-zinc-400'
                        }`}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <div className="space-y-0.5 pt-1.5 border-t border-zinc-800/80">
                      <h3
                        className={`font-display text-base sm:text-lg font-extrabold transition-colors ${
                          isActive ? 'text-white' : 'text-zinc-300'
                        }`}
                      >
                        {card.title}
                      </h3>
                      <p className="text-[11px] text-zinc-400 leading-tight font-medium line-clamp-2">
                        {card.tagline}
                      </p>
                    </div>

                    {/* Bottom Micro Indicator Dot Bar */}
                    <div className="pt-2 flex items-center gap-1">
                      <div
                        className={`h-0.5 rounded-full transition-all ${
                          isActive ? 'w-3 bg-[#FF7A1A]' : 'w-1.5 bg-zinc-700'
                        }`}
                      />
                      <div
                        className={`w-1 h-1 rounded-full ${
                          isActive ? 'bg-[#FF7A1A]' : 'bg-zinc-700'
                        }`}
                      />
                      <div className="w-1 h-1 rounded-full bg-zinc-700" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: ACTIVE CARD EXPANDED CONTENT DISPLAY */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="w-full p-6 sm:p-8 rounded-3xl bg-[#0C0C0C] border border-[#FF7A1A]/40 text-left space-y-6 shadow-2xl relative overflow-hidden h-full flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF7A1A] via-[#FF944D] to-[#EA580C]" />

                {/* Header Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-3 border-b border-zinc-800 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-mono font-black text-[#FF7A1A]">
                        {activeStep.num}
                      </span>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-[#FF7A1A] uppercase tracking-wider">
                          PHASE {activeStep.num} • {activeStep.title.toUpperCase()}
                        </span>
                        <h4 className="font-display text-2xl font-bold text-white">
                          {activeStep.headline}
                        </h4>
                      </div>
                    </div>

                    <button
                      onClick={onOpenInquiry}
                      className="px-4 py-2 rounded-full bg-[#FF7A1A] text-white text-xs font-mono font-bold flex items-center gap-2 hover:bg-[#EA580C] transition-all shadow-lg shadow-[#FF7A1A]/30 cursor-pointer"
                    >
                      <span>Book Phase Audit</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {activeStep.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider">
                    STAGE DELIVERABLES & OUTCOMES:
                  </span>
                  <div className="space-y-2.5">
                    {activeStep.deliverables.map((item, dIdx) => (
                      <div
                        key={dIdx}
                        className="p-3.5 rounded-2xl bg-[#050505] border border-zinc-800 text-xs sm:text-sm font-semibold text-zinc-200 flex items-center gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#FF7A1A] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* INSTRUCTION FOOTER CAPSULE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pt-2 flex justify-center text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#121215]/90 border border-[#FF7A1A]/40 text-xs sm:text-sm font-mono font-bold text-zinc-200 backdrop-blur-xl shadow-xl shadow-[#FF7A1A]/10 group hover:border-[#FF7A1A] transition-all">
            <Sparkles className="w-4 h-4 text-[#FF7A1A] animate-pulse shrink-0" />
            <span className="tracking-wide">
              Click any left-stacked card to reveal its detailed execution deliverables on the right.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
