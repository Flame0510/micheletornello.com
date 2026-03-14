"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 50) {
        setVisible(true);
      } else if (currentY > lastScrollY.current + 5) {
        setVisible(false);
      } else if (currentY < lastScrollY.current - 5) {
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-6"
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
                {index < navLinks.length - 1 ? (
                  <span className="mx-3 font-mono text-text-muted" style={{ fontSize: "0.8125rem" }}>
                    ·
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
