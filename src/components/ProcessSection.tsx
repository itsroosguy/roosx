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
  color: string;
  glowColor: string;
  borderColor: string;
}

const process5StepCards: StepCard[] = [
  {
    id: 'discover',
    num: '01',
    title: 'Discover',
    tagline: 'Uncover opportunities & market bottlenecks.',
    icon: Search,
    headline: 'Research & Strategic Audit',
    description: 'We analyze your target market, buyer friction points, and competitor blind spots to locate immediate growth levers.',
    deliverables: [
      '30-min bottleneck discovery audit',
      'Conversion friction roadmap',
      'Prioritized growth action plan',
    ],
    color: '#EF4444', // Red Accent
    glowColor: 'rgba(239, 68, 68, 0.35)',
    borderColor: 'border-red-500/70',
  },
  {
    id: 'define',
    num: '02',
    title: 'Define',
    tagline: 'Create the blueprint for brand authority.',
    icon: Target,
    headline: 'Positioning & Copy Strategy',
    description: 'We craft sharp positioning headlines and value props so potential buyers grasp your unique advantage in under 3 seconds.',
    deliverables: [
      'Conversion-focused value props',
      'Distinct brand voice guidelines',
      'Frictionless user flow roadmap',
    ],
    color: '#22C55E', // Green Accent
    glowColor: 'rgba(34, 197, 94, 0.35)',
    borderColor: 'border-emerald-500/70',
  },
  {
    id: 'design',
    num: '03',
    title: 'Design',
    tagline: 'Craft the digital experience to convert.',
    icon: Pencil,
    headline: 'Meticulous UI/UX Systems',
    description: 'Bespoke design tokens, interactive prototypes, and pixel-perfect responsive layouts built for maximum conversion momentum.',
    deliverables: [
      'Bespoke modern UI/UX design',
      'Interactive Figma prototype',
      'Scalable design token system',
    ],
    color: '#A855F7', // Purple Accent
    glowColor: 'rgba(168, 85, 247, 0.35)',
    borderColor: 'border-purple-500/70',
  },
  {
    id: 'build',
    num: '04',
    title: 'Build',
    tagline: 'Engineer the high-velocity system.',
    icon: Code,
    headline: 'High-Velocity Code Sprint',
    description: 'Bespoke React codebase engineered in parallel with Lighthouse 100/100 performance baseline and zero template bloat.',
    deliverables: [
      'Bespoke React 99+ speed engine',
      'Automated CRM webhook integration',
      'Zero-latency edge CDN deploy',
    ],
    color: '#3B82F6', // Blue Accent
    glowColor: 'rgba(59, 130, 246, 0.35)',
    borderColor: 'border-blue-500/70',
  },
  {
    id: 'accelerate',
    num: '05',
    title: 'Accelerate',
    tagline: 'Scale momentum and compound revenue.',
    icon: TrendingUp,
    headline: 'Rollout & Growth Tuning',
    description: 'Continuous conversion rate telemetry monitoring, live A/B split testing, and revenue tuning for compounding momentum.',
    deliverables: [
      'Zero-downtime DNS deployment',
      'Lead telemetry analytics suite',
      'Continuous conversion optimization',
    ],
    color: '#F59E0B', // Amber Accent
    glowColor: 'rgba(245, 158, 11, 0.35)',
    borderColor: 'border-amber-500/70',
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

      {/* Subtle Ambient Spotlight behind Active Card */}
      <div
        style={{
          background: `radial-gradient(circle, ${activeStep.glowColor} 0%, transparent 70%)`,
        }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] blur-[160px] pointer-events-none transition-all duration-700 opacity-60"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 text-center">
        
        {/* HEADER BLOCK (MATCHING IMAGE: ― OUR 5-PHASE ― EXECUTION METHODOLOGY) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 text-xs font-mono font-bold text-[#EF4444] uppercase tracking-widest">
            <span className="w-8 h-px bg-[#EF4444]/60" />
            <span>OUR 5-PHASE</span>
            <span className="w-8 h-px bg-[#EF4444]/60" />
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08]">
            <span className="text-white">Execution </span>
            <span className="text-[#EF4444]">Methodology</span>
          </h2>

          <p className="text-base sm:text-xl font-medium text-zinc-400">
            Built For High-Velocity Growth
          </p>
        </motion.div>

        {/* SLEEK OBSIDIAN BLACK EXPANDING ACCORDION DECK */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-4 max-w-7xl mx-auto min-h-[460px] sm:min-h-[490px] select-none">
          {process5StepCards.map((card) => {
            const isActive = card.id === activeCardId;
            const IconComp = card.icon;

            return (
              <motion.div
                key={card.id}
                onClick={() => setActiveCardId(card.id)}
                onMouseEnter={() => setActiveCardId(card.id)}
                animate={{
                  flex: isActive ? (window.innerWidth > 1024 ? 3.5 : 1) : 1,
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 22 }}
                style={{
                  boxShadow: isActive ? `0 20px 50px ${card.glowColor}` : '0 4px 20px rgba(0,0,0,0.6)',
                }}
                className={`rounded-3xl p-6 border cursor-pointer relative overflow-hidden backdrop-blur-2xl transition-colors duration-500 flex flex-col justify-between text-left ${
                  isActive ? 'bg-[#121215] text-white' : 'bg-[#0A0A0C] text-zinc-400'
                } ${card.borderColor} ${
                  isActive
                    ? 'ring-2 ring-white/30 opacity-100'
                    : 'opacity-80 hover:opacity-100 hover:border-zinc-700'
                }`}
              >
                {/* Top Number */}
                <div className="flex items-center justify-between z-10 relative">
                  <div className="space-y-1">
                    <span
                      style={{ color: card.color }}
                      className="text-2xl sm:text-3xl font-mono font-black block tracking-tight"
                    >
                      {card.num}
                    </span>
                    <div
                      style={{ backgroundColor: card.color }}
                      className={`h-0.5 rounded-full transition-all ${
                        isActive ? 'w-8' : 'w-4'
                      }`}
                    />
                  </div>
                </div>

                {/* Center Content: Icon + Title + Description + Deliverables */}
                <div className="py-4 space-y-4 z-10 relative">
                  {/* Circular Icon Container */}
                  <div
                    style={{
                      borderColor: `${card.color}80`,
                      backgroundColor: `${card.color}15`,
                      color: card.color,
                    }}
                    className="w-14 h-14 rounded-full border-2 flex items-center justify-center shadow-lg transition-transform duration-300"
                  >
                    <IconComp className="w-7 h-7" />
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <h3 className="font-display text-xl sm:text-2xl font-black text-white leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
                      {card.tagline}
                    </p>
                  </div>

                  {/* Detailed Inner Content Revealed When Active */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                        className="space-y-4 pt-3 border-t border-zinc-800"
                      >
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          {card.description}
                        </p>

                        <div className="space-y-2">
                          <span
                            style={{ color: card.color }}
                            className="text-[10px] font-mono font-bold uppercase tracking-wider block"
                          >
                            KEY DELIVERABLES:
                          </span>
                          <div className="space-y-1.5">
                            {card.deliverables.map((item, dIdx) => (
                              <div
                                key={dIdx}
                                className="text-xs font-semibold text-zinc-200 flex items-center gap-2"
                              >
                                <CheckCircle2
                                  style={{ color: card.color }}
                                  className="w-4 h-4 shrink-0"
                                />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenInquiry?.();
                            }}
                            style={{
                              backgroundColor: card.color,
                              boxShadow: `0 8px 25px ${card.glowColor}`,
                            }}
                            className="w-full sm:w-auto px-5 py-2.5 rounded-full text-white text-xs font-mono font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer"
                          >
                            <span>Book Phase {card.num} Audit</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom Micro Indicator Dots */}
                <div className="flex items-center gap-1.5 pt-2 z-10 relative">
                  <div
                    style={{ backgroundColor: card.color }}
                    className="w-2.5 h-2.5 rounded-full"
                  />
                  <div
                    style={{ backgroundColor: `${card.color}90` }}
                    className="w-2.5 h-2.5 rounded-full"
                  />
                  <div
                    style={{ backgroundColor: `${card.color}50` }}
                    className="w-2.5 h-2.5 rounded-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* INSTRUCTION FOOTER CAPSULE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pt-2 flex justify-center text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#121215]/90 border border-[#EF4444]/40 text-xs sm:text-sm font-mono font-bold text-zinc-200 backdrop-blur-xl shadow-xl shadow-[#EF4444]/10 group hover:border-[#EF4444] transition-all">
            <Sparkles className="w-4 h-4 text-[#EF4444] animate-pulse shrink-0" />
            <span className="tracking-wide">
              Hover or click any phase card to smoothly expand its full execution deliverables.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
