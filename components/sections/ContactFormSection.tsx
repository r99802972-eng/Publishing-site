'use client';
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ContactFormSection() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
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
              Let's Publish <br />
              <span className="text-[#C8A96E]">
                {"Something ".split("").map((char, i) => (
                  <motion.span
                    key={`header-${i}`}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.08 }}
                    className="inline-block whitespace-pre"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              Remarkable.
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 mb-12 text-sm md:text-base leading-relaxed max-w-md font-medium"
            >
              Ready to take the next step in your publishing journey? Fill out the form and our experienced team will get back to you shortly.
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
            
            <h3 className="text-white font-display text-2xl md:text-3xl font-bold mb-10 tracking-tight">Message Us Today</h3>

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
                      type="text" required placeholder="Your Name"
                      className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C8A96E]/50 transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <input
                      type="email" required placeholder="Email Address"
                      className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C8A96E]/50 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <input
                      type="tel" required placeholder="Phone Number"
                      className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C8A96E]/50 transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <select defaultValue="" className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white/50 text-sm focus:outline-none focus:border-[#C8A96E]/50 transition-all duration-300 appearance-none cursor-pointer">
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
                    rows={4}
                    placeholder="Tell us about your book project..."
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
