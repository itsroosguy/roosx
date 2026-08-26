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
  isDarkMode = true,
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
      description: 'A kangaroo doesn\'t take small steps. It leaps. We don\'t design for marginal gains — we build for exponential leaps in growth, authority and customer acquisition.',
      tag: 'EXPONENTIAL GROWTH',
      icon: Flame,
      side: 'left',
    },
    {
      num: '04',
      title: 'Balance That Drives Growth.',
      description: 'The kangaroo uses its tail for balance while moving at high speeds. We maintain the balance between bold creative design and strategic business goals.',
      tag: 'BALANCED STRATEGY',
      icon: Scale,
      side: 'right',
    },
    {
      num: '05',
      title: 'Stronger Together.',
      description: 'Kangaroos travel in a mob for strength, protection and speed. We operate as an extension of your team — aligning vision, effort and execution.',
      tag: 'DEEP COLLABORATION',
      icon: Users,
      side: 'left',
    },
    {
      num: '06',
      title: 'Always Looking Ahead.',
      description: 'A kangaroo cannot walk backwards. It only moves forward. We build with future-proof tech and scalable strategy so your business is always moving forward.',
      tag: 'FORWARD MOTION',
      icon: Target,
      side: 'right',
    },
  ];

  return (
    <div className={`min-h-screen relative overflow-hidden font-sans pt-28 pb-24 transition-colors duration-500 selection:bg-[#FF6B00] selection:text-white ${
      isDarkMode ? 'bg-[#050505] text-[#D4D4D8]' : 'bg-[#FAF9F6] text-[#111111]'
    }`}>
      
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
        {/* HEADER SECTION WITH FLOATING KANGAROO MASCOT */}
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
          <h1 className={`font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] ${
            isDarkMode ? 'text-white' : 'text-[#111111]'
          }`}>
            The 6 Kangaroo <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#FF6B00] via-[#FF8F3A] to-amber-500 bg-clip-text text-transparent">
              Philosophy Pillars
            </span>
          </h1>

          {/* SUBHEADING / MANIFESTO STATEMENT */}
          <p className={`text-base sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed ${
            isDarkMode ? 'text-zinc-300' : 'text-zinc-600'
          }`}>
            Inspired by nature. Built for growth. Discover the core values that guide how we build brands, websites, and business momentum.
          </p>
        </motion.div>

        {/* ========================================================================= */}
        {/* UNBOXED ALTERNATING S-CURVE TIMELINE DISPLAY */}
        {/* ========================================================================= */}
        <div className="relative py-8">
          
          {/* CENTRAL S-CURVE TIMELINE GUIDELINE */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-gradient-to-b from-transparent via-[#FF6B00]/40 to-transparent pointer-events-none hidden md:block" />

          <div className="space-y-16 sm:space-y-24">
            {pillars.map((pillar, idx) => {
              const isEven = idx % 2 === 0;
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={pillar.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  onClick={() => setActivePillar(idx + 1)}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 cursor-pointer group ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* TEXT COLUMN */}
                  <div className={`w-full md:w-1/2 space-y-3 ${
                    isEven ? 'md:text-right md:pr-4' : 'md:text-left md:pl-4'
                  }`}>
                    <div className={`flex items-center gap-3 ${
                      isEven ? 'md:justify-end' : 'md:justify-start'
                    }`}>
                      <span className="font-mono text-xl font-black text-[#FF6B00]">{pillar.num}</span>
                      <span className="px-3 py-1 rounded-full bg-[#FF6B00]/15 text-[#FF6B00] font-mono text-[10px] font-bold border border-[#FF6B00]/30 uppercase tracking-wider">
                        {pillar.tag}
                      </span>
                    </div>

                    <h3 className={`font-display text-2xl sm:text-3xl font-black transition-colors ${
                      isDarkMode ? 'text-white group-hover:text-[#FF6B00]' : 'text-[#111111] group-hover:text-[#FF6B00]'
                    }`}>
                      {pillar.title}
                    </h3>

                    <p className={`text-sm sm:text-base font-medium leading-relaxed max-w-lg ${
                      isEven ? 'md:ml-auto' : 'md:mr-auto'
                    } ${isDarkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>
                      {pillar.description}
                    </p>
                  </div>

                  {/* CENTER FLOATING MASCOT / ICON NODE (NO RECTANGLE BOX) */}
                  <div className="relative flex items-center justify-center shrink-0 z-10">
                    <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                      activePillar === idx + 1
                        ? 'bg-[#FF6B00] border-[#FF6B00] text-white shadow-[0_0_30px_rgba(255,107,0,0.6)] scale-110'
                        : isDarkMode
                          ? 'bg-[#0A0A0C] border-zinc-800 text-zinc-400 group-hover:border-[#FF6B00]/60 group-hover:text-white'
                          : 'bg-white border-zinc-300 text-zinc-600 group-hover:border-[#FF6B00]/60 group-hover:text-[#111111]'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* BALANCING SPACE FOR ALTERNATING LAYOUT */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FINAL CLOSING MANIFESTO & CTA */}
        {/* ========================================================================= */}
        <section className="py-12 text-center space-y-8 relative">
          <div className="w-3/4 h-0.5 bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent mx-auto opacity-60" />

          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00]">READY FOR YOUR NEXT LEAP?</span>
            <h2 className={`font-display text-3xl sm:text-5xl font-black ${
              isDarkMode ? 'text-white' : 'text-[#111111]'
            }`}>
              At Roos StudioX, we don't just build brands.
            </h2>
            <p className={`text-base sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-zinc-300' : 'text-zinc-600'
            }`}>
              We build the strength, momentum and confidence to help your business take its next great leap.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                triggerLeapConfetti();
                onOpenInquiry();
              }}
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-[#FF6B00] text-white font-mono font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#FF8833] transition-all shadow-[0_15px_40px_rgba(255,107,0,0.45)] cursor-pointer flex items-center justify-center gap-3 group"
            >
              <span>Take Your Next Leap</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onNavigateHome}
              className={`w-full sm:w-auto px-8 py-5 rounded-full font-mono font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${
                isDarkMode
                  ? 'bg-[#121215] border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700'
                  : 'bg-white border border-zinc-300 text-zinc-700 hover:text-black hover:border-zinc-400'
              }`}
            >
              Back to Overview
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
