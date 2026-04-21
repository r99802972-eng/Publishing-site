'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import * as Icons from 'react-icons/fa';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  index: number;
}

export default function ServiceCard({ title, description, icon, href, index }: ServiceCardProps) {
  // Dynamically get the icon component from react-icons/fa
  // Note: For a production app involving dynamic strings, we'd typically map them specifically
  const IconComponent = Icons[icon as keyof typeof Icons] || Icons.FaBook;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#C8A96E]/10 hover:border-[#C8A96E]/20 transition-all duration-500"
    >
      <div className="w-14 h-14 bg-[#F5F0E8] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C8A96E] transition-colors duration-500">
        <IconComponent className="text-2xl text-[#C8A96E] group-hover:text-white transition-colors duration-500" />
      </div>
      <h3 className="text-xl font-bold mb-4 font-serif text-[#1A1A2E]">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-6">
        {description}
      </p>
      <Link href={href} className="inline-flex items-center gap-2 text-[#C8A96E] text-xs font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
        Learn More <FaChevronRight className="text-[10px]" />
      </Link>
    </motion.div>
  );
}
