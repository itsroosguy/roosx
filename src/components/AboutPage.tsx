import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlphaRoosButton } from './AlphaRoosButton';

interface AboutPageProps {
  onOpenInquiry: () => void;
  isDarkMode: boolean;
  onNavigateHome: () => void;
}

const frameworkStages = [
  { step: '01', title: 'Discover', desc: 'Understand your business, audience, competitors, and opportunities.' },
  { step: '02', title: 'Position', desc: 'Identify opportunities and define your unique competitive advantage.' },
  { step: '03', title: 'Build', desc: 'Create the brand, website, systems, and digital growth foundation.' },
  { step: '04', title: 'Launch', desc: 'Deploy campaigns, handoff infrastructure, and activate.' },
  { step: '05', title: 'Optimize', desc: 'Measure real-time performance, refine strategy, and scale what works.' },
];

const differencePillars = [
  {
    num: '01',
    title: 'Strategy First',
    copy: 'Design without strategy creates decoration. Marketing without strategy creates noise. Technology without strategy creates complexity. We begin with understanding. Everything else follows.',
  },
  {
    num: '02',
    title: 'Growth Focused',
    copy: 'Every recommendation, design decision, and campaign is evaluated against its ability to create meaningful, measurable business growth.',
  },
  {
    num: '03',
    title: 'Systems Thinking',
    copy: 'Businesses don\'t grow because of a logo alone, a website alone, or marketing alone. Growth happens when every part works together under one connected system.',
  },
  {
    num: '04',
    title: 'Built For Momentum',
    copy: 'Our goal isn\'t simply to launch projects. Our goal is to create momentum that continues generating exponential results long after launch.',
  },
];

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenInquiry,
  isDarkMode,
  onNavigateHome,
}) => {
  const [activeFrameworkIdx, setActiveFrameworkIdx] = useState<number>(0);

  return (
    <div
      className={`min-h-screen pt-24 pb-20 transition-colors duration-500 relative overflow-hidden ${
        isDarkMode ? 'bg-[#050505] text-white' : 'bg-[#FAF9F6] text-[#111111]'
      }`}
    >
      {/* Background Architectural Mesh Grid */}
      <div
        className={`absolute inset-0 bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none ${
          isDarkMode
            ? 'bg-[linear-gradient(to_right,#27272A15_1px,transparent_1px),linear-gradient(to_bottom,#27272A15_1px,transparent_1px)]'
            : 'bg-[linear-gradient(to_right,#E4E4E750_1px,transparent_1px),linear-gradient(to_bottom,#E4E4E750_1px,transparent_1px)]'
        }`}
      />

      {/* Brand Orange Radial Glow */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-radial from-[#FF7A1A]/15 via-[#FF7A1A]/4 to-transparent blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION 1: HERO SECTION (FULL SCREEN CINEMATIC STORY) */}
        <div className="min-h-[85vh] flex flex-col justify-center items-center text-center py-16 space-y-8 relative">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6 max-w-5xl mx-auto"
          >
            <h1
              className={`font-display text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[1.05] ${
                isDarkMode ? 'text-white' : 'text-[#111111]'
              }`}
            >
              <span className="block">We Believe Every Business</span>
              <span className="block">Has The Potential To</span>
              <span className="bg-gradient-to-r from-[#FF7A1A] via-[#FF944D] to-[#EA580C] bg-clip-text text-transparent inline-block pb-2">
                Leap Further.
              </span>
            </h1>

            {/* Narrative Intro Story Copy */}
            <div
              className={`text-lg sm:text-2xl font-medium leading-relaxed max-w-3xl mx-auto space-y-3 ${
                isDarkMode ? 'text-[#B8B8B8]' : 'text-zinc-600'
              }`}
            >
              <p>Some businesses have incredible products.</p>
              <p>Some have exceptional services.</p>
              <p>Others have game-changing ideas.</p>
              <p className={`pt-2 ${isDarkMode ? 'text-white' : 'text-zinc-900'} font-semibold`}>
                Yet many struggle to grow because their brand lacks clarity, their website fails to convert, or their marketing doesn't create momentum.
              </p>
              <p className="text-base sm:text-lg text-[#FF7A1A] font-bold pt-1">
                That's where we come in.
              </p>
            </div>
          </motion.div>

          {/* Floating Anti-Gravity Kangaroo Mascot / 3D Orbit Ring */}
          <motion.div
            animate={{ y: [-8, 8, -8], rotate: [-1, 1, -1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="relative py-6"
          >
            {/* Glowing Orbit Ring */}
            <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full border-2 border-[#FF7A1A]/30 bg-[#FF7A1A]/5 flex items-center justify-center relative shadow-[0_0_40px_rgba(255,122,26,0.25)] backdrop-blur-md">
              <span className="absolute -inset-4 rounded-full border border-[#FF7A1A]/20 animate-ping opacity-25" />
              
              {/* Central Mascot Mark */}
              <img
                src="./mark.png"
                alt="Roos Kangaroo Mark"
                className="w-24 sm:w-32 h-auto object-contain filter drop-shadow-[0_10px_25px_rgba(255,122,26,0.6)]"
              />
            </div>
          </motion.div>

          <p className={`text-sm sm:text-base max-w-xl mx-auto ${isDarkMode ? 'text-[#7D7D7D]' : 'text-zinc-500'}`}>
            Roos StudioX was built to help ambitious businesses turn potential into progress and ideas into measurable growth.
          </p>

        </div>

        {/* SECTION 2: WHY WE EXIST (SPLIT LAYOUT WITH INTERCONNECTED NODES) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className={`py-24 px-6 sm:px-12 rounded-3xl border text-left relative overflow-hidden my-20 ${
            isDarkMode
              ? 'bg-[#0C0C0C] border-zinc-800 text-white'
              : 'bg-white border-zinc-200 text-zinc-900 shadow-xl'
          }`}
        >
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF7A1A] via-[#FF944D] to-[#EA580C]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT: FLOATING INTERCONNECTED NODES */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
                {/* Center Core Node */}
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#FF7A1A] to-[#EA580C] text-white font-display text-lg font-black flex items-center justify-center shadow-2xl shadow-[#FF7A1A]/40 border border-[#FF944D] relative z-10">
                  ROOS CORE
                </div>

                {/* 4 Connected Satellite Nodes */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border border-dashed border-[#FF7A1A]/30 pointer-events-none"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-[#050505] border border-[#FF7A1A] text-[10px] font-mono text-[#FF7A1A] font-bold">
                    STRATEGY
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 px-3 py-1 rounded-full bg-[#050505] border border-[#FF7A1A] text-[10px] font-mono text-[#FF7A1A] font-bold">
                    TECHNOLOGY
                  </div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#050505] border border-[#FF7A1A] text-[10px] font-mono text-[#FF7A1A] font-bold">
                    BRANDING
                  </div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 px-3 py-1 rounded-full bg-[#050505] border border-[#FF7A1A] text-[10px] font-mono text-[#FF7A1A] font-bold">
                    MARKETING
                  </div>
                </motion.div>
              </div>
            </div>

            {/* RIGHT: STORY CONTENT */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest">
                WHY WE EXIST
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Growth Rarely Happens By Accident.
              </h2>

              <div className={`space-y-4 text-base sm:text-lg leading-relaxed ${isDarkMode ? 'text-[#B8B8B8]' : 'text-zinc-600'}`}>
                <p>
                  It happens when strategy, branding, technology, and marketing work together under one unified direction.
                </p>
                <p>
                  Too often, businesses hire separate agencies, freelancers, and consultants who focus on individual tasks without seeing the bigger picture.
                </p>

                {/* Disconnected Friction List */}
                <div className="grid grid-cols-2 gap-2 text-xs font-mono font-bold text-amber-400 py-2">
                  <div className="flex items-center gap-2"><span>× Disconnected Experiences</span></div>
                  <div className="flex items-center gap-2"><span>× Inconsistent Messaging</span></div>
                  <div className="flex items-center gap-2"><span>× Wasted Budgets</span></div>
                  <div className="flex items-center gap-2"><span>× Missed Opportunities</span></div>
                </div>

                <p className={`pt-2 ${isDarkMode ? 'text-white' : 'text-zinc-900'} font-semibold`}>
                  We created Roos StudioX to solve that problem. By bringing strategy, design, technology, and growth under one roof, we help businesses build stronger foundations and create momentum that lasts.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* SECTION 3: THE KANGAROO PHILOSOPHY */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="py-24 text-center max-w-4xl mx-auto space-y-8 relative"
        >
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest">
              BRAND PHILOSOPHY
            </span>
            <h2 className={`font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
              The Kangaroo Philosophy
            </h2>
          </div>

          {/* 3 Floating Keywords around Kangaroo */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
            <motion.span
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="px-5 py-2 rounded-full bg-[#FF7A1A]/10 border border-[#FF7A1A]/40 text-sm font-mono font-bold text-[#FF7A1A] shadow-sm"
            >
              LEAP
            </motion.span>
            <motion.span
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="px-5 py-2 rounded-full bg-[#FF7A1A]/10 border border-[#FF7A1A]/40 text-sm font-mono font-bold text-[#FF7A1A] shadow-sm"
            >
              MOMENTUM
            </motion.span>
            <motion.span
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="px-5 py-2 rounded-full bg-[#FF7A1A]/10 border border-[#FF7A1A]/40 text-sm font-mono font-bold text-[#FF7A1A] shadow-sm"
            >
              GROWTH
            </motion.span>
          </div>

          <div className={`text-base sm:text-xl leading-relaxed space-y-4 max-w-3xl mx-auto ${isDarkMode ? 'text-[#B8B8B8]' : 'text-zinc-600'}`}>
            <p className={`font-semibold text-xl sm:text-2xl ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
              A kangaroo doesn't move one step at a time. <span className="text-[#FF7A1A]">It leaps.</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs font-mono font-bold">
              <div className="p-3 rounded-xl bg-[#0C0C0C] border border-zinc-800 text-[#FF7A1A]">EVERY LEAP IS INTENTIONAL</div>
              <div className="p-3 rounded-xl bg-[#0C0C0C] border border-zinc-800 text-[#FF7A1A]">EVERY LEAP COVERS DISTANCE</div>
              <div className="p-3 rounded-xl bg-[#0C0C0C] border border-zinc-800 text-[#FF7A1A]">EVERY LEAP CREATES MOMENTUM</div>
            </div>
            <p className="pt-2">
              That's how we approach growth. We don't chase vanity metrics. We don't focus on short-term wins. We build systems designed to help businesses move forward with confidence and purpose.
            </p>
            <p className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
              Because sustainable growth comes from momentum, not noise.
            </p>
          </div>
        </motion.div>

        {/* SECTION 4: THE ROOS GROWTH FRAMEWORK */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="py-20 text-left space-y-12"
        >
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest">
              PROVEN SYSTEM
            </span>
            <h2 className={`font-display text-4xl sm:text-6xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
              The Roos Growth Framework
            </h2>
            <p className={`text-base ${isDarkMode ? 'text-[#B8B8B8]' : 'text-zinc-600'}`}>
              Every project follows the same proven process designed to serve a single goal: Helping your business grow.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {frameworkStages.map((fStage, fIdx) => (
              <button
                key={fIdx}
                onClick={() => setActiveFrameworkIdx(fIdx)}
                className={`p-6 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                  activeFrameworkIdx === fIdx
                    ? 'bg-[#0C0C0C] border-[#FF7A1A] shadow-xl shadow-[#FF7A1A]/20 scale-105'
                    : isDarkMode
                    ? 'bg-[#050505] border-zinc-800 hover:border-zinc-700'
                    : 'bg-white border-zinc-200 shadow-sm hover:border-zinc-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-mono font-black text-[#FF7A1A]">
                    {fStage.step}
                  </span>
                  {activeFrameworkIdx === fIdx && (
                    <span className="w-2 h-2 rounded-full bg-[#FF7A1A] animate-ping" />
                  )}
                </div>

                <div>
                  <h3 className={`font-display text-lg font-bold ${isDarkMode ? 'text-white' : 'text-zinc-900'} mb-1`}>
                    {fStage.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-[#7D7D7D]' : 'text-zinc-600'}`}>
                    {fStage.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* SECTION 5: WHAT MAKES US DIFFERENT (4 FLOATING GLASS PANELS) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="py-24 text-left space-y-12"
        >
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest">
              OUR UNFAIR ADVANTAGE
            </span>
            <h2 className={`font-display text-4xl sm:text-6xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
              What Makes Us Different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differencePillars.map((diff, dIdx) => (
              <motion.div
                key={dIdx}
                whileHover={{ y: -4 }}
                className={`p-8 rounded-3xl border relative overflow-hidden backdrop-blur-xl transition-all ${
                  isDarkMode
                    ? 'bg-[#0C0C0C]/90 border-zinc-800 text-white shadow-2xl'
                    : 'bg-white/90 border-zinc-200 text-zinc-900 shadow-xl'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-mono font-black text-[#FF7A1A]">
                    {diff.num}
                  </span>
                  <span className="text-xs font-mono font-bold text-zinc-500 uppercase">
                    ROOS PRINCIPLE
                  </span>
                </div>

                <h3 className={`font-display text-2xl font-extrabold tracking-tight mb-3 ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
                  {diff.title}
                </h3>

                <p className={`text-base leading-relaxed ${isDarkMode ? 'text-[#B8B8B8]' : 'text-zinc-600'}`}>
                  {diff.copy}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SECTION 6: VISION (POSTER-LIKE LARGE TYPOGRAPHY SECTION) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-28 py-20 px-8 sm:px-16 rounded-3xl border border-zinc-800 bg-[#0C0C0C] text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FF7A1A] via-[#FF944D] to-[#EA580C]" />

          <div className="max-w-4xl mx-auto space-y-6">
            <span className="text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest">
              OUR VISION
            </span>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
              To Become The Growth Partner Businesses Trust When They Are Ready For Their Next Leap.
            </h2>

            <p className="text-base sm:text-xl text-[#B8B8B8] max-w-2xl mx-auto font-medium">
              Not by offering more services. But by creating better outcomes. Helping brands move faster. Scale smarter. And grow with confidence.
            </p>
          </div>
        </motion.div>

        {/* SECTION 7: FINAL FULL-SCREEN CTA - READY FOR YOUR NEXT LEAP? */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-24 text-center space-y-8 max-w-4xl mx-auto relative"
        >
          <div className="space-y-4">
            <h2 className={`font-display text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-none ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
              Ready For Your Next Leap?
            </h2>
            <div className={`text-xl sm:text-3xl font-semibold space-y-1 ${isDarkMode ? 'text-[#B8B8B8]' : 'text-zinc-600'}`}>
              <p>You Bring The Ambition.</p>
              <p className="text-[#FF7A1A] font-bold">We'll Build The Momentum.</p>
            </div>
          </div>

          <div className="pt-4 flex flex-col items-center justify-center gap-4">
            <AlphaRoosButton
              text="Get Your Free Growth Audit"
              onClick={onOpenInquiry}
              isDarkMode={isDarkMode}
            />

            <button
              onClick={onNavigateHome}
              className={`text-xs font-mono font-bold uppercase tracking-widest pt-2 cursor-pointer transition-colors ${
                isDarkMode ? 'text-zinc-500 hover:text-zinc-300' : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              ← Return to Main Homepage
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
