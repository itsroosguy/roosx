import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Flame, Scale, Users, Target, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { KangarooMascot } from './mascot/KangarooMascot';

interface OurStoryPageProps {
  onOpenInquiry: () => void;
  isDarkMode?: boolean;
  onNavigateHome: () => void;
  onNavigateWorks?: () => void;
}

// HIGH-CRAFT WORD-BY-WORD KINETIC REVEAL COMPONENT
const KineticTextReveal: React.FC<{
  text: string;
  className?: string;
  isDarkMode?: boolean;
  highlightWords?: string[];
}> = ({ text, className = '', isDarkMode = true, highlightWords = [] }) => {
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.025,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={`inline-block ${className}`}
    >
      {words.map((word, i) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9®]/g, '');
        const isHighlight = highlightWords.some(hw => cleanWord.toLowerCase().includes(hw.toLowerCase()));

        return (
          <motion.span
            key={i}
            variants={wordVariants}
            className={`inline-block mr-[0.25em] ${
              isHighlight
                ? 'text-[#FF7A1A] font-medium drop-shadow-[0_0_12px_rgba(255,122,26,0.3)]'
                : isDarkMode
                  ? 'text-white'
                  : 'text-[#111111]'
            }`}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.span>
  );
};

export const OurStoryPage: React.FC<OurStoryPageProps> = ({
  onOpenInquiry,
  isDarkMode = true,
  onNavigateHome,
  onNavigateWorks,
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
    },
    {
      num: '02',
      title: 'Nurturing Every Joey (Startup).',
      description: 'Every business begins as a small idea with big potential. We nurture that potential with care, guidance and expertise — shaping, building and polishing until you\'re ready to take on the world.',
      tag: 'STARTUP NURTURING',
      icon: Sparkles,
    },
    {
      num: '03',
      title: 'Built to Leap 30 Feet.',
      description: 'A kangaroo doesn\'t take small steps. It leaps. We don\'t design for marginal gains — we build for exponential leaps in growth, authority and customer acquisition.',
      tag: 'EXPONENTIAL GROWTH',
      icon: Flame,
    },
    {
      num: '04',
      title: 'Balance That Drives Growth.',
      description: 'The kangaroo uses its tail for balance while moving at high speeds. We maintain the balance between bold creative design and strategic business goals.',
      tag: 'BALANCED STRATEGY',
      icon: Scale,
    },
    {
      num: '05',
      title: 'Stronger Together.',
      description: 'Kangaroos travel in a mob for strength, protection and speed. We operate as an extension of your team — aligning vision, effort and execution.',
      tag: 'DEEP COLLABORATION',
      icon: Users,
    },
    {
      num: '06',
      title: 'Always Looking Ahead.',
      description: 'A kangaroo cannot walk backwards. It only moves forward. We build with future-proof tech and scalable strategy so your business is always moving forward.',
      tag: 'FORWARD MOTION',
      icon: Target,
    },
  ];

  return (
    <div className={`min-h-screen relative overflow-hidden font-sans pt-28 pb-24 transition-colors duration-500 selection:bg-[#FF7A1A] selection:text-white ${
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
      <div className={`fixed inset-0 bg-[size:4rem_4rem] pointer-events-none z-0 ${
        isDarkMode
          ? 'bg-[linear-gradient(to_right,#FF6B0008_1px,transparent_1px),linear-gradient(to_bottom,#FF6B0008_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_40%,#000_80%,transparent_100%)]'
          : 'bg-[linear-gradient(to_right,#E4E4E760_1px,transparent_1px),linear-gradient(to_bottom,#E4E4E760_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_40%,#fff_80%,transparent_100%)]'
      }`} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* ========================================================================= */}
        {/* DD.NYC STYLE KINETIC TEXT REVEAL MANIFESTO SECTION */}
        {/* ========================================================================= */}
        <section className="pt-6 sm:pt-12 space-y-12">
          <div className="max-w-5xl space-y-8 text-left">
            
            {/* MAIN EDITORIAL STATEMENT WORD-BY-WORD KINETIC REVEAL */}
            <h1 className="font-display text-xl sm:text-3xl md:text-[34px] font-normal leading-[1.5] tracking-[-0.015em]">
              <KineticTextReveal
                text="Roos StudioX® is a creative growth studio built for businesses that want more than just a website, logo, or marketing campaign."
                isDarkMode={isDarkMode}
                highlightWords={['Roos', 'StudioX®', 'growth']}
              />
              {' '}
              <KineticTextReveal
                text="We partner with ambitious brands to build strong foundations, create meaningful digital experiences, and develop growth systems that scale."
                isDarkMode={isDarkMode}
                highlightWords={['ambitious', 'growth']}
              />
              {' '}
              <KineticTextReveal
                text="By combining strategy, design, technology, and marketing, we help businesses transform ideas into brands, brands into experiences, and experiences into measurable growth."
                isDarkMode={isDarkMode}
                highlightWords={['strategy', 'design', 'technology']}
              />
              {' '}
              <motion.a
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                href="#works"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigateWorks) onNavigateWorks();
                  else window.location.hash = '#works';
                }}
                className="text-[#FF7A1A] font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer transition-colors group ml-1"
              >
                <span>See our work</span>
                <ArrowRight className="w-4 h-4 inline group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </h1>

            {/* PARAGRAPH 3 & 4 SECONDARY EDITORIAL BLOCK WITH BLUR REVEAL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <motion.p
                initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className={`text-sm sm:text-base font-normal leading-relaxed ${
                  isDarkMode ? 'text-zinc-300' : 'text-zinc-600'
                }`}
              >
                We're not a traditional agency focused on delivering isolated services. We work as an extension of your team, connecting every piece of your business journey—from positioning and branding to websites, automation, and customer acquisition—into one cohesive growth ecosystem.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className={`text-sm sm:text-base font-normal leading-relaxed ${
                  isDarkMode ? 'text-zinc-300' : 'text-zinc-600'
                }`}
              >
                Our name is inspired by the kangaroo, a symbol of strength, momentum, and forward movement. Just as every leap begins with powerful foundations, we believe sustainable business growth starts with clarity, strategy, and systems that are built to last.
              </motion.p>
            </div>

            {/* PARAGRAPH 5 CLOSING STATEMENT WITH SMOOTH REVEAL */}
            <motion.p
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className={`text-base sm:text-lg font-medium leading-relaxed max-w-3xl pt-2 ${
                isDarkMode ? 'text-zinc-200' : 'text-zinc-800'
              }`}
            >
              At Roos StudioX, we don't chase trends or build for short-term attention. We create brands, experiences, and growth engines designed to help businesses move forward with confidence and take meaningful leaps toward their goals.
            </motion.p>

            {/* DD.NYC STYLE BOTTOM ACCENT LINE & CATEGORY LABEL */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-4 pt-8 text-xs font-mono tracking-widest text-zinc-500 uppercase"
            >
              <div className="w-12 h-px bg-[#FF7A1A]" />
              <span>ROOS STUDIOX® CREATIVE SERVICES & STORY</span>
            </motion.div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* THE 6 KANGAROO PHILOSOPHY PILLARS */}
        {/* ========================================================================= */}
        <section className="space-y-16 pt-8 border-t border-zinc-800/80">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="flex justify-center mb-2">
              <div className="w-20 h-20 flex items-center justify-center filter drop-shadow-[0_10px_25px_rgba(255,107,0,0.3)]">
                <KangarooMascot />
              </div>
            </div>

            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF7A1A]">OUR GUIDING PHILOSOPHY</span>
            <h2 className={`font-display text-3xl sm:text-5xl font-black ${
              isDarkMode ? 'text-white' : 'text-[#111111]'
            }`}>
              The 6 Kangaroo Philosophy Pillars
            </h2>
            <p className={`text-xs sm:text-sm font-medium ${
              isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}>Discover the core values that guide how we build brands, websites, and business momentum.</p>
          </div>

          <div className="relative py-4">
            <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-gradient-to-b from-transparent via-[#FF7A1A]/40 to-transparent pointer-events-none hidden md:block" />

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
                    <div className={`w-full md:w-1/2 space-y-3 ${
                      isEven ? 'md:text-right md:pr-4' : 'md:text-left md:pl-4'
                    }`}>
                      <div className={`flex items-center gap-3 ${
                        isEven ? 'md:justify-end' : 'md:justify-start'
                      }`}>
                        <span className="font-mono text-xl font-black text-[#FF7A1A]">{pillar.num}</span>
                        <span className="px-3 py-1 rounded-full bg-[#FF7A1A]/15 text-[#FF7A1A] font-mono text-[10px] font-bold border border-[#FF7A1A]/30 uppercase tracking-wider">
                          {pillar.tag}
                        </span>
                      </div>

                      <h3 className={`font-display text-2xl sm:text-3xl font-black transition-colors ${
                        isDarkMode ? 'text-white group-hover:text-[#FF7A1A]' : 'text-[#111111] group-hover:text-[#FF7A1A]'
                      }`}>
                        {pillar.title}
                      </h3>

                      <p className={`text-sm sm:text-base font-medium leading-relaxed max-w-lg ${
                        isEven ? 'md:ml-auto' : 'md:mr-auto'
                      } ${isDarkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>
                        {pillar.description}
                      </p>
                    </div>

                    <div className="relative flex items-center justify-center shrink-0 z-10">
                      <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                        activePillar === idx + 1
                          ? 'bg-[#FF7A1A] border-[#FF7A1A] text-white shadow-[0_0_30px_rgba(255,122,26,0.6)] scale-110'
                          : isDarkMode
                            ? 'bg-[#0A0A0C] border-zinc-800 text-zinc-400 group-hover:border-[#FF7A1A]/60 group-hover:text-white'
                            : 'bg-white border-zinc-300 text-zinc-600 group-hover:border-[#FF7A1A]/60 group-hover:text-[#111111]'
                      }`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="hidden md:block w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FINAL CLOSING MANIFESTO & CTA */}
        {/* ========================================================================= */}
        <section className="py-12 text-center space-y-8 relative">
          <div className="w-3/4 h-0.5 bg-gradient-to-r from-transparent via-[#FF7A1A] to-transparent mx-auto opacity-60" />

          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF7A1A]">READY FOR YOUR NEXT LEAP?</span>
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
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-[#FF7A1A] text-white font-mono font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#FF8833] transition-all shadow-[0_15px_40px_rgba(255,122,26,0.45)] cursor-pointer flex items-center justify-center gap-3 group"
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
