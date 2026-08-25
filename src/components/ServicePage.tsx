import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ServicePageProps {
  onOpenInquiry: () => void;
  isDarkMode?: boolean;
  onNavigateHome: () => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({
  onOpenInquiry,
  onNavigateHome,
}) => {
  const [transformationState, setTransformationState] = useState<'before' | 'after'>('after');
  const [activeEvolution, setActiveEvolution] = useState<number>(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const triggerLeapConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.7 },
      colors: ['#FF6B00', '#FF8F3A', '#FFFFFF', '#EA580C'],
    });
  };

  const evolutions = [
    {
      from: 'UNKNOWN',
      to: 'CATEGORY AUTHORITY',
      capability: 'Brand Strategy & Narrative Architecture',
      beforeText: 'Blending into the noise with generic messaging, low pricing power, and zero market differentiation.',
      afterText: 'Dominating your category with unshakeable narrative clarity, premium positioning, and instant enterprise trust.',
      metric: '4.8x Higher Value Perception',
    },
    {
      from: 'INVISIBLE',
      to: 'CONVERSION MAGNET',
      capability: 'Web Experience & Next.js Engine',
      beforeText: 'Slow, static website with high bounce rates, vague positioning, and broken conversion pathways.',
      afterText: 'Lightning-fast Sub-100ms digital product with interactive WebGL story reveals that turn visitors into booked pipeline.',
      metric: '+380% Qualified Lead Volume',
    },
    {
      from: 'MANUAL',
      to: 'AUTOMATED SCALE',
      capability: 'AI Workflows & Neural Systems',
      beforeText: 'Repetitive operational bottlenecks, lost lead follow-ups, and manual team friction capping scale.',
      afterText: 'Autonomous neural workflows, instant CRM lead routing, and 24/7 automated business operations.',
      metric: '85% Operational Overhead Saved',
    },
  ];

  const momentumTransforms = [
    {
      num: '01',
      title: 'Positioning Transformation',
      subtitle: 'Extracting Your Unfair Advantage',
      desc: 'We rebuild your market narrative so customers immediately understand why you are the only choice.',
      tag: 'STRATEGY',
    },
    {
      num: '02',
      title: 'Visual Authority Transformation',
      subtitle: 'Designing Enterprise Trust',
      desc: 'Digital-first visual systems, typography scale, and design tokens crafted to project market dominance.',
      tag: 'IDENTITY',
    },
    {
      num: '03',
      title: 'Digital Product Transformation',
      subtitle: 'Sub-100ms Performance Engine',
      desc: 'High-conversion Next.js applications engineered with WebGL micro-interactions and seamless UX.',
      tag: 'EXPERIENCE',
    },
    {
      num: '04',
      title: 'Demand Engine Transformation',
      subtitle: 'Systematic Revenue Acquisition',
      desc: 'Multi-channel acquisition funnels aligned specifically for payback efficiency and scalable pipeline.',
      tag: 'GROWTH',
    },
    {
      num: '05',
      title: 'Neural Systems Transformation',
      subtitle: 'Scale Without Scaling Friction',
      desc: 'Custom AI agents and CRM automation routines that execute repetitive workflows effortlessly.',
      tag: 'AUTOMATION',
    },
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen relative overflow-hidden font-sans selection:bg-[#FF6B00] selection:text-white pt-28 pb-24">
      
      {/* 1. CURSOR SPOTLIGHT */}
      <div
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
        className="fixed w-[800px] h-[800px] rounded-full bg-radial from-[#FF6B00]/16 via-[#FF6B00]/3 to-transparent blur-[170px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0 transition-opacity duration-500"
      />

      {/* 2. BACKGROUND MESH */}
      <div className="fixed inset-0 bg-[size:5rem_5rem] bg-[linear-gradient(to_right,#FF6B0008_1px,transparent_1px),linear-gradient(to_bottom,#FF6B0008_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_40%,#000_80%,transparent_100%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-36">
        
        {/* ========================================================================= */}
        {/* ERA 01: THE TRANSFORMATION HERO (NO BOXES / NO CARDS / EDITORIAL SCALE) */}
        {/* ========================================================================= */}
        <section className="text-center max-w-5xl mx-auto space-y-8 pt-6">
          
          {/* LIVE TRANSFORMATION STATE CONTROLLER */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-[#121215] border border-zinc-800 backdrop-blur-xl">
              <button
                onClick={() => setTransformationState('before')}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                  transformationState === 'before'
                    ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                STATUS: BEFORE ROOS
              </button>
              <button
                onClick={() => setTransformationState('after')}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                  transformationState === 'after'
                    ? 'bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/50 shadow-md shadow-[#FF6B00]/20'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                STATUS: AFTER TRANSFORMATION ⚡
              </button>
            </div>
          </div>

          {/* MASSIVE EDITORIAL TYPOGRAPHY */}
          <motion.div
            key={transformationState}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {transformationState === 'before' ? (
              <h1 className="font-display text-4xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[1.05] text-zinc-500">
                Fragmented. Slow. <br />
                <span className="text-rose-400">Invisible to the Market.</span>
              </h1>
            ) : (
              <h1 className="font-display text-4xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[1.05] text-white">
                From Invisible <br />
                <span className="bg-gradient-to-r from-white via-zinc-100 to-[#FF6B00] bg-clip-text text-transparent">
                  To Unforgettable.
                </span>
              </h1>
            )}

            <p className="text-base sm:text-2xl font-medium text-zinc-300 max-w-3xl mx-auto leading-relaxed">
              {transformationState === 'before'
                ? 'Relying on fragmented vendors, outdated websites, and manual workflows that choke business momentum.'
                : 'We partner with ambitious brands to engineer authority, high-converting digital products, and automated growth engines.'}
            </p>
          </motion.div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                triggerLeapConfetti();
                onOpenInquiry();
              }}
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-[#FF6B00] text-white font-mono font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#FF8833] transition-all shadow-[0_15px_40px_rgba(255,107,0,0.45)] cursor-pointer flex items-center justify-center gap-3 group"
            >
              <span>TRIGGER YOUR TRANSFORMATION</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* ERA 02: THE 3 BUSINESS EVOLUTIONS (INTERACTIVE SIDE-BY-SIDE MORPHING) */}
        {/* ========================================================================= */}
        <section className="space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00]">THE THREE EVOLUTIONARY LEAPS</span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-white">How Your Business Evolves</h2>
          </div>

          {/* EVOLUTION SELECTOR TAB BAR */}
          <div className="flex flex-wrap justify-center gap-3">
            {evolutions.map((ev, idx) => (
              <button
                key={idx}
                onClick={() => setActiveEvolution(idx)}
                className={`px-6 py-3 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeEvolution === idx
                    ? 'bg-[#FF6B00] text-white shadow-lg shadow-[#FF6B00]/30 scale-105'
                    : 'bg-[#121215] text-zinc-400 border border-zinc-800 hover:text-white'
                }`}
              >
                0{idx + 1}. {ev.from} → {ev.to}
              </button>
            ))}
          </div>

          {/* EVOLUTION DISPLAY (UNBOXED OPEN METAPHOR LAYOUT) */}
          <div className="relative pt-6">
            {(() => {
              const activeEv = evolutions[activeEvolution];
              return (
                <motion.div
                  key={activeEvolution}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-12"
                >
                  <div className="text-center space-y-2">
                    <span className="text-xs font-mono font-bold text-[#FF6B00] uppercase tracking-widest">{activeEv.capability}</span>
                    <h3 className="font-display text-3xl sm:text-5xl font-black text-white">
                      {activeEv.from} <span className="text-[#FF6B00]">→</span> {activeEv.to}
                    </h3>
                  </div>

                  {/* UNBOXED COMPARISON COLUMNS */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
                    
                    {/* BEFORE STATE */}
                    <div className="space-y-4 p-8 rounded-3xl bg-[#0A0A0C]/60 border border-rose-500/20 text-left relative overflow-hidden">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 font-mono text-xs font-bold border border-rose-500/30">
                          OLD WAY (BEFORE)
                        </span>
                        <span className="font-mono text-xs text-rose-500 font-bold">FRAGMENTED</span>
                      </div>
                      <p className="text-base sm:text-lg text-zinc-300 font-medium leading-relaxed">
                        {activeEv.beforeText}
                      </p>
                    </div>

                    {/* AFTER STATE */}
                    <div className="space-y-4 p-8 rounded-3xl bg-[#0F0F14] border border-[#FF6B00]/40 text-left relative overflow-hidden shadow-[0_10px_40px_rgba(255,107,0,0.2)]">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B00] to-[#FF8F3A]" />
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] font-mono text-xs font-bold border border-[#FF6B00]/40">
                          ROOS WAY (AFTER) ⚡
                        </span>
                        <span className="font-mono text-xs text-[#FF6B00] font-bold">{activeEv.metric}</span>
                      </div>
                      <p className="text-base sm:text-lg text-white font-medium leading-relaxed">
                        {activeEv.afterText}
                      </p>
                    </div>

                  </div>
                </motion.div>
              );
            })()}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* ERA 03: THE CONTINUOUS MOMENTUM STREAM (5 TRANSFORMS, NO CARDS/BOXES) */}
        {/* ========================================================================= */}
        <section className="space-y-16 pt-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00]">THE 5 MOMENTUM TRANSFORMS</span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-white">The Transformation Journey</h2>
          </div>

          {/* CONTINUOUS LASER STREAM LINE */}
          <div className="relative space-y-20">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-gradient-to-b from-[#FF6B00]/20 via-[#FF6B00] to-[#FF6B00]/20 pointer-events-none z-0" />

            {momentumTransforms.map((tf, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* TEXT COLUMN */}
                  <div className={`w-full md:w-1/2 space-y-3 pl-12 md:pl-0 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className={`flex items-center gap-3 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                      <span className="font-mono text-3xl font-black text-[#FF6B00]">{tf.num}</span>
                      <span className="px-3 py-1 rounded-full bg-[#FF6B00]/15 text-[#FF6B00] font-mono text-[10px] font-bold border border-[#FF6B00]/30 uppercase">
                        {tf.tag}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-4xl font-black text-white leading-tight">
                      {tf.title}
                    </h3>
                    <p className="text-sm font-mono font-bold text-[#FF8F3A]">{tf.subtitle}</p>
                    <p className="text-sm sm:text-base text-zinc-300 font-medium leading-relaxed max-w-lg">
                      {tf.desc}
                    </p>
                  </div>

                  {/* CENTRAL GLOWING NODE */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#FF6B00] text-white flex items-center justify-center font-mono font-black text-sm shadow-[0_0_35px_#FF6B00] shrink-0 z-10">
                    {tf.num}
                  </div>

                  {/* BALANCING SPACE */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* ERA 04: THE FINAL EVOLUTION CTA */}
        {/* ========================================================================= */}
        <section className="py-16 text-center space-y-8 relative overflow-hidden">
          <div className="w-3/4 h-0.5 bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent mx-auto mb-6 opacity-60" />

          <div className="space-y-4 max-w-4xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00]">READY FOR YOUR NEXT LEAP?</span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white leading-tight">
              Let's Build Something That Can Travel 30 Feet.
            </h2>
            <p className="text-base sm:text-xl font-medium text-zinc-300 max-w-2xl mx-auto">
              No pressure sales pitch. A strategic diagnostic conversation focused on your growth opportunities.
            </p>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                triggerLeapConfetti();
                onOpenInquiry();
              }}
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-[#FF6B00] text-white font-mono font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#FF8833] transition-all shadow-[0_15px_40px_rgba(255,107,0,0.45)] cursor-pointer flex items-center justify-center gap-3 group"
            >
              <span>Get Your Free Growth Audit</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onNavigateHome}
              className="w-full sm:w-auto px-8 py-5 rounded-full bg-[#121215] border border-zinc-800 text-zinc-300 font-mono font-bold text-xs sm:text-sm uppercase tracking-wider hover:text-white hover:border-zinc-700 transition-all cursor-pointer"
            >
              Back to Overview
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
