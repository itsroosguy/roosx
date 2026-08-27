import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Target, Pencil, Code, TrendingUp, CheckCircle2 } from 'lucide-react';

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
    tagline: 'Uncover opportunities & market bottlenecks.',
    icon: Search,
    headline: 'Research & Strategic Audit',
    description: 'We analyze your target market, buyer friction points, and competitor blind spots to locate immediate growth levers.',
    deliverables: [
      '30-min bottleneck discovery audit',
      'Conversion friction roadmap',
      'Prioritized growth action plan',
    ],
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
  },
];

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  isDarkMode = true,
}) => {
  const [activeCardId, setActiveCardId] = useState<string>('design');

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
            : 'bg-[linear-gradient(to_right,#E4E4E780_1px,transparent_1px),linear-gradient(to_bottom,#E4E4E780_1px,transparent_1px)]'
        }`}
      />

      {/* Ambient Brand Orange Spotlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-radial from-[#FF7A1A]/18 via-[#FF7A1A]/4 to-transparent blur-[160px] pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 text-center">
        
        {/* HEADER BLOCK (LIGHT / DARK ADAPTIVE) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3 max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08]">
            <span
              className={
                isDarkMode
                  ? 'bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent'
                  : 'text-[#111111]'
              }
            >
              The Momentum{' '}
            </span>
            <span className="text-[#FF7A1A]">Engine</span>
          </h2>

          <p
            className={`text-base sm:text-lg md:text-xl font-medium max-w-3xl mx-auto ${
              isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            <span className="block">Five strategic phases designed to discover opportunities,</span>
            <span className="block">build authority and accelerate sustainable growth.</span>
          </p>
        </motion.div>

        {/* LOCKED HEIGHT UNIFIED ELECTRIC ORANGE ACCORDION DECK */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-4 max-w-7xl mx-auto h-[430px] sm:h-[460px] select-none">
          {process5StepCards.map((card) => {
            const isActive = card.id === activeCardId;
            const IconComp = card.icon;

            return (
              <motion.div
                key={card.id}
                onClick={() => setActiveCardId(card.id)}
                onMouseEnter={() => setActiveCardId(card.id)}
                animate={{
                  flex: isActive ? (window.innerWidth > 1024 ? 2.3 : 1) : 1,
                }}
                transition={{ type: 'spring', stiffness: 220, damping: 24 }}
                className={`rounded-3xl p-5 sm:p-6 border cursor-pointer relative overflow-hidden backdrop-blur-2xl transition-colors duration-500 flex flex-col justify-between text-left h-full ${
                  isDarkMode
                    ? isActive
                      ? 'bg-[#121215] text-white border-[#FF7A1A] ring-2 ring-[#FF7A1A]/30 shadow-[0_20px_50px_rgba(255,122,26,0.3)]'
                      : 'bg-[#0A0A0C] text-zinc-400 border-zinc-800/90 hover:border-zinc-700 opacity-85 hover:opacity-100'
                    : isActive
                      ? 'bg-white text-[#111111] border-[#FF7A1A] ring-2 ring-[#FF7A1A]/40 shadow-[0_20px_40px_rgba(255,122,26,0.15)]'
                      : 'bg-white/90 text-zinc-600 border-zinc-200 hover:border-zinc-300 opacity-90 hover:opacity-100 shadow-sm'
                }`}
              >
                {/* Top Number & Accent Bar */}
                <div className="flex items-center justify-between z-10 relative shrink-0">
                  <div className="space-y-1">
                    <span
                      className={`text-2xl sm:text-3xl font-mono font-black block tracking-tight ${
                        isActive
                          ? 'text-[#FF7A1A]'
                          : isDarkMode
                            ? 'text-zinc-600'
                            : 'text-zinc-400'
                      }`}
                    >
                      {card.num}
                    </span>
                    <div
                      className={`h-0.5 rounded-full transition-all ${
                        isActive
                          ? 'bg-[#FF7A1A] w-8'
                          : isDarkMode
                            ? 'bg-zinc-700 w-4'
                            : 'bg-zinc-300 w-4'
                      }`}
                    />
                  </div>
                </div>

                {/* Center Content: Icon + Title + Description + Deliverables */}
                <div className="py-2 space-y-3 z-10 relative flex-1 flex flex-col justify-center">
                  {/* Circular Icon Container */}
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 flex items-center justify-center shadow-md transition-transform duration-300 shrink-0 ${
                      isActive
                        ? 'border-[#FF7A1A]/80 bg-[#FF7A1A]/15 text-[#FF7A1A]'
                        : isDarkMode
                          ? 'border-zinc-800 bg-zinc-900/80 text-zinc-400'
                          : 'border-zinc-200 bg-zinc-100 text-zinc-600'
                    }`}
                  >
                    <IconComp className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1 shrink-0">
                    <h3
                      className={`font-display text-lg sm:text-xl font-black leading-tight ${
                        isDarkMode ? 'text-white' : 'text-[#111111]'
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed font-medium ${
                        isDarkMode ? 'text-zinc-300' : 'text-zinc-600'
                      }`}
                    >
                      {card.tagline}
                    </p>
                  </div>

                  {/* Detailed Inner Content Revealed When Active */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className={`space-y-3 pt-3 border-t shrink-0 ${
                          isDarkMode ? 'border-zinc-800' : 'border-zinc-200'
                        }`}
                      >
                        <p
                          className={`text-xs sm:text-sm leading-relaxed font-normal ${
                            isDarkMode ? 'text-zinc-200' : 'text-zinc-700'
                          }`}
                        >
                          {card.description}
                        </p>

                        <div className="space-y-1.5">
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider block text-[#FF7A1A]">
                            STAGE DELIVERABLES:
                          </span>
                          <div className="space-y-1.5">
                            {card.deliverables.map((item, dIdx) => (
                              <div
                                key={dIdx}
                                className={`text-xs sm:text-sm font-semibold flex items-center gap-2.5 ${
                                  isDarkMode ? 'text-zinc-100' : 'text-zinc-800'
                                }`}
                              >
                                <CheckCircle2 className="w-4 h-4 text-[#FF7A1A] shrink-0" />
                                <span className="truncate">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom Micro Indicator Dots */}
                <div className="flex items-center gap-1.5 pt-1 z-10 relative shrink-0">
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${
                      isActive
                        ? 'bg-[#FF7A1A]'
                        : isDarkMode
                          ? 'bg-zinc-700'
                          : 'bg-zinc-300'
                    }`}
                  />
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${
                      isActive
                        ? 'bg-[#FF7A1A]/40'
                        : isDarkMode
                          ? 'bg-zinc-700/80'
                          : 'bg-zinc-300/80'
                    }`}
                  />
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${
                      isActive
                        ? 'bg-[#FF7A1A]/20'
                        : isDarkMode
                          ? 'bg-zinc-700/50'
                          : 'bg-zinc-300/50'
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
