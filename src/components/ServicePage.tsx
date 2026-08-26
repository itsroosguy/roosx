import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowRight, Compass, Shield, Laptop, Code2, Search, TrendingUp, Cpu, Layers, CheckCircle2, ChevronRight, Sparkles, BarChart, Zap, ShieldCheck, XCircle, Flame, ZapOff, Activity } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ServicePageProps {
  onOpenInquiry: () => void;
  isDarkMode?: boolean;
  onNavigateHome: () => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({
  onOpenInquiry,
  onNavigateHome,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeComparisonIndex, setActiveComparisonIndex] = useState<number>(0);

  // SCROLL-DRIVEN MOTION PHYSICS
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  // SCROLL TRANSFORMATIONS
  const heroScale = useTransform(smoothProgress, [0, 0.15], [1, 0.92]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0.2]);
  const heroY = useTransform(smoothProgress, [0, 0.15], [0, -50]);

  const glowOrbY = useTransform(smoothProgress, [0, 1], ['0%', '80%']);
  const laserBeamHeight = useTransform(smoothProgress, [0.1, 0.9], ['0%', '100%']);

  const triggerLeapConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.7 },
      colors: ['#FF7A1A', '#FF8833', '#FFFFFF', '#EA580C'],
    });
  };

  const services = [
    {
      id: 'brand-strategy',
      category: 'strategy',
      icon: Compass,
      title: 'Brand Strategy & Positioning',
      subtitle: 'Extract your unfair advantage & category dominance.',
      description: 'We audit your market landscape, define your core brand narrative, and position your offer so clients choose you first without price resistance.',
      deliverables: ['Market Positioning Matrix', 'Customer Persona Mapping', 'Value Proposition & Copy Framework', 'Competitive Gap Analysis'],
    },
    {
      id: 'visual-identity',
      category: 'design',
      icon: Shield,
      title: 'Visual Identity & Design Systems',
      subtitle: 'Brands are remembered by design excellence.',
      description: 'Digital-first logo marks, typography hierarchies, custom color tokens, and scalable UI component libraries engineered for enterprise trust.',
      deliverables: ['Logo & Mark Architecture', 'Color & Typography Tokens', 'Figma Component Library', 'Brand Guidelines Deck'],
    },
    {
      id: 'web-design',
      category: 'design',
      icon: Laptop,
      title: 'Website Design & UI/UX',
      subtitle: 'Conversion-engineered user experiences.',
      description: 'Immersive, high-converting web layouts designed to guide visitors seamlessly from curiosity to high-intent booking calls.',
      deliverables: ['High-Fidelity Wireframes', 'Interactive Prototypes', 'Responsive Mobile Design', 'Conversion Funnel Flow'],
    },
    {
      id: 'web-dev',
      category: 'engineering',
      icon: Code2,
      title: 'Web Development & Next.js Engine',
      subtitle: 'Sub-100ms execution with 100/100 Lighthouse benchmark.',
      description: 'Custom React & Next.js engineering with WebGL micro-interactions, clean headless CMS integrations, and zero technical debt.',
      deliverables: ['Custom Next.js App Architecture', 'Headless CMS Integration', 'WebGL & Framer Micro-Interactions', '100/100 Lighthouse Score'],
    },
    {
      id: 'seo',
      category: 'growth',
      icon: Search,
      title: 'SEO & Organic Search Dominance',
      subtitle: 'Capture high-intent buyer traffic on Google.',
      description: 'Data-driven technical SEO, programmatic content systems, and authority link-building strategies engineered to dominate Page #1 rankings.',
      deliverables: ['Technical SEO Audit & Fixes', 'Programmatic Content Specs', 'Keyword Intent Mapping', 'Organic Telemetry Dashboard'],
    },
    {
      id: 'digital-marketing',
      category: 'growth',
      icon: TrendingUp,
      title: 'Digital Marketing & Growth Funnels',
      subtitle: 'Predictable, scalable customer acquisition.',
      description: 'Targeted multi-channel ad campaigns, high-converting landers, and automated email nurturing sequences built for payback efficiency.',
      deliverables: ['Paid Social & Search Ads', 'High-Converting Landing Pages', 'Email & SMS Nurturing Sequences', 'Full-Funnel Attribution Setup'],
    },
    {
      id: 'automation',
      category: 'engineering',
      icon: Cpu,
      title: 'AI & Workflow Automation',
      subtitle: 'Scale operations without adding team overhead.',
      description: 'Custom AI neural agents, CRM lead routing, and automated back-office workflows that eliminate manual friction and speed up deal velocity.',
      deliverables: ['Custom AI Lead Qualifiers', 'HubSpot / Salesforce Routing', 'Automated Contract & Invoice Flows', '24/7 Operations Bot'],
    },
    {
      id: 'digital-product',
      category: 'engineering',
      icon: Layers,
      title: 'Digital Product & SaaS Engineering',
      subtitle: 'Full-stack software design & engineering.',
      description: 'End-to-end UX architecture and production development for web applications, SaaS dashboards, and client portals built for scale.',
      deliverables: ['Product Requirement Docs (PRD)', 'SaaS Dashboard UI/UX', 'Full-Stack API & Database Setup', 'Scalable Cloud Deployment'],
    },
  ];

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter(s => s.category === selectedCategory);

  const crazyComparisons = [
    {
      feature: 'CORE OBJECTIVE',
      tradTitle: 'Deliverable Machine',
      tradBadge: '💸 WASTED CAPITAL',
      tradDesc: 'Sells static PDF decks, slow websites, and random ad campaigns with ZERO accountability for revenue.',
      roosTitle: 'Revenue Engine',
      roosBadge: '🚀 4.8X GROWTH MULTIPLIER',
      roosDesc: 'Engineers an integrated growth system linking brand authority, sub-100ms web speed, and sales automation.',
    },
    {
      feature: 'BUILD VELOCITY',
      tradTitle: '6-Month Bureaucracy',
      tradBadge: '🐌 SLOW AS A SNAIL',
      tradDesc: 'Endless account manager meetings, bloated review cycles, and months of waiting for simple site edits.',
      roosTitle: '4-Week Sprint Engine',
      roosBadge: '⚡ HYPER-SPEED EXECUTION',
      roosDesc: 'Production-ready Next.js deployment in 4 to 6 weeks, operating on continuous 90-day momentum sprints.',
    },
    {
      feature: 'WEB SPEED & TECH',
      tradTitle: 'WordPress Plugin Chaos',
      tradBadge: '⚠️ 4.8s LOAD DELAY',
      tradDesc: 'Heavy, slow templates loaded with security flaws, broken plugins, and terrible Lighthouse scores.',
      roosTitle: 'Sub-100ms Next.js Architecture',
      roosBadge: '💯 100/100 LIGHTHOUSE',
      roosDesc: 'Custom React & Next.js headless code with WebGL micro-interactions and zero technical debt.',
    },
    {
      feature: 'OPERATIONS & AI',
      tradTitle: '100% Manual Friction',
      tradBadge: '🤯 HUMAN BOTTLENECK',
      tradDesc: 'Manual data entry, lost lead follow-ups, messy spreadsheets, and zero automated workflows.',
      roosTitle: 'Autonomous Neural AI Workflows',
      roosBadge: '🤖 85% FRICTION ELIMINATED',
      roosDesc: 'Custom AI agents and instant CRM lead routing that execute 24/7 back-office tasks automatically.',
    },
    {
      feature: 'TRANSPARENCY & PRICING',
      tradTitle: 'Billable Hour Padding',
      tradBadge: '❌ SCOPE-CREEP TRAP',
      tradDesc: 'Vague invoices, padded hourly billing, and expensive retainer traps with no performance benchmarks.',
      roosTitle: 'Flat-Rate Productized Sprints',
      roosBadge: '🎯 FULL ATTRIBUTION ROI',
      roosDesc: 'Transparent productized pricing, real-time telemetry dashboards, and total outcome alignment.',
    },
  ];

  const faqs = [
    { q: 'How does Roos StudioX differ from traditional digital agencies?', a: 'Traditional agencies sell isolated deliverables (a logo, a site, an ad). We engineer complete growth engines where strategy, high-speed code, performance marketing, and AI automation work together to drive measurable revenue.' },
    { q: 'What is the typical timeline for a core project?', a: 'Brand identity & core web builds typically take 4 to 6 weeks from kick-off to live production deployment. Full-stack growth engines operate on continuous 90-day momentum sprints.' },
    { q: 'Can we hire Roos StudioX for a specific single service?', a: 'Yes. Whether you need a standalone website redesign, a design system, or an AI automation workflow, we deliver targeted high-impact modules that integrate into your existing stack.' },
    { q: 'What is required from our team during the process?', a: 'We minimize internal friction. We only require strategic alignment during kick-off diagnostics, bi-weekly progress reviews, and final launch sign-offs.' },
  ];

  return (
    <div
      ref={containerRef}
      className="bg-[#050505] text-[#D4D4D8] min-h-screen relative overflow-hidden font-sans pt-28 pb-24 selection:bg-[#FF7A1A] selection:text-white"
    >
      {/* SCROLL-DRIVEN AMBIENT LIGHTING ORB */}
      <motion.div
        style={{ y: glowOrbY }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-[#FF7A1A]/22 via-[#FF7A1A]/5 to-transparent blur-[170px] pointer-events-none -z-10"
      />

      {/* SCROLL-DRIVEN LASER STREAM LINE */}
      <motion.div
        style={{ height: laserBeamHeight }}
        className="fixed left-4 md:left-12 top-0 w-0.5 bg-gradient-to-b from-transparent via-[#FF7A1A] to-transparent pointer-events-none z-20 opacity-70"
      />

      {/* BACKGROUND MESH */}
      <div className="fixed inset-0 bg-[size:4rem_4rem] bg-[linear-gradient(to_right,#FF7A1A08_1px,transparent_1px),linear-gradient(to_bottom,#FF7A1A08_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_40%,#000_80%,transparent_100%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 relative z-10">
        
        {/* ========================================================================= */}
        {/* HERO SECTION */}
        {/* ========================================================================= */}
        <motion.section
          style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
          className="text-center max-w-4xl mx-auto space-y-6 pt-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121215] border border-zinc-800 text-xs font-sans font-semibold text-[#FF7A1A] shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7A1A] animate-pulse" />
            <span>FULL-SERVICE DIGITAL STUDIO ARCHITECTURE</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.08]">
            Full-Service Digital Excellence. <br />
            <span className="bg-gradient-to-r from-white via-zinc-200 to-[#FF7A1A] bg-clip-text text-transparent">
              Engineered For Scale.
            </span>
          </h1>

          <p className="text-base sm:text-xl font-medium text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            We partner with ambitious founders and marketing leaders to build enterprise brand systems, high-converting web engines, and automated revenue funnels.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                triggerLeapConfetti();
                onOpenInquiry();
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FF7A1A] hover:bg-[#FF8833] text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-[#FF7A1A]/30 cursor-pointer flex items-center justify-center gap-2 group hover:scale-105 active:scale-95"
            >
              <span>Book A Free Strategy Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onNavigateHome}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#121215] border border-zinc-800 text-zinc-300 font-sans font-semibold text-xs sm:text-sm uppercase tracking-wider hover:text-white hover:border-zinc-700 transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              Back To Overview
            </button>
          </div>

          {/* QUICK TELEMETRY HIGHLIGHT BAR */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-sans font-semibold text-zinc-400 border-t border-zinc-800/80 max-w-3xl mx-auto">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#FF7A1A]" />
              <span>100/100 LIGHTHOUSE BENCHMARK</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart className="w-4 h-4 text-[#FF7A1A]" />
              <span>SUB-100MS LOAD PERFORMANCE</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#FF7A1A]" />
              <span>END-TO-END GROWTH ENGINE</span>
            </div>
          </div>
        </motion.section>

        {/* ========================================================================= */}
        {/* SERVICES CATEGORY FILTER TABS */}
        {/* ========================================================================= */}
        <section className="space-y-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-zinc-800 pb-6">
            <div>
              <h2 className="font-display text-2xl sm:text-4xl font-black text-white">Our Service Capabilities</h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-medium">Select a category to filter specific capability modules.</p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'All Services' },
                { id: 'strategy', label: 'Strategy' },
                { id: 'design', label: 'Design' },
                { id: 'engineering', label: 'Engineering' },
                { id: 'growth', label: 'Growth' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-sans font-semibold transition-all cursor-pointer ${
                    selectedCategory === tab.id
                      ? 'bg-[#FF7A1A] text-white shadow-lg shadow-[#FF7A1A]/30 scale-105'
                      : 'bg-[#121215] border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* 8 CORE SERVICES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredServices.map((srv, idx) => {
              const IconComponent = srv.icon;
              return (
                <motion.div
                  key={srv.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="p-8 sm:p-10 rounded-3xl bg-[#0A0A0C] border border-zinc-800/90 hover:border-[#FF7A1A]/70 transition-all duration-300 space-y-6 relative overflow-hidden group shadow-xl"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF7A1A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#121215] border border-zinc-800 text-[#FF7A1A] flex items-center justify-center group-hover:bg-[#FF7A1A] group-hover:text-white transition-all shadow-md group-hover:scale-110">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-black text-white group-hover:text-[#FF7A1A] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs font-mono font-bold text-[#FF7A1A]">{srv.subtitle}</p>
                    <p className="text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed pt-1">
                      {srv.description}
                    </p>
                  </div>

                  {/* DELIVERABLES LIST */}
                  <div className="space-y-2 pt-2 border-t border-zinc-800/80">
                    <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-zinc-400">WHAT WE DELIVER</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {srv.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs font-medium text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A1A] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* HIGH-OCTANE "CRAZY" TRADITIONAL VS. ROOS BATTLE ARENA SECTION */}
        {/* ========================================================================= */}
        <section className="space-y-12 py-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-500/20 via-[#FF7A1A]/20 to-[#FF7A1A]/30 border border-[#FF7A1A]/50 text-xs font-mono font-black text-[#FF7A1A] shadow-lg shadow-[#FF7A1A]/20">
              <Flame className="w-4 h-4 text-[#FF7A1A] animate-pulse" />
              <span>THE ULTIMATE AGENCY COMPARISON ARENA</span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl font-black text-white">
              Traditional Agency <span className="text-rose-500 font-mono">VS</span> <span className="text-[#FF7A1A]">Roos StudioX</span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 font-medium max-w-2xl mx-auto">
              See why growth-stage brands abandon legacy marketing vendors for our hyper-powered execution engine.
            </p>
          </div>

          {/* CRAZY INTERACTIVE ARENA CARD & SELECTOR */}
          <div className="space-y-8 max-w-6xl mx-auto">
            
            {/* DIMENSION TAB SELECTOR */}
            <div className="flex flex-wrap justify-center gap-2">
              {crazyComparisons.map((c, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveComparisonIndex(idx)}
                  className={`px-5 py-2.5 rounded-2xl text-xs font-mono font-extrabold transition-all cursor-pointer ${
                    activeComparisonIndex === idx
                      ? 'bg-gradient-to-r from-[#FF7A1A] to-[#FF8833] text-white shadow-xl shadow-[#FF7A1A]/40 scale-105 border border-[#FF8F3A]'
                      : 'bg-[#121215] text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700'
                  }`}
                >
                  0{idx + 1}. {c.feature}
                </button>
              ))}
            </div>

            {/* DYNAMIC CRAZY COMPARISON BATTLEFIELD DISPLAY */}
            <AnimatePresence mode="wait">
              {(() => {
                const activeComp = crazyComparisons[activeComparisonIndex];
                return (
                  <motion.div
                    key={activeComparisonIndex}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
                  >
                    {/* LEFT SIDE: TRADITIONAL AGENCY (GLITCHY DULL WAR ZONE) */}
                    <div className="p-8 sm:p-12 rounded-[32px] bg-[#0A0708] border border-rose-500/30 space-y-6 relative overflow-hidden text-left shadow-2xl group">
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-600 via-rose-500 to-transparent" />
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center border border-rose-500/30">
                            <ZapOff className="w-5 h-5" />
                          </div>
                          <span className="font-mono text-xs font-extrabold text-rose-500 uppercase tracking-widest">TRADITIONAL AGENCY</span>
                        </div>

                        <span className="px-3 py-1 rounded-full bg-rose-500/15 text-rose-400 font-mono text-[11px] font-black border border-rose-500/30">
                          {activeComp.tradBadge}
                        </span>
                      </div>

                      <div className="space-y-3 pt-2">
                        <h3 className="font-display text-2xl sm:text-3xl font-black text-rose-200">
                          {activeComp.tradTitle}
                        </h3>
                        <p className="text-sm sm:text-base text-zinc-400 font-medium leading-relaxed">
                          {activeComp.tradDesc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-rose-500/20 flex items-center gap-2 text-xs font-mono text-rose-400 font-bold">
                        <XCircle className="w-4 h-4 text-rose-500" />
                        <span>RESULT: HIGH FRICTION & LOST MOMENTUM</span>
                      </div>
                    </div>

                    {/* RIGHT SIDE: ROOS STUDIOX (HYPER-NEON GLOWING POWERHOUSE) */}
                    <div className="p-8 sm:p-12 rounded-[32px] bg-[#0F0F14] border-2 border-[#FF7A1A] space-y-6 relative overflow-hidden text-left shadow-[0_20px_60px_rgba(255,122,26,0.35)] group">
                      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FF7A1A] via-[#FF8833] to-amber-400 animate-pulse" />
                      <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#FF7A1A]/20 rounded-full blur-3xl pointer-events-none" />

                      <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#FF7A1A] text-white flex items-center justify-center shadow-lg shadow-[#FF7A1A]/40">
                            <Activity className="w-5 h-5" />
                          </div>
                          <span className="font-mono text-xs font-black text-[#FF7A1A] uppercase tracking-widest">ROOS STUDIOX ENGINE</span>
                        </div>

                        <span className="px-3.5 py-1 rounded-full bg-[#FF7A1A]/20 text-[#FF7A1A] font-mono text-[11px] font-extrabold border border-[#FF7A1A]/60 shadow-md">
                          {activeComp.roosBadge}
                        </span>
                      </div>

                      <div className="space-y-3 pt-2 relative z-10">
                        <h3 className="font-display text-2xl sm:text-3xl font-black text-white group-hover:text-[#FF7A1A] transition-colors">
                          {activeComp.roosTitle}
                        </h3>
                        <p className="text-sm sm:text-base text-zinc-200 font-medium leading-relaxed">
                          {activeComp.roosDesc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#FF7A1A]/40 flex items-center gap-2 text-xs font-mono text-[#FF7A1A] font-bold relative z-10">
                        <CheckCircle2 className="w-4 h-4 text-[#FF7A1A]" />
                        <span>RESULT: EXPONENTIAL BRAND MOMENTUM</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* ENGAGEMENT PROCESS */}
        {/* ========================================================================= */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#FF7A1A]">PROVEN ENGAGEMENT BLUEPRINT</span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white">How We Execute</h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-medium">A structured 4-phase methodology designed for speed, alignment, and maximum ROI.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Audit & Strategy', desc: 'Market diagnostics, competitor teardown, and strategic growth positioning blueprint.' },
              { num: '02', title: 'Architecture & Design', desc: 'Figma component systems, high-converting UI wireframes, and copywriting.' },
              { num: '03', title: 'Build & Engineering', desc: 'Next.js frontend development, CMS wiring, AI automations, and speed optimization.' },
              { num: '04', title: 'Launch & Scale', desc: 'Flawless production deployment, live telemetry setup, and continuous CRO.' },
            ].map((st, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl bg-[#0A0A0C] border border-zinc-800 hover:border-[#FF7A1A]/60 transition-all space-y-3 text-left group"
              >
                <span className="font-mono text-3xl font-black text-[#FF7A1A] group-hover:scale-110 inline-block transition-transform">{st.num}</span>
                <h4 className="font-display text-lg font-black text-white">{st.title}</h4>
                <p className="text-xs text-zinc-400 font-medium leading-relaxed">{st.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FAQ SECTION */}
        {/* ========================================================================= */}
        <section className="space-y-10 max-w-4xl mx-auto">
          <div className="text-center space-y-3">
            <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#FF7A1A]">TRANSPARENCY & CLARITY</span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, fIdx) => (
              <motion.div
                key={fIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: fIdx * 0.08 }}
                className="rounded-2xl bg-[#0A0A0C] border border-zinc-800 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === fIdx ? null : fIdx)}
                  className="w-full p-6 text-left font-display text-base sm:text-lg font-black text-white flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronRight className={`w-5 h-5 text-[#FF7A1A] transition-transform ${activeFaq === fIdx ? 'rotate-90' : ''}`} />
                </button>
                {activeFaq === fIdx && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed border-t border-zinc-800/40 pt-4">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FINAL CONVERSION CALL TO ACTION */}
        {/* ========================================================================= */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-10 sm:p-16 rounded-[36px] bg-[#0A0A0C] border border-[#FF7A1A]/40 text-center space-y-6 relative overflow-hidden backdrop-blur-2xl shadow-2xl"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#FF7A1A] to-transparent" />

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            Ready To Upgrade Your Digital Presence?
          </h2>

          <p className="text-base sm:text-xl font-medium text-zinc-300 max-w-2xl mx-auto">
            Let's discuss your project goals, bottlenecks, and custom roadmap.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                triggerLeapConfetti();
                onOpenInquiry();
              }}
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-[#FF7A1A] hover:bg-[#FF8833] text-white font-sans font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-[#FF7A1A]/30 cursor-pointer flex items-center justify-center gap-3 group hover:scale-105 active:scale-95"
            >
              <span>Book Your Strategy Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onNavigateHome}
              className="w-full sm:w-auto px-8 py-5 rounded-full bg-[#121215] border border-zinc-800 text-zinc-300 font-sans font-semibold text-xs sm:text-sm uppercase tracking-wider hover:text-white hover:border-zinc-700 transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              Back To Home
            </button>
          </div>
        </motion.section>

      </div>
    </div>
  );
};
