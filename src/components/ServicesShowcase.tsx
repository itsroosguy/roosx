import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  Palette,
  Layout,
  Code2,
  Cpu,
  TrendingUp,
  Boxes,
  ArrowRight,
  CheckCircle2,
  Zap,
} from 'lucide-react';

interface ServicesShowcaseProps {
  onOpenInquiry: () => void;
}

export interface ServiceItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  metric: string;
  metricLabel: string;
  deliverables: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'strategy',
    name: 'Strategy & Positioning',
    subtitle: 'Market Intelligence & Growth Blueprinting',
    description:
      'We define high-converting brand positioning, audience segmentation, and go-to-market strategies that capture market share.',
    icon: Compass,
    metric: '3.8x ROI',
    metricLabel: 'Average Strategy Lift',
    deliverables: [
      'Competitive Market Audit',
      'Brand Positioning Matrix',
      'Go-To-Market Roadmap',
      'Core Value Proposition',
    ],
  },
  {
    id: 'brand',
    name: 'Brand & Identity',
    subtitle: 'Visual Language & Editorial Systems',
    description:
      'Crafting unforgettable visual identities, typography guidelines, brand marks, and scalable design systems for ambitious companies.',
    icon: Palette,
    metric: '99.4%',
    metricLabel: 'Brand Resonance Rate',
    deliverables: [
      'Logo & Brand Architecture',
      'Typography & Motion Systems',
      'Comprehensive Brand Guidelines',
      'Design Token Libraries',
    ],
  },
  {
    id: 'uiux',
    name: 'UI/UX & Interface Design',
    subtitle: 'Digital Experience Architecture',
    description:
      'Designing intuitive, high-converting digital interfaces, web platforms, and mobile apps built for seamless user journeys.',
    icon: Layout,
    metric: '+140%',
    metricLabel: 'User Engagement Lift',
    deliverables: [
      'UX Wireframing & User Research',
      'High-Fidelity UI Prototypes',
      'Interactive Micro-Interactions',
      'Design System Systems',
    ],
  },
  {
    id: 'dev',
    name: 'Web & App Development',
    subtitle: 'High-Performance Engineering & WebGL',
    description:
      'Engineered with React, Next.js, WebGL, and modern cloud infrastructure for blazing fast performance and global scale.',
    icon: Code2,
    metric: '99/100',
    metricLabel: 'Lighthouse Performance Score',
    deliverables: [
      'Custom React & Next.js Platforms',
      'Full-Stack API Integrations',
      'Headless CMS Implementations',
      'Core Web Vitals Optimization',
    ],
  },
  {
    id: 'ai',
    name: 'AI & Automation',
    subtitle: 'Autonomous Workflows & AI Intelligence',
    description:
      'Integrating cutting-edge generative AI models, automated customer pipelines, and intelligent operational agents.',
    icon: Cpu,
    metric: '-65%',
    metricLabel: 'Operational Friction',
    deliverables: [
      'Custom AI Agent Workflows',
      'Automated CRM & Lead Pipelines',
      'LLM & OpenAI API Integrations',
      'Process Automation Audit',
    ],
  },
  {
    id: 'growth',
    name: 'Growth & Marketing',
    subtitle: 'Data-Driven Funnel Expansion',
    description:
      'Accelerating customer acquisition, conversion rate optimization (CRO), and omni-channel performance marketing.',
    icon: TrendingUp,
    metric: '+280%',
    metricLabel: 'Pipeline Conversion Surge',
    deliverables: [
      'Conversion Rate Optimization (CRO)',
      'Paid Media & Ad Creative Systems',
      'SEO & Organic Growth Engine',
      'Funnel Analytics Architecture',
    ],
  },
  {
    id: 'consulting',
    name: 'Product Consulting',
    subtitle: 'Product Scaling & Technical Advisory',
    description:
      'Strategic product discovery, architecture reviews, and scaling roadmaps for venture-backed startups and enterprises.',
    icon: Boxes,
    metric: '$850M+',
    metricLabel: 'Client Capital Raised',
    deliverables: [
      'Product Discovery & Sprints',
      'Technical Architecture Audits',
      'Scalability & Engineering Roadmaps',
      'Executive Leadership Advisory',
    ],
  },
];

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({ onOpenInquiry }) => {
  const [activeTab, setActiveTab] = useState<string>(servicesData[0].id);

  const activeService = servicesData.find((s) => s.id === activeTab) || servicesData[0];
  const IconComponent = activeService.icon;

  return (
    <section className="relative pt-6 pb-20 sm:pb-28 bg-slate-50/50 border-b border-slate-200/60 overflow-hidden">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f060_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f060_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Scrollable Horizontal Pill Tabs (Directly under main title) */}
        <div className="relative mb-12 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex items-center gap-3 min-w-max">
            {servicesData.map((service) => {
              const isActive = service.id === activeTab;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`relative px-5 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-tight transition-all duration-300 flex items-center gap-2.5 ${
                    isActive
                      ? 'text-white bg-slate-900 shadow-lg shadow-slate-900/20'
                      : 'text-slate-700 bg-slate-100/80 hover:bg-slate-200/80 hover:text-slate-900 border border-slate-200/60'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full bg-slate-900 border border-purple-500/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <service.icon className={`w-4 h-4 relative z-10 ${isActive ? 'text-purple-400' : 'text-slate-500'}`} />
                  <span className="relative z-10">{service.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Creative Interactive Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 20, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.99 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-200/80 bg-white/90 shadow-xl shadow-slate-900/5 relative overflow-hidden"
          >
            {/* Background Glow Aura */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/40 to-sky-200/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Left Column: Information & Description */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-700 shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                      {activeService.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-purple-600">
                      {activeService.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {activeService.description}
                </p>

                {/* Deliverables Checklist Grid */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                    Key Deliverables & Scope
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeService.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Trigger Button */}
                <div className="pt-4">
                  <button
                    onClick={onOpenInquiry}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-purple-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-slate-900/10 hover:shadow-purple-600/20 transition-all duration-300 group"
                  >
                    <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span>Inquire About {activeService.name}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Column: Metric Impact Highlight Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white relative overflow-hidden shadow-2xl border border-slate-700/50">
                  
                  {/* Decorative Subtle Line Art */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

                  <div className="relative z-10 space-y-4">
                    <span className="text-[10px] uppercase font-extrabold tracking-widest text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 inline-block">
                      Impact Metric
                    </span>
                    <div>
                      <div className="font-display text-4xl sm:text-6xl font-extrabold tracking-tighter text-white">
                        {activeService.metric}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                        {activeService.metricLabel}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                      <span>Tailored Execution</span>
                      <span className="text-purple-300 font-semibold">Roos StudioX Standard</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
