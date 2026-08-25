import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Compass,
  Palette,
  Code,
  TrendingUp,
  Users,
  Shield,
  Zap,
  Target,
} from 'lucide-react';
import { AlphaRoosButton } from './AlphaRoosButton';

interface PhilosophyPageProps {
  onOpenInquiry: () => void;
  isDarkMode: boolean;
  onNavigateHome: () => void;
}

const philosophyPillars = [
  {
    num: '01',
    title: 'Strong Legs. Stronger Foundation.',
    desc: 'A kangaroo\'s powerful legs make every leap possible. We build the strong basement for your business – strategy, branding, systems and structure that support long-term growth.',
    badge: 'BASEMENT & STRUCTURE',
    icon: Shield,
  },
  {
    num: '02',
    title: 'Nurturing Every Joey (Startup).',
    desc: 'Every business begins as a small idea with big potential. We nurture that potential with care, guidance and expertise – shaping, building and polishing until you\'re ready to take on the world.',
    badge: 'STARTUP NURTURING',
    icon: Sparkles,
  },
  {
    num: '03',
    title: 'Built to Leap 30 Feet.',
    desc: 'A kangaroo can leap up to 30 feet in one bound – that\'s 4x to 8x more progress in a single move. We create strategies and systems that deliver the kind of growth that multiplies your brand\'s impact.',
    badge: 'MULTIPLIED GROWTH',
    icon: Zap,
  },
  {
    num: '04',
    title: 'Balance That Drives Growth.',
    desc: 'The tail keeps a kangaroo balanced and in control. We bring balance to your brand – aligning creativity, technology and marketing so every move is stable, smart and sustainable.',
    badge: 'STABLE & SUSTAINABLE',
    icon: Compass,
  },
  {
    num: '05',
    title: 'Stronger Together.',
    desc: 'Kangaroos move in mobs, looking out for each other. We work as an extension of your team – collaborating, challenging and supporting you at every stage of your growth journey.',
    badge: 'TEAM MOB COLLABORATION',
    icon: Users,
  },
  {
    num: '06',
    title: 'Always Looking Ahead.',
    desc: 'Kangaroos are always alert and aware of what\'s ahead. We stay ahead of trends, technology and market shifts – so your brand is always future-ready.',
    badge: 'FUTURE READY',
    icon: Target,
  },
];

const studioDeliverablePillars = [
  { title: 'Strategic Thinking', desc: 'Deep market discovery & positioning clarity', icon: Compass },
  { title: 'Creative Excellence', desc: 'Bespoke design systems & brand identities', icon: Palette },
  { title: 'Technology That Empowers', desc: 'Custom 99+ speed React codebases', icon: Code },
  { title: 'Marketing That Delivers', desc: 'Data-driven acquisition & 4.8X ROAS', icon: TrendingUp },
  { title: 'Partnerships That Last', desc: 'Long-term momentum & dedicated support', icon: Users },
];

