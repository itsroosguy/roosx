import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, Clock, Calendar, Share2, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogPostModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onOpenInquiry: () => void;
  isDarkMode?: boolean;
}

export const BlogPostModal: React.FC<BlogPostModalProps> = ({
  post,
  onClose,
  onOpenInquiry,
  isDarkMode = true,
}) => {
  if (!post) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.subtitle,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex justify-center p-2 sm:p-4 lg:p-6">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={`w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl relative border my-auto transition-colors duration-500 ${
            isDarkMode
              ? 'bg-[#0E0E10] text-[#E4E4E7] border-[#27272A]'
              : 'bg-[#FAFAFA] text-[#111111] border-zinc-200'
          }`}
        >
          {/* FLOATING TOP ACTION BAR */}
          <div
            className={`sticky top-0 z-40 px-6 py-4 flex items-center justify-between backdrop-blur-xl border-b transition-colors ${
              isDarkMode
                ? 'bg-[#0E0E10]/90 border-[#27272A]'
                : 'bg-[#FAFAFA]/90 border-zinc-200'
            }`}
          >
            <button
              onClick={onClose}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                isDarkMode
                  ? 'bg-[#18181B] text-zinc-300 hover:text-white hover:bg-[#27272A]'
                  : 'bg-zinc-200/80 text-zinc-700 hover:text-black hover:bg-zinc-300'
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#FF7A1A]" />
              <span>Back to Insights</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={handleShare}
                aria-label="Share article"
                className={`p-2 rounded-full transition-all cursor-pointer ${
                  isDarkMode
                    ? 'bg-[#18181B] text-zinc-300 hover:text-white hover:bg-[#27272A]'
                    : 'bg-zinc-200/80 text-zinc-700 hover:text-black hover:bg-zinc-300'
                }`}
              >
                <Share2 className="w-4 h-4" />
              </button>

              <button
                onClick={onClose}
                aria-label="Close modal"
                className={`p-2 rounded-full transition-all cursor-pointer ${
                  isDarkMode
                    ? 'bg-[#18181B] text-zinc-300 hover:text-white hover:bg-[#27272A]'
                    : 'bg-zinc-200/80 text-zinc-700 hover:text-black hover:bg-zinc-300'
                }`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ARTICLE CONTENT CONTAINER */}
          <div className="p-6 sm:p-10 lg:p-12 space-y-10 max-w-3xl mx-auto">
            
            {/* META BADGES & CATEGORY */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-orange-500/10 border border-[#FF7A1A]/40 text-[#FF7A1A] font-mono text-xs font-bold uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                  <Clock className="w-3.5 h-3.5 text-zinc-500" />
                  {post.readTime}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  {post.date}
                </span>
              </div>

              {/* ARTICLE TITLE */}
              <h1
                className={`font-display text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.12] ${
                  isDarkMode ? 'text-white' : 'text-[#111111]'
                }`}
              >
                {post.title}
              </h1>

              <p className="text-base sm:text-lg text-zinc-400 font-medium leading-relaxed">
                {post.subtitle}
              </p>
            </div>

            {/* AUTHOR BYLINE CARD */}
            <div className="flex items-center gap-4 py-4 border-y border-zinc-500/20">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#FF7A1A]/60 shadow-md"
              />
              <div>
                <h4 className="font-display text-sm font-bold flex items-center gap-1.5 text-current">
                  {post.author.name} <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A1A]" />
                </h4>
                <p className="text-xs font-mono text-[#FF7A1A] font-semibold">
                  {post.author.role}
                </p>
              </div>
            </div>

            {/* INTRO PARAGRAPHS */}
            <div className="space-y-5 text-sm sm:text-base font-normal leading-relaxed text-zinc-300 dark:text-zinc-300">
              {post.content.intro.split('\n\n').map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* PROBLEM IMAGE METAPHOR #1: AUDITORIUM */}
            {post.problemImage && (
              <div className="space-y-3 my-8">
                <div className="rounded-2xl overflow-hidden border border-zinc-700/80 shadow-2xl relative group">
                  <img
                    src={post.problemImage}
                    alt="The Problem: Speaking to empty seats while noise wins outside"
                    className="w-full h-auto max-h-[480px] object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
                <p className="text-xs font-mono text-zinc-400 italic text-center max-w-xl mx-auto">
                  <strong className="text-[#FF7A1A]">Visual Metaphor 01:</strong> Presenting a brilliant product to empty chairs while crowds outside flock to loud, aggressive alternatives.
                </p>
              </div>
            )}

            {/* ARTICLE SECTIONS */}
            <div className="space-y-10 pt-4">
              {post.content.sections.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h2
                    className={`font-display text-xl sm:text-2xl font-bold tracking-tight ${
                      isDarkMode ? 'text-white' : 'text-[#111111]'
                    }`}
                  >
                    {section.heading}
                  </h2>

                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-sm sm:text-base leading-relaxed text-zinc-300">
                      {p}
                    </p>
                  ))}

                  {/* FORMULA HIGHLIGHT BOX */}
                  {section.formula && (
                    <div className="p-6 rounded-2xl bg-orange-500/10 border border-[#FF7A1A]/40 my-6 space-y-3">
                      <span className="text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-wider block">
                        ⚡ {section.formula.label}
                      </span>
                      <div className="font-mono text-base sm:text-lg font-black text-white bg-black/40 p-4 rounded-xl border border-orange-500/20 text-center tracking-wide text-[#FF7A1A]">
                        {section.formula.expression}
                      </div>
                      <p className="text-xs text-zinc-400 font-mono italic text-center">
                        {section.formula.explanation}
                      </p>
                    </div>
                  )}

                  {/* PULL QUOTE */}
                  {section.pullQuote && (
                    <blockquote className="my-6 p-5 rounded-2xl bg-zinc-900/80 border-l-4 border-[#FF7A1A] text-sm sm:text-base font-semibold italic text-zinc-200 shadow-md">
                      "{section.pullQuote}"
                    </blockquote>
                  )}

                  {/* BULLET POINTS */}
                  {section.bulletPoints && (
                    <ul className="space-y-3 my-4">
                      {section.bulletPoints.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base text-zinc-300">
                          <span className="w-2 h-2 rounded-full bg-[#FF7A1A] mt-2 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* PROBLEM IMAGE METAPHOR #2: WAREHOUSE */}
                  {section.imagePlacement === 'warehouse' && post.featuredImage && (
                    <div className="space-y-3 my-8">
                      <div className="rounded-2xl overflow-hidden border border-zinc-700/80 shadow-2xl relative group">
                        <img
                          src={post.featuredImage}
                          alt="The Hidden Product locked in a warehouse"
                          className="w-full h-auto max-h-[480px] object-cover group-hover:scale-[1.02] transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      </div>
                      <p className="text-xs font-mono text-zinc-400 italic text-center max-w-xl mx-auto">
                        <strong className="text-[#FF7A1A]">Visual Metaphor 02:</strong> A groundbreaking solution locked inside a glass box in a dark warehouse—surrounded by boxes labeled "GREAT IDEAS - NO AUDIENCE YET".
                      </p>
                    </div>
                  )}

                </div>
              ))}
            </div>

            {/* CONCLUSION */}
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/90 border border-zinc-800 space-y-4">
              <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FF7A1A]" />
                <span>Executive Summary & Takeaway</span>
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                {post.content.conclusion.split('\n\n').map((cPara, cIdx) => (
                  <p key={cIdx}>{cPara}</p>
                ))}
              </div>
            </div>

            {/* EXECUTIVE CALL TO ACTION CARD */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-orange-500/20 via-orange-950/20 to-black border border-[#FF7A1A]/40 text-center space-y-5 shadow-2xl">
              <h3 className="font-display text-xl sm:text-2xl font-black text-white">
                Don't Let Your Product Stay Hidden in the Closet
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-lg mx-auto leading-relaxed">
                Partner directly with Praveen Raj and Roos StudioX to engineer category-defining brand strategy, spatial web experiences, and high-visibility growth pipelines.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onOpenInquiry();
                }}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF7A1A] via-[#FF944D] to-[#EA580C] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#FF7A1A]/30 hover:scale-105 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Book Direct Founder Strategy Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
