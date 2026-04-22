import { FaCheckCircle } from 'react-icons/fa';

export default function BookDesignSection() {
  const points = [
    "Custom cover design tailored to your genre",
    "Professional interior formatting & layout",
    "High-res print-ready files",
    "eBook formats for global distribution",
  ];

  const bookCovers = [
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop"
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-pad w-full max-w-6xl mx-auto flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#FE7028] text-sm font-semibold uppercase tracking-wider mb-2 block">
              Book Design & Layout
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-[#FE7028]">Creating Covers</span> & Interiors That Captivate Readers
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
              Your book's design is its first impression — we make it unforgettable with covers and layouts that motivate readers from the very first glance and keep them turning pages.
            </p>
            <button className="bg-[#FE7028] text-white font-semibold rounded-full px-8 py-3 tracking-wide hover:bg-[#E66C37] transition-all shadow-md">
              Learn More About Design
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <FaCheckCircle className="text-[#FE7028] mt-1 shrink-0" />
                <span className="text-gray-700 font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {bookCovers.map((src, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-xl border border-gray-100 aspect-[2/3] hover:scale-105 transition-transform duration-500 cursor-pointer">
              <img src={src} alt={`Book Cover Example ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
