'use client';

import React from 'react';
import Link from 'next/link';
import Logo from '../ui/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'LinkedIn', href: 'https://linkedin.com/in/michele-tornello-06a6341aa/' },
    { name: 'GitHub', href: 'https://github.com/Flame0510' },
    { name: 'Instagram', href: 'https://instagram.com/michele_tornello' },
    { name: 'Speaker', href: '/speaker' },
  ];

  return (
    <footer className="bg-[var(--color-bg)] border-t border-[var(--color-text)]/10 py-16 px-6">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        
        <div className="flex flex-col gap-2">
          <Logo />
          <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-text)]/40">
            © {currentYear} Michele Tornello
          </p>
          <p className="font-mono text-[9px] uppercase tracking-widest text-[var(--color-text)]/20">P.IVA 06217000873</p>
          <a href="/privacy" className="font-mono text-[9px] uppercase tracking-widest text-[var(--color-text)]/20 hover:text-[var(--color-brand)] transition-colors">
            Privacy & Cookie Policy
          </a>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-text)]/40 hover:text-[var(--color-brand)] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2 md:items-end">
           <a 
            href="mailto:ciao@micheletornello.com" 
            className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-brand)] hover:underline"
          >
            ciao@micheletornello.com
          </a>
          <p className="font-mono text-[9px] uppercase tracking-widest text-[var(--color-text)]/20">
            Catania · IT · Europe
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
