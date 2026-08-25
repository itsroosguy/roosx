import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  Target,
  Palette,
  Code2,
  TrendingUp,
  FileText,
  PieChart,
  Users,
  MapPin,
  Flag,
  MessageSquare,
  Map,
  Layers,
  Layout,
  Smartphone,
  Video,
  Code,
  Database,
  Bot,
  Zap,
  Search,
  BarChart2,
  Filter,
  Rocket,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { AlphaRoosButton } from './AlphaRoosButton';

interface ProcessSectionProps {
  onOpenInquiry?: () => void;
  isDarkMode?: boolean;
}

interface SubNode {
  title: string;
  desc: string;
  icon: React.ElementType;
}

interface ProcessColumnData {
  num: string;
  id: string;
  title: string;
  tagline: string;
  description: string;
  impactMetric: string;
  impactLabel: string;
  icon: React.ElementType;
  subNodes: SubNode[];
}

const processColumnsData: ProcessColumnData[] = [
  {
    num: '01',
    id: 'discover',
    title: 'Discover',
    tagline: 'We Uncover What Others Miss',
    description:
      'Before writing code or designing pixels, we perform deep-dive architectural discovery. We analyze your market ecosystem, target customer friction points, and competitor positioning to map high-leverage growth opportunities.',
    impactMetric: '+180%',
    impactLabel: 'Market Opportunity Clarity',
    icon: Compass,
    subNodes: [
      { title: 'Business Audit', desc: 'Full infrastructure & revenue bottleneck analysis', icon: FileText },
      { title: 'Market Intelligence', desc: 'Competitor gap & positioning teardowns', icon: PieChart },
      { title: 'Audience Research', desc: 'ICP buyer friction & intent mapping', icon: Users },
      { title: 'Opportunity Mapping', desc: 'High-ROI strategic execution blueprints', icon: MapPin },
    ],
  },
  {
    num: '02',
    id: 'define',
    title: 'Define',
    tagline: 'Strategy Before Execution',
    description:
      'Execution without strategy is wasted momentum. We define razor-sharp brand positioning, value proposition frameworks, and strategic product roadmaps to ensure every asset drives measurable revenue outcomes.',
    impactMetric: '100%',
    impactLabel: 'Strategic Messaging Alignment',
    icon: Target,
    subNodes: [
      { title: 'Brand Positioning', desc: 'Unfair market advantage formulation', icon: Flag },
      { title: 'Messaging Framework', desc: 'High-converting value proposition copy', icon: MessageSquare },
      { title: 'Customer Journey', desc: 'Frictionless conversion funnel design', icon: Users },
      { title: 'Strategic Roadmap', desc: 'Milestone-driven execution timeline', icon: Map },
    ],
  },
  {
    num: '03',
    id: 'design',
    title: 'Design',
    tagline: 'Create Experiences People Remember',
    description:
      'We craft world-class visual identity systems, spatial UI/UX interfaces, and interactive webGL motion design that command authority, inspire buyer trust, and elevate brand perception.',
    impactMetric: '3.4x',
    impactLabel: 'Brand Perception Elevation',
    icon: Palette,
    subNodes: [
      { title: 'Brand Systems', desc: 'Scalable design systems & guidelines', icon: Layers },
      { title: 'Website Architecture', desc: 'High-converting digital flagship layouts', icon: Layout },
      { title: 'UI / UX Design', desc: 'Intuitive spatial digital interfaces', icon: Smartphone },
      { title: 'Motion & WebGL', desc: 'Immersive micro-interactions & shaders', icon: Video },
    ],
  },
  {
    num: '04',
    id: 'build',
    title: 'Build',
    tagline: 'Built For Sub-100ms Performance',
    description:
      'We engineer ultra-fast web platforms, headless CMS integrations, and custom AI automation workflows designed to scale effortlessly under high enterprise traffic volumes.',
    impactMetric: '<100ms',
    impactLabel: 'Sub-100ms Render Performance',
    icon: Code2,
    subNodes: [
      { title: 'Modern Web Stack', desc: 'React, Vite, Next & TypeScript build', icon: Code },
      { title: 'Headless CMS', desc: 'Decoupled lightning-fast content engines', icon: Database },
      { title: 'AI Automation', desc: 'Autonomous LLM agent & lead workflows', icon: Bot },
      { title: 'System Integrations', desc: 'Custom API & CRM webhook pipelines', icon: Zap },
    ],
  },
  {
    num: '05',
    id: 'scale',
    title: 'Scale',
    tagline: 'Growth Never Stops At Launch',
    description:
      'Post-launch is where momentum compounds. We deploy automated lead acquisition pipelines, SEO/GEO search engines, and real-time analytics to drive sustainable revenue growth.',
    impactMetric: '24/7',
    impactLabel: 'Automated Growth Engine',
    icon: TrendingUp,
    subNodes: [
      { title: 'SEO & GEO Engine', desc: 'AI-search & generative engine optimization', icon: Search },
      { title: 'Analytics Radar', desc: 'Real-time user telemetry & funnel tracking', icon: BarChart2 },
      { title: 'Conversion Tuning', desc: 'Continuous A/B testing & UX refinement', icon: Filter },
      { title: 'Growth Systems', desc: 'Predictable recurring lead pipelines', icon: Rocket },
    ],
  },
];

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  onOpenInquiry,
  isDarkMode = false,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const currentStage = processColumnsData[activeStep];

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % processColumnsData.length);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + processColumnsData.length) % processColumnsData.length);
  };

  return (
    <section
      id="process"
      className={`relative py-16 sm:py-24 transition-colors duration-500 overflow-hidden ${
        isDarkMode ? 'bg-[#0A0A0A] text-white' : 'bg-white text-[#111111]'
      }`}
    >
      {/* Background Architectural Mesh */}
      <div
        className={`absolute inset-0 bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none ${
          isDarkMode
            ? 'bg-[linear-gradient(to_right,#27272A25_1px,transparent_1px),linear-gradient(to_bottom,#27272A25_1px,transparent_1px)]'
            : 'bg-[linear-gradient(to_right,#E4E4E760_1px,transparent_1px),linear-gradient(to_bottom,#E4E4E760_1px,transparent_1px)]'
        }`}
      />

      {/* Dynamic Backlight Spotlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-radial from-[#F97316]/15 via-[#F97316]/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-3"
        >
          <h2
            className={`font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[0.96] ${
              isDarkMode ? 'text-silver-gradient' : 'text-[#111111]'
            }`}
          >
            <span className="block leading-[0.96]">Growth Isn't an Event</span>
            <span className="bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#FDBA74] bg-clip-text text-transparent block leading-[0.96] mt-1">
              It's a Strategic Blueprint
            </span>
          </h2>

          <p
            className={`mt-4 text-base sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto transition-colors duration-500 ${
              isDarkMode ? 'text-[#D4D4D8]' : 'text-[#52525B]'
            }`}
          >
            Our 5-stage growth architecture turns complex brand challenges into predictable momentum.
          </p>
        </motion.div>

        {/* 1. HIGH-TECH LASER CONNECTED PIPELINE STEPPER BAR */}
        <div className="mb-10 sm:mb-12 relative max-w-5xl mx-auto">
          {/* Laser Progress Beam Background Line */}
          <div
            className={`absolute top-1/2 left-6 right-6 -translate-y-1/2 h-1 rounded-full pointer-events-none ${
              isDarkMode ? 'bg-[#27272A]' : 'bg-[#E4E4E7]'
            }`}
          >
            {/* Active Glowing Laser Progress Beam */}
            <motion.div
              className="h-full bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#EA580C] rounded-full shadow-[0_0_15px_rgba(249,115,22,0.6)]"
              animate={{ width: `${((activeStep + 1) / processColumnsData.length) * 100}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* Stepper Node Buttons */}
          <div className="relative z-10 flex items-center justify-between">
            {processColumnsData.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = idx === activeStep;
              const isPassed = idx < activeStep;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className="group flex flex-col items-center cursor-pointer focus:outline-none"
                  aria-label={`Jump to stage ${step.num}: ${step.title}`}
                >
                  {/* Step Icon Badge */}
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 relative border ${
                      isActive
                        ? 'bg-gradient-to-br from-[#F97316] via-[#FB923C] to-[#EA580C] text-white border-[#FDBA74] shadow-xl shadow-[#F97316]/40 scale-110'
                        : isPassed
                        ? isDarkMode
                          ? 'bg-[#18181B] text-[#F97316] border-[#F97316]/40'
                          : 'bg-orange-50 text-[#F97316] border-[#F97316]/30'
                        : isDarkMode
                        ? 'bg-[#111111] text-[#71717A] border-[#27272A] hover:border-[#F97316]/50 hover:text-white'
                        : 'bg-white text-[#71717A] border-[#E4E4E7] hover:border-[#F97316]/50 hover:text-[#111111]'
                    }`}
                  >
                    <StepIcon className="w-5 h-5 sm:w-7 sm:h-7" />
                    
                    {/* Active Halo Pulse */}
                    {isActive && (
                      <span className="absolute -inset-1 rounded-2xl bg-[#F97316]/30 blur-sm animate-pulse -z-10" />
                    )}
                  </div>

                  {/* Step Title Label */}
                  <div className="mt-2 text-center">
                    <span
                      className={`text-[10px] font-mono font-extrabold uppercase tracking-wider block ${
                        isActive
                          ? 'text-[#F97316]'
                          : isDarkMode
                          ? 'text-zinc-500'
                          : 'text-zinc-400'
                      }`}
                    >
                      Stage {step.num}
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-bold tracking-tight block transition-colors ${
                        isActive
                          ? isDarkMode
                            ? 'text-white'
                            : 'text-[#111111]'
                          : isDarkMode
                          ? 'text-[#A1A1AA] group-hover:text-white'
                          : 'text-[#71717A] group-hover:text-[#111111]'
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. MASTER STAGE SHOWCASE CONSOLE DECK */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage.id}
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -25, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className={`rounded-3xl border p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-2xl transition-colors duration-500 ${
              isDarkMode
                ? 'bg-[#141417]/90 border-[#27272A] text-white shadow-black/60'
                : 'bg-white border-[#E4E4E7] text-[#111111] shadow-black/10'
            }`}
          >
            {/* Top Glowing Laser Border Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#EA580C]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* LEFT COLUMN: STRATEGY & NARRATIVE (6 COLS) */}
              <div className="lg:col-span-6 space-y-6 text-left">
                {/* Stage Badge & Index */}
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-[#F97316]/15 text-[#F97316] border border-[#F97316]/30">
                    Stage {currentStage.num} of 05 • Architecture
                  </span>
                </div>

                {/* Main Stage Headline & Tagline */}
                <div>
                  <h3
                    className={`font-display text-3xl sm:text-5xl font-black tracking-tight leading-none ${
                      isDarkMode ? 'text-silver-gradient' : 'text-[#111111]'
                    }`}
                  >
                    {currentStage.title}
                  </h3>
                  <div className="text-base sm:text-xl font-extrabold text-[#F97316] mt-2 tracking-tight">
                    {currentStage.tagline}
                  </div>
                </div>

                {/* Narrative Description */}
                <p
                  className={`text-sm sm:text-base leading-relaxed font-normal ${
                    isDarkMode ? 'text-[#D4D4D8]' : 'text-[#52525B]'
                  }`}
                >
                  {currentStage.description}
                </p>

                {/* Impact Metric Radar Badge */}
                <div
                  className={`p-4 rounded-2xl border flex items-center gap-4 shadow-sm ${
                    isDarkMode
                      ? 'bg-[#18181B] border-[#27272A]'
                      : 'bg-[#FAFAFA] border-[#E4E4E7]'
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F97316] to-[#EA580C] text-white font-black font-display text-base flex items-center justify-center shrink-0 shadow-md shadow-[#F97316]/30">
                    {currentStage.impactMetric}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F97316] block">
                      Target System Impact
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-semibold block ${
                        isDarkMode ? 'text-white' : 'text-[#111111]'
                      }`}
                    >
                      {currentStage.impactLabel}
                    </span>
                  </div>
                </div>

                {/* Stage Controls */}
                <div className="pt-2 flex items-center gap-3 flex-wrap">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevStep}
                      className={`p-3 rounded-xl border transition-all cursor-pointer ${
                        isDarkMode
                          ? 'bg-[#18181B] border-[#27272A] text-white hover:border-[#F97316]'
                          : 'bg-white border-[#E4E4E7] text-[#111111] hover:border-[#F97316]'
                      }`}
                      aria-label="Previous Stage"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextStep}
                      className={`p-3 rounded-xl border transition-all cursor-pointer ${
                        isDarkMode
                          ? 'bg-[#18181B] border-[#27272A] text-white hover:border-[#F97316]'
                          : 'bg-white border-[#E4E4E7] text-[#111111] hover:border-[#F97316]'
                      }`}
                      aria-label="Next Stage"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {onOpenInquiry && (
                    <AlphaRoosButton
                      text="Get Your Free Audit"
                      onClick={onOpenInquiry}
                      isDarkMode={isDarkMode}
                      compact
                    />
                  )}
                </div>
              </div>

              {/* RIGHT COLUMN: CAPABILITY TILES MATRIX (6 COLS) */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center justify-between border-b pb-3 border-[#27272A]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
                    Execution Deliverables ({currentStage.subNodes.length})
                  </span>
                  <span className="text-xs font-mono opacity-60">Stage {currentStage.num}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentStage.subNodes.map((sub, sIdx) => {
                    const SubIcon = sub.icon;

                    return (
                      <motion.div
                        key={sIdx}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: sIdx * 0.06 }}
                        whileHover={{ y: -4, scale: 1.02 }}
                        className={`p-4 rounded-2xl border transition-all duration-300 text-left flex flex-col justify-between ${
                          isDarkMode
                            ? 'bg-[#18181B] border-[#27272A] hover:border-[#F97316] hover:shadow-lg hover:shadow-[#F97316]/20'
                            : 'bg-[#FAFAFA] border-[#E4E4E7] hover:border-[#F97316] hover:bg-white hover:shadow-lg hover:shadow-[#F97316]/15'
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-xl bg-[#F97316]/15 text-[#F97316] flex items-center justify-center shrink-0 border border-[#F97316]/30">
                            <SubIcon className="w-4 h-4" />
                          </div>
                          <span
                            className={`font-display text-sm font-bold tracking-tight ${
                              isDarkMode ? 'text-white' : 'text-[#111111]'
                            }`}
                          >
                            {sub.title}
                          </span>
                        </div>
                        <p
                          className={`text-xs leading-relaxed font-medium ${
                            isDarkMode ? 'text-[#A1A1AA]' : 'text-[#71717A]'
                          }`}
                        >
                          {sub.desc}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
