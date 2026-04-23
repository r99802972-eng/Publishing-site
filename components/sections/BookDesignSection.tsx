'use client';

import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function BookDesignSection() {
  const points = [
    "Custom cover design tailored to your genre",
    "Professional interior formatting & layout",
    "High-res print-ready files",
    "eBook formats for global distribution",
  ];

  // Custom-generated brand-aligned book covers
  const bookCovers = [
    "/covers/cover1.png",
    "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=600&auto=format&fit=crop",
    "/covers/cover3.png",
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop",
    "/covers/cover2.png",
    "https://images.unsplash.com/photo-1618365908648-e71bd5716cba?q=80&w=600&auto=format&fit=crop",
  ];

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="container-pad w-full max-w-6xl mx-auto flex flex-col gap-16">
        
        {/* Top Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#C8A96E] text-sm font-semibold uppercase tracking-wider mb-3 block">
              Book Design & Layout
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A1D37] mb-8 leading-tight">
              <span className="inline-flex overflow-visible">
                {"Creating Covers".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    animate={{
                      y: [0, -5, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                      delay: i * 0.07,
                    }}
                    className="text-[#C8A96E] inline-block whitespace-pre"
                  >
                    {char}
                  </motion.span>
                ))}
              </span> & Interiors That Captivate Readers
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10 max-w-xl">
              Your book's design is its first impression — we make it unforgettable with covers and layouts that motivate readers from the very first glance and keep them turning pages.
            </p>
            <button className="bg-[#C8A96E] text-[#0A1D37] font-bold rounded-full px-10 py-4 tracking-wide hover:bg-[#DBC598] hover:shadow-[0_15px_30px_rgba(200,169,110,0.3)] transition-all duration-300 shadow-lg uppercase text-xs">
              Learn More About Design
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {points.map((point, index) => (
              <div key={index} className="flex items-center gap-5 group p-1 transition-all">
                <div className="bg-[#C8A96E]/10 p-2 rounded-full group-hover:bg-[#C8A96E]/20 transition-colors">
                  <FaCheckCircle className="text-[#C8A96E] text-xl shrink-0" />
                </div>
                <span className="text-[#0A1D37] font-semibold text-lg tracking-tight">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Seamless Infinite Scrolling Gallery */}
        <div className="relative w-full overflow-hidden">
          <div 
            className="flex gap-8 animate-infinite-scroll py-4"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}
          >
            {/* Double the items to create a seamless loop */}
            {[...bookCovers, ...bookCovers].map((src, index) => (
              <div 
                key={index} 
                className="flex-none w-[200px] md:w-[280px] aspect-[2/3] rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 hover:scale-[1.05] hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-500 cursor-pointer"
              >
                <img src={src} alt={`Book Cover Example ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes infiniteScroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 1rem)); }
        }
        .animate-infinite-scroll {
          display: flex;
          width: fit-content;
          animation: infiniteScroll 40s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
