import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Search, Compass, Code, Zap, TrendingUp, Sparkles } from 'lucide-react';

interface ProcessSectionProps {
  onOpenInquiry?: () => void;
  isDarkMode?: boolean;
}

interface TeamMemberCard {
  id: string;
  num: string;
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
    num: '01',
    name: 'Research & Audit',
    description: 'We analyze your target market, buyer friction points, and competitor blind spots to locate immediate growth levers.',
    avatarIcon: Search,
    ctaLabel: 'Audit Market',
    collapsedX: -135,
    collapsedY: 22,
    collapsedRotate: -15,
    spreadX: -340,
    spreadY: 70,
    spreadRotate: -14,
  },
  {
    id: 'positioning',
    num: '02',
    name: 'Strategy & Copy',
    description: 'We craft sharp positioning headlines and value props so potential buyers grasp your unique advantage in under 3 seconds.',
    avatarIcon: Compass,
    ctaLabel: 'Position Brand',
    collapsedX: -68,
    collapsedY: 6,
    collapsedRotate: -7.5,
    spreadX: -170,
    spreadY: 20,
    spreadRotate: -7,
  },
  {
    id: 'build',
    num: '03',
    name: 'Meticulous UI/UX & Build',
    description: 'Bespoke React codebase engineered in parallel with Lighthouse 100/100 performance baseline and zero template bloat.',
    avatarIcon: Code,
    isFeatured: true,
    ctaLabel: 'Build Code',
    collapsedX: 0,
    collapsedY: 0,
    collapsedRotate: 0,
    spreadX: 0,
    spreadY: -20,
    spreadRotate: 0,
  },
  {
    id: 'handoff',
    num: '04',
    name: 'Developer Handoff & QA',
    description: 'We deploy infrastructure to edge CDNs, configure automated CRM webhooks, and complete strict pre-launch checklists.',
    avatarIcon: Zap,
    ctaLabel: 'Deploy QA',
    collapsedX: 68,
    collapsedY: 6,
    collapsedRotate: 7.5,
    spreadX: 170,
    spreadY: 20,
    spreadRotate: 7,
  },
  {
    id: 'scale',
    num: '05',
    name: 'Rollout & Growth Tuning',
    description: 'Continuous conversion rate telemetry monitoring, live A/B split testing, and revenue tuning for compounding momentum.',
    avatarIcon: TrendingUp,
    ctaLabel: 'Scale Revenue',
    collapsedX: 135,
    collapsedY: 22,
    collapsedRotate: 15,
    spreadX: 340,
    spreadY: 70,
    spreadRotate: 14,
  },
];

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  onOpenInquiry,
  isDarkMode = true,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  return (
    <section
      id="process"
      className={`relative pt-10 sm:pt-14 pb-16 sm:pb-20 transition-colors duration-500 overflow-hidden ${
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 text-center">
        
        {/* HEADER BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2 max-w-5xl mx-auto px-2"
        >
          <h2
            className={`font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12]`}
          >
            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-400 bg-clip-text text-transparent block pb-1">
              Our 5-Phase Execution Methodology
            </span>
            <span className="bg-gradient-to-r from-[#FF7A1A] via-[#FF944D] to-[#EA580C] bg-clip-text text-transparent inline-block pb-2 pt-1">
              Built For High-Velocity Growth
            </span>
          </h2>
        </motion.div>

        {/* 5-CARD TEAM STACK CONTAINER (ZERO CARD FLIP ON HOVER) */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setHoveredCardId(null);
          }}
          className="relative h-[480px] sm:h-[520px] max-w-6xl mx-auto flex items-center justify-center py-6 select-none"
        >
          {process5StepCards.map((card, idx) => {
            const isCardActive = hoveredCardId === card.id || (!hoveredCardId && card.id === 'build');
            const IconComp = card.avatarIcon;

            return (
              <motion.div
                key={card.id}
                onMouseEnter={() => setHoveredCardId(card.id)}
                onClick={() => onOpenInquiry?.()}
                animate={
                  isHovered
                    ? {
                        x: window.innerWidth > 1024 ? card.spreadX : (idx - 2) * 70,
                        y: isCardActive ? card.spreadY - 8 : card.spreadY,
                        rotate: card.spreadRotate,
                        scale: isCardActive ? 1.04 : 0.96,
                        opacity: isCardActive ? 1 : 0.8,
                        zIndex: isCardActive ? 60 : 30 - Math.abs(idx - 2),
                      }
                    : {
                        x: card.collapsedX,
                        y: card.collapsedY,
                        rotate: card.collapsedRotate,
                        scale: isCardActive ? 1.03 : 0.96,
                        opacity: 1,
                        zIndex: isCardActive ? 60 : 30 - Math.abs(idx - 2),
                      }
                }
                transition={{
                  type: 'spring',
                  stiffness: 140,
                  damping: 24,
                  mass: 0.8,
                }}
                className={`absolute w-64 sm:w-72 h-[390px] sm:h-[420px] rounded-3xl p-5 border text-center cursor-pointer transition-colors duration-500 shadow-2xl backdrop-blur-xl flex flex-col justify-between ${
                  isCardActive
                    ? 'bg-[#18181C] text-white border-[#FF7A1A] ring-2 ring-[#FF7A1A]/30 shadow-[0_15px_50px_rgba(255,122,26,0.3)]'
                    : isDarkMode
                    ? 'bg-[#121215] text-zinc-300 border-zinc-800 hover:border-zinc-700'
                    : 'bg-white text-zinc-900 border-zinc-200 shadow-xl'
                }`}
              >
                {/* Top Illustration Box with Top-Right Pill/Circle CTA */}
                <div className="relative shrink-0">
                  <div className={`w-full h-36 rounded-2xl flex items-center justify-center relative transition-all duration-500 ${
                    isCardActive
                      ? 'bg-[#222228] border border-[#FF7A1A]/40'
                      : 'bg-[#18181C] border border-zinc-800'
                  }`}>
                    <IconComp className={`w-14 h-14 transition-all duration-500 ${
                      isCardActive ? 'text-[#FF7A1A] scale-110' : 'text-zinc-400'
                    }`} />
                  </div>

                  {/* Top-Right Expanding CTA Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenInquiry?.();
                    }}
                    className={`absolute top-3 right-3 flex items-center justify-center gap-1.5 transition-all duration-500 ease-out shadow-md cursor-pointer ${
                      isCardActive
                        ? 'px-3.5 py-1.5 rounded-full bg-[#FF7A1A] text-white text-xs font-mono font-bold shadow-[#FF7A1A]/40 scale-105'
                        : 'w-8 h-8 rounded-full bg-[#27272A] text-[#FFFFFF] hover:bg-[#FF7A1A]'
                    }`}
                  >
                    {isCardActive && <span>{card.ctaLabel}</span>}
                    <ArrowUpRight className="w-4 h-4 shrink-0" />
                  </button>
                </div>

                {/* Card Number, Title & Paragraph */}
                <div className="space-y-1.5 pt-1 text-center flex flex-col items-center justify-center">
                  <div className="text-sm font-mono font-extrabold text-[#FF7A1A] tracking-wider">
                    {card.num}
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-extrabold leading-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent px-1">
                    {card.name}
                  </h3>
                  <p className={`text-xs text-zinc-300 leading-relaxed text-center px-1 pt-0.5 transition-opacity duration-300 ${
                    isCardActive ? 'opacity-100 font-medium' : 'opacity-80 line-clamp-3'
                  }`}>
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* HIGH-CRAFT ELEVATED INSTRUCTION CAPSULE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pt-2 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#121215]/90 border border-[#FF7A1A]/40 text-xs sm:text-sm font-mono font-bold text-zinc-200 backdrop-blur-xl shadow-xl shadow-[#FF7A1A]/10 group hover:border-[#FF7A1A] transition-all">
            <Sparkles className="w-4 h-4 text-[#FF7A1A] animate-pulse shrink-0" />
            <span className="tracking-wide text-center">
              Hover your cursor over any card in the 5-step deck to bring it forward.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
