"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const MTLogo = () => (
  <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 22V2L8 14L15 2V22" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M19 2H31" stroke="#5E6AD2" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M25 2V22" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// sectionId: the id used in page.tsx; path: the dedicated route (if any)
const navLinks = [
  { label: "Systems",  sectionId: "enterprise", path: null },
  { label: "Story",    sectionId: "chi-sono",   path: null },
  { label: "Teaching", sectionId: "academy",    path: "/academy" },
  { label: "Connect",  sectionId: "contatto",   path: null },
];

export const FloatingNav = () => {
  const [scrolled, setScrolled]         = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Scroll background effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver — only on homepage ("/")
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const sectionIds = navLinks.map((l) => l.sectionId);

    observerRef.current?.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the highest intersection ratio that is intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { threshold: [0.2, 0.4], rootMargin: "-10% 0px -10% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [pathname]);

  const handleClick = (sectionId: string, path: string | null) => {
    if (pathname === "/") {
      // Scroll to section on homepage
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (path) {
      window.location.href = path;
    } else {
      // Navigate home then scroll
      window.location.href = `/#${sectionId}`;
    }
  };

  const isActive = (link: (typeof navLinks)[0]) => {
    // Route-based active (dedicated pages)
    if (link.path && pathname.startsWith(link.path)) return true;
    // Scroll-based active (homepage)
    if (pathname === "/" && activeSection === link.sectionId) return true;
    return false;
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
        {navLinks.map((link, index) => {
          const active = isActive(link);
          return (
            <div key={link.label} className="flex items-center">
              <button
                onClick={() => handleClick(link.sectionId, link.path)}
                className="font-mono text-sm transition-colors duration-200"
                style={{
                  fontSize: "0.8125rem",
                  letterSpacing: "0.02em",
                  color: active ? "#B87333" : "rgba(242, 237, 232, 0.6)",
                  fontWeight: active ? 500 : 400,
                }}
              >
                {link.label}
              </button>
              {index < navLinks.length - 1 && (
                <span
                  className="mx-3 font-mono"
                  style={{ fontSize: "0.8125rem", color: "rgba(242, 237, 232, 0.3)" }}
                >
                  ·
                </span>
              )}
            </div>
          );
        })}
      </div>
    </motion.nav>
  );
};
