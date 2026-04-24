'use client';
import { motion } from 'framer-motion';

export default function ContactStrip() {
  return (
    <section className="bg-transparent py-20 md:py-28 overflow-hidden">
      <div className="container-pad w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24"
        >
          {/* Label */}
          <div className="flex-shrink-0 text-center lg:text-left">
            <h2 className="text-white font-display font-bold text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-[0.85]">
              GET IN<br />
              <span className="text-[#C8A96E]">TOUCH</span>
            </h2>
          </div>

          {/* Form */}
          <form className="flex-1 w-full grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10 items-end">
            <div className="relative group">
              <label className="block text-[#C8A96E] text-xs font-bold uppercase tracking-widest mb-3 transition-colors group-focus-within:text-white">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent text-white text-lg placeholder-white/20 outline-none pb-3 border-b border-white/20 focus:border-[#C8A96E] transition-all"
              />
            </div>

            <div className="relative group">
              <label className="block text-[#C8A96E] text-xs font-bold uppercase tracking-widest mb-3 transition-colors group-focus-within:text-white">
                Email Address
              </label>
              <input
                type="email"
                placeholder="hello@example.com"
                className="w-full bg-transparent text-white text-lg placeholder-white/20 outline-none pb-3 border-b border-white/20 focus:border-[#C8A96E] transition-all"
              />
            </div>

            <div className="relative group">
              <label className="block text-[#C8A96E] text-xs font-bold uppercase tracking-widest mb-3 transition-colors group-focus-within:text-white">
                Service
              </label>
              <div className="relative">
                <select
                  defaultValue=""
                  className="w-full bg-transparent text-white text-lg outline-none pb-3 border-b border-white/20 focus:border-[#C8A96E] appearance-none cursor-pointer"
                >
                  <option value="" disabled className="bg-[#0D0D0D] text-white">Select Service</option>
                  <option value="writing" className="bg-[#0D0D0D] text-white">Ghostwriting</option>
                  <option value="editing" className="bg-[#0D0D0D] text-white">Full Editing</option>
                  <option value="design" className="bg-[#0D0D0D] text-white">Book Design</option>
                  <option value="illustration" className="bg-[#0D0D0D] text-white">Illustration</option>
                  <option value="publishing" className="bg-[#0D0D0D] text-white">Publishing</option>
                  <option value="printing" className="bg-[#0D0D0D] text-white">Printing</option>
                  <option value="marketing" className="bg-[#0D0D0D] text-white">Marketing</option>
                  <option value="author-website" className="bg-[#0D0D0D] text-white">Author Website</option>
                  <option value="audio-book" className="bg-[#0D0D0D] text-white">Audio Book</option>
                </select>
                <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-full text-[#C8A96E] text-sm">▾</span>
              </div>
            </div>

            <div className="lg:pb-1 w-full flex justify-center lg:justify-end">
              <button
                type="submit"
                className="w-full max-w-[260px] bg-[#C8A96E] hover:bg-[#DBC598] text-[#0A1D37] font-bold flex items-center justify-center py-4 rounded-full transition-all group shadow-xl active:scale-95"
              >
                <span className="text-[12px] uppercase tracking-[0.2em] whitespace-nowrap">Send Message</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
