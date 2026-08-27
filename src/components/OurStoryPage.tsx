import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll, MotionValue } from 'framer-motion';
import { Shield, Sparkles, Flame, Scale, Users, Target, ArrowRight, Linkedin, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface OurStoryPageProps {
  onOpenInquiry: () => void;
  isDarkMode?: boolean;
  onNavigateHome: () => void;
  onNavigateWorks?: () => void;
}

// SCROLL-DRIVEN WORD-BY-WORD TEXT REVEAL COMPONENT
const ScrollWord: React.FC<{
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  isDarkMode?: boolean;
  isHighlight?: boolean;
  fontWeightClassName?: string;
}> = ({ word, progress, range, isDarkMode = true, isHighlight = false, fontWeightClassName = 'font-normal' }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [6, 0]);

  const activeWeightClass = isHighlight ? 'font-black' : fontWeightClassName;

  return (
    <span className={`relative inline-block mr-[0.22em] last:mr-0 select-none ${activeWeightClass}`}>
      {/* Ghost Background Word */}
      <span className={`opacity-15 pointer-events-none ${activeWeightClass} ${
        isDarkMode ? 'text-zinc-600' : 'text-zinc-300'
      }`}>
        {word}
      </span>

      {/* Active Revealing Word */}
      <motion.span
        style={{ opacity, y }}
        className={`absolute inset-0 whitespace-nowrap ${activeWeightClass} ${
          isHighlight
            ? 'text-[#FF7A1A] drop-shadow-[0_0_16px_rgba(255,122,26,0.45)]'
            : isDarkMode
              ? 'text-white'
              : 'text-[#111111]'
        }`}
      >
        {word}
      </motion.span>
    </span>
  );
};

const ScrollTextBlock: React.FC<{
  text: string;
  progress: MotionValue<number>;
  startProgress: number;
  endProgress: number;
  className?: string;
  isDarkMode?: boolean;
  highlightWords?: string[];
  fontWeightClassName?: string;
}> = ({ text, progress, startProgress, endProgress, className = '', isDarkMode = true, highlightWords = [], fontWeightClassName = 'font-normal' }) => {
  const words = text.split(' ');
  const step = (endProgress - startProgress) / words.length;

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, i) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9®]/g, '');
        const isHighlight = highlightWords.some(hw => cleanWord.toLowerCase().includes(hw.toLowerCase()));
        const wordStart = startProgress + i * step;
        const wordEnd = wordStart + step * 1.5;

        return (
          <ScrollWord
            key={i}
            word={word}
            progress={progress}
            range={[wordStart, Math.min(wordEnd, endProgress)]}
            isDarkMode={isDarkMode}
            isHighlight={isHighlight}
            fontWeightClassName={fontWeightClassName}
          />
        );
      })}
    </span>
  );
};

