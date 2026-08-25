import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowUpRight, Search, Compass, Code, Zap, TrendingUp } from 'lucide-react';
import { AlphaRoosButton } from './AlphaRoosButton';

interface ProcessSectionProps {
  onOpenInquiry?: () => void;
  isDarkMode?: boolean;
}

interface TeamMemberCard {
  id: string;
  role: string;
  name: string;
  description: string;
  avatarIcon: any;
  isFeatured?: boolean;
  ctaLabel: string;
  collapsedX: number;
  collapsedY: number;
  collapsedRotate: number;
  spreadX: number;
  spreadY: number;
  spreadRotate: number;
}

const process5StepCards: TeamMemberCard[] = [
  {
    id: 'research',
    role: 'STAGE 01 • AUDIT & DISCOVERY',
    name: '01. Research & Audit',
    description: 'We analyze your target market, buyer friction points, and competitor blind spots to locate immediate growth levers.',
    avatarIcon: Search,
    ctaLabel: 'Audit Market',
    collapsedX: -135,
    collapsedY: 22,
    collapsedRotate: -15,
    spreadX: -340,
    spreadY: 0,
    spreadRotate: -10,
  },
  {
    id: 'positioning',
    role: 'STAGE 02 • STRATEGY & COPY',
    name: '02. Strategy & Copy',
    description: 'We craft sharp positioning headlines and value props so potential buyers grasp your unique advantage in under 3 seconds.',
    avatarIcon: Compass,
    ctaLabel: 'Position Brand',
    collapsedX: -68,
    collapsedY: 6,
    collapsedRotate: -7.5,
    spreadX: -170,
    spreadY: 0,
    spreadRotate: -5,
  },
  {
    id: 'build',
    role: 'STAGE 03 • 99+ SPEED ENGINE',
    name: '03. Meticulous UI/UX & Build',
    description: 'Bespoke React codebase engineered in parallel with Lighthouse 100/100 performance baseline and zero template bloat.',
    avatarIcon: Code,
    isFeatured: true,
    ctaLabel: 'Build Code',
    collapsedX: 0,
    collapsedY: 0,
    collapsedRotate: 0,
    spreadX: 0,
    spreadY: 0,
    spreadRotate: 0,
  },
  {
    id: 'handoff',
    role: 'STAGE 04 • RAPID PROTOCOL',
    name: '04. Developer Handoff & QA',
    description: 'We deploy infrastructure to edge CDNs, configure automated CRM webhooks, and complete strict pre-launch checklists.',
    avatarIcon: Zap,
    ctaLabel: 'Deploy QA',
    collapsedX: 68,
    collapsedY: 6,
    collapsedRotate: 7.5,
    spreadX: 170,
    spreadY: 0,
    spreadRotate: 5,
  },
  {
    id: 'scale',
    role: 'STAGE 05 • 4.8X REVENUE TUNING',
    name: '05. Rollout & Growth Tuning',
    description: 'Continuous conversion rate telemetry monitoring, live A/B split testing, and revenue tuning for compounding momentum.',
    avatarIcon: TrendingUp,
    ctaLabel: 'Scale Revenue',
    collapsedX: 135,
    collapsedY: 22,
    collapsedRotate: 15,
    spreadX: 340,
    spreadY: 0,
    spreadRotate: 10,
  },
];

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  onOpenInquiry,
  isDarkMode = true,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [activeCardId, setActiveCardId] = useState<string>('build');

  return (
    <section
      id="process"
      className={`relative py-20 sm:py-28 transition-colors duration-500 overflow-hidden ${
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

      {/* Ambient Radial Spotlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-radial from-[#FF7A1A]/18 via-[#FF7A1A]/4 to-transparent blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 text-center">
        
        {/* HEADER BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF7A1A]/10 border border-[#FF7A1A]/30 text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest backdrop-blur-md">
            <Layers className="w-3.5 h-3.5" />
            <span>SMOOTH DECK ARC PROCESS STACK</span>
          </div>

          <h2
            className={`font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] ${
              isDarkMode ? 'text-white' : 'text-[#111111]'
            }`}
          >
            <span className="block">How We Step In & Get You</span>
            <span className="bg-gradient-to-r from-[#FF7A1A] via-[#FF944D] to-[#EA580C] bg-clip-text text-transparent inline-block pb-2 pt-1">
              To The Goal Fast.
            </span>
          </h2>

          <p
            className={`text-base sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto ${
              isDarkMode ? 'text-[#B8B8B8]' : 'text-[#52525B]'
            }`}
          >
            Hover or tap the 5-card deck to fan out and explore our studio execution methodology.
          </p>
        </motion.div>

        {/* 5-CARD TEAM STACK CONTAINER (SMOOTH PERFECT DECK ARC) */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative h-[430px] sm:h-[470px] max-w-6xl mx-auto flex items-center justify-center py-6 select-none"
        >
          {process5StepCards.map((card, idx) => {
            const isActive = card.id === activeCardId;
            const IconComp = card.avatarIcon;

            return (
              <motion.div
                key={card.id}
                onClick={() => setActiveCardId(card.id)}
                animate={
                  isHovered
                    ? {
                        x: window.innerWidth > 1024 ? card.spreadX : (idx - 2) * 70,
                        y: card.spreadY,
                        rotate: card.spreadRotate,
                        scale: isActive ? 1.05 : 0.95,
                        zIndex: isActive ? 50 : 30 - Math.abs(idx - 2),
                      }
                    : {
                        x: card.collapsedX,
                        y: card.collapsedY,
                        rotate: card.collapsedRotate,
                        scale: isActive ? 1.05 : 0.96,
                        zIndex: isActive ? 50 : 30 - Math.abs(idx - 2),
                      }
                }
                transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                className={`absolute w-64 sm:w-72 h-[380px] sm:h-[410px] rounded-3xl p-5 border text-left cursor-pointer transition-all duration-300 shadow-2xl backdrop-blur-xl flex flex-col justify-between ${
                  isActive || (card.isFeatured && isHovered)
                    ? 'bg-[#18181C] text-white border-[#FF7A1A]/80 ring-1 ring-[#FF7A1A]/40 shadow-[0_10px_40px_rgba(255,122,26,0.3)]'
                    : isDarkMode
                    ? 'bg-[#121215] text-zinc-200 border-zinc-800 hover:border-zinc-700'
                    : 'bg-white text-zinc-900 border-zinc-200 shadow-xl'
                }`}
              >
                {/* Top Illustration Box with Top-Right Pill/Circle CTA */}
                <div className="relative">
                  <div className={`w-full h-36 rounded-2xl flex items-center justify-center relative transition-colors ${
                    isActive
                      ? 'bg-[#222228] border border-[#FF7A1A]/30'
                      : 'bg-[#18181C] border border-zinc-800'
                  }`}>
                    <IconComp className={`w-14 h-14 transition-transform duration-300 ${
                      isActive ? 'text-[#FF7A1A] scale-110' : 'text-zinc-400'
                    }`} />
                  </div>

                  {/* Top-Right Expanding CTA Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenInquiry?.();
                    }}
                    className={`absolute top-3 right-3 flex items-center justify-center gap-1.5 transition-all duration-300 shadow-md cursor-pointer ${
                      isActive
                        ? 'px-3 py-1.5 rounded-full bg-[#FF7A1A] text-white text-xs font-mono font-bold shadow-[#FF7A1A]/40'
                        : 'w-8 h-8 rounded-full bg-[#27272A] text-white hover:bg-[#FF7A1A]'
                    }`}
                  >
                    {isActive && <span>{card.ctaLabel}</span>}
                    <ArrowUpRight className="w-4 h-4 shrink-0" />
                  </button>
                </div>

                {/* Text Content */}
                <div className="space-y-1.5 pt-2">
                  <div className="text-[10px] font-mono font-bold text-[#FF7A1A] uppercase tracking-wider">
                    {card.role}
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold leading-tight text-white">
                    {card.name}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM ACTION CTA BUTTON */}
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
