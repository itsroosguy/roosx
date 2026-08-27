import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../data/agencyData';
import { Project } from '../types';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
  isDarkMode?: boolean;
}

export const Portfolio: React.FC<PortfolioProps> = ({
  onSelectProject,
  isDarkMode = true,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Engagements' },
    { id: '3d-spatial', label: 'Spatial UI & Motion' },
    { id: 'branding', label: 'Brand Architecture' },
    { id: 'web-app', label: 'Platforms & Fintech' },
    { id: 'ai-motion', label: 'AI & Interactive' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      className={`relative py-20 sm:py-32 transition-colors duration-500 overflow-hidden ${
        isDarkMode ? 'bg-[#0A0A0C] text-white' : 'bg-[#FAF9F6] text-[#111111]'
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

      {/* Dynamic Brand Ambient Backlight */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#FF7A1A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7A1A]/10 border border-[#FF7A1A]/30 text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> ACTIVE ENGAGEMENTS & PRIVATE BUILDS
            </div>
            
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none">
              Selected Digital <span className="bg-gradient-to-r from-[#FF7A1A] via-[#FFA665] to-amber-500 bg-clip-text text-transparent">Transformations</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div
            className={`flex items-center gap-2 p-1.5 rounded-2xl border backdrop-blur-xl overflow-x-auto scrollbar-none max-w-full shrink-0 ${
              isDarkMode
                ? 'bg-[#121215] border-zinc-800'
                : 'bg-white border-zinc-200'
            }`}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 relative cursor-pointer ${
                  activeCategory === cat.id
                    ? 'text-white'
                    : isDarkMode
                    ? 'text-zinc-400 hover:text-white'
                    : 'text-zinc-600 hover:text-[#111111]'
                }`}
              >
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activePortfolioCategoryPill"
                    className="absolute inset-0 bg-[#FF7A1A] rounded-xl -z-10 shadow-md shadow-[#FF7A1A]/30"
                  />
                )}
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-COLUMN PROJECT GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group relative rounded-[32px] border overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.015] shadow-2xl flex flex-col justify-between ${
                  isDarkMode
                    ? 'bg-[#121215] border-zinc-800/90 hover:border-[#FF7A1A]/70 shadow-black/80'
                    : 'bg-white border-zinc-200 hover:border-[#FF7A1A]/70 shadow-zinc-200'
                }`}
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Top Client Badge */}
                  <div className="absolute top-5 right-5">
                    <span className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-white font-mono text-xs font-bold border border-white/20">
                      {project.client}
                    </span>
                  </div>

                  {/* Bottom Metric Capsule & Arrow */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                    {project.metrics && project.metrics.length > 0 && (
                      <span className="px-3.5 py-1.5 rounded-full bg-[#FF7A1A] text-white font-mono text-xs font-bold shadow-md shadow-[#FF7A1A]/30">
                        {project.metrics[0].label}: {project.metrics[0].value}
                      </span>
                    )}

                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-[#FF7A1A] transition-colors ml-auto">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6 sm:p-8 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-wider">
                      {project.categoryLabel}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">{project.year}</span>
                  </div>

                  <h3 className={`font-display text-2xl sm:text-3xl font-black transition-colors ${
                    isDarkMode ? 'text-white group-hover:text-[#FF7A1A]' : 'text-[#111111] group-hover:text-[#FF7A1A]'
                  }`}>
                    {project.title}
                  </h3>

                  <p className={`text-xs sm:text-sm font-medium leading-relaxed ${
                    isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-3 border-t border-zinc-800/60">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold ${
                          isDarkMode ? 'bg-[#18181C] text-zinc-300 border border-zinc-800' : 'bg-zinc-100 text-zinc-700 border border-zinc-200'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
