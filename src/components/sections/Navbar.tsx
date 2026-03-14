"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLang();
  const t = translations.navbar[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: t.about, href: "/#about" },
    { name: t.services, href: "/#services" },
    { name: t.portfolio, href: "/#portfolio" },
    { name: t.academy, href: "/academy" },
    { name: t.contact, href: "/#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-background/80 backdrop-blur-md border-b border-border-subtle py-4" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          Michele <span className="font-light text-text-muted ml-1">Tornello</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-text-main transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="outline" className="px-5 py-2 text-sm">
            {t.cta}
          </Button>
          <div className="text-sm">
            <button
              type="button"
              onClick={() => setLang("it")}
              className={lang === "it" ? "text-accent font-bold" : "text-text-muted hover:text-text-main"}
            >
              IT
            </button>
            <span className="mx-2 text-text-muted">|</span>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={lang === "en" ? "text-accent font-bold" : "text-text-muted hover:text-text-main"}
            >
              EN
            </button>
          </div>
        </div>

        <button
          className="md:hidden text-text-main p-2 rounded-md hover:bg-surface transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="outline" className="w-full mt-4">
                {t.cta}
              </Button>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setLang("it")}
                  className={lang === "it" ? "text-accent font-bold" : "text-text-muted hover:text-text-main"}
                >
                  IT
                </button>
                <span className="mx-2 text-text-muted">|</span>
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={lang === "en" ? "text-accent font-bold" : "text-text-muted hover:text-text-main"}
                >
                  EN
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
