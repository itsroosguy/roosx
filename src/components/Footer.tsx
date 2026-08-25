import React, { useState } from 'react';
import { Logo } from './Logo';
import { ArrowUp, Send, Mail, Phone } from 'lucide-react';
import { AlphaRoosButton } from './AlphaRoosButton';

interface FooterProps {
  onOpenInquiry?: () => void;
  isDarkMode?: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenInquiry,
  isDarkMode = true,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer
      className={`relative z-10 w-full pt-16 pb-12 border-t transition-colors duration-500 overflow-hidden ${
        isDarkMode
          ? 'bg-[#0A0A0A] text-[#D4D4D8] border-[#27272A]'
          : 'bg-white text-[#111111] border-[#E4E4E7]'
      }`}
    >
      {/* Brand Orange Radial Spotlight Backlight Glow */}
      <div className="absolute top-0 left-1/4 w-[850px] h-[380px] bg-radial from-[#F97316]/15 via-[#F97316]/5 to-transparent blur-[140px] pointer-events-none" />

      {/* FULL BLEED EDGE-TO-EDGE BALANCED CONTAINER */}
      <div className="w-full px-6 sm:px-12 lg:px-16 relative z-10 font-sans">
        <div className="max-w-[1750px] mx-auto">
          
          {/* LEFT-ALIGNED WELL-BALANCED FOOTER GRID */}
          <div
            className={`grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b text-left items-start ${
              isDarkMode ? 'border-[#27272A]' : 'border-[#E4E4E7]'
            }`}
          >
            
            {/* BRAND & STUDIO INFO (5 COLS) */}
            <div className="md:col-span-5 flex flex-col items-start text-left space-y-4">
              <a href="#" className="inline-flex items-center justify-start">
                <Logo isScrolled={true} isDarkMode={isDarkMode} />
              </a>

              <p className="text-sm leading-relaxed max-w-md text-left font-medium">
                Roos StudioX helps businesses build stronger brands, create high-performing digital experiences and develop scalable systems for growth. We combine strategy, design and technology to attract the right audience, strengthen customer trust and drive measurable business results.
                <span className="block mt-1.5 font-semibold">Our focus is simple: turning digital presence into sustainable growth.</span>
              </p>

              {/* Clickable Direct Contact Links */}
              <div className="pt-1 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#F97316]">
                <a
                  href="mailto:praveen@roosstudio.com"
                  className="hover:underline flex items-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>praveen@roosstudio.com</span>
                </a>
                <span className="opacity-40">•</span>
                <a
                  href="tel:+910829026600"
                  className="hover:underline flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+91 08290 26600</span>
                </a>
              </div>

              {/* Direct Project Inquiry Action */}
              {onOpenInquiry && (
                <div className="pt-2">
                  <AlphaRoosButton
                    text="Get Your Free Audit"
                    onClick={onOpenInquiry}
                    isDarkMode={isDarkMode}
                    compact
                  />
                </div>
              )}
            </div>

            {/* QUICK LINKS (3 COLS) */}
            <div className="md:col-span-3 flex flex-col items-start text-left space-y-3">
              <h4
                className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                  isDarkMode ? 'text-white' : 'text-[#111111]'
                }`}
              >
                Navigation
              </h4>
              <ul className="space-y-2.5 text-sm font-medium flex flex-col items-start">
                <li>
                  <a href="#portfolio" className="hover:text-[#F97316] transition-colors">
                    Featured Case Studies
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#F97316] transition-colors">
                    Bento Services
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-[#F97316] transition-colors">
                    Execution Blueprint
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#F97316] transition-colors">
                    Frequently Asked Questions
                  </a>
                </li>
              </ul>
            </div>

            {/* NEWSLETTER DISPATCH (4 COLS) */}
            <div className="md:col-span-4 flex flex-col items-start text-left space-y-4">
              <h4
                className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                  isDarkMode ? 'text-white' : 'text-[#111111]'
                }`}
              >
                Subscribe to Design Intelligence
              </h4>
              <p className="text-xs font-medium max-w-xs text-left">
                Bi-weekly analysis of WebGL shaders, React micro-interactions, and spatial UX.
              </p>

              {!subscribed ? (
                <form onSubmit={handleNewsletter} className="flex gap-2 w-full max-w-sm">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your work email"
                    className={`w-full px-4 py-2.5 rounded-xl text-xs font-medium focus:outline-none focus:border-[#F97316] shadow-sm transition-all ${
                      isDarkMode
                        ? 'bg-[#18181B] border border-[#27272A] text-white placeholder-zinc-500 focus:shadow-[0_0_15px_rgba(249,115,22,0.25)]'
                        : 'bg-white border border-[#E4E4E7] text-[#111111] placeholder-zinc-400 focus:shadow-[0_0_15px_rgba(249,115,22,0.2)]'
                    }`}
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#EA580C] hover:opacity-95 text-white text-xs font-bold transition-all flex items-center justify-center gap-1 shrink-0 cursor-pointer shadow-lg shadow-[#F97316]/30 border border-[#FDBA74]/40"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Join</span>
                  </button>
                </form>
              ) : (
                <div className="p-3 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] text-xs font-semibold">
                  ✓ Subscribed! You will receive our next release dispatch.
                </div>
              )}
            </div>

          </div>

          {/* LEFT-ALIGNED BALANCED FOOTER BOTTOM BAR */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-left">
            <div>
              © {new Date().getFullYear()} Roos StudioX Inc. All rights reserved. • Creative Intelligence Engine
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={scrollToTop}
                className={`p-2.5 rounded-xl border hover:text-[#F97316] hover:border-[#F97316] transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer ${
                  isDarkMode
                    ? 'bg-[#18181B] border-[#27272A] text-[#D4D4D8] hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]'
                    : 'bg-white border-[#E4E4E7] text-[#52525B] hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]'
                }`}
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
                <span className="text-[11px] font-bold">TOP</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
