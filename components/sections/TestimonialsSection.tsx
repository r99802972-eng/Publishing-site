'use client';
import { useEffect } from 'react';
import { FaStar, FaQuoteLeft, FaAward, FaUsers, FaArrowRight } from 'react-icons/fa';
import { testimonials } from '@/data/testimonials';
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

const TestimonialCard = ({ item, className = "", isBig = false, isFeatured = false }: { item: any, className?: string, isBig?: boolean, isFeatured?: boolean }) => (
// ... rest of TestimonialCard component ...
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className={`relative group bg-[#1a3050]/40 backdrop-blur-md rounded-[2rem] ${isFeatured ? 'p-6 md:p-8' : 'p-5 md:p-6'} border border-white/5 shadow-2xl hover:border-[#C8A96E]/30 transition-all duration-300 ${className}`}
  >
    {/* Shine effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none" />
    
    {/* Large Background Quote Icon for filling space */}
    <div className={`absolute ${isFeatured ? 'top-8 right-8' : 'top-6 right-6'} opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none`}>
      <FaQuoteLeft className={`${isFeatured ? 'text-7xl md:text-9xl' : 'text-6xl md:text-8xl'} text-[#C8A96E]`} />
    </div>

    <div className="relative z-10 flex flex-col h-full justify-between">
      <div>
        <div className={`flex gap-1 ${isFeatured ? 'mb-4' : 'mb-3'} text-[#C8A96E]`}>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={`${isFeatured ? 'text-base' : isBig ? 'text-sm' : 'text-[10px]'}`} />
          ))}
        </div>
        
        <p className={`text-gray-200 font-medium italic leading-relaxed ${isFeatured ? 'text-lg md:text-xl mb-4' : isBig ? 'text-lg md:text-xl mb-4' : 'text-sm md:text-base mb-3'}`}>
          "{item.review}"
        </p>
      </div>
      
      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
        <div className={`flex-shrink-0 ${isFeatured ? 'w-14 h-14 text-xl' : isBig ? 'w-12 h-12 text-base' : 'w-10 h-10 text-sm'} rounded-xl bg-gradient-to-br from-[#C8A96E] to-[#B08D4D] flex items-center justify-center text-[#0F2440] font-bold shadow-lg`}>
          {item.initials}
        </div>
        <div className="flex flex-col">
          <h4 className={`font-bold text-white tracking-tight ${isFeatured ? 'text-lg' : isBig ? 'text-base' : 'text-sm'}`}>{item.name}</h4>
          <p className={`text-[#C8A96E] font-bold uppercase tracking-widest mt-0.5 ${isFeatured ? 'text-[10px]' : isBig ? 'text-[9px]' : 'text-[8px]'}`}>{item.role}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function TestimonialsSection() {
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
    <section className="bg-[#0F2440] py-20 md:py-28 relative overflow-hidden">
      {/* Background Aesthetics */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#C8A96E] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-[#C8A96E] rounded-full blur-[100px]" />
      </div>

      <div className="container-pad relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#C8A96E] text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block"
          >
            Author Success
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
          >
            Trusted by Creators <br />
            <div className="inline-flex flex-wrap items-center justify-center">
              {"Across the Globe".split("").map((char, i) => (
                <AnimatedChar 
                  key={i} 
                  char={char} 
                  index={i} 
                  progress={progress} 
                />
              ))}
            </div>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            See how we've helped authors transform their manuscripts into award-winning publications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-4 auto-rows-[minmax(160px,auto)]">
          {/* Card 1: Featured (Sarah Williams) */}
          <div className="md:col-span-2 lg:col-span-4 lg:row-span-2">
            <TestimonialCard item={testimonials[0]} isFeatured={true} className="h-full border-[#C8A96E]/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
          </div>

          {/* Card 2: Stat Card */}
          <div className="md:col-span-2 lg:col-span-3 lg:row-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-full bg-white/5 backdrop-blur-sm rounded-[2rem] p-5 border border-white/10 flex flex-col items-center justify-center text-center group hover:bg-[#C8A96E]/5 transition-colors shadow-xl"
            >
              <div className="w-12 h-12 bg-[#C8A96E]/20 rounded-2xl flex items-center justify-center mb-3 text-[#C8A96E] text-xl group-hover:scale-110 transition-transform">
                <FaUsers />
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">500+</h3>
              <p className="text-gray-400 text-[9px] font-bold uppercase tracking-widest">Authors Published</p>
            </motion.div>
          </div>

          {/* Card 3: Dr. Robert Chen */}
          <div className="md:col-span-2 lg:col-span-5 lg:row-span-1">
            <TestimonialCard item={testimonials[1]} className="h-full" />
          </div>

          {/* Card 4: Emily Rodriguez */}
          <div className="md:col-span-2 lg:col-span-5 lg:row-span-1">
            <TestimonialCard item={testimonials[2]} className="h-full" />
          </div>

          {/* Card 5: Award Card */}
          <div className="md:col-span-2 lg:col-span-3 lg:row-span-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="h-full bg-gradient-to-br from-[#C8A96E]/20 to-transparent backdrop-blur-sm rounded-[2rem] p-5 border border-[#C8A96E]/20 flex flex-col items-center justify-center text-center group shadow-xl"
            >
              <FaAward className="text-3xl text-[#C8A96E] mb-3 group-hover:rotate-12 transition-transform" />
              <h3 className="text-white font-bold text-lg mb-1">Best Publishers</h3>
              <p className="text-[#C8A96E] text-[9px] font-bold uppercase tracking-widest">Industry Recognized</p>
            </motion.div>
          </div>

          {/* Card 6: Michael Thompson */}
          <div className="md:col-span-2 lg:col-span-4 lg:row-span-2">
             <TestimonialCard item={testimonials[3]} className="h-full" isBig={true} />
          </div>
          
          {/* Card 7: CTA Card */}
          <div className="md:col-span-4 lg:col-span-8 lg:row-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-full bg-[#C8A96E] rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between group cursor-pointer overflow-hidden relative shadow-2xl"
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              <div className="relative z-10 text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-[#0F2440] text-2xl md:text-3xl font-bold mb-1 tracking-tight">Ready to be our next success story?</h3>
                <p className="text-[#0F2440]/80 font-medium text-base">Schedule a free consultation with our experts today.</p>
              </div>
              <div className="relative z-10 w-12 h-12 bg-[#0F2440] rounded-full flex items-center justify-center text-[#C8A96E] text-xl group-hover:scale-110 group-hover:bg-[#0F2440]/90 transition-all shadow-xl">
                <FaArrowRight />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
