'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import SectionHeading from '@/components/ui/SectionHeading';
import { faqs } from '@/data/faqs';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left gap-4"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-[#1A1A2E] leading-tight">
          {question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#C8A96E] text-white' : 'bg-gray-100 text-gray-500'}`}>
          {isOpen ? <FaMinus className="text-xs" /> : <FaPlus className="text-xs" />}
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
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="section-pad bg-gray-50/50">
      <div className="container-pad">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            tag="General Questions"
            title="We've answered the most common questions."
            subtitle="Everything you need to know about starting your publishing journey with confidence."
            centered
          />

          <div className="bg-white rounded-3xl p-4 md:p-10 shadow-sm border border-gray-100">
            {faqs.map((faq) => (
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
