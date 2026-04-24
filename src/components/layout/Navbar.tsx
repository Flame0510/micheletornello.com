'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../ui/Logo';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const openBtnRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    // Return focus to open button
    setTimeout(() => openBtnRef.current?.focus(), 50);
  }, []);

  // ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isMenuOpen) return;
      if (e.key === 'Escape') {
        closeMenu();
      }
      // Focus trap
      if (e.key === 'Tab' && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen, closeMenu]);

  // Auto-focus close button when menu opens
  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      const closeBtn = menuRef.current.querySelector<HTMLElement>('button[aria-label="Chiudi menu"]');
      setTimeout(() => closeBtn?.focus(), 50);
    }
  }, [isMenuOpen]);
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
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  useEffect(() => {
    if (pathname !== '/') return;
    
    const sections = ['enterprise', 'chi-sono', 'proof', 'lavori', 'academy', 'contatto'];
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
    { name: '[01] Enterprise', href: '/#enterprise', anchor: '#enterprise' },
    { name: '[02] Chi sono', href: '/#chi-sono', anchor: '#chi-sono' },
    { name: '[03] Proof', href: '/#proof', anchor: '#proof' },
    { name: '[04] Lavori', href: '/#lavori', anchor: '#lavori' },
    { name: '[05] Academy', href: '/academy', anchor: '/academy' },
    { name: '[06] Contatto', href: '/#contatto', anchor: '#contatto' },
  ];

  const currentYear = new Date().getFullYear();
  const isHome = pathname === '/';

  return (
    <>
      <header 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 50,
          transition: 'all 0.3s ease',
          padding: scrolled ? '0.75rem 0' : '1.5rem 0',
          background: scrolled ? 'var(--bg-nav-scrolled)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        <div className="container-nav flex items-center justify-between" style={{ paddingLeft: 'clamp(1rem, 4vw, 1.5rem)', paddingRight: 'clamp(1rem, 4vw, 1.5rem)' }}>
          <div className="flex items-center gap-4">
            <Logo />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>·</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>{currentYear}</span>
          </div>

          <nav className="hidden md:flex items-center gap-8" aria-label="Navigazione principale">
            {navLinks.map((link) => {
              const isNavActive = () => {
                if (link.href === '/academy') return pathname === '/academy';
                if (pathname !== '/') return false;
                const sectionId = link.anchor.replace('#', '');
                return activeSection === sectionId;
              };

              const active = isNavActive();
              return (
                <Link 
                  key={link.name} 
                  href={isHome ? link.anchor : link.href}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: active ? 600 : 500,
                    color: active ? 'var(--accent-primary)' : 'var(--text-muted)',
                    transition: 'color 0.2s',
                  }}
                  onMouseOver={(e) => !active && ((e.target as HTMLElement).style.color = 'var(--text-primary)')}
                  onMouseOut={(e) => !active && ((e.target as HTMLElement).style.color = 'var(--text-muted)')}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link 
              href="/speaker"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.72rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: pathname === '/speaker' ? 600 : 500,
                color: pathname === '/speaker' ? 'var(--accent-primary)' : 'var(--text-muted)',
                transition: 'color 0.2s',
              }}
            >
              [07] Speaker
            </Link>
          </nav>

          <button 
            className="md:hidden focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:outline-none rounded p-3 -mr-3"
            style={{ color: 'var(--text-primary)' }}
            ref={openBtnRef}
            onClick={() => setIsMenuOpen(true)}
            aria-label="Apri menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
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
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu di navigazione"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              background: 'var(--bg-alt)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
          >
            <button 
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                color: 'var(--text-primary)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={() => closeMenu()}
              aria-label="Chiudi menu"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }} aria-label="Navigazione mobile">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={isHome ? link.anchor : link.href}
                  onClick={() => closeMenu()}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(2rem, 8vw, 3rem)',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseOver={(e) => ((e.target as HTMLElement).style.color = 'var(--accent-primary)')}
                  onMouseOut={(e) => ((e.target as HTMLElement).style.color = 'var(--text-primary)')}
                >
                  {link.name.split('] ')[1]}
                </Link>
              ))}
              <Link 
                href="/speaker"
                onClick={() => closeMenu()}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2rem, 8vw, 3rem)',
                  fontWeight: 700,
                  color: pathname === '/speaker' ? 'var(--accent-primary)' : 'var(--text-primary)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
              >
                Speaker
              </Link>
            </nav>

            <div style={{
              position: 'absolute',
              bottom: '3rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--text-muted)',
            }}>
              © {currentYear} Michele Tornello · Catania · IT
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
