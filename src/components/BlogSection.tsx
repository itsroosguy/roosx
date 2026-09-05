import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '../data/blogData';
import { BlogPost, Project } from '../types';
import { Portfolio } from './Portfolio';
import { ArrowUpRight, BookOpen, Clock, CheckCircle2, Layers } from 'lucide-react';

interface BlogSectionProps {
  onSelectPost: (post: BlogPost) => void;
  onSelectProject: (project: Project) => void;
  isDarkMode?: boolean;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  onSelectPost,
  onSelectProject,
  isDarkMode = true,
}) => {
  const [activeTab, setActiveTab] = useState<'insights' | 'case-studies'>('insights');

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  return (
    <section
      id="insights"
      className={`relative py-16 sm:py-24 transition-colors duration-500 overflow-hidden ${
        isDarkMode ? 'bg-[#0A0A0A] text-white' : 'bg-white text-[#111111]'
      }`}
    >
      {/* Background Architectural Mesh Grid */}
      <div
        className={`absolute inset-0 bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none ${
          isDarkMode
            ? 'bg-[linear-gradient(to_right,#27272A25_1px,transparent_1px),linear-gradient(to_bottom,#27272A25_1px,transparent_1px)]'
            : 'bg-[linear-gradient(to_right,#E4E4E760_1px,transparent_1px),linear-gradient(to_bottom,#E4E4E760_1px,transparent_1px)]'
        }`}
      />

      {/* Warm Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#FF7A1A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 space-y-10">
        
        {/* SECTION HEADER & DUAL TAB SWITCHER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b pb-8 border-zinc-200/20">
          <div className="space-y-2">
            <h2
              className={`font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-none ${
                isDarkMode ? 'text-silver-gradient' : 'text-[#111111]'
              }`}
            >
              Executive Insights <span className="text-[#FF7A1A]">&amp; Case Studies</span>
            </h2>
          </div>

          {/* DUAL TAB SWITCHER BUTTONS */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-md shrink-0">
            <button
              onClick={() => setActiveTab('insights')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'insights'
                  ? 'bg-gradient-to-r from-[#FF7A1A] to-[#EA580C] text-white shadow-lg shadow-[#FF7A1A]/30'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Featured Articles (Blog)</span>
            </button>

            <button
              onClick={() => setActiveTab('case-studies')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'case-studies'
                  ? 'bg-gradient-to-r from-[#FF7A1A] to-[#EA580C] text-white shadow-lg shadow-[#FF7A1A]/30'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Selected Case Studies</span>
            </button>
          </div>
        </div>

        {/* CONTENT SWITCHING: BULLETPROOF RE-RENDERING */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          {activeTab === 'insights' ? (
            <div className="space-y-12">
              {/* FEATURED BLOG POST HERO CARD */}
              <div
                onClick={() => onSelectPost(featuredPost)}
                className={`group rounded-3xl overflow-hidden border transition-all duration-500 cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-0 ${
                  isDarkMode
                    ? 'bg-[#0E0E10] border-zinc-800/90 hover:border-[#FF7A1A]/60 shadow-2xl shadow-black/80'
                    : 'bg-white border-zinc-200 hover:border-[#FF7A1A]/60 shadow-xl shadow-zinc-200/60'
                }`}
              >
                {/* FEATURED IMAGE STAGE (7 COLS) */}
                <div className="lg:col-span-7 relative overflow-hidden min-h-[340px] sm:min-h-[460px]">
                  <img
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-5 left-5">
                    <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[#FF7A1A] font-mono text-xs font-bold uppercase tracking-wider">
                      Featured Article
                    </span>
                  </div>
                </div>

                {/* FEATURED CONTENT TEXT BLOCK (5 COLS) */}
                <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                      <span className="text-[#FF7A1A] font-bold">{featuredPost.category}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-zinc-500" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h3
                      className={`font-display text-2xl sm:text-3xl font-black tracking-tight leading-tight group-hover:text-[#FF7A1A] transition-colors ${
                        isDarkMode ? 'text-white' : 'text-[#111111]'
                      }`}
                    >
                      {featuredPost.title}
                    </h3>

                    <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
                      {featuredPost.excerpt}
                    </p>
                    {/* 7-8 LINE EXECUTIVE INTRO TEASER CONTENT */}
                    <div className="space-y-3 pt-3 border-t border-zinc-800/80">
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal italic">
                        Thousands of startups die every year, and it is rarely because the product was bad or the founders lacked talent. Most of the time, they die quietly in the dark simply because nobody knew they existed.
                      </p>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                        Founders pour months obsessing over every line of code, assuming great engineering speaks for itself. But market dynamics follow a strict multiplication law: multiply extraordinary product code by zero visibility, and your revenue remains zero.
                      </p>
                      <p className="text-xs text-[#FF7A1A] font-mono font-bold tracking-wide flex items-center gap-1.5 pt-1">
                        <span>Read the full strategic breakdown inside →</span>
                      </p>
                    </div>
                  </div>

                  {/* AUTHOR & READ BUTTON */}
                  <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        className="w-10 h-10 rounded-full object-cover border border-[#FF7A1A]"
                      />
                      <div>
                        <span className="text-xs font-bold text-current flex items-center gap-1">
                          {featuredPost.author.name} <CheckCircle2 className="w-3 h-3 text-[#FF7A1A]" />
                        </span>
                        <span className="text-[10px] font-mono text-zinc-500 block">
                          {featuredPost.author.role}
                        </span>
                      </div>
                    </div>

                    <div className="px-4 py-2 rounded-full bg-[#FF7A1A]/15 border border-[#FF7A1A]/40 text-[#FF7A1A] font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 group-hover:bg-[#FF7A1A] group-hover:text-white transition-all shadow-md">
                      <span>Read Article</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* CASE STUDIES VIEW */
            <div>
              <Portfolio onSelectProject={onSelectProject} isDarkMode={isDarkMode} />
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
};
