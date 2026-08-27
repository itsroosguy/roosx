import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface PreFooterCTAProps {
  onOpenInquiry: () => void;
  isDarkMode?: boolean;
}

export const PreFooterCTA: React.FC<PreFooterCTAProps> = ({
  onOpenInquiry,
  isDarkMode = true,
}) => {
  const [emailInput, setEmailInput] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        onOpenInquiry();
        setIsSubmitted(false);
      }, 800);
    } else {
      onOpenInquiry();
    }
  };

  // Corner floating avatar headshots with custom motion vectors
  const cornerAvatars = [
    {
      pos: 'top-6 left-6 sm:top-10 sm:left-12',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80',
      name: 'Sarah K., Founder',
      size: 'w-14 h-14 sm:w-20 sm:h-20',
      animateY: [0, -14, 0, 10, 0],
      animateX: [0, 6, -4, 0],
      duration: 7,
    },
    {
      pos: 'top-6 right-6 sm:top-10 sm:right-12',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80',
      name: 'Marcus V., Tech Lead',
      size: 'w-14 h-14 sm:w-20 sm:h-20',
      animateY: [0, 12, -10, 0],
      animateX: [0, -8, 5, 0],
      duration: 8.5,
    },
    {
      pos: 'bottom-6 left-6 sm:bottom-10 sm:left-12',
      img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=160&auto=format&fit=crop&q=80',
      name: 'Elena R., Marketing VP',
      size: 'w-14 h-14 sm:w-20 sm:h-20',
      animateY: [0, -10, 14, 0],
      animateX: [0, -5, 7, 0],
      duration: 6.5,
    },
    {
      pos: 'bottom-6 right-6 sm:bottom-10 sm:right-12',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&auto=format&fit=crop&q=80',
      name: 'David L., CEO',
      size: 'w-14 h-14 sm:w-20 sm:h-20',
      animateY: [0, 15, -8, 0],
      animateX: [0, 6, -6, 0],
      duration: 9,
    },
  ];

  return (
    <section
      className={`relative py-20 sm:py-28 transition-colors duration-500 overflow-hidden ${
        isDarkMode ? 'bg-[#050505] text-white' : 'bg-[#FAF9F6] text-[#111111]'
      }`}
    >
      {/* Architectural Background Grid */}
      <div
        className={`absolute inset-0 bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none ${
          isDarkMode
            ? 'bg-[linear-gradient(to_right,#27272A20_1px,transparent_1px),linear-gradient(to_bottom,#27272A20_1px,transparent_1px)]'
            : 'bg-[linear-gradient(to_right,#E4E4E780_1px,transparent_1px),linear-gradient(to_bottom,#E4E4E780_1px,transparent_1px)]'
        }`}
      />

      {/* Ambient Orange Backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-radial from-[#FF7A1A]/16 via-[#FF7A1A]/3 to-transparent blur-[160px] pointer-events-none opacity-80" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ROUNDED BANNER CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`rounded-[36px] p-8 sm:p-16 md:p-20 relative overflow-hidden backdrop-blur-2xl transition-colors duration-500 text-center shadow-2xl border ${
            isDarkMode
              ? 'bg-[#0A0A0C]/95 border-zinc-800/90 text-white shadow-black/80 ring-1 ring-zinc-800/50'
              : 'bg-white border-zinc-200 text-[#111111] shadow-xl'
          }`}
        >
          
          {/* 4 CORNER CONTINUOUSLY ANIMATED CIRCULAR AVATAR PORTRAITS */}
          {cornerAvatars.map((av, idx) => (
            <motion.div
              key={idx}
              animate={{
                y: av.animateY,
                x: av.animateX,
                scale: [1, 1.06, 1],
              }}
              transition={{
                duration: av.duration,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className={`absolute ${av.pos} z-20 pointer-events-none hidden sm:block`}
            >
              <div className="relative group">
                <img
                  src={av.img}
                  alt={av.name}
                  className={`${av.size} rounded-full object-cover border-2 shadow-2xl transition-transform duration-300 ${
                    isDarkMode ? 'border-[#FF7A1A]/60 shadow-[#FF7A1A]/20' : 'border-[#FF7A1A]/80 shadow-black/10'
                  }`}
                />
              </div>
            </motion.div>
          ))}

          {/* CENTER COLUMN CONTENT */}
          <div className="max-w-3xl mx-auto space-y-6 relative z-10 pt-2">
            
            {/* CENTER HEADLINE */}
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08]">
              <span
                className={
                  isDarkMode
                    ? 'bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent block pb-1'
                    : 'text-[#111111] block pb-1'
                }
              >
                Starting a new project or
              </span>
              <span className="bg-gradient-to-r from-[#FF7A1A] via-[#FF944D] to-[#EA580C] bg-clip-text text-transparent inline-block">
                want to collaborate with us?
              </span>
            </h2>

            {/* SUBHEAD DESCRIPTION */}
            <p className={`text-sm sm:text-base md:text-lg font-medium max-w-xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              Welcome to Roos StudioX. We build high-converting digital products, brand authority, and growth systems engineered for momentum.
            </p>

            {/* INTERACTIVE EMAIL / ACTION CAPSULE BAR */}
            <form
              onSubmit={handleSubmit}
              className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto"
            >
              <div className="relative w-full sm:w-auto flex-1">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your email for growth audit..."
                  className={`w-full px-6 py-4 rounded-full text-xs sm:text-sm font-medium transition-all outline-none border ${
                    isDarkMode
                      ? 'bg-[#121215] text-white border-zinc-800 focus:border-[#FF7A1A] placeholder:text-zinc-500'
                      : 'bg-zinc-100 text-[#111111] border-zinc-300 focus:border-[#FF7A1A] placeholder:text-zinc-400'
                  }`}
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FF7A1A] text-white font-mono font-extrabold text-xs uppercase tracking-wider hover:bg-[#FF8833] transition-all shadow-[0_10px_30px_rgba(255,122,26,0.4)] cursor-pointer flex items-center justify-center gap-2 shrink-0 group"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>Booking...</span>
                  </>
                ) : (
                  <>
                    <span>Book A Demo</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* CENTERED SOCIAL PROOF AVATAR STACK */}
            <div className="pt-4 flex items-center justify-center">
              <div className="flex -space-x-2.5">
                {[
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
                  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Founder avatar"
                    className="w-8 h-8 rounded-full border-2 border-[#0A0A0C] object-cover shadow-md"
                  />
                ))}
                <div className="w-8 h-8 rounded-full bg-[#FF7A1A] border-2 border-[#0A0A0C] flex items-center justify-center text-[10px] font-mono font-bold text-white shadow-md">
                  +
                </div>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
