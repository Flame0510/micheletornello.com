"use client";

import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { social } from "../../lib/data";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export const Footer = () => {
  const { lang } = useLang();
  const t = translations.footer[lang];

  const links = {
    it: [
      { name: "Chi Sono", href: "/#about" },
      { name: "Servizi", href: "/#services" },
      { name: "Portfolio", href: "/#portfolio" },
      { name: "Academy", href: "/academy" },
    ],
    en: [
      { name: "About", href: "/#about" },
      { name: "Services", href: "/#services" },
      { name: "Portfolio", href: "/#portfolio" },
      { name: "Academy", href: "/academy" },
    ]
  };

  return (
    <footer className="border-t border-border py-12 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4 text-center md:text-left">
          <p className="text-xl font-bold tracking-tighter">
            Michele <span className="font-light text-text-muted ml-1">Tornello</span>
          </p>
          <p className="text-text-muted text-sm">{t.tagline}</p>
          <div className="flex flex-col gap-1">
            <p className="text-text-muted text-sm">{t.copyright}</p>
            <p className="text-text-muted text-xs">P.IVA: IT05891780879</p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 mt-4">
            {links[lang as keyof typeof links].map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-text-muted text-xs hover:text-text-main transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
