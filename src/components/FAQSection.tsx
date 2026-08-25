import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { AlphaRoosButton } from './AlphaRoosButton';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  onOpenInquiry?: () => void;
  isDarkMode?: boolean;
}

const faqData: FAQItem[] = [
  {
    id: 'diff-agencies',
    question: 'What makes Roos StudioX different from traditional agencies?',
    answer:
      "Most agencies operate in isolated silos—designers don't talk to engineers, and marketers don't understand product architecture. Roos StudioX operates as one integrated creative intelligence studio combining brand strategy, UI/UX design, full-stack engineering, custom AI automation, and growth marketing under one roof.",
  },
  {
    id: 'custom-platforms',
    question: 'Do you build custom websites, web apps, and mobile platforms?',
    answer:
      'Yes. We specialize in high-performance web development, full-stack web applications, custom customer portals, and mobile-responsive experiences engineered for sub-100ms load speeds, Lighthouse 99+ scores, and cloud scalability.',
  },
  {
    id: 'ai-automation',
    question: 'How does Roos StudioX integrate AI & Automation into existing businesses?',
    answer:
      'We build autonomous AI agents, LLM RAG pipelines, internal knowledge search engines, and API workflow automations that eliminate repetitive manual tasks, accelerate research, and save 85%+ operational hours.',
  },
  {
    id: 'startups-enterprises',
    question: 'Do you partner with early-stage startups or established enterprises?',
    answer:
      'Both. We partner with ambitious tech startups launching category-defining products, scaling businesses looking to expand revenue, and enterprise organizations undergoing digital transformation.',
  },
  {
    id: 'timeline-process',
    question: 'What is the typical project timeline and delivery process?',
    answer:
      'Project timelines vary based on scope. Focused web design and brand positioning projects typically range from 2 to 4 weeks, while full-stack software platforms and AI automation systems range from 6 to 12 weeks with transparent milestone reporting.',
  },
  {
    id: 'post-launch-scaling',
    question: 'Do you offer post-launch support & growth scaling?',
    answer:
      'Absolutely. Launching is just step one. We provide ongoing performance monitoring, conversion rate optimization (CRO), search engine optimization (SEO/GEO/AEO), and continuous feature engineering to support long-term business growth.',
  },
];

// Helper Word Component for Fast Scroll-Reveal Text Animation
const RevealWord: React.FC<{
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  isDarkMode?: boolean;
  isOrange?: boolean;
}> = ({ word, progress, range, isDarkMode, isOrange = false }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <span className="relative inline-block mr-[0.25em] last:mr-0">
      {/* Ghost text at ~15% opacity */}
      <span
        className={`opacity-15 pointer-events-none select-none ${
          isOrange
            ? 'text-[#F97316]/30'
            : isDarkMode
            ? 'text-[#27272A]'
            : 'text-[#E4E4E7]'
        }`}
      >
        {word}
      </span>
      {/* Active text revealing to 100% opacity on scroll */}
      <motion.span
        style={{ opacity }}
        className={`absolute inset-0 ${
          isOrange
            ? 'bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#FDBA74] bg-clip-text text-transparent font-bold'
            : isDarkMode
            ? 'text-white font-bold'
            : 'text-[#111111] font-bold'
        }`}
      >
        {word}
      </motion.span>
    </span>
  );
};

