'use client';
import { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export default function ContactFormSection() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <section id="horiform" className="section-pad bg-white">
      <div className="container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              tag="Get In Touch"
              title="Let's Publish Something Remarkable."
              subtitle="Ready to take the next step in your publishing journey? Fill out the form and our experienced team will get back to you shortly."
            />
            
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-[#F5F0E8] rounded-full flex items-center justify-center text-[#C8A96E] text-xl">
                  {/* Phone icon placeholder */}
                  <span>📞</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A2E]">Call Us Today</h4>
                  <p className="text-[#C8A96E] font-medium">(888) 260-4874</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-[#F5F0E8] rounded-full flex items-center justify-center text-[#C8A96E] text-xl">
                  {/* Email icon placeholder */}
                  <span>✉️</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A2E]">Email Us</h4>
                  <p className="text-[#C8A96E] font-medium">Info@benjaminpublishers.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1A1A2E] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Animated background glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C8A96E]/10 blur-[60px]" />
            
            {formState === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-[#C8A96E] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl">
                  ✓
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">Thank You!</h3>
                <p className="text-gray-400">Your message has been sent successfully. We will get back to you within 24 hours.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="mt-8 text-[#C8A96E] hover:underline text-sm font-semibold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider ml-1">Full Name</label>
                    <input 
                      type="text" required placeholder="John Doe"
                      className="bg-[#16213E] border border-gray-700 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#C8A96E] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider ml-1">Email Address</label>
                    <input 
                      type="email" required placeholder="john@example.com"
                      className="bg-[#16213E] border border-gray-700 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#C8A96E] transition-colors"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider ml-1">Phone Number</label>
                    <input 
                      type="tel" required placeholder="(123) 456-7890"
                      className="bg-[#16213E] border border-gray-700 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#C8A96E] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider ml-1">Interest</label>
                    <select className="bg-[#16213E] border border-gray-700 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#C8A96E] transition-colors appearance-none">
                      <option>Writing Services</option>
                      <option>Editing Services</option>
                      <option>Publishing Package</option>
                      <option>Marketing Campaign</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider ml-1">Your Message</label>
                  <textarea 
                    rows={4} required placeholder="Tell us about your book projects..."
                    className="bg-[#16213E] border border-gray-700 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#C8A96E] transition-colors resize-none"
                  ></textarea>
                </div>

                <Button type="submit" variant="primary" className="mt-2" disabled={formState === 'submitting'}>
                  {formState === 'submitting' ? 'Sending...' : 'Send Message Now'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
