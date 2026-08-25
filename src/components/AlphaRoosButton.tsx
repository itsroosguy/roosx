import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface AlphaRoosButtonProps {
  onClick: () => void;
  isDarkMode?: boolean;
  text?: string;
  className?: string;
  reverse?: boolean;
  compact?: boolean;
  leadingIcon?: React.ReactNode;
  showArrow?: boolean;
}

export const AlphaRoosButton: React.FC<AlphaRoosButtonProps> = ({
  onClick,
  isDarkMode = false,
  text = 'Connect with Alpha Roos',
  className = '',
  reverse = false,
  compact = false,
  leadingIcon,
  showArrow = true,
}) => {
  // Theme Color Configurations adhering to Roos StudioX Brand Color System
  const mainStyle = reverse
    ? isDarkMode
      ? 'bg-[#F97316] hover:bg-[#FB923C] text-white border-[#F97316]/50 shadow-[#F97316]/30'
      : 'bg-[#111111] hover:bg-[#EA580C] text-white border-[#111111] shadow-[#111111]/20'
    : isDarkMode
    ? 'bg-[#18181B] hover:bg-[#111111] text-white border-[#27272A] shadow-black/40'
    : 'bg-[#111111] hover:bg-[#F97316] text-white border-[#111111] shadow-black/15';

  const badgeStyle = reverse
    ? isDarkMode
      ? 'bg-white text-[#F97316]'
      : 'bg-white text-[#111111]'
    : 'bg-[#F97316] text-white';

  // Compact vs Standard Sizes
  const containerPadding = compact
    ? showArrow && !leadingIcon
      ? 'py-1.5 pl-4 pr-1.5 gap-2.5 text-[11px] sm:text-xs'
      : 'py-2 px-4 gap-2 text-[11px] sm:text-xs'
    : showArrow && !leadingIcon
    ? 'py-2 pl-6 pr-2 sm:py-2.5 sm:pl-8 sm:pr-2.5 gap-3.5 text-xs sm:text-sm'
    : 'py-2.5 px-6 sm:py-3 sm:px-8 gap-3 text-xs sm:text-sm';

  const badgeSize = compact
    ? 'w-7 h-7 sm:w-8 sm:h-8'
    : 'w-9 h-9 sm:w-10 sm:h-10';

  const iconSize = compact
    ? 'w-3.5 h-3.5'
    : 'w-4 h-4 sm:w-4.5 sm:h-4.5';

  // If leadingIcon or showArrow=false is provided, omit trailing arrow badge and show leading icon
  const hasLeadingIcon = leadingIcon !== undefined || (!showArrow && leadingIcon === undefined);
  const IconToRender = leadingIcon || <Sparkles className={`${iconSize} text-current animate-pulse`} />;

  return (
    <motion.button
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center rounded-full border font-display font-extrabold tracking-wider uppercase whitespace-nowrap overflow-hidden transition-all duration-300 shadow-md cursor-pointer ${containerPadding} ${mainStyle} ${className}`}
    >
      {/* Light Shimmer Sweep Animation */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-10" />

      {/* Leading Icon in Front of Text */}
      {hasLeadingIcon && (
        <span className="relative z-20 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
          {IconToRender}
        </span>
      )}

      {/* Button Text */}
      <span className="relative z-20 transition-transform duration-300 group-hover:translate-x-0.5">
        {text}
      </span>

      {/* Trailing Circular Arrow Badge (Only if showArrow is true and no leadingIcon) */}
      {showArrow && !leadingIcon && (
        <motion.div
          variants={{
            hover: { scale: 1.08, rotate: -45 },
            tap: { scale: 0.95 },
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className={`rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 relative z-20 shadow-xs ${badgeSize} ${badgeStyle}`}
        >
          <ArrowRight className={iconSize} />
        </motion.div>
      )}
    </motion.button>
  );
};
