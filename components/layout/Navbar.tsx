'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from '@/data/types';


const navLinks: NavLink[] = [
  { href: '/writing', label: 'Writing' },
  { href: '/editing', label: 'Editing' },
  { href: '/design', label: 'Design' },
  { href: '/illustration', label: 'Illustration' },
  { href: '/publishing', label: 'Publishing' },
  { href: '/printing', label: 'Printing' },
  { href: '/marketing', label: 'Marketing' },
  { href: '/author-website', label: 'Author Website' },
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
    <>
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
      <Link href="/" className="relative flex-shrink-0 transition-transform hover:scale-105">
        {/* Soft radial glow behind the logo to ensure white text is visible on light backgrounds without a hard box */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.6)_0%,transparent_70%)] pointer-events-none transition-opacity duration-500 -z-10 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
        <div className="flex items-center justify-center relative z-10" style={{ width: '180px', height: '90px' }}>
          <Image
            src="/north.png"
            alt="Northcrest Book Publishers"
            width={180}
            height={90}
            className="object-contain brightness-125 contrast-125"
            style={{ filter: 'drop-shadow(0px 2px 5px rgba(0,0,0,0.8))' }}
            priority
          />
        </div>
      </Link>

      {/* Pill nav bar */}
      <div
        className="flex-none ml-auto xl:mx-auto flex items-center justify-center rounded-full shadow-xl"
        style={{
          background: 'rgba(26, 26, 26, 0.92)',
          padding: '10px 16px',
        }}
      >
        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center flex-1 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 2xl:px-5 py-2 text-[14px] 2xl:text-[16px] font-bold whitespace-nowrap transition-all duration-200 ${pathname === link.href
                ? 'text-[#C8A96E]'
                : 'text-gray-200 hover:text-[#C8A96E]'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button — Centered on mobile */}
        <div className="flex items-center justify-center w-full xl:w-auto xl:flex-shrink-0">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden text-white text-2xl p-2 hover:text-[#C8A96E] transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>

    {/* Mobile Menu Overlay & Drawer — Outside header for z-index safety */}
    <AnimatePresence>
      {menuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="xl:hidden fixed inset-0 bg-black/80 backdrop-blur-md z-[9998]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="xl:hidden fixed top-0 right-0 bottom-0 w-[85%] max-w-[400px] bg-black z-[9999] shadow-2xl flex flex-col p-6 overflow-y-auto"
          >
            {/* Close Button Inside Menu */}
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white/70 hover:text-[#C8A96E] p-2 transition-colors border border-white/10 rounded-xl"
                aria-label="Close menu"
              >
                <FaTimes size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-6 py-4 text-lg font-bold rounded-full transition-all duration-300 ${pathname === link.href
                    ? 'bg-white/10 text-[#C8A96E] border border-[#C8A96E]/30 shadow-lg'
                    : 'text-white/90 hover:bg-white/5 hover:text-white'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-8 border-t border-white/10">
              <Link
                href="/contact-us"
                onClick={() => setMenuOpen(false)}
                className="block text-center font-black text-sm py-5 rounded-2xl uppercase tracking-[0.2em]"
                style={{ background: '#C8A96E', color: '#FFFFFF' }}
              >
                Get Started
              </Link>
              
              {/* Branding footer in menu */}
              <div className="mt-8 flex items-center gap-3 px-2">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <span className="text-[#C8A96E] font-black text-xl">N</span>
                </div>
                <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Northcrest Book Publishers</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  </>
);
}
