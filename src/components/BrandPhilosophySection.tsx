import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface BrandPhilosophyProps {
  isDarkMode?: boolean;
}

const linesData = [
  "The strongest brands aren't built through isolated services",
  "They're built when strategy, creativity, technology and execution",
  "work together toward a single unified goal",
];

// Helper Word Component with smooth scroll-driven opacity & subtle Y-rise
const Word: React.FC<{
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  isDarkMode?: boolean;
}> = ({ word, progress, range, isDarkMode }) => {
  const wordOpacity = useTransform(progress, range, [0.1, 1]);
  const wordY = useTransform(progress, range, [10, 0]);

  return (
    <span className="relative inline-block mr-[0.25em] last:mr-0">
      {/* Ghost text at 10% opacity */}
      <span
        className={`opacity-10 pointer-events-none select-none ${
          isDarkMode ? 'text-[#27272A]' : 'text-[#E4E4E7]'
        }`}
      >
        {word}
      </span>
      {/* Active text revealing to 100% opacity with scroll */}
      <motion.span
        style={{ opacity: wordOpacity, y: wordY }}
        className={`absolute inset-0 ${isDarkMode ? 'text-white' : 'text-[#111111]'}`}
      >
        {word}
      </motion.span>
    </span>
  );
};

export const BrandPhilosophySection: React.FC<BrandPhilosophyProps> = ({ isDarkMode }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll progress target over section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 85%', 'end 45%'],
  });

  // Calculate total word count across all 3 lines
  const allWords = linesData.flatMap((line) => line.split(' '));
  const totalWords = allWords.length;

  let globalWordIndex = 0;

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`relative pt-16 sm:pt-24 pb-6 transition-colors duration-500 overflow-hidden ${
        isDarkMode ? 'bg-[#0A0A0A]' : 'bg-[#FAFAFA]'
      }`}
    >
      {/* Background Accent Grid */}
      <div
        className={`absolute inset-0 bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_0%_50%,#000_70%,transparent_100%)] pointer-events-none ${
          isDarkMode
            ? 'bg-[linear-gradient(to_right,#27272A40_1px,transparent_1px),linear-gradient(to_bottom,#27272A40_1px,transparent_1px)]'
            : 'bg-[linear-gradient(to_right,#E4E4E760_1px,transparent_1px),linear-gradient(to_bottom,#E4E4E760_1px,transparent_1px)]'
        }`}
      />

      {/* Pulsing Backlight Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={`absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-3xl pointer-events-none ${
          isDarkMode ? 'bg-[#F97316]/15' : 'bg-[#F97316]/10'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-left w-full"
        >
          <h2
            className={`font-display font-medium tracking-tighter text-[clamp(0.95rem,1.85vw,2.15rem)] leading-[1.12] ${
              isDarkMode ? 'text-white' : 'text-[#111111]'
            }`}
          >
            {linesData.map((line, lineIdx) => {
              const wordsInLine = line.split(' ');
              return (
                <span key={lineIdx} className="block">
                  {wordsInLine.map((word, wIdx) => {
                    const currentIndex = globalWordIndex++;
                    const start = currentIndex / totalWords;
                    const end = Math.min(1, (currentIndex + 1.2) / totalWords);

                    return (
                      <Word
                        key={`${lineIdx}-${wIdx}`}
                        word={word}
                        progress={scrollYProgress}
                        range={[start, end]}
                        isDarkMode={isDarkMode}
                      />
                    );
                  })}
                </span>
              );
            })}
          </h2>
        </motion.div>
      </div>
    </section>
  );
};
