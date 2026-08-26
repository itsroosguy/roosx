import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Compass, Shield, Laptop, Code2, Search, TrendingUp, Cpu, Layers, CheckCircle2, ChevronRight, Sparkles, Flame, Check } from 'lucide-react';
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
      subtitle: 'Position your brand clearly so customers choose you over competitors.',
      description: 'We analyze your market, define your core messaging, and position your business so clients immediately understand your value.',
      deliverables: ['Market Positioning Plan', 'Customer Persona Insights', 'Brand Messaging Framework', 'Competitor Analysis'],
    },
    {
      id: 'visual-identity',
      category: 'design',
      icon: Shield,
      title: 'Visual Identity & Logo Design',
      subtitle: 'Create a memorable brand identity that builds instant trust.',
      description: 'We design modern logo marks, color schemes, typography, and visual assets that give your business a professional corporate look.',
      deliverables: ['Logo & Brand Guidelines', 'Color Palette & Typography', 'Business Card & Stationery Design', 'Social Media Asset Templates'],
    },
    {
      id: 'web-design',
      category: 'design',
      icon: Laptop,
      title: 'Website Design & UI/UX',
      subtitle: 'Design modern, mobile-friendly websites engineered to generate leads.',
      description: 'Clean, attractive website layouts designed to give your visitors a smooth experience and convert them into paying customers.',
      deliverables: ['Custom UI/UX Designs', 'Mobile & Tablet Responsive Layouts', 'Interactive Prototypes', 'Conversion Lead Forms'],
    },
    {
      id: 'web-dev',
      category: 'engineering',
      icon: Code2,
      title: 'Web Development & Speed Optimization',
      subtitle: 'Build fast, secure, and reliable websites using modern tech.',
      description: 'We develop custom React and Next.js websites that load instantly, rank well on Google, and work seamlessly across all devices.',
      deliverables: ['Fast Custom Next.js Coding', 'Easy Content Management System (CMS)', 'Mobile & Google Speed Optimization', 'SSL & Security Setup'],
    },
    {
      id: 'seo',
      category: 'growth',
      icon: Search,
      title: 'SEO & Google Search Ranking',
      subtitle: 'Rank higher on Google for keywords your buyers search for.',
      description: 'We optimize your website code, fix technical issues, and target high-intent keywords to get your business consistent organic traffic.',
      deliverables: ['Complete Google & Technical SEO Audit', 'Target Keyword Research', 'On-Page SEO Optimization', 'Monthly Keyword Ranking Reports'],
    },
    {
      id: 'digital-marketing',
      category: 'growth',
      icon: TrendingUp,
      title: 'Digital Marketing & Paid Ad Campaigns',
      subtitle: 'Run targeted ad campaigns across Meta & Google for proven ROI.',
      description: 'We create and manage high-converting ad campaigns that reach the right audience, generate qualified leads, and grow your sales.',
      deliverables: ['Google & Meta Ad Setup', 'High-Converting Ad Landing Pages', 'Ad Copywriting & Banner Creatives', 'Weekly Performance Reporting'],
    },
    {
      id: 'automation',
      category: 'engineering',
      icon: Cpu,
      title: 'Business Process & CRM Automation',
      subtitle: 'Automate lead follow-ups and daily operational tasks.',
      description: 'Save hours of manual effort by setting up automated WhatsApp/Email lead follow-ups, CRM updates, and customer management flows.',
      deliverables: ['Automated Lead Notifications', 'CRM Setup (HubSpot / Zoho)', 'Email & WhatsApp Auto-Responders', 'Invoice & Booking Automations'],
    },
    {
      id: 'digital-product',
      category: 'engineering',
      icon: Layers,
      title: 'Custom Web Applications & SaaS',
      subtitle: 'Develop custom web apps, customer portals, and internal tools.',
      description: 'Full-stack development for custom software, web portals, and SaaS dashboards tailored to your exact business requirements.',
      deliverables: ['Product Requirement & Scope', 'Custom SaaS Dashboard UI', 'Secure Database & API Setup', 'Cloud Server Deployment'],
    },
  ];

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter(s => s.category === selectedCategory);

  const cleanComparisons = [
    {
      feature: 'STRATEGIC APPROACH',
      tradTitle: 'One-off Services',
      tradBadge: 'NO GUARANTEED OUTCOME',
      tradDesc: 'Sells standalone logos or ads without checking if your overall branding or website converts leads.',
      roosTitle: 'End-to-End Growth Partner',
      roosBadge: 'FOCUS ON REAL ROI',
      roosDesc: 'We connect brand strategy, website design, ads, and lead follow-up automation into a complete growth engine.',
    },
    {
      feature: 'TURNAROUND TIME',
      tradTitle: 'Slow 3-6 Months Process',
      tradBadge: 'SLOW DELAYS',
      tradDesc: 'Endless agency meetings, slow email replies, and months of delay before your website actually goes live.',
      roosTitle: 'Fast 4-6 Weeks Delivery',
      roosBadge: 'ON-TIME DELIVERY',
      roosDesc: 'We follow a structured sprint system with clear weekly updates and fast on-time launch.',
    },
    {
      feature: 'WEBSITE QUALITY & SPEED',
      tradTitle: 'Slow WordPress Templates',
      tradBadge: '4s+ SLOW LOAD SPEED',
      tradDesc: 'Heavy templates loaded with plugins that crash often, load slowly, and frustrate potential customers.',
      roosTitle: 'Custom Modern Web Tech',
      roosBadge: 'LIGHTNING FAST WEBSITE',
      roosDesc: 'Clean custom code optimized for mobile phones and Google speed benchmarks, loading in sub-1 second.',
    },
    {
      feature: 'LEAD AUTOMATION',
      tradTitle: 'Manual Lead Handling',
      tradBadge: 'LOST LEADS',
      tradDesc: 'Inquiries sit in email inboxes for hours or days with no automated follow-up or CRM tracking.',
      roosTitle: 'Instant Automated Follow-up',
      roosBadge: 'INSTANT WHATSAPP / EMAIL',
      roosDesc: 'Leads receive instant automated confirmation, notifications go to your sales team, and CRM is updated automatically.',
    },
    {
      feature: 'PRICING & TRANSPARENCY',
      tradTitle: 'Hidden Costs & Scope Creep',
      tradBadge: 'UNEXPECTED BILLS',
      tradDesc: 'Extra charges for small edits, vague invoices, and expensive monthly retainers with zero clarity.',
      roosTitle: 'Clear Upfront Pricing',
      roosBadge: '100% TRANSPARENT',
      roosDesc: 'Fixed transparent project costs with detailed deliverables so you know exactly what you are paying for.',
    },
  ];

  const faqs = [
    { q: 'How does Roos StudioX help my business grow?', a: 'We do not just build a website or run ads in isolation. We look at your business holistically—improving your brand positioning, creating a fast lead-converting website, running targeted ad campaigns, and setting up automated lead follow-ups.' },
    { q: 'What is the typical timeline for a website project?', a: 'A complete branding and custom website project usually takes 4 to 6 weeks from kick-off to live launch. We share weekly progress updates so you are always in the loop.' },
    { q: 'Can we hire you for just one service like website design or SEO?', a: 'Yes, absolutely. You can start with a single service like website redesign, logo branding, or Google SEO, and scale as your business grows.' },
    { q: 'What is required from our side during the project?', a: 'We keep your time investment minimal. We only need your inputs during the initial discovery meeting, approval of design drafts, and final review before launch.' },
  ];

  return (
    <div
      ref={containerRef}
      className="bg-[#050505] text-[#D4D4D8] min-h-screen relative overflow-hidden font-sans pt-28 pb-24 selection:bg-[#FF7A1A] selection:text-white"
    >
      {/* BACKGROUND ATMOSPHERIC LIGHTING */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-[#FF7A1A]/18 via-[#FF7A1A]/4 to-transparent blur-[160px] pointer-events-none -z-10" />

      {/* BACKGROUND MESH */}
      <div className="fixed inset-0 bg-[size:4rem_4rem] bg-[linear-gradient(to_right,#FF7A1A08_1px,transparent_1px),linear-gradient(to_bottom,#FF7A1A08_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_40%,#000_80%,transparent_100%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 relative z-10">
        
        {/* ========================================================================= */}
        {/* HERO SECTION */}
        {/* ========================================================================= */}
        <section className="text-center max-w-4xl mx-auto space-y-6 pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121215] border border-zinc-800 text-xs font-sans font-semibold text-[#FF7A1A] shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7A1A]" />
            <span>ROOS STUDIOX • DIGITAL GROWTH & MARKETING SERVICES</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.08]">
            We Help Ambitious Businesses Build Strong Brands & <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-white via-zinc-200 to-[#FF7A1A] bg-clip-text text-transparent">
              Drive Real Growth.
            </span>
          </h1>

          <p className="text-base sm:text-xl font-medium text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            From brand strategy and high-converting websites to digital marketing and workflow automation, we deliver end-to-end solutions that help your business scale.
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

          {/* HIGHLIGHT PROOFS */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-sans font-semibold text-zinc-300 border-t border-zinc-800/80 max-w-3xl mx-auto">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#FF7A1A]" />
              <span>CLEAR UPFRONT PRICING</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#FF7A1A]" />
              <span>FAST 4-6 WEEKS TURNAROUND</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#FF7A1A]" />
              <span>END-TO-END SUPPORT</span>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SERVICES CATEGORY FILTER TABS */}
        {/* ========================================================================= */}
        <section className="space-y-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-zinc-800 pb-6">
            <div>
              <h2 className="font-display text-2xl sm:text-4xl font-black text-white">Our Core Services</h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-medium">Select a category below to explore specific services.</p>
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
            <AnimatePresence mode="popLayout">
              {filteredServices.map((srv, idx) => {
                const IconComponent = srv.icon;
                return (
                  <motion.div
                    key={srv.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    whileHover={{ y: -6 }}
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
                      <p className="text-xs font-sans font-bold text-[#FF7A1A]">{srv.subtitle}</p>
                      <p className="text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed pt-1">
                        {srv.description}
                      </p>
                    </div>

                    {/* DELIVERABLES LIST */}
                    <div className="space-y-2 pt-2 border-t border-zinc-800/80">
                      <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-zinc-400">KEY DELIVERABLES</span>
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
            </AnimatePresence>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* TRADITIONAL AGENCY VS. ROOS STUDIOX COMPARISON SECTION */}
        {/* ========================================================================= */}
        <section className="space-y-12 py-4">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121215] border border-zinc-800 text-xs font-sans font-semibold text-[#FF7A1A]">
              <Flame className="w-3.5 h-3.5 text-[#FF7A1A]" />
              <span>WHY BUSINESSES SWITCH TO US</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-black text-white">
              Traditional Agency <span className="text-rose-500 font-mono">VS</span> <span className="text-[#FF7A1A]">Roos StudioX</span>
            </h2>

            <p className="text-xs sm:text-sm text-zinc-400 font-medium max-w-2xl mx-auto">
              Compare how our modern approach delivers better speed, transparency, and lead generation for your business.
            </p>
          </div>

          {/* COMPARISON DIMENSION SELECTOR */}
          <div className="space-y-8 max-w-5xl mx-auto">
            
            <div className="flex flex-wrap justify-center gap-2">
              {cleanComparisons.map((c, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveComparisonIndex(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-sans font-bold transition-all cursor-pointer ${
                    activeComparisonIndex === idx
                      ? 'bg-[#FF7A1A] text-white shadow-lg shadow-[#FF7A1A]/30 scale-105'
                      : 'bg-[#121215] text-zinc-400 border border-zinc-800 hover:text-white'
                  }`}
                >
                  0{idx + 1}. {c.feature}
                </button>
              ))}
            </div>

            {/* COMPARISON DISPLAY CARD */}
            <AnimatePresence mode="wait">
              {(() => {
                const activeComp = cleanComparisons[activeComparisonIndex];
                return (
                  <motion.div
                    key={activeComparisonIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
                  >
                    {/* LEFT: TRADITIONAL AGENCY */}
                    <div className="p-8 sm:p-10 rounded-3xl bg-[#0A0708] border border-rose-500/30 space-y-4 text-left shadow-xl">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-rose-500 uppercase tracking-wider">TRADITIONAL AGENCY</span>
                        <span className="px-3 py-1 rounded-full bg-rose-500/15 text-rose-400 font-sans text-xs font-bold border border-rose-500/30">
                          {activeComp.tradBadge}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl font-black text-rose-200">
                        {activeComp.tradTitle}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-zinc-400 font-medium leading-relaxed">
                        {activeComp.tradDesc}
                      </p>
                    </div>

                    {/* RIGHT: ROOS STUDIOX */}
                    <div className="p-8 sm:p-10 rounded-3xl bg-[#0F0F14] border-2 border-[#FF7A1A] space-y-4 text-left shadow-[0_15px_45px_rgba(255,122,26,0.25)] relative overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-1 bg.gradient-to-r from-[#FF7A1A] to-[#FF8833]" />

                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-[#FF7A1A] uppercase tracking-wider">ROOS STUDIOX APPROACH</span>
                        <span className="px-3 py-1 rounded-full bg-[#FF7A1A]/20 text-[#FF7A1A] font-sans text-xs font-bold border border-[#FF7A1A]/50">
                          {activeComp.roosBadge}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl font-black text-white">
                        {activeComp.roosTitle}
                      </h3>

                      <p className="text-xs sm:text-sm text-zinc-200 font-medium leading-relaxed">
                        {activeComp.roosDesc}
                      </p>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* HOW WE WORK WITH YOU (4 STEP PROCESS) */}
        {/* ========================================================================= */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#FF7A1A]">SIMPLE & TRANSPARENT PROCESS</span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white">How We Work With You</h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-medium">A structured 4-step process designed to get your business live and generating results quickly.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Discovery & Audit', desc: 'We audit your current brand, website, and competitors to define a clear growth plan.' },
              { num: '02', title: 'Strategy & Design', desc: 'We create high-converting website designs, branding assets, and copywriting for your approval.' },
              { num: '03', title: 'Development & Launch', desc: 'We build your fast custom website, integrate automations, and launch smoothly.' },
              { num: '04', title: 'Growth & Support', desc: 'We run ad campaigns, optimize Google SEO rankings, and provide continuous updates.' },
            ].map((st, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#0A0A0C] border border-zinc-800 space-y-3 text-left">
                <span className="font-mono text-3xl font-black text-[#FF7A1A]">{st.num}</span>
                <h4 className="font-display text-lg font-black text-white">{st.title}</h4>
                <p className="text-xs text-zinc-400 font-medium leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FAQ SECTION */}
        {/* ========================================================================= */}
        <section className="space-y-10 max-w-4xl mx-auto">
          <div className="text-center space-y-3">
            <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#FF7A1A]">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white">Everything You Need To Know</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, fIdx) => (
              <div
                key={fIdx}
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
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FINAL CONVERSION CALL TO ACTION */}
        {/* ========================================================================= */}
        <section className="p-10 sm:p-16 rounded-[36px] bg-[#0A0A0C] border border-[#FF7A1A]/40 text-center space-y-6 relative overflow-hidden backdrop-blur-2xl shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#FF7A1A] to-transparent" />

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            Ready To Grow Your Business?
          </h2>

          <p className="text-base sm:text-xl font-medium text-zinc-300 max-w-2xl mx-auto">
            Book a free strategy call to discuss your goals and get a custom growth roadmap.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                triggerLeapConfetti();
                onOpenInquiry();
              }}
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-[#FF7A1A] hover:bg-[#FF8833] text-white font-sans font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-[#FF7A1A]/30 cursor-pointer flex items-center justify-center gap-3 group hover:scale-105 active:scale-95"
            >
              <span>Book Your Free Strategy Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onNavigateHome}
              className="w-full sm:w-auto px-8 py-5 rounded-full bg-[#121215] border border-zinc-800 text-zinc-300 font-sans font-semibold text-xs sm:text-sm uppercase tracking-wider hover:text-white hover:border-zinc-700 transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              Back To Home
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
