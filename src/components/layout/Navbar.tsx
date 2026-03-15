'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../ui/Logo';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== '/') return;
    
    const sections = ['chi-sono', 'lavori', 'academy', 'contatto'];
    const observers: IntersectionObserver[] = [];

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, [pathname]);

  const navLinks = [
    { name: '[01] Chi sono', href: '/#chi-sono', anchor: '#chi-sono' },
    { name: '[02] Lavori', href: '/#lavori', anchor: '#lavori' },
    { name: '[03] Academy', href: '/academy', anchor: '/academy' },
    { name: '[04] Contatto', href: '/#contatto', anchor: '#contatto' },
  ];

  const currentYear = new Date().getFullYear();

  const isHome = pathname === '/';

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'py-3 bg-[#080808]/80 backdrop-blur-md border-b border-[#B87333]/20' : 'py-6 bg-transparent'
        }`}
        style={{ width: '100%' }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo />
            <span className="font-mono text-xs md:text-sm tracking-widest uppercase text-[#F2EDE8]/20">·</span>
            <span className="font-mono text-xs md:text-sm tracking-widest uppercase text-[#F2EDE8]/60">{currentYear}</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isNavActive = () => {
                // Pagine dedicate (non homepage)
                if (link.href === '/academy') return pathname === '/academy';
                // Sezioni homepage via scroll
                if (pathname !== '/') return false;
                const sectionId = link.anchor.replace('#', '');
                return activeSection === sectionId;
              };

              return (
                <Link 
                  key={link.name} 
                  href={isHome ? link.anchor : link.href}
                  className={`font-mono text-[10px] lg:text-xs uppercase tracking-widest transition-colors ${
                    isNavActive() ? 'text-[#B87333]' : 'text-[#F2EDE8]/60 hover:text-[#B87333]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link 
              href="/speaker"
              className={`font-mono text-[10px] lg:text-xs uppercase tracking-widest transition-colors ${
                pathname === '/speaker' ? 'text-[#B87333]' : 'text-[#F2EDE8]/60 hover:text-[#B87333]'
              }`}
            >
              [05] Speaker
            </Link>
          </nav>

          <button 
            className="md:hidden text-[#F2EDE8] focus:outline-none"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Apri menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] bg-[#080808] flex flex-col items-center justify-center p-6"
          >
            <button 
              className="absolute top-8 right-8 text-[#F2EDE8] focus:outline-none"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Chiudi menu"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={isHome ? link.anchor : link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-display text-4xl hover:text-[#B87333] transition-colors italic"
                >
                  {link.name.split('] ')[1]}
                </Link>
              ))}
              <Link 
                href="/speaker"
                onClick={() => setIsMenuOpen(false)}
                className={`font-display text-4xl transition-colors italic ${
                  pathname === '/speaker' ? 'text-[#B87333]' : 'hover:text-[#B87333]'
                }`}
              >
                Speaker
              </Link>
            </nav>

            <div className="absolute bottom-12 font-mono text-[10px] uppercase tracking-widest text-[#F2EDE8]/30">
              © {currentYear} Michele Tornello · Catania · IT
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
