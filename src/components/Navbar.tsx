import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { AlphaRoosButton } from './AlphaRoosButton';

interface NavbarProps {
  onOpenInquiry: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onNavigatePhilosophy?: () => void;
  onNavigateStory?: () => void;
  onNavigateHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenInquiry,
  isDarkMode,
  onToggleTheme,
  onNavigatePhilosophy,
  onNavigateStory,
  onNavigateHome,
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
    { name: 'Our Story', href: '#our-story', action: onNavigateStory, isBadge: true },
    { name: 'Services', href: '#services', action: onNavigateHome },
    { name: 'Philosophy', href: '#philosophy', action: onNavigatePhilosophy },
    { name: 'Process', href: '#process', action: onNavigateHome },
    { name: 'Works', href: '#portfolio', action: onNavigateHome },
    { name: 'FAQ', href: '#faq', action: onNavigateHome },
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
          {/* Logo */}
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-2 cursor-pointer focus:outline-none"
          >
            <Logo isDarkMode={isDarkMode} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.action) {
                    e.preventDefault();
                    link.action();
                  }
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  link.isBadge
                    ? 'bg-[#FF6B00]/15 text-[#FF6B00] border border-[#FF6B00]/40 font-bold hover:bg-[#FF6B00]/25'
                    : isDarkMode
                      ? 'text-[#D4D4D8] hover:text-white hover:bg-[#18181B]'
                      : 'text-[#52525B] hover:text-[#111111] hover:bg-[#F4F4F5]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-xl transition-all duration-300 ${
                isDarkMode
                  ? 'text-[#D4D4D8] hover:text-white hover:bg-[#18181B] border border-[#27272A]'
                  : 'text-[#52525B] hover:text-[#111111] hover:bg-[#F4F4F5] border border-[#E4E4E7]'
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* CTA Button */}
            <AlphaRoosButton onClick={onOpenInquiry} isDarkMode={isDarkMode} />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-xl transition-all ${
                isDarkMode
                  ? 'text-[#D4D4D8] hover:bg-[#18181B]'
                  : 'text-[#52525B] hover:bg-[#F4F4F5]'
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl ${
                isDarkMode ? 'text-white' : 'text-[#111111]'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-b ${
              isDarkMode
                ? 'bg-[#0A0A0A] border-[#27272A]'
                : 'bg-white border-[#E4E4E7]'
            }`}
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (link.action) {
                      e.preventDefault();
                      link.action();
                    }
                  }}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                    link.isBadge
                      ? 'bg-[#FF6B00]/20 text-[#FF6B00] font-bold'
                      : isDarkMode
                        ? 'text-[#D4D4D8] hover:text-white hover:bg-[#18181B]'
                        : 'text-[#52525B] hover:text-[#111111] hover:bg-[#F4F4F5]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <AlphaRoosButton onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }} isDarkMode={isDarkMode} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
