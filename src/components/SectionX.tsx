import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Palette,
  Compass,
  Layout,
  Code2,
  Cpu,
  TrendingUp,
  Boxes,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';

interface SectionXProps {
  onOpenInquiry?: () => void;
  isDarkMode?: boolean;
}

export interface SectionXServiceDetail {
  num: string;
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  deliverables: string[];
  businessImpact: string[];
}

const sectionXServicesList: SectionXServiceDetail[] = [
  {
    num: '01',
    id: 'brand-trust',
    title: 'Build a Brand People Trust',
    tagline: 'Make a Strong First Impression That Lasts',
    description:
      'Your brand is often the first interaction potential customers have with your business. If it fails to build trust, opportunities are lost before conversations even begin. We help businesses create professional, memorable, and market-ready brands that inspire confidence and stand out from competitors.',
    icon: Palette,
    deliverables: [
      'Brand Strategy',
      'Logo Design',
      'Visual Identity Systems',
      'Brand Guidelines',
      'Marketing Assets',
      'Brand Refresh & Repositioning',
    ],
    businessImpact: [
      'Increased credibility',
      'Stronger market presence',
      'Better customer trust',
      'Improved brand recognition',
    ],
  },
  {
    num: '02',
    id: 'position-win',
    title: 'Define What Makes You Different',
    tagline: 'Position Your Business To Win',
    description:
      'Many businesses struggle because customers cannot clearly understand why they should choose them. We help uncover your unique value, clarify your messaging, and create a positioning strategy that attracts the right customers and opportunities.',
    icon: Compass,
    deliverables: [
      'Market Research',
      'Competitor Analysis',
      'Positioning Strategy',
      'Messaging Frameworks',
      'Customer Journey Mapping',
      'Growth Roadmaps',
    ],
    businessImpact: [
      'Clear competitive advantage',
      'Better customer alignment',
      'Stronger sales conversations',
      'Increased conversion opportunities',
    ],
  },
  {
    num: '03',
    id: 'turn-customers',
    title: 'Turn Visitors Into Customers',
    tagline: 'Create Experiences That Drive Action',
    description:
      'A great-looking website is not enough. Your digital experience should educate, engage, and guide visitors toward becoming customers. We design user-focused experiences that make it easier for people to trust your business and take the next step.',
    icon: Layout,
    deliverables: [
      'Website Design',
      'UI/UX Design',
      'Customer Experience Design',
      'Landing Pages',
      'Conversion Optimization',
      'Design Systems',
    ],
    businessImpact: [
      'Higher engagement',
      'Better user experience',
      'More enquiries and leads',
      'Improved conversion rates',
    ],
  },
  {
    num: '04',
    id: 'platforms-scale',
    title: 'Build Digital Platforms That Scale',
    tagline: 'Transform Ideas Into Powerful Digital Experiences',
    description:
      'Your website, application, or platform should support growth—not limit it. We build modern, scalable digital solutions designed to help businesses grow, operate efficiently, and deliver exceptional customer experiences.',
    icon: Code2,
    deliverables: [
      'Corporate Websites',
      'Custom Web Applications',
      'Ecommerce Solutions',
      'Customer Portals',
      'CMS Platforms',
      'System Integrations',
    ],
    businessImpact: [
      'Faster business operations',
      'Better customer experiences',
      'Increased scalability',
      'Future-ready infrastructure',
    ],
  },
  {
    num: '05',
    id: 'scale-smarter',
    title: 'Save Time. Scale Smarter.',
    tagline: 'Automate Repetitive Work And Focus On Growth',
    description:
      'As businesses grow, inefficiencies become expensive. We help businesses leverage AI and automation to streamline operations, improve productivity, and free teams to focus on higher-value work.',
    icon: Cpu,
    deliverables: [
      'AI Workflow Automation',
      'CRM Automation',
      'Lead Management Systems',
      'Customer Support Automation',
      'Business Process Optimization',
      'Internal Productivity Tools',
    ],
    businessImpact: [
      'Reduced manual effort',
      'Improved operational efficiency',
      'Faster response times',
      'More scalable business processes',
    ],
  },
  {
    num: '06',
    id: 'generate-leads',
    title: 'Generate More Leads & Opportunities',
    tagline: 'Create A Predictable Growth Engine',
    description:
      'The best products and services still need visibility. We help businesses attract the right audience, generate qualified leads, and build sustainable marketing systems that support long-term growth.',
    icon: TrendingUp,
    deliverables: [
      'Growth Strategy',
      'Search Engine Optimization (SEO)',
      'Content Marketing',
      'Lead Generation Systems',
      'Paid Advertising Campaigns',
      'Conversion Optimization',
    ],
    businessImpact: [
      'Increased visibility',
      'More qualified leads',
      'Improved customer acquisition',
      'Sustainable business growth',
    ],
  },
  {
    num: '07',
    id: 'innovate-expand',
    title: 'Scale, Innovate & Expand',
    tagline: 'Build The Next Chapter Of Your Business',
    description:
      "Growth creates new opportunities and new challenges. Whether you're launching a product, entering a new market, or planning your next phase of growth, we help you make confident, data-informed decisions.",
    icon: Boxes,
    deliverables: [
      'Product Strategy',
      'Market Validation',
      'Go-To-Market Planning',
      'Customer Research',
      'Innovation Consulting',
      'Growth Advisory',
    ],
    businessImpact: [
      'Reduced business risk',
      'Faster execution',
      'Better strategic decisions',
      'Increased market opportunities',
    ],
  },
];

