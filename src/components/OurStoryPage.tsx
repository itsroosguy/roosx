import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Flame, Shield, Compass, Cpu, Zap, Activity } from 'lucide-react';
import confetti from 'canvas-confetti';
import { KangarooMascot } from './mascot/KangarooMascot';

interface OurStoryPageProps {
  onOpenInquiry: () => void;
  isDarkMode?: boolean;
  onNavigateHome: () => void;
}

export const OurStoryPage: React.FC<OurStoryPageProps> = ({
  onOpenInquiry,
  onNavigateHome,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Scroll Progress across the master documentary timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  // Mouse Tracking Effect
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

  // Chapter 1: Eye Glow & Reveal (0 - 0.12)
  const eyeOpacity = useTransform(smoothProgress, [0, 0.04, 0.12], [0.3, 1, 0.1]);
  const chapter1TextOpacity = useTransform(smoothProgress, [0.03, 0.07, 0.12], [0, 1, 0]);
  const chapter1TextY = useTransform(smoothProgress, [0.03, 0.07, 0.12], [40, 0, -40]);

  // Chapter 2: Foundations & Cracking Ground (0.12 - 0.26)
  const foundationsOpacity = useTransform(smoothProgress, [0.12, 0.17, 0.26], [0, 1, 0]);
  const pillar1Glow = useTransform(smoothProgress, [0.15, 0.19], [0, 1]);
  const pillar2Glow = useTransform(smoothProgress, [0.17, 0.21], [0, 1]);
  const pillar3Glow = useTransform(smoothProgress, [0.19, 0.23], [0, 1]);
  const pillar4Glow = useTransform(smoothProgress, [0.21, 0.25], [0, 1]);

  // Chapter 3: Joey Journey Growth (0.26 - 0.40)
  const joeyOpacity = useTransform(smoothProgress, [0.26, 0.30, 0.40], [0, 1, 0]);
  const joeyScale = useTransform(smoothProgress, [0.27, 0.38], [0.4, 1.2]);

  // Chapter 4: The 30FT Horizontal Leap (0.40 - 0.55)
  const leapOpacity = useTransform(smoothProgress, [0.40, 0.44, 0.55], [0, 1, 0]);
  const leapTranslateX = useTransform(smoothProgress, [0.42, 0.53], ['0%', '-70%']);
  const kangarooJumpY = useTransform(smoothProgress, [0.44, 0.48, 0.52], [0, -180, 0]);

  // Chapter 5: Balance System & Tail Path (0.55 - 0.68)
  const balanceOpacity = useTransform(smoothProgress, [0.55, 0.59, 0.68], [0, 1, 0]);

  // Chapter 6: The Mob Horizon (0.68 - 0.80)
  const mobOpacity = useTransform(smoothProgress, [0.68, 0.72, 0.80], [0, 1, 0]);

  // Chapter 7: Future Orbit Vision (0.80 - 0.90)
  const futureOpacity = useTransform(smoothProgress, [0.80, 0.84, 0.90], [0, 1, 0]);
  const orbitRotation = useTransform(smoothProgress, [0.80, 0.90], [0, 360]);

  // Chapter 8: The Roos Manifesto (0.90 - 0.96)
  const manifestoOpacity = useTransform(smoothProgress, [0.90, 0.92, 0.96], [0, 1, 0]);
  const manifestoIndex = useTransform(smoothProgress, [0.90, 0.912, 0.924, 0.936, 0.95], [0, 1, 2, 3, 4]);

  // Chapter 9: Final Leap CTA (0.96 - 1.0)
  const finalCtaOpacity = useTransform(smoothProgress, [0.96, 0.98, 1.0], [0, 1, 1]);

  return (
    <div
      ref={containerRef}
      className="bg-[#050505] text-white relative min-h-[900vh] font-sans selection:bg-[#FF6B00] selection:text-white"
    >
      {/* 1. CURSOR-FOLLOWING DUST PARALLAX SPOTLIGHT */}
      <div
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
        className="fixed w-[700px] h-[700px] rounded-full bg-radial from-[#FF6B00]/14 via-[#FF6B00]/3 to-transparent blur-[160px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-10 transition-opacity duration-500"
      />

      {/* 2. ATMOSPHERIC PARTICLES MESH */}
      <div className="fixed inset-0 bg-[size:5rem_5rem] bg-[linear-gradient(to_right,#FF6B0008_1px,transparent_1px),linear-gradient(to_bottom,#FF6B0008_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none z-0" />

      {/* FIXED CAMERA VIEWPORT LAYER */}
      <div className="fixed inset-0 w-full h-screen overflow-hidden flex items-center justify-center pointer-events-none z-20">
        
        {/* ========================================================================= */}
        {/* CHAPTER 1: OPENING SCENE (GLOWING EYES & EMERGENCE) */}
        {/* ========================================================================= */}
        <motion.div
          style={{ opacity: eyeOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
        >
          {/* Glowing Eye Tracking Orbs */}
          <div className="relative w-72 h-36 flex items-center justify-between px-8 mb-8">
            <motion.div
              animate={{
                x: (mousePos.x - window.innerWidth / 2) * 0.03,
                y: (mousePos.y - window.innerHeight / 2) * 0.03,
              }}
              className="w-7 h-7 rounded-full bg-[#FF6B00] shadow-[0_0_40px_#FF6B00,0_0_80px_#FF8F3A] animate-pulse"
            />
            <motion.div
              animate={{
                x: (mousePos.x - window.innerWidth / 2) * 0.03,
                y: (mousePos.y - window.innerHeight / 2) * 0.03,
              }}
              className="w-7 h-7 rounded-full bg-[#FF6B00] shadow-[0_0_40px_#FF6B00,0_0_80px_#FF8F3A] animate-pulse"
            />
          </div>

          <motion.div style={{ opacity: chapter1TextOpacity, y: chapter1TextY }} className="space-y-4 max-w-4xl">
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] text-white">
              <span className="block">BEFORE EVERY GREAT LEAP,</span>
              <span className="bg-gradient-to-r from-[#FF6B00] via-[#FF8F3A] to-white bg-clip-text text-transparent">
                THERE IS A STRONG FOUNDATION.
              </span>
            </h1>
            <p className="text-sm font-mono text-zinc-500 tracking-widest uppercase">SCROLL TO BEGIN DOCUMENTARY JOURNEY</p>
          </motion.div>
        </motion.div>

        {/* ========================================================================= */}
        {/* CHAPTER 2: FOUNDATIONS SCENE (CRACKING GROUND & 4 PILLARS) */}
        {/* ========================================================================= */}
        <motion.div
          style={{ opacity: foundationsOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
        >
          <div className="space-y-6 max-w-5xl">
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-white">
              <span className="block">A KANGAROO DOESN'T LEAP BECAUSE IT WANTS TO.</span>
              <span className="text-[#FF6B00]">IT LEAPS BECAUSE ITS FOUNDATIONS ALLOW IT TO.</span>
            </h2>

            {/* 4 EMERGENCE PILLARS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {[
                { name: 'STRATEGY', glow: pillar1Glow, icon: Compass },
                { name: 'BRAND', glow: pillar2Glow, icon: Shield },
                { name: 'TECHNOLOGY', glow: pillar3Glow, icon: Cpu },
                { name: 'MARKETING', glow: pillar4Glow, icon: Zap },
              ].map((pil, idx) => {
                const IconComp = pil.icon;
                return (
                  <motion.div
                    key={idx}
                    style={{ opacity: pil.glow }}
                    className="p-6 rounded-2xl bg-[#0A0A0C] border border-[#FF6B00]/40 text-center space-y-3 shadow-[0_0_30px_rgba(255,107,0,0.2)]"
                  >
                    <IconComp className="w-8 h-8 text-[#FF6B00] mx-auto" />
                    <h4 className="font-mono text-sm font-black text-white">{pil.name}</h4>
                    <div className="h-1 bg-[#FF6B00] rounded-full w-full" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* CHAPTER 3: JOEY JOURNEY (EVOLUTION STAGES) */}
        {/* ========================================================================= */}
        <motion.div
          style={{ opacity: joeyOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
        >
          <motion.div style={{ scale: joeyScale }} className="space-y-8 max-w-4xl">
            <div className="w-32 h-32 mx-auto relative flex items-center justify-center">
              <div className="absolute inset-0 bg-[#FF6B00]/30 rounded-full blur-2xl animate-pulse" />
              <KangarooMascot />
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-3xl sm:text-5xl font-black text-white">
                Every Great Business Begins With Potential.
              </h2>
              <p className="text-base sm:text-xl text-zinc-300 font-medium leading-relaxed max-w-2xl mx-auto">
                Our role isn't to sell services. Our role is to help ideas grow into businesses people remember.
              </p>
            </div>

            {/* STAGE TIMELINE INDICATOR */}
            <div className="flex justify-center gap-4 text-xs font-mono font-bold">
              {['IDEA', 'BUILD', 'REFINE', 'LAUNCH'].map((stg, sIdx) => (
                <div
                  key={sIdx}
                  className="px-4 py-2 rounded-full bg-[#121215] border border-[#FF6B00]/40 text-[#FF6B00] uppercase shadow-md"
                >
                  STAGE {sIdx + 1}: {stg}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ========================================================================= */}
        {/* CHAPTER 4: THE 30FT HORIZONTAL LEAP (CINEMATIC PAN) */}
        {/* ========================================================================= */}
        <motion.div
          style={{ opacity: leapOpacity }}
          className="absolute inset-0 flex items-center overflow-hidden"
        >
          <motion.div style={{ x: leapTranslateX }} className="flex items-center gap-24 whitespace-nowrap pl-24">
            
            {/* KANGAROO JUMPING ICON WITH DUST BURST */}
            <motion.div style={{ y: kangarooJumpY }} className="relative shrink-0">
              <div className="w-24 h-24 rounded-full bg-[#FF6B00] shadow-[0_0_60px_#FF6B00] flex items-center justify-center text-white">
                <Flame className="w-12 h-12" />
              </div>
            </motion.div>

            {/* DISTANCE MARKERS */}
            {['1 FT', '5 FT', '10 FT', '20 FT', '30 FT'].map((marker, mIdx) => (
              <div key={mIdx} className="space-y-2 text-left shrink-0">
                <span className="font-mono text-3xl sm:text-5xl font-black text-[#FF6B00] block">{marker}</span>
                <div className="h-1 bg-zinc-800 w-36 rounded-full" />
              </div>
            ))}

            <div className="space-y-2 shrink-0 pr-24">
              <h2 className="font-display text-4xl sm:text-7xl font-black text-white">
                MOST AGENCIES OPTIMIZE. <span className="text-[#FF6B00]">WE ENGINEER LEAPS.</span>
              </h2>
            </div>

          </motion.div>
        </motion.div>

        {/* ========================================================================= */}
        {/* CHAPTER 5: BALANCE SCENE & TAIL PATH NETWORK */}
        {/* ========================================================================= */}
        <motion.div
          style={{ opacity: balanceOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
        >
          <div className="space-y-8 max-w-4xl">
            <h2 className="font-display text-4xl sm:text-6xl font-black text-white">
              GROWTH WITHOUT BALANCE IS CHAOS.
            </h2>

            {/* TAIL PATH NODES */}
            <div className="flex flex-wrap justify-center gap-4 text-xs font-mono font-bold">
              {['DESIGN', 'TECHNOLOGY', 'MARKETING', 'SALES', 'AUTOMATION'].map((nd, nIdx) => (
                <div
                  key={nIdx}
                  className="p-4 rounded-2xl bg-[#0A0A0C] border border-[#FF6B00]/40 text-white flex items-center gap-2 shadow-lg"
                >
                  <Activity className="w-4 h-4 text-[#FF6B00]" />
                  <span>{nd}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* CHAPTER 6: THE MOB (PARTNERSHIP HORIZON) */}
        {/* ========================================================================= */}
        <motion.div
          style={{ opacity: mobOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
        >
          <div className="space-y-6 max-w-4xl">
            <h2 className="font-display text-4xl sm:text-6xl font-black text-white">
              THE BIGGEST LEAPS ARE NEVER TAKEN ALONE.
            </h2>
            <p className="text-xl sm:text-2xl text-[#FF6B00] font-mono font-bold">
              WE DON'T WORK FOR CLIENTS. WE BUILD ALONGSIDE PARTNERS.
            </p>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* CHAPTER 7: FUTURE VISION (ORBITING ELEMENTS) */}
        {/* ========================================================================= */}
        <motion.div
          style={{ opacity: futureOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
        >
          <div className="space-y-8 max-w-4xl">
            <h2 className="font-display text-4xl sm:text-6xl font-black text-white">
              WE STAY ALERT. SO YOU STAY AHEAD.
            </h2>

            {/* ORBITING ELEMENTS */}
            <div className="relative w-64 h-64 mx-auto flex items-center justify-center">
              <motion.div style={{ rotate: orbitRotation }} className="absolute inset-0 rounded-full border border-dashed border-[#FF6B00]/50" />
              <KangarooMascot />
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* CHAPTER 8: THE ROOS MANIFESTO */}
        {/* ========================================================================= */}
        <motion.div
          style={{ opacity: manifestoOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
        >
          <div className="max-w-4xl space-y-4">
            <h2 className="font-display text-4xl sm:text-7xl font-black text-[#FF6B00] tracking-tight">
              {[
                'WE BELIEVE IN FOUNDATIONS.',
                'WE BELIEVE IN MOMENTUM.',
                'WE BELIEVE IN CLARITY.',
                'WE BELIEVE IN LONG-TERM GROWTH.',
                'WE BELIEVE IN MEANINGFUL LEAPS.',
              ][Math.min(4, Math.floor(manifestoIndex.get() || 0))]}
            </h2>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* CHAPTER 9: FINAL SCENE & 30FT LEAP CALL TO ACTION */}
        {/* ========================================================================= */}
        <motion.div
          style={{ opacity: finalCtaOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-auto"
        >
          <div className="space-y-8 max-w-3xl">
            <div className="space-y-4">
              <h2 className="font-display text-4xl sm:text-7xl font-black text-white">
                READY FOR YOUR NEXT LEAP?
              </h2>
              <p className="text-lg sm:text-2xl text-zinc-300 font-medium">
                LET'S BUILD SOMETHING THAT CAN TRAVEL 30 FEET.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  triggerLeapConfetti();
                  onOpenInquiry();
                }}
                className="px-10 py-5 rounded-full bg-[#FF6B00] text-white font-mono font-extrabold text-sm uppercase tracking-wider hover:bg-[#FF8833] transition-all shadow-[0_15px_40px_rgba(255,107,0,0.45)] cursor-pointer flex items-center justify-center gap-3"
              >
                <span>GET YOUR FREE GROWTH AUDIT</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onNavigateHome}
                className="px-8 py-5 rounded-full bg-[#121215] border border-zinc-800 text-zinc-300 font-mono font-bold text-sm uppercase tracking-wider hover:text-white hover:border-zinc-700 transition-all cursor-pointer"
              >
                Back to Overview
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
