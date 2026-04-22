'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '@/data/testimonials';

import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialsSection() {
  return (
    <section className="bg-[#FE7028] py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-[100px] blur-3xl pointer-events-none" />
      
      <div className="container-pad w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div className="flex flex-col z-10 w-full max-w-xl">
            <span className="text-white/90 text-sm font-semibold uppercase tracking-wider mb-2 block">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-10 leading-tight">
              What Our Faith in Action Real Businesses Changed!
            </h2>
            
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-white/20">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                className="pb-12"
              >
                {testimonials.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="relative">
                      <div className="flex gap-1 mb-4 text-[#FE7028]">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-sm" />
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-6 leading-relaxed text-sm lg:text-base">
                        "{item.review}"
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-[#111111] rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {item.initials}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                          <p className="text-[#FE7028] text-xs font-semibold">{item.role}</p>
                        </div>
                      </div>
                      <FaQuoteLeft className="absolute bottom-0 right-0 text-3xl text-gray-100 -z-10" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] flex justify-center items-center group lg:scale-110">
             <div className="relative w-3/4 max-w-md h-[450px] transform group-hover:-translate-y-2 transition-transform duration-500">
               <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop" alt="3D Book" className="w-full h-full object-cover rounded-r-3xl rounded-l-md shadow-[20px_20px_40px_rgba(0,0,0,0.4)] border-r-4 border-y border-white/20" />
               <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black/40 to-transparent rounded-l-md z-10" />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
