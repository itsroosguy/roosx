import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  FileText,
  Compass,
  Palette,
  Globe,
  Layout,
  Search,
  Megaphone,
  Bot,
  TrendingUp,
  BarChart3,
  Smartphone,
  Code,
  Zap,
  Award,
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
  category: 'branding' | 'engineering' | 'marketing';
  title: string;
  headline: string;
  copy: string;
  subTags: string[];
  deliverables: string[];
  includes?: string[];
  outcome: string;
  perfectFor?: string;
  align: 'left' | 'right';
  renderVisual: (isDark: boolean) => React.ReactNode;
}

const detailedServices: DetailedService[] = [
  {
    id: 'brand-strategy',
    num: '01',
    category: 'branding',
    title: 'Brand Strategy & Positioning',
    headline: 'Build a Brand People Remember',
    copy: 'A great logo isn\'t a brand. A strong brand is a clear promise, a unique market position, and a memorable identity that customers instantly recognize and trust. We help businesses uncover what makes them different and transform that advantage into a powerful brand strategy that stands out in crowded markets.',
    subTags: ['Market Discovery', 'Brand Positioning', 'Value Prop', 'Persona Mapping', 'Brand Architecture'],
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
    renderVisual: (isDark) => (
      <div className={`p-6 sm:p-8 rounded-2xl h-full flex flex-col justify-between space-y-6 ${isDark ? 'bg-[#050505] text-white' : 'bg-zinc-50 text-zinc-900'}`}>
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#FF7A1A]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">POSITIONING MATRIX</span>
          </div>
          <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#FF7A1A]/10 text-[#FF7A1A] border border-[#FF7A1A]/30">UNBEATABLE CLARITY</span>
        </div>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-zinc-400">Generic Market Noise</span>
              <span className="text-zinc-500 font-bold">12% Impact</span>
            </div>
            <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
              <div className="h-full bg-zinc-600 w-[12%]" />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-white font-bold">Roos Strategic Positioning</span>
              <span className="text-[#FF7A1A] font-bold">100% Market Differentiation</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-zinc-800 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#FF7A1A] to-[#EA580C] w-full" />
            </div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs font-mono flex items-center justify-between">
          <span className="text-zinc-400">Target Audience Trust Index:</span>
          <span className="text-[#FF7A1A] font-bold">98.4 / 100</span>
        </div>
      </div>
    ),
  },
  {
    id: 'visual-identity',
    num: '02',
    category: 'branding',
    title: 'Logo & Visual Identity Design',
    headline: 'Create A Brand That Looks As Good As It Performs',
    copy: 'Your visual identity shapes first impressions long before customers read a single word. We design memorable brand systems that communicate professionalism, credibility, and confidence across every customer touchpoint.',
    subTags: ['Logo System', 'Color Palette', 'Typography Specs', 'Iconography', 'Brand Guidelines'],
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
    renderVisual: (isDark) => (
      <div className={`p-6 sm:p-8 rounded-2xl h-full flex flex-col justify-between space-y-6 ${isDark ? 'bg-[#050505] text-white' : 'bg-zinc-50 text-zinc-900'}`}>
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-2">
            <Palette className="w-5 h-5 text-[#FF7A1A]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">DESIGN SYSTEM ASSETS</span>
          </div>
          <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#FF7A1A]/10 text-[#FF7A1A] border border-[#FF7A1A]/30">BRAND ASSET KIT</span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 rounded-xl bg-[#050505] border border-zinc-800 text-center space-y-1.5">
            <div className="w-6 h-6 rounded-full bg-[#050505] border border-zinc-700 mx-auto" />
            <div className="text-[10px] font-mono text-zinc-400">#050505</div>
            <div className="text-[9px] font-mono text-zinc-500 uppercase">DARK CORE</div>
          </div>
          <div className="p-3 rounded-xl bg-[#0C0C0C] border border-zinc-800 text-center space-y-1.5">
            <div className="w-6 h-6 rounded-full bg-[#0C0C0C] border border-zinc-700 mx-auto" />
            <div className="text-[10px] font-mono text-zinc-400">#0C0C0C</div>
            <div className="text-[9px] font-mono text-zinc-500 uppercase">SURFACE</div>
          </div>
          <div className="p-3 rounded-xl bg-[#FF7A1A]/20 border border-[#FF7A1A] text-center space-y-1.5">
            <div className="w-6 h-6 rounded-full bg-[#FF7A1A] shadow-md shadow-[#FF7A1A]/50 mx-auto" />
            <div className="text-[10px] font-mono text-[#FF7A1A] font-bold">#FF7A1A</div>
            <div className="text-[9px] font-mono text-[#FF7A1A] uppercase font-bold">ACCENT</div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs font-mono flex items-center justify-between">
          <span className="text-zinc-400">TYPOGRAPHY:</span>
          <span className="text-white font-bold">GOOGLE SANS / SF PRO</span>
        </div>
      </div>
    ),
  },
  {
    id: 'website-development',
    num: '03',
    category: 'engineering',
    title: 'Website Design & Development',
    headline: 'Your Website Should Be Your Best Salesperson',
    copy: 'A website should do more than look beautiful. It should educate visitors, build trust, answer objections, and guide prospects toward taking action. We design and develop high-performance websites that combine exceptional user experience with conversion-focused strategy.',
    subTags: ['Landing Pages', 'Corporate Sites', 'Brochure Site', 'E-Commerce', 'Custom React'],
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
    renderVisual: (isDark) => (
      <div className={`p-6 sm:p-8 rounded-2xl h-full flex flex-col justify-between space-y-6 ${isDark ? 'bg-[#050505] text-white' : 'bg-zinc-50 text-zinc-900'}`}>
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-[#FF7A1A]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">HIGH-SPEED REACT ENGINE</span>
          </div>
          <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">99+ SPEED GUARANTEE</span>
        </div>

        <div className="p-4 rounded-xl bg-[#09090B] border border-zinc-800 font-mono text-xs space-y-2">
          <div className="flex items-center gap-2 text-zinc-500 border-b border-zinc-800 pb-2 text-[11px]">
            <Code className="w-3.5 h-3.5 text-[#FF7A1A]" />
            <span>App.tsx • High-Performance Codebase</span>
          </div>
          <div className="text-emerald-400 font-bold">✓ Lighthouse Performance: 100/100</div>
          <div className="text-zinc-400">✓ LCP (Largest Contentful Paint): 0.48s</div>
          <div className="text-zinc-400">✓ Zero Bloat Plugins • Edge CDN Active</div>
        </div>

        <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs font-mono flex items-center justify-between">
          <span className="text-zinc-400 font-bold">PAGE LOAD SPEED:</span>
          <span className="text-[#FF7A1A] font-bold">0.48 SECONDS</span>
        </div>
      </div>
    ),
  },
  {
    id: 'ui-ux-design',
    num: '04',
    category: 'engineering',
    title: 'UI/UX Design',
    headline: 'Design Experiences People Actually Enjoy Using',
    copy: 'Great user experiences feel effortless. We create intuitive interfaces that help users find what they need quickly while increasing engagement, satisfaction, and conversions.',
    subTags: ['User Flows', 'Wireframes', 'SaaS Dashboards', 'Mobile Apps', 'Design Systems'],
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
    renderVisual: (isDark) => (
      <div className={`p-6 sm:p-8 rounded-2xl h-full flex flex-col justify-between space-y-6 ${isDark ? 'bg-[#050505] text-white' : 'bg-zinc-50 text-zinc-900'}`}>
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-2">
            <Layout className="w-5 h-5 text-[#FF7A1A]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">APP INTERFACE & DASHBOARD</span>
          </div>
          <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#FF7A1A]/10 text-[#FF7A1A] border border-[#FF7A1A]/30">USER CENTRIC UX</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2">
            <div className="text-[11px] font-mono font-bold text-white flex items-center gap-1.5">
              <Smartphone className="w-3.5 h-3.5 text-[#FF7A1A]" />
              <span>Mobile App UX</span>
            </div>
            <p className="text-[10px] text-zinc-400 leading-relaxed">Frictionless 1-tap navigation flows with instant visual feedback.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2">
            <div className="text-[11px] font-mono font-bold text-white flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5 text-[#FF7A1A]" />
              <span>SaaS Dashboards</span>
            </div>
            <p className="text-[10px] text-zinc-400 leading-relaxed">Clean data visual hierarchies for effortless user decision making.</p>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs font-mono flex items-center justify-between">
          <span className="text-zinc-400">TASK COMPLETION RATE:</span>
          <span className="text-[#FF7A1A] font-bold">99.2% EFFORTLESS</span>
        </div>
      </div>
    ),
  },
  {
    id: 'seo-optimization',
    num: '05',
    category: 'marketing',
    title: 'Search Engine Optimization (SEO)',
    headline: 'Get Found By The Right Customers',
    copy: 'If customers can\'t find you, they can\'t buy from you. Our SEO strategies improve visibility, increase qualified traffic, and position your business in front of people actively searching for your products and services.',
    subTags: ['Technical SEO', 'On-Page SEO', 'Keyword Strategy', 'Local SEO', 'SEO Audits'],
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
    renderVisual: (isDark) => (
      <div className={`p-6 sm:p-8 rounded-2xl h-full flex flex-col justify-between space-y-6 ${isDark ? 'bg-[#050505] text-white' : 'bg-zinc-50 text-zinc-900'}`}>
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-[#FF7A1A]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">ORGANIC SEARCH TELEMETRY</span>
          </div>
          <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/30">#1 GOOGLE RANKINGS</span>
        </div>

        <div className="space-y-3">
          <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between text-xs font-mono">
            <span className="text-zinc-300 font-bold">High-Intent Keywords Ranked #1:</span>
            <span className="text-[#FF7A1A] font-bold">48 Keywords</span>
          </div>
          <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between text-xs font-mono">
            <span className="text-zinc-300 font-bold">Monthly Organic Traffic Growth:</span>
            <span className="text-emerald-400 font-bold">+420% Growth</span>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs font-mono flex items-center justify-between">
          <span className="text-zinc-400">QUALIFIED INBOUND LEADS:</span>
          <span className="text-[#FF7A1A] font-bold">PREDICTABLE DAILY VOLUME</span>
        </div>
      </div>
    ),
  },
  {
    id: 'digital-marketing',
    num: '06',
    category: 'marketing',
    title: 'Digital Marketing',
    headline: 'Turn Attention Into Revenue',
    copy: 'Marketing isn\'t about generating clicks. It\'s about attracting the right audience and turning interest into measurable business growth. We develop data-driven campaigns that connect strategy, creativity, and performance.',
    subTags: ['Growth Strategy', 'Paid Ads', 'Social Marketing', 'Funnels', 'ROAS Tuning'],
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
    renderVisual: (isDark) => (
      <div className={`p-6 sm:p-8 rounded-2xl h-full flex flex-col justify-between space-y-6 ${isDark ? 'bg-[#050505] text-white' : 'bg-zinc-50 text-zinc-900'}`}>
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-2">
            <Megaphone className="w-5 h-5 text-[#FF7A1A]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">ACQUISITION FUNNEL</span>
          </div>
          <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#FF7A1A]/10 text-[#FF7A1A] border border-[#FF7A1A]/30">4.8X ROAS MULTIPLIER</span>
        </div>

        <div className="space-y-2 text-xs font-mono">
          <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800 flex justify-between">
            <span className="text-zinc-400">1. Impressions & Ad Reach</span>
            <span className="text-zinc-300 font-bold">120,000</span>
          </div>
          <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800 flex justify-between">
            <span className="text-zinc-400">2. Qualified Click Throughs</span>
            <span className="text-zinc-300 font-bold">8,400</span>
          </div>
          <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-[#FF7A1A]/40 flex justify-between">
            <span className="text-white font-bold">3. Closed Customers & Revenue</span>
            <span className="text-[#FF7A1A] font-bold">$142,500</span>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs font-mono flex items-center justify-between">
          <span className="text-zinc-400">RETURN ON AD SPEND:</span>
          <span className="text-[#FF7A1A] font-bold">4.8X RETURN</span>
        </div>
      </div>
    ),
  },
  {
    id: 'automation-ai',
    num: '07',
    category: 'marketing',
    title: 'Marketing Automation & AI Systems',
    headline: 'Scale Smarter, Not Harder',
    copy: 'Businesses lose time and revenue because of repetitive processes and disconnected systems. We implement automation and AI-driven workflows that improve efficiency, nurture leads, and support scalable growth.',
    subTags: ['Lead Automation', 'HubSpot / CRM Sync', 'AI Workflows', 'Email Sequences', 'Webhooks'],
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
    renderVisual: (isDark) => (
      <div className={`p-6 sm:p-8 rounded-2xl h-full flex flex-col justify-between space-y-6 ${isDark ? 'bg-[#050505] text-white' : 'bg-zinc-50 text-zinc-900'}`}>
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-[#FF7A1A]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">WORKFLOW AUTOMATION</span>
          </div>
          <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">24/7 AI AUTOPILOT</span>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs font-mono space-y-2">
          <div className="text-emerald-400 font-bold">✓ Form Submission Received</div>
          <div className="text-zinc-300">→ AI Lead Scoring: Qualified High Intent</div>
          <div className="text-zinc-300">→ HubSpot CRM Webhook Sync: Instant</div>
          <div className="text-zinc-300">→ Auto-Email Sent: Customized Pitch</div>
        </div>

        <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs font-mono flex items-center justify-between">
          <span className="text-zinc-400">MANUAL WORK ELIMINATED:</span>
          <span className="text-[#FF7A1A] font-bold">100% AUTOMATED</span>
        </div>
      </div>
    ),
  },
  {
    id: 'conversion-optimization',
    num: '08',
    category: 'marketing',
    title: 'Conversion Optimization',
    headline: 'Turn More Visitors Into Customers',
    copy: 'Getting traffic is only half the equation. The real opportunity comes from converting more of your existing visitors into paying customers. We identify friction points and optimize your digital experience to improve performance at every stage of the customer journey.',
    subTags: ['A/B Testing', 'Landing Page Tuning', 'Heatmaps', 'Funnel Audits', 'CTA Strategy'],
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
    renderVisual: (isDark) => (
      <div className={`p-6 sm:p-8 rounded-2xl h-full flex flex-col justify-between space-y-6 ${isDark ? 'bg-[#050505] text-white' : 'bg-zinc-50 text-zinc-900'}`}>
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#FF7A1A]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">A/B TEST SPLIT TELEMETRY</span>
          </div>
          <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#FF7A1A]/10 text-[#FF7A1A] border border-[#FF7A1A]/30">+340% CONVERSION LEAP</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-center space-y-1">
            <div className="text-[10px] font-mono text-zinc-500 uppercase">VARIANT A (OLD)</div>
            <div className="text-lg font-mono font-bold text-zinc-400">1.8% Rate</div>
          </div>
          <div className="p-3 rounded-xl bg-zinc-900/80 border border-[#FF7A1A]/50 text-center space-y-1">
            <div className="text-[10px] font-mono text-[#FF7A1A] font-bold uppercase">VARIANT B (ROOS OPTIMIZED)</div>
            <div className="text-lg font-mono font-bold text-[#FF7A1A]">7.9% Rate</div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs font-mono flex items-center justify-between">
          <span className="text-zinc-400">REVENUE FROM EXISTING TRAFFIC:</span>
          <span className="text-[#FF7A1A] font-bold">+3.4X MULTIPLIER</span>
        </div>
      </div>
    ),
  },
];

const agencyStats = [
  { metric: '99+', label: 'Google Speed Score', sub: 'Lighthouse Performance Guaranteed' },
  { metric: '0.48s', label: 'Page Load Speed', sub: 'Instant LCP Render Baseline' },
  { metric: '4.8X', label: 'Average ROAS Return', sub: 'Data-Driven Acquisition Funnels' },
  { metric: '100%', label: 'Bespoke Engineering', sub: 'Zero Slow Template Bloat' },
];

const ddProcessSteps = [
  {
    step: '01',
    title: 'Research & Strategic Audit',
    desc: 'Analyzing competitors, audience demographics, and design trends to formulate an unbeatable positioning strategy.',
  },
  {
    step: '02',
    title: 'Discovery & Concepting',
    desc: 'Devising bespoke UI/UX visual directions and brand concepts for collaborative review and client alignment.',
  },
  {
    step: '03',
    title: 'Meticulous UI/UX & Prototyping',
    desc: 'Applying selected design systems across all responsive device breakpoints before code engineering begins.',
  },
  {
    step: '04',
    title: 'Development Handoff & QA',
    desc: 'Building high-performance React codebases, testing cross-browser compatibility, and setting up automated webhooks.',
  },
  {
    step: '05',
    title: 'Rollout & Growth Tuning',
    desc: 'Following a strict launch protocol, monitoring live telemetry, and optimizing conversion rates for long-term ROI.',
  },
];

const studioRecognitions = [
  { title: 'Google Lighthouse 100/100', desc: 'Certified top tier web performance & accessibility excellence.' },
  { title: 'Custom React Architecture', desc: 'Bespoke codebase engineering engineered without slow template plugins.' },
  { title: 'Clutch Gold Standard Quality', desc: 'Consistently rated 5-stars for client satisfaction and project execution.' },
  { title: '24h Rapid Onboarding', desc: 'Direct access to senior strategists and engineering leads from day one.' },
];

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenInquiry,
  isDarkMode,
  onNavigateHome,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'branding' | 'engineering' | 'marketing'>('all');

  const filteredServices = detailedServices.filter(
    (service) => selectedCategory === 'all' || service.category === selectedCategory
  );

  return (
    <div
      className={`min-h-screen pt-28 pb-20 transition-colors duration-500 relative overflow-hidden ${
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

      {/* Brand Orange Radial Spotlight */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-radial from-[#FF7A1A]/18 via-[#FF7A1A]/5 to-transparent blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24 sm:space-y-32">
        
        {/* HERO SECTION - DD.NYC STYLE HIGH-END AGENCY HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF7A1A]/10 border border-[#FF7A1A]/30 text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest backdrop-blur-md">
            <Zap className="w-3.5 h-3.5" />
            <span>ROOS STUDIOX • AGENCY CAPABILITIES</span>
          </div>

          {/* Guaranteed 2-Line Headline */}
          <h1
            className={`font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] ${
              isDarkMode ? 'text-white' : 'text-[#111111]'
            }`}
          >
            <span className="block">Growth Starts With</span>
            <span className="bg-gradient-to-r from-[#FF7A1A] via-[#FF944D] to-[#EA580C] bg-clip-text text-transparent inline-block pb-1">
              The Right Momentum
            </span>
          </h1>

          {/* Shortened Punchy Subheadline */}
          <p
            className={`text-base sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto ${
              isDarkMode ? 'text-[#B8B8B8]' : 'text-[#52525B]'
            }`}
          >
            We combine strategy, bespoke engineering, and growth marketing to build high-converting digital ecosystems.
          </p>

          {/* dd.nyc Style Interactive Category Filter Buttons */}
          <div className="pt-4 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold border transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-[#FF7A1A] to-[#EA580C] text-white border-[#FF944D] shadow-lg shadow-[#FF7A1A]/30'
                  : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              ALL SERVICES (8)
            </button>
            <button
              onClick={() => setSelectedCategory('branding')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold border transition-all cursor-pointer ${
                selectedCategory === 'branding'
                  ? 'bg-gradient-to-r from-[#FF7A1A] to-[#EA580C] text-white border-[#FF944D] shadow-lg shadow-[#FF7A1A]/30'
                  : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              BRANDING & STRATEGY
            </button>
            <button
              onClick={() => setSelectedCategory('engineering')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold border transition-all cursor-pointer ${
                selectedCategory === 'engineering'
                  ? 'bg-gradient-to-r from-[#FF7A1A] to-[#EA580C] text-white border-[#FF944D] shadow-lg shadow-[#FF7A1A]/30'
                  : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              WEB ENGINEERING & UI/UX
            </button>
            <button
              onClick={() => setSelectedCategory('marketing')}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold border transition-all cursor-pointer ${
                selectedCategory === 'marketing'
                  ? 'bg-gradient-to-r from-[#FF7A1A] to-[#EA580C] text-white border-[#FF944D] shadow-lg shadow-[#FF7A1A]/30'
                  : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              GROWTH MARKETING & AI
            </button>
          </div>
        </motion.div>

        {/* AGENCY KEY STATISTICS COUNTER BAR (DD.NYC PATTERN) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {agencyStats.map((stat, sIdx) => (
            <div
              key={sIdx}
              className={`p-6 rounded-2xl border text-left space-y-2 relative overflow-hidden ${
                isDarkMode
                  ? 'bg-[#0C0C0C] border-zinc-800 text-white'
                  : 'bg-white border-zinc-200 text-zinc-900 shadow-md'
              }`}
            >
              <div className="text-3xl sm:text-4xl font-mono font-black text-[#FF7A1A]">
                {stat.metric}
              </div>
              <div className="font-display text-base font-bold">
                {stat.label}
              </div>
              <div className="text-xs font-mono text-zinc-500">
                {stat.sub}
              </div>
            </div>
          ))}
        </motion.div>

        {/* 8 DETAILED SERVICE SECTIONS WITH DD.NYC SUB-TAG PILLS */}
        <div className="space-y-24 sm:space-y-32">
          {filteredServices.map((service, idx) => {
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
                
                {/* STUDIO VISUAL WIDGET (5 COLS) */}
                <div
                  className={`lg:col-span-5 ${
                    isLeft ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <motion.div
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className={`rounded-3xl border shadow-2xl relative overflow-hidden flex flex-col justify-between h-full min-h-[360px] transition-all group ${
                      isDarkMode
                        ? 'bg-[#0C0C0C] border-zinc-800 text-white shadow-black/80'
                        : 'bg-white border-zinc-200 text-zinc-900 shadow-xl'
                    }`}
                  >
                    {service.renderVisual(isDarkMode)}

                    {/* Momentum Result Banner */}
                    <div
                      className={`relative z-10 p-5 m-4 rounded-2xl border text-xs font-semibold text-[#FF7A1A] backdrop-blur-md ${
                        isDarkMode
                          ? 'bg-[#050505]/90 border-[#FF7A1A]/40 shadow-2xl'
                          : 'bg-white/90 border-[#FF7A1A]/40 shadow-lg'
                      }`}
                    >
                      <span className="font-bold uppercase font-mono block text-[10px] text-zinc-400 mb-0.5">
                        MOMENTUM CREATED:
                      </span>
                      "{service.outcome}"
                    </div>
                  </motion.div>
                </div>

                {/* CONTENT & DELIVERABLES (7 COLS) */}
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

                  {/* dd.nyc Style Capability Sub-Tag Pill Bar */}
                  <div className="flex items-center gap-2 flex-wrap pt-1">
                    {service.subTags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300 font-bold"
                      >
                        [{tag}]
                      </span>
                    ))}
                  </div>

                  <p className={`text-base sm:text-lg leading-relaxed ${isDarkMode ? 'text-[#B8B8B8]' : 'text-zinc-700'}`}>
                    {service.copy}
                  </p>

                  {/* Perfect For Banner */}
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

                  {/* Deliverables Checklist */}
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
          className={`p-8 sm:p-14 rounded-3xl border relative overflow-hidden text-left ${
            isDarkMode
              ? 'bg-[#0C0C0C] border-zinc-800 text-white'
              : 'bg-white border-zinc-200 text-zinc-900 shadow-2xl'
          }`}
        >
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF7A1A] via-[#FF944D] to-[#EA580C]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7A1A]/10 border border-[#FF7A1A]/30 text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest">
                <FileText className="w-3.5 h-3.5" />
                <span>OFFICIAL STUDIO DECK</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Download Our Official Studio Service & Capabilities Deck
              </h2>

              <p className={`text-base sm:text-lg leading-relaxed ${isDarkMode ? 'text-[#B8B8B8]' : 'text-zinc-700'}`}>
                Get our complete presentation deck detailing our core engineering methodologies, case studies, technology stack, service pricing structures, and project timelines in a single PDF.
              </p>

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

              <div className="pt-4 flex items-center gap-4 flex-wrap">
                <AlphaRoosButton
                  text="Download PDF Deck"
                  onClick={() => {
                    alert('Roos StudioX Service Capabilities Deck requested! Our team will send the confidential PDF deck directly to your inbox.');
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

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl border border-zinc-800 bg-[#050505] p-6 shadow-2xl relative space-y-4 transform hover:scale-[1.02] transition-transform">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF7A1A]" />
                    <span className="text-xs font-mono font-bold text-white uppercase">ROOS_DECK.PDF</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500">24 PAGES</span>
                </div>

                <div className="py-6 text-center space-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-[#FF7A1A]/10 border border-[#FF7A1A]/30 text-[#FF7A1A] mx-auto flex items-center justify-center">
                    <FileText className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">Roos StudioX Capabilities Briefing</h3>
                  <p className="text-xs text-zinc-400">Official Agency Presentation & Methodology Overview</p>
                </div>

                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                  <span>FORMAT: PDF / PRESENTATION</span>
                  <span className="text-[#FF7A1A] font-bold">READY TO READ</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* DD.NYC STYLE 5-PHASE METHODICAL PROCESS ARCHITECTURE */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-left space-y-12"
        >
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest">
              OUR METHODOLOGY
            </span>
            <h2 className={`font-display text-4xl sm:text-6xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
              5-Phase Studio Execution Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {ddProcessSteps.map((pStep, pIdx) => (
              <div
                key={pIdx}
                className={`p-6 rounded-2xl border flex flex-col justify-between space-y-4 text-left ${
                  isDarkMode
                    ? 'bg-[#0C0C0C] border-zinc-800 text-white'
                    : 'bg-white border-zinc-200 text-zinc-900 shadow-sm'
                }`}
              >
                <div className="text-2xl font-mono font-black text-[#FF7A1A]">
                  {pStep.step}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-[#FF7A1A] mb-1">
                    {pStep.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {pStep.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* DD.NYC STYLE RECOGNITIONS & TRUST BADGES GRID */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-left space-y-10"
        >
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest">
              STANDARDS & RECOGNITION
            </span>
            <h2 className={`font-display text-4xl sm:text-5xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
              Studio Quality Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studioRecognitions.map((rec, rIdx) => (
              <div
                key={rIdx}
                className="p-6 rounded-2xl bg-[#0C0C0C] border border-zinc-800 space-y-2 text-left"
              >
                <div className="flex items-center gap-2 text-[#FF7A1A]">
                  <Award className="w-5 h-5" />
                  <span className="text-xs font-mono font-bold uppercase">GOLD STANDARD</span>
                </div>
                <h3 className="font-display text-lg font-bold text-white">
                  {rec.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {rec.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FINAL FULL SCREEN CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-16 rounded-3xl border border-zinc-800 bg-[#08080A] text-center space-y-8 relative shadow-2xl overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF7A1A] via-[#FF944D] to-[#EA580C]" />

          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className={`font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
              Ready To Build Momentum?
            </h2>
            <div className={`text-lg sm:text-2xl font-semibold space-y-1 ${isDarkMode ? 'text-[#B8B8B8]' : 'text-zinc-600'}`}>
              <p>You Bring The Ambition.</p>
              <p className="text-[#FF7A1A] font-bold">We'll Build The Momentum.</p>
            </div>
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
