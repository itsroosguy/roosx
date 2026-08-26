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

  const rotateX = useTransform(smoothMouseY, [-400, 400], [6, -6]);
  const rotateY = useTransform(smoothMouseX, [-600, 600], [-8, 8]);

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

  const orbitNodes = [
    {
      id: 1,
      title: 'Foundation Before Growth',
      subtitle: 'Strong brands are built on strategy, not guesswork.',
      icon: Target,
      position: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
      textAlign: 'text-center',
      cardAlign: 'items-center',
      delay: 0.1,
    },
    {
      id: 2,
      title: 'Partnership Over Projects',
      subtitle: 'We work alongside our clients, not just for them.',
      icon: Users,
      position: 'top-[26%] left-0 sm:left-[2%] md:left-[5%] -translate-y-1/2',
      textAlign: 'text-right',
      cardAlign: 'items-end',
      delay: 0.2,
    },
    {
      id: 3,
      title: 'Systems Over Shortcuts',
      subtitle: 'Sustainable growth is created through scalable processes and smart execution.',
      icon: Settings,
      position: 'bottom-[12%] left-0 sm:left-[2%] md:left-[5%] translate-y-1/2',
      textAlign: 'text-right',
      cardAlign: 'items-end',
      delay: 0.3,
    },
    {
      id: 4,
      title: 'Momentum Over Noise',
      subtitle: 'Growth comes from consistent forward movement, not random tactics.',
      icon: TrendingUp,
      position: 'top-[26%] right-0 sm:right-[2%] md:right-[5%] -translate-y-1/2',
      textAlign: 'text-left',
      cardAlign: 'items-start',
      delay: 0.4,
    },
    {
      id: 5,
      title: 'Meaningful Leaps',
      subtitle: 'We focus on outcomes that create lasting impact, not temporary wins.',
      icon: Star,
      position: 'bottom-[12%] right-0 sm:right-[2%] md:right-[5%] translate-y-1/2',
      textAlign: 'text-left',
      cardAlign: 'items-start',
      delay: 0.5,
    },
  ];

  return (
    <section className={`py-12 relative overflow-hidden select-none ${className}`}>
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="max-w-6xl mx-auto px-4 sm:px-6 relative perspective-1000"
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          className="relative min-h-[620px] sm:min-h-[720px] md:min-h-[780px] flex items-center justify-center py-10 transition-transform duration-150 ease-out"
        >
          {/* ========================================================================= */}
          {/* BACKGROUND ORBIT SVG ARC & LIGHT GLOW */}
          {/* ========================================================================= */}
          
          {/* Central Radial Ambient Aura */}
          <div className="absolute w-[360px] h-[360px] sm:w-[520px] sm:h-[520px] rounded-full bg-radial from-[#FF7A1A]/18 via-[#FF7A1A]/4 to-transparent blur-3xl pointer-events-none" />

          {/* SVG Orbit Arc Ring */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg className="w-[320px] h-[320px] sm:w-[560px] sm:h-[560px] md:w-[680px] md:h-[680px] filter drop-shadow-[0_0_15px_rgba(255,122,26,0.35)]" viewBox="0 0 500 500">
              <circle
                cx="250"
                cy="250"
                r="215"
                fill="none"
                stroke="#FF7A1A"
                strokeWidth="2"
                strokeOpacity="0.45"
                strokeDasharray="6 6"
              />
              <circle
                cx="250"
                cy="250"
                r="215"
                fill="none"
                stroke="#FF7A1A"
                strokeWidth="1.5"
                strokeOpacity="0.8"
              />
            </svg>
          </div>

          {/* Traveling Glowing Light Particle along Orbit */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[320px] h-[320px] sm:w-[560px] sm:h-[560px] md:w-[680px] md:h-[680px] pointer-events-none flex items-center justify-center"
          >
            <div className="w-3 h-3 rounded-full bg-[#FFD700] shadow-[0_0_18px_#FF7A1A] transform -translate-y-[160px] sm:-translate-y-[280px] md:-translate-y-[340px]" />
          </motion.div>

          {/* ========================================================================= */}
          {/* CENTER 3D KANGAROO MASCOT STAGE */}
          {/* ========================================================================= */}
          <div className="relative z-20 flex flex-col items-center justify-center">
            {/* Mascot Vignette Backdrop Portal Ring */}
            <div className="absolute w-[240px] h-[240px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] rounded-full border border-[#FF7A1A]/40 bg-[#050508]/85 shadow-[0_0_60px_rgba(255,122,26,0.25)] pointer-events-none z-0" />
            
            {/* Mascot Image */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
            >
              <img
                src={kangarooImg}
                alt="Roos StudioX Mascot"
                className="w-auto h-[260px] sm:h-[380px] md:h-[450px] object-contain transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </div>

          {/* ========================================================================= */}
          {/* 5 ORBIT STRATEGIC NODES */}
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
                className={`absolute z-30 cursor-pointer ${node.position} flex flex-col ${node.cardAlign} max-w-[200px] sm:max-w-[240px] md:max-w-[280px] group`}
              >
                {/* Node Glowing Circle Button */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 flex items-center justify-center mb-3 transition-all duration-300 ${
                  isHovered
                    ? 'bg-[#FF7A1A] border-[#FF7A1A] text-white shadow-[0_0_30px_rgba(255,122,26,0.85)] scale-110'
                    : isDarkMode
                      ? 'bg-[#09090D]/90 border-[#FF7A1A]/60 text-[#FF7A1A] group-hover:border-[#FF7A1A] group-hover:shadow-[0_0_20px_rgba(255,122,26,0.5)]'
                      : 'bg-white border-[#FF7A1A]/60 text-[#FF7A1A] group-hover:border-[#FF7A1A]'
                }`}>
                  <IconComp className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Node Title & Subtitle */}
                <div className={`${node.textAlign} space-y-1`}>
                  <h3 className={`font-display text-sm sm:text-base md:text-lg font-bold leading-tight transition-colors duration-200 ${
                    isHovered
                      ? 'text-[#FF7A1A]'
                      : isDarkMode
                        ? 'text-white group-hover:text-[#FF7A1A]'
                        : 'text-[#111111] group-hover:text-[#FF7A1A]'
                  }`}>
                    {node.title}
                  </h3>

                  <p className={`text-xs sm:text-xs font-normal leading-relaxed ${
                    isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    {node.subtitle}
                  </p>
                </div>
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
          className="text-center pt-8 space-y-2 border-t border-zinc-800/40 relative z-20"
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
