import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

export default function OrangeBannerSection() {
  const benefits = [
    "Guaranteed Sales",
    "Full Copyright & Royalties",
    "Globally Recognized Platform",
    "100% Satisfaction"
  ];

  return (
    <section className="bg-[#FE7028] py-12 md:py-16">
      <div className="container-pad grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <div className="lg:col-span-2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-white mb-6 leading-snug">
            We Handle Every Aspect Of The Publishing Process To Give You The Greatest Results Within Months Or Less.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 text-white">
                <FaCheckCircle className="text-white shrink-0" />
                <span className="font-semibold text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-1 flex justify-start lg:justify-end">
          <Link href="/contact-us" className="inline-block bg-white text-[#FE7028] font-bold px-8 py-4 rounded-full hover:bg-gray-100 hover:scale-95 transition-all shadow-xl">
            Speak With An Expert
          </Link>
        </div>
      </div>
    </section>
  );
}
