'use client';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function EmotionalConversionSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0F2440] overflow-hidden">
      {/* Background Cinematic Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
      </div>
      
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#C8A96E]/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#C8A96E]/5 rounded-full blur-[120px]" />

      <div className="container-pad relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <FaQuoteLeft className="text-[#C8A96E] text-5xl opacity-30 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight">
              You’ve poured your soul into <br />
              <span className="text-[#C8A96E]">your manuscript.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-16 italic font-medium opacity-80"
          >
            Don’t let it gather digital dust. Your story deserves to be held, shared, and celebrated by readers across the globe.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-display font-bold text-[#C8A96E] mb-4">The Hard Truth</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Most authors never finish. They get lost in the editing, overwhelmed by formatting, or stuck at the publishing finish line.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="p-10 rounded-[2.5rem] bg-white/5 border border-[#C8A96E]/30 backdrop-blur-sm shadow-[0_20px_50px_rgba(200,169,110,0.1)]"
            >
              <h3 className="text-2xl font-display font-bold text-white mb-4">The Success Secret</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                The ones who reach the bestseller lists? <span className="font-bold text-[#C8A96E]">They don’t do it alone.</span> They partner with experts who turn manuscripts into masterpieces.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Link
              href="/contact-us"
              className="group relative inline-flex items-center gap-4 px-12 py-6 bg-[#C8A96E] text-[#0A1D37] font-bold text-xl rounded-full transition-all duration-500 hover:shadow-[0_25px_60px_-15px_rgba(200,169,110,0.4)] hover:scale-105 active:scale-95"
            >
              Start My Success Story Now
              <FaArrowRight className="transition-transform group-hover:translate-x-2" />
            </Link>
            <p className="mt-6 text-gray-500 text-sm tracking-[0.2em] uppercase font-bold">
              Your Journey Begins Today
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
