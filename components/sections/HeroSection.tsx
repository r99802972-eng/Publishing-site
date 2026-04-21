'use client';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#1A1A2E] overflow-hidden">
      {/* Background Pattern/Glow */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-[#C8A96E]/10 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#C8A96E]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-pad relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 py-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <span className="inline-block text-[#C8A96E] font-semibold text-sm tracking-widest uppercase mb-6">
            Award-Winning Publishers
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-white mb-8 leading-tight">
            We Handle the Hard Part, <span className="text-[#C8A96E]">You Keep Writing.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 italic mb-10 max-w-xl">
            From concept to bestseller, we provide the skills, structure, and professional expertise to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact-us">Start Your Journey</Button>
            <Button href="/writing" variant="outline">Explore Our Services</Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:flex items-center justify-center relative"
        >
          {/* Abstract Book Representation/Visual */}
          <div className="relative w-full max-w-md aspect-[3/4] bg-gradient-to-tr from-[#16213E] to-[#1A1A2E] border-2 border-[#C8A96E]/20 rounded-2xl shadow-2xl overflow-hidden p-8 flex flex-col justify-end group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C8A96E] transform rotate-45 translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-700" />
            <h3 className="text-white text-3xl font-serif font-bold mb-4">The Art of Storytelling</h3>
            <p className="text-gray-400 text-sm">Professional Manuscript Writing, Editing & Global Distribution.</p>
            <div className="mt-8 flex gap-2">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="w-1 h-1 bg-[#C8A96E] rounded-full" />
              ))}
            </div>
          </div>
          {/* Floating elements for visual depth */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-24 h-32 bg-[#16213E] border border-[#C8A96E]/30 rounded-lg shadow-2xl backdrop-blur-sm z-0"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 w-20 h-28 bg-[#16213E] border border-[#C8A96E]/30 rounded-lg shadow-2xl backdrop-blur-sm z-0"
          />
        </motion.div>
      </div>
    </section>
  );
}
