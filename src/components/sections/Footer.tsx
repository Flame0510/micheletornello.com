"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";

const terminalMessages = [
  "status: building_something_new",
  "location: Sicilia, IT",
  "coffee_intake: above_recommended_limit",
  "current_stack: next.js + typescript + ambizione",
  "teaching_mode: active — 3 sedi",
  "ai_usage: moltiplicatore, non stampella",
  "uptime: freelance since 2019",
  "mood: shipping",
  "side_project: probably starting another one",
  'motto: "se non ha un perché, non lo costruisco"',
];

export const Footer = () => {
  const { lang, setLang } = useLang();
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((i) => (i + 1) % terminalMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="mt-32" style={{ borderTop: "1px solid #1A1A1A" }}>
      <div className="px-6 md:px-12 py-4" style={{ background: "#0A0A0A", borderBottom: "1px solid #1A1A1A" }}>
        <div className="max-w-[1120px] mx-auto flex items-center gap-3">
          <span className="font-mono" style={{ color: "#5E6AD2", fontSize: "0.75rem" }}>
            {">"}
          </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={msgIndex}
              className="font-mono"
              style={{ color: "#707070", fontSize: "0.75rem" }}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3 }}
            >
              {terminalMessages[msgIndex]}
            </motion.span>
          </AnimatePresence>
          <motion.span
            className="font-mono"
            style={{ color: "#5E6AD2", fontSize: "0.75rem" }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            |
          </motion.span>
        </div>
      </div>

      <div className="px-6 md:px-12 py-6">
        <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-text-muted" style={{ fontSize: "0.75rem" }}>
            Michele Tornello · {new Date().getFullYear()} · Sicilia, IT
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
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang("it")}
              className="font-mono transition-colors duration-200"
              style={{ fontSize: "0.75rem", color: lang === "it" ? "#E8E8E8" : "#707070" }}
            >
              IT
            </button>
            <span style={{ color: "#1A1A1A" }}>|</span>
            <button
              onClick={() => setLang("en")}
              className="font-mono transition-colors duration-200"
              style={{ fontSize: "0.75rem", color: lang === "en" ? "#E8E8E8" : "#707070" }}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
