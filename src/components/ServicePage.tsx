import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Compass, Shield, Laptop, Code2, Search, TrendingUp, Cpu, Layers, CheckCircle2, ChevronRight, Sparkles, BarChart, Zap, ShieldCheck, XCircle } from 'lucide-react';
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
      particleCount: 100,
      spread: 80,
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

  const comparisonData = [
    {
      feature: 'Strategic Focus & Core Objective',
      traditional: 'Sells disconnected deliverables (a logo, a site, an ad) with zero accountability for business revenue.',
      roos: 'Engineers an integrated growth engine connecting brand positioning, web speed, and sales automation to drive revenue.',
    },
    {
      feature: 'Execution Velocity & Speed',
      traditional: 'Months of agency bureaucracy, slow review cycles, and bloated account management layers.',
      roos: 'Production-ready delivery in 4 to 6 weeks using modern Next.js stacks and 90-day momentum sprints.',
    },
    {
      feature: 'Technical Architecture & Performance',
      traditional: 'Heavy WordPress or Webflow templates loaded with plugins causing 4s+ page load delays and low conversions.',
      roos: 'Next.js & React headless engineering, 100/100 Lighthouse performance benchmark, and sub-100ms load times.',
    },
    {
      feature: 'Operations & AI Automation',
      traditional: '100% manual repetitive tasks, lost lead follow-ups, fragmented emails, and zero automated workflows.',
      roos: 'Custom AI neural agents, automated CRM lead routing, and 24/7 back-office operations eliminating 85% friction.',
    },
    {
      feature: 'Pricing & Value Alignment',
      traditional: 'Billable hour padding, scope-creep add-ons, and high retainer fees with zero performance metrics.',
      roos: 'Flat-rate productized sprints, transparent ROI telemetry, and outcome-oriented value alignment.',
    },
    {
      feature: 'Partnership Relationship',
      traditional: 'Vendor-client relationship where work is handed off to junior offshore execution teams.',
      roos: 'Senior strategic growth partner working directly as an extension of your leadership team.',
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
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#FF7A1A]/20 via-[#FF7A1A]/5 to-transparent blur-[160px] pointer-events-none -z-10"
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
        {/* HERO SECTION WITH SCROLL-LINKED SCALE & OPACITY TRANSFORMS */}
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
        {/* SERVICES CATEGORY FILTER TABS WITH SCROLL REVEAL */}
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

          {/* 8 CORE SERVICES SCROLL-DRIVEN RESPONSIVE GRID */}
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
        {/* ENGAGEMENT PROCESS (4 STEP ROADMAP WITH SCROLL MOTION) */}
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
        {/* TRADITIONAL AGENCY VS. ROOS STUDIOX COMPARISON MATRIX */}
        {/* ========================================================================= */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#FF7A1A]">WHY WE ARE DIFFERENT</span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white">Traditional Agency vs. Roos StudioX</h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-medium">See why growth-stage brands switch from legacy marketing vendors to our integrated growth engine.</p>
          </div>

          <div className="space-y-4 max-w-5xl mx-auto">
            {/* COMPARISON HEADER BAR */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 rounded-2xl bg-[#121215] border border-zinc-800 font-sans text-xs font-bold uppercase tracking-wider hidden md:grid">
              <div className="md:col-span-4 text-zinc-400">DIMENSION</div>
              <div className="md:col-span-4 text-rose-400 flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-rose-400" />
                <span>TRADITIONAL AGENCY</span>
              </div>
              <div className="md:col-span-4 text-[#FF7A1A] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#FF7A1A]" />
                <span>ROOS STUDIOX ENGINE</span>
              </div>
            </div>

            {/* COMPARISON ROWS */}
            {comparisonData.map((row, rIdx) => (
              <motion.div
                key={rIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: rIdx * 0.08 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 sm:p-8 rounded-3xl bg-[#0A0A0C] border border-zinc-800/90 hover:border-[#FF7A1A]/50 transition-all text-left items-start group shadow-md"
              >
                {/* FEATURE DIMENSION */}
                <div className="md:col-span-4 space-y-1">
                  <span className="text-[10px] font-mono font-bold text-[#FF7A1A] uppercase tracking-wider block md:hidden">DIMENSION</span>
                  <h4 className="font-display text-lg font-black text-white group-hover:text-[#FF7A1A] transition-colors">
                    {row.feature}
                  </h4>
                </div>

                {/* TRADITIONAL AGENCY */}
                <div className="md:col-span-4 space-y-1 p-4 rounded-2xl bg-rose-500/5 border border-rose-500/20">
                  <span className="text-[10px] font-mono font-bold text-rose-400 uppercase tracking-wider block md:hidden">TRADITIONAL AGENCY</span>
                  <p className="text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed">
                    {row.traditional}
                  </p>
                </div>

                {/* ROOS STUDIOX */}
                <div className="md:col-span-4 space-y-1 p-4 rounded-2xl bg-[#FF7A1A]/10 border border-[#FF7A1A]/40 shadow-inner">
                  <span className="text-[10px] font-mono font-bold text-[#FF7A1A] uppercase tracking-wider block md:hidden">ROOS STUDIOX</span>
                  <p className="text-xs sm:text-sm text-white font-semibold leading-relaxed">
                    {row.roos}
                  </p>
                </div>
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
