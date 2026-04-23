'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '@/data/testimonials';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function TestimonialsSection() {
  return (
    <section className="bg-[#0F2440] py-16 md:py-20 relative overflow-hidden">
      {/* Background Aesthetics */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#C8A96E] rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-[#C8A96E] rounded-full blur-[80px]" />
      </div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C8A96E 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />

      <div className="container-pad relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="flex flex-col w-full max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#C8A96E] text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block">
                Success Stories
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-8 leading-[1.2]">
                What Our <br />
                <div className="inline-flex flex-wrap items-center">
                  {"Faith in Action".split("").map((char, i) => (
                    <motion.span
                      key={i}
                      animate={{
                        y: [0, -4, 0],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                        delay: i * 0.08,
                      }}
                      className="text-[#C8A96E] inline-block whitespace-pre"
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
                <br /> 
                Real Businesses Changed!
              </h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-[#1a3050]/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.3)] border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <FaQuoteLeft className="text-5xl text-[#C8A96E]" />
                </div>

                <Swiper
                  modules={[Pagination, Autoplay, EffectFade]}
                  spaceBetween={30}
                  slidesPerView={1}
                  effect="fade"
                  fadeEffect={{ crossFade: true }}
                  pagination={{ 
                    clickable: true,
                    renderBullet: (index, className) => {
                      return `<span class="${className}" style="background-color: #C8A96E"></span>`;
                    }
                  }}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  className="testimonial-swiper pb-12"
                >
                  {testimonials.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="relative pt-2">
                        <div className="flex gap-1 mb-4 text-[#C8A96E]">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="text-xs" />
                          ))}
                        </div>
                        <p className="text-gray-200 font-medium italic mb-6 leading-relaxed text-sm md:text-base">
                          "{item.review}"
                        </p>
                        <div className="flex items-center gap-5 mt-auto">
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#C8A96E] to-[#B08D4D] flex items-center justify-center text-[#0F2440] font-bold text-lg shadow-lg border border-white/10">
                            {item.initials}
                          </div>
                          <div className="flex flex-col">
                            <h4 className="font-bold text-white text-base tracking-tight leading-tight">{item.name}</h4>
                            <p className="text-[#C8A96E] text-[10px] font-bold uppercase tracking-widest mt-1">{item.role}</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE — FLOATING BOOK */}
          <div className="relative flex justify-center items-center">
            {/* Background Glow */}
            <div className="absolute w-[120%] h-[120%] bg-[#C8A96E]/5 rounded-full blur-[80px] animate-pulse" />
            
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-full max-w-[340px] md:max-w-[440px] z-20"
            >
              <div className="relative aspect-[3/4] group">
                <img 
                  src="/book-mockup-removebg-preview.png" 
                  alt="Premium Book Mockup" 
                  className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]" 
                />
                
                {/* Floating Reflection overlay if image is transparent */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
              </div>
              
              {/* Shadow on ground */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-2/3 h-6 bg-black/30 rounded-[100%] blur-xl opacity-50" />
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-20 h-20 border border-[#C8A96E]/10 rounded-full -translate-y-8 translate-x-8 animate-spin-slow pointer-events-none" />
          </div>

        </div>
      </div>

      <style jsx global>{`
        .testimonial-swiper .swiper-pagination {
          bottom: 0 !important;
          text-align: right !important;
          padding-right: 20px;
        }
        .testimonial-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          opacity: 0.3;
          margin-right: 8px !important;
          transition: all 0.3s ease;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px;
          border-radius: 4px;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
}
