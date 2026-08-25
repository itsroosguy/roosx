import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Target, Pencil, Code, TrendingUp, CheckCircle2, ArrowRight, Sparkles, Flame } from 'lucide-react';

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
  color: string;
  glow: string;
  borderClass: string;
  ringClass: string;
  bgBadgeClass: string;
  gradientClass: string;
}

const process5StepCards: StepCard[] = [
  {
    id: 'discover',
    num: '01',
    title: 'Discover',
    tagline: 'Uncover opportunities.',
    icon: Search,
    headline: 'Research & Strategic Audit',
    description: 'We analyze your target market, buyer friction points, and competitor blind spots to locate immediate growth levers.',
    deliverables: [
      '30-minute discovery & bottleneck audit',
      'Locate immediate conversion leaks',
      'Clear, prioritized action plan for launch',
    ],
    color: '#EF4444',
    glow: 'rgba(239, 68, 68, 0.35)',
    borderClass: 'border-red-500/90',
    ringClass: 'ring-2 ring-red-500/40',
    bgBadgeClass: 'bg-red-500/20 text-red-400 border-red-500/50',
    gradientClass: 'from-red-500 to-rose-600',
  },
  {
    id: 'define',
    num: '02',
    title: 'Define',
    tagline: 'Create the blueprint.',
    icon: Target,
    headline: 'Positioning & Copy Strategy',
    description: 'We craft sharp positioning headlines and value props so potential buyers grasp your unique advantage in under 3 seconds.',
    deliverables: [
      'Conversion-focused headline & body copy',
      'Distinct brand voice & market positioning',
      'Frictionless customer navigation roadmap',
    ],
    color: '#10B981',
    glow: 'rgba(16, 185, 129, 0.35)',
    borderClass: 'border-emerald-500/90',
    ringClass: 'ring-2 ring-emerald-500/40',
    bgBadgeClass: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50',
    gradientClass: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'design',
    num: '03',
    title: 'Design',
    tagline: 'Craft the experience.',
    icon: Pencil,
    headline: 'Meticulous UI/UX Systems',
    description: 'Bespoke design tokens, interactive prototypes, and pixel-perfect responsive layouts built for maximum conversion momentum.',
    deliverables: [
      'Custom modern UI/UX design (No templates)',
      'Interactive Figma prototype',
      'Design token system & responsive layout',
    ],
    color: '#3B82F6',
    glow: 'rgba(59, 130, 246, 0.35)',
    borderClass: 'border-blue-500/90',
    ringClass: 'ring-2 ring-blue-500/40',
    bgBadgeClass: 'bg-blue-500/20 text-blue-400 border-blue-500/50',
    gradientClass: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'build',
    num: '04',
    title: 'Build',
    tagline: 'Engineer the system.',
    icon: Code,
    headline: 'High-Velocity Code Sprint',
    description: 'Bespoke React codebase engineered in parallel with Lighthouse 100/100 performance baseline and zero template bloat.',
    deliverables: [
      'High-speed code with 99+ Google score',
      'CMS integration & automated lead routing',
      'Zero-latency edge CDN deployment',
    ],
    color: '#FF7A1A',
    glow: 'rgba(255, 122, 26, 0.35)',
    borderClass: 'border-[#FF7A1A]',
    ringClass: 'ring-2 ring-[#FF7A1A]/40',
    bgBadgeClass: 'bg-[#FF7A1A]/20 text-[#FF7A1A] border-[#FF7A1A]/50',
    gradientClass: 'from-[#FF7A1A] to-[#EA580C]',
  },
  {
    id: 'accelerate',
    num: '05',
    title: 'Accelerate',
    tagline: 'Scale the momentum.',
    icon: TrendingUp,
    headline: 'Rollout & Growth Tuning',
    description: 'Continuous conversion rate telemetry monitoring, live A/B split testing, and revenue tuning for compounding momentum.',
    deliverables: [
      'Zero-downtime deployment & DNS handoff',
      'Active conversion tracking & lead analytics',
      'Ongoing speed & conversion optimization',
    ],
    color: '#A855F7',
    glow: 'rgba(168, 85, 247, 0.35)',
    borderClass: 'border-purple-500/90',
    ringClass: 'ring-2 ring-purple-500/40',
    bgBadgeClass: 'bg-purple-500/20 text-purple-400 border-purple-500/50',
    gradientClass: 'from-purple-500 to-violet-600',
  },
];

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  onOpenInquiry,
  isDarkMode = true,
}) => {
  const [activeCardId, setActiveCardId] = useState<string>('discover');
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
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

      {/* Dynamic Colored Spotlight following Active Card */}
      <motion.div
        animate={{
          x: process5StepCards.findIndex((c) => c.id === activeCardId) * 80 - 160,
        }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        style={{
          background: `radial-gradient(circle, ${activeStep.glow} 0%, transparent 70%)`,
        }}
        className="absolute top-1/3 left-1/2 w-[800px] h-[450px] blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* HEADER BLOCK */}
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

        {/* 60% LEFT | 40% RIGHT SPLIT CONTAINER */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 max-w-7xl mx-auto">
          
          {/* 60% LEFT COLUMN: PROPERLY ALIGNED UNIQUE COLORFUL 5-CARD STACK */}
          <div className="w-full lg:w-[60%] relative min-h-[380px] sm:min-h-[410px] flex items-center justify-start py-2 select-none overflow-x-auto sm:overflow-visible">
            <div className="relative w-full h-[350px] flex items-center justify-start">
              {process5StepCards.map((card, idx) => {
                const isActive = card.id === activeCardId;
                const isHovered = card.id === hoveredCardId;
                const IconComp = card.icon;
                const activeIdx = process5StepCards.findIndex((c) => c.id === activeCardId);
                const offsetFromActive = idx - activeIdx;

                return (
                  <motion.div
                    key={card.id}
                    onClick={() => setActiveCardId(card.id)}
                    onMouseEnter={() => setHoveredCardId(card.id)}
                    onMouseLeave={() => setHoveredCardId(null)}
                    animate={{
                      x: idx * (window.innerWidth > 640 ? 84 : 58),
                      y: isActive ? -14 : isHovered ? -6 : Math.abs(idx) * 2,
                      scale: isActive ? 1.05 : isHovered ? 1.02 : 0.96,
                      rotate: isActive ? 0 : (idx - 2) * 1.5,
                      zIndex: isActive ? 50 : isHovered ? 45 : 30 - Math.abs(offsetFromActive),
                    }}
                    transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                    whileHover={{ y: -8 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      boxShadow: isActive ? `0 20px 50px ${card.glow}` : 'none',
                    }}
                    className={`w-48 sm:w-56 h-[320px] sm:h-[340px] rounded-3xl p-5 border text-left cursor-pointer transition-all duration-300 backdrop-blur-xl flex flex-col justify-between absolute left-0 ${
                      isActive
                        ? `bg-[#141417] text-white ${card.borderClass} ${card.ringClass}`
                        : isHovered
                        ? 'bg-[#101014] text-white border-zinc-700 shadow-xl'
                        : 'bg-[#0A0A0C] text-zinc-400 border-zinc-800/80 hover:text-white'
                    }`}
                  >
                    {/* Top Step Number + Active Colored Badge */}
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div
                          style={{ color: isActive ? card.color : '#71717A' }}
                          className="text-xl sm:text-2xl font-mono font-extrabold transition-colors"
                        >
                          {card.num}
                        </div>
                        <div
                          style={{ backgroundColor: isActive ? card.color : '#3F3F46' }}
                          className="h-0.5 rounded-full transition-all w-6"
                        />
                      </div>

                      {isActive && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className={`px-2 py-0.5 rounded-full border text-[10px] font-mono font-bold flex items-center gap-1 ${card.bgBadgeClass}`}
                        >
                          <Flame className="w-3 h-3 animate-bounce" />
                          <span>ACTIVE</span>
                        </motion.div>
                      )}
                    </div>

                    {/* Colored Icon Center */}
                    <div className="my-auto py-2 flex justify-start">
                      <motion.div
                        animate={isActive ? { rotate: [0, -8, 8, 0], scale: [1, 1.15, 1] } : {}}
                        transition={{ duration: 0.5 }}
                        style={{
                          backgroundColor: isActive ? `${card.color}18` : '#18181B',
                          borderColor: isActive ? `${card.color}60` : '#27272A',
                          color: isActive ? card.color : '#A1A1AA',
                        }}
                        className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-all shadow-md"
                      >
                        <IconComp className="w-6 h-6" />
                      </motion.div>
                    </div>

                    {/* Title & Tagline */}
                    <div className="space-y-0.5 pt-2 border-t border-zinc-800/80">
                      <h3
                        className={`font-display text-lg sm:text-xl font-extrabold transition-colors ${
                          isActive ? 'text-white' : 'text-zinc-300'
                        }`}
                      >
                        {card.title}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-tight font-medium line-clamp-2">
                        {card.tagline}
                      </p>
                    </div>

                    {/* Bottom Micro Indicator Dot Bar */}
                    <div className="pt-2 flex items-center gap-1.5">
                      <div
                        style={{ backgroundColor: isActive ? card.color : '#3F3F46' }}
                        className={`h-0.5 rounded-full transition-all ${
                          isActive ? 'w-4' : 'w-2'
                        }`}
                      />
                      <div
                        style={{ backgroundColor: isActive ? card.color : '#3F3F46' }}
                        className="w-1 h-1 rounded-full"
                      />
                      <div className="w-1 h-1 rounded-full bg-zinc-700" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* 40% RIGHT COLUMN: CLEAN HEADLINE & DELIVERABLES (NO REPEATED DUP TAGS) */}
          <div className="w-full lg:w-[40%] flex flex-col justify-center text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                initial={{ opacity: 0, x: 30, filter: 'blur(8px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -30, filter: 'blur(8px)' }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6 py-2"
              >
                {/* Clean Stage Headline */}
                <div className="space-y-2">
                  <h3 className="font-display text-2xl sm:text-3xl font-black text-white leading-tight">
                    {activeStep.headline}
                  </h3>

                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed pt-1">
                    {activeStep.description}
                  </p>
                </div>

                {/* Staggered Deliverables Checklist with Active Color Accent */}
                <div className="space-y-3 pt-1">
                  <div
                    style={{ color: activeStep.color }}
                    className="text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 animate-pulse" />
                    <span>STAGE DELIVERABLES & OUTCOMES</span>
                  </div>

                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: { transition: { staggerChildren: 0.08 } },
                      hidden: {},
                    }}
                    className="space-y-2.5"
                  >
                    {activeStep.deliverables.map((item, dIdx) => (
                      <motion.div
                        key={dIdx}
                        variants={{
                          hidden: { opacity: 0, x: 20 },
                          visible: { opacity: 1, x: 0 },
                        }}
                        className="p-3.5 rounded-2xl bg-[#0B0B0E]/80 border border-zinc-800/90 text-xs sm:text-sm font-semibold text-zinc-200 flex items-center gap-3 shadow-md hover:border-zinc-700 transition-colors"
                      >
                        <CheckCircle2
                          style={{ color: activeStep.color }}
                          className="w-4.5 h-4.5 shrink-0"
                        />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Action CTA Button with Active Gradient Color */}
                <div className="pt-2">
                  <button
                    onClick={onOpenInquiry}
                    style={{
                      boxShadow: `0 10px 30px ${activeStep.glow}`,
                    }}
                    className={`w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r ${activeStep.gradientClass} text-white text-xs font-mono font-bold flex items-center justify-center gap-2.5 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-lg`}
                  >
                    <span>Book Phase {activeStep.num} Audit</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
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
              Click any left-stacked card to inspect its unique colorful deliverables on the right.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
