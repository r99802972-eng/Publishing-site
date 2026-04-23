'use client';
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function DarkSuccessSection() {
  const points = [
    "ISBN & Copyright Registration",
    "Amazon KDP / IngramSpark Setup",
    "eBook Conversion & Distribution",
    "Book Launch Campaigns",
    "Social Media & Amazon Marketing",
    "Author Website & Branding"
  ];

  return (
    <section className="relative bg-[#080808] py-20 md:py-28 overflow-hidden">
      {/* Background Aesthetics */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C8A96E]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      <div className="container-pad relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT SIDE – 3-IMAGE GRID COMPOSITION */}
          <div className="relative grid grid-cols-2 gap-4 h-[500px] md:h-[600px] items-start">
            
            {/* COLUMN 1 */}
            <div className="space-y-4">
              {/* TOP IMAGE */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
                  alt="Team Collaboration" 
                  className="w-full h-auto aspect-[3/4] object-cover"
                />
                {/* 24-48 Hour Badge */}
                <div className="absolute top-0 left-0 w-full p-4">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white font-bold text-xl">24 – 48</span>
                      <div className="w-5 h-5 bg-[#FE7028] rounded-full flex items-center justify-center">
                        <span className="text-[10px] text-white">🎗</span>
                      </div>
                    </div>
                    <p className="text-white/90 text-sm font-medium leading-tight">Hour Response Time.</p>
                  </div>
                </div>
              </div>

              {/* BOTTOM IMAGE */}
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" 
                  alt="Meeting" 
                  className="w-full h-auto aspect-square object-cover"
                />
              </div>
            </div>

            {/* COLUMN 2 */}
            <div className="pt-12 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" 
                  alt="Productive Team" 
                  className="w-full h-auto aspect-[3/4] object-cover"
                />
              </div>

              {/* Building Your Ebook Badge */}
              <div className="absolute -bottom-14 -right-6 left-8 z-20">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-2xl overflow-hidden">
                  <div className="relative z-10">
                    <p className="text-white/80 text-xs font-semibold mb-1 uppercase tracking-wider">Building Your</p>
                    <p className="text-white font-bold text-lg leading-tight mb-3">Ebook Business</p>
                    <div className="flex items-end justify-between">
                      <span className="text-white font-bold text-3xl">100%</span>
                      <div className="w-6 h-6 bg-[#FE7028] rounded-full flex items-center justify-center">
                         <span className="text-[12px] text-white">🎗</span>
                      </div>
                    </div>
                  </div>
                  {/* Mock Chart Line */}
                  <div className="absolute inset-x-0 bottom-0 h-16 opacity-40">
                    <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <path d="M0 35 Q 25 35, 40 25 T 70 15 T 100 5" fill="none" stroke="#FE7028" strokeWidth="2" />
                      <circle cx="70" cy="15" r="3" fill="#FE7028" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (CONTENT) */}
          <div className="space-y-10">
            <div>
              <span className="inline-block px-3 py-1 rounded-md bg-[#1A1A1A] border border-white/10 text-[#C8A96E] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                Strategic Publishing
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] mb-8">
                Publishing & Marketing — <br />
                From Launch To <br />
                <div className="inline-flex items-center">
                  {"Lasting".split("").map((char, i) => (
                    <motion.span
                      key={i}
                      animate={{
                        y: [0, -4, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                        delay: i * 0.1,
                      }}
                      className="text-[#C8A96E] inline-block whitespace-pre"
                    >
                      {char}
                    </motion.span>
                  ))}
                  <span className="ml-3">Success</span>
                </div>
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
                We handle everything from publishing setup to promotional strategy. From ISBN registration and global distribution to book launches, social media, and Amazon marketing – we ensure your book gets published professionally and reaches the right readers worldwide.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-bold text-base uppercase tracking-tight">Include:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                {points.map((point, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#C8A96E] shadow-[0_0_6px_#C8A96E] transition-transform duration-300 group-hover:scale-125" />
                    <span className="text-gray-300 font-medium text-xs md:text-sm transition-colors duration-300 group-hover:text-white">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/get-started"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-[#C8A96E] to-[#B08D4D] text-white text-sm font-bold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(200,169,110,0.3)]"
              >
                <span>Get Started Now</span>
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                  <FaChevronRight className="text-[8px]" />
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
