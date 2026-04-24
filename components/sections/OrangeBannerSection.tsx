'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

const FloatingBook = () => {
  return (
    <div className="relative flex justify-center items-center h-[400px] lg:h-[600px] w-full max-w-[550px] mx-auto group">
      {/* Premium Radial Glow matching the gold brand color */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#C8A96E]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 animate-float flex flex-col items-center">
        {/* The 3D Book Mockup with specific perspective tilt */}
        <div
          className="relative transition-all duration-700 ease-out group-hover:scale-105 group-hover:rotate-y-[-22deg] group-hover:rotate-x-[8deg]"
          style={{
            perspective: '2000px',
            transformStyle: 'preserve-3d',
            transform: 'rotateY(-18deg) rotateX(6deg) rotateZ(-1.5deg)',
          }}
        >
          {/* Main Book Visual */}
          <div className="relative shadow-[40px_50px_100px_rgba(0,0,0,0.6)] rounded-[4px] overflow-hidden border-l border-white/10">
            <Image
              src="/book-mockup.png"
              alt="Northcrest Publishers Book Mockup"
              width={420}
              height={600}
              className="w-full h-auto object-contain [mask-image:radial-gradient(circle,white_70%,transparent_100%)] mix-blend-lighten"
              priority
            />
            {/* Realistic Light Highlight on the cover edge */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
          </div>

          {/* Book Spine Shadow / Depth Effect */}
          <div className="absolute top-[3%] bottom-[3%] -left-1.5 w-[6px] bg-black/50 blur-[2px] -z-10" />
        </div>

        {/* Soft Dynamic Shadow Beneath the Book */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-black/40 blur-3xl rounded-[100%] animate-shadow-scale" />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-35px); }
        }
        @keyframes shadowScale {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.4; }
          50% { transform: translateX(-50%) scale(0.85); opacity: 0.2; }
        }
        .animate-float {
          animation: float 7s ease-in-out infinite;
        }
        .animate-shadow-scale {
          animation: shadowScale 7s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default function OrangeBannerSection() {
  const benefits = [
    "Guaranteed Sales",
    "Full Copyright & Royalties",
    "Globally Recognized Platform",
    "100% Satisfaction"
  ];

  return (
    <section className="bg-[#0A1D37] py-24 lg:py-32 overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C8A96E]/5 skew-x-[-20deg] translate-x-1/3 pointer-events-none" />

      <div className="container-pad relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 lg:gap-24 items-center">

        {/* Left Side: Premium Floating Book Mockup */}
        <div className="order-2 lg:order-1 mt-12 lg:mt-0">
          <FloatingBook />
        </div>

        {/* Right Side: Content and Branding */}
        <div className="order-1 lg:order-2 text-white text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-display font-bold mb-10 leading-tight">
            We Handle Every Aspect Of The Publishing Process <br className="hidden lg:block" />
            <span className="text-[#C8A96E]">To Give You The Greatest Results Within Months Or Less.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 mb-14 text-left">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-4 group justify-center lg:justify-start">
                <div className="bg-[#C8A96E]/20 p-2 rounded-full group-hover:bg-[#C8A96E]/30 transition-all duration-300">
                  <FaCheckCircle className="text-[#C8A96E] text-lg shrink-0 transition-transform group-hover:scale-110" />
                </div>
                <span className="font-semibold text-lg md:text-xl tracking-tight text-white/90">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:justify-start">
            <Link
              href="/contact-us"
              className="inline-block bg-[#C8A96E] text-[#0A1D37] font-bold px-12 py-5 rounded-full hover:bg-[#DBC598] hover:shadow-[0_20px_50px_rgba(200,169,110,0.3)] hover:scale-[1.03] active:scale-95 transition-all duration-300 shadow-xl text-xl"
            >
              Speak With An Expert
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
