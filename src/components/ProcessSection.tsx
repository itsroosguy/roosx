import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowUpRight } from 'lucide-react';
import { AlphaRoosButton } from './AlphaRoosButton';

interface ProcessSectionProps {
  onOpenInquiry?: () => void;
  isDarkMode?: boolean;
}

interface TeamMemberCard {
  id: string;
  name: string;
  role: string;
  description: string;
  imageSrc: string;
  isFeatured?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
  jitterRotate: number;
  jitterY: number;
  spreadX: number;
  spreadY: number;
  spreadRotate: number;
}

const processTeamCards: TeamMemberCard[] = [
  {
    id: 'entry',
    name: '01. Rapid Audit & Entry',
    role: 'DAY 01 • INSTANT TRACTION',
    description: 'We step in within 24 hours to audit your site, messaging, and funnel to eliminate lost revenue points.',
    imageSrc: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    isFeatured: true,
    ctaLabel: 'Rapid 24h Entry',
    ctaHref: '#inquiry',
    jitterRotate: -4,
    jitterY: -8,
    spreadX: -320,
    spreadY: 12,
    spreadRotate: -8,
  },
  {
    id: 'positioning',
    name: '02. Strategy & Copy',
    role: 'DAYS 02–05 • POSITIONED TO WIN',
    description: 'We craft sharp conversion messaging so potential buyers grasp your unique value in under 3 seconds.',
    imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    ctaLabel: 'Conversion Messaging',
    ctaHref: '#inquiry',
    jitterRotate: 2,
    jitterY: -4,
    spreadX: -100,
    spreadY: -6,
    spreadRotate: -3,
  },
  {
    id: 'build',
    name: '03. High-Velocity Build',
    role: 'DAYS 06–15 • 99+ SPEED ENGINE',
    description: 'Custom React codebase built in parallel with Lighthouse 100/100 performance and zero template bloat.',
    imageSrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    ctaLabel: 'React Codebase',
    ctaHref: '#inquiry',
    jitterRotate: -2,
    jitterY: 4,
    spreadX: 120,
    spreadY: 6,
    spreadRotate: 3,
  },
  {
    id: 'scale',
    name: '04. Launch & Scale',
    role: 'DAY 16+ • 4.8X REVENUE MULTIPLIER',
    description: 'Zero-downtime deployment with active conversion telemetry tracking and ongoing revenue optimization.',
    imageSrc: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    isFeatured: true,
    ctaLabel: 'Scale Revenue',
    ctaHref: '#inquiry',
    jitterRotate: 4,
    jitterY: 8,
    spreadX: 340,
    spreadY: -10,
    spreadRotate: 8,
  },
];

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  onOpenInquiry,
  isDarkMode = true,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [activeCardId, setActiveCardId] = useState<string>('entry');

  return (
    <section
      id="process"
      className={`relative py-20 sm:py-28 transition-colors duration-500 overflow-hidden ${
        isDarkMode ? 'bg-[#050505] text-white' : 'bg-[#FAF9F6] text-[#111111]'
      }`}
    >
      {/* Background Grid */}
      <div
        className={`absolute inset-0 bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none ${
          isDarkMode
            ? 'bg-[linear-gradient(to_right,#27272A20_1px,transparent_1px),linear-gradient(to_bottom,#27272A20_1px,transparent_1px)]'
            : 'bg-[linear-gradient(to_right,#E4E4E760_1px,transparent_1px),linear-gradient(to_bottom,#E4E4E760_1px,transparent_1px)]'
        }`}
      />

      {/* Ambient Radial Spotlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-radial from-[#FF7A1A]/15 via-[#FF7A1A]/4 to-transparent blur-[160px] pointer-events-none" />

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
            <span>TEAM STACK PROCESS DECK</span>
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
            Hover or tap the deck to fan out and explore our execution stages.
          </p>
        </motion.div>

        {/* TEAM STACK DECK CONTAINER (EXPAND ON HOVER / TAP, CLOSE ON LEAVE) */}
        <div
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
          className="relative h-[420px] sm:h-[460px] max-w-5xl mx-auto flex items-center justify-center py-8"
        >
          {processTeamCards.map((card, idx) => {
            const isActive = card.id === activeCardId;

            return (
              <motion.div
                key={card.id}
                onClick={() => {
                  setActiveCardId(card.id);
                  setIsExpanded(true);
                }}
                animate={
                  isExpanded
                    ? {
                        x: window.innerWidth > 768 ? card.spreadX : (idx - 1.5) * 80,
                        y: card.spreadY,
                        rotate: card.spreadRotate,
                        scale: isActive ? 1.05 : 0.96,
                        zIndex: isActive ? 40 : 20 - idx,
                      }
                    : {
                        x: (idx - 1.5) * 18,
                        y: card.jitterY,
                        rotate: card.jitterRotate,
                        scale: isActive ? 1.02 : 0.96,
                        zIndex: isActive ? 40 : 20 - idx,
                      }
                }
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className={`absolute w-72 sm:w-80 rounded-3xl p-6 border text-left cursor-pointer transition-all duration-300 shadow-2xl backdrop-blur-xl ${
                  card.isFeatured
                    ? isDarkMode
                      ? 'bg-[#121215] text-white border-[#FF7A1A]/60 ring-1 ring-[#FF7A1A]/30 shadow-[#FF7A1A]/20'
                      : 'bg-zinc-900 text-white border-[#FF7A1A] shadow-xl'
                    : isDarkMode
                    ? 'bg-[#0A0A0C] text-zinc-200 border-zinc-800 hover:border-zinc-700'
                    : 'bg-white text-zinc-900 border-zinc-200 shadow-lg'
                }`}
              >
                {/* Member Avatar / Step Icon Header */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={card.imageSrc}
                    alt={card.name}
                    className="w-14 h-14 rounded-2xl object-cover border border-[#FF7A1A]/40 shadow-md"
                  />
                  <div>
                    <div className="text-[10px] font-mono font-bold text-[#FF7A1A] uppercase tracking-wider">
                      {card.role}
                    </div>
                    <h3 className="font-display text-lg font-bold leading-snug">
                      {card.name}
                    </h3>
                  </div>
                </div>

                {/* Description Copy */}
                <p className={`text-xs leading-relaxed mb-6 ${
                  card.isFeatured || isDarkMode ? 'text-zinc-300' : 'text-zinc-600'
                }`}>
                  {card.description}
                </p>

                {/* Animated Spring CTA Pill Button */}
                {card.ctaLabel && (
                  <div className="pt-2 flex items-center justify-between border-t border-zinc-800/80">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenInquiry?.();
                      }}
                      className="px-4 py-2 rounded-full bg-[#FF7A1A] text-white text-xs font-mono font-bold flex items-center gap-1.5 hover:bg-[#EA580C] transition-all shadow-md shadow-[#FF7A1A]/30 cursor-pointer"
                    >
                      <span>{card.ctaLabel}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[10px] font-mono text-zinc-500">ROOS STUDIO</span>
                  </div>
                )}
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
