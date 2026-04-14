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
    <footer aria-label="Footer" style={{
      background: 'var(--bg-alt)',
      borderTop: '1px solid var(--border)',
      paddingTop: '4rem',
      paddingBottom: '4rem',
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
    }}>
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        
        <div className="flex flex-col gap-2">
          <Logo />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)' }}>
            © {currentYear} Michele Tornello
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)', opacity: 0.6 }}>P.IVA 06217000873</p>
          <a href="/privacy" style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)', opacity: 0.6, transition: 'color 0.2s' }}
            onMouseOver={(e) => ((e.target as HTMLElement).style.color = 'var(--accent-primary)')}
            onMouseOut={(e) => ((e.target as HTMLElement).style.color = 'var(--text-muted)')}
          >
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
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)', transition: 'color 0.2s' }}
              onMouseOver={(e) => ((e.target as HTMLElement).style.color = 'var(--accent-primary)')}
              onMouseOut={(e) => ((e.target as HTMLElement).style.color = 'var(--text-muted)')}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2 md:items-end">
          <a 
            href="mailto:micheletornello5@gmail.com" 
            style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent-primary)', transition: 'opacity 0.2s' }}
            onMouseOver={(e) => ((e.target as HTMLElement).style.opacity = '0.75')}
            onMouseOut={(e) => ((e.target as HTMLElement).style.opacity = '1')}
          >
            micheletornello5@gmail.com
          </a>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)', opacity: 0.5 }}>
            Catania · IT · Europe
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
