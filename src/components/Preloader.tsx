import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  useEffect(() => {
    const DURATION = 3200; // 3.2s smooth luxury load
    const INTERVAL_TIME = 25;
    const totalSteps = DURATION / INTERVAL_TIME;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      const currentProgress = Math.min(100, Math.round((stepCount / totalSteps) * 100));
      setProgress(currentProgress);

      if (stepCount >= totalSteps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsFinished(true);
          if (onComplete) onComplete();
        }, 350);
      }
    }, INTERVAL_TIME);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Dynamic Phase Text
  const getPhaseText = (p: number) => {
    if (p < 25) return 'INITIALIZING DIGITAL CORE';
    if (p < 50) return 'SYNCHRONIZING BRAND STRATEGY';
    if (p < 75) return 'BUILDING CREATIVE MOMENTUM';
    if (p < 95) return 'POLISHING DIGITAL EXPERIENCE';
    return 'WELCOME TO ROOS STUDIOX';
  };

  // SVG Circular Gauge calculations (radius = 95)
  const radius = 95;
  const circumference = 2 * Math.PI * radius;
  const gaugeDashoffset = circumference - (progress / 100) * circumference;

  // Kangaroo Logo Path length for stroke drawing animation
  const logoPathLength = 2200;
  const logoStrokeDashoffset = logoPathLength - (progress / 100) * logoPathLength;
  const logoFillOpacity = progress > 70 ? (progress - 70) / 30 : 0;

  return (
    <AnimatePresence mode="wait">
      {!isFinished && (
        <motion.div
          key="preloaderCurtain"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050508] text-white select-none overflow-hidden"
        >
          {/* ========================================================================= */}
          {/* TOP & BOTTOM CINEMATIC DUAL SHUTTERS (EXIT ANIMATION) */}
          {/* ========================================================================= */}
          
          {/* Top Curtain */}
          <motion.div
            exit={{ y: '-100%', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
            className="absolute top-0 left-0 right-0 h-1/2 bg-[#050508] z-0"
          />

          {/* Bottom Curtain */}
          <motion.div
            exit={{ y: '100%', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#050508] z-0"
          />

          {/* ========================================================================= */}
          {/* CREATIVE BACKGROUND VOLUMETRIC ATMOSPHERE & SCANNER */}
          {/* ========================================================================= */}
          
          {/* Dynamic Radial Ambient Aura */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,122,26,0.28)_0%,transparent_60%)] pointer-events-none z-10"
          />

          {/* Architectural Tech Grid */}
          <div className="absolute inset-0 bg-[size:4rem_4rem] bg-[linear-gradient(to_right,#FF7A1A0a_1px,transparent_1px),linear-gradient(to_bottom,#FF7A1A0a_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-10" />

          {/* Vertical Laser Beam Scanner */}
          <motion.div
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[#FF7A1A]/15 to-transparent pointer-events-none z-10"
          />

          {/* ========================================================================= */}
          {/* CORNER HUD TELEMETRY BRACKETS & EQUALIZER BARS */}
          {/* ========================================================================= */}
          
          {/* Top Left HUD */}
          <div className="absolute top-6 left-6 sm:top-10 sm:left-10 flex items-center gap-3 z-20 pointer-events-none">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF7A1A] animate-ping" />
            <div className="flex flex-col">
              <span className="font-mono text-[10px] sm:text-xs text-zinc-300 tracking-widest uppercase font-bold">
                ROOS STUDIOX®
              </span>
              <span className="font-mono text-[9px] text-[#FF7A1A] tracking-wider uppercase">
                SYSTEM INITIALIZING
              </span>
            </div>
          </div>

          {/* Top Right HUD */}
          <div className="absolute top-6 right-6 sm:top-10 sm:right-10 text-right z-20 pointer-events-none">
            <span className="font-mono text-[10px] sm:text-xs text-zinc-300 tracking-widest uppercase font-bold block">
              EST. 2026
            </span>
            <span className="font-mono text-[9px] text-zinc-500 tracking-wider uppercase block">
              CREATIVE INTELLIGENCE
            </span>
          </div>

          {/* Left Audio Equalizer Visualizer */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-1 z-20 pointer-events-none">
            {[40, 75, 55, 90, 30, 65, 80, 45].map((h, i) => (
              <motion.div
                key={`left-eq-${i}`}
                animate={{ width: [`${h * 0.4}%`, `${h}%`, `${h * 0.4}%`] }}
                transition={{ duration: 1.2 + i * 0.1, repeat: Infinity, ease: 'easeInOut' }}
                className="h-0.5 bg-[#FF7A1A]/60 rounded-full"
                style={{ width: `${h}%` }}
              />
            ))}
          </div>

          {/* Right Audio Equalizer Visualizer */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-1 items-end z-20 pointer-events-none">
            {[60, 35, 85, 40, 95, 50, 70, 30].map((h, i) => (
              <motion.div
                key={`right-eq-${i}`}
                animate={{ width: [`${h * 0.4}%`, `${h}%`, `${h * 0.4}%`] }}
                transition={{ duration: 1.2 + i * 0.1, repeat: Infinity, ease: 'easeInOut' }}
                className="h-0.5 bg-[#FF7A1A]/60 rounded-full"
                style={{ width: `${h}%` }}
              />
            ))}
          </div>

          {/* Bottom Left HUD */}
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-20 pointer-events-none hidden sm:block">
            <span className="font-mono text-[10px] text-zinc-400 tracking-widest uppercase block">
              POSITION // 001_HQ
            </span>
          </div>

          {/* Bottom Right HUD */}
          <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20 pointer-events-none hidden sm:block">
            <span className="font-mono text-[10px] text-zinc-400 tracking-widest uppercase block">
              ROOS_CORE_v2.0
            </span>
          </div>

          {/* ========================================================================= */}
          {/* MAIN CENTER STAGE */}
          {/* ========================================================================= */}
          <div className="relative flex flex-col items-center justify-center z-20 px-4">
            
            {/* STAGE CONTAINER */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
              
              {/* 1. Outer Spinning Dashed Orbit Tech Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 pointer-events-none flex items-center justify-center"
              >
                <svg className="w-full h-full" viewBox="0 0 220 220">
                  <circle
                    cx="110"
                    cy="110"
                    r="104"
                    fill="none"
                    stroke="#FF7A1A"
                    strokeWidth="1.5"
                    strokeOpacity="0.3"
                    strokeDasharray="4 8"
                  />
                </svg>
              </motion.div>

              {/* 2. Counter-Rotating Tick Marks Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 pointer-events-none flex items-center justify-center scale-105"
              >
                <svg className="w-full h-full" viewBox="0 0 220 220">
                  <circle
                    cx="110"
                    cy="110"
                    r="108"
                    fill="none"
                    stroke="#FF7A1A"
                    strokeWidth="1"
                    strokeOpacity="0.18"
                    strokeDasharray="2 12"
                  />
                </svg>
              </motion.div>

              {/* 3. Main Progress Gauge SVG */}
              <svg className="w-full h-full transform -rotate-90 filter drop-shadow-[0_0_20px_rgba(255,122,26,0.45)]" viewBox="0 0 220 220">
                <defs>
                  <linearGradient id="brandGaugeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF7A1A" />
                    <stop offset="50%" stopColor="#FFA665" />
                    <stop offset="100%" stopColor="#EA580C" />
                  </linearGradient>
                </defs>

                {/* Track Circle */}
                <circle
                  cx="110"
                  cy="110"
                  r={radius}
                  stroke="#141418"
                  strokeWidth="4"
                  fill="transparent"
                />

                {/* Filling Progress Gauge */}
                <circle
                  cx="110"
                  cy="110"
                  r={radius}
                  stroke="url(#brandGaugeGrad)"
                  strokeWidth="5"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={gaugeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-75 ease-out"
                />
              </svg>

              {/* 4. CENTERED KANGAROO LOGO DRAW REVEAL */}
              <div className="absolute inset-0 flex items-center justify-center p-14 sm:p-16 pointer-events-none">
                <svg
                  viewBox="0 0 301.51 558.76"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(255,122,26,0.6)]"
                >
                  <defs>
                    <linearGradient id="logoStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF7A1A" />
                      <stop offset="50%" stopColor="#FFA665" />
                      <stop offset="100%" stopColor="#EA580C" />
                    </linearGradient>
                  </defs>

                  {/* LOGO PATH 1 (KANGAROO BODY & TAIL) */}
                  <path
                    d="M207,272.38c1.75,5.62,1.9,11.31,2.38,16.89l-.09,8.8c-.14,13.96-3.88,27.11-9.05,40.16-15.51,39.22-49.92,67.59-92.51,76.53l7.03,7.48,16.07,16.26,19.46,19.57,23,23.11c5.29,5.31,4.85,17.4-.19,21.29l-41.14,31.77-31.46,24.52c-1.47.03-3.67-.15-4.38-.83-.82-.78-1.14-2.44-1-3.78l12.73-28.33,16.18-36.61-84.29-61.95-13.49-9.83-5.37-5.34c-4.93-6.17-5.58-14.18-3.28-21.66,4.86-15.78,20.45-22.36,35.13-28.62l-4.06-1.44c-10.87-3.86-21.19-8.85-29.05-17.23-8.23-8.77-13.66-18.82-16.76-30.44-8.26-30.94,2.01-64.84,23.68-88.47,17.21-18.77,40.48-30.89,65.83-34.58l7.89-.63,11.91.02c31.47,1.88,60.04,16.98,78.85,42.28,5.72-8.96,14.77-14.9,25.58-14.92l64.54-.12c2.18,0,4.25-1.32,4.94-2.76.92-1.91.41-4.34-.98-5.72l-6.26-6.17-18.38-18.54-19.52-19.55-11.25-11.29c-2.01-2.01-4.66-3.26-7.59-3.26h-25.92c-4.43,0-7.53-1.97-10.59-4.91l-8.93-8.56c-.19-.18-.35-.61-.4-1.14l50.92-.09c3,.6,6.15,1.05,8.24,3.13l13.64,13.61,18.14,18.31,18.11,18.33,11.95,12.25c5.54,5.68,5.35,15.35,1.31,22.09-3.26,5.44-9.41,9.18-15.99,9.21l-66.71.31c-5.71.03-10.74,4.54-13.35,9.04-2.1,3.62-2.25,7.65-3.02,11.45-.58,2.9-3.64,4.23-5.93,4.1-3-.17-4.99-1.7-6.25-4.37-3.61-7.63-9.09-13.79-14.73-20.09-4.73-5.28-10.05-9.3-16.02-13.39-14.14-9.68-30.81-14.52-48.18-15.14-21.88-.78-44.19,6.93-61.15,20.53-21.85,17.53-34.8,43.97-33.39,71.69.63,12.45,4.3,24.28,11.77,34.21,12.71,16.89,35.73,21.85,56.11,24.36,2.85.35,3.62,3.79,3.54,5.84-.11,3.03-2.05,4.27-4.97,5.3-11.75,4.16-23.05,8.99-34.03,14.84-7.86,4.18-16.27,9.98-15.88,18.66.2,4.44,2.61,7.21,5.91,9.63l35.31,25.87,47.67,35.07,13.71,9.94c5.02,3.64,5.86,9.29,3.48,14.81l-11.89,27.58c-.81.8-.21,1.21.69.77l37.03-27.94c.91-.68,1.14-3.77.34-4.59l-4.23-4.38-5.51-5.4-25.68-25.64-25.92-25.93-16.48-16.48c-.9-.9-.88-3.51-.25-4.59.56-.96,2.16-2.32,3.44-2.53l9.93-1.61c25.67-4.16,49.42-16.06,67.39-34.52,9.02-9.26,15.83-19.6,21.11-31.3,8.65-19.15,11.65-39.79,8.64-60.54-.48-3.29.98-6.32,3.77-7.39s7.08-.46,8.15,3Z"
                    stroke="url(#logoStrokeGrad)"
                    strokeWidth="11"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="url(#logoStrokeGrad)"
                    fillOpacity={logoFillOpacity}
                    strokeDasharray={logoPathLength}
                    strokeDashoffset={logoStrokeDashoffset}
                    className="transition-all duration-75 ease-out"
                  />

                  {/* LOGO PATH 2 (KANGAROO HEAD & EARS) */}
                  <path
                    d="M122.69,45.34l-15.72-15.64-.21,10.41.02,6.64-.06,30.47-.03,24.69c0,8.75,6.47,16.87,15.86,17.44l31.84.35c4.2.05,7.73,1.67,10.52,4.47l10.48,10.59-51.77.09c-15.93.03-28.67-10.64-31.21-26.26V3.52c0-1.49,1.93-2.81,2.95-3.21,1.34-.52,3.69-.45,4.8.63l4.72,4.61,18.69,18.78,23.85,23.92,25.9,25.92,15.07,15.31,19.03,18.95c.18.28.7.96.53,1.15l-1.11,1.27-18.77-.03-16.28-16.28-18.17-18.34-30.93-30.86Z"
                    stroke="url(#logoStrokeGrad)"
                    strokeWidth="11"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="url(#logoStrokeGrad)"
                    fillOpacity={logoFillOpacity}
                    strokeDasharray={logoPathLength}
                    strokeDashoffset={logoStrokeDashoffset}
                    className="transition-all duration-75 ease-out"
                  />
                </svg>
              </div>
            </div>

            {/* TELEMETRY COUNTER & PHASE DISPLAY */}
            <div className="mt-8 flex flex-col items-center text-center space-y-2">
              <div className="font-display text-5xl sm:text-6xl font-black tracking-tighter bg-gradient-to-r from-[#FF7A1A] via-[#FFA665] to-white bg-clip-text text-transparent filter drop-shadow-[0_0_16px_rgba(255,122,26,0.45)]">
                {progress < 10 ? `0${progress}` : progress}
                <span className="text-xl sm:text-2xl text-[#FF7A1A] font-mono ml-1">%</span>
              </div>

              {/* DYNAMIC PROGRESS PHASE STATUS */}
              <div className="h-6 flex items-center justify-center">
                <span className="font-mono text-xs sm:text-sm text-[#FF7A1A] tracking-[0.22em] uppercase font-bold">
                  [ {getPhaseText(progress)} ]
                </span>
              </div>
            </div>

            {/* HIGH-PRECISION GLOWING PROGRESS BAR TRACK */}
            <div className="w-56 sm:w-72 h-1.5 bg-zinc-900/90 rounded-full mt-4 overflow-hidden relative border border-zinc-800/80 shadow-inner">
              <motion.div
                style={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-[#FF7A1A] via-[#FFA665] to-[#EA580C] rounded-full transition-all duration-75 ease-out shadow-[0_0_15px_#FF7A1A]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
