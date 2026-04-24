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
            <span className="text-xs font-bold text-gray-900 leading-tight block mb-2">Building Your Author Brand</span>
            <div className="h-1 w-full rounded-full bg-gradient-to-r from-secondary to-secondary/30" />
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
              alt="Author working on a manuscript"
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
              alt="Open book in a library"
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
            We Don’t Just Publish Books—<br />
            We Build Authors.
          </h2>
          <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">
            We believe every powerful book starts with a simple idea—but only becomes real with the right guidance, structure, and execution.
          </p>
          <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed font-medium">
            Most aspiring authors don’t struggle because they lack stories. They struggle because they don’t know how to turn their idea into a finished, published book. That’s where we come in. We simplify the entire journey so you can focus on what matters most—your story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact-us"
              className="bg-primary hover:bg-primary-hover text-white text-center flex justify-center items-center gap-2 px-7 py-3 rounded-full text-sm font-bold transition-all"
            >
              Start Your Journey
              <span className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">→</span>
            </Link>
            <Link
              href="/contact-us"
              className="text-center border border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors px-7 py-3 rounded-full text-sm font-bold"
            >
              Explore Our Services
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
