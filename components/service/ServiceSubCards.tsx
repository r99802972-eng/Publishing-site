'use client';
import { motion } from 'framer-motion';
import * as Icons from 'react-icons/fa';
import { SubService } from '@/data/types';

interface ServiceSubCardsProps {
  items: SubService[];
}

export default function ServiceSubCards({ items }: ServiceSubCardsProps) {
  return (
    <section className="section-pad bg-white">
      <div className="container-pad">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const IconComponent = Icons[item.icon as keyof typeof Icons] || Icons.FaBookOpen;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-3xl border border-gray-100 bg-gray-50/30 hover:bg-white hover:shadow-xl hover:shadow-[#C8A96E]/5 transition-all duration-500 flex flex-col gap-5"
              >
                <div className="w-12 h-12 bg-[#F5F0E8] rounded-2xl flex items-center justify-center text-[#C8A96E] text-xl">
                  <IconComponent />
                </div>
                <h3 className="text-xl font-bold font-serif text-[#1A1A2E]">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
