import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  FileText,
} from 'lucide-react';
import { AlphaRoosButton } from './AlphaRoosButton';

interface ServicesPageProps {
  onOpenInquiry: () => void;
  isDarkMode: boolean;
  onNavigateHome: () => void;
}

interface DetailedService {
  id: string;
  num: string;
  title: string;
  headline: string;
  copy: string;
  imageUrl: string;
  deliverables: string[];
  includes?: string[];
  outcome: string;
  perfectFor?: string;
  align: 'left' | 'right';
}

const detailedServices: DetailedService[] = [
  {
    id: 'brand-strategy',
    num: '01',
    title: 'Brand Strategy & Positioning',
    headline: 'Build a Brand People Remember',
    copy: 'A great logo isn\'t a brand. A strong brand is a clear promise, a unique market position, and a memorable identity that customers instantly recognize and trust. We help businesses uncover what makes them different and transform that advantage into a powerful brand strategy that stands out in crowded markets.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Brand Discovery Workshops',
      'Market Research',
      'Competitor Analysis',
      'Brand Positioning',
      'Brand Messaging',
      'Value Proposition Development',
      'Customer Persona Mapping',
      'Naming Consultation',
      'Brand Architecture',
      'Brand Guidelines',
    ],
    perfectFor:
      'Businesses struggling to differentiate themselves, attract premium customers, or communicate their value effectively.',
    outcome:
      'Stand out in crowded markets, attract premium customers, and clearly communicate your value.',
    align: 'left',
  },
  {
    id: 'visual-identity',
    num: '02',
    title: 'Logo & Visual Identity Design',
    headline: 'Create A Brand That Looks As Good As It Performs',
    copy: 'Your visual identity shapes first impressions long before customers read a single word. We design memorable brand systems that communicate professionalism, credibility, and confidence across every customer touchpoint.',
    imageUrl: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Logo Design',
      'Visual Identity Systems',
      'Color Palette Development',
      'Typography Selection',
      'Brand Assets',
      'Icon Systems',
      'Social Media Assets',
      'Brand Style Guides',
      'Marketing Collateral',
    ],
    outcome:
      'A professional visual identity that builds trust, increases recognition, and creates consistency across your business.',
    align: 'right',
  },
  {
    id: 'website-development',
    num: '03',
    title: 'Website Design & Development',
    headline: 'Your Website Should Be Your Best Salesperson',
    copy: 'A website should do more than look beautiful. It should educate visitors, build trust, answer objections, and guide prospects toward taking action. We design and develop high-performance websites that combine exceptional user experience with conversion-focused strategy.',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Business Websites',
      'Corporate Websites',
      'Landing Pages',
      'Service Websites',
      'Portfolio Websites',
      'Responsive Development',
      'CMS Integration',
      'Speed Optimization',
      'SEO Foundations',
      'Conversion Optimization',
    ],
    includes: [
      'Mobile-First Design',
      'Fast Loading Performance (99+ Speed)',
      'SEO-Friendly Structure',
      'Accessibility Best Practices',
      'Conversion-Focused UX',
      'Analytics Integration',
    ],
    outcome:
      'A digital experience that attracts, engages, and converts visitors into qualified leads.',
    align: 'left',
  },
  {
    id: 'ui-ux-design',
    num: '04',
    title: 'UI/UX Design',
    headline: 'Design Experiences People Actually Enjoy Using',
    copy: 'Great user experiences feel effortless. We create intuitive interfaces that help users find what they need quickly while increasing engagement, satisfaction, and conversions.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'UX Strategy',
      'User Research',
      'User Flows',
      'Wireframes',
      'Interface Design',
      'Design Systems',
      'Dashboard Design',
      'Mobile App Design',
      'SaaS Product Design',
      'Prototype Development',
    ],
    outcome:
      'Digital products that are easier to use, more enjoyable to interact with, and designed for long-term growth.',
    align: 'right',
  },
  {
    id: 'seo-optimization',
    num: '05',
    title: 'Search Engine Optimization (SEO)',
    headline: 'Get Found By The Right Customers',
    copy: 'If customers can\'t find you, they can\'t buy from you. Our SEO strategies improve visibility, increase qualified traffic, and position your business in front of people actively searching for your products and services.',
    imageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Technical SEO',
      'On-Page SEO',
      'Keyword Research',
      'Content Optimization',
      'Local SEO',
      'SEO Audits',
      'Competitor Analysis',
      'Website Structure Optimization',
      'Performance Improvements',
    ],
    outcome:
      'More visibility, more organic traffic, and more opportunities to generate revenue.',
    align: 'left',
  },
  {
    id: 'digital-marketing',
    num: '06',
    title: 'Digital Marketing',
    headline: 'Turn Attention Into Revenue',
    copy: 'Marketing isn\'t about generating clicks. It\'s about attracting the right audience and turning interest into measurable business growth. We develop data-driven campaigns that connect strategy, creativity, and performance.',
    imageUrl: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Growth Marketing Strategy',
      'Paid Advertising',
      'Social Media Marketing',
      'Content Marketing',
      'Funnel Development',
      'Campaign Management',
      'Retargeting Campaigns',
      'Conversion Tracking',
      'Performance Reporting',
    ],
    outcome:
      'More qualified leads, stronger customer acquisition, and predictable growth.',
    align: 'right',
  },
  {
    id: 'automation-ai',
    num: '07',
    title: 'Marketing Automation & AI Systems',
    headline: 'Scale Smarter, Not Harder',
    copy: 'Businesses lose time and revenue because of repetitive processes and disconnected systems. We implement automation and AI-driven workflows that improve efficiency, nurture leads, and support scalable growth.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Lead Automation',
      'CRM Integration',
      'Email Automation',
      'Customer Journey Automation',
      'AI Workflows',
      'Internal Process Automation',
      'Sales Pipeline Automation',
      'Reporting Dashboards',
    ],
    outcome:
      'Less manual work, faster execution, and more time focused on growth.',
    align: 'left',
  },
  {
    id: 'conversion-optimization',
    num: '08',
    title: 'Conversion Optimization',
    headline: 'Turn More Visitors Into Customers',
    copy: 'Getting traffic is only half the equation. The real opportunity comes from converting more of your existing visitors into paying customers. We identify friction points and optimize your digital experience to improve performance at every stage of the customer journey.',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Conversion Audits',
      'Landing Page Optimization',
      'Funnel Optimization',
      'User Behavior Analysis',
      'Heatmap Reviews',
      'CTA Optimization',
      'A/B Testing Strategy',
      'Performance Analysis',
    ],
    outcome:
      'Higher conversion rates, improved ROI, and more revenue from existing traffic.',
    align: 'right',
  },
];