export const FAQSection: React.FC<FAQSectionProps> = ({
  onOpenInquiry,
  isDarkMode = false,
}) => {
  // All accordion items closed by default on initial page load
  const [openId, setOpenId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Fast Scroll Progress Target
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 90%', 'start 40%'],
  });

  const subtitleWordData = [
    // Line 1: Everything you need to
    { word: 'Everything', lineIndex: 0, isOrange: false },
    { word: 'you', lineIndex: 0, isOrange: false },
    { word: 'need', lineIndex: 0, isOrange: false },
    { word: 'to', lineIndex: 0, isOrange: false },
    // Line 2: know about partnering
    { word: 'know', lineIndex: 1, isOrange: false },
    { word: 'about', lineIndex: 1, isOrange: false },
    { word: 'partnering', lineIndex: 1, isOrange: false },
    // Line 3: with Roos StudioX.
    { word: 'with', lineIndex: 2, isOrange: false },
    { word: 'Roos', lineIndex: 2, isOrange: true },
    { word: 'StudioX.', lineIndex: 2, isOrange: true },
  ];

  const totalWords = subtitleWordData.length;

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className={`relative py-16 sm:py-24 transition-colors duration-500 overflow-hidden ${
        isDarkMode ? 'bg-[#0A0A0A] text-white' : 'bg-white text-[#111111]'
      }`}
    >
      {/* Background Mesh */}
      <div
        className={`absolute inset-0 bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none ${
          isDarkMode
            ? 'bg-[linear-gradient(to_right,#27272A30_1px,transparent_1px),linear-gradient(to_bottom,#27272A30_1px,transparent_1px)]'
            : 'bg-[linear-gradient(to_right,#F9731615_1px,transparent_1px),linear-gradient(to_bottom,#F9731615_1px,transparent_1px)]'
        }`}
      />

      {/* Dynamic Brand Ambient Backlight */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#F97316]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Centered Max-Width Container (max-w-7xl mx-auto) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Two-Column Layout (Zero changes to sizes or line breaks, purely centered block) */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-center">
          
          {/* Left Column (Exact sizes & line breaks maintained) */}
          <div className="w-full lg:w-[38%] max-w-xl lg:sticky lg:top-28 space-y-5">
            
            {/* Giant Display Hero FAQ Title */}
            <h2 className="font-display text-5xl sm:text-7xl font-extrabold tracking-tighter leading-none text-gradient-brand">
              FAQ
            </h2>

            {/* Sub-headline with 3 Explicit Lines */}
            <h3 className="font-display text-2xl sm:text-3xl md:text-[34px] font-bold tracking-tight leading-[1.14]">
              {[0, 1, 2].map((lineIdx) => {
                const lineWords = subtitleWordData.filter((item) => item.lineIndex === lineIdx);
                return (
                  <span key={lineIdx} className="block">
                    {lineWords.map((item, wIdx) => {
                      const currentIndex = subtitleWordData.indexOf(item);
                      const start = (currentIndex / totalWords) * 0.6;
                      const end = Math.min(1, start + 0.35);

                      return (
                        <RevealWord
                          key={`${lineIdx}-${wIdx}`}
                          word={item.word}
                          progress={scrollYProgress}
                          range={[start, end]}
                          isDarkMode={isDarkMode}
                          isOrange={item.isOrange}
                        />
                      );
                    })}
                  </span>
                );
              })}
            </h3>

            {/* Description Text: Formatted in EXACTLY 2 Clean Lines */}
            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isDarkMode ? 'text-[#D4D4D8]' : 'text-[#52525B]'
              }`}
            >
              <span className="block sm:whitespace-nowrap">Have a custom inquiry or specific project requirement?</span>
              <span className="block sm:whitespace-nowrap mt-0.5">We're here to help you architect your next growth phase.</span>
            </p>

            {/* CTA Button */}
            {onOpenInquiry && (
              <div className="pt-1">
                <AlphaRoosButton onClick={onOpenInquiry} isDarkMode={isDarkMode} />
              </div>
            )}

          </div>

          {/* Right Column (62% Width / max-w-3xl): ALL 6 QUESTIONS IN EXACTLY 1 SINGLE LINE */}
          <div className="w-full lg:w-[62%] max-w-3xl space-y-3">
            {faqData.map((item) => {
              const isOpen = openId === item.id;

              return (
                <motion.div
                  key={item.id}
                  layout
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? isDarkMode
                        ? 'bg-[#18181B] border-[#F97316] shadow-lg shadow-[#F97316]/10 ring-1 ring-[#F97316]/40'
                        : 'bg-white border-[#F97316] shadow-md shadow-[#F97316]/10 ring-1 ring-[#F97316]/30'
                      : isDarkMode
                      ? 'bg-[#111111]/90 hover:bg-[#18181B] border-[#27272A] hover:border-[#F97316]/50'
                      : 'bg-[#FAFAFA] hover:bg-white border-[#E4E4E7] hover:border-[#F97316]/50 shadow-2xs'
                  }`}
                >
                  {/* Accordion Header / Question (Enforced Single Line) */}
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-display text-[14.5px] sm:text-[16px] md:text-[17px] font-bold tracking-tight leading-none transition-colors sm:whitespace-nowrap overflow-hidden text-ellipsis ${
                        isOpen
                          ? 'text-[#F97316]'
                          : isDarkMode
                          ? 'text-white group-hover:text-[#F97316]'
                          : 'text-[#111111] group-hover:text-[#F97316]'
                      }`}
                    >
                      {item.question}
                    </span>

                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#F97316] text-white rotate-180'
                          : isDarkMode
                          ? 'bg-[#27272A] text-[#D4D4D8]'
                          : 'bg-[#F4F4F5] text-[#52525B]'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Accordion Body / Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div
                          className={`px-5 pb-6 sm:px-6 sm:pb-6 text-sm sm:text-base leading-relaxed border-t pt-4 ${
                            isDarkMode
                              ? 'border-[#27272A] text-[#D4D4D8]'
                              : 'border-[#E4E4E7] text-[#52525B]'
                          }`}
                        >
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
