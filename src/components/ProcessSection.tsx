import React, { useState } from 'react';
import { Search, Target, Pencil, Code, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

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
  borderColor: string;
  glowColor: string;
  bgGlass: string;
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
    color: '#EF4444', // Red
    borderColor: 'border-red-500/80',
    glowColor: 'rgba(239, 68, 68, 0.3)',
    bgGlass: 'bg-red-950/20',
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
    color: '#22C55E', // Green
    borderColor: 'border-green-500/80',
    glowColor: 'rgba(34, 197, 94, 0.3)',
    bgGlass: 'bg-green-950/20',
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
    color: '#A855F7', // Purple
    borderColor: 'border-purple-500/80',
    glowColor: 'rgba(168, 85, 247, 0.3)',
    bgGlass: 'bg-purple-950/20',
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
    color: '#3B82F6', // Blue
    borderColor: 'border-blue-500/80',
    glowColor: 'rgba(59, 130, 246, 0.3)',
    bgGlass: 'bg-blue-950/20',
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
    color: '#F59E0B', // Amber/Orange
    borderColor: 'border-amber-500/80',
    glowColor: 'rgba(245, 158, 11, 0.3)',
    bgGlass: 'bg-amber-950/20',
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* HEADER BLOCK (MATCHING IMAGE: ― OUR 5-PHASE ― EXECUTION METHODOLOGY) */}
        <div className="space-y-3 max-w-4xl mx-auto text-center">
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
        </div>

        {/* SIDE-BY-SIDE LAYOUT: LEFT ALIGNED COLORFUL CARDS (55%) | RIGHT TEXT DELIVERABLES (45%) */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 max-w-7xl mx-auto">
          
          {/* LEFT SIDE (55%): 5 STEPPED OVERLAPPING COLORFUL CARDS (Red, Green, Purple, Blue, Orange) */}
          <div className="w-full lg:w-[55%] relative min-h-[380px] sm:min-h-[410px] flex items-center justify-start py-2 select-none overflow-x-auto sm:overflow-visible">
            <div className="relative w-full h-[350px] flex items-center justify-start">
              {process5StepCards.map((card, idx) => {
                const isActive = card.id === activeCardId;
                const IconComp = card.icon;
                const activeIdx = process5StepCards.findIndex((c) => c.id === activeCardId);
                const offsetFromActive = idx - activeIdx;

                return (
                  <div
                    key={card.id}
                    onClick={() => setActiveCardId(card.id)}
                    style={{
                      transform: `translateX(${idx * (window.innerWidth > 640 ? 82 : 56)}px) translateY(${
                        isActive ? -12 : idx * 2
                      }px) scale(${isActive ? 1.04 : 0.96})`,
                      zIndex: isActive ? 50 : 30 - Math.abs(offsetFromActive),
                      boxShadow: isActive ? `0 20px 45px ${card.glowColor}` : `0 4px 20px ${card.glowColor}`,
                    }}
                    className={`w-48 sm:w-56 h-[330px] sm:h-[350px] rounded-3xl p-5 border text-left cursor-pointer transition-all duration-300 backdrop-blur-xl flex flex-col justify-between absolute left-0 ${
                      card.bgGlass
                    } ${card.borderColor} ${
                      isActive ? 'ring-2 ring-white/30' : 'hover:opacity-100 opacity-90'
                    }`}
                  >
                    {/* Top Step Number with Underline Accent */}
                    <div className="space-y-1">
                      <div
                        style={{ color: card.color }}
                        className="text-xl sm:text-2xl font-mono font-extrabold"
                      >
                        {card.num}
                      </div>
                      <div
                        style={{ backgroundColor: card.color }}
                        className="w-6 h-0.5 rounded-full"
                      />
                    </div>

                    {/* Circular Icon Container */}
                    <div className="my-auto py-2 flex justify-start">
                      <div
                        style={{
                          borderColor: `${card.color}60`,
                          backgroundColor: `${card.color}15`,
                          color: card.color,
                        }}
                        className="w-14 h-14 rounded-full border flex items-center justify-center shadow-lg"
                      >
                        <IconComp className="w-7 h-7" />
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <div className="space-y-1 pt-1">
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-xs text-zinc-300 leading-relaxed font-medium line-clamp-2">
                        {card.tagline}
                      </p>
                    </div>

                    {/* Bottom 3 Colored Dots Accent (• • •) */}
                    <div className="pt-2 flex items-center gap-1.5 justify-start">
                      <div
                        style={{ backgroundColor: card.color }}
                        className="w-2 h-2 rounded-full"
                      />
                      <div
                        style={{ backgroundColor: `${card.color}80` }}
                        className="w-2 h-2 rounded-full"
                      />
                      <div
                        style={{ backgroundColor: `${card.color}40` }}
                        className="w-2 h-2 rounded-full"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE (45%): ACTIVE STAGE TEXT & DELIVERABLES PANEL */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center text-left space-y-6 py-2">
            
            {/* Header Stage Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span
                  style={{ color: activeStep.color }}
                  className="text-4xl font-mono font-black"
                >
                  {activeStep.num}
                </span>
                <div>
                  <span
                    style={{ color: activeStep.color }}
                    className="text-xs font-mono font-bold uppercase tracking-wider block"
                  >
                    PHASE {activeStep.num} • {activeStep.title.toUpperCase()}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-black text-white leading-tight">
                    {activeStep.headline}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed pt-1">
                {activeStep.description}
              </p>
            </div>

            {/* Stage Deliverables Checklist */}
            <div className="space-y-3 pt-1">
              <div
                style={{ color: activeStep.color }}
                className="text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2"
              >
                <span>STAGE DELIVERABLES & OUTCOMES</span>
              </div>

              <div className="space-y-2.5">
                {activeStep.deliverables.map((item, dIdx) => (
                  <div
                    key={dIdx}
                    className="p-3.5 rounded-2xl bg-[#0B0B0E]/90 border border-zinc-800 text-xs sm:text-sm font-semibold text-zinc-200 flex items-center gap-3 shadow-md"
                  >
                    <CheckCircle2
                      style={{ color: activeStep.color }}
                      className="w-4.5 h-4.5 shrink-0"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenInquiry}
                style={{
                  backgroundColor: activeStep.color,
                  boxShadow: `0 10px 30px ${activeStep.glowColor}`,
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-full text-white text-xs font-mono font-bold flex items-center justify-center gap-2.5 hover:opacity-90 transition-opacity cursor-pointer shadow-lg"
              >
                <span>Book Phase {activeStep.num} Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
