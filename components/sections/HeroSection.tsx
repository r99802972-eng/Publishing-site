'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-[120vh] flex flex-col overflow-hidden">

      {/* ── Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop')" }}
      />
      <div 
        className="absolute inset-0 z-0" 
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%)' }}
      />

      {/* ── Hero Text — centred in the space above the contact strip */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 md:px-12 pt-48 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="text-center"
        >
          {/* Line 1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] font-display font-bold text-white leading-tight tracking-tight">
            Turning Manuscripts Into
          </h1>

          {/* Line 2 — per-character wave */}
          <div className="flex items-center justify-center overflow-visible mt-4">
            {"Masterpieces".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{
                  opacity: 1,
                  y: [0, -6, 0],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  opacity: { duration: 0.4, delay: i * 0.04 },
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: 0.5 + i * 0.09,
                  },
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: 0.5 + i * 0.09,
                  },
                }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] font-display font-bold inline-block whitespace-pre leading-tight"
                style={{ color: '#C8A96E' }}
              >
                {char}
              </motion.span>
            ))}
          </div>
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
          className="mx-4 md:mx-8 lg:mx-10 px-8 md:px-12 py-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 rounded-2xl backdrop-blur-sm"
          style={{ background: 'rgba(0,0,0,0.7)' }}
        >
          {/* Label */}
          <div className="flex-shrink-0">
            <p className="text-white font-bold text-2xl md:text-3xl uppercase tracking-tight leading-none">
              GET IN<br />TOUCH
            </p>
          </div>

          {/* Form */}
          <form className="flex-1 w-full flex flex-col sm:flex-row flex-wrap lg:flex-nowrap gap-6 items-center">
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
                <option value="publishing" className="bg-[#1a1a1a] text-white">Publishing</option>
              </select>
              <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-full text-white text-xs">▾</span>
            </div>
            <button
              type="submit"
              className="flex-shrink-0 font-bold text-base px-10 py-4 rounded-full transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              style={{
                background: '#C8A96E',
                color: '#0A1D37',
                boxShadow: '0 10px 25px rgba(200,169,110,0.2)',
              }}
            >
              Send <span className="text-xl leading-none">›</span>
            </button>
          </form>
        </div>

        {/* Explore */}
        <div className="flex justify-center py-6">
          <a
            href="#services"
            className="text-[#C8A96E] text-lg px-14 py-4 rounded-full transition-all hover:bg-[#C8A96E]/10"
            style={{ border: '1px solid rgba(200,169,110,0.4)' }}
          >
            Explore Our Services
          </a>
        </div>
      </motion.div>
    </section>
  );
}
