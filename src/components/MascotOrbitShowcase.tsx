import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Target, Users, Settings, TrendingUp, Star } from 'lucide-react';

interface MascotOrbitShowcaseProps {
  isDarkMode?: boolean;
  className?: string;
}

export const MascotOrbitShowcase: React.FC<MascotOrbitShowcaseProps> = ({
  isDarkMode = true,
  className = '',
}) => {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const baseUrl = (import.meta as any).env?.BASE_URL || '/';
  const kangarooImg = `${baseUrl.endsWith('/') ? baseUrl : baseUrl + '/'}kangaroo_portal.png`;

  // REALISTIC 3D PARALLAX TILT PHYSICS
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-400, 400], [5, -5]);
  const rotateY = useTransform(smoothMouseX, [-600, 600], [-7, 7]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHoveredNode(null);
  };

  // EXACT POLAR COORDINATE NODES ON R=250px CIRCLE (CENTER=350,350)
  const orbitNodes = [
    {
      id: 1,
      title: 'Foundation Before Growth',
      subtitle: 'Strong brands are built on strategy, not guesswork.',
      icon: Target,
      cx: 350,
      cy: 100,
      layoutType: 'top',
      delay: 0.1,
    },
    {
      id: 2,
      title: 'Partnership Over Projects',
      subtitle: 'We work alongside our clients, not just for them.',
      icon: Users,
      cx: 108.5,
      cy: 285.3,
      layoutType: 'left',
      delay: 0.2,
    },
    {
      id: 3,
      title: 'Systems Over Shortcuts',
      subtitle: 'Sustainable growth is created through scalable processes and smart execution.',
      icon: Settings,
      cx: 145.2,
      cy: 493.4,
      layoutType: 'left',
      delay: 0.3,
    },
    {
      id: 4,
      title: 'Momentum Over Noise',
      subtitle: 'Growth comes from consistent forward movement, not random tactics.',
      icon: TrendingUp,
      cx: 591.5,
      cy: 285.3,
      layoutType: 'right',
      delay: 0.4,
    },
    {
      id: 5,
      title: 'Meaningful Leaps',
      subtitle: 'We focus on outcomes that create lasting impact, not temporary wins.',
      icon: Star,
      cx: 554.8,
      cy: 493.4,
      layoutType: 'right',
      delay: 0.5,
    },
  ];

  return (
    <section className={`py-12 relative overflow-hidden select-none ${className}`}>
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="max-w-6xl mx-auto px-4 relative perspective-1000 flex flex-col items-center"
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          className="relative w-[340px] h-[340px] sm:w-[560px] sm:h-[560px] md:w-[700px] md:h-[700px] flex items-center justify-center transition-transform duration-150 ease-out"
        >
          {/* ========================================================================= */}
          {/* SVG ORBIT CIRCLE (EXACT MATCHING R=250 CENTER=350,350) */}
          {/* ========================================================================= */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full filter drop-shadow-[0_0_15px_rgba(255,122,26,0.4)]" viewBox="0 0 700 700">
              {/* Outer Dashed Orbit Ring */}
              <circle
                cx="350"
                cy="350"
                r="250"
                fill="none"
                stroke="#FF7A1A"
                strokeWidth="2"
                strokeOpacity="0.45"
                strokeDasharray="6 6"
              />
              {/* Solid Orange Orbit Ring */}
              <circle
                cx="350"
                cy="350"
                r="250"
                fill="none"
                stroke="#FF7A1A"
                strokeWidth="1.5"
                strokeOpacity="0.85"
              />
            </svg>
          </div>

          {/* Traveling Glowing Light Particle along Orbit */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 pointer-events-none flex items-center justify-center z-10"
          >
            <div className="w-3.5 h-3.5 rounded-full bg-[#FFD700] shadow-[0_0_20px_#FF7A1A] transform -translate-y-[250px]" />
          </motion.div>

          {/* Central Radial Ambient Aura */}
          <div className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full bg-radial from-[#FF7A1A]/16 via-[#FF7A1A]/4 to-transparent blur-3xl pointer-events-none z-0" />

          {/* ========================================================================= */}
          {/* CENTER 3D KANGAROO MASCOT STAGE */}
          {/* ========================================================================= */}
          <div className="relative z-20 flex flex-col items-center justify-center">
            {/* Mascot Vignette Backdrop Portal Ring */}
            <div className="absolute w-[220px] h-[220px] md:w-[340px] md:h-[340px] rounded-full border border-[#FF7A1A]/40 bg-[#050508]/90 shadow-[0_0_60px_rgba(255,122,26,0.3)] pointer-events-none z-0" />
            
            {/* Mascot Image */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)]"
            >
              <img
                src={kangarooImg}
                alt="Roos StudioX Mascot"
                className="w-auto h-[220px] sm:h-[320px] md:h-[380px] object-contain transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </div>

          {/* ========================================================================= */}
          {/* 5 ABSOLUTELY ANCHORED ORBIT NODES (CIRCLE ICON LOCKED TO CX, CY) */}
          {/* ========================================================================= */}
          {orbitNodes.map((node) => {
            const IconComp = node.icon;
            const isHovered = hoveredNode === node.id;

            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: node.delay }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                style={{
                  left: `${(node.cx / 700) * 100}%`,
                  top: `${(node.cy / 700) * 100}%`,
                }}
                className="absolute z-30 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              >
                {/* 1. THE CIRCLE ICON BUTTON (ANCHORED EXACTLY AT 0,0 OFFSET) */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 relative z-20 ${
                  isHovered
                    ? 'bg-[#FF7A1A] border-[#FF7A1A] text-white shadow-[0_0_30px_rgba(255,122,26,0.9)] scale-110'
                    : isDarkMode
                      ? 'bg-[#09090D] border-[#FF7A1A] text-[#FF7A1A] shadow-[0_0_15px_rgba(255,122,26,0.4)] group-hover:bg-[#FF7A1A] group-hover:text-white'
                      : 'bg-white border-[#FF7A1A] text-[#FF7A1A] group-hover:bg-[#FF7A1A] group-hover:text-white'
                }`}>
                  <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* 2. THE TEXT CARD (POSITIONED DECOUPLED FROM CIRCLE ICON) */}
                {node.layoutType === 'top' && (
                  <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 text-center w-[220px] sm:w-[260px] pointer-events-auto">
                    <h3 className={`font-display text-sm sm:text-base font-bold transition-colors ${
                      isHovered ? 'text-[#FF7A1A]' : isDarkMode ? 'text-white' : 'text-[#111111]'
                    }`}>
                      {node.title}
                    </h3>
                    <p className={`text-xs font-normal leading-tight pt-0.5 ${
                      isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
                    }`}>
                      {node.subtitle}
                    </p>
                  </div>
                )}

                {node.layoutType === 'left' && (
                  <div className="absolute right-[calc(100%+14px)] top-1/2 -translate-y-1/2 text-right w-[160px] sm:w-[220px] md:w-[250px] pointer-events-auto">
                    <h3 className={`font-display text-sm sm:text-base font-bold transition-colors ${
                      isHovered ? 'text-[#FF7A1A]' : isDarkMode ? 'text-white' : 'text-[#111111]'
                    }`}>
                      {node.title}
                    </h3>
                    <p className={`text-xs font-normal leading-tight pt-0.5 ${
                      isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
                    }`}>
                      {node.subtitle}
                    </p>
                  </div>
                )}

                {node.layoutType === 'right' && (
                  <div className="absolute left-[calc(100%+14px)] top-1/2 -translate-y-1/2 text-left w-[160px] sm:w-[220px] md:w-[250px] pointer-events-auto">
                    <h3 className={`font-display text-sm sm:text-base font-bold transition-colors ${
                      isHovered ? 'text-[#FF7A1A]' : isDarkMode ? 'text-white' : 'text-[#111111]'
                    }`}>
                      {node.title}
                    </h3>
                    <p className={`text-xs font-normal leading-tight pt-0.5 ${
                      isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
                    }`}>
                      {node.subtitle}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* ========================================================================= */}
        {/* BOTTOM FOOTER CALLOUT SUMMARY */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center pt-8 sm:pt-12 space-y-2 relative z-20"
        >
          <span className="text-[11px] font-mono tracking-widest text-[#FF7A1A] uppercase font-bold">
            IN SIMPLE TERMS
          </span>

          <h2 className={`font-display text-xl sm:text-3xl md:text-4xl font-bold leading-tight ${
            isDarkMode ? 'text-white' : 'text-[#111111]'
          }`}>
            We help businesses <span className="text-[#FF7A1A]">look better</span>,{' '}
            <span className="text-[#FF7A1A]">perform better</span> and{' '}
            <span className="text-[#FF7A1A]">grow smarter</span>.
          </h2>
        </motion.div>
      </div>
    </section>
  );
};
