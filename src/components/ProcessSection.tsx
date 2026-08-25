import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Target,
  Check,
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
  align: 'left' | 'right';
}

const fastTrackSteps: ProcessStep[] = [
  {
    id: 'step-1',
    num: '01',
    timeframe: 'DAY 01',
    title: 'Rapid Audit & Entry',
    headline: 'We Step In Within 24 Hours',
    description:
      'Within 24 hours of connecting, we dive deep into your website, messaging, and funnel to locate exact points of lost revenue.',
    annotation: '30-min call • Zero fluff • Immediate clarity',
    badgeText: 'Instant Traction',
    icon: PhoneCall,
    keyPoints: [
      '30-minute discovery & bottleneck audit',
      'Locate immediate conversion leaks',
      'Clear, prioritized action plan for launch',
    ],
    align: 'left',
  },
  {
    id: 'step-2',
    num: '02',
    timeframe: 'DAYS 02–05',
    title: 'Strategy & Copy',
    headline: 'Define What Makes You Unbeatable',
    description:
      'We craft sharp, high-converting messaging and positioning so visitors get your value in under 3 seconds and trust your business.',
    annotation: 'All decisions explained, no black boxes x',
    badgeText: 'Positioned To Win',
    icon: Target,
    keyPoints: [
      'Conversion-focused headline & body copy',
      'Distinct brand voice & market positioning',
      'Frictionless customer navigation path',
    ],
    align: 'right',
  },
  {
    id: 'step-3',
    num: '03',
    timeframe: 'DAYS 06–15',
    title: 'High-Velocity Build',
    headline: 'Production Without The Friction',
    description:
      'We design and build custom, ultra-fast interfaces in parallel. Up to 2 rounds of collaborative edits ensure perfection.',
    annotation: 'Up to 2 rounds of rapid collaborative edits',
    badgeText: '99+ Speed Score',
    icon: Code2,
    keyPoints: [
      'Custom modern UI/UX (No templates)',
      'High-speed code with 99+ Google performance',
      'CMS integration & automated lead routing',
    ],
    align: 'left',
  },
  {
    id: 'step-4',
    num: '04',
    timeframe: 'DAY 16+',
    title: 'Launch & Scale',
    headline: 'Go Live & Multiply Revenue',
    description:
      'We launch your new digital experience with active lead tracking, analytics telemetry, and continuous conversion tuning.',
    annotation: 'Turn visitors into long-term revenue',
    badgeText: 'Continuous Momentum',
    icon: TrendingUp,
    keyPoints: [
      'Zero-downtime deployment & DNS handoff',
      'Active conversion tracking & lead analytics',
      'Ongoing speed & conversion optimization',
    ],
    align: 'right',
  },
];

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  onOpenInquiry,
  isDarkMode = false,
}) => {
  return (
    <section
      id="process"
      className={`relative py-24 sm:py-32 transition-colors duration-500 overflow-hidden ${
        isDarkMode ? 'bg-[#0A0A0A] text-white' : 'bg-[#FAF9F6] text-[#111111]'
      }`}
    >
      {/* Subtle Background Architectural Mesh */}
      <div
        className={`absolute inset-0 bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none ${
          isDarkMode
            ? 'bg-[linear-gradient(to_right,#27272A20_1px,transparent_1px),linear-gradient(to_bottom,#27272A20_1px,transparent_1px)]'
            : 'bg-[linear-gradient(to_right,#E4E4E760_1px,transparent_1px),linear-gradient(to_bottom,#E4E4E760_1px,transparent_1px)]'
        }`}
      />

      {/* Ambient Orange Glow Spotlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[950px] h-[500px] bg-radial from-[#F97316]/12 via-[#F97316]/4 to-transparent blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* EDITORIAL HEADER BLOCK (NO BOXES) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto mb-20 sm:mb-28 space-y-4"
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
            No bloated 3-month agency timelines or PPT slides. We plug in within 24 hours and execute with extreme speed.
          </p>
        </motion.div>

        {/* PINTEREST-INSPIRED CONTINUOUS WINDING SNAKE LINE ROADMAP (ZERO BOXES) */}
        <div className="relative py-4">
          
          {/* CONTINUOUS WINDING SVG SNAKE LINE (VISIBLE ON DESKTOP & TABLET) */}
          <div className="absolute inset-0 flex justify-center pointer-events-none hidden md:block">
            <svg
              className="h-full w-full max-w-3xl overflow-visible"
              viewBox="0 0 800 1200"
              fill="none"
            >
              <defs>
                <linearGradient id="snakePathGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#F97316" />
                  <stop offset="50%" stopColor="#FB923C" />
                  <stop offset="100%" stopColor="#EA580C" />
                </linearGradient>
              </defs>
              <path
                d="M 200,80 C 600,80 600,380 200,380 C -200,380 -200,680 200,680 C 600,680 600,980 200,980"
                stroke="url(#snakePathGrad)"
                strokeWidth="3"
                strokeDasharray="8 8"
                className="opacity-70"
              />
            </svg>
          </div>

          {/* 4 EDITORIAL OPEN ROADMAP STEPS */}
          <div className="space-y-20 sm:space-y-32 relative">
            {fastTrackSteps.map((step, idx) => {
              const isLeft = step.align === 'left';

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left relative ${
                    isLeft ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  
                  {/* STEP NUMBER & NODE BADGE (CENTER/LEFT) */}
                  <div
                    className={`md:col-span-5 flex flex-col ${
                      isLeft ? 'md:items-end md:text-right' : 'md:items-start md:text-left'
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className="relative">
                        {/* Glowing Circular Number Circle (No Box Card) */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#F97316] via-[#FB923C] to-[#EA580C] text-white flex items-center justify-center font-display text-2xl sm:text-3xl font-black shadow-xl shadow-[#F97316]/30 border-2 border-[#FDBA74]/50 relative z-10">
                          {step.num}
                        </div>
                        <span className="absolute -inset-2 rounded-full border border-[#F97316]/30 animate-ping opacity-25" />
                      </div>

                      <div>
                        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-[#F97316]/10 text-[#F97316] border border-[#F97316]/30 uppercase tracking-wider block w-max mb-1">
                          {step.timeframe}
                        </span>
                        <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                          {step.badgeText}
                        </div>
                      </div>
                    </div>

                    {/* Floating Handwritten Callout Annotation (Pinterest Style) */}
                    <motion.div
                      animate={{ y: [-2, 2, -2] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className="mt-3 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F97316]/10 border border-[#F97316]/40 text-xs font-semibold text-[#F97316] rotate-[-2deg] shadow-sm"
                    >
                      <Sparkles className="w-3.5 h-3.5 shrink-0" />
                      <span>"{step.annotation}"</span>
                    </motion.div>
                  </div>

                  {/* CENTER SPACER (2 COLS) */}
                  <div className="hidden md:block md:col-span-2" />

                  {/* STEP CONTENT & NARRATIVE (5 COLS - OPEN EDITORIAL TEXT, NO BOX CARDS) */}
                  <div className="md:col-span-5 space-y-4">
                    <div>
                      <h3
                        className={`font-display text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight ${
                          isDarkMode ? 'text-white' : 'text-[#111111]'
                        }`}
                      >
                        {step.headline}
                      </h3>
                      <div className="text-sm font-bold text-[#F97316] mt-1 tracking-tight">
                        {step.title}
                      </div>
                    </div>

                    <p
                      className={`text-sm sm:text-base leading-relaxed font-normal ${
                        isDarkMode ? 'text-[#D4D4D8]' : 'text-[#52525B]'
                      }`}
                    >
                      {step.description}
                    </p>

                    {/* Open Bullet Milestones (No Card Enclosures) */}
                    <div className="space-y-2 pt-1">
                      {step.keyPoints.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold">
                          <div className="w-5 h-5 rounded-full bg-[#F97316]/15 text-[#F97316] flex items-center justify-center shrink-0 border border-[#F97316]/30">
                            <Check className="w-3 h-3" />
                          </div>
                          <span className={isDarkMode ? 'text-zinc-200' : 'text-zinc-800'}>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

        {/* BOTTOM CTA AUDIT TRIGGER (NO PPT BOX) */}
        {onOpenInquiry && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 sm:mt-28 flex flex-col items-center justify-center text-center space-y-4"
          >
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#F97316]">
              READY TO ACCELERATE YOUR LAUNCH?
            </div>
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
