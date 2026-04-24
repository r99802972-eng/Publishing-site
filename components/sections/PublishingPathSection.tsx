'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaFileAlt, FaEdit, FaPaintBrush, FaGlobeAmericas, FaArrowRight } from 'react-icons/fa';

export default function PublishingPathSection() {
  const steps = [
    {
      number: "01",
      step: "Step 1",
      title: "Submit Your Manuscript",
      description: "Send us your story at any stage—whether it’s just an idea, a rough draft, or a complete manuscript. We review your work in detail, understand your vision, and define the best approach to bring your book forward.",
      href: "/writing",
      icon: <FaFileAlt />
    },
    {
      number: "02",
      step: "Step 2",
      title: "Edit, Refine & Strengthen",
      description: "Our editorial team enhances your manuscript by improving structure, clarity, grammar, and readability. We refine your content while ensuring your original voice and message remain authentic and intact.",
      href: "/editing",
      icon: <FaEdit />
    },
    {
      number: "03",
      step: "Step 3",
      title: "Creative Design & Layout",
      description: "We transform your book into a visually engaging product with a market-ready cover and professionally structured interior. Every design choice is aligned with your genre and target audience.",
      href: "/design",
      icon: <FaPaintBrush />
    },
    {
      number: "04",
      step: "Step 4",
      title: "Publishing & Distribution",
      description: "We manage the complete publishing process, including formatting, ISBN assignment, and platform setup. Your book is then published across major platforms, making it accessible to readers worldwide.",
      href: "/publishing",
      icon: <FaGlobeAmericas />
    }
  ];

  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden">
      {/* Subtle Background Grain/Pattern could go here */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      <div className="container-pad relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <span className="text-[#C8A96E] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Process</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#0F2440] leading-tight tracking-tight">
            Everything You Need to Go From <span className="text-[#C8A96E]">“Idea”</span> to <span className="text-[#C8A96E]">“Published Author”</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <Link key={index} href={item.href} className="group block h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative h-full flex flex-col items-center text-center p-8 md:p-10 rounded-[2rem] bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_-10px_rgba(200,169,110,0.15)] hover:border-[#C8A96E]/20 transition-all duration-500"
              >
                {/* Step Badge — Positioned at top */}
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C8A96E] text-[#0A1D37] font-bold px-6 py-2 rounded-full uppercase tracking-widest text-[10px] shadow-lg z-30"
                >
                  {item.step}
                </div>
                {/* Floating Background Number */}
                <span className="absolute -bottom-4 -right-4 text-9xl font-display font-black text-gray-50 group-hover:text-[#C8A96E]/5 transition-colors duration-500 select-none pointer-events-none">
                  {item.number}
                </span>

                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-2xl text-[#C8A96E] mb-8 group-hover:bg-[#C8A96E] group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1">
                  {item.icon}
                </div>

                <div className="relative z-10 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-[#0F2440] mb-5 leading-snug transition-colors group-hover:text-[#C8A96E]">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium mb-8">
                    {item.description}
                  </p>
                  
                  {/* Learn More link-style footer */}
                  <div className="mt-auto flex items-center justify-center gap-2 text-[#C8A96E] font-bold text-xs uppercase tracking-widest opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Learn More <FaArrowRight className="text-[10px]" />
                  </div>
                </div>

                {/* Top accent bar */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#C8A96E]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
