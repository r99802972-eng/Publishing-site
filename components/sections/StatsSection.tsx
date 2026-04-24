'use client';
import { useEffect } from 'react';
import { motion, useMotionValue, animate, useTransform } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { stats } from '@/data/stats';

// 🎨 Sub-component for individual character pulse (reusing for consistency)
function AnimatedStat({ value, suffix, inView, progress }: { value: number, suffix: string, inView: boolean, progress: any }) {
  const scale = useTransform(progress, [0, 0.5, 1], [1, 1.05, 1]);
  const color = useTransform(progress, [0, 0.5, 1], ["#C8A96E", "#FFFFFF", "#C8A96E"]);

  return (
    <motion.div 
      style={{ scale, color }} 
      className="text-4xl md:text-5xl lg:text-7xl font-bold font-display tracking-tight will-change-transform"
    >
      {inView ? <CountUp end={value} duration={2.5} separator="," /> : '0'}
      <span>{suffix}</span>
    </motion.div>
  );
}

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section ref={ref} className="py-28 bg-[#0F2440] relative overflow-hidden border-y border-white/5">
      {/* Literary Background Aesthetics */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl flex justify-between px-8">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#C8A96E]/20 to-transparent" />
          ))}
        </div>
      </div>

      <div className="container-pad relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`relative flex flex-col items-center text-center px-8 ${
                i !== stats.length - 1 ? 'lg:border-r lg:border-white/10' : ''
              }`}
            >
              <div className="relative mb-4">
                {/* Subtle Glow behind the number */}
                <div className="absolute inset-0 bg-[#C8A96E]/5 blur-2xl rounded-full scale-150" />
                
                <AnimatedStat 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  inView={inView} 
                  progress={progress} 
                />
              </div>

              <div className="space-y-1">
                <p className="text-[#C8A96E] text-[10px] uppercase tracking-[0.4em] font-bold">
                  {stat.label.split(' ')[0]}
                </p>
                <p className="text-gray-400 text-[10px] uppercase tracking-[0.3em] font-medium opacity-60">
                  {stat.label.split(' ').slice(1).join(' ')}
                </p>
              </div>

              {/* Shimmering Line Accent */}
              <motion.div 
                style={{
                  background: useTransform(progress, [0, 0.5, 1], ["rgba(200,169,110,0.1)", "rgba(200,169,110,0.6)", "rgba(200,169,110,0.1)"])
                }}
                className="w-12 h-[2px] mt-8 rounded-full"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Finishing bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C8A96E]/20 to-transparent" />
    </section>
  );
}