export const SectionX: React.FC<SectionXProps> = ({
  isDarkMode = false,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const activeService = sectionXServicesList[activeIndex];
  const IconComp = activeService.icon;

  return (
    <section
      id="section-x"
      className={`relative pt-12 pb-20 sm:pb-28 transition-colors duration-500 overflow-hidden ${
        isDarkMode ? 'bg-[#0A0A0A]' : 'bg-[#FAFAFA]'
      }`}
    >
      {/* Background Mesh Grid */}
      <div
        className={`absolute inset-0 bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none ${
          isDarkMode
            ? 'bg-[linear-gradient(to_right,#27272A40_1px,transparent_1px),linear-gradient(to_bottom,#27272A40_1px,transparent_1px)]'
            : 'bg-[linear-gradient(to_right,#E4E4E750_1px,transparent_1px),linear-gradient(to_bottom,#E4E4E750_1px,transparent_1px)]'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Editorial Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Numbered Architectural Service List */}
          <div className="lg:col-span-6 space-y-3">
            {sectionXServicesList.map((service, idx) => {
              const isSelected = idx === activeIndex;

              return (
                <motion.div
                  key={service.id}
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  whileHover={{ x: 6 }}
                  className={`group cursor-pointer p-5 sm:p-6 rounded-2xl transition-all duration-300 border ${
                    isSelected
                      ? isDarkMode
                        ? 'bg-[#18181B] text-white border-[#F97316]/60 shadow-xl shadow-black/40'
                        : 'bg-[#111111] text-white border-[#111111] shadow-xl shadow-black/15'
                      : isDarkMode
                      ? 'bg-[#111111]/70 hover:bg-[#18181B] text-[#D4D4D8] border-[#27272A] hover:border-[#F97316]/30'
                      : 'bg-white/80 hover:bg-white text-[#111111] border-[#E4E4E7] hover:border-[#F97316]/30 shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Oversized Numeral */}
                      <span
                        className={`font-display text-sm font-extrabold tracking-wider ${
                          isSelected
                            ? 'text-[#F97316]'
                            : isDarkMode
                            ? 'text-zinc-500 group-hover:text-[#F97316]'
                            : 'text-zinc-400 group-hover:text-[#F97316]'
                        }`}
                      >
                        {service.num}
                      </span>
                      <h3
                        className={`font-display text-base sm:text-lg font-bold tracking-tight ${
                          isSelected
                            ? 'text-white'
                            : isDarkMode
                            ? 'text-silver-gradient'
                            : 'text-[#111111]'
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-[#F97316] text-white rotate-45'
                          : isDarkMode
                          ? 'bg-[#27272A] text-[#D4D4D8] group-hover:bg-[#F97316]/20 group-hover:text-[#F97316]'
                          : 'bg-[#F4F4F5] text-[#52525B] group-hover:bg-[#F97316]/10 group-hover:text-[#F97316]'
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Stage Card */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={`rounded-3xl p-8 sm:p-10 border shadow-2xl relative overflow-hidden transition-colors duration-500 ${
                  isDarkMode
                    ? 'bg-[#18181B] border-[#27272A] text-white shadow-black/40'
                    : 'bg-white border-[#E4E4E7] shadow-black/10'
                }`}
              >
                {/* Ambient Glow Accent */}
                <div
                  className={`absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
                    isDarkMode
                      ? 'bg-gradient-to-br from-[#F97316]/20 to-[#FDBA74]/10'
                      : 'bg-gradient-to-br from-[#F97316]/10 to-[#FDBA74]/5'
                  }`}
                />

                {/* Card Header */}
                <div
                  className={`flex items-center justify-between pb-6 border-b ${
                    isDarkMode ? 'border-[#27272A]' : 'border-[#E4E4E7]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#F97316] text-white flex items-center justify-center shadow-lg shadow-[#F97316]/25">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#F97316]">
                        Capability {activeService.num}
                      </span>
                      <h4
                        className={`font-display text-xl font-bold ${
                          isDarkMode ? 'text-white' : 'text-[#111111]'
                        }`}
                      >
                        {activeService.title}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Tagline & Description */}
                <div className="py-6 space-y-3">
                  <div
                    className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-lg inline-block ${
                      isDarkMode
                        ? 'text-[#FDBA74] bg-[#F97316]/15 border border-[#F97316]/30'
                        : 'text-[#F97316] bg-[#F97316]/10 border border-[#F97316]/20'
                    }`}
                  >
                    {activeService.tagline}
                  </div>
                  <p
                    className={`text-sm sm:text-base leading-relaxed ${
                      isDarkMode ? 'text-[#D4D4D8]' : 'text-[#52525B]'
                    }`}
                  >
                    {activeService.description}
                  </p>
                </div>

                {/* What We Deliver */}
                <div className="pb-6">
                  <span
                    className={`text-[11px] font-extrabold uppercase tracking-wider block mb-3 ${
                      isDarkMode ? 'text-[#D4D4D8]' : 'text-[#52525B]'
                    }`}
                  >
                    What We Deliver
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeService.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-2.5 text-xs sm:text-sm font-semibold p-2.5 rounded-xl border ${
                          isDarkMode
                            ? 'bg-[#111111] text-[#D4D4D8] border-[#27272A]'
                            : 'bg-[#F4F4F5] text-[#111111] border-[#E4E4E7]'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Business Impact Outcomes */}
                <div className="pb-8">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider block mb-3 text-[#F97316]">
                    Business Impact Outcomes
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeService.businessImpact.map((impact, idx) => (
                      <div
                        key={idx}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 ${
                          isDarkMode
                            ? 'bg-[#F97316]/15 text-[#FDBA74] border border-[#F97316]/30'
                            : 'bg-[#F97316]/10 text-[#111111] border border-[#F97316]/20'
                        }`}
                      >
                        <span className="text-[#22C55E] font-bold">✓</span>
                        <span>{impact}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
