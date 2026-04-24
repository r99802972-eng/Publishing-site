'use client';
import { motion, useMotionValue, animate, useTransform } from 'framer-motion';
import { useEffect } from 'react';

// 🎨 Sub-component for individual character pulse (reusing your brand signature)
function AnimatedChar({ char, index, progress }: { char: string, index: number, progress: any }) {
  const stagger = 0.03;
  const duration = 0.15;
  const start = index * stagger;
  const end = start + duration;

  const scale = useTransform(progress, (p: number) => {
    if (p < start || p > end) return 1;
    const local = (p - start) / duration;
    return 1 - 0.4 * Math.sin(local * Math.PI);
  });

  const color = useTransform(
    progress, 
    [start, start + duration / 2, end], 
    ["#C8A96E", "#FFFFFF", "#C8A96E"]
  );

  return (
    <motion.span 
      style={{ scale, color }} 
      className="inline-block will-change-transform whitespace-pre"
    >
      {char}
    </motion.span>
  );
}

export default function ServiceWorkflow({ serviceName = "Ghost Writing" }: { serviceName?: string }) {
  const progress = useMotionValue(0);

  useEffect(() => {
    const controls = animate(progress, 1, {
      duration: 2.2,
      ease: "linear",
      repeat: Infinity,
      repeatDelay: 1,
    });
    return () => controls.stop();
  }, [progress]);

  const steps = [
    {
      title: "Share Your Vision",
      desc: "Tell us about your book idea in a detailed call or written brief. Whether it's a memoir, fiction, or a business book, we take the time to understand your goals and writing style."
    },
    {
      title: "Research & Structured Outline",
      desc: "We create a detailed outline based on your input and our research, ensuring a strong foundation for your book. This stage includes recorded brainstorming sessions for reference."
    },
    {
      title: "Writing & Feedback Loop",
      desc: "Our expert ghostwriters bring your story to life, providing regular chapter drafts for your feedback. We offer unlimited revisions and real-time discussions via scheduled calls."
    },
    {
      title: "Refinement & Finalization",
      desc: "After incorporating all revisions, we polish the manuscript with professional editing. Every step is recorded and shared, ensuring transparency and alignment with your vision."
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-pad w-full max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0F2440] leading-tight">
            Our Book <br className="md:hidden" />
            <span className="inline-flex overflow-visible mx-2">
              {(serviceName + " ").split("").map((char, i) => (
                <AnimatedChar 
                  key={i} 
                  char={char} 
                  index={i} 
                  progress={progress} 
                />
              ))}
            </span>
            Workflow
          </h2>
        </div>

        {/* Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group p-8 rounded-[2rem] bg-white border border-[#C8A96E]/10 shadow-[0_15px_40px_-15px_rgba(200,169,110,0.15)] hover:shadow-[0_25px_60px_-15px_rgba(200,169,110,0.3)] transition-all duration-500 flex flex-col items-center text-center h-full"
            >
              {/* Step Badge */}
              <div className="bg-[#C8A96E] text-[#0F2440] font-black text-[10px] uppercase tracking-[0.2em] px-6 py-2.5 rounded-full mb-8 shadow-[0_10px_20px_rgba(200,169,110,0.2)] group-hover:scale-110 transition-transform duration-300">
                Step {idx + 1}
              </div>

              <h3 className="text-xl font-bold text-[#0F2440] mb-4 min-h-[3.5rem] flex items-center justify-center leading-tight">
                {step.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.desc}
              </p>

              {/* Decorative Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C8A96E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
