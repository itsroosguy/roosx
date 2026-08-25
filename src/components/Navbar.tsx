import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { AlphaRoosButton } from './AlphaRoosButton';

interface NavbarProps {
  onOpenInquiry: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenInquiry,
  isDarkMode,
  onToggleTheme,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Works', href: '#portfolio' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-1' : 'py-2'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div
          className={`flex items-center justify-between transition-all duration-300 rounded-2xl ${
            scrolled
              ? isDarkMode
                ? 'bg-[#0A0A0A]/90 shadow-lg border border-[#27272A] px-3.5 py-1.5 backdrop-blur-md'
                : 'glass-nav shadow-sm border border-[#E4E4E7] px-3.5 py-1.5'
              : 'bg-transparent px-4 py-2'
          }`}
        >
          {/* Logo (Swaps mark.png to logo.png on scroll) */}
          <a href="#" className="flex items-center">
            <Logo isScrolled={scrolled} isDarkMode={isDarkMode} />
          </a>

          {/* Desktop Nav Links */}
          <nav
            className={`hidden md:flex items-center gap-6 px-5 py-1.5 rounded-full border shadow-sm font-display transition-colors duration-300 ${
              isDarkMode
                ? 'bg-[#18181B]/80 border-[#27272A] text-[#D4D4D8]'
                : 'glass-card border-[#E4E4E7] text-[#111111]'
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[13px] sm:text-[15px] font-semibold transition-colors relative py-0.5 tracking-tight group ${
                  isDarkMode
                    ? 'text-[#D4D4D8] hover:text-[#F97316]'
                    : 'text-[#111111] hover:text-[#F97316]'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#FDBA74] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA & Theme Toggle Switch */}
          <div className="flex items-center gap-3 font-display">
            
            {/* Interactive Theme Toggle Switch */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onToggleTheme}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className={`p-2 sm:p-2.5 rounded-full transition-all duration-300 border flex items-center justify-center shadow-xs cursor-pointer ${
                isDarkMode
                  ? 'bg-[#18181B] text-[#FDBA74] border-[#27272A] hover:bg-[#27272A]'
                  : 'bg-[#FAFAFA] text-[#F97316] border-[#E4E4E7] hover:bg-slate-100'
              }`}
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-[#FDBA74]" />
              ) : (
                <Moon className="w-4 h-4 text-[#F97316]" />
              )}
            </motion.button>

            {/* Blackcherie Inspired Luxury Alpha Roos CTA Button */}
            <AlphaRoosButton
              text="Get Your Free Audit"
              onClick={onOpenInquiry}
              isDarkMode={isDarkMode}
              reverse={true}
              compact={true}
              showArrow={false}
              leadingIcon={<Sparkles className="w-3.5 h-3.5" />}
            />

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-xl border transition-colors ${
                isDarkMode
                  ? 'bg-[#18181B] text-[#D4D4D8] border-[#27272A]'
                  : 'glass-card text-[#111111] border-[#E4E4E7]'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Drawer with AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className={`md:hidden mt-3 p-6 rounded-2xl border flex flex-col gap-4 shadow-2xl backdrop-blur-xl ${
                isDarkMode
                  ? 'bg-[#0A0A0A]/95 border-[#27272A] text-white shadow-black/60'
                  : 'bg-white/95 border-[#E4E4E7] text-[#111111] shadow-black/10'
              }`}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-bold py-2.5 border-b transition-colors flex items-center justify-between ${
                    isDarkMode
                      ? 'border-[#27272A] text-[#D4D4D8] hover:text-[#F97316]'
                      : 'border-[#E4E4E7] text-[#111111] hover:text-[#F97316]'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-semibold text-[#F97316] opacity-70">→</span>
                </a>
              ))}
              <div className="pt-2">
                <AlphaRoosButton
                  text="Get Your Free Audit"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiry();
                  }}
                  isDarkMode={isDarkMode}
                  reverse={true}
                  showArrow={false}
                  leadingIcon={<Sparkles className="w-4 h-4" />}
                  className="w-full justify-center"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
};
