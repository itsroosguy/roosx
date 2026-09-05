import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Share2, Sparkles, CheckCircle2, Copy, Check, ExternalLink } from 'lucide-react';
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
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const shareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [post]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (shareRef.current && !shareRef.current.contains(event.target as Node)) {
        setIsShareMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  const articleUrl = typeof window !== 'undefined' ? window.location.href : `https://roosstudiox.com/#blog/${post.slug}`;

  const shareLinks = [
    {
      name: 'X (Twitter)',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(articleUrl)}`,
      color: 'hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10',
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
        </svg>
      ),
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`,
      color: 'hover:text-[#0077B5] hover:bg-[#0077B5]/10',
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.69c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 3h-2.34v6.8c4.56-.93 8-4.96 8-9.8z" />
        </svg>
      ),
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`,
      color: 'hover:text-[#1877F2] hover:bg-[#1877F2]/10',
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.78 14.15c-.24.68-1.42 1.33-1.97 1.37-.52.04-1.19.19-3.92-.91-3.28-1.33-5.38-4.66-5.55-4.88-.16-.22-1.32-1.75-1.32-3.34 0-1.59.83-2.37 1.13-2.69.3-.32.65-.4.87-.4.22 0 .43.01.62.01.2 0 .46-.07.72.55.26.63.89 2.18.97 2.34.08.16.13.35.02.57-.11.22-.17.36-.34.56-.17.2-.36.45-.51.6-.16.16-.33.34-.14.67.19.33.85 1.4 1.82 2.27 1.26 1.12 2.31 1.47 2.64 1.63.33.16.52.14.71-.08.2-.22.84-.98 1.07-1.32.22-.34.45-.28.75-.17.3.11 1.91.9 2.24 1.06.33.16.55.24.63.38.08.14.08.81-.16 1.49z" />
        </svg>
      ),
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${post.title} — ${articleUrl}`)}`,
      color: 'hover:text-[#25D366] hover:bg-[#25D366]/10',
    },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(articleUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
        
        {/* TOP NAVIGATION BACK BAR & CUSTOM SHARE DROPDOWN */}
        <div className="flex items-center justify-between border-b pb-6 border-zinc-500/20 relative">
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

          {/* CUSTOM SOCIAL SHARE POPOVER CONTAINER */}
          <div className="relative" ref={shareRef}>
            <button
              onClick={() => setIsShareMenuOpen(!isShareMenuOpen)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold transition-all cursor-pointer border ${
                isShareMenuOpen
                  ? 'bg-[#FF7A1A] text-white border-[#FF7A1A] shadow-md shadow-[#FF7A1A]/30'
                  : isDarkMode
                  ? 'bg-[#18181B] text-zinc-300 border-[#27272A] hover:text-white hover:border-[#FF7A1A]/60'
                  : 'bg-white text-zinc-700 border-zinc-200 hover:text-black hover:border-[#FF7A1A]/60 shadow-sm'
              }`}
            >
              <Share2 className="w-4 h-4" />
              <span>Share Article</span>
            </button>

            {/* CUSTOM SOCIAL SHARE POPOVER MENU */}
            <AnimatePresence>
              {isShareMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute right-0 mt-3 w-64 rounded-2xl p-3 shadow-2xl border backdrop-blur-xl z-50 space-y-1 ${
                    isDarkMode
                      ? 'bg-[#121215]/95 border-[#27272A] text-white shadow-black/80'
                      : 'bg-white/95 border-zinc-200 text-[#111111] shadow-zinc-300/80'
                  }`}
                >
                  <div className="px-3 py-1.5 border-b border-zinc-800/60 mb-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FF7A1A] block">
                      Share This Article
                    </span>
                  </div>

                  {shareLinks.map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsShareMenuOpen(false)}
                      className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                        isDarkMode ? 'text-zinc-300 hover:text-white' : 'text-zinc-700 hover:text-black'
                      } ${platform.color}`}
                    >
                      <div className="flex items-center gap-2.5">
                        {platform.icon}
                        <span>{platform.name}</span>
                      </div>
                      <ExternalLink className="w-3 h-3 opacity-50" />
                    </a>
                  ))}

                  <button
                    onClick={copyToClipboard}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                      copied
                        ? 'bg-orange-500/20 text-[#FF7A1A] font-bold'
                        : isDarkMode
                        ? 'text-zinc-300 hover:text-white hover:bg-zinc-800/60'
                        : 'text-zinc-700 hover:text-black hover:bg-zinc-100'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {copied ? <Check className="w-4 h-4 text-[#FF7A1A]" /> : <Copy className="w-4 h-4 text-zinc-400" />}
                      <span>{copied ? 'Link Copied!' : 'Copy Direct Link'}</span>
                    </div>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
