'use client';
import { useState } from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

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
    <section id="horiform" className="bg-white py-16 md:py-24">
      <div className="container-pad w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="pt-8">
            <span className="text-[#FE7028] text-sm font-semibold uppercase tracking-wider mb-2 block">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Let's Publish Something Remarkable.
            </h2>
            <p className="text-gray-600 mb-12 text-sm md:text-base leading-relaxed max-w-md">
              Ready to take the next step in your publishing journey? Fill out the form and our experienced team will get back to you shortly.
            </p>
            
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#FE7028] bg-[#FE7028]/10 p-3 rounded-full">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Call Us Today</h4>
                  <p className="text-gray-500 text-sm">(888) 260-4874</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#FE7028] bg-[#FE7028]/10 p-3 rounded-full">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                  <p className="text-[#FE7028] hover:underline text-sm truncate">Info@benjaminpublishers.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#FE7028] rounded-3xl p-8 md:p-12 shadow-2xl relative">
            <h3 className="text-white font-display text-2xl font-bold text-center mb-8">Message Us Today</h3>
            
            {formState === 'success' ? (
              <div className="text-center py-12 text-white">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-[#FE7028] text-3xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Thank You!</h3>
                <p className="text-white/80">Your message has been sent successfully. We'll be in touch soon.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="mt-8 text-white font-semibold underline text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-white/90 text-xs font-medium ml-1">Name *</label>
                    <input 
                      type="text" required placeholder="Name"
                      className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 text-sm focus:outline-none focus:bg-white/20 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-white/90 text-xs font-medium ml-1">Email Address *</label>
                    <input 
                      type="email" required placeholder="Email Phone"
                      className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 text-sm focus:outline-none focus:bg-white/20 transition-colors"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-white/90 text-xs font-medium ml-1">Phone *</label>
                    <input 
                      type="tel" required placeholder="Phone"
                      className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 text-sm focus:outline-none focus:bg-white/20 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-white/90 text-xs font-medium ml-1">Services</label>
                    <select className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white/50 text-sm focus:outline-none focus:bg-white/20 transition-colors appearance-none outline-none">
                       <option value="" disabled selected className="text-gray-900">Services</option>
                       <option className="text-gray-900">Writing</option>
                       <option className="text-gray-900">Editing</option>
                       <option className="text-gray-900">Publishing</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1 mt-2">
                  <button type="submit" className="w-full bg-white text-[#FE7028] font-bold rounded-full py-4 uppercase text-sm tracking-wider hover:bg-gray-100 transition-colors shadow-lg" disabled={formState === 'submitting'}>
                    {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