const growthFramework = [
  { step: '01', title: 'Discover', desc: 'Research your market, audience, competitors, and opportunities.' },
  { step: '02', title: 'Position', desc: 'Define a unique market position and messaging strategy.' },
  { step: '03', title: 'Build', desc: 'Create the brand, website, systems, and digital foundation.' },
  { step: '04', title: 'Launch', desc: 'Deploy campaigns and growth initiatives.' },
  { step: '05', title: 'Optimize', desc: 'Measure performance, refine strategy, and scale what works.' },
];

const whyUsPillars = [
  {
    title: 'Strategy Before Execution',
    desc: 'We don\'t jump into design, development, or marketing without understanding your business objectives first.',
  },
  {
    title: 'Built Around Growth',
    desc: 'Every decision is measured against one question: Will this help the business grow?',
  },
  {
    title: 'One Integrated Partner',
    desc: 'Branding, websites, technology, automation, and marketing working together under one growth-focused system.',
  },
  {
    title: 'Designed For Long-Term Momentum',
    desc: 'We\'re not interested in short-term wins. We build foundations that continue generating results long after launch.',
  },
];

export const ServicesPage: React.FC<ServicesPageProps> = ({
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
      {/* Subtle Background Mesh Grid */}
      <div
        className={`absolute inset-0 bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none ${
          isDarkMode
            ? 'bg-[linear-gradient(to_right,#27272A15_1px,transparent_1px),linear-gradient(to_bottom,#27272A15_1px,transparent_1px)]'
            : 'bg-[linear-gradient(to_right,#E4E4E750_1px,transparent_1px),linear-gradient(to_bottom,#E4E4E750_1px,transparent_1px)]'
        }`}
      />

      {/* Brand Orange Radial Spotlight (15% Max Glow) */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-radial from-[#FF7A1A]/15 via-[#FF7A1A]/4 to-transparent blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HERO SECTION - GROWTH STARTS WITH THE RIGHT MOMENTUM */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20 sm:mb-28 space-y-6"
        >
          <h1
            className={`font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.08] ${
              isDarkMode ? 'text-white' : 'text-[#111111]'
            }`}
          >
            <span className="block">Growth Starts With</span>
            <span className="bg-gradient-to-r from-[#FF7A1A] via-[#FF944D] to-[#EA580C] bg-clip-text text-transparent inline-block pb-2">
              The Right Momentum.
            </span>
          </h1>

          <div
            className={`text-lg sm:text-2xl font-medium leading-relaxed max-w-3xl mx-auto space-y-3 ${
              isDarkMode ? 'text-[#B8B8B8]' : 'text-[#52525B]'
            }`}
          >
            <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
              Most businesses don't have a product problem.
            </p>
            <p className={`font-semibold ${isDarkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
              They have a positioning problem, a visibility problem, a conversion problem, or a growth problem.
            </p>
            <p className={`text-base sm:text-lg pt-2 ${isDarkMode ? 'text-[#7D7D7D]' : 'text-zinc-600'}`}>
              At Roos StudioX, we combine strategy, branding, design, technology, and marketing to build digital ecosystems that attract the right audience, create trust, and generate measurable business growth.
            </p>
          </div>
        </motion.div>

        {/* 8 DETAILED SERVICE SECTIONS (REALISTIC STUDIO IMAGERY) */}
        <div className="space-y-24 sm:space-y-32">
          {detailedServices.map((service, idx) => {
            const isLeft = service.align === 'left';

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center text-left ${
                  isLeft ? '' : 'lg:flex-row-reverse'
                }`}
              >
                
                {/* REALISTIC 3D/STUDIO VISUAL CANVAS (5 COLS) */}
                <div
                  className={`lg:col-span-5 ${
                    isLeft ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <motion.div
                    animate={{ y: [-6, 6, -6], rotate: isLeft ? [-1, 1, -1] : [1, -1, 1] }}
                    transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                    className={`rounded-3xl border shadow-2xl relative overflow-hidden flex flex-col justify-between h-full min-h-[380px] transition-all group ${
                      isDarkMode
                        ? 'bg-[#0C0C0C] border-zinc-800 text-white shadow-black/80'
                        : 'bg-white border-zinc-200 text-zinc-900 shadow-xl'
                    }`}
                  >
                    {/* Realistic High-Resolution Studio Image Background */}
                    <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-100 contrast-105"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${
                          isDarkMode
                            ? 'from-[#050505]/90 via-[#050505]/30 to-transparent'
                            : 'from-white/90 via-white/30 to-transparent'
                        }`}
                      />
                    </div>

                    {/* Spacer for bottom banner positioning */}
                    <div className="relative z-10 p-4" />

                    {/* Momentum Created Result Banner */}
                    <div
                      className={`relative z-10 p-5 m-4 rounded-2xl border text-xs font-semibold text-[#FF7A1A] backdrop-blur-md ${
                        isDarkMode
                          ? 'bg-[#050505]/85 border-[#FF7A1A]/40 shadow-2xl'
                          : 'bg-white/85 border-[#FF7A1A]/40 shadow-lg'
                      }`}
                    >
                      <span className="font-bold uppercase font-mono block text-[10px] text-zinc-400 mb-0.5">
                        MOMENTUM CREATED:
                      </span>
                      "{service.outcome}"
                    </div>
                  </motion.div>
                </div>

                {/* CONTENT & DELIVERABLES BREAKDOWN (7 COLS) */}
                <div
                  className={`lg:col-span-7 space-y-6 ${
                    isLeft ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div>
                    <div className="text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest mb-1">
                      SERVICE {service.num}
                    </div>
                    <h2 className={`font-display text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-2 ${isDarkMode ? 'text-white' : 'text-[#111111]'}`}>
                      {service.title}
                    </h2>
                    <p className="text-base sm:text-xl font-bold text-[#FF7A1A] font-display">
                      {service.headline}
                    </p>
                  </div>

                  <p className={`text-base sm:text-lg leading-relaxed ${isDarkMode ? 'text-[#B8B8B8]' : 'text-zinc-700'}`}>
                    {service.copy}
                  </p>

                  {/* Perfect For Banner (If Applicable) */}
                  {service.perfectFor && (
                    <div className={`p-4 rounded-2xl border text-xs ${
                      isDarkMode
                        ? 'bg-[#0C0C0C] border-zinc-800 text-zinc-300'
                        : 'bg-zinc-100 border-zinc-200 text-zinc-800'
                    }`}>
                      <strong className="text-[#FF7A1A] uppercase font-mono block mb-0.5">PERFECT FOR:</strong>
                      {service.perfectFor}
                    </div>
                  )}

                  {/* Deliverables List */}
                  <div className="space-y-3 pt-2">
                    <div className={`text-xs font-mono font-bold uppercase tracking-wider ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      WHAT WE DELIVER:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold">
                          <CheckCircle2 className="w-4 h-4 text-[#FF7A1A] shrink-0" />
                          <span className={isDarkMode ? 'text-zinc-200' : 'text-zinc-800'}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Every Website Includes (For Web Dev) */}
                  {service.includes && (
                    <div className={`pt-3 border-t space-y-2 ${isDarkMode ? 'border-zinc-800' : 'border-zinc-200'}`}>
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF7A1A]">
                        EVERY WEBSITE INCLUDES:
                      </div>
                      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium ${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                        {service.includes.map((inc, iIdx) => (
                          <div key={iIdx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1A]" />
                            <span>{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Button */}
                  <div className="pt-2">
                    <AlphaRoosButton
                      text="Inquire This Service"
                      onClick={onOpenInquiry}
                      isDarkMode={isDarkMode}
                      compact
                    />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* OFFICIAL STUDIO CAPABILITIES DECK SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`mt-32 p-8 sm:p-14 rounded-3xl border relative overflow-hidden text-left ${
            isDarkMode
              ? 'bg-[#0C0C0C] border-zinc-800 text-white'
              : 'bg-white border-zinc-200 text-zinc-900 shadow-2xl'
          }`}
        >
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF7A1A] via-[#FF944D] to-[#EA580C]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Deck Description & Download Action (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7A1A]/10 border border-[#FF7A1A]/30 text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest">
                <FileText className="w-3.5 h-3.5" />
                <span>OFFICIAL STUDIO DECK</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Download Our Official Studio Service & Capabilities Deck
              </h2>

              <p className={`text-base sm:text-lg leading-relaxed ${isDarkMode ? 'text-[#B8B8B8]' : 'text-zinc-700'}`}>
                Get our complete 2026 presentation deck detailing our core engineering methodologies, case studies, technology stack, service pricing structures, and project timelines in a single PDF.
              </p>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono font-bold">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF7A1A]" />
                  <span>Full 8-Service Execution Matrix</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF7A1A]" />
                  <span>99+ Speed Guarantee Audits</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF7A1A]" />
                  <span>24h Rapid Onboarding Protocol</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF7A1A]" />
                  <span>Client Revenue Growth Studies</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center gap-4 flex-wrap">
                <AlphaRoosButton
                  text="Download PDF Deck"
                  onClick={() => {
                    alert('Roos StudioX 2026 Service Capabilities Deck requested! Our team will send the confidential PDF deck directly to your inbox.');
                  }}
                  isDarkMode={isDarkMode}
                />
                <button
                  onClick={onOpenInquiry}
                  className={`px-6 py-3 rounded-full border text-xs font-mono font-bold transition-all cursor-pointer ${
                    isDarkMode
                      ? 'bg-[#050505] border-zinc-800 text-zinc-300 hover:border-[#FF7A1A] hover:text-white'
                      : 'bg-zinc-100 border-zinc-300 text-zinc-800 hover:border-[#FF7A1A] hover:text-zinc-900'
                  }`}
                >
                  Book Deck Walkthrough
                </button>
              </div>
            </div>

            {/* Right: Interactive 3D Deck Mockup Card (5 Cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl border border-zinc-800 bg-[#050505] p-6 shadow-2xl relative space-y-4 transform hover:scale-[1.02] transition-transform">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF7A1A]" />
                    <span className="text-xs font-mono font-bold text-white uppercase">ROOS_DECK_2026.PDF</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500">24 PAGES</span>
                </div>

                <div className="py-6 text-center space-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-[#FF7A1A]/10 border border-[#FF7A1A]/30 text-[#FF7A1A] mx-auto flex items-center justify-center">
                    <FileText className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">Roos StudioX Capabilities Briefing</h3>
                  <p className="text-xs text-zinc-400">Official 2026 Agency Presentation & Methodology Overview</p>
                </div>

                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                  <span>FORMAT: PDF / PRESENTATION</span>
                  <span className="text-[#FF7A1A] font-bold">READY TO READ</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* WHY BUSINESSES CHOOSE ROOS STUDIOX */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`mt-36 py-16 px-6 sm:px-12 rounded-3xl border text-left relative overflow-hidden ${
            isDarkMode
              ? 'bg-[#0C0C0C] border-zinc-800 text-white'
              : 'bg-white border-zinc-200 text-zinc-900 shadow-xl'
          }`}
        >
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF7A1A] via-[#FF944D] to-[#EA580C]" />

          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest">
              THE ROOS ADVANTAGE
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight">
              Why Businesses Choose Roos StudioX
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {whyUsPillars.map((pillar, pIdx) => (
              <div
                key={pIdx}
                className={`p-6 rounded-2xl border space-y-2 ${
                  isDarkMode
                    ? 'bg-[#050505] border-zinc-800'
                    : 'bg-zinc-50 border-zinc-200 shadow-sm'
                }`}
              >
                <div className="text-[#FF7A1A] text-xs font-mono font-bold uppercase">
                  0{pIdx + 1}
                </div>
                <h3 className={`font-display text-xl font-bold ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
                  {pillar.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-[#B8B8B8]' : 'text-zinc-600'}`}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* THE ROOS GROWTH FRAMEWORK */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-28 text-left space-y-12"
        >
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest">
              STEP-BY-STEP LEAP
            </span>
            <h2 className={`font-display text-4xl sm:text-6xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
              The Roos Growth Framework
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {growthFramework.map((fStep, fIdx) => (
              <div
                key={fIdx}
                className={`p-5 rounded-2xl border flex flex-col justify-between space-y-3 ${
                  isDarkMode
                    ? 'bg-[#0C0C0C] border-zinc-800'
                    : 'bg-white border-zinc-200 shadow-sm'
                }`}
              >
                <span className="text-2xl font-mono font-black text-[#FF7A1A]">
                  {fStep.step}
                </span>
                <div>
                  <div className="font-display text-lg font-bold text-[#FF7A1A] mb-1">
                    {fStep.title}
                  </div>
                  <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-[#7D7D7D]' : 'text-zinc-600'}`}>
                    {fStep.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FINAL FULL SCREEN CTA - READY TO BUILD MOMENTUM? */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-36 py-20 text-center space-y-8 max-w-4xl mx-auto relative"
        >
          <div className="space-y-4">
            <h2 className={`font-display text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-none ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
              Ready To Build Momentum?
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
