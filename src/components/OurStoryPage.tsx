import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Flame, Scale, Users, Target, ArrowRight } from 'lucide-react';
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
  const [activePillar, setActivePillar] = useState<number>(1);
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
      particleCount: 100,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#FF6B00', '#FF8F3A', '#FFFFFF', '#EA580C'],
    });
  };

  const pillars = [
    {
      num: '01',
      title: 'Strong Legs. Stronger Foundation.',
      description: "A kangaroo's powerful legs make every leap possible. We build the strong basement for your business — strategy, branding, systems and structure that support long-term growth.",
      tag: 'BASEMENT & STRUCTURE',
      icon: Shield,
      align: 'left',
    },
    {
      num: '02',
      title: 'Nurturing Every Joey (Startup).',
      description: 'Every business begins as a small idea with big potential. We nurture that potential with care, guidance and expertise — shaping, building and polishing until you\'re ready to take on the world.',
      tag: 'STARTUP NURTURING',
      icon: Sparkles,
      align: 'left',
    },
    {
      num: '03',
      title: 'Built to Leap 30 Feet.',
      description: 'A kangaroo can leap up to 30 feet in one bound — that\'s 4x to 8x more progress in a single move. We create strategies and systems that deliver the kind of growth that multiplies your brand\'s impact.',
      tag: 'MULTIPLIED GROWTH',
      icon: Flame,
      align: 'center',
    },
    {
      num: '04',
      title: 'Balance That Drives Growth.',
      description: 'The tail keeps a kangaroo balanced and in control. We bring balance to your brand — aligning creativity, technology and marketing so every move is stable, smart and sustainable.',
      tag: 'STABLE & SUSTAINABLE',
      icon: Scale,
      align: 'right',
    },
    {
      num: '05',
      title: 'Stronger Together.',
      description: 'Kangaroos move in mobs, looking out for each other. We work as an extension of your team — collaborating, challenging and supporting you at every stage of your growth journey.',
      tag: 'TEAM MOB COLLABORATION',
      icon: Users,
      align: 'right',
    },
    {
      num: '06',
      title: 'Always Looking Ahead.',
      description: 'Kangaroos are always alert and aware of what\'s ahead. We stay ahead of trends, technology and market shifts — so your brand is always future-ready.',
      tag: 'FUTURE READY',
      icon: Target,
      align: 'right',
    },
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen relative overflow-hidden font-sans selection:bg-[#FF6B00] selection:text-white pt-28 pb-24">
      
      {/* 1. CURSOR-FOLLOWING AMBIENT GLOW SPOTLIGHT */}
      <div
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
        className="fixed w-[750px] h-[750px] rounded-full bg-radial from-[#FF6B00]/14 via-[#FF6B00]/3 to-transparent blur-[160px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0 transition-opacity duration-500"
      />

      {/* 2. BACKGROUND ARCHITECTURAL MESH */}
      <div className="fixed inset-0 bg-[size:4rem_4rem] bg-[linear-gradient(to_right,#FF6B0008_1px,transparent_1px),linear-gradient(to_bottom,#FF6B0008_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_40%,#000_80%,transparent_100%)] pointer-events-none z-0" />

      {/* 3. CINEMATIC SUNSET HORIZON BACKLIGHT ORB */}
      <div className="absolute top-20 right-10 w-[700px] h-[400px] bg-gradient-to-l from-[#FF6B00]/25 via-[#FF8F3A]/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* ========================================================================= */}
        {/* HEADER SECTION (1:1 MATCH TO REFERENCE IMAGE media_1787688564503.jpg) */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto space-y-4"
        >
          {/* EYEBROW BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121215] border border-[#FF6B00]/40 text-xs font-mono font-bold text-[#FF6B00] shadow-lg shadow-[#FF6B00]/10 tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6B00] animate-pulse" />
            <span>THE 6 VALUES THAT SHAPE OUR WORK</span>
          </div>

          {/* MAIN TITLE */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] text-white">
            The 6 Kangaroo <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent">
              Philosophy Pillars
            </span>
          </h1>

          {/* SUBTITLE */}
          <p className="text-base sm:text-xl font-medium text-zinc-400">
            Inspired by nature. Built for growth.
          </p>
        </motion.div>

        {/* ========================================================================= */}
        {/* CINEMATIC WINDING PATHWAY & 6 PILLAR NODES */}
        {/* ========================================================================= */}
        <div className="relative py-12">
          
          {/* BACKGROUND CINEMATIC KANGAROO SILHOUETTE HIGHLIGHTS */}
          <div className="hidden lg:block absolute top-0 left-0 w-80 h-80 opacity-85 pointer-events-none -z-10">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-[#FF6B00]/20 rounded-full blur-3xl" />
              <KangarooMascot />
            </div>
          </div>

          {/* S-CURVE GLOWING ROAD SVG PATH (DESKTOP) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none -z-10">
            <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
              <path
                d="M 100,120 Q 300,200 500,160 T 900,220 T 1100,450 T 800,680 T 300,700"
                stroke="#FF6B00"
                strokeWidth="4"
                strokeDasharray="8 8"
                className="opacity-40 animate-pulse"
              />
              <path
                d="M 100,120 Q 300,200 500,160 T 900,220 T 1100,450 T 800,680 T 300,700"
                stroke="url(#glowGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                className="opacity-70 blur-[3px]"
              />
              <defs>
                <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF6B00" />
                  <stop offset="50%" stopColor="#FF8F3A" />
                  <stop offset="100%" stopColor="#EA580C" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* 6 PILLAR CARDS GRID (1:1 MATCH TO GRAPHIC LAYOUT) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch relative z-10">
            {pillars.map((pil, idx) => {
              const pNum = idx + 1;
              const isActive = activePillar === pNum;
              const IconComp = pil.icon;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  onMouseEnter={() => setActivePillar(pNum)}
                  onClick={() => setActivePillar(pNum)}
                  className={`rounded-3xl p-6 sm:p-8 border text-left flex flex-col justify-between transition-all duration-500 cursor-pointer backdrop-blur-xl relative overflow-hidden ${
                    isActive
                      ? 'bg-[#0F0F14] border-[#FF6B00] shadow-[0_15px_45px_rgba(255,107,0,0.3)] ring-1 ring-[#FF6B00]/40'
                      : 'bg-[#0A0A0C]/90 border-zinc-800/90 hover:border-zinc-700 opacity-90 hover:opacity-100'
                  }`}
                >
                  {/* Top Laser Accent Beam on Active */}
                  {isActive && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B00] via-[#FF8F3A] to-[#EA580C]" />
                  )}

                  <div className="space-y-4 z-10 relative">
                    {/* NODE NUMBER & CIRCULAR ICON BADGE */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all ${
                          isActive
                            ? 'bg-[#FF6B00] text-white border-[#FF8F3A] shadow-lg shadow-[#FF6B00]/40'
                            : 'bg-[#121215] text-[#FF6B00] border-zinc-800'
                        }`}
                      >
                        <IconComp className="w-6 h-6" />
                      </div>

                      <span
                        className={`font-mono text-2xl font-black ${
                          isActive ? 'text-[#FF6B00]' : 'text-zinc-600'
                        }`}
                      >
                        {pil.num}
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3 className="font-display text-xl sm:text-2xl font-black text-white leading-tight">
                      {pil.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed">
                      {pil.description}
                    </p>
                  </div>

                  {/* CAPSULE TAG */}
                  <div className="pt-6 z-10 relative">
                    <span
                      className={`inline-block px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border ${
                        isActive
                          ? 'bg-[#FF6B00]/20 text-[#FF6B00] border-[#FF6B00]/50'
                          : 'bg-[#121215] text-zinc-400 border-zinc-800'
                      }`}
                    >
                      {pil.tag}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* NEXT LEAP WAYPOINT MILESTONE (BOTTOM RIGHT) */}
          <div className="pt-12 flex justify-end">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#FF6B00] text-white font-mono text-xs font-black uppercase tracking-widest shadow-[0_0_35px_rgba(255,107,0,0.5)] border border-[#FF8F3A]/60"
            >
              <div className="w-3 h-3 rounded-full bg-white animate-ping" />
              <span>NEXT LEAP WAYPOINT</span>
            </motion.div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* BOTTOM STATEMENT NARRATIVE (1:1 MATCH TO GRAPHIC FOOTER) */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-10 sm:p-14 rounded-[36px] bg-[#0A0A0C] border border-[#FF6B00]/40 text-center space-y-4 relative overflow-hidden backdrop-blur-2xl shadow-2xl"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent" />

          <p className="text-base sm:text-xl font-medium text-zinc-300">
            At Roos StudioX, we don't just build brands.
          </p>

          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-black text-[#FF6B00] leading-snug max-w-4xl mx-auto">
            We build the strength, momentum and confidence to help your business take its next great leap.
          </h2>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                triggerLeapConfetti();
                onOpenInquiry();
              }}
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-[#FF6B00] text-white font-mono font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#FF8833] transition-all shadow-[0_15px_40px_rgba(255,107,0,0.45)] cursor-pointer flex items-center justify-center gap-3 group"
            >
              <span>Book Your Free Growth Audit</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onNavigateHome}
              className="w-full sm:w-auto px-8 py-5 rounded-full bg-[#121215] border border-zinc-800 text-zinc-300 font-mono font-bold text-xs sm:text-sm uppercase tracking-wider hover:text-white hover:border-zinc-700 transition-all cursor-pointer"
            >
              Back to Home
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
