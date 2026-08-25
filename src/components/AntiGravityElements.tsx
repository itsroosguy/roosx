import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  TrendingUp,
  Target,
  Megaphone,
  Workflow,
  Zap,
} from 'lucide-react';

interface AntiGravityElementsProps {
  isDarkMode?: boolean;
}

const items = [
  {
    id: 'web-dev',
    label: 'Website Development',
    icon: Globe,
    color: '#F97316',
    customBadge: (
      <span className="flex items-center gap-0.5 ml-1">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
        <span className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
      </span>
    ),
    delay: 0,
  },
  {
    id: 'growth',
    label: '+3X Growth',
    icon: TrendingUp,
    color: '#22C55E',
    isGreen: true,
    delay: 0.2,
  },
  {
    id: 'brand',
    label: 'Brand Positioning',
    icon: Target,
    color: '#F97316',
    hasOrbit: true,
    delay: 0.4,
  },
  {
    id: 'marketing',
    label: 'Digital Marketing',
    icon: Megaphone,
    color: '#F97316',
    delay: 0.6,
  },
  {
    id: 'workflow',
    label: 'Workflow Systems',
    icon: Workflow,
    color: '#F97316',
    hasNodes: true,
    delay: 0.8,
  },
  {
    id: 'ai-arch',
    label: 'Scalable AI Systems',
    icon: Zap,
    color: '#F97316',
    delay: 1.0,
  },
];

export const AntiGravityElements: React.FC<AntiGravityElementsProps> = ({
  isDarkMode = true,
}) => {
  return (
    <div className="w-full pt-2 pb-1">
      {/* PERFECTLY BALANCED HORIZONTAL FLEX CONTAINER BETWEEN DESCRIPTION & BUTTON */}
      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-left">
        {items.map((item) => {
          const IconComp = item.icon;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.delay }}
            >
              <motion.div
                animate={{
                  y: [-3, 3, -3],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: item.delay,
                }}
                className={`group flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-md text-xs font-semibold tracking-tight transition-all duration-300 cursor-default select-none shadow-sm ${
                  item.isGreen
                    ? 'bg-[#22C55E]/10 border-[#22C55E]/30 text-[#22C55E] hover:border-[#22C55E]'
                    : isDarkMode
                    ? 'bg-[#18181B]/80 border-[#27272A] text-zinc-300 hover:border-[#F97316]/50 hover:text-white hover:bg-[#27272A]/80 shadow-black/30'
                    : 'bg-white/90 border-[#E4E4E7] text-[#3F3F46] hover:border-[#F97316]/50 hover:text-[#111111] shadow-black/5'
                }`}
              >
                {/* Icon with Subtle Animation */}
                <div className="relative flex items-center justify-center shrink-0">
                  {item.hasOrbit && (
                    <span className="absolute -inset-1 rounded-full border border-[#F97316]/40 animate-ping opacity-25" />
                  )}
                  <IconComp
                    className={`w-3.5 h-3.5 transition-transform group-hover:scale-110 ${
                      item.isGreen ? 'text-[#22C55E]' : 'text-[#F97316]'
                    }`}
                  />
                </div>

                {/* Label */}
                <span>{item.label}</span>

                {/* Custom Badge or Node Graphic */}
                {item.customBadge}

                {item.hasNodes && (
                  <span className="flex items-center gap-0.5 ml-0.5">
                    <span className="w-1 h-1 rounded-full bg-[#F97316]" />
                    <span className="w-2 h-px bg-[#F97316]/40" />
                    <span className="w-1 h-1 rounded-full bg-[#FB923C]" />
                  </span>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
