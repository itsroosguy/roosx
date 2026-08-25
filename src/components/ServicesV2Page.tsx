import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Target, 
  Pencil, 
  Code, 
  TrendingUp, 
  Cpu, 
  Search, 
  Flame, 
  Zap, 
  BarChart3, 
  Activity
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { KangarooMascot } from './mascot/KangarooMascot';

interface ServicesV2PageProps {
  onOpenInquiry: () => void;
  isDarkMode?: boolean;
  onNavigateHome: () => void;
}

export const ServicesV2Page: React.FC<ServicesV2PageProps> = ({
  onOpenInquiry,
  onNavigateHome,
}) => {
  // Cursor position tracking for magnetic glow & eye tracking
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeEngineStep, setActiveEngineStep] = useState<string>('discover');
  const [activeWireframeState, setActiveWireframeState] = useState<'wireframe' | 'design' | 'live'>('live');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF7A1A', '#FF944D', '#FFFFFF', '#EA580C'],
    });
  };

  // Section 06 Momentum Engine steps
  const momentumSteps = [
    {
      id: 'discover',
      num: '01',
      title: 'Discover',
      tagline: 'Uncover opportunities & bottlenecks.',
      description: 'We conduct a deep strategic audit of your market, buyer friction points, and competitor gaps to locate immediate growth levers.',
      deliverables: ['Bottleneck Discovery Audit', 'Conversion Friction Map', 'Prioritized Action Plan'],
      icon: Search,
    },
    {
      id: 'define',
      num: '02',
      title: 'Define',
      tagline: 'Create the blueprint for authority.',
      description: 'We define your core positioning, sharp messaging framework, and value proposition so buyers grasp your edge in 3 seconds.',
      deliverables: ['Positioning Framework', 'Brand Voice Guide', 'Customer Journey Map'],
      icon: Target,
    },
    {
      id: 'design',
      num: '03',
      title: 'Design',
      tagline: 'Craft experiences that build trust.',
      description: 'Bespoke design systems, responsive UI/UX, and interactive Figma prototypes engineered to turn visitors into brand advocates.',
      deliverables: ['Bespoke UI/UX Design', 'Design Token System', 'Interactive Prototypes'],
      icon: Pencil,
    },
    {
      id: 'build',
      num: '04',
      title: 'Build',
      tagline: 'Engineer scalable digital systems.',
      description: 'Clean React & Vite code architecture baseline with 99+ Lighthouse performance scores, CMS integration, and edge CDN deployment.',
      deliverables: ['React 99+ Speed Engine', 'Automated Lead Routing', 'Zero-Latency Edge Deploy'],
      icon: Code,
    },
    {
      id: 'accelerate',
      num: '05',
      title: 'Accelerate',
      tagline: 'Turn momentum into measurable growth.',
      description: 'Continuous conversion telemetry, revenue funnel tuning, and automated growth marketing loops to compound business value.',
      deliverables: ['Lead Analytics Suite', 'A/B Split Testing', 'Revenue Funnel Telemetry'],
      icon: TrendingUp,
    },
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen relative overflow-hidden font-sans selection:bg-[#FF7A1A] selection:text-white">
      
      {/* 1. GLOBAL CURSOR-FOLLOWING AMBIENT GLOW SPOTLIGHT */}
      <div
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
        className="fixed w-[600px] h-[600px] rounded-full bg-radial from-[#FF7A1A]/12 via-[#FF7A1A]/3 to-transparent blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0 transition-opacity duration-500"
      />

      {/* 2. BACKGROUND ARCHITECTURAL GRID */}
      <div className="fixed inset-0 bg-[size:4rem_4rem] bg-[linear-gradient(to_right,#27272A15_1px,transparent_1px),linear-gradient(to_bottom,#27272A15_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* ========================================================================= */}
      {/* HERO SECTION (Full Viewport Height) */}
      {/* ========================================================================= */}
      <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: MASSIVE HEADLINE & CALL TO ACTION */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* PHILOSOPHY CAPSULE BADGE */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#121215] border border-[#FF7A1A]/40 text-xs font-mono font-bold text-zinc-200 shadow-lg shadow-[#FF7A1A]/5">
              <Sparkles className="w-3.5 h-3.5 text-[#FF7A1A] animate-pulse" />
              <span className="tracking-wide">SERVICE ARCHITECTURE V2 • MOMENTUM MEETS ACTION</span>
            </div>

            {/* MASSIVE HEADLINE */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05]">
              <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent block">
                Growth Doesn't
              </span>
              <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent block">
                Happen By{' '}
              </span>
              <span className="bg-gradient-to-r from-[#FF7A1A] via-[#FF944D] to-[#EA580C] bg-clip-text text-transparent inline-block">
                Accident.
              </span>
            </h1>

            {/* SUBHEADING */}
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 font-medium leading-relaxed max-w-2xl">
              We build brands, digital experiences, and growth systems engineered for compounding momentum.
            </p>

            {/* MAGNETIC CTA BUTTON & GOAL TICKER */}
            <div className="pt-4 flex flex-wrap items-center gap-6">
              <button
                onClick={onOpenInquiry}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FF7A1A] text-white font-mono font-bold text-sm uppercase tracking-wider hover:bg-[#FF8833] transition-all shadow-[0_10px_35px_rgba(255,122,26,0.4)] cursor-pointer overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Start Your Next Leap</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF944D] to-[#EA580C] opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span>ACTIVE CONSULTING SLOTS OPEN FOR Q3</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: PREMIUM 3D ROO MASCOT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative w-full max-w-[460px] flex items-center justify-center">
              {/* BACKDROP GLOW ORB */}
              <div className="absolute w-72 h-72 rounded-full bg-[#FF7A1A]/20 blur-3xl -z-10" />
              
              {/* MASCOT CONTAINER */}
              <div className="p-4 rounded-3xl bg-[#0A0A0C]/80 border border-zinc-800/80 backdrop-blur-xl shadow-2xl relative w-full">
                <KangarooMascot />

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#121215]/90 border border-[#FF7A1A]/40 text-[11px] font-mono text-zinc-300 flex items-center gap-2 shadow-lg backdrop-blur-md whitespace-nowrap">
                  <Flame className="w-3.5 h-3.5 text-[#FF7A1A]" />
                  <span>ROO GUIDE: STRATEGIC GROWTH ASSISTANT</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 01: BRAND STRATEGY & POSITIONING */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-zinc-900 z-10">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 space-y-6 text-left"
            >
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest">
                <Target className="w-4 h-4" />
                <span>SECTION 01 • STRATEGY & POSITIONING</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white">
                Before Growth Comes Direction.
              </h2>

              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed space-y-2 font-medium">
                <span className="block">Most businesses don't have a marketing problem. They have a positioning problem.</span>
                <span className="block text-zinc-400">We define who you are, why you matter, and where you win.</span>
              </p>

              {/* DELIVERABLES LIST */}
              <div className="space-y-3 pt-4">
                <span className="text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-wider block">
                  CORE DELIVERABLES:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Brand Strategy',
                    'Positioning Framework',
                    'Messaging Playbook',
                    'Market Research',
                    'Customer Journey Mapping',
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-[#0F0F12] border border-zinc-800 text-xs sm:text-sm font-semibold text-zinc-200 flex items-center gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FF7A1A] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT INTERACTIVE STRATEGIC ALIGNMENT MATRIX */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6"
            >
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0A0C] border border-[#FF7A1A]/40 shadow-2xl space-y-6 relative overflow-hidden backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF7A1A]" />
                    <span className="text-xs font-mono font-bold text-zinc-200 uppercase">LIVE MARKET POSITIONING MATRIX</span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500">ROOS ENGINE 2.0</span>
                </div>

                {/* MATRIX DIAGRAM */}
                <div className="relative h-64 bg-[#121215] rounded-2xl border border-zinc-800 p-4 flex flex-col justify-between overflow-hidden">
                  <div className="absolute inset-0 bg-[size:2rem_2rem] bg-[linear-gradient(to_right,#27272A20_1px,transparent_1px),linear-gradient(to_bottom,#27272A20_1px,transparent_1px)]" />
                  
                  {/* Axis Labels */}
                  <span className="text-[10px] font-mono text-zinc-500 absolute top-2 left-3">HIGH VALUE / AUTHORITY →</span>
                  <span className="text-[10px] font-mono text-zinc-500 absolute bottom-2 right-3">UNMATCHED SPEED →</span>

                  {/* Competitor Nodes vs ROOS Positioning */}
                  <div className="relative z-10 h-full flex items-center justify-between px-6">
                    <div className="px-3 py-1.5 rounded-lg bg-zinc-800/80 border border-zinc-700 text-[10px] font-mono text-zinc-400 opacity-60">
                      Commodity Agency
                    </div>

                    <motion.div
                      animate={{ scale: [1, 1.05, 1], boxShadow: ['0 0 20px rgba(255,122,26,0.3)', '0 0 35px rgba(255,122,26,0.6)', '0 0 20px rgba(255,122,26,0.3)'] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="px-5 py-3 rounded-2xl bg-[#FF7A1A] text-white font-mono font-extrabold text-xs flex items-center gap-2 shadow-xl"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>YOUR BRAND (SWEET SPOT)</span>
                    </motion.div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#141418] border border-zinc-800 text-xs font-mono text-zinc-300 flex items-center gap-3">
                  <Flame className="w-4 h-4 text-[#FF7A1A] shrink-0" />
                  <span>Positioning aligns your vision directly with market demand.</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02: BRAND IDENTITY */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-zinc-900 z-10 bg-[#070709]">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT INTERACTIVE BRAND IDENTITY SYSTEM BUILDER */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 order-2 lg:order-1"
            >
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0A0C] border border-[#FF7A1A]/40 shadow-2xl space-y-6 relative overflow-hidden backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                  <div className="flex items-center gap-2">
                    <Pencil className="w-4 h-4 text-[#FF7A1A]" />
                    <span className="text-xs font-mono font-bold text-zinc-200 uppercase">BRAND SYSTEM GENERATOR</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#FF7A1A]">DESIGN TOKENS</span>
                </div>

                {/* BRAND COLOR PALETTE LAYER STACK */}
                <div className="grid grid-cols-5 gap-3">
                  {[
                    { name: 'Obsidian', hex: '#0A0A0C' },
                    { name: 'Electric', hex: '#FF7A1A' },
                    { name: 'Crimson', hex: '#EA580C' },
                    { name: 'Pure White', hex: '#FFFFFF' },
                    { name: 'Silver Slate', hex: '#71717A' },
                  ].map((color, cIdx) => (
                    <div key={cIdx} className="space-y-1.5 text-center">
                      <div
                        style={{ backgroundColor: color.hex }}
                        className="h-16 rounded-xl border border-zinc-700/80 shadow-md"
                      />
                      <span className="text-[10px] font-mono text-zinc-400 block">{color.name}</span>
                    </div>
                  ))}
                </div>

                {/* TYPOGRAPHY TOKEN LAYERS */}
                <div className="p-4 rounded-2xl bg-[#121215] border border-zinc-800 space-y-2 text-left">
                  <span className="text-[10px] font-mono text-[#FF7A1A] block font-bold uppercase">PRIMARY TYPOGRAPHY:</span>
                  <div className="font-display text-2xl font-black text-white tracking-tight">
                    SYNE HEAVY BOLD DISPLAY
                  </div>
                  <div className="font-mono text-xs text-zinc-400">
                    Space Mono • 0123456789 • SYSTEM READY
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest">
                <Pencil className="w-4 h-4" />
                <span>SECTION 02 • BRAND IDENTITY</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white">
                Brands Aren't Remembered By Accident.
              </h2>

              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed space-y-2 font-medium">
                <span className="block">A strong identity creates trust before a single word is spoken.</span>
                <span className="block text-zinc-400">We build visual systems designed to stand out and stay memorable.</span>
              </p>

              {/* DELIVERABLES LIST */}
              <div className="space-y-3 pt-4">
                <span className="text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-wider block">
                  CORE DELIVERABLES:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Logo Design',
                    'Brand Identity System',
                    'Visual Design Tokens',
                    'Brand Guidelines',
                    'Creative Assets Suite',
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-[#0F0F12] border border-zinc-800 text-xs sm:text-sm font-semibold text-zinc-200 flex items-center gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FF7A1A] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03: WEBSITE DESIGN & DEVELOPMENT */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-zinc-900 z-10">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 space-y-6 text-left"
            >
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest">
                <Code className="w-4 h-4" />
                <span>SECTION 03 • WEBSITE DESIGN & DEVELOPMENT</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white">
                Your Website Should Sell While You Sleep.
              </h2>

              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed space-y-2 font-medium">
                <span className="block">Every interaction should build trust. Every page should create momentum.</span>
                <span className="block text-zinc-400">Every click should move visitors closer to action.</span>
              </p>

              {/* DELIVERABLES LIST */}
              <div className="space-y-3 pt-4">
                <span className="text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-wider block">
                  CORE DELIVERABLES:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Bespoke Web Design',
                    'React High-Speed Code',
                    'Conversion Landing Pages',
                    'CRO Optimization',
                    'Edge CDN Performance',
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-[#0F0F12] border border-zinc-800 text-xs sm:text-sm font-semibold text-zinc-200 flex items-center gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FF7A1A] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT INTERACTIVE WIREFRAME TO HIGH-FIDELITY WEB ENGINE TRANSFORMATION */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6"
            >
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0A0C] border border-[#FF7A1A]/40 shadow-2xl space-y-6 relative overflow-hidden backdrop-blur-xl">
                
                {/* View State Selector Buttons */}
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                  <span className="text-xs font-mono font-bold text-zinc-200 uppercase">TRANSFORMATION ENGINE</span>
                  
                  <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#141418] border border-zinc-800">
                    {(['wireframe', 'design', 'live'] as const).map((st) => (
                      <button
                        key={st}
                        onClick={() => setActiveWireframeState(st)}
                        className={`px-3 py-1 rounded-lg text-[10px] font-mono uppercase font-bold transition-colors ${
                          activeWireframeState === st
                            ? 'bg-[#FF7A1A] text-white shadow-md'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3D BROWSER MOCKUP CONTAINER */}
                <div className="relative h-64 rounded-2xl bg-[#121215] border border-zinc-800 p-4 flex flex-col justify-between overflow-hidden shadow-inner">
                  {/* Browser Top Bar */}
                  <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500">https://roosstudiox.com</span>
                  </div>

                  {/* Content State Render */}
                  <div className="flex-1 flex flex-col justify-center items-center text-center p-4">
                    {activeWireframeState === 'wireframe' && (
                      <div className="w-full space-y-3 opacity-60">
                        <div className="h-4 bg-zinc-700 rounded-md w-3/4 mx-auto animate-pulse" />
                        <div className="h-3 bg-zinc-800 rounded-md w-1/2 mx-auto" />
                        <div className="h-10 bg-zinc-800 rounded-xl w-32 mx-auto border border-dashed border-zinc-600" />
                      </div>
                    )}

                    {activeWireframeState === 'design' && (
                      <div className="w-full space-y-3">
                        <h4 className="font-display text-xl font-extrabold text-white">Bespoke UI Design Tokens</h4>
                        <p className="text-xs font-mono text-[#FF7A1A]">Figma Tokens • Pixel Perfect</p>
                        <div className="h-8 bg-[#FF7A1A]/20 border border-[#FF7A1A] rounded-full w-36 mx-auto flex items-center justify-center text-xs font-mono text-white font-bold">
                          Prototype Ready
                        </div>
                      </div>
                    )}

                    {activeWireframeState === 'live' && (
                      <div className="w-full space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold border border-emerald-500/40">
                          <Activity className="w-3 h-3" />
                          <span>LIGHTHOUSE SCORE 100/100</span>
                        </div>
                        <h4 className="font-display text-2xl font-black text-white">High-Velocity Engine</h4>
                        <p className="text-xs text-zinc-300">0.2s First Contentful Paint Baseline</p>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 04: DIGITAL MARKETING */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-zinc-900 z-10 bg-[#070709]">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT TELEMETRY ROI GROWTH CHARTS */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 order-2 lg:order-1"
            >
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0A0C] border border-[#FF7A1A]/40 shadow-2xl space-y-6 relative overflow-hidden backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#FF7A1A]" />
                    <span className="text-xs font-mono font-bold text-zinc-200 uppercase">GROWTH TELEMETRY DASHBOARD</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold">+380% QUALIFIED TRAFFIC</span>
                </div>

                {/* ANIMATED ROI BARS */}
                <div className="space-y-4 pt-2">
                  {[
                    { label: 'Organic SEO Traffic', pct: '88%', val: '+380%' },
                    { label: 'Conversion Rate Tuning', pct: '94%', val: '4.8x ROI' },
                    { label: 'Qualified Lead Flow', pct: '76%', val: '+240%' },
                  ].map((bar, bIdx) => (
                    <div key={bIdx} className="space-y-1.5 text-left">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-zinc-300 font-bold">{bar.label}</span>
                        <span className="text-[#FF7A1A] font-extrabold">{bar.val}</span>
                      </div>
                      <div className="h-3 bg-[#141418] rounded-full overflow-hidden border border-zinc-800">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: bar.pct }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: bIdx * 0.2 }}
                          className="h-full bg-gradient-to-r from-[#FF7A1A] to-[#EA580C] rounded-full shadow-lg shadow-[#FF7A1A]/30"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest">
                <BarChart3 className="w-4 h-4" />
                <span>SECTION 04 • DIGITAL MARKETING</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white">
                Visibility Means Nothing Without Results.
              </h2>

              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed space-y-2 font-medium">
                <span className="block">Traffic alone doesn't create growth.</span>
                <span className="block text-zinc-400">We build marketing systems that attract, nurture, and convert.</span>
              </p>

              {/* DELIVERABLES LIST */}
              <div className="space-y-3 pt-4">
                <span className="text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-wider block">
                  CORE DELIVERABLES:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Search Engine Optimization (SEO)',
                    'Performance Marketing',
                    'Social Media Marketing',
                    'Content Marketing Strategy',
                    'Email Funnel Automation',
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-[#0F0F12] border border-zinc-800 text-xs sm:text-sm font-semibold text-zinc-200 flex items-center gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FF7A1A] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 05: AI & AUTOMATION */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-zinc-900 z-10">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 space-y-6 text-left"
            >
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest">
                <Cpu className="w-4 h-4" />
                <span>SECTION 05 • AI & AUTOMATION</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white">
                Scale Without Scaling Complexity.
              </h2>

              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed space-y-2 font-medium">
                <span className="block">Automate repetitive work. Streamline operations.</span>
                <span className="block text-zinc-400">Create systems that grow with your business.</span>
              </p>

              {/* DELIVERABLES LIST */}
              <div className="space-y-3 pt-4">
                <span className="text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-wider block">
                  CORE DELIVERABLES:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'AI Workflows & Agents',
                    'Business Process Automation',
                    'CRM & Lead Webhooks',
                    'Lead Scoring Automation',
                    'Process Optimization',
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-[#0F0F12] border border-zinc-800 text-xs sm:text-sm font-semibold text-zinc-200 flex items-center gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FF7A1A] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT DYNAMIC CONNECTING NEURAL NODE WORKFLOW ANIMATION */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6"
            >
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0A0C] border border-[#FF7A1A]/40 shadow-2xl space-y-6 relative overflow-hidden backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#FF7A1A]" />
                    <span className="text-xs font-mono font-bold text-zinc-200 uppercase">AI WORKFLOW NETWORK</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#FF7A1A] font-bold">AUTOMATION ACTIVE</span>
                </div>

                {/* NEURAL WORKFLOW NODES */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[
                    { title: 'Inbound Lead', desc: 'Webhook Trigger' },
                    { title: 'AI Qualifier', desc: 'LLM Scoring' },
                    { title: 'CRM Telemetry', desc: 'Instant Deal Routing' },
                  ].map((node, nIdx) => (
                    <div
                      key={nIdx}
                      className="p-4 rounded-2xl bg-[#121215] border border-zinc-800 space-y-1 relative"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF7A1A] mx-auto animate-ping" />
                      <h5 className="font-mono text-xs font-extrabold text-white">{node.title}</h5>
                      <span className="text-[10px] font-mono text-zinc-400 block">{node.desc}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-[#141418] border border-zinc-800 text-xs font-mono text-zinc-300 flex items-center gap-3">
                  <Zap className="w-4 h-4 text-[#FF7A1A] shrink-0" />
                  <span>Eliminate manual data entry and convert leads in real-time.</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 06: THE MOMENTUM ENGINE™ */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-zinc-900 z-10 bg-[#070709]">
        <div className="max-w-7xl mx-auto space-y-12 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3 max-w-4xl mx-auto text-center"
          >
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08]">
              <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent">
                Every Great Leap Starts With{' '}
              </span>
              <span className="text-[#FF7A1A]">Momentum.</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl font-medium text-zinc-400 max-w-3xl mx-auto">
              <span className="block">A five-phase system designed to discover opportunities,</span>
              <span className="block">build authority, and accelerate sustainable growth.</span>
            </p>
          </motion.div>

          {/* SIGNATURE EXPANDING ACCORDION STAGE DECK */}
          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-4 max-w-7xl mx-auto h-[430px] sm:h-[460px] select-none">
            {momentumSteps.map((card) => {
              const isActive = card.id === activeEngineStep;
              const IconComp = card.icon;

              return (
                <motion.div
                  key={card.id}
                  onClick={() => setActiveEngineStep(card.id)}
                  onMouseEnter={() => setActiveEngineStep(card.id)}
                  animate={{
                    flex: isActive ? (window.innerWidth > 1024 ? 2.3 : 1) : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 220, damping: 24 }}
                  className={`rounded-3xl p-5 sm:p-6 border cursor-pointer relative overflow-hidden backdrop-blur-2xl transition-colors duration-500 flex flex-col justify-between text-left h-full ${
                    isActive
                      ? 'bg-[#121215] text-white border-[#FF7A1A] ring-2 ring-[#FF7A1A]/30 shadow-[0_20px_50px_rgba(255,122,26,0.3)]'
                      : 'bg-[#0A0A0C] text-zinc-400 border-zinc-800/90 hover:border-zinc-700 opacity-85 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between z-10 relative shrink-0">
                    <div className="space-y-1">
                      <span
                        className={`text-2xl sm:text-3xl font-mono font-black block tracking-tight ${
                          isActive ? 'text-[#FF7A1A]' : 'text-zinc-600'
                        }`}
                      >
                        {card.num}
                      </span>
                      <div
                        className={`h-0.5 rounded-full transition-all ${
                          isActive ? 'bg-[#FF7A1A] w-8' : 'bg-zinc-700 w-4'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="py-2 space-y-3 z-10 relative flex-1 flex flex-col justify-center">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 flex items-center justify-center shadow-md transition-transform duration-300 shrink-0 ${
                        isActive
                          ? 'border-[#FF7A1A]/80 bg-[#FF7A1A]/15 text-[#FF7A1A]'
                          : 'border-zinc-800 bg-zinc-900/80 text-zinc-400'
                      }`}
                    >
                      <IconComp className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>

                    <div className="space-y-1 shrink-0">
                      <h3 className="font-display text-lg sm:text-xl font-black text-white leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
                        {card.tagline}
                      </p>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="space-y-3 pt-3 border-t border-zinc-800 shrink-0"
                        >
                          <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-normal">
                            {card.description}
                          </p>

                          <div className="space-y-1.5">
                            <span className="text-[11px] font-mono font-bold uppercase tracking-wider block text-[#FF7A1A]">
                              KEY DELIVERABLES:
                            </span>
                            <div className="space-y-1.5">
                              {card.deliverables.map((item, dIdx) => (
                                <div
                                  key={dIdx}
                                  className="text-xs sm:text-sm font-semibold text-zinc-100 flex items-center gap-2.5"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-[#FF7A1A] shrink-0" />
                                  <span className="truncate">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="flex items-center gap-1.5 pt-1 z-10 relative shrink-0">
                    <div className={`w-2.5 h-2.5 rounded-full ${isActive ? 'bg-[#FF7A1A]' : 'bg-zinc-700'}`} />
                    <div className={`w-2.5 h-2.5 rounded-full ${isActive ? 'bg-[#FF7A1A]/40' : 'bg-zinc-700/80'}`} />
                    <div className={`w-2.5 h-2.5 rounded-full ${isActive ? 'bg-[#FF7A1A]/20' : 'bg-zinc-700/50'}`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* FINAL CALL TO ACTION */}
      {/* ========================================================================= */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 relative border-t border-zinc-900 z-10 text-center bg-gradient-to-b from-[#050505] to-[#0D0A08]">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* ROO MASCOT REVEAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-28 h-28 mx-auto relative flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-[#FF7A1A]/30 rounded-full blur-2xl animate-pulse" />
            <KangarooMascot />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight text-white">
              Ready For Your Next Leap?
            </h2>

            <p className="text-base sm:text-xl text-zinc-300 font-medium max-w-2xl mx-auto leading-relaxed">
              The businesses that win aren't always the biggest. They're the ones that build momentum first.
            </p>
          </motion.div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                triggerConfetti();
                onOpenInquiry();
              }}
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-[#FF7A1A] text-white font-mono font-extrabold text-sm uppercase tracking-wider hover:bg-[#FF8833] transition-all shadow-[0_15px_40px_rgba(255,122,26,0.45)] cursor-pointer flex items-center justify-center gap-3"
            >
              <span>Book Your Free Growth Audit</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onNavigateHome}
              className="w-full sm:w-auto px-8 py-5 rounded-full bg-[#121215] border border-zinc-800 text-zinc-300 font-mono font-bold text-sm uppercase tracking-wider hover:text-white hover:border-zinc-700 transition-all cursor-pointer"
            >
              Back to Overview
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
