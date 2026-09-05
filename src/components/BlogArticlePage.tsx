import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Share2, Sparkles, CheckCircle2 } from 'lucide-react';
import { BlogPost } from '../types';
import { AlphaRoosButton } from './AlphaRoosButton';

interface BlogArticlePageProps {
  post: BlogPost | null;
  onNavigateBack: () => void;
  onOpenInquiry: () => void;
  isDarkMode?: boolean;
}

export const BlogArticlePage: React.FC<BlogArticlePageProps> = ({
  post,
  onNavigateBack,
  onOpenInquiry,
  isDarkMode = true,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen pt-36 pb-20 flex items-center justify-center text-center px-4">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Article Not Found</h2>
          <button
            onClick={onNavigateBack}
            className="px-6 py-3 rounded-full bg-[#111111] text-white text-xs font-mono font-bold uppercase tracking-wider cursor-pointer"
          >
            Return to Insights
          </button>
        </div>
      </div>
    );
  }

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`min-h-screen pt-28 sm:pt-36 pb-24 transition-colors duration-500 selection:bg-[#FF7A1A] selection:text-white ${
        isDarkMode ? 'bg-[#0A0A0A] text-[#E4E4E7]' : 'bg-[#FAF9F6] text-[#111111]'
      }`}
    >
      {/* Background Architectural Mesh Grid */}
      <div
        className={`fixed inset-0 bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none ${
          isDarkMode
            ? 'bg-[linear-gradient(to_right,#27272A25_1px,transparent_1px),linear-gradient(to_bottom,#27272A25_1px,transparent_1px)]'
            : 'bg-[linear-gradient(to_right,#E4E4E760_1px,transparent_1px),linear-gradient(to_bottom,#E4E4E760_1px,transparent_1px)]'
        }`}
      />

      {/* Ambient Warm Backlight */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* TOP NAVIGATION BACK BAR */}
        <div className="flex items-center justify-between border-b pb-6 border-zinc-500/20">
          <button
            onClick={onNavigateBack}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold transition-all cursor-pointer border ${
              isDarkMode
                ? 'bg-[#18181B] text-zinc-300 border-[#27272A] hover:text-white hover:border-[#FF7A1A]/60'
                : 'bg-white text-zinc-700 border-zinc-200 hover:text-black hover:border-[#FF7A1A]/60 shadow-sm'
            }`}
          >
            <ArrowLeft className="w-4 h-4 text-[#FF7A1A]" />
            <span>Back to Insights &amp; Articles</span>
          </button>

          <button
            onClick={handleShare}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold transition-all cursor-pointer border ${
              isDarkMode
                ? 'bg-[#18181B] text-zinc-300 border-[#27272A] hover:text-white hover:border-[#FF7A1A]/60'
                : 'bg-white text-zinc-700 border-zinc-200 hover:text-black hover:border-[#FF7A1A]/60 shadow-sm'
            }`}
          >
            <Share2 className="w-4 h-4 text-[#FF7A1A]" />
            <span>Share Article</span>
          </button>
        </div>

        {/* ARTICLE HERO HEADER */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-[#FF7A1A]/40 text-[#FF7A1A] font-mono text-xs font-bold uppercase tracking-wider">
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

          <h1
            className={`font-display text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.12] ${
              isDarkMode ? 'text-white' : 'text-[#111111]'
            }`}
          >
            {post.title}
          </h1>

          <p className="text-base sm:text-xl text-zinc-400 font-medium leading-relaxed max-w-3xl">
            {post.subtitle}
          </p>
        </div>

        {/* AUTHOR BYLINE CARD */}
        <div className="flex items-center gap-4 py-5 border-y border-zinc-500/20">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-[#FF7A1A]/80 shadow-md"
          />
          <div>
            <h4 className="font-display text-base font-bold flex items-center gap-1.5 text-current">
              {post.author.name} <CheckCircle2 className="w-4 h-4 text-[#FF7A1A]" />
            </h4>
            <p className="text-xs font-mono text-[#FF7A1A] font-semibold">
              {post.author.role}
            </p>
          </div>
        </div>

        {/* COVER HERO IMAGE */}
        <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl relative">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-auto max-h-[520px] object-cover filter contrast-[1.05]"
          />
        </div>

        {/* INTRO PARAGRAPHS */}
        <div className="space-y-6 text-base sm:text-lg font-normal leading-relaxed text-zinc-300 dark:text-zinc-300">
          {post.content.intro.split('\n\n').map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* PROBLEM IMAGE METAPHOR #1: AUDITORIUM */}
        {post.problemImage && (
          <div className="space-y-3 my-10">
            <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl relative group">
              <img
                src={post.problemImage}
                alt="The Problem: Speaking to empty seats while noise wins outside"
                className="w-full h-auto max-h-[520px] object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
            <p className="text-xs font-mono text-zinc-400 italic text-center max-w-xl mx-auto">
              <strong className="text-[#FF7A1A]">Visual Metaphor 01:</strong> Presenting a brilliant product to empty chairs while crowds outside flock to loud, aggressive alternatives.
            </p>
          </div>
        )}

        {/* ARTICLE SECTIONS */}
        <div className="space-y-12 pt-4">
          {post.content.sections.map((section, index) => (
            <div key={index} className="space-y-5">
              <h2
                className={`font-display text-2xl sm:text-3xl font-bold tracking-tight ${
                  isDarkMode ? 'text-white' : 'text-[#111111]'
                }`}
              >
                {section.heading}
              </h2>

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-base sm:text-lg leading-relaxed text-zinc-300">
                  {p}
                </p>
              ))}

              {/* FORMULA HIGHLIGHT BOX */}
              {section.formula && (
                <div className="p-6 sm:p-8 rounded-3xl bg-orange-500/10 border border-[#FF7A1A]/40 my-8 space-y-4 shadow-xl">
                  <span className="text-xs font-mono font-bold text-[#FF7A1A] uppercase tracking-wider block">
                    ⚡ {section.formula.label}
                  </span>
                  <div className="font-mono text-base sm:text-xl font-black text-white bg-black/60 p-5 rounded-2xl border border-orange-500/30 text-center tracking-wide text-[#FF7A1A]">
                    {section.formula.expression}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 font-mono italic text-center">
                    {section.formula.explanation}
                  </p>
                </div>
              )}

              {/* PULL QUOTE */}
              {section.pullQuote && (
                <blockquote className="my-8 p-6 rounded-2xl bg-zinc-900/90 border-l-4 border-[#FF7A1A] text-base sm:text-xl font-semibold italic text-zinc-100 shadow-xl">
                  "{section.pullQuote}"
                </blockquote>
              )}

              {/* BULLET POINTS */}
              {section.bulletPoints && (
                <ul className="space-y-4 my-6">
                  {section.bulletPoints.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3.5 text-base sm:text-lg text-zinc-300">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A1A] mt-2.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* PROBLEM IMAGE METAPHOR #2: WAREHOUSE */}
              {section.imagePlacement === 'warehouse' && post.featuredImage && (
                <div className="space-y-3 my-10">
                  <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl relative group">
                    <img
                      src={post.featuredImage}
                      alt="The Hidden Product locked in a warehouse"
                      className="w-full h-auto max-h-[520px] object-cover group-hover:scale-[1.02] transition-transform duration-700"
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
        <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/90 border border-zinc-800 space-y-5 shadow-2xl">
          <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#FF7A1A]" />
            <span>Executive Summary &amp; Takeaway</span>
          </h3>
          <div className="space-y-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
            {post.content.conclusion.split('\n\n').map((cPara, cIdx) => (
              <p key={cIdx}>{cPara}</p>
            ))}
          </div>
        </div>

        {/* EXECUTIVE CALL TO ACTION CARD */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-orange-500/20 via-orange-950/20 to-black border border-[#FF7A1A]/40 text-center space-y-6 shadow-2xl">
          <h3 className="font-display text-2xl sm:text-4xl font-black text-white">
            Don't Let Your Product Stay Hidden in the Closet
          </h3>
          <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto leading-relaxed">
            Partner directly with Praveen Raj and Roos StudioX to engineer category-defining brand strategy, spatial web experiences, and high-visibility growth pipelines.
          </p>
          <div className="flex justify-center pt-2">
            <AlphaRoosButton
              onClick={onOpenInquiry}
              isDarkMode={isDarkMode}
              text="Book Direct Founder Strategy Session"
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
};
