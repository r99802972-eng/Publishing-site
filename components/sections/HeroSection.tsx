'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 z-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-8 pt-28 pb-8 flex flex-col items-center text-center">

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10 w-full"
        >
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-sans font-light text-white leading-tight">
            Turning Manuscripts Into
          </h1>

          {/* Fixed-height container — clips the scaling word cleanly */}
          <div
            className="relative mt-1 flex items-center justify-center"
            style={{ height: '1.25em' }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold text-[#FE7028] leading-none"
            >
              Masterpieces
            </motion.span>
          </div>
        </motion.div>

        {/* Contact form bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full"
        >
          <div className="bg-black/70 backdrop-blur-md rounded-xl px-6 py-5 flex flex-col lg:flex-row items-center gap-4 shadow-2xl">
            <div className="flex-shrink-0 text-left">
              <p className="text-white font-bold text-sm uppercase tracking-widest leading-tight">
                GET IN<br />TOUCH
              </p>
            </div>
            <div className="hidden lg:block w-px h-10 bg-gray-600" />
            <form className="flex-1 w-full flex flex-col sm:flex-row gap-3 items-center">
              <input type="text" placeholder="Name" className="flex-1 min-w-0 bg-transparent text-white border-b border-gray-500 focus:border-[#FE7028] outline-none px-1 py-2 text-sm placeholder:text-gray-400 transition-colors" />
              <input type="email" placeholder="Email" className="flex-1 min-w-0 bg-transparent text-white border-b border-gray-500 focus:border-[#FE7028] outline-none px-1 py-2 text-sm placeholder:text-gray-400 transition-colors" />
              <input type="tel" placeholder="Phone" className="flex-1 min-w-0 bg-transparent text-white border-b border-gray-500 focus:border-[#FE7028] outline-none px-1 py-2 text-sm placeholder:text-gray-400 transition-colors" />
              <div className="flex-1 min-w-0">
                <select className="w-full bg-transparent text-gray-400 border-b border-gray-500 focus:border-[#FE7028] outline-none px-1 py-2 text-sm appearance-none cursor-pointer transition-colors">
                  <option value="" disabled selected className="bg-black">Services</option>
                  <option value="writing" className="bg-black">Writing</option>
                  <option value="editing" className="bg-black">Editing</option>
                  <option value="design" className="bg-black">Design</option>
                  <option value="publishing" className="bg-black">Publishing</option>
                </select>
              </div>
              <button type="submit" className="flex-shrink-0 bg-[#FE7028] text-white font-bold text-sm px-8 py-2.5 rounded-full hover:bg-[#e8601e] transition-colors shadow-lg shadow-[#FE7028]/30">
                Send ›
              </button>
            </form>
          </div>

          <div className="mt-6">
            <a href="#services" className="inline-block text-white border border-white/40 text-sm px-8 py-2.5 rounded-full hover:bg-white/10 transition-colors">
              Explore Our Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
