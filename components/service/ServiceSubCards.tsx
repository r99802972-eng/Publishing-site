'use client';
import { useEffect } from 'react';
import { motion, useMotionValue, animate, useTransform } from 'framer-motion';
import * as Icons from 'react-icons/fa';
import { SubService } from '@/data/types';

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

interface ServiceSubCardsProps {
  items: SubService[];
  serviceName?: string;
}

export default function ServiceSubCards({ items, serviceName = "Our Services" }: ServiceSubCardsProps) {
  const progress = useMotionValue(0);

  useEffect(() => {
    const controls = animate(progress, 1, {
      duration: 2.2,
      ease: "linear",
      repeat: Infinity,
      repeatDelay: 1,
    });
    return () => controls.stop();
  }, [progress]);

  return (
    <section className="py-24 bg-[#F9F7F2] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C8A96E]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-pad relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#0F2440] text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block opacity-60"
          >
            What We Offer
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0F2440] mb-6">
            Everything You Need For <br />
            <span className="inline-flex overflow-visible">
              {(serviceName + " ").split("").map((char, i) => (
                <AnimatedChar 
                  key={i} 
                  char={char} 
                  index={i} 
                  progress={progress} 
                />
              ))}
            </span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            We provide a comprehensive suite of professional solutions tailored to your unique publishing goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {items.map((item, index) => {
            const IconComponent = Icons[item.icon as keyof typeof Icons] || Icons.FaBookOpen;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-10 rounded-[2.5rem] bg-white border border-[#0F2440]/5 shadow-[0_10px_40px_-15px_rgba(15,36,64,0.1)] hover:shadow-[0_20px_60px_-15px_rgba(200,169,110,0.2)] transition-all duration-500 flex flex-col gap-6 overflow-hidden"
              >
                {/* Hover Accent Bar */}
                <div className="absolute top-0 left-0 w-0 h-1.5 bg-[#C8A96E] transition-all duration-500 group-hover:w-full" />

                {/* Index Numbering - Literary Style */}
                <div className="absolute top-8 right-10 text-6xl font-serif font-black text-[#0F2440]/[0.03] select-none group-hover:text-[#C8A96E]/10 transition-colors duration-500">
                  {(index + 1).toString().padStart(2, '0')}
                </div>

                <div className="relative">
                  <div className="w-14 h-14 bg-[#0F2440]/5 rounded-2xl flex items-center justify-center text-[#0F2440] text-2xl group-hover:bg-[#C8A96E] group-hover:text-white transition-all duration-500 shadow-sm">
                    <IconComponent />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold font-serif text-[#0F2440] group-hover:text-[#C8A96E] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-10 py-4 bg-[#C8A96E] text-[#0F2440] font-bold rounded-full hover:scale-105 transition-all shadow-lg active:scale-95"
          >
            Start Your Journey
          </motion.button>
          <motion.a
            href="#top"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="px-10 py-4 bg-transparent border border-[#0F2440]/20 text-[#0F2440] font-bold rounded-full hover:bg-[#0F2440]/5 transition-all active:scale-95 inline-block"
          >
            Explore Our Services
          </motion.a>
        </div>
      </div>
    </section>
  );
}
