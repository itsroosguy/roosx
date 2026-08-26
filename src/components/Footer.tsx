import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { ArrowUp, Send, Mail, Phone, Globe, Clock, Check, Copy, ShieldCheck, Github, Linkedin, Twitter, Dribbble } from 'lucide-react';

interface FooterProps {
  onOpenInquiry?: () => void;
  isDarkMode?: boolean;
}

export const Footer: React.FC<FooterProps> = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('');

  // Live IST Clock update
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <footer
      className="relative z-10 w-full pt-20 pb-12 border-t border-zinc-900 bg-[#050505] text-[#D4D4D8] overflow-hidden font-sans"
    >
      {/* Top Laser Accent Beam */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FF7A1A]/70 to-transparent" />

      {/* Architectural Background Grid Mesh */}
      <div className="absolute inset-0 bg-[size:4rem_4rem] bg-[linear-gradient(to_right,#27272A15_1px,transparent_1px),linear-gradient(to_bottom,#27272A15_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />

      {/* Primary Brand Orange Radial Backlight Glow */}
      <div className="absolute top-0 left-1/3 w-[1000px] h-[450px] bg-radial from-[#FF7A1A]/18 via-[#FF7A1A]/4 to-transparent blur-[160px] pointer-events-none" />

      {/* Secondary Ambient Glow Orb */}
      <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-[#FF7A1A]/10 blur-[130px] pointer-events-none" />

      {/* GIANT KINETIC BACKGROUND TYPOGRAPHY WATERMARK */}
      <div className="absolute bottom-16 left-0 right-0 overflow-hidden pointer-events-none select-none opacity-5 flex justify-center">
        <span className="font-display text-[120px] sm:text-[180px] md:text-[240px] font-black tracking-tighter text-white whitespace-nowrap leading-none">
          ROOS STUDIOX
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* 1. TOP LIVE TELEMETRY BAR */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0A0A0C]/90 border border-zinc-800/90 backdrop-blur-xl flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-zinc-300 font-semibold tracking-wide">STUDIO STATUS: ACCEPTING Q3/Q4 PROJECTS</span>
          </div>

          <div className="flex items-center gap-6 text-zinc-400 font-medium">
            <div className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#FF7A1A]" />
              <span>BLR, IND</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#FF7A1A]" />
              <span>{currentTime || '12:00 AM IST'}</span>
            </div>
          </div>
        </div>

        {/* 2. MAIN FOOTER CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-left items-start pb-12 border-b border-zinc-800/80">
          
          {/* BRAND COLUMN (5 COLS) */}
          <div className="md:col-span-5 space-y-6">
            <a href="#" className="inline-block">
              <Logo isScrolled={true} isDarkMode={true} />
            </a>

            <p className="text-sm sm:text-base leading-relaxed text-zinc-300 font-medium max-w-md">
              Roos StudioX helps ambitious businesses build authority, craft high-converting digital products, and engineer scalable growth engines.
            </p>

            {/* DIRECT CONTACT CAPSULES WITH COPY ACTIONS & GST NUMBER */}
            <div className="space-y-2.5 pt-2">
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-sans">
                <button
                  onClick={() => copyToClipboard('praveen@roosstudiox.com', 'email')}
                  className="px-3.5 py-2 rounded-xl bg-[#121215] border border-zinc-800 text-zinc-200 hover:text-white hover:border-[#FF7A1A] transition-all flex items-center gap-2 cursor-pointer font-medium"
                >
                  <Mail className="w-3.5 h-3.5 text-[#FF7A1A]" />
                  <span>praveen@roosstudiox.com</span>
                  {copiedText === 'email' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3 h-3 text-zinc-500" />
                  )}
                </button>

                <button
                  onClick={() => copyToClipboard('+919629026600', 'phone')}
                  className="px-3.5 py-2 rounded-xl bg-[#121215] border border-zinc-800 text-zinc-200 hover:text-white hover:border-[#FF7A1A] transition-all flex items-center gap-2 cursor-pointer font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FF7A1A]" />
                  <span>+91 96290 26600</span>
                  {copiedText === 'phone' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3 h-3 text-zinc-500" />
                  )}
                </button>

                {/* GST NUMBER CAPSULE */}
                <div className="px-3.5 py-2 rounded-xl bg-[#121215] border border-zinc-800/90 text-zinc-300 font-medium flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF7A1A]" />
                  <span>GSTIN: 29BZKPP8182N1Z8</span>
                </div>
              </div>
            </div>
          </div>

          {/* NAVIGATION LINKS (3 COLS) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#FF7A1A]">
              SYSTEM MAP
            </h4>
            <ul className="space-y-3 text-sm font-medium text-zinc-300">
              <li>
                <a href="#our-story" className="hover:text-[#FF7A1A] transition-colors flex items-center gap-2">
                  <span>Our Story Documentary</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-sans bg-[#FF7A1A]/20 text-[#FF7A1A] font-bold">NEW</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FF7A1A] transition-colors">
                  Bento Services
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#FF7A1A] transition-colors">
                  The Momentum Engine
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#FF7A1A] transition-colors">
                  Featured Case Studies
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#FF7A1A] transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER INTEL DISPATCH (4 COLS) */}
          <div className="md:col-span-4 space-y-4">
            {!subscribed ? (
              <form onSubmit={handleNewsletter} className="flex gap-2 w-full pt-2 sm:pt-4">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your work email..."
                  className="w-full px-4 py-3 rounded-xl text-xs font-medium bg-[#121215] border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF7A1A] transition-all"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-[#FF7A1A] hover:bg-[#FF8833] text-white text-xs font-sans font-bold transition-all flex items-center justify-center gap-1.5 shrink-0 cursor-pointer shadow-lg shadow-[#FF7A1A]/30"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Join</span>
                </button>
              </form>
            ) : (
              <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-sans font-bold flex items-center gap-2 mt-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Subscribed!</span>
              </div>
            )}

            {/* SOCIAL MEDIA NETWORK LINKS */}
            <div className="pt-2 flex items-center gap-3">
              {[
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Github, href: 'https://github.com/itsroosguy/roosx', label: 'GitHub' },
                { icon: Dribbble, href: 'https://dribbble.com', label: 'Dribbble' },
              ].map((s, idx) => {
                const IconComp = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-xl bg-[#121215] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#FF7A1A] hover:bg-[#FF7A1A]/10 transition-all shadow-sm"
                  >
                    <IconComp className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* 3. BOTTOM COPYRIGHT & ELEVATOR TOP BUTTON */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-zinc-400 font-medium">
          <div>
            © {new Date().getFullYear()} Roos StudioX. All rights reserved. • GSTIN: 29BZKPP8182N1Z8
          </div>

          <button
            onClick={scrollToTop}
            className="px-4 py-2.5 rounded-full bg-[#121215] border border-zinc-800 text-[#D4D4D8] hover:text-white hover:border-[#FF7A1A] transition-all flex items-center gap-2 cursor-pointer shadow-md group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-[#FF7A1A] group-hover:-translate-y-0.5 transition-transform" />
            <span className="text-xs font-bold">BACK TO TOP</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
