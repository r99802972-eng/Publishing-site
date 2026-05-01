'use client';
import { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion, useMotionValue, animate, useTransform } from 'framer-motion';

// 🎨 Sub-component for individual character pulse
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

  const color = useTransform(progress, (p: number) => {
    if (p < start || p > end) return "#C8A96E";
    return "#F1E4C9";
  });

  return (
    <motion.span
      style={{ scale, color }}
      className="inline-block will-change-transform whitespace-pre"
    >
      {char}
    </motion.span>
  );
}

export default function ContactFormSection() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || '';
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send');
      }

      setFormState('success');
    } catch (error: any) {
      console.error('Submission error:', error);
      setFormState('idle');
      alert(error.message || 'Failed to send message. Please try again.');
    }
  };

  return (
    <section id="horiform" className="bg-[#0F2440] py-20 md:py-32 relative overflow-hidden">
      {/* Background Aesthetics */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#C8A96E]/10 rounded-full blur-[120px]" />
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#C8A96E]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-pad relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="flex flex-col">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#C8A96E] text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block"
            >
              Get In Touch
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 leading-[1.1] uppercase tracking-tighter"
            >
              Let's Create <br />
              <span className="text-[#C8A96E]">
                {"Something ".split("").map((char, i) => (
                  <AnimatedChar
                    key={i}
                    char={char}
                    index={i}
                    progress={progress}
                  />
                ))}
              </span>
              Worth Remembering.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 mb-12 text-sm md:text-base leading-relaxed max-w-md font-medium"
            >
              At Northcrest Book Publishers, we don’t just publish books—we help shape ideas into powerful, lasting works. 
              Whether you're at the beginning or ready to launch, our team ensures your journey is seamless, professional, and thoughtfully guided. 
              No noise. No pressure. Just expertise, creativity, and results.
            </motion.p>

            <div className="flex flex-col gap-8">
              {[
                { icon: <FaPhone />, label: 'Call Us Today', value: '(888) 260-4874' },
                { icon: <FaEnvelope />, label: 'Email Us', value: 'Info@northcrestpublishers.com' },
                { icon: <FaMapMarkerAlt />, label: 'Our Office', value: '123 Publishing Way, NY' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  className="flex items-center gap-5 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[#C8A96E] transition-all duration-300 group-hover:bg-[#C8A96E] group-hover:text-[#0F2440] shadow-lg">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-bold text-white text-sm uppercase tracking-widest opacity-50 mb-1">{item.label}</h4>
                    <p className="text-white font-bold text-base tracking-tight">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 relative overflow-hidden"
          >
            {/* Form decorative glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#C8A96E]/20 rounded-full blur-[60px]" />

            <h3 className="text-white font-display text-2xl md:text-3xl font-bold mb-10 tracking-tight">Take the First Step—Reach Out Today</h3>

            {formState === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-[#C8A96E] rounded-2xl flex items-center justify-center mx-auto mb-8 text-[#0F2440] text-4xl shadow-2xl rotate-12">
                  ✓
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-4">Message Sent!</h3>
                <p className="text-gray-400 max-w-xs mx-auto">We've received your request and will reach out within 24 hours.</p>
                <button
                  onClick={() => setFormState('idle')}
                  className="mt-10 text-[#C8A96E] font-bold uppercase text-xs tracking-widest hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <input
                      name="name"
                      type="text" required placeholder="Your Name"
                      className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C8A96E]/50 transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <input
                      name="email"
                      type="email" required placeholder="Your Email"
                      className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C8A96E]/50 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <input
                      name="phone"
                      type="tel" required placeholder="Your Phone #"
                      className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C8A96E]/50 transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <select name="service" defaultValue="" className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white/50 text-sm focus:outline-none focus:border-[#C8A96E]/50 transition-all duration-300 appearance-none cursor-pointer">
                      <option value="" disabled>Select Services</option>
                      <option value="writing">Professional Writing</option>
                      <option value="editing">Expert Editing</option>
                      <option value="publishing">Complete Publishing</option>
                      <option value="marketing">Marketing & Sales</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Message / Query"
                    className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C8A96E]/50 transition-all duration-300 resize-none"
                  />
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="w-full bg-[#C8A96E] text-[#0F2440] font-black rounded-2xl py-5 uppercase text-xs tracking-[0.2em] hover:bg-[#DBC598] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_10px_30px_rgba(200,169,110,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={formState === 'submitting'}
                  >
                    {formState === 'submitting' ? 'Processing...' : 'Start Your Journey'}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>

  );
}
