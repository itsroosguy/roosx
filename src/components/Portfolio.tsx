import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../data/agencyData';
import { Project } from '../types';
import { Eye, ArrowUpRight } from 'lucide-react';

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
  isDarkMode?: boolean;
}

export const Portfolio: React.FC<PortfolioProps> = ({
  onSelectProject,
  isDarkMode = false,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Case Studies' },
    { id: '3d-spatial', label: '3D & Spatial UI' },
    { id: 'branding', label: 'Brand Identity' },
    { id: 'web-app', label: 'Web Apps & Fintech' },
    { id: 'ai-motion', label: 'AI & Motion' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portfolio"
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

      {/* Dynamic Brand Ambient Backlight */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#F97316]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <h2
              className={`font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-none ${
                isDarkMode ? 'text-silver-gradient' : 'text-[#111111]'
              }`}
            >
              Proven Growth{' '}
              <span className="bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#FDBA74] bg-clip-text text-transparent">
                Case Studies
              </span>
            </h2>
          </div>

          {/* Category Filter Pills (Mobile Swipeable) */}
          <div
            className={`flex items-center gap-2 p-1.5 rounded-2xl border backdrop-blur-xl overflow-x-auto scrollbar-none max-w-full -mx-2 px-2 sm:mx-0 sm:px-1 shrink-0 ${
              isDarkMode
                ? 'bg-[#18181B]/80 border-[#27272A]'
                : 'bg-[#FAFAFA] border-[#E4E4E7]'
            }`}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition-all duration-300 relative cursor-pointer ${
                  activeCategory === cat.id
                    ? 'text-white'
                    : isDarkMode
                    ? 'text-[#D4D4D8] hover:text-white'
                    : 'text-[#52525B] hover:text-[#111111]'
                }`}
              >
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activePortfolioCategoryPill"
                    className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#EA580C] rounded-xl -z-10 shadow-md shadow-[#F97316]/30"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ALL 4 CASE STUDIES IN EXACTLY 1 ROW (4 COLUMNS) */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => onSelectProject(project)}
                className={`group relative rounded-3xl border overflow-hidden cursor-pointer transition-all duration-500 flex flex-col justify-between backdrop-blur-xl ${
                  isDarkMode
                    ? 'bg-[#111111]/90 border-[#27272A] hover:border-[#F97316] hover:shadow-[0_20px_50px_-10px_rgba(249,115,22,0.25)]'
                    : 'bg-white border-[#E4E4E7] hover:border-[#F97316] hover:shadow-[0_20px_50px_-10px_rgba(249,115,22,0.18)] shadow-xs'
                }`}
              >
                {/* Thumbnail Image Container */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900 shrink-0">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
                    <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider bg-[#0A0A0A]/85 backdrop-blur-md text-[#FDBA74] border border-[#FDBA74]/40 shadow-sm">
                      {project.categoryLabel}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-mono bg-[#0A0A0A]/85 backdrop-blur-md text-white border border-white/20 shadow-sm">
                      {project.year}
                    </span>
                  </div>

                  {/* View Details Floating Hover Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="px-4 py-2 rounded-full bg-[#F97316] text-white font-bold text-xs flex items-center gap-1.5 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 shadow-xl shadow-[#F97316]/40 border border-[#FDBA74]/50">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Explore Case Study</span>
                    </div>
                  </div>
                </div>

                {/* Card Info Content */}
                <div
                  className={`p-5 sm:p-6 flex flex-col justify-between flex-1 relative z-10 ${
                    isDarkMode ? 'bg-[#111111]' : 'bg-white'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <div className="text-[11px] font-mono font-bold text-[#F97316] uppercase tracking-widest mb-0.5">
                          {project.client}
                        </div>
                        <h3
                          className={`font-display text-lg sm:text-xl font-bold transition-colors leading-tight group-hover:text-[#F97316] ${
                            isDarkMode ? 'text-white' : 'text-[#111111]'
                          }`}
                        >
                          {project.title}
                        </h3>
                      </div>

                      <div
                        className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm ${
                          isDarkMode
                            ? 'bg-[#18181B] border-[#27272A] text-white group-hover:bg-[#F97316] group-hover:border-[#F97316]'
                            : 'bg-[#FAFAFA] border-[#E4E4E7] text-[#111111] group-hover:bg-[#F97316] group-hover:text-white group-hover:border-[#F97316]'
                        }`}
                      >
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>

                    <p
                      className={`text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4 ${
                        isDarkMode ? 'text-[#D4D4D8]' : 'text-[#52525B]'
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Project Metrics snippet */}
                  <div
                    className={`pt-3 border-t flex items-center justify-between gap-2 mt-auto ${
                      isDarkMode ? 'border-[#27272A]' : 'border-[#E4E4E7]'
                    }`}
                  >
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 2).map((tag, idx) => (
                        <span
                          key={idx}
                          className={`px-2 py-0.5 rounded-md text-[10px] font-medium border ${
                            isDarkMode
                              ? 'bg-[#18181B] text-[#D4D4D8] border-[#27272A]'
                              : 'bg-[#F4F4F5] text-[#52525B] border-[#E4E4E7]'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="text-right shrink-0">
                      <div className="font-display font-black text-xs sm:text-sm text-[#F97316]">
                        {project.metrics[0]?.value}
                      </div>
                      <div
                        className={`text-[9px] uppercase font-mono ${
                          isDarkMode ? 'text-[#D4D4D8]' : 'text-[#52525B]'
                        }`}
                      >
                        {project.metrics[0]?.label}
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
