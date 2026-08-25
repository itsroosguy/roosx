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
      side: 'left',
    },
    {
      num: '02',
      title: 'Nurturing Every Joey (Startup).',
      description: 'Every business begins as a small idea with big potential. We nurture that potential with care, guidance and expertise — shaping, building and polishing until you\'re ready to take on the world.',
      tag: 'STARTUP NURTURING',
      icon: Sparkles,
      side: 'right',
    },
    {
      num: '03',
      title: 'Built to Leap 30 Feet.',
      description: 'A kangaroo can leap up to 30 feet in one bound — that\'s 4x to 8x more progress in a single move. We create strategies and systems that deliver the kind of growth that multiplies your brand\'s impact.',
      tag: 'MULTIPLIED GROWTH',
      icon: Flame,
      side: 'left',
    },
    {
      num: '04',
      title: 'Balance That Drives Growth.',
      description: 'The tail keeps a kangaroo balanced and in control. We bring balance to your brand — aligning creativity, technology and marketing so every move is stable, smart and sustainable.',
      tag: 'STABLE & SUSTAINABLE',
      icon: Scale,
      side: 'right',
    },
    {
      num: '05',
      title: 'Stronger Together.',
      description: 'Kangaroos move in mobs, looking out for each other. We work as an extension of your team — collaborating, challenging and supporting you at every stage of your growth journey.',
      tag: 'TEAM MOB COLLABORATION',
      icon: Users,
      side: 'left',
    },
    {
      num: '06',
      title: 'Always Looking Ahead.',
      description: 'Kangaroos are always alert and aware of what\'s ahead. We stay ahead of trends, technology and market shifts — so your brand is always future-ready.',
      tag: 'FUTURE READY',
      icon: Target,
      side: 'right',
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* ========================================================================= */}
        {/* HEADER SECTION WITH FLOATING SLIGHTLY BIGGER KANGAROO MASCOT */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto space-y-4 relative"
        >
          {/* FLOATING KANGAROO MASCOT (NO BACKGROUND BOX) */}
          <div className="flex justify-center mb-2">
            <div className="w-24 h-24 flex items-center justify-center filter drop-shadow-[0_10px_25px_rgba(255,107,0,0.3)]">
              <KangarooMascot />
            </div>
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
        {/* FLAWLESS ALTERNATING S-CURVE TIMELINE (ZERO OVERLAP, PERFECT FLOW) */}
        {/* ========================================================================= */}
        <div className="relative py-8">
          
          {/* CENTRAL GLOWING ROAD LINE (DESKTOP & MOBILE) */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-gradient-to-b from-[#FF6B00]/20 via-[#FF6B00]/70 to-[#FF6B00]/20 pointer-events-none z-0 hidden md:block">
            <div className="absolute inset-0 bg-[#FF6B00] blur-[4px] opacity-60" />
          </div>

          {/* 6 UNBOXED PILLAR NODES IN PERFECT ALTERNATING SEQUENCE */}
          <div className="space-y-16 md:space-y-24 relative z-10">
            {pillars.map((pil, idx) => {
              const pNum = idx + 1;
              const isActive = activePillar === pNum;
              const IconComp = pil.icon;
              const isLeft = pil.side === 'left';

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  onMouseEnter={() => setActivePillar(pNum)}
                  onClick={() => setActivePillar(pNum)}
                  className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 cursor-pointer ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* TEXT CONTENT COLUMN */}
                  <div className={`w-full md:w-1/2 space-y-3 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    {/* NODE NUMBER & CAPSULE */}
                    <div className={`flex items-center gap-3 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                      <span className="font-mono text-3xl sm:text-4xl font-black text-[#FF6B00]">
                        {pil.num}
                      </span>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${
                          isActive
                            ? 'bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/60'
                            : 'bg-[#121215] text-zinc-400 border border-zinc-800'
                        }`}
                      >
                        {pil.tag}
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3 className="font-display text-2xl sm:text-3xl font-black text-white leading-tight">
                      {pil.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-sm sm:text-base text-zinc-300 font-medium leading-relaxed max-w-lg">
                      {pil.description}
                    </p>
                  </div>

                  {/* CENTRAL CIRCULAR GLOWING NODE ICON */}
                  <div className="relative shrink-0 z-20 my-2 md:my-0">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'bg-[#FF6B00] text-white shadow-[0_0_40px_#FF6B00] scale-110'
                          : 'bg-[#121215] text-[#FF6B00] border border-[#FF6B00]/50 shadow-md'
                      }`}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  {/* EMPTY BALANCING COLUMN FOR PERFECT GRID S-CURVE ALIGNMENT */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>

          {/* NEXT LEAP WAYPOINT MILESTONE (BOTTOM CENTER) */}
          <div className="pt-20 flex justify-center">
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FF6B00] text-white font-mono text-xs font-black uppercase tracking-widest shadow-[0_0_40px_rgba(255,107,0,0.6)] border border-[#FF8F3A]"
            >
              <div className="w-3.5 h-3.5 rounded-full bg-white animate-ping" />
              <span>NEXT LEAP WAYPOINT</span>
            </motion.div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* BOTTOM STATEMENT NARRATIVE (UNBOXED OPEN ATMOSPHERIC FEEL) */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-12 text-center space-y-4 relative overflow-hidden"
        >
          <div className="w-3/4 h-0.5 bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent mx-auto mb-6 opacity-60" />

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
