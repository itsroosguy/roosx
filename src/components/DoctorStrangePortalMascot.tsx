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

  // REALISTIC 3D STUDIO PARALLAX TILT PHYSICS
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(smoothMouseX, [-300, 300], [-7, 7]);
  const lightShiftX = useTransform(smoothMouseX, [-300, 300], [-30, 30]);

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
      className={`relative flex items-center justify-center py-10 select-none perspective-1000 ${className}`}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative flex items-center justify-center transition-transform duration-150 ease-out"
      >
        {/* ========================================================================= */}
        {/* PHOTOREALISTIC STUDIO LIGHTING & VOLUMETRIC BACKDROP */}
        {/* ========================================================================= */}
        
        {/* 1. SOFT VOLUMETRIC KEY LIGHT BEAM */}
        <motion.div
          style={{ x: lightShiftX }}
          className="absolute -top-12 w-[340px] sm:w-[500px] h-[400px] sm:h-[550px] rounded-full bg-gradient-to-b from-[#FF7A1A]/22 via-[#FF7A1A]/8 to-transparent blur-3xl pointer-events-none opacity-85"
        />

        {/* 2. REALISTIC WARM STUDIO AMBIENT GLOW */}
        <div className="absolute w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] rounded-full bg-radial from-[#FF7A1A]/15 via-[#FF6B00]/5 to-transparent blur-2xl pointer-events-none" />

        {/* 3. GROUNDED REALISTIC FLOOR CONTACT SHADOW */}
        <div className="absolute -bottom-8 w-[240px] sm:w-[360px] h-[36px] rounded-[100%] bg-black/90 blur-xl pointer-events-none z-0" />
        <div className="absolute -bottom-6 w-[180px] sm:w-[260px] h-[20px] rounded-[100%] bg-black blur-md pointer-events-none z-0" />

        {/* ========================================================================= */}
        {/* KANGAROO MASCOT CHARACTER ON PHOTOREALISTIC STUDIO STAGE */}
        {/* ========================================================================= */}
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative z-10 filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)] hover:drop-shadow-[0_25px_50px_rgba(255,122,26,0.35)] transition-all duration-300"
        >
          <img
            src={kangarooImg}
            alt="Roos StudioX Kangaroo Mascot"
            className="w-auto h-[340px] sm:h-[460px] md:h-[520px] object-contain cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
          />
        </motion.div>

        {/* SOFT WARM RIM REFLECTION ON FLOOR */}
        <div className="absolute -bottom-10 w-[260px] sm:w-[380px] h-[16px] rounded-full bg-[#FF7A1A]/20 blur-md pointer-events-none z-0" />

      </motion.div>
    </div>
  );
};
