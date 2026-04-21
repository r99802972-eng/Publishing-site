'use client';
import { motion } from 'framer-motion';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  tag: string;
}

export default function ServiceHero({ title, subtitle, tag }: ServiceHeroProps) {
  return (
    <section className="relative pt-32 pb-20 bg-[#1A1A2E] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C8A96E]/5 skew-x-12 transform translate-x-32" />
      
      <div className="container-pad relative z-10">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-[#C8A96E] font-semibold text-sm tracking-widest uppercase mb-6"
          >
            {tag}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-8 leading-tight"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300 italic max-w-2xl"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
