'use client';
import { motion } from 'framer-motion';

export default function PublishingPathSection() {
  const steps = [
    {
      number: "01",
      step: "Step 1",
      title: "Submit Your Manuscript",
      description: "Send us your completed manuscript, and tell us your goals. Don't have a manuscript? Ask about our writing services."
    },
    {
      number: "02",
      step: "Step 2",
      title: "Editing & Design",
      description: "Our experts dive in with full professional editing, followed by premium book cover and interior design to make it shine."
    },
    {
      number: "03",
      step: "Step 3",
      title: "Publishing & Distribution",
      description: "We handle the ISBNs, barcodes, and digital formatting, making your book available globally across major retailers."
    },
    {
      number: "04",
      step: "Step 4",
      title: "Marketing Strategy",
      description: "Our marketing team launches your book into the world with dedicated campaigns, ensuring your work reaches the right audience."
    }
  ];

  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0A1D37]/5 to-transparent -translate-y-1/2 hidden lg:block" />

      <div className="container-pad relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-[#C8A96E] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Our Process</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
            The Publishing Path, <span className="text-[#C8A96E]">Simplified</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-7xl mx-auto">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              whileHover={{
                y: -15,
                rotateX: 2,
                rotateY: index % 2 === 0 ? 2 : -2,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="group relative flex flex-col items-center text-center p-10 border border-gray-100 rounded-[2.5rem] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_-15px_rgba(200,169,110,0.15)] hover:border-[#C8A96E]/30 transition-all duration-500 perspective-1000"
            >
              {/* Floating Background Number */}
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-display font-black text-gray-50/80 group-hover:text-[#C8A96E]/10 transition-colors duration-500 select-none z-0">
                {item.number}
              </span>

              {/* Step Badge */}
              <div
                className="absolute -top-6 bg-[#C8A96E] text-[#0A1D37] font-bold px-8 py-2.5 rounded-full uppercase tracking-widest text-xs shadow-[0_10px_25px_-5px_rgba(200,169,110,0.4)] z-20"
              >
                {item.step}
              </div>

              <div className="relative z-10">
                <h3 className="font-display font-bold text-2xl text-gray-900 mt-8 mb-6 group-hover:text-[#C8A96E] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-base leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1.5 bg-[#C8A96E] rounded-t-full group-hover:w-1/3 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
