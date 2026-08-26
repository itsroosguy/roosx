import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../data/agencyData';
import { Project } from '../types';
import { Eye, ArrowRight, Sparkles, Filter } from 'lucide-react';
import confetti from 'canvas-confetti';

interface WorksPageProps {
  onSelectProject: (project: Project) => void;
  onOpenInquiry: () => void;
  isDarkMode?: boolean;
  onNavigateHome: () => void;
}

export const WorksPage: React.FC<WorksPageProps> = ({
  onSelectProject,
  onOpenInquiry,
  isDarkMode = true,
  onNavigateHome,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'branding', label: 'Brand Identity' },
    { id: 'web-app', label: 'Web Platforms & Apps' },
    { id: '3d-spatial', label: '3D & Spatial UI' },
    { id: 'ai-motion', label: 'AI & Motion' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#FF7A1A', '#FF8833', '#FFFFFF', '#EA580C'],
    });
  };

  return (
    <div
      className={`min-h-screen relative overflow-hidden font-sans pt-28 pb-24 transition-colors duration-500 selection:bg-[#FF7A1A] selection:text-white ${
        isDarkMode ? 'bg-[#050505] text-[#D4D4D8]' : 'bg-[#FAF9F6] text-[#111111]'
      }`}
    >
      {/* Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-gradient-to-b from-[#FF7A1A]/18 via-[#FF7A1A]/4 to-transparent blur-[160px] pointer-events-none -z-10" />

      {/* Background Mesh */}
      <div className="fixed inset-0 bg-[size:4rem_4rem] bg-[linear-gradient(to_right,#FF7A1A08_1px,transparent_1px),linear-gradient(to_bottom,#FF7A1A08_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_40%,#000_80%,transparent_100%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
        
        {/* HERO SECTION */}
        <section className="text-center max-w-4xl mx-auto space-y-6 pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121215] border border-zinc-800 text-xs font-sans font-semibold text-[#FF7A1A] shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7A1A]" />
            <span>FEATURED PORTFOLIO & CASE STUDIES</span>
          </div>

          <h1 className={`font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] ${
            isDarkMode ? 'text-white' : 'text-[#111111]'
          }`}>
            Selected Works & <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#FF7A1A] via-[#FF8833] to-amber-500 bg-clip-text text-transparent">
              Client Transformations.
            </span>
          </h1>

          <p className={`text-base sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed ${
            isDarkMode ? 'text-zinc-300' : 'text-zinc-600'
          }`}>
            Explore our latest brand identities, Next.js web applications, and automated growth platforms built for high-growth businesses.
          </p>
        </section>

        {/* CATEGORY FILTER TABS */}
        <section className="space-y-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-zinc-800 pb-6">
            <div className="flex items-center gap-2 text-sm font-sans font-bold text-[#FF7A1A]">
              <Filter className="w-4 h-4" />
              <span>FILTER BY CATEGORY</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-sans font-semibold transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-[#FF7A1A] text-white shadow-lg shadow-[#FF7A1A]/30 scale-105'
                      : isDarkMode
                        ? 'bg-[#121215] border border-zinc-800 text-zinc-400 hover:text-white'
                        : 'bg-white border border-zinc-200 text-zinc-600 hover:text-black'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* PROJECTS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onClick={() => onSelectProject(project)}
                  className={`rounded-3xl border overflow-hidden cursor-pointer group transition-all duration-500 hover:scale-[1.02] shadow-xl ${
                    isDarkMode
                      ? 'bg-[#0A0A0C] border-zinc-800 hover:border-[#FF7A1A]/70'
                      : 'bg-white border-zinc-200 hover:border-[#FF7A1A]/70'
                  }`}
                >
                  {/* IMAGE CONTAINER */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-mono text-xs font-bold border border-white/20">
                        {project.client}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      {project.metrics && project.metrics.length > 0 && (
                        <span className="px-3 py-1 rounded-full bg-[#FF7A1A] text-white font-mono text-xs font-bold">
                          {project.metrics[0].label}: {project.metrics[0].value}
                        </span>
                      )}

                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-[#FF7A1A] transition-colors">
                        <Eye className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* CONTENT INFO */}
                  <div className="p-6 sm:p-8 space-y-3">
                    <h3 className={`font-display text-2xl font-black transition-colors ${
                      isDarkMode ? 'text-white group-hover:text-[#FF7A1A]' : 'text-[#111111] group-hover:text-[#FF7A1A]'
                    }`}>
                      {project.title}
                    </h3>
                    <p className={`text-xs sm:text-sm font-medium leading-relaxed ${
                      isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
                    }`}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800/40">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold ${
                            isDarkMode
                              ? 'bg-[#121215] border border-zinc-800 text-zinc-300'
                              : 'bg-zinc-100 border border-zinc-200 text-zinc-700'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className={`p-10 sm:p-16 rounded-[36px] border text-center space-y-6 relative overflow-hidden backdrop-blur-2xl shadow-2xl ${
          isDarkMode ? 'bg-[#0A0A0C] border-[#FF7A1A]/40' : 'bg-white border-[#FF7A1A]/40'
        }`}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#FF7A1A] to-transparent" />

          <h2 className={`font-display text-3xl sm:text-5xl md:text-6xl font-black tracking-tight ${
            isDarkMode ? 'text-white' : 'text-[#111111]'
          }`}>
            Have A Project In Mind?
          </h2>

          <p className={`text-base sm:text-xl font-medium max-w-2xl mx-auto ${
            isDarkMode ? 'text-zinc-300' : 'text-zinc-600'
          }`}>
            Let's discuss how we can build your next brand identity, web application, or automated growth engine.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                triggerConfetti();
                onOpenInquiry();
              }}
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-[#FF7A1A] hover:bg-[#FF8833] text-white font-sans font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-[#FF7A1A]/30 cursor-pointer flex items-center justify-center gap-3 group hover:scale-105 active:scale-95"
            >
              <span>Start A Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onNavigateHome}
              className={`w-full sm:w-auto px-8 py-5 rounded-full font-sans font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${
                isDarkMode
                  ? 'bg-[#121215] border border-zinc-800 text-zinc-300 hover:text-white'
                  : 'bg-zinc-100 border border-zinc-300 text-zinc-800 hover:text-black'
              }`}
            >
              Back To Overview
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
