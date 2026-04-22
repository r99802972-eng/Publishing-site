'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { faqs } from '@/data/faqs';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 md:py-6 text-left gap-4 group hover:text-[#FE7028] transition-colors"
        aria-expanded={isOpen}
      >
        <span className={`text-sm md:text-base font-medium leading-tight transition-colors ${isOpen ? 'text-[#FE7028]' : 'text-gray-900 group-hover:text-[#FE7028]'}`}>
          {question}
        </span>
        <div className="flex-shrink-0 flex items-center justify-center text-[#FE7028]">
          {isOpen ? <FaMinus className="text-[10px]" /> : <FaPlus className="text-[10px]" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-500 leading-relaxed text-sm">
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

  const half = Math.ceil(faqs.length / 2);
  const leftCol = faqs.slice(0, half);
  const rightCol = faqs.slice(half);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-pad w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-display font-semibold text-gray-900 mb-4">
            Frequently Asked Question
          </h2>
          <p className="text-sm md:text-base text-gray-500">
            Here are some of the most common questions our clients ask about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24">
          <div>
            {leftCol.map((faq) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))}
          </div>
          <div>
            {rightCol.map((faq) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
