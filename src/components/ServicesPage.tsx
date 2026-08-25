import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Target,
  TrendingUp,
  Bot,
  Zap,
  CheckCircle2,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';
import { AlphaRoosButton } from './AlphaRoosButton';

interface ServicesPageProps {
  onOpenInquiry: () => void;
  isDarkMode: boolean;
  onNavigateHome: () => void;
}

interface ServicePillar {
  id: string;
  num: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  accentColor: string;
  capabilities: { title: string; desc: string }[];
  deliverables: string[];
}

const servicePillars: ServicePillar[] = [
  {
    id: 'web-engineering',
    num: '01',
    category: 'ENGINEERING & DEVELOPMENT',
    title: 'Custom Web Development & Engineering',
    tagline: 'Custom Modern UI/UX Built For Speed & Conversion',
    description:
      'We engineer custom web applications and marketing sites with zero template bloat, 99+ Google speed scores, and fluid micro-interactions that make your brand feel exceptional.',
    icon: Code2,
    accentColor: '#F97316',
    capabilities: [
      {
        title: 'High-Speed Web Applications',
        desc: 'Built with React, Vite, and Tailwind for instant page loads under 0.6 seconds.',
      },
      {
        title: 'Glassmorphic & Modern UI/UX',
        desc: 'Apple-level minimalist design systems tailored specifically to your brand identity.',
      },
      {
        title: '99+ Google Lighthouse Speed Score',
        desc: 'Zero bloated plugins. Optimized assets, clean bundle size, and edge distribution.',
      },
      {
        title: 'Headless CMS Integration',
        desc: 'Seamless content management setups allowing your team to update text and media effortlessly.',
      },
    ],
    deliverables: [
      'Custom React/Next.js Codebase',
      '99+ Performance Guarantee',
      'Mobile & Tablet Responsiveness',
      'Full CMS Handoff & Training',
    ],
  },
  {
    id: 'brand-positioning',
    num: '02',
    category: 'STRATEGY & COPYWRITING',
    title: 'Brand Positioning & Conversion Strategy',
    tagline: 'Messaging That Makes Your Value Instantly Clear',
    description:
      'We audit your buyer friction and craft sharp conversion copy that positions your product as the unbeatable market choice in under 3 seconds.',
    icon: Target,
    accentColor: '#FB923C',
    capabilities: [
      {
        title: 'Audience Friction Audit',
        desc: 'Locate exact messaging leaks and friction points where potential buyers drop off.',
      },
      {
        title: 'Conversion Copywriting',
        desc: 'High-impact headlines, body copy, and value propositions that drive immediate trust.',
      },
      {
        title: 'Brand Voice Framework',
        desc: 'Establish a clear, memorable tone of voice that differentiates you from competitors.',
      },
      {
        title: 'High-Converting Funnels',
        desc: 'Strategic user journey mapping that guides visitors directly to booking or buying.',
      },
    ],
    deliverables: [
      'Conversion Copy Deck',
      'Strategic Positioning Matrix',
      'User Journey Blueprint',
      'Competitor Audit Report',
    ],
  },
  {
    id: 'growth-marketing',
    num: '03',
    category: 'GROWTH & TELEMETRY',
    title: 'Digital Growth Marketing & Lead Analytics',
    tagline: 'Continuous Conversion Telemetry & Revenue Tuning',
    description:
      'We turn your digital platform into an active lead engine with real-time conversion telemetry, analytics tracking, and continuous growth optimization.',
    icon: TrendingUp,
    accentColor: '#38BDF8',
    capabilities: [
      {
        title: 'Real-Time Conversion Telemetry',
        desc: 'Track visitor behavior, click maps, and lead funnel completion rates live.',
      },
      {
        title: 'Conversion Rate Optimization (CRO)',
        desc: 'Continuous testing of CTAs, forms, and layouts to maximize lead volume.',
      },
      {
        title: 'Automated Lead Routing',
        desc: 'Directly connect form submissions to your sales CRM with instant notification alerts.',
      },
      {
        title: 'Multi-Channel Acquisition Strategy',
        desc: 'Align your digital presence with paid search, social, and organic search campaigns.',
      },
    ],
    deliverables: [
      'Live Analytics Dashboard',
      'Automated Lead Notifications',
      'Monthly CRO Optimizations',
      'Growth Trajectory Reports',
    ],
  },
  {
    id: 'automation-ai',
    num: '04',
    category: 'AUTOMATION & WORKFLOWS',
    title: 'CMS Automation & AI Workflows',
    tagline: 'Automated Systems That Work 24/7 For Your Business',
    description:
      'We build custom automation pipelines connecting your website directly to your CRM, email platforms, and AI micro-tools to eliminate manual tasks.',
    icon: Bot,
    accentColor: '#10B981',
    capabilities: [
      {
        title: 'Custom Webhooks & API Pipelines',
        desc: 'Connect your site seamlessly with HubSpot, Salesforce, Zapier, and custom APIs.',
      },
      {
        title: 'AI-Powered Auto-Responders',
        desc: 'Instant lead scoring and automated custom follow-ups for high-intent leads.',
      },
      {
        title: 'Interactive Calculators & Estimators',
        desc: 'Build custom interactive tools on your site that capture lead preferences automatically.',
      },
      {
        title: 'Headless Publishing Workflows',
        desc: 'Automate content publishing across multiple platforms with zero manual copy-pasting.',
      },
    ],
    deliverables: [
      'Custom Webhook Integrations',
      'AI Lead Qualification Setup',
      'Interactive Web Tools',
      'Workflow Documentation',
    ],
  },
];

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenInquiry,
  isDarkMode,
  onNavigateHome,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredPillars =
    selectedCategory === 'all'
      ? servicePillars
      : servicePillars.filter((p) => p.id === selectedCategory);

  return (
    <div
      className={`min-h-screen pt-28 pb-20 transition-colors duration-500 relative overflow-hidden ${
        isDarkMode ? 'bg-[#0A0A0A] text-white' : 'bg-[#FAF9F6] text-[#111111]'
      }`}
    >
      {/* Background Architectural Mesh */}
      <div
        className={`absolute inset-0 bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none ${
          isDarkMode
            ? 'bg-[linear-gradient(to_right,#27272A20_1px,transparent_1px),linear-gradient(to_bottom,#27272A20_1px,transparent_1px)]'
            : 'bg-[linear-gradient(to_right,#E4E4E760_1px,transparent_1px),linear-gradient(to_bottom,#E4E4E760_1px,transparent_1px)]'
        }`}
      />

      {/* Radiant Spotlight */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-radial from-[#F97316]/15 via-[#FB923C]/5 to-transparent blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* BACK TO HOME BUTTON */}
        <div className="mb-8 text-left">
          <button
            onClick={onNavigateHome}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-mono font-bold transition-all cursor-pointer ${
              isDarkMode
                ? 'bg-[#18181B] border-[#27272A] text-zinc-300 hover:border-[#F97316] hover:text-white'
                : 'bg-white border-[#E4E4E7] text-zinc-700 hover:border-[#F97316] hover:text-zinc-900 shadow-sm'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO HOME</span>
          </button>
        </div>

        {/* PAGE HERO HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F97316]/10 border border-[#F97316]/30 text-xs font-mono font-bold text-[#F97316] uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" />
            <span>Comprehensive Studio Capabilities</span>
          </div>

          <h1
            className={`font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[1.08] ${
              isDarkMode ? 'text-silver-gradient' : 'text-[#111111]'
            }`}
          >
            <span className="block">Our Core Services &</span>
            <span className="bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#EA580C] bg-clip-text text-transparent inline-block pb-2 pt-1">
              Detailed Capabilities
            </span>
          </h1>

          <p
            className={`text-base sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto ${
              isDarkMode ? 'text-[#D4D4D8]' : 'text-[#52525B]'
            }`}
          >
            We combine high-speed web development, strategic brand positioning, digital growth marketing, and AI automation into a single high-velocity system.
          </p>

          {/* Micro Telemetry Pills */}
          <div className="pt-2 flex items-center justify-center gap-3 flex-wrap text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-[#F97316]/10 border border-[#F97316]/30 text-[#F97316] font-bold">
              4 Core Disciplines
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
              99+ Speed Guarantee
            </span>
            <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 font-bold">
              Zero Template Fluff
            </span>
          </div>
        </motion.div>

        {/* SERVICE CATEGORY FILTER PILLS */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-14">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full border text-xs font-mono font-bold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white border-[#FDBA74] shadow-lg shadow-[#F97316]/30'
                : isDarkMode
                ? 'bg-[#141417] text-zinc-400 border-zinc-800 hover:text-white'
                : 'bg-white text-zinc-600 border-zinc-200 hover:text-zinc-900 shadow-sm'
            }`}
          >
            ALL SERVICES (4)
          </button>

          {servicePillars.map((pillar) => (
            <button
              key={pillar.id}
              onClick={() => setSelectedCategory(pillar.id)}
              className={`px-4 py-2 rounded-full border text-xs font-mono font-bold transition-all cursor-pointer ${
                selectedCategory === pillar.id
                  ? 'bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white border-[#FDBA74] shadow-lg shadow-[#F97316]/30'
                  : isDarkMode
                  ? 'bg-[#141417] text-zinc-400 border-zinc-800 hover:text-white'
                  : 'bg-white text-zinc-600 border-zinc-200 hover:text-zinc-900 shadow-sm'
              }`}
            >
              {pillar.num} • {pillar.title.split('&')[0]}
            </button>
          ))}
        </div>

        {/* DETAILED SERVICE PILLARS STACK */}
        <div className="space-y-16">
          {filteredPillars.map((pillar, idx) => {
            const PillarIcon = pillar.icon;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`rounded-3xl border p-6 sm:p-10 shadow-2xl relative overflow-hidden text-left transition-colors duration-500 ${
                  isDarkMode
                    ? 'bg-[#141417]/95 border-zinc-800 text-white shadow-black/80'
                    : 'bg-white border-zinc-200 text-zinc-900 shadow-xl'
                }`}
              >
                {/* Top Accent Line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ backgroundColor: pillar.accentColor }}
                />

                {/* Header & Icon */}
                <div className="flex items-start justify-between gap-4 pb-6 border-b border-zinc-800/80 flex-wrap">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl text-white flex items-center justify-center shadow-lg shrink-0"
                      style={{
                        backgroundColor: pillar.accentColor,
                        boxShadow: `0 0 20px ${pillar.accentColor}50`,
                      }}
                    >
                      <PillarIcon className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl font-mono font-black text-[#F97316]">
                          {pillar.num}
                        </span>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
                          {pillar.category}
                        </span>
                      </div>
                      <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight">
                        {pillar.title}
                      </h2>
                    </div>
                  </div>

                  <span
                    className="text-xs font-mono font-bold px-3.5 py-1.5 rounded-full border uppercase tracking-wider"
                    style={{
                      backgroundColor: `${pillar.accentColor}15`,
                      color: pillar.accentColor,
                      borderColor: `${pillar.accentColor}40`,
                    }}
                  >
                    {pillar.tagline}
                  </span>
                </div>

                {/* Description Paragraph */}
                <p
                  className={`text-base sm:text-lg leading-relaxed py-6 ${
                    isDarkMode ? 'text-zinc-300' : 'text-zinc-600'
                  }`}
                >
                  {pillar.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
                  
                  {/* LEFT: 4 SPECIFIC CAPABILITIES (8 COLS) */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
                      <span>Deep Engineering & Strategy Breakdown:</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {pillar.capabilities.map((cap, cIdx) => (
                        <div
                          key={cIdx}
                          className={`p-4 rounded-2xl border transition-all ${
                            isDarkMode
                              ? 'bg-[#0E0E11] border-zinc-800'
                              : 'bg-zinc-50 border-zinc-200 shadow-sm'
                          }`}
                        >
                          <div className="text-sm font-bold font-display text-white mb-1 flex items-center gap-2">
                            <span
                              className="w-2 h-2 rounded-full shrink-0"
                              style={{ backgroundColor: pillar.accentColor }}
                            />
                            <span>{cap.title}</span>
                          </div>
                          <p className="text-xs text-zinc-400 leading-relaxed">
                            {cap.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT: EXACT DELIVERABLES (4 COLS) */}
                  <div className="lg:col-span-4">
                    <div
                      className={`p-5 rounded-2xl border text-left space-y-3.5 h-full flex flex-col justify-between ${
                        isDarkMode
                          ? 'bg-[#0E0E11] border-zinc-800'
                          : 'bg-zinc-50 border-zinc-200 shadow-sm'
                      }`}
                    >
                      <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 pb-2 border-b border-zinc-800">
                        Guaranteed Deliverables:
                      </div>

                      <div className="space-y-2.5 flex-1">
                        {pillar.deliverables.map((del, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2.5 text-xs font-semibold">
                            <CheckCircle2
                              className="w-4 h-4 shrink-0"
                              style={{ color: pillar.accentColor }}
                            />
                            <span className={isDarkMode ? 'text-zinc-200' : 'text-zinc-800'}>
                              {del}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-zinc-800">
                        <AlphaRoosButton
                          text="Inquire This Service"
                          onClick={onOpenInquiry}
                          isDarkMode={isDarkMode}
                          compact
                        />
                      </div>
                    </div>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM CTA INQUIRY BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center space-y-5 max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to build your high-velocity digital presence?
          </h2>
          <p className="text-base text-zinc-400">
            Tell us about your project requirements and we'll craft a customized execution roadmap within 24 hours.
          </p>
          <div className="pt-2 flex items-center justify-center gap-4 flex-wrap">
            <AlphaRoosButton
              text="Book A Demo"
              onClick={onOpenInquiry}
              isDarkMode={isDarkMode}
            />
            <button
              onClick={onNavigateHome}
              className={`px-6 py-3 rounded-full border text-xs font-mono font-bold transition-all cursor-pointer ${
                isDarkMode
                  ? 'bg-[#18181B] border-zinc-800 text-zinc-300 hover:border-[#F97316] hover:text-white'
                  : 'bg-white border-zinc-200 text-zinc-700 hover:border-[#F97316] hover:text-zinc-900'
              }`}
            >
              RETURN TO HOMEPAGE
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
