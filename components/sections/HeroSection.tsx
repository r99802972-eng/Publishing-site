'use client';
import { useEffect } from 'react';
import { motion, useMotionValue, animate, useTransform } from 'framer-motion';

// 🎨 Sub-component for individual character pulse
function AnimatedChar({ char, index, progress }: { char: string, index: number, progress: any }) {
  const stagger = 0.03;
  const duration = 0.15;
  const start = index * stagger;
  const end = start + duration;

  const scale = useTransform(progress, (p: number) => {
    if (p < start || p > end) return 1;
    const local = (p - start) / duration;
    return 1 - 0.4 * Math.sin(local * Math.PI);
  });

  const color = useTransform(
    progress, 
    [start, start + duration / 2, end], 
    ["#C8A96E", "#FFFFFF", "#C8A96E"]
  );

  return (
    <motion.span 
      style={{ scale, color }} 
      className="inline-block will-change-transform whitespace-pre"
    >
      {char}
    </motion.span>
  );
}

export default function HeroSection() {
  const progress = useMotionValue(0);

  useEffect(() => {
    const controls = animate(progress, 1, {
      duration: 2.8,
      ease: "linear",
      repeat: Infinity,
      repeatDelay: 1,
    });
    return () => controls.stop();
  }, [progress]);

  return (
    <section id="top" className="relative min-h-[120vh] flex flex-col overflow-hidden">

      {/* ── Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/14116558-uhd_3840_2160_60fps.mp4" type="video/mp4" />
        </video>
        {/* Cinematic Overlay */}
        <div 
          className="absolute inset-0 z-10" 
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)' }}
        />
      </div>

      {/* ── Hero Text — centred in the space above the contact strip */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 md:px-12 pt-48 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="text-center"
        >
          {/* Line 1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] font-display font-medium text-white leading-tight tracking-tight mb-2">
            From Blank Page to
          </h1>

          {/* Line 2 — synchronized pulse */}
          <div className="flex items-center justify-center overflow-visible text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[4.5rem] font-display font-bold leading-tight">
            {"Published Book".split("").map((char, i) => (
              <AnimatedChar 
                key={i} 
                char={char} 
                index={i} 
                progress={progress} 
              />
            ))}
          </div>

          {/* Line 3 — Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-[#C8A96E] font-bold tracking-[0.4em] uppercase text-sm sm:text-base md:text-lg"
          >
            We Make It Happen.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-8 text-gray-300 text-lg md:text-xl max-w-3xl mx-auto italic leading-relaxed opacity-80"
          >
            We turn your idea into a professionally written, designed, and published book that actually gets noticed on Amazon and beyond.
          </motion.p>
        </motion.div>
      </div>

      {/* ── Contact Strip — pinned to bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-10 w-full mb-6"
      >
        <div
          className="mx-4 md:mx-8 lg:mx-10 px-8 md:px-12 py-8 flex flex-col xl:flex-row items-center gap-8 lg:gap-12 rounded-2xl backdrop-blur-sm"
          style={{ background: 'rgba(0,0,0,0.7)' }}
        >
          {/* Label */}
          <div className="flex-shrink-0">
            <p className="text-white font-bold text-2xl md:text-3xl uppercase tracking-tight leading-none text-center xl:text-left">
              GET IN<br />TOUCH
            </p>
          </div>

          {/* Form */}
          <form className="flex-1 w-full flex flex-col xl:flex-row xl:flex-nowrap gap-6 items-center">
            <div className="flex-1 min-w-0 w-full">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent text-white text-base placeholder-gray-300 outline-none pb-2 border-b border-white/40 focus:border-white transition-colors"
              />
            </div>
            <div className="flex-1 min-w-0 w-full">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent text-white text-base placeholder-gray-300 outline-none pb-2 border-b border-white/40 focus:border-white transition-colors"
              />
            </div>
            <div className="flex-1 min-w-0 w-full">
              <input
                type="tel"
                placeholder="Phone"
                className="w-full bg-transparent text-white text-base placeholder-gray-300 outline-none pb-2 border-b border-white/40 focus:border-white transition-colors"
              />
            </div>
            <div className="flex-1 min-w-0 relative w-full">
              <select
                defaultValue=""
                className="w-full bg-transparent text-gray-300 text-base outline-none pb-2 border-b border-white/40 focus:border-white appearance-none cursor-pointer"
              >
                <option value="" disabled className="bg-[#1a1a1a] text-white">Services</option>
                <option value="writing" className="bg-[#1a1a1a] text-white">Writing</option>
                <option value="editing" className="bg-[#1a1a1a] text-white">Editing</option>
                <option value="design" className="bg-[#1a1a1a] text-white">Design</option>
                <option value="illustration" className="bg-[#1a1a1a] text-white">Illustration</option>
                <option value="publishing" className="bg-[#1a1a1a] text-white">Publishing</option>
                <option value="printing" className="bg-[#1a1a1a] text-white">Printing</option>
                <option value="marketing" className="bg-[#1a1a1a] text-white">Marketing</option>
                <option value="author-website" className="bg-[#1a1a1a] text-white">Author Website</option>
                <option value="audio-book" className="bg-[#1a1a1a] text-white">Audio Book</option>
              </select>
              <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-full text-white text-xs">▾</span>
            </div>
            <button
              type="submit"
              className="flex-shrink-0 font-bold text-base px-10 py-4 rounded-full transition-all hover:scale-105 active:scale-95 flex items-center gap-2 whitespace-nowrap"
              style={{
                background: '#C8A96E',
                color: '#0A1D37',
                boxShadow: '0 10px 25px rgba(200,169,110,0.2)',
              }}
            >
              Start My Book Journey <span className="text-xl leading-none">›</span>
            </button>
          </form>
        </div>

        {/* Explore */}
        <div className="flex flex-col items-center py-6">
          <a
            href="#services"
            className="text-[#C8A96E] text-lg px-14 py-4 rounded-full transition-all hover:bg-[#C8A96E]/10"
            style={{ border: '1px solid rgba(200,169,110,0.4)' }}
          >
            Book Free Strategy Call
          </a>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 text-gray-400 text-sm md:text-base font-medium opacity-60 tracking-wide text-center px-6"
          >
            Most authors never finish. The ones who do? <br className="sm:hidden" />
            <span className="text-[#C8A96E]/80 whitespace-nowrap">They don’t do it alone.</span>
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
