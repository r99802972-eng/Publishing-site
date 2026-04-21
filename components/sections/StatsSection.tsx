'use client';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { stats } from '@/data/stats';

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="py-20 bg-[#16213E] relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-10 flex justify-between pointer-events-none px-4">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="w-[1px] h-full bg-[#C8A96E]" />
        ))}
      </div>

      <div className="container-pad relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-[#C8A96E] mb-3">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} />
                ) : (
                  '0'
                )}
                <span>{stat.suffix}</span>
              </div>
              <p className="text-gray-400 text-xs md:text-sm uppercase tracking-widest font-semibold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
