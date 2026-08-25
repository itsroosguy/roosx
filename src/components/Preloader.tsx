import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
  isDarkMode?: boolean;
}

const statusMessages = [
  { threshold: 0, text: 'INITIALIZING CORE' },
  { threshold: 25, text: 'LOADING BRAND SYSTEMS' },
  { threshold: 55, text: 'SYNCHRONIZING EXPERIENCES' },
  { threshold: 85, text: 'FINALIZING STUDIO ENGINE' },
  { threshold: 100, text: 'STUDIO READY' },
];

export const Preloader: React.FC<PreloaderProps> = ({
  onComplete,
}) => {
  const [progress, setProgress] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  useEffect(() => {
    const DURATION = 3000; // Exactly 3 seconds speed
    const INTERVAL_TIME = 30;
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
        }, 200);
      }
    }, INTERVAL_TIME);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Find active status message based on progress percentage
  const currentStatus =
    [...statusMessages].reverse().find((s) => progress >= s.threshold)?.text ||
    'INITIALIZING CORE';

  // SVG Gauge calculations (radius = 85, circumference = 2 * PI * 85 = ~534.07)
  const radius = 85;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence mode="wait">
      {!isFinished && (
        <motion.div
          key="preloaderCurtain"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: '-100%',
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0A0A] text-white select-none overflow-hidden"
        >
          {/* Background Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.15)_0%,transparent_70%)] pointer-events-none" />

          {/* Background Architectural Mesh */}
          <div className="absolute inset-0 bg-[size:4rem_4rem] bg-[linear-gradient(to_right,#27272A30_1px,transparent_1px),linear-gradient(to_bottom,#27272A30_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

          {/* Core Gauge Stage */}
          <div className="relative flex flex-col items-center justify-center z-10">
            {/* SVG Circular Progress Gauge Ring */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                <defs>
                  <linearGradient id="brandGaugeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F97316" />
                    <stop offset="50%" stopColor="#FB923C" />
                    <stop offset="100%" stopColor="#EA580C" />
                  </linearGradient>
                </defs>

                {/* Track Circle */}
                <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  stroke="#18181B"
                  strokeWidth="6"
                  fill="transparent"
                />

                {/* Fill Circle */}
                <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  stroke="url(#brandGaugeGrad)"
                  strokeWidth="6"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-75 ease-out"
                />
              </svg>

              {/* Centered Brand Mark / Logo */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-6">
                <img
                  src="/logo.png"
                  alt="Roos StudioX"
                  className="w-24 sm:w-28 h-auto object-contain drop-shadow-[0_0_20px_rgba(249,115,22,0.4)] animate-pulse"
                />
              </div>
            </div>

            {/* Telemetry Counter & Status Bar */}
            <div className="mt-8 flex flex-col items-center gap-2 text-center">
              <div className="font-display text-4xl sm:text-5xl font-black tracking-tighter bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#FDBA74] bg-clip-text text-transparent">
                {progress}%
              </div>

              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-[#F97316] animate-ping" />
                <span className="text-[#F97316]">{currentStatus}</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
