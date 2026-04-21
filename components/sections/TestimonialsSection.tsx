'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import SectionHeading from '@/components/ui/SectionHeading';
import { testimonials } from '@/data/testimonials';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialsSection() {
  return (
    <section className="section-pad bg-white overflow-hidden">
      <div className="container-pad">
        <SectionHeading
          tag="Success Stories"
          title="Faith in Action: Stories of Success."
          subtitle="Join hundreds of authors who have fulfilled their dreams of becoming published authors with the help of Benjamin Publishers."
          centered
        />

        <div className="max-w-5xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="pb-16"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-[#F5F0E8] p-8 md:p-10 rounded-3xl h-full relative border border-[#C8A96E]/10">
                  <FaQuoteLeft className="absolute top-6 right-8 text-4xl text-[#C8A96E]/20" />
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-[#C8A96E] text-sm" />
                    ))}
                  </div>

                  <p className="text-gray-700 italic mb-8 leading-relaxed">
                    &quot;{item.review}&quot;
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#C8A96E] rounded-full flex items-center justify-center text-white font-bold text-lg font-serif">
                      {item.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1A1A2E]">{item.name}</h4>
                      <p className="text-[#C8A96E] text-xs font-semibold uppercase tracking-wider">{item.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
