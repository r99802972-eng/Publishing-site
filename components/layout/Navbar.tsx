'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1A1A2E] shadow-2xl py-2' : 'bg-[#1A1A2E]/95 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-[#C8A96E] flex items-center justify-center">
            <span className="text-white font-bold text-lg font-serif">B</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-white font-bold text-sm tracking-wider">BENJAMIN</span>
            <span className="text-[#C8A96E] text-xs tracking-widest">PUBLISHERS</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-[11px] font-medium tracking-wide transition-colors duration-200 rounded-md ${
                pathname === link.href
                  ? 'text-[#C8A96E]'
                  : 'text-gray-300 hover:text-[#C8A96E]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden xl:flex items-center gap-4">
          <a
            href="tel:8882604874"
            className="flex items-center gap-2 text-[#C8A96E] text-sm font-medium hover:text-white transition-colors"
          >
            <FaPhone className="text-xs" />
            (888) 260-4874
          </a>
          <Link href="/contact-us" className="btn-primary text-xs px-5 py-2">
            Get Started
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="xl:hidden text-white text-xl p-2 hover:text-[#C8A96E] transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="xl:hidden bg-[#16213E] border-t border-[#C8A96E]/20 py-4 absolute top-full left-0 right-0 shadow-xl">
          <nav className="px-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  pathname === link.href
                    ? 'bg-[#C8A96E]/10 text-[#C8A96E]'
                    : 'text-gray-300 hover:text-[#C8A96E] hover:bg-[#C8A96E]/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-[#C8A96E]/20 pt-3">
              <a href="tel:8882604874" className="flex items-center gap-2 text-[#C8A96E] text-sm px-4">
                <FaPhone className="text-xs" /> (888) 260-4874
              </a>
              <Link href="/contact-us" className="btn-primary text-center mx-4 text-sm py-2">
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
