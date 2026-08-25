import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Flame,
} from 'lucide-react';
import { AlphaRoosButton } from './AlphaRoosButton';

interface AboutPageProps {
  onOpenInquiry: () => void;
  isDarkMode: boolean;
  onNavigateHome: () => void;
}

const frameworkStages = [
  {
    step: '01',
    title: 'Discover',
    tagline: 'Deep Market & Audience Telemetry',
    desc: 'We audit your target market, buyer friction points, competitor blind spots, and revenue growth opportunities.',
    deliverable: 'Audience Friction & Market Opportunity Audit Report',
  },
  {
    step: '02',
    title: 'Position',
    tagline: 'Unbeatable Market Advantage',
    desc: 'We craft sharp positioning, high-impact headlines, and value propositions that make your brand stand out instantly.',
    deliverable: 'Strategic Positioning Deck & Copywriting Architecture',
  },
  {
    step: '03',
    title: 'Build',
    tagline: '99+ Speed Engineering & Glassmorphic UI',
    desc: 'We engineer custom React web applications and design systems with zero template bloat and instant load times.',
    deliverable: 'Custom React Codebase & High-Performance CMS Integration',
  },
  {
    step: '04',
    title: 'Launch',
    tagline: '24h Rapid Onboarding Protocol',
    desc: 'We deploy infrastructure to edge CDNs, set up automated CRM webhooks, and launch high-velocity growth initiatives.',
    deliverable: 'Live Production Site & Automated Lead Telemetry Pipeline',
  },
  {
    step: '05',
    title: 'Optimize',
    tagline: 'Continuous Conversion & Revenue Tuning',
    desc: 'We run live A/B tests, monitor conversion rate telemetry, and continuously tune the growth engine for maximum ROI.',
    deliverable: 'Monthly CRO Optimization & Growth Trajectory Dashboard',
  },
];

