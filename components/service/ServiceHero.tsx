'use client';

import { motion, useMotionValue, animate, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import Link from 'next/link';
import { Service } from '@/data/types';

interface ServiceHeroProps {
  service: Service;
  compact?: boolean;
}

// 🎨 Sub-component for individual character animation
function AnimatedChar({ char, index, progress }: { char: string, index: number, progress: any }) {
  const stagger = 0.03;
  const duration = 0.15;
  const start = index * stagger;
  const end = start + duration;

  // Map the global progress (0-1) to local scale and color
  const scale = useTransform(progress, (p: number) => {
    if (p < start || p > end) return 1;
    const local = (p - start) / duration;
    return 1 - 0.5 * Math.sin(local * Math.PI);
  });

  const color = useTransform(progress, (p: number) => {
    if (p < start || p > end) return "#C8A96E";
    return "#F1E4C9";
  });

  return (
    <motion.span
      style={{ scale, color }}
      className="inline-block will-change-transform"
    >
      {char}
    </motion.span>
  );
}

export default function ServiceHero({ service, compact }: ServiceHeroProps) {
  const { heroTitle: title, heroSubtitle: subtitle, heroTag: tag } = service;
  const progress = useMotionValue(0);

  useEffect(() => {
    const controls = animate(progress, 1, {
      duration: 2.2, // total animation cycle
      ease: "linear",
      repeat: Infinity,
      repeatDelay: 1, // 1s pause after full sequence
    });
    return () => controls.stop();
  }, [progress]);

  const targetWords = ['writing', 'services', 'editing', 'design', 'publishing', 'printing', 'marketing', 'audio', 'story', 'remarkable', 'about', 'conditions', 'policy'];
  const allWords = title.split(" ");

  return (
    <section
      id="top"
      className={`relative overflow-hidden flex items-center ${compact
        ? "pt-36 pb-24 md:pt-48 md:pb-32 min-h-[60vh] md:min-h-[75vh]"
        : "pt-52 pb-40 md:pt-64 md:pb-48 min-h-screen"
        }`}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-[#0F2440]/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2440]/40 via-transparent to-[#0F2440]/90" />
      </div>

      <div className="container-pad relative z-10 w-full flex flex-col items-center text-center">
        <div className="max-w-6xl flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-[#C8A96E] font-bold text-sm tracking-[0.3em] uppercase mb-8"
          >
            {tag}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-sans leading-[1.1] mb-10 tracking-tight"
          >
            <div className="flex flex-wrap justify-center items-center gap-x-[0.2em] md:whitespace-nowrap">
              {allWords.map((word, wordIdx) => {
                const cleanWord = word.toLowerCase().replace(/[.,!]/g, '');
                const isTarget = targetWords.includes(cleanWord);

                if (isTarget) {
                  let charOffset = 0;
                  for (let i = 0; i < wordIdx; i++) {
                    const cleanPrev = allWords[i].toLowerCase().replace(/[.,!]/g, '');
                    if (targetWords.includes(cleanPrev)) {
                      charOffset += allWords[i].length + 1; // +1 for the space
                    }
                  }

                  return (
                    <span key={wordIdx} className="inline-block">
                      {word.split("").map((char, charIdx) => (
                        <AnimatedChar
                          key={charIdx}
                          char={char}
                          index={charOffset + charIdx}
                          progress={progress}
                        />
                      ))}
                    </span>
                  );
                }

                return (
                  <span key={wordIdx} className="inline-block text-white">
                    {word}
                  </span>
                );
              })}
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 italic max-w-4xl mx-auto leading-relaxed opacity-90 whitespace-pre-line mb-12"
          >
            {subtitle}
          </motion.p>


          {/* Closing Line */}
          {service.heroClosing && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-12 text-[#C8A96E] font-medium italic opacity-80 text-lg md:text-xl max-w-2xl mx-auto border-t border-white/10 pt-8"
            >
              {service.heroClosing}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
