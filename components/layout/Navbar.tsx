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
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Handle scrolling background visibility
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Always show at the very top
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else {
        // Scroll Down -> Hide, Scroll Up -> Show (Standard Smart Header)
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center gap-4 px-4 md:px-8 h-[160px] transition-all duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      {/* Dynamic Background Layer */}
      <div
        className={`absolute inset-0 bg-transparent backdrop-blur-md border-b border-white/10 transition-opacity duration-500 -z-10 shadow-2xl ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Logo — sit naturally on background */}
      <Link href="/" className="flex-shrink-0 transition-transform hover:scale-105">
        <div className="flex items-center justify-center" style={{ width: '180px', height: '70px' }}>
          <Image
            src="/logo.png"
            alt="Northcrest Book Publishers"
            width={180}
            height={90}
            className="object-contain brightness-125 contrast-125"
            style={{ filter: 'drop-shadow(0px 4px 10px rgba(0,0,0,0.9))' }}
            priority
          />
        </div>
      </Link>

      {/* Pill nav bar */}
      <div
        className="flex-1 flex items-center justify-between rounded-full shadow-xl"
        style={{
          background: 'rgba(26, 26, 26, 0.92)',
          padding: '16px 16px 16px 32px',
        }}
      >
        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-5 py-2 text-[16px] font-bold whitespace-nowrap transition-colors duration-200 ${pathname === link.href
                ? 'text-[#C8A96E]'
                : 'text-gray-200 hover:text-[#C8A96E]'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile label */}
        <span className="xl:hidden text-white font-semibold text-sm">Northcrest</span>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden text-white text-lg p-2 hover:text-[#C8A96E] transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="xl:hidden absolute top-[76px] left-4 right-4 rounded-2xl shadow-2xl py-4 px-2 z-50"
          style={{ background: '#1a1a1a', border: '1px solid rgba(200,169,110,0.15)' }}
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-3 text-sm font-medium rounded-xl transition-colors ${pathname === link.href
                  ? 'text-[#C8A96E] bg-[#C8A96E]/10'
                  : 'text-white hover:text-[#C8A96E] hover:bg-white/5'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 px-3" style={{ borderTop: '1px solid rgba(200,169,110,0.15)' }}>
              <Link
                href="/contact-us"
                className="block text-center font-bold text-sm py-3 rounded-xl"
                style={{ background: '#FE7028', color: '#FFFFFF' }}
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
