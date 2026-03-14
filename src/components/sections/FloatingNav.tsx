"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import Link from "next/link";

export const FloatingNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12"
      style={{
        backdropFilter: scrolled ? "blur(12px)" : "none",
        backgroundColor: scrolled ? "rgba(6,6,6,0.85)" : "transparent",
        borderBottom: scrolled ? "1px solid #1A1A1A" : "1px solid transparent",
        transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <nav className="max-w-[1120px] mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="font-sans text-sm font-medium text-text-main">michele</span>
          <span className="font-sans text-sm font-medium" style={{ color: "#5E6AD2" }}>
            .
          </span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "WORK", href: "/#portfolio" },
            { label: "ABOUT", href: "/#about" },
            { label: "ACADEMY", href: "/academy" },
            { label: "CONTACT", href: "/#contact" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-mono text-text-muted hover:text-text-main transition-colors duration-200"
              style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Lang toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang("it")}
            className="font-mono transition-colors duration-200"
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              color: lang === "it" ? "#E8E8E8" : "#707070",
              fontWeight: lang === "it" ? 500 : 300,
            }}
          >
            IT
          </button>
          <span className="text-border">|</span>
          <button
            onClick={() => setLang("en")}
            className="font-mono transition-colors duration-200"
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              color: lang === "en" ? "#E8E8E8" : "#707070",
              fontWeight: lang === "en" ? 500 : 300,
            }}
          >
            EN
          </button>
        </div>
      </nav>
    </motion.header>
  );
};
