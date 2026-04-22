'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fromAbove = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};
const fromBelow = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.15 } },
};
const textFromBelow = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.25 } },
};

export default function SplitIntroSection() {
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="container-pad grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT: Stacked images */}
        <div className="relative h-[420px] md:h-[500px] w-full">

          {/* Floating badge — from above */}
          <motion.div
            variants={fromAbove}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="absolute top-6 left-0 bg-white rounded-xl p-4 shadow-lg z-30 w-48 border border-gray-100"
          >
            <span className="text-xs font-bold text-gray-900 leading-tight block mb-2">Building Your Ebook Business</span>
            <div className="h-1 w-full rounded-full bg-gradient-to-r from-[#FE7028] to-orange-300" />
          </motion.div>

          {/* Top/right large image — from above */}
          <motion.div
            variants={fromAbove}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="absolute top-0 right-0 w-3/5 h-4/5 rounded-[2rem] overflow-hidden shadow-xl z-10"
          >
            <Image
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop"
              alt="Woman reading book"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Bottom/left smaller image — from below */}
          <motion.div
            variants={fromBelow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="absolute bottom-0 left-8 w-[48%] h-[55%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-20"
          >
            <Image
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop"
              alt="Open book with coffee"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* RIGHT: Text — from below */}
        <motion.div
          variants={textFromBelow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col text-left"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
            We Handle The Hard Part,<br />
            You Keep Writing.
          </h2>
          <p className="text-gray-500 mb-4 text-sm md:text-base leading-relaxed">
            Publishing your book shouldn&apos;t feel complicated. That&apos;s why we built Benjamin Publishers — a creative publishing studio that simplifies the process for authors.
          </p>
          <p className="text-gray-500 mb-8 text-sm md:text-base leading-relaxed">
            Whether it&apos;s your first novel or your fifth release, we take care of editing, design, and publishing details so you can focus on what truly matters — writing your next chapter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact-us"
              className="btn-primary text-center flex justify-center items-center gap-2 px-7 py-3 rounded-full text-sm font-bold"
            >
              Start Your Journey
              <span className="bg-white text-[#FE7028] rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">→</span>
            </Link>
            <Link
              href="/contact-us"
              className="text-center border border-[#FE7028] text-[#FE7028] hover:bg-[#FE7028] hover:text-white transition-colors px-7 py-3 rounded-full text-sm font-bold"
            >
              Explore Our Services
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
