"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MTLogo = () => (
  <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 22V2L8 14L15 2V22" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M19 2H31" stroke="#5E6AD2" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M25 2V22" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const navLinks = [
  { label: "Systems", href: "#cosa-costruisco" },
  { label: "Story", href: "#chi-sono" },
  { label: "Teaching", href: "#academy" },
  { label: "Connect", href: "#contatti" },
];

export const FloatingNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 transition-all duration-300"
      style={{
        paddingTop: scrolled ? "14px" : "24px",
        paddingBottom: scrolled ? "14px" : "24px",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        background: scrolled ? "rgba(6,6,6,0.7)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.04)" : "none",
      }}
    >
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Home">
        <MTLogo />
      </button>

      <div className="flex items-center">
        {navLinks.map((link, index) => (
          <div key={link.label} className="flex items-center">
            <button
              onClick={() => handleClick(link.href)}
              className="font-mono text-sm text-text-muted hover:text-text-main transition-colors duration-200"
              style={{ fontSize: "0.8125rem", letterSpacing: "0.02em" }}
            >
              {link.label}
            </button>
            {index < navLinks.length - 1 && (
              <span className="mx-3 font-mono text-text-muted" style={{ fontSize: "0.8125rem" }}>·</span>
            )}
          </div>
        ))}
      </div>
    </motion.nav>
  );
};
