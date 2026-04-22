import { FaCheck } from 'react-icons/fa';
import Link from 'next/link';

export default function DarkSuccessSection() {
  const points = [
    "Amazon KDP & global distribution",
    "Tailored marketing and ad campaigns",
    "Author brand development",
    "Social media strategy",
    "Review & buzz building"
  ];

  return (
    <section className="bg-[#111111] py-16 md:py-24">
      <div className="container-pad w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative h-[400px] w-full hide-on-mobile hidden lg:block">
            <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-xl overflow-hidden shadow-2xl border-4 border-gray-800 z-10">
               <img src="https://images.unsplash.com/photo-1542435503-956c22cb1f2c?q=80&w=800&auto=format&fit=crop" alt="Marketing Strategy" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 w-3/4 h-3/4 rounded-xl overflow-hidden shadow-2xl border-4 border-gray-800 z-20">
               <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" alt="Analytics" className="w-full h-full object-cover" />
            </div>
             <div className="absolute top-1/2 left-1/4 w-full h-2 bg-[#FE7028] bg-opacity-80 rounded-full z-0 transform -rotate-12 translate-y-8" />
          </div>

          <div>
            <span className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2 block">
              Strategic Marketing
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              From Concept To <span className="text-[#FE7028]">Bestselling</span> Success
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
              Writing your book is only the beginning. Our targeted marketing and distribution strategies ensure your Masterpiece reaches the right audience and climbs the bestseller charts. Let us help you convert readers into lifelong fans.
            </p>
            
            <div className="mb-10">
              <h4 className="text-white font-semibold text-xl mb-4 font-display">Results</h4>
              <div className="flex flex-col gap-3">
                {points.map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#FE7028] flex items-center justify-center text-white text-[10px]">
                      <FaCheck />
                    </div>
                    <span className="text-gray-300 font-medium text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/marketing" className="btn-primary text-center">
              Start Marketing
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