export const PhilosophyPage: React.FC<PhilosophyPageProps> = ({
  onOpenInquiry,
  isDarkMode,
  onNavigateHome,
}) => {
  return (
    <div
      className={`min-h-screen pt-28 pb-20 transition-colors duration-500 relative overflow-hidden ${
        isDarkMode ? 'bg-[#050505] text-white' : 'bg-[#FAF9F6] text-[#111111]'
      }`}
    >
      {/* Architectural Background Grid */}
      <div
        className={`absolute inset-0 bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none ${
          isDarkMode
            ? 'bg-[linear-gradient(to_right,#27272A15_1px,transparent_1px),linear-gradient(to_bottom,#27272A15_1px,transparent_1px)]'
            : 'bg-[linear-gradient(to_right,#E4E4E750_1px,transparent_1px),linear-gradient(to_bottom,#E4E4E750_1px,transparent_1px)]'
        }`}
      />

      {/* Brand Orange Radial Spotlight */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-radial from-[#FF7A1A]/18 via-[#FF7A1A]/5 to-transparent blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24 sm:space-y-32">
        
        {/* SECTION 1: HERO SECTION */}
        <div className="pt-12 sm:pt-16 flex flex-col justify-center items-center text-center space-y-8 relative">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 max-w-4xl mx-auto"
          >
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF7A1A]/10 border border-[#FF7A1A]/30 text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OUR STORY & PHILOSOPHY</span>
            </div>

            {/* Main Headline */}
            <h1
              className={`font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] ${
                isDarkMode ? 'text-white' : 'text-[#111111]'
              }`}
            >
              <span className="block">The Story Behind</span>
              <span className="bg-gradient-to-r from-[#FF7A1A] via-[#FF944D] to-[#EA580C] bg-clip-text text-transparent inline-block pb-1">
                Roos StudioX
              </span>
            </h1>

            {/* Subhead Narrative */}
            <div className={`text-base sm:text-xl font-medium leading-relaxed max-w-3xl mx-auto space-y-3 ${
              isDarkMode ? 'text-[#B8B8B8]' : 'text-[#52525B]'
            }`}>
              <p>
                Roos is more than a name. It's a philosophy inspired by the kangaroo – a symbol of strength, momentum, protection, balance and powerful leaps.
              </p>
              <p className="text-[#FF7A1A] font-bold text-sm sm:text-base font-mono">
                These are the values that shape everything we do for your business.
              </p>
            </div>
          </motion.div>

          {/* Floating Mascot Mark with Ambient Glow Ring */}
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="pt-2 relative"
          >
            <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full border-2 border-[#FF7A1A]/40 bg-[#FF7A1A]/5 flex items-center justify-center relative shadow-[0_0_50px_rgba(255,122,26,0.3)] backdrop-blur-md group">
              <span className="absolute -inset-3 rounded-full border border-[#FF7A1A]/20 animate-ping opacity-25" />
              
              <img
                src="./mark.png"
                alt="Roos Mascot Mark"
                className="w-28 sm:w-32 h-auto object-contain filter drop-shadow-[0_12px_28px_rgba(255,122,26,0.6)] group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </motion.div>

        </div>

        {/* SECTION 2: STRONG BASE FOUNDATION BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`p-8 sm:p-12 rounded-3xl border relative overflow-hidden text-left ${
            isDarkMode
              ? 'bg-[#0C0C0C] border-zinc-800 text-white'
              : 'bg-white border-zinc-200 text-zinc-900 shadow-xl'
          }`}
        >
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF7A1A] via-[#FF944D] to-[#EA580C]" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-3 flex justify-center md:justify-start">
              <div className="w-20 h-20 rounded-2xl bg-[#FF7A1A]/10 border border-[#FF7A1A]/40 flex items-center justify-center text-[#FF7A1A] shadow-lg">
                <Shield className="w-10 h-10" />
              </div>
            </div>

            <div className="md:col-span-9 space-y-3">
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight">
                Every great leap starts with a strong base.
              </h2>
              <p className={`text-base sm:text-lg leading-relaxed ${isDarkMode ? 'text-[#B8B8B8]' : 'text-zinc-700'}`}>
                Just like a kangaroo, we believe businesses need strong foundations to leap further. We build those foundations through strategy, design, technology and marketing – so your brand doesn't just move, it moves ahead.
              </p>
            </div>
          </div>
        </motion.div>

        {/* SECTION 3: 6 KANGAROO PHILOSOPHY PILLARS GRID */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-left space-y-12"
        >
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest">
              THE 6 VALUES THAT SHAPE OUR WORK
            </span>
            <h2 className={`font-display text-3xl sm:text-5xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
              The 6 Kangaroo Philosophy Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {philosophyPillars.map((pillar, pIdx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={pIdx}
                  whileHover={{ y: -5 }}
                  className={`p-8 rounded-3xl border relative overflow-hidden backdrop-blur-xl transition-all flex flex-col justify-between space-y-6 ${
                    isDarkMode
                      ? 'bg-[#0C0C0C]/90 border-zinc-800 text-white shadow-2xl hover:border-[#FF7A1A]/50'
                      : 'bg-white/90 border-zinc-200 text-zinc-900 shadow-xl hover:border-[#FF7A1A]/50'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-mono font-black text-[#FF7A1A]">
                        {pillar.num}
                      </span>
                      <div className="flex items-center gap-2">
                        <IconComp className="w-5 h-5 text-[#FF7A1A]" />
                      </div>
                    </div>

                    <h3 className={`font-display text-xl sm:text-2xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
                      {pillar.title}
                    </h3>

                    <p className={`text-sm sm:text-base leading-relaxed ${isDarkMode ? 'text-[#B8B8B8]' : 'text-zinc-600'}`}>
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-2">
                    <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-[#FF7A1A]/10 text-[#FF7A1A] border border-[#FF7A1A]/30 uppercase">
                      {pillar.badge}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* SECTION 4: CLOSING STATEMENT & 5 DELIVERABLE PILLARS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-16 rounded-3xl border border-[#FF7A1A]/40 bg-[#0C0C0C] text-center relative overflow-hidden shadow-2xl space-y-12"
        >
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FF7A1A] via-[#FF944D] to-[#EA580C]" />

          <div className="max-w-4xl mx-auto space-y-4">
            <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              At Roos StudioX, we don't just build brands.
            </h2>
            <p className="font-display text-2xl sm:text-4xl font-extrabold text-[#FF7A1A] leading-tight">
              We build the strength, momentum and confidence to help your business take its next great leap.
            </p>
          </div>

          {/* 5 Deliverable Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-4">
            {studioDeliverablePillars.map((del, dIdx) => {
              const IconComp = del.icon;
              return (
                <div
                  key={dIdx}
                  className="p-5 rounded-2xl bg-[#050505] border border-zinc-800 text-center space-y-2 flex flex-col justify-between"
                >
                  <IconComp className="w-6 h-6 text-[#FF7A1A] mx-auto" />
                  <div>
                    <h4 className="font-display text-sm font-bold text-white mb-1">
                      {del.title}
                    </h4>
                    <p className="text-[11px] font-mono text-zinc-400">
                      {del.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* SECTION 5: FINAL CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-16 rounded-3xl border border-zinc-800 bg-[#08080A] text-center space-y-8 relative shadow-2xl overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF7A1A] via-[#FF944D] to-[#EA580C]" />

          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest">
              BUILT ON STRONG FOUNDATIONS • DRIVEN BY MOMENTUM
            </div>

            <h2 className={`font-display text-4xl sm:text-6xl font-black tracking-tight leading-tight ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
              Let's Build Your Next Leap. Together.
            </h2>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <AlphaRoosButton
              text="Get Your Free Growth Audit"
              onClick={onOpenInquiry}
              isDarkMode={isDarkMode}
            />

            <button
              onClick={onNavigateHome}
              className={`px-6 py-3 rounded-full border text-xs font-mono font-bold transition-all cursor-pointer ${
                isDarkMode
                  ? 'bg-[#050505] border-zinc-800 text-zinc-300 hover:border-[#FF7A1A] hover:text-white'
                  : 'bg-zinc-100 border-zinc-300 text-zinc-800 hover:border-[#FF7A1A] hover:text-zinc-900'
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
