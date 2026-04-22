'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from '@/data/types';

const navLinks: NavLink[] = [
  { href: '/writing', label: 'Writing' },
  { href: '/editing', label: 'Editing' },
  { href: '/design', label: 'Design' },
  { href: '/publishing', label: 'Publishing' },
  { href: '/printing', label: 'Printing' },
  { href: '/marketing', label: 'Marketing' },
  { href: '/audio-book', label: 'Audio Book' },
  { href: '/why-us', label: 'Why Us' },
  { href: '/contact-us', label: 'Contact Us' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center px-4 md:px-8 h-[72px]">
      {/* Logo — sits outside the pill bar, on the left */}
      <Link href="/" className="flex-shrink-0 mr-4">
        <div className="w-[90px] h-[60px] flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Northcrest Book Publishers"
            width={90}
            height={60}
            className="object-contain w-full h-full"
            priority
          />
        </div>
      </Link>

      {/* Pill-shaped nav bar */}
      <div
        className={`flex-1 flex items-center justify-between rounded-full px-6 py-2 transition-all duration-300 ${
          scrolled
            ? 'bg-[#1a1a1a]/95 backdrop-blur-md shadow-xl'
            : 'bg-[#1a1a1a]/80 backdrop-blur-sm shadow-lg'
        }`}
      >
        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 text-xs font-medium tracking-wide transition-colors duration-200 rounded-full ${
                pathname === link.href
                  ? 'text-[#FE7028]'
                  : 'text-gray-200 hover:text-[#FE7028]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile: show site name */}
        <span className="xl:hidden text-white font-semibold text-sm">Menu</span>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact-us"
            className="bg-[#FE7028] text-white text-xs font-bold px-5 py-2 rounded-full hover:bg-[#e8601e] transition-colors shadow-md shadow-[#FE7028]/30 whitespace-nowrap"
          >
            Get Started
          </Link>
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden text-white text-lg p-1 hover:text-[#FE7028] transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="xl:hidden bg-[#1a1a1a] border-t border-[#FE7028]/20 py-4 absolute top-full left-0 right-0 shadow-xl rounded-b-2xl mx-4">
          <nav className="px-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  pathname === link.href
                    ? 'bg-[#FE7028]/10 text-[#FE7028]'
                    : 'text-white hover:text-[#FE7028] hover:bg-[#FE7028]/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 border-t border-[#FE7028]/20 pt-3 px-4">
              <Link href="/contact-us" className="block text-center bg-[#FE7028] text-white text-sm font-bold px-5 py-3 rounded-full hover:bg-[#e8601e] transition-colors">
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
