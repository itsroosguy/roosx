import React, { useState, useEffect } from 'react';
import { ArrowRight, Compass, Shield, Laptop, Cpu, BarChart3, CheckCircle2, ChevronDown, Sparkles, Layers } from 'lucide-react';
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
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeDeepDive, setActiveDeepDive] = useState<number>(0);
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

  const outcomes = [
    { title: 'Build Unshakeable Authority', sub: 'Transform from a commoditized option into the category leader clients choose first.' },
    { title: 'Generate Predictable Demand', sub: 'Replace sporadic referral reliance with systematic, high-intent pipeline acquisition.' },
    { title: 'Multiply Web Conversions', sub: 'Turn static traffic into qualified pipeline with 100/100 Lighthouse performance.' },
    { title: 'Automate Complex Operations', sub: 'Scale output 5x without adding operational overhead or management friction.' },
  ];

  const ecosystemNodes = [
    { step: '01', title: 'Brand Strategy', desc: 'Market positioning, messaging architecture & category dominance' },
    { step: '02', title: 'Identity Design', desc: 'Design systems, visual identity & digital-first brand guidelines' },
    { step: '03', title: 'Website Experience', desc: 'High-conversion UI/UX, WebGL interactions & Next.js performance' },
    { step: '04', title: 'Marketing Systems', desc: 'Acquisition funnels, content distribution & demand engines' },
    { step: '05', title: 'Automation & AI', desc: 'Custom neural workflows, CRM integrations & automated operations' },
    { step: '06', title: 'Compounded Growth', desc: 'Continuous telemetry, conversion rate optimization & revenue scaling' },
  ];

  const deepDives = [
    {
      title: 'Brand Strategy & Market Positioning',
      subtitle: 'Before growth comes direction.',
      problem: 'Most brands fail not because of poor products, but because their positioning is indistinguishable from competitors.',
      solution: 'We conduct deep market diagnostics to extract your unfair advantage, define your brand narrative, and position you as the definitive choice in your market.',
      outcomes: ['Clear Market Differentiation', 'Higher Value Pricing Power', 'Unified Strategic Alignment'],
      icon: Compass,
    },
    {
      title: 'Visual Identity & Design Systems',
      subtitle: 'Brands are remembered by design.',
      problem: 'Inconsistent visual touchpoints dilute brand authority and erode customer trust before sales calls even start.',
      solution: 'We engineer comprehensive design systems—logo marks, typography scale, color tokens, and UI components—built to project enterprise quality across every channel.',
      outcomes: ['Cohesive Multi-Platform Presence', 'Faster Product & Marketing Execution', 'Instant Market Trust'],
      icon: Shield,
    },
    {
      title: 'High-Converting Web Experiences',
      subtitle: 'Your website should sell while you sleep.',
      problem: 'Traditional agency websites look pretty but suffer from slow load times, vague messaging, and zero conversion architecture.',
      solution: 'We build Next.js powered web engines with sub-second page loads, intuitive UX micro-interactions, and conversion pathways engineered to turn visitors into booked calls.',
      outcomes: ['Sub-100ms Page Load Times', 'Increased Form Completion Rates', 'Self-Selling Digital Presence'],
      icon: Laptop,
    },
    {
      title: 'Performance Marketing & Demand Engines',
      subtitle: 'Visibility means nothing without revenue.',
      problem: 'Ad spend is wasted when traffic isn\'t aligned with high-converting lander experiences.',
      solution: 'We deploy targeted acquisition campaigns, multi-channel funnels, and data-driven landing pages designed specifically for payback efficiency and scalable ROI.',
      outcomes: ['Lower Cost Per Acquisition', 'Higher Intent Lead Volume', 'Transparent Revenue Attribution'],
      icon: BarChart3,
    },
    {
      title: 'AI Workflows & Operations Automation',
      subtitle: 'Scale without scaling complexity.',
      problem: 'Manual repetitive tasks choke team velocity and cap revenue growth potential.',
      solution: 'We architect custom AI agents, automated lead routing, and CRM pipeline workflows that execute routine tasks instantly and accurately.',
      outcomes: ['80% Reduction in Manual Tasks', 'Instant Lead Follow-Up Acceleration', 'Linear Cost, Exponential Output'],
      icon: Cpu,
    },
  ];

  const processSteps = [
    { num: '01', title: 'Discover', text: 'Auditing your market positioning, current metrics, and conversion bottlenecks.' },
    { num: '02', title: 'Strategize', text: 'Architecting the exact growth blueprint, brand messaging, and technical stack.' },
    { num: '03', title: 'Design', text: 'Crafting high-fidelity UI systems, editorial visuals, and interactive prototypes.' },
    { num: '04', title: 'Build', text: 'Engineering lightning-fast code with WebGL micro-interactions & robust architecture.' },
    { num: '05', title: 'Launch', text: 'Flawless production deployment, DNS optimization, and live telemetry tracking.' },
    { num: '06', title: 'Optimize', text: 'Iterative CRO, funnel refinement, and scaling revenue momentum.' },
  ];

  const beliefs = [
    { title: 'Strong Foundations Before Growth', text: 'Building campaigns on broken brand positioning or slow websites is wasting capital. We fix the basement first.' },
    { title: 'Strategy Before Execution', text: 'We never write code or design screens until the strategic business objective is crystal clear.' },
    { title: 'Systems Before Scale', text: 'Growth without systems leads to operational collapse. We engineer scalable workflows before turning up volume.' },
    { title: 'Partnership Over Projects', text: 'We operate as an extension of your leadership team, deeply invested in long-term enterprise value.' },
  ];

  const faqs = [
    { q: 'How does Roos StudioX differ from traditional digital agencies?', a: 'Traditional agencies sell disconnected deliverables (a logo, a site, an ad). We engineer complete growth engines where brand strategy, web performance, and automation work together to drive measurable revenue.' },
    { q: 'What size companies do you work with?', a: 'We partner with ambitious startups launching new categories, as well as established growth-stage companies looking to modernize their brand authority and digital conversion architecture.' },
    { q: 'How long does a typical engagement take?', a: 'Brand strategy & core website builds typically take 4 to 8 weeks from kick-off to launch. Retainer growth & automation engines operate on continuous 90-day momentum sprints.' },
    { q: 'What is required from our internal team?', a: 'We handle heavy lifting end-to-end. We only require strategic alignment during kick-off diagnostics, bi-weekly progress reviews, and final sign-offs.' },
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen relative overflow-hidden font-sans selection:bg-[#FF6B00] selection:text-white pt-28 pb-24">
      
      {/* 1. CURSOR SPOTLIGHT */}
      <div
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
        className="fixed w-[750px] h-[750px] rounded-full bg-radial from-[#FF6B00]/14 via-[#FF6B00]/3 to-transparent blur-[160px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0 transition-opacity duration-500"
      />

      {/* 2. BACKGROUND MESH */}
      <div className="fixed inset-0 bg-[size:4rem_4rem] bg-[linear-gradient(to_right,#FF6B0008_1px,transparent_1px),linear-gradient(to_bottom,#FF6B0008_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_40%,#000_80%,transparent_100%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-32">
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION (PURPOSEFUL, EDITORIAL & CONVERSION FOCUSED) */}
        {/* ========================================================================= */}
        <section className="text-center max-w-4xl mx-auto space-y-8 pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121215] border border-[#FF6B00]/40 text-xs font-mono font-bold text-[#FF6B00] shadow-lg shadow-[#FF6B00]/10 tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6B00] animate-pulse" />
            <span>ROOS STUDIOX SERVICES ECOSYSTEM</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] text-white">
            Growth Isn't Accidental. <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-white via-zinc-200 to-[#FF6B00] bg-clip-text text-transparent">
              It's Engineered.
            </span>
          </h1>

          <p className="text-base sm:text-xl font-medium text-zinc-300 leading-relaxed max-w-2xl mx-auto">
            We build the brand foundations, high-converting digital products, and automated growth engines that help ambitious businesses dominate their category.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                triggerLeapConfetti();
                onOpenInquiry();
              }}
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#FF6B00] text-white font-mono font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#FF8833] transition-all shadow-[0_12px_35px_rgba(255,107,0,0.4)] cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>Get Your Free Growth Audit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#ecosystem"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#121215] border border-zinc-800 text-zinc-300 font-mono font-bold text-xs sm:text-sm uppercase tracking-wider hover:text-white hover:border-zinc-700 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Explore Ecosystem</span>
              <ChevronDown className="w-4 h-4 text-[#FF6B00]" />
            </a>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. WHAT WE HELP YOU ACHIEVE (OUTCOMES OVER SERVICES) */}
        {/* ========================================================================= */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00]">MEASURABLE BUSINESS OUTCOMES</span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white">What We Help You Achieve</h2>
            <p className="text-zinc-400 text-sm sm:text-base font-medium">We don't focus on deliverables. We focus on outcome-driven growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {outcomes.map((out, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-[#0A0A0C] border border-zinc-800/90 hover:border-[#FF6B00]/50 transition-all space-y-3 relative overflow-hidden group">
                <div className="w-10 h-10 rounded-xl bg-[#121215] border border-zinc-800 text-[#FF6B00] flex items-center justify-center font-mono font-black text-sm group-hover:bg-[#FF6B00] group-hover:text-white transition-all">
                  0{idx + 1}
                </div>
                <h3 className="font-display text-2xl font-black text-white">{out.title}</h3>
                <p className="text-zinc-300 text-sm font-medium leading-relaxed">{out.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. OUR SERVICES ECOSYSTEM (VISUAL FLOW ARCHITECTURE) */}
        {/* ========================================================================= */}
        <section id="ecosystem" className="space-y-12 pt-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00]">INTERCONNECTED GROWTH SYSTEM</span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white">Our Integrated Services Ecosystem</h2>
            <p className="text-zinc-400 text-sm sm:text-base font-medium">Every capability connects directly to the next, building compounding brand momentum.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {ecosystemNodes.map((node, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#0F0F14] border border-zinc-800/80 space-y-3 relative">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#FF6B00]/15 text-[#FF6B00] font-mono text-xs font-bold border border-[#FF6B00]/30">
                    STEP {node.step}
                  </span>
                  <Layers className="w-4 h-4 text-zinc-600" />
                </div>
                <h4 className="font-display text-xl font-black text-white">{node.title}</h4>
                <p className="text-xs text-zinc-400 font-medium leading-relaxed">{node.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. SERVICE DEEP DIVES (EDITORIAL STORYTELLING) */}
        {/* ========================================================================= */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00]">CAPABILITY DEEP DIVES</span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white">Strategic Execution Architecture</h2>
          </div>

          {/* INTERACTIVE NAVIGATION DEEP DIVE SELECTOR */}
          <div className="flex flex-wrap justify-center gap-2">
            {deepDives.map((d, dIdx) => (
              <button
                key={dIdx}
                onClick={() => setActiveDeepDive(dIdx)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono font-[#FF6B00] font-bold transition-all cursor-pointer ${
                  activeDeepDive === dIdx
                    ? 'bg-[#FF6B00] text-white shadow-lg shadow-[#FF6B00]/30'
                    : 'bg-[#121215] text-zinc-400 border border-zinc-800 hover:text-white'
                }`}
              >
                0{dIdx + 1}. {d.title.split('&')[0]}
              </button>
            ))}
          </div>

          {/* DEEP DIVE DISPLAY CARD */}
          <div className="p-8 sm:p-12 rounded-[32px] bg-[#0A0A0C] border border-[#FF6B00]/30 space-y-8 backdrop-blur-2xl">
            {(() => {
              const current = deepDives[activeDeepDive];
              const IconComp = current.icon;
              return (
                <div className="space-y-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-zinc-800/80 pb-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/20 text-[#FF6B00] flex items-center justify-center border border-[#FF6B00]/40">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <h3 className="font-display text-2xl sm:text-4xl font-black text-white">{current.title}</h3>
                      </div>
                      <p className="text-base text-[#FF6B00] font-mono font-bold">{current.subtitle}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3 p-6 rounded-2xl bg-[#121215] border border-zinc-800">
                      <span className="text-xs font-mono font-bold text-rose-400 uppercase">THE CORE PROBLEM</span>
                      <p className="text-sm text-zinc-300 font-medium leading-relaxed">{current.problem}</p>
                    </div>

                    <div className="space-y-3 p-6 rounded-2xl bg-[#121215] border border-zinc-800">
                      <span className="text-xs font-mono font-bold text-emerald-400 uppercase">THE ROOS SOLUTION</span>
                      <p className="text-sm text-zinc-300 font-medium leading-relaxed">{current.solution}</p>
                    </div>
                  </div>

                  <div className="pt-4 space-y-3">
                    <span className="text-xs font-mono font-bold text-[#FF6B00] uppercase">KEY OUTCOMES DELIVERED</span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {current.outcomes.map((out, oIdx) => (
                        <div key={oIdx} className="p-4 rounded-xl bg-[#121215] border border-zinc-800/80 flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                          <span className="text-xs font-medium text-zinc-200">{out}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. THE ROOS PROCESS (CONNECTED JOURNEY) */}
        {/* ========================================================================= */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00]">TRANSPARENT METHODOLOGY</span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white">The Roos Momentum Blueprint</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((st, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#0A0A0C] border border-zinc-800/80 space-y-3 text-left">
                <span className="font-mono text-2xl font-black text-[#FF6B00]">{st.num}</span>
                <h4 className="font-display text-xl font-black text-white">{st.title}</h4>
                <p className="text-xs text-zinc-400 font-medium leading-relaxed">{st.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. WHY CLIENTS CHOOSE ROOS (BELIEFS & PHILOSOPHY) */}
        {/* ========================================================================= */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00]">OUR CORE OPERATING PRINCIPLES</span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white">Why Growth-Minded Brands Partner With Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beliefs.map((b, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-[#0F0F14] border border-zinc-800/80 space-y-3 text-left">
                <h3 className="font-display text-xl font-black text-white">{b.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. FRICTION-REDUCING FAQ */}
        {/* ========================================================================= */}
        <section className="space-y-12 max-w-4xl mx-auto">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00]">CLARITY & FRICTION REDUCTION</span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, fIdx) => (
              <div
                key={fIdx}
                className="rounded-2xl bg-[#0A0A0C] border border-zinc-800/90 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === fIdx ? null : fIdx)}
                  className="w-full p-6 text-left font-display text-lg font-black text-white flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#FF6B00] transition-transform ${activeFaq === fIdx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === fIdx && (
                  <div className="px-6 pb-6 text-sm text-zinc-300 font-medium leading-relaxed border-t border-zinc-800/40 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. FINAL CALL TO ACTION */}
        {/* ========================================================================= */}
        <section className="p-10 sm:p-16 rounded-[36px] bg-[#0A0A0C] border border-[#FF6B00]/40 text-center space-y-6 relative overflow-hidden backdrop-blur-2xl shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent" />

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            Ready To Build Your Next Leap?
          </h2>

          <p className="text-base sm:text-xl font-medium text-zinc-300 max-w-2xl mx-auto">
            Let's discuss your goals, current bottlenecks, and growth opportunities.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                triggerLeapConfetti();
                onOpenInquiry();
              }}
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-[#FF6B00] text-white font-mono font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#FF8833] transition-all shadow-[0_15px_40px_rgba(255,107,0,0.45)] cursor-pointer flex items-center justify-center gap-3 group"
            >
              <span>Get Your Free Growth Audit</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onNavigateHome}
              className="w-full sm:w-auto px-8 py-5 rounded-full bg-[#121215] border border-zinc-800 text-zinc-300 font-mono font-bold text-xs sm:text-sm uppercase tracking-wider hover:text-white hover:border-zinc-700 transition-all cursor-pointer"
            >
              Back to Home
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
