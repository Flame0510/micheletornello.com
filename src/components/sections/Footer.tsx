"use client";

import { social } from "@/lib/data";
import { useLang } from "@/lib/LanguageContext";

export const Footer = () => {
  const { lang, setLang } = useLang();

  return (
    <footer className="border-t border-border py-8 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="text-sm text-text-muted flex flex-wrap items-center justify-center gap-2">
          <span>Michele Tornello</span>
          <span>·</span>
          <span>2025</span>
          <span>·</span>
          <span>Sicilia, IT</span>
          <span>·</span>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-main transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-main transition-colors"
          >
            GitHub ↗
          </a>
        </div>

        <p className="text-xs text-text-muted">P.IVA: da configurare</p>

        <div className="flex items-center gap-1 rounded-full border border-border bg-background p-1">
          <button
            type="button"
            onClick={() => setLang("it")}
            className={`px-2 py-1 text-xs rounded-full transition-colors ${
              lang === "it" ? "bg-foreground text-background" : "text-text-muted"
            }`}
            aria-label="Cambia lingua in Italiano"
          >
            IT
          </button>
          <button
            type="button"
            onClick={() => setLang("en")}
            className={`px-2 py-1 text-xs rounded-full transition-colors ${
              lang === "en" ? "bg-foreground text-background" : "text-text-muted"
            }`}
            aria-label="Switch language to English"
          >
            EN
          </button>
        </div>
      </div>
    </footer>
  );
};
