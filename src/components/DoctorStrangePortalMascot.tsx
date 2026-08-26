import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface DoctorStrangePortalMascotProps {
  isDarkMode?: boolean;
  className?: string;
}

export const DoctorStrangePortalMascot: React.FC<DoctorStrangePortalMascotProps> = ({
  className = '',
}) => {
  const baseUrl = (import.meta as any).env?.BASE_URL || '/';
  const kangarooImg = `${baseUrl.endsWith('/') ? baseUrl : baseUrl + '/'}kangaroo_portal.png`;
  // MOUSE PARALLAX TILT PHYSICS
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-300, 300], [8, -8]);
  const rotateY = useTransform(smoothMouseX, [-300, 300], [-10, 10]);
  const portalScale = useTransform(smoothMouseX, [-300, 300], [0.98, 1.02]);

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
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative flex items-center justify-center py-6 select-none perspective-1000 ${className}`}
    >
      <motion.div
        style={{ rotateX, rotateY, scale: portalScale }}
        className="relative flex items-center justify-center transition-transform duration-100 ease-out"
      >
        {/* ========================================================================= */}
        {/* DOCTOR STRANGE SLING RING PORTAL BACKGROUND EFFECTS */}
        {/* ========================================================================= */}
        
        {/* 1. INTENSE FIERY AMBIENT RADIAL GLOW */}
        <div className="absolute w-[320px] h-[320px] sm:w-[460px] sm:h-[460px] rounded-full bg-radial from-[#FF7A1A] via-[#FF4500]/60 to-transparent blur-3xl opacity-75 animate-pulse pointer-events-none" />
        <div className="absolute w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] rounded-full bg-radial from-[#FFD700]/70 via-[#FF6B00]/40 to-transparent blur-2xl opacity-90 pointer-events-none" />

        {/* 2. ROTATING SLING RING PORTAL SVG RINGS */}
        <div className="absolute w-[300px] h-[300px] sm:w-[440px] sm:h-[440px] pointer-events-none">
          {/* Ring 1: Clockwise Outer Fire Ring */}
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 w-full h-full filter drop-shadow-[0_0_20px_#FF7A1A]"
            viewBox="0 0 200 200"
          >
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="#FF7A1A"
              strokeWidth="3.5"
              strokeDasharray="18 12 6 12 24 10"
              strokeLinecap="round"
            />
            <circle
              cx="100"
              cy="100"
              r="85"
              fill="none"
              stroke="#FFD700"
              strokeWidth="2"
              strokeDasharray="8 14 16 10"
              strokeLinecap="round"
            />
          </motion.svg>

          {/* Ring 2: Counter-Clockwise Inner Flame Ring */}
          <motion.svg
            animate={{ rotate: -360 }}
            transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 w-full h-full filter drop-shadow-[0_0_25px_#FF4500]"
            viewBox="0 0 200 200"
          >
            <circle
              cx="100"
              cy="100"
              r="78"
              fill="none"
              stroke="#FF4500"
              strokeWidth="4"
              strokeDasharray="12 18 30 14"
              strokeLinecap="round"
            />
            <circle
              cx="100"
              cy="100"
              r="72"
              fill="none"
              stroke="#FFA500"
              strokeWidth="2.5"
              strokeDasharray="20 10 10 10"
              strokeLinecap="round"
            />
          </motion.svg>

          {/* Ring 3: Fast Inner Mystical Core Ring */}
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 w-full h-full filter drop-shadow-[0_0_30px_#FFD700]"
            viewBox="0 0 200 200"
          >
            <circle
              cx="100"
              cy="100"
              r="64"
              fill="none"
              stroke="#FFF"
              strokeWidth="3"
              strokeDasharray="6 14 12 8"
              strokeLinecap="round"
            />
          </motion.svg>

          {/* 3. FLOATING PORTAL SPARK NODES */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                rotate: [i * 30, i * 30 + 360],
                scale: [0.8, 1.3, 0.8],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                rotate: { duration: 8 + (i % 4), repeat: Infinity, ease: 'linear' },
                scale: { duration: 2 + (i % 3), repeat: Infinity, ease: 'easeInOut' },
                opacity: { duration: 1.5 + (i % 2), repeat: Infinity, ease: 'easeInOut' },
              }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div
                style={{
                  transform: `rotate(${i * 30}deg) translate(145px) rotate(-${i * 30}deg)`,
                }}
                className="w-2.5 h-2.5 rounded-full bg-[#FFD700] shadow-[0_0_12px_#FF7A1A]"
              />
            </motion.div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* KANGAROO MASCOT CHARACTER IN FRONT OF PORTAL */}
        {/* ========================================================================= */}
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative z-10 filter drop-shadow-[0_15px_45px_rgba(255,122,26,0.6)] hover:drop-shadow-[0_20px_60px_rgba(255,122,26,0.85)] transition-all duration-300"
        >
          <img
            src={kangarooImg}
            alt="Roos StudioX Mascot stepping through Doctor Strange Portal"
            className="w-auto h-[320px] sm:h-[440px] md:h-[500px] object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
          />
        </motion.div>

        {/* PORTAL FLOOR LIGHT ELLIPSE */}
        <div className="absolute -bottom-6 w-[280px] sm:w-[380px] h-[30px] rounded-full bg-radial from-[#FF7A1A]/70 via-[#FF4500]/30 to-transparent blur-xl pointer-events-none z-0" />

      </motion.div>
    </div>
  );
};
