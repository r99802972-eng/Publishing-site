import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark-section pt-16 pb-8 border-t border-[#C8A96E]/10">
      <div className="container-pad">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#C8A96E] flex items-center justify-center">
                <span className="text-white font-bold text-lg font-serif">B</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-bold text-sm tracking-wider">BENJAMIN</span>
                <span className="text-[#C8A96E] text-xs tracking-widest">PUBLISHERS</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              At Benjamin Publishers, we believe every great story deserves to be seen, read, and remembered. Whether you&apos;re polishing your manuscript or preparing to launch, we&apos;re here to make your journey stress-free.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg mb-6 font-semibold">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {['Writing', 'Editing', 'Design', 'Publishing', 'Printing', 'Marketing'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 text-sm hover:text-[#C8A96E] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-lg mb-6 font-semibold">Legal</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Why Us', href: '/why-us' },
                { label: 'Contact Us', href: '/contact-us' },
                { label: 'Terms & Conditions', href: '/terms-conditions' },
                { label: 'Privacy Policy', href: '/privacy-policy' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-400 text-sm hover:text-[#C8A96E] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg mb-6 font-semibold">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <FaPhone className="mt-1 text-[#C8A96E]" />
                <span>(888) 260-4874</span>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-[#C8A96E]" />
                <span>Info@benjaminpublishers.com</span>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#C8A96E]" />
                <span>100 Wilshire Blvd., Suite 700, Santa Monica, CA 90401</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#C8A96E]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © {currentYear} Benjamin Publishers. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/terms-conditions" className="text-gray-500 text-xs hover:text-[#C8A96E]">Terms & Conditions</Link>
            <Link href="/privacy-policy" className="text-gray-500 text-xs hover:text-[#C8A96E]">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
