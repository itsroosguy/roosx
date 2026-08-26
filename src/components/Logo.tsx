import React from 'react';

interface LogoProps {
  isScrolled?: boolean;
  isDarkMode?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  isScrolled = false,
  isDarkMode = true,
  className = '',
}) => {
  // Color swapping style based on current theme mode
  const filterStyle = isDarkMode
    ? 'brightness(0) invert(1)'
    : 'brightness(0)';

  return (
    <div className={`relative inline-flex items-center group ${className}`}>
      {/* Brand Radial Ambient Glow Overlay */}
      <div className="absolute inset-0 bg-radial from-[#FF7A1A]/30 via-[#FF7A1A]/5 to-transparent blur-md pointer-events-none group-hover:scale-125 transition-transform duration-500 opacity-60" />

      {/* Main ROOS STUDIOX Logo (logo.png) */}
      <img
        src="./logo.png"
        alt="ROOS STUDIOX"
        className={`h-6 sm:h-7 w-auto object-contain transition-all duration-500 transform relative z-10 ${
          isScrolled
            ? 'opacity-0 -translate-y-2 pointer-events-none absolute'
            : 'opacity-100 translate-y-0 relative'
        }`}
        style={{ filter: filterStyle }}
      />

      {/* Brand Mark (mark.png) swapped in on scroll */}
      <img
        src="./mark.png"
        alt="Roos StudioX Mark"
        className={`h-7 sm:h-8 w-auto object-contain transition-all duration-500 transform relative z-10 ${
          isScrolled
            ? 'opacity-100 translate-y-0 relative'
            : 'opacity-0 translate-y-2 pointer-events-none absolute'
        }`}
        style={{ filter: filterStyle }}
      />
    </div>
  );
};
