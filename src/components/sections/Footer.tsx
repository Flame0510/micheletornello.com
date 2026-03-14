"use client";

import { Instagram, Linkedin } from "lucide-react";
import { social } from "../../lib/data";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export const Footer = () => {
  const { lang } = useLang();
  const t = translations.footer[lang];

  return (
    <footer className="border-t border-border py-12 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4 text-center md:text-left">
          <p className="text-xl font-bold tracking-tighter">
            Michele <span className="text-accent">Tornello</span>
          </p>
          <p className="text-text-muted text-sm">{t.tagline}</p>
          <p className="text-text-muted text-sm">{t.copyright}</p>
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