export const OurStoryPage: React.FC<OurStoryPageProps> = ({
  onOpenInquiry,
  isDarkMode = true,
  onNavigateHome,
  onNavigateWorks,
}) => {
  const manifestoRef = useRef<HTMLDivElement>(null);

  // SCROLL PROGRESS OVER MANIFESTO SECTION
  const { scrollYProgress } = useScroll({
    target: manifestoRef,
    offset: ['start 75%', 'end 35%'],
  });

  // MOUSE PARALLAX PHYSICS SPRINGS
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // 3D TILT MAPS
  const rotateX = useTransform(smoothMouseY, [-400, 400], [3, -3]);
  const rotateY = useTransform(smoothMouseX, [-600, 600], [-5, 5]);

  // SCROLL-DRIVEN HERO TEXT ZOOM OUT MAP
  const rawLeadScale = useTransform(scrollYProgress, [0, 0.35], [1.85, 1]);
  const leadScale = useSpring(rawLeadScale, { stiffness: 90, damping: 22 });

  const rawLeadY = useTransform(scrollYProgress, [0, 0.35], [70, 0]);
  const leadY = useSpring(rawLeadY, { stiffness: 90, damping: 22 });

  // SECONDARY TEXT CONTENT REVEAL MAP
  const secondaryOpacity = useTransform(scrollYProgress, [0.06, 0.28], [0, 1]);
  const secondaryY = useTransform(scrollYProgress, [0.06, 0.28], [40, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = e.clientX - innerWidth / 2;
      const offsetY = e.clientY - innerHeight / 2;
      mouseX.set(offsetX);
      mouseY.set(offsetY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const triggerLeapConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#FF6B00', '#FF8F3A', '#FFFFFF', '#EA580C'],
    });
  };

  const journeyMilestones = [
    {
      num: '01',
      title: 'Strong Legs. Stronger Foundation.',
      description: "A kangaroo's powerful legs make every leap possible. We build the strong basement for your business — strategy, branding, systems and structure that support long-term growth.",
      deliverables: ['Strategic Brand Positioning', 'Identity System', 'Core Messaging Architecture'],
      icon: Shield,
    },
    {
      num: '02',
      title: 'Nurturing Every Joey (Startup).',
      description: 'Every business begins as a small idea with big potential. We nurture that potential with care, guidance and expertise — shaping, building and polishing until you\'re ready to take on the world.',
      deliverables: ['Value Proposition Polish', 'MVP Digital Assets', 'Market Fit Validation'],
      icon: Sparkles,
    },
    {
      num: '03',
      title: 'Built to Leap 30 Feet.',
      description: 'A kangaroo doesn\'t take small steps. It leaps. We don\'t design for marginal gains — we build for exponential leaps in growth, authority and customer acquisition.',
      deliverables: ['High-Conversion 3D Web Experience', 'Cinematic Motion Design', 'Customer Acquisition Engines'],
      icon: Flame,
    },
    {
      num: '04',
      title: 'Balance That Drives Growth.',
      description: 'The kangaroo uses its tail for balance while moving at high speeds. We maintain the balance between bold creative design and strategic business goals.',
      deliverables: ['CRO Optimization', 'Multi-Channel Consistency', 'Brand & Performance Balance'],
      icon: Scale,
    },
    {
      num: '05',
      title: 'Stronger Together.',
      description: 'Kangaroos travel in a mob for strength, protection and speed. We operate as an extension of your team — aligning vision, effort and execution.',
      deliverables: ['Dedicated Co-Pilot Partnership', 'Executive Advisory', 'Unified Team Execution'],
      icon: Users,
    },
    {
      num: '06',
      title: 'Always Looking Ahead.',
      description: 'A kangaroo cannot walk backwards. It only moves forward. We build with future-proof tech and scalable strategy so your business is always moving forward.',
      deliverables: ['Autonomous AI Automation', 'Scalable Tech Stack', 'Market Leadership Engine'],
      icon: Target,
    },
  ];

  return (
    <div className={`min-h-screen relative overflow-hidden font-sans pt-28 sm:pt-32 pb-12 transition-colors duration-500 selection:bg-[#FF7A1A] selection:text-white ${
      isDarkMode ? 'bg-[#050505] text-[#D4D4D8]' : 'bg-[#FAF9F6] text-[#111111]'
    }`}>
      
      {/* 1. DYNAMIC MOUSE-FOLLOWING AMBIENT GLOW LIGHTING ORB */}
      <motion.div
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
        }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full bg-radial from-[#FF7A1A]/16 via-[#FF7A1A]/4 to-transparent blur-[160px] pointer-events-none z-0 transition-opacity duration-500"
      />

      {/* 2. BACKGROUND ARCHITECTURAL MESH */}
      <div className={`fixed inset-0 bg-[size:4rem_4rem] pointer-events-none z-0 ${
        isDarkMode
          ? 'bg-[linear-gradient(to_right,#FF6B0008_1px,transparent_1px),linear-gradient(to_bottom,#FF6B0008_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_40%,#000_80%,transparent_100%)]'
          : 'bg-[linear-gradient(to_right,#E4E4E760_1px,transparent_1px),linear-gradient(to_bottom,#E4E4E760_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_40%,#fff_80%,transparent_100%)]'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* ========================================================================= */}
        {/* MANIFESTO SECTION */}
        {/* ========================================================================= */}
        <section ref={manifestoRef} className="pt-4 space-y-6 flex flex-col justify-center">
          <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="max-w-7xl w-full space-y-6 text-left transition-transform duration-200 ease-out"
          >
            
            {/* MAIN EDITORIAL LEAD */}
            <motion.h1
              style={{ scale: leadScale, y: leadY, originX: 0, originY: 0 }}
              className="w-full lg:w-[130%] max-w-[1450px] font-display text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold sm:font-extrabold leading-[1.15] tracking-[-0.04em] transition-shadow"
            >
              <ScrollTextBlock
                text="More than a creative studio,"
                progress={scrollYProgress}
                startProgress={0.05}
                endProgress={0.10}
                isDarkMode={isDarkMode}
                highlightWords={[]}
                fontWeightClassName="font-bold sm:font-extrabold"
              />
              <br />
              <ScrollTextBlock
                text="we're a growth partner helping"
                progress={scrollYProgress}
                startProgress={0.10}
                endProgress={0.16}
                isDarkMode={isDarkMode}
                highlightWords={['growth', 'partner']}
                fontWeightClassName="font-bold sm:font-extrabold"
              />
              <br />
              <ScrollTextBlock
                text="businesses turn bold ideas into"
                progress={scrollYProgress}
                startProgress={0.16}
                endProgress={0.22}
                isDarkMode={isDarkMode}
                highlightWords={[]}
                fontWeightClassName="font-bold sm:font-extrabold"
              />
              <br />
              <ScrollTextBlock
                text="brands, experiences and momentum."
                progress={scrollYProgress}
                startProgress={0.22}
                endProgress={0.28}
                isDarkMode={isDarkMode}
                highlightWords={['momentum']}
                fontWeightClassName="font-bold sm:font-extrabold"
              />
            </motion.h1>

            {/* SECONDARY CONTENT BLOCK */}
            <motion.div style={{ opacity: secondaryOpacity, y: secondaryY }} className="space-y-6">
              {/* SECONDARY STATEMENT */}
              <p className="font-display text-xl sm:text-2xl md:text-[28px] font-normal leading-[1.4] tracking-[-0.015em] pt-1">
                <ScrollTextBlock
                  text="Great brands aren't built by accident. They're forged through clarity, relentless speed, and the confidence to move forward when others stand still."
                  progress={scrollYProgress}
                  startProgress={0.25}
                  endProgress={0.48}
                  isDarkMode={isDarkMode}
                  highlightWords={['clarity', 'speed', 'forward']}
                  fontWeightClassName="font-normal"
                />
                <br /><br />
                <ScrollTextBlock
                  text="Roos StudioX exists for leaders ready to make that leap."
                  progress={scrollYProgress}
                  startProgress={0.48}
                  endProgress={0.60}
                  isDarkMode={isDarkMode}
                  highlightWords={['Roos', 'StudioX', 'leap']}
                  fontWeightClassName="font-semibold"
                />
              </p>

              {/* SEE OUR WORK LINK */}
              <div className="flex justify-end pt-1">
                <motion.a
                  whileHover={{ scale: 1.05, x: 4 }}
                  whileTap={{ scale: 0.95 }}
                  href="#works"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigateWorks) onNavigateWorks();
                    else window.location.hash = '#works';
                  }}
                  className="text-[#FF7A1A] font-semibold text-base sm:text-lg hover:underline inline-flex items-center gap-2 cursor-pointer transition-colors group"
                >
                  <span>See our work</span>
                  <ArrowRight className="w-5 h-5 inline group-hover:translate-x-1.5 transition-transform" />
                </motion.a>
              </div>

              {/* SECONDARY EDITORIAL STORYTELLING BLOCK */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <p className={`text-sm sm:text-base font-normal leading-relaxed ${
                  isDarkMode ? 'text-zinc-300' : 'text-zinc-600'
                }`}>
                  <ScrollTextBlock
                    text="Most businesses don't stall from a lack of potential — they stall from slow agencies and disconnected strategy. We operate as your growth co-pilot, connecting brand strategy, digital design, and AI automation into one unified revenue engine."
                    progress={scrollYProgress}
                    startProgress={0.6}
                    endProgress={0.75}
                    isDarkMode={isDarkMode}
                  />
                </p>

                <p className={`text-sm sm:text-base font-normal leading-relaxed ${
                  isDarkMode ? 'text-zinc-300' : 'text-zinc-600'
                }`}>
                  <ScrollTextBlock
                    text="Inspired by the kangaroo — a symbol of strength and forward momentum — we build scalable digital systems engineered so your business is always moving forward."
                    progress={scrollYProgress}
                    startProgress={0.75}
                    endProgress={0.88}
                    isDarkMode={isDarkMode}
                  />
                </p>
              </div>

              {/* CLOSING STATEMENT */}
              <p className={`text-base sm:text-lg font-medium leading-relaxed max-w-3xl pt-1 ${
                isDarkMode ? 'text-zinc-200' : 'text-zinc-800'
              }`}>
                <ScrollTextBlock
                  text="We don't build for short-term noise. We engineer high-performance digital products designed to command category authority."
                  progress={scrollYProgress}
                  startProgress={0.88}
                  endProgress={0.98}
                  isDarkMode={isDarkMode}
                />
              </p>
            </motion.div>

          </motion.div>
        </section>

        {/* ========================================================================= */}
        {/* DEDICATED EXECUTIVE FOUNDER SHOWCASE SECTION */}
        {/* ========================================================================= */}
        <section className={`py-10 sm:py-14 relative z-10 rounded-[32px] border p-6 sm:p-10 overflow-hidden backdrop-blur-2xl transition-all shadow-2xl ${
          isDarkMode ? 'bg-[#0E0E12]/95 border-zinc-800/90 shadow-black/80' : 'bg-white border-zinc-200 shadow-xl'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: EXECUTIVE FOUNDER PORTRAIT PHOTO STAGE (5 COLS) */}
            <div className="lg:col-span-5 relative group">
              <div className="relative rounded-[28px] overflow-hidden border-2 border-zinc-800/90 shadow-2xl bg-[#08080A] group-hover:border-[#FF7A1A]/70 transition-all duration-500">
                <img
                  src="/images/praveen-aryan.png"
                  alt="Praveen Aryan — Founder & Managing Director, Roos StudioX"
                  className="w-full h-auto max-h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-85" />
                
                {/* FLOATING FOUNDER INFO ON PHOTO */}
                <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-between">
                  <div>
                    <h4 className="font-display text-base font-bold text-white flex items-center gap-1.5">
                      Praveen Aryan <CheckCircle2 className="w-4 h-4 text-[#FF7A1A]" />
                    </h4>
                    <p className="text-[10px] font-mono text-[#FF7A1A] uppercase tracking-wider font-semibold">
                      Founder & Managing Director
                    </p>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/itsroosguy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-[#0077B5] hover:bg-[#005E93] text-white transition-all shadow-md shrink-0"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin className="w-3.5 h-3.5 fill-current" />
                  </a>
                </div>
              </div>

              {/* Ambient Backlight Glow */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#FF7A1A]/20 to-transparent rounded-[36px] blur-2xl -z-10 group-hover:from-[#FF7A1A]/35 transition-all duration-500" />
            </div>

            {/* RIGHT COLUMN: EXECUTIVE FOUNDER NARRATIVE & TRUST MATRIX (7 COLS) */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <h2 className={`font-display text-2xl sm:text-4xl font-black leading-tight ${
                isDarkMode ? 'text-white' : 'text-[#111111]'
              }`}>
                Building Growth Engines That Stand The Test of Scale
              </h2>

              <div className={`space-y-3 text-sm font-medium leading-relaxed ${
                isDarkMode ? 'text-zinc-300' : 'text-zinc-700'
              }`}>
                <p className={`border-l-2 border-[#FF7A1A] pl-3.5 italic ${
                  isDarkMode ? 'text-zinc-200' : 'text-zinc-800'
                }`}>
                  "I founded Roos StudioX with a singular mission: to bridge the gap between high-end brand aesthetics and measurable business revenue."
                </p>
                <p>
                  Over 7+ years of strategic consulting across international markets in the UAE, Canada, and APAC, I’ve seen brilliant founders struggle with fragmented agencies, bloated budgets, and zero accountability.
                </p>
                <p>
                  We combine strategy, design, technology and AI automation to create high-performance digital ecosystems that strengthen brands, improve customer experiences and drive sustainable business growth.
                </p>
              </div>

              {/* METRICS & LINKEDIN CALLOUT */}
              <div className={`pt-4 border-t flex flex-wrap items-center justify-between gap-4 ${
                isDarkMode ? 'border-zinc-800/80' : 'border-zinc-200'
              }`}>
                <div className="grid grid-cols-3 gap-5">
                  <div>
                    <span className={`font-mono text-xl font-black block ${
                      isDarkMode ? 'text-white' : 'text-[#111111]'
                    }`}>7+ Yrs</span>
                    <span className={`text-[10px] font-mono uppercase tracking-wider block ${
                      isDarkMode ? 'text-zinc-400' : 'text-zinc-500'
                    }`}>Global Advisory</span>
                  </div>
                  <div>
                    <span className={`font-mono text-xl font-black block ${
                      isDarkMode ? 'text-white' : 'text-[#111111]'
                    }`}>UAE • CA</span>
                    <span className={`text-[10px] font-mono uppercase tracking-wider block ${
                      isDarkMode ? 'text-zinc-400' : 'text-zinc-500'
                    }`}>Market Reach</span>
                  </div>
                  <div>
                    <span className="font-mono text-xl font-black text-[#FF7A1A] block">100%</span>
                    <span className={`text-[10px] font-mono uppercase tracking-wider block ${
                      isDarkMode ? 'text-zinc-400' : 'text-zinc-500'
                    }`}>Founder-Led</span>
                  </div>
                </div>

                <a
                  href="https://www.linkedin.com/in/itsroosguy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-[#0077B5] hover:bg-[#005E93] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-[#0077B5]/30 inline-flex items-center gap-2 group cursor-pointer"
                >
                  <Linkedin className="w-3.5 h-3.5 fill-current" />
                  <span>Connect on LinkedIn</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* THE 6-STAGE KANGAROO GROWTH JOURNEY ROADMAP */}
        {/* ========================================================================= */}
        <section className="space-y-8 pt-4">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className={`font-display text-2xl sm:text-4xl md:text-5xl font-black tracking-tight ${
              isDarkMode ? 'text-white' : 'text-[#111111]'
            }`}>
              The 6-Stage <span className="bg-gradient-to-r from-[#FF7A1A] via-[#FFA665] to-amber-500 bg-clip-text text-transparent">Kangaroo Growth Journey</span>
            </h2>

            <p className={`text-xs sm:text-sm font-medium leading-relaxed max-w-2xl mx-auto ${
              isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              A connected strategic path mapping your evolution from foundational brand positioning to exponential market leadership.
            </p>
          </div>

          {/* ALTERNATING ZIG-ZAG ROADMAP CONTAINER WITH CENTER LINE */}
          <div className="relative max-w-6xl mx-auto">
            
            {/* GLOWING CENTER VERTICAL LINE */}
            <div className="absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-[#FF7A1A] via-[#FFA665] to-[#EA580C] shadow-[0_0_14px_#FF7A1A] hidden lg:block z-0 rounded-full" />

            <div className="space-y-6 lg:space-y-8">
              {journeyMilestones.map((m, idx) => {
                const IconComp = m.icon;
                const isEven = idx % 2 === 0;

                return (
                  <div key={m.num} className="relative flex flex-col lg:flex-row items-center w-full">
                    
                    {/* CENTER TIMELINE MILESTONE NODE DOT */}
                    <div className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-[#FF7A1A] hidden lg:flex items-center justify-center shadow-lg shadow-[#FF7A1A]/50 z-20 transition-transform duration-300 hover:scale-125 cursor-pointer ${
                      isDarkMode ? 'bg-[#0E0E12]' : 'bg-white'
                    }`}>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF7A1A] animate-ping" />
                    </div>

                    {/* CARD WRAPPER WITH ALTERNATING LEFT / RIGHT LAYOUT */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.08 }}
                      className={`w-full lg:w-[46%] ${
                        isEven ? 'lg:mr-auto lg:text-right' : 'lg:ml-auto lg:text-left'
                      }`}
                    >
                      <div
                        className={`p-5 sm:p-6 rounded-2xl border relative overflow-hidden backdrop-blur-2xl transition-all duration-300 hover:scale-[1.02] hover:border-[#FF7A1A] hover:shadow-[0_0_30px_rgba(255,122,26,0.2)] text-left cursor-pointer group ${
                          isDarkMode
                            ? 'bg-[#0E0E12]/95 border-zinc-800/90 shadow-black/80'
                            : 'bg-white border-zinc-200 shadow-zinc-200'
                        }`}
                      >
                        <div className={`flex items-center justify-between gap-3 pb-3 border-b ${
                          isDarkMode ? 'border-zinc-800/60' : 'border-zinc-200'
                        } ${
                          isEven ? 'lg:flex-row-reverse' : 'flex-row'
                        }`}>
                          <div className={`flex items-center gap-2 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                            <span className="font-mono text-2xl font-black text-[#FF7A1A] group-hover:scale-110 transition-transform">{m.num}</span>
                          </div>

                          <div className="w-9 h-9 rounded-xl bg-[#FF7A1A]/10 border border-[#FF7A1A]/30 text-[#FF7A1A] flex items-center justify-center shrink-0 group-hover:bg-[#FF7A1A] group-hover:text-white transition-colors">
                            <IconComp className="w-4 h-4" />
                          </div>
                        </div>

                        <div className="pt-3 space-y-2">
                          <h3 className={`font-display text-lg font-extrabold ${
                            isDarkMode ? 'text-white' : 'text-[#111111]'
                          }`}>
                            {m.title}
                          </h3>

                          <p className={`text-xs leading-relaxed font-medium ${
                            isDarkMode ? 'text-zinc-300' : 'text-zinc-600'
                          }`}>
                            {m.description}
                          </p>

                          {/* KEY DELIVERABLES CHECKLIST */}
                          <div className={`pt-2 border-t space-y-1 ${
                            isDarkMode ? 'border-zinc-800/50' : 'border-zinc-200'
                          }`}>
                            <div className="flex flex-wrap gap-1.5">
                              {m.deliverables.map((item, dIdx) => (
                                <span
                                  key={dIdx}
                                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium border transition-colors ${
                                    isDarkMode
                                      ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300 group-hover:border-[#FF7A1A]/40'
                                      : 'bg-zinc-100 border-zinc-200 text-zinc-700 group-hover:border-[#FF7A1A]/40'
                                  }`}
                                >
                                  <CheckCircle2 className="w-2.5 h-2.5 text-[#FF7A1A]" />
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CALL TO ACTION */}
        {/* ========================================================================= */}
        <section className={`p-8 sm:p-12 rounded-[32px] border text-center space-y-5 relative overflow-hidden backdrop-blur-2xl shadow-2xl ${
          isDarkMode ? 'bg-[#0A0A0C] border-[#FF7A1A]/40' : 'bg-white border-[#FF7A1A]/40'
        }`}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#FF7A1A] to-transparent" />

          <h2 className={`font-display text-2xl sm:text-4xl md:text-5xl font-black tracking-tight ${
            isDarkMode ? 'text-white' : 'text-[#111111]'
          }`}>
            Ready To Build Your Momentum?
          </h2>

          <p className={`text-sm sm:text-lg font-medium max-w-2xl mx-auto ${
            isDarkMode ? 'text-zinc-300' : 'text-zinc-600'
          }`}>
            Partner directly with Alpha Roos to elevate your brand authority and engineer scalable growth systems.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => {
                triggerLeapConfetti();
                onOpenInquiry();
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FF7A1A] hover:bg-[#FF8833] text-white font-sans font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#FF7A1A]/30 cursor-pointer flex items-center justify-center gap-2 group hover:scale-105 active:scale-95"
            >
              <span>Schedule Strategic Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onNavigateHome}
              className={`w-full sm:w-auto px-7 py-4 rounded-full font-sans font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer hover:scale-105 active:scale-95 ${
                isDarkMode
                  ? 'bg-[#121215] border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700'
                  : 'bg-zinc-100 border border-zinc-300 text-zinc-800 hover:text-black shadow-sm'
              }`}
            >
              Back To Home
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
