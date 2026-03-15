"use client";

import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";

export const Footer = () => {
  const { lang, setLang } = useLang();

  return (
    <footer className="mt-32" style={{ borderTop: "1px solid #1A1A1A" }}>
      <div className="px-6 md:px-12 py-6">
        <div className="max-w-[1120px] mx-auto flex flex-col gap-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <p className="font-mono text-text-muted" style={{ fontSize: "0.75rem" }}>
              Michele Tornello · {new Date().getFullYear()} · © All rights reserved
            </p>

            <div className="flex items-center gap-6">
              <Link
                href="https://www.linkedin.com/in/michele-tornello-06a6341aa/"
                target="_blank"
                className="font-mono text-text-muted hover:text-text-main transition-colors duration-200"
                style={{ fontSize: "0.75rem", letterSpacing: "0.05em" }}
              >
                LinkedIn ↗
              </Link>
              <Link
                href="https://www.instagram.com/michele_tornello"
                target="_blank"
                className="font-mono text-text-muted hover:text-text-main transition-colors duration-200"
                style={{ fontSize: "0.75rem", letterSpacing: "0.05em" }}
              >
                Instagram ↗
              </Link>
              <button
                onClick={() => setLang(lang === "it" ? "en" : "it")}
                className="font-mono text-xs text-text-muted hover:text-text-main transition-colors uppercase tracking-widest"
              >
                {lang === "it" ? "EN" : "IT"}
              </button>
            </div>
          </div>

          <div className="font-mono text-xs text-text-muted" style={{ color: "#707070" }}>
            &gt; available for systems that matter
          </div>
        </div>
      </div>
    </footer>
  );
};