const differencePillars = [
  {
    num: '01',
    title: 'Strategy Before Execution',
    headline: 'Understanding Before Action',
    copy: 'Design without strategy creates decoration. Marketing without strategy creates noise. Technology without strategy creates complexity. We begin with deep strategic clarity—everything else follows.',
    badge: 'ZERO GUESSWORK',
  },
  {
    num: '02',
    title: 'Built Around Growth',
    headline: 'Every Decision Measured by ROI',
    copy: 'Every recommendation, visual element, line of code, and marketing campaign is evaluated against a single imperative: Will this accelerate measurable business growth?',
    badge: 'REVENUE FOCUSED',
  },
  {
    num: '03',
    title: 'Systems Thinking',
    headline: 'Connected Digital Ecosystems',
    copy: 'Businesses don\'t grow because of a logo alone, a website alone, or marketing alone. Real momentum occurs when strategy, design, tech, and marketing operate as one connected system.',
    badge: 'FULLY INTEGRATED',
  },
  {
    num: '04',
    title: 'Built For Momentum',
    headline: 'Foundations That Continue Scaling',
    copy: 'Our objective isn\'t merely launching projects—it is establishing self-reinforcing momentum that continues generating leads and revenue long after deployment.',
    badge: 'LONG-TERM IMPACT',
  },
];

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenInquiry,
  isDarkMode,
  onNavigateHome,
}) => {
  const [activeTab, setActiveTab] = useState<'traditional' | 'roos'>('roos');
  const [activeFrameworkIdx, setActiveFrameworkIdx] = useState<number>(0);
  const [leapMultiplier, setLeapMultiplier] = useState<number>(3.8);

  return (
    <div
      className={`min-h-screen pt-24 pb-20 transition-colors duration-500 relative overflow-hidden ${
        isDarkMode ? 'bg-[#050505] text-white' : 'bg-[#FAF9F6] text-[#111111]'
      }`}
    >
      {/* Background Architectural Grid Mesh */}
      <div
        className={`absolute inset-0 bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none ${
          isDarkMode
            ? 'bg-[linear-gradient(to_right,#27272A15_1px,transparent_1px),linear-gradient(to_bottom,#27272A15_1px,transparent_1px)]'
            : 'bg-[linear-gradient(to_right,#E4E4E750_1px,transparent_1px),linear-gradient(to_bottom,#E4E4E750_1px,transparent_1px)]'
        }`}
      />

      {/* Radiant Orange Spotlight */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-radial from-[#FF7A1A]/18 via-[#FF7A1A]/5 to-transparent blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION 1: HERO SECTION - REVAMPED HIGH-ENGAGING ABOUT HERO */}
        <div className="py-16 sm:py-24 flex flex-col justify-center items-center text-center space-y-8 relative">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 max-w-4xl mx-auto"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7A1A]/10 border border-[#FF7A1A]/30 text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OUR MISSION & CREATIVE PHILOSOPHY</span>
            </div>

            {/* Guaranteed 2-Line Headline */}
            <h1
              className={`font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.12] ${
                isDarkMode ? 'text-white' : 'text-[#111111]'
              }`}
            >
              <span className="block">We Believe Every Business Has The Potential</span>
              <span className="bg-gradient-to-r from-[#FF7A1A] via-[#FF944D] to-[#EA580C] bg-clip-text text-transparent inline-block pb-1">
                To Leap Further.
              </span>
            </h1>

            {/* Shortened Punchy Subheadline */}
            <p
              className={`text-base sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto ${
                isDarkMode ? 'text-[#B8B8B8]' : 'text-[#52525B]'
              }`}
            >
              We turn ambitious ideas, products, and services into scalable market momentum by building integrated growth systems.
            </p>

            {/* Interactive Value Badges */}
            <div className="pt-2 flex items-center justify-center gap-2.5 sm:gap-4 flex-wrap">
              <div className="px-4 py-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 font-bold flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#FF7A1A]" />
                <span>Strategic Positioning</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 font-bold flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#FF7A1A]" />
                <span>Unbridled Creativity</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 font-bold flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#FF7A1A]" />
                <span>Predictable Growth</span>
              </div>
            </div>
          </motion.div>

          {/* Clean Floating Mascot Mark */}
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="pt-4"
          >
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border-2 border-[#FF7A1A]/30 bg-[#FF7A1A]/5 flex items-center justify-center relative shadow-[0_0_40px_rgba(255,122,26,0.25)] backdrop-blur-md">
              <img
                src="./mark.png"
                alt="Roos Kangaroo Mark"
                className="w-20 sm:w-24 h-auto object-contain filter drop-shadow-[0_8px_20px_rgba(255,122,26,0.6)]"
              />
            </div>
          </motion.div>

        </div>

        {/* SECTION: UNBRIDLED CREATIVITY & PASSIONATE MARKETING MANIFESTO */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`py-16 px-6 sm:px-12 rounded-3xl border text-left relative overflow-hidden my-16 ${
            isDarkMode
              ? 'bg-[#08080B] border-zinc-800 text-white'
              : 'bg-white border-zinc-200 text-zinc-900 shadow-xl'
          }`}
        >
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF7A1A] via-[#FF944D] to-[#EA580C]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Passionate Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7A1A]/10 border border-[#FF7A1A]/30 text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest">
                <Flame className="w-3.5 h-3.5" />
                <span>WHO WE ARE • PASSIONATE CREATIVITY</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Passionate Marketers & Engineers Exploring Uncharted Territory
              </h2>

              <p className={`text-base sm:text-lg leading-relaxed ${isDarkMode ? 'text-[#B8B8B8]' : 'text-zinc-700'}`}>
                We are not a traditional, slow-moving corporate agency. We are a collective of passionate marketers, visual artists, and web engineers who reject boring templates and safe clichés.
              </p>

              <p className={`text-base sm:text-lg leading-relaxed ${isDarkMode ? 'text-[#B8B8B8]' : 'text-zinc-700'}`}>
                We believe marketing should ignite curiosity, design should feel breathtakingly intuitive, and technology should operate at lightning speed. We explore with unbridled creativity to craft brand identities that command market attention.
              </p>

              {/* 3 Core Values */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono font-bold">
                <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-1">
                  <div className="text-[#FF7A1A]">01 • BOLD CREATIVITY</div>
                  <div className="text-zinc-300">Unfiltered Ideas & Design</div>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-1">
                  <div className="text-[#FF7A1A]">02 • HIGH VELOCITY</div>
                  <div className="text-zinc-300">99+ Speed Guarantee</div>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-1">
                  <div className="text-[#FF7A1A]">03 • ZERO CLICHÉS</div>
                  <div className="text-zinc-300">No Cookie-Cutter Templates</div>
                </div>
              </div>
            </div>

            {/* Right: Studio Culture Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl border border-[#FF7A1A]/40 bg-[#050505] p-6 shadow-2xl space-y-4 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#FF7A1A]/10 border border-[#FF7A1A]/30 text-[#FF7A1A] mx-auto flex items-center justify-center">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">The Roos Studio Culture</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Driven by relentless ambition, endless curiosity, and an obsession with crafting digital experiences that make people stop and take notice.
                </p>
                <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-[#FF7A1A] font-bold">
                  100% TAILOR-MADE CREATIVITY
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* SECTION 2: WHY WE EXIST - INTERACTIVE ENGINE SWITCHER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`py-16 px-6 sm:px-12 rounded-3xl border text-left relative overflow-hidden my-20 ${
            isDarkMode
              ? 'bg-[#0C0C0C] border-zinc-800 text-white'
              : 'bg-white border-zinc-200 text-zinc-900 shadow-xl'
          }`}
        >
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF7A1A] via-[#FF944D] to-[#EA580C]" />

          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest">
              WHY WE EXIST • SYSTEM COMPARISON
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
              Growth Rarely Happens By Accident
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Toggle between the traditional fragmented agency model and the Roos Integrated Momentum System below.
            </p>
          </div>

          {/* Model Switcher Buttons */}
          <div className="flex justify-center gap-3 mb-10">
            <button
              onClick={() => setActiveTab('traditional')}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold border transition-all cursor-pointer ${
                activeTab === 'traditional'
                  ? 'bg-amber-500/20 border-amber-500/50 text-amber-400 shadow-lg'
                  : 'bg-zinc-900/50 border-zinc-800 text-zinc-500 hover:text-zinc-300'
              }`}
            >
              × TRADITIONAL DISCONNECTED MODEL
            </button>

            <button
              onClick={() => setActiveTab('roos')}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold border transition-all cursor-pointer ${
                activeTab === 'roos'
                  ? 'bg-gradient-to-r from-[#FF7A1A] to-[#EA580C] text-white border-[#FF944D] shadow-lg shadow-[#FF7A1A]/30'
                  : 'bg-zinc-900/50 border-zinc-800 text-zinc-500 hover:text-zinc-300'
              }`}
            >
              ✓ ROOS INTEGRATED SYSTEM
            </button>
          </div>

          {/* Switcher Display Cards */}
          <AnimatePresence mode="wait">
            {activeTab === 'traditional' ? (
              <motion.div
                key="traditional"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-2xl bg-[#08080A] border border-amber-500/30 grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-mono font-bold">
                    <AlertTriangle className="w-4 h-4" />
                    <span>HIGH FRICTION & WASTED BUDGETS</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Disconnected Agencies & Freelancers
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Hiring separate vendors creates broken communication, conflicting strategies, slow 6-month timelines, and wasted ad spend without single-point accountability.
                  </p>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-amber-400 flex items-center justify-between">
                    <span>× Disconnected Brand Messages</span>
                    <span className="font-bold">HIGH DROP-OFF</span>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-amber-400 flex items-center justify-between">
                    <span>× Slow Template Speed (LCP {'>'} 3.8s)</span>
                    <span className="font-bold">POOR SEO</span>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-amber-400 flex items-center justify-between">
                    <span>× Zero Revenue Telemetry Sync</span>
                    <span className="font-bold">UNPREDICTABLE</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="roos"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-2xl bg-[#08080A] border border-[#FF7A1A]/40 grid grid-cols-1 md:grid-cols-2 gap-6 items-center shadow-2xl"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7A1A]/10 text-[#FF7A1A] text-xs font-mono font-bold">
                    <CheckCircle2 className="w-4 h-4 text-[#FF7A1A]" />
                    <span>ONE INTEGRATED GROWTH SYSTEM</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Roos StudioX Ecosystem Architecture
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    By bringing strategy, branding, web engineering, and growth marketing under one roof, every element is designed to convert visitors and compound momentum.
                  </p>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-emerald-400 flex items-center justify-between">
                    <span>✓ Unified Positioning & Value Prop</span>
                    <span className="font-bold">100% CLARITY</span>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-emerald-400 flex items-center justify-between">
                    <span>✓ 99+ Google Lighthouse Speed Score</span>
                    <span className="font-bold">LCP 0.48s</span>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-emerald-400 flex items-center justify-between">
                    <span>✓ Live Telemetry & Automated CRM Webhooks</span>
                    <span className="font-bold">4.8X ROAS</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* SECTION 3: THE KANGAROO PHILOSOPHY - KINETIC LEAP SIMULATOR */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="py-20 text-center max-w-4xl mx-auto space-y-8 relative"
        >
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest">
              KINETIC GROWTH PHILOSOPHY
            </span>
            <h2 className={`font-display text-4xl sm:text-6xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
              The Kangaroo Philosophy
            </h2>
            <p className="text-lg sm:text-xl font-semibold text-[#FF7A1A]">
              A kangaroo doesn't move one step at a time. <span className="underline decoration-[#FF7A1A] underline-offset-4">It leaps.</span>
            </p>
          </div>

          {/* Interactive Trajectory Slider */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0C0C0C] border border-zinc-800 text-left space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4 border-b border-zinc-800 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-[#FF7A1A] uppercase">INTERACTIVE LEAP SIMULATOR</span>
                <h4 className="font-display text-xl font-bold text-white">Experience Intentional Growth Velocity</h4>
              </div>
              <div className="text-2xl font-mono font-black text-[#FF7A1A]">
                {leapMultiplier.toFixed(1)}X MOMENTUM
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-xs font-mono text-zinc-400">
                <span>Drag to simulate growth velocity:</span>
                <span>Max: 5.0X Multiplier</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                step="0.1"
                value={leapMultiplier}
                onChange={(e) => setLeapMultiplier(parseFloat(e.target.value))}
                className="w-full accent-[#FF7A1A] cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#050505] border border-zinc-800 space-y-1">
                <div className="text-[10px] font-mono text-zinc-500 uppercase">01 • INTENTIONAL DIRECTION</div>
                <div className="text-sm font-bold text-white">100% Strategic Alignment</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#050505] border border-zinc-800 space-y-1">
                <div className="text-[10px] font-mono text-zinc-500 uppercase">02 • DISTANCE COVERED</div>
                <div className="text-sm font-bold text-white">Rapid 24h Execution</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#050505] border border-[#FF7A1A]/40 space-y-1">
                <div className="text-[10px] font-mono text-[#FF7A1A] uppercase font-bold">03 • COMPOUNDING LEAP</div>
                <div className="text-sm font-bold text-[#FF7A1A]">{(leapMultiplier * 24).toFixed(0)}% Revenue Trajectory</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SECTION 4: THE ROOS GROWTH FRAMEWORK - INTERACTIVE TIMELINE */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="py-20 text-left space-y-12"
        >
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest">
              PROVEN EXECUTION SYSTEM
            </span>
            <h2 className={`font-display text-4xl sm:text-6xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
              The Roos Growth Framework
            </h2>
            <p className="text-base text-zinc-400">
              Click any stage below to inspect the guaranteed studio deliverables at each phase of your leap.
            </p>
          </div>

          {/* Timeline Buttons */}
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
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A1A] animate-ping" />
                  )}
                </div>

                <div>
                  <h3 className={`font-display text-lg font-bold ${isDarkMode ? 'text-white' : 'text-zinc-900'} mb-1`}>
                    {fStage.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-[#7D7D7D]' : 'text-zinc-600'}`}>
                    {fStage.tagline}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Active Stage Detailed Deliverables Card */}
          <motion.div
            key={activeFrameworkIdx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-8 rounded-3xl bg-[#0C0C0C] border border-[#FF7A1A]/40 text-left space-y-4"
          >
            <div className="flex items-center justify-between flex-wrap gap-2 border-b border-zinc-800 pb-3">
              <span className="text-xs font-mono font-bold text-[#FF7A1A] uppercase">
                STAGE {frameworkStages[activeFrameworkIdx].step} • {frameworkStages[activeFrameworkIdx].title} DEEP DIVE
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold">✓ GUARANTEED STAGE DELIVERABLE</span>
            </div>

            <p className="text-base text-zinc-300 leading-relaxed">
              {frameworkStages[activeFrameworkIdx].desc}
            </p>

            <div className="p-4 rounded-xl bg-[#050505] border border-zinc-800 text-xs font-mono flex items-center justify-between">
              <span className="text-zinc-400">OUTPUT DELIVERABLE:</span>
              <span className="text-[#FF7A1A] font-bold">{frameworkStages[activeFrameworkIdx].deliverable}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* SECTION 5: WHAT MAKES US DIFFERENT (4 FLOATING GLASS PANELS) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="py-20 text-left space-y-12"
        >
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest">
              OUR UNFAIR ADVANTAGE
            </span>
            <h2 className={`font-display text-4xl sm:text-6xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-[#111111]'}`}>
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
                  <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-[#FF7A1A]/10 text-[#FF7A1A] border border-[#FF7A1A]/30 uppercase">
                    {diff.badge}
                  </span>
                </div>

                <h3 className={`font-display text-2xl font-extrabold tracking-tight mb-1 ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
                  {diff.title}
                </h3>
                <div className="text-xs font-mono font-bold text-[#FF7A1A] mb-3 uppercase">
                  {diff.headline}
                </div>

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
          className="my-24 py-20 px-8 sm:px-16 rounded-3xl border border-zinc-800 bg-[#0C0C0C] text-center relative overflow-hidden shadow-2xl"
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
          className="py-20 text-center space-y-8 max-w-4xl mx-auto relative"
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
