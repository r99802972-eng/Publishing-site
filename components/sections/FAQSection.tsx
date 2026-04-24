'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, animate, useTransform } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { faqs } from '@/data/faqs';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  progress: any;
}

// 🎨 Sub-component for individual character pulse
function AnimatedChar({ char, index, progress, active }: { char: string, index: number, progress: any, active: boolean }) {
  const stagger = 0.03;
  const duration = 0.15;
  const start = index * stagger;
  const end = start + duration;

  const scale = useTransform(progress, (p: number) => {
    if (!active || p < start || p > end) return 1;
    const local = (p - start) / duration;
    return 1 - 0.4 * Math.sin(local * Math.PI); // Slightly less deep than hero (0.5) for better readability
  });

  const color = useTransform(progress, (p: number) => {
    if (!active || p < start || p > end) return "inherit";
    return "#C8A96E";
  });

  return (
    <motion.span 
      style={{ scale, color }} 
      className="inline-block will-change-transform whitespace-pre"
    >
      {char}
    </motion.span>
  );
}

function FAQItem({ question, answer, isOpen, onToggle, progress }: FAQItemProps) {
  return (
    <div className={`mb-4 transition-all duration-300 rounded-2xl border ${isOpen ? 'bg-white border-[#C8A96E]/40 shadow-xl shadow-[#0F2440]/5' : 'bg-white border-gray-100 hover:border-gray-200 shadow-sm'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4 group"
        aria-expanded={isOpen}
      >
        <span className={`text-sm md:text-[16px] font-bold tracking-tight transition-colors ${isOpen ? 'text-[#0F2440]' : 'text-gray-800 group-hover:text-[#0F2440]'}`}>
          {question.split("").map((char, i) => (
            <AnimatedChar 
              key={i} 
              char={char} 
              index={i} 
              progress={progress} 
              active={isOpen} 
            />
          ))}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#0F2440] text-[#C8A96E] rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-[#C8A96E]/10 group-hover:text-[#C8A96E]'}`}>
          {isOpen ? <FaMinus className="text-[10px]" /> : <FaPlus className="text-[10px]" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-6 text-gray-600 leading-relaxed text-sm md:text-[15px] border-t border-gray-50 pt-4 mx-2">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);
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

  const half = Math.ceil(faqs.length / 2);
  const leftCol = faqs.slice(0, half);
  const rightCol = faqs.slice(half);

  return (
    <section className="bg-[#F8FAFC] py-20 md:py-32 relative overflow-hidden">
      {/* Subtle Aesthetic Background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0F2440 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container-pad relative z-10 w-full max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#C8A96E] text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block"
          >
            Knowledge Base
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-[#0F2440] mb-6 uppercase tracking-tighter"
          >
            Common{" "}
            <span className="text-[#C8A96E]">
              {"Questions".split("").map((char, i) => (
                <AnimatedChar 
                  key={i} 
                  char={char} 
                  index={i + 7} // Offset for "Common " space slot
                  progress={progress} 
                  active={true} 
                />
              ))}
            </span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-20 h-1 bg-[#C8A96E] mx-auto mb-6 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base font-medium"
          >
            Find answers to frequently asked questions about our publishing services and workflow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {leftCol.map((faq) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
                progress={progress}
              />
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {rightCol.map((faq) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
                progress={progress}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
