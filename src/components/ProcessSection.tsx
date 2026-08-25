import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
} from 'lucide-react';

interface ProcessSectionProps {
  onOpenInquiry?: () => void;
  isDarkMode?: boolean;
}

interface SubNode {
  title: string;
  icon: React.ElementType;
}

interface ProcessColumnData {
  num: string;
  id: string;
  title: string;
  taglineLine1: string;
  taglineLine2: string;
  descLine1: string;
  descLine2: string;
  descLine3: string;
  descLine4: string;
  icon: React.ElementType;
  subNodes: SubNode[];
}

const processColumnsData: ProcessColumnData[] = [
  {
    num: '01',
    id: 'discover',
    title: 'Discover',
    taglineLine1: 'We uncover',
    taglineLine2: 'what others miss',
    descLine1: 'We analyze your market,',
    descLine2: 'audience and competitors to',
    descLine3: 'uncover opportunities that',
    descLine4: 'create competitive advantage.',
    icon: Compass,
    subNodes: [
      { title: 'Business Audit', icon: FileText },
      { title: 'Market Intelligence', icon: PieChart },
      { title: 'Audience Research', icon: Users },
      { title: 'Opportunity Mapping', icon: MapPin },
    ],
  },
  {
    num: '02',
    id: 'define',
    title: 'Define',
    taglineLine1: 'Strategy',
    taglineLine2: 'before execution',
    descLine1: 'We craft precise positioning',
    descLine2: 'and strategic roadmaps so',
    descLine3: 'every decision moves your',
    descLine4: 'brand forward with clarity.',
    icon: Target,
    subNodes: [
      { title: 'Positioning', icon: Flag },
      { title: 'Messaging', icon: MessageSquare },
      { title: 'Customer Journey', icon: Users },
      { title: 'Strategic Roadmap', icon: Map },
    ],
  },
  {
    num: '03',
    id: 'design',
    title: 'Design',
    taglineLine1: 'Create experiences',
    taglineLine2: 'people remember',
    descLine1: 'We design iconic visual',
    descLine2: 'identities and digital products',
    descLine3: 'that build trust, communicate',
    descLine4: 'authority, and convert.',
    icon: Palette,
    subNodes: [
      { title: 'Brand Systems', icon: Layers },
      { title: 'Website Design', icon: Layout },
      { title: 'UI / UX Design', icon: Smartphone },
      { title: 'Motion Design', icon: Video },
    ],
  },
  {
    num: '04',
    id: 'build',
    title: 'Build',
    taglineLine1: 'Built for',
    taglineLine2: 'performance',
    descLine1: 'We engineer high-performance',
    descLine2: 'platforms, modern web',
    descLine3: 'architecture, and AI systems',
    descLine4: 'built to scale effortlessly.',
    icon: Code2,
    subNodes: [
      { title: 'Development', icon: Code },
      { title: 'Headless CMS', icon: Database },
      { title: 'AI Systems', icon: Bot },
      { title: 'Automation & Integrations', icon: Zap },
    ],
  },
  {
    num: '05',
    id: 'scale',
    title: 'Scale',
    taglineLine1: 'Growth never',
    taglineLine2: 'stops at launch',
    descLine1: 'We deploy conversion engines,',
    descLine2: 'search strategies, and',
    descLine3: 'analytics systems that drive',
    descLine4: 'continuous revenue growth.',
    icon: TrendingUp,
    subNodes: [
      { title: 'SEO & GEO', icon: Search },
      { title: 'Analytics', icon: BarChart2 },
      { title: 'Conversion Tuning', icon: Filter },
      { title: 'Growth Systems', icon: Rocket },
    ],
  },
];

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  isDarkMode = false,
}) => {
  const [activeColumn, setActiveColumn] = useState<number>(0);

  return (
    <section
      id="process"
      className={`relative pt-6 pb-12 sm:pt-8 sm:pb-16 transition-colors duration-500 overflow-hidden ${
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

      {/* Ambient Radial Spotlight Backlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#F97316]/10 via-[#FB923C]/15 to-[#FDBA74]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* HEADER BLOCK (PREMIUM METALLIC SILVER GRADIENT IN DARK MODE) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 space-y-2"
        >
          {/* Main Headline with Metallic Silver Gradient in Dark Mode */}
          <h2
            className={`font-display text-[33px] sm:text-[57px] md:text-[69px] font-bold tracking-tighter leading-[0.96] ${
              isDarkMode ? 'text-silver-gradient' : 'text-[#111111]'
            }`}
          >
            <span className="block leading-[0.96]">Growth Isn't an Event</span>
            <span className="bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#FDBA74] bg-clip-text text-transparent block leading-[0.96] mt-0.5">
              It's a System
            </span>
          </h2>

          {/* Subtitle Paragraph */}
          <p
            className={`mt-3 text-[15px] sm:text-[20px] font-medium leading-snug max-w-3xl mx-auto transition-colors duration-500 ${
              isDarkMode ? 'text-[#CBD5E1]' : 'text-[#52525B]'
            }`}
          >
            <span className="block">Discover opportunities. Define direction. Design experiences.</span>
            <span className="block mt-0.5">Build foundations. Scale with confidence.</span>
          </p>
        </motion.div>

        {/* 5-COLUMN SYSTEM PIPELINE GRID */}
        <div className="relative">

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 items-stretch relative z-10">
            {processColumnsData.map((col, idx) => {
              const ColIcon = col.icon;
              const isActive = idx === activeColumn;

              return (
                <motion.div
                  key={col.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setActiveColumn(idx)}
                  whileHover={{ y: -8, scale: 1.015 }}
                  className={`group cursor-pointer rounded-3xl p-5 sm:p-6 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden backdrop-blur-2xl border ${
                    isActive
                      ? isDarkMode
                        ? 'bg-[#18181B] text-white border-[#F97316] shadow-[0_20px_50px_-10px_rgba(249,115,22,0.3)] ring-1 ring-[#F97316]/50'
                        : 'bg-white text-[#111111] border-[#F97316] shadow-[0_20px_50px_-12px_rgba(249,115,22,0.22)] ring-1 ring-[#F97316]/40'
                      : isDarkMode
                      ? 'bg-[#111111]/80 text-[#D4D4D8] border-[#27272A] hover:border-[#F97316]/60 hover:bg-[#18181B]'
                      : 'bg-[#FAFAFA]/90 text-[#111111] border-[#E4E4E7] hover:border-[#F97316]/50 hover:bg-white shadow-xs'
                  }`}
                >
                  {/* TOP BRAND LASER BEAM HIGHLIGHT */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#FDBA74] transition-opacity duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />

                  {/* STEP 1: LUMINOUS 3D BRAND ORANGE ICON BADGE (h-[68px]) */}
                  <div className="h-[68px] w-full flex items-center justify-center text-center mb-1 relative z-10">
                    <div className="relative">
                      {/* Outer Glow Halo Ring */}
                      <div
                        className={`absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-[#F97316] to-[#FDBA74] blur-sm transition-opacity duration-300 ${
                          isActive ? 'opacity-80' : 'opacity-20 group-hover:opacity-100'
                        }`}
                      />
                      
                      <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl flex items-center justify-center font-bold relative bg-gradient-to-br from-[#F97316] via-[#FB923C] to-[#EA580C] text-white shadow-lg shadow-[#F97316]/30 border border-[#FDBA74]/50 group-hover:rotate-6 group-hover:scale-105 transition-all duration-300">
                        <ColIcon className="w-8 h-8 sm:w-9 sm:h-9 text-white drop-shadow-sm" />
                      </div>
                    </div>
                  </div>

                  {/* STEP 2: COLUMN TITLE (Silver Gradient in Dark Mode) */}
                  <div className="h-[42px] w-full flex items-center justify-center text-center my-1 relative z-10">
                    <h3
                      className={`font-display text-[26px] sm:text-[32px] font-black tracking-tight leading-none text-center block ${
                        isDarkMode ? 'text-silver-gradient' : 'text-[#111111]'
                      }`}
                    >
                      {col.title}
                    </h3>
                  </div>

                  {/* STEP 3: VIBRANT BRAND ORANGE TAGLINE */}
                  <div className="h-[44px] w-full flex items-center justify-center text-center mb-3 relative z-10">
                    <h4 className="text-[17px] sm:text-[19px] font-black tracking-tight text-center block text-[#F97316] drop-shadow-2xs">
                      <span className="block leading-none">{col.taglineLine1}</span>
                      <span className="block leading-none mt-1">{col.taglineLine2}</span>
                    </h4>
                  </div>

                  {/* STEP 4: BODY DESCRIPTION */}
                  <div className="h-[80px] w-full flex flex-col items-center justify-center text-center mb-5 px-1 relative z-10">
                    <p
                      className={`text-[13px] sm:text-[15px] font-medium tracking-tight text-center ${
                        isDarkMode ? 'text-[#CBD5E1]' : 'text-[#52525B]'
                      }`}
                    >
                      <span className="block leading-[1.2]">{col.descLine1}</span>
                      <span className="block leading-[1.2]">{col.descLine2}</span>
                      <span className="block leading-[1.2]">{col.descLine3}</span>
                      <span className="block leading-[1.2]">{col.descLine4}</span>
                    </p>
                  </div>

                  {/* STEP 5: 2 ROWS x 2 COLUMNS HIGH-END CAPABILITIES MATRIX TILES */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-2.5 w-full relative z-10">
                    {col.subNodes.map((sub, sIdx) => {
                      const SubIcon = sub.icon;

                      return (
                        <div
                          key={sIdx}
                          className={`group/tile p-2.5 sm:p-3 rounded-2xl border flex flex-col items-center justify-center text-center transition-all duration-300 h-[78px] ${
                            isDarkMode
                              ? 'bg-[#111111] text-[#E2E8F0] border-[#27272A] hover:border-[#F97316] hover:bg-[#18181B] hover:shadow-md hover:shadow-[#F97316]/15'
                              : 'bg-white text-[#111111] border-[#E4E4E7] hover:border-[#F97316] hover:bg-[#FFF7ED] hover:shadow-md hover:shadow-[#F97316]/15'
                          }`}
                        >
                          <SubIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5 mb-1 shrink-0 text-[#F97316] group-hover/tile:scale-110 transition-transform duration-300" />
                          <span className="text-[13px] sm:text-[15px] font-bold tracking-tight text-center leading-tight whitespace-normal break-words">
                            {sub.title}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
