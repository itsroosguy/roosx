import React from 'react';

interface LogoProps {
  isScrolled?: boolean;
  isDarkMode?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  isScrolled = false,
  isDarkMode,
  className = '',
}) => {
  // If isDarkMode prop is explicitly passed, use it; otherwise fallback to CSS dark mode or light mode
  const filterStyle =
    isDarkMode === true
      ? 'brightness(0) invert(1)'
      : isDarkMode === false
      ? 'brightness(0)'
      : undefined;

  return (
    <div className={`relative inline-flex items-center ${className}`}>
      {/* Brand Icon Mark (Visible on initial load, swaps out on scroll) */}
      <img
        src="/mark.png"
        alt="Roos StudioX Mark"
        className={`h-11 sm:h-13 w-auto object-contain transition-all duration-500 transform dark:brightness-0 dark:invert ${
          isScrolled
            ? 'opacity-0 -translate-y-4 pointer-events-none absolute'
            : 'opacity-100 translate-y-0 relative'
        }`}
        style={filterStyle ? { filter: filterStyle } : undefined}
      />

      {/* Brand Wordmark logo.png (Hidden on initial load, swaps in on scroll) */}
      <img
        src="/logo.png"
        alt="ROOS STUDIOX"
        className={`h-4 sm:h-5 w-auto object-contain transition-all duration-500 transform dark:brightness-0 dark:invert ${
          isScrolled
            ? 'opacity-100 translate-y-0 relative'
            : 'opacity-0 translate-y-4 pointer-events-none absolute'
        }`}
        style={filterStyle ? { filter: filterStyle } : undefined}
      />
    </div>
  );
};
