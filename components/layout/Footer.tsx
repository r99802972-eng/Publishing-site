import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] pt-20 pb-10 border-t border-white/5">
      <div className="container-pad w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Col */}
          <div className="flex flex-col gap-8">
            <Link href="/" className="flex-shrink-0 transition-transform hover:scale-105">
              <div className="w-48">
                <img 
                  src="/logo.png" 
                  alt="Northcrest Book Publishers Logo" 
                  className="w-full h-auto object-contain brightness-125 contrast-125 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]" 
                />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-medium">
              At Northcrest Book Publishers, we believe every great story deserves to be seen, read, and remembered. We turn manuscripts into global masterpieces.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, idx) => (
                <Link key={idx} href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#C8A96E] hover:bg-[#C8A96E] hover:text-[#0F2440] transition-all duration-300">
                  <Icon className="text-sm" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="text-[#C8A96E] text-xs font-bold uppercase tracking-[0.2em] mb-8">Services</h4>
            <ul className="flex flex-col gap-4">
              {['Writing', 'Editing', 'Design', 'Publishing', 'Printing', 'Marketing'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 text-[15px] font-medium hover:text-[#C8A96E] transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96E]/30 group-hover:bg-[#C8A96E] transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:pl-4">
            <h4 className="text-[#C8A96E] text-xs font-bold uppercase tracking-[0.2em] mb-8">Company</h4>
            <ul className="flex flex-col gap-4">
              {[
                { label: 'Why Us', href: '/why-us' },
                { label: 'Contact Us', href: '/contact-us' },
                { label: 'Terms & Conditions', href: '/terms-conditions' },
                { label: 'Privacy Policy', href: '/privacy-policy' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-400 text-[15px] font-medium hover:text-[#C8A96E] transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96E]/30 group-hover:bg-[#C8A96E] transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#C8A96E] text-xs font-bold uppercase tracking-[0.2em] mb-8">Connect</h4>
            <ul className="flex flex-col gap-6 text-gray-400">
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C8A96E] group-hover:bg-[#C8A96E]/10 transition-colors">
                  <FaPhone className="text-sm" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-0.5">Phone</span>
                  <span className="text-white font-bold text-sm">(888) 260-4874</span>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C8A96E] group-hover:bg-[#C8A96E]/10 transition-colors">
                  <FaEnvelope className="text-sm" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-0.5">Email</span>
                  <span className="text-white font-bold text-sm truncate">Info@northcrestpublishers.com</span>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C8A96E] group-hover:bg-[#C8A96E]/10 transition-colors mt-1">
                  <FaMapMarkerAlt className="text-sm" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-0.5">Office</span>
                  <span className="text-white font-bold text-sm leading-tight">100 Wilshire Blvd, Suite 700,<br/>Santa Monica, CA 90401</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-[13px] font-medium">
            © {currentYear} Northcrest Book Publishers. <span className="hidden md:inline">Crafting Masterpieces Globally.</span>
          </p>
          <div className="flex gap-8">
            <Link href="/terms-conditions" className="text-gray-500 text-[13px] font-medium hover:text-[#C8A96E] transition-colors">Terms of Service</Link>
            <Link href="/privacy-policy" className="text-gray-500 text-[13px] font-medium hover:text-[#C8A96E] transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
