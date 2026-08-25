import React, { useEffect, useState } from 'react';

export const AmbientGlow: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden transition-opacity duration-300">
      {/* Dynamic Cursor Spotlight adhering to Brand Orange Glow System */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-25 transition-transform duration-100 ease-out pointer-events-none"
        style={{
          left: `${mousePos.x - 300}px`,
          top: `${mousePos.y - 300}px`,
          background: 'radial-gradient(circle, rgba(249,115,22,0.35) 0%, rgba(253,186,116,0.15) 45%, rgba(249,115,22,0) 70%)',
        }}
      />

      {/* Soft Brand Background Orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#F97316]/10 rounded-full blur-[160px] animate-pulse-slow pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-[#FDBA74]/15 rounded-full blur-[160px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-[#FB923C]/10 rounded-full blur-[180px] animate-pulse-slow pointer-events-none" />
    </div>
  );
};
