"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { useLang } from "@/lib/LanguageContext";

export const NowSection = () => {
  const { lang } = useLang();

  const content = {
    it: {
      title: "Adesso",
      subtitle: "Cosa sta succedendo in questo momento.",
      lines: [
        { key: "focus_attuale", value: '"Sistemi scalabili con Next.js + AI"' },
        { key: "insegnando", value: '"Web Development @ Steve Jobs Academy"' },
        { key: "esplorando", value: '["LLM integrations", "Edge computing", "Product-led growth"]' },
        { key: "leggendo", value: '"The Mom Test — Rob Fitzpatrick"' },
        { key: "disponibile_per", value: '"progetti con un perché forte"' },
        { key: "status", value: '"building"' },
      ],
    },
    en: {
      title: "Now",
      subtitle: "What's happening at the moment.",
      lines: [
        { key: "current_focus", value: '"Scalable systems with Next.js + AI"' },
        { key: "teaching", value: '"Web Development @ Steve Jobs Academy"' },
        { key: "exploring", value: '["LLM integrations", "Edge computing", "Product-led growth"]' },
        { key: "reading", value: '"The Mom Test — Rob Fitzpatrick"' },
        { key: "available_for", value: '"projects with a strong why"' },
        { key: "status", value: '"building"' },
      ],
    },
  };

  const t = content[lang];

  return (
    <section id="now" className="py-24 px-6 md:px-12 max-w-[1120px] mx-auto">
      <SectionTitle prefix="03" title={t.title} subtitle={t.subtitle} />

      <motion.div
        className="rounded-lg overflow-hidden"
        style={{ background: "#0A0A0A", border: "1px solid #1A1A1A" }}
        initial={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid #1A1A1A" }}>
          <div className="w-3 h-3 rounded-full" style={{ background: "#C9A84C", opacity: 0.8 }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#707070", opacity: 0.4 }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#707070", opacity: 0.4 }} />
          <span className="font-mono text-xs text-text-muted ml-2" style={{ fontSize: "0.75rem" }}>
            now.json
          </span>
        </div>

        <div className="p-6 space-y-3">
          <p className="font-mono text-text-muted" style={{ fontSize: "0.875rem" }}>{"{"}</p>
          {t.lines.map((line, i) => (
            <motion.div
              key={i}
              className="font-mono pl-4 flex gap-2"
              style={{ fontSize: "0.875rem" }}
              initial={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <span style={{ color: "#707070" }}>&quot;{line.key}":</span>
              <span style={{ color: line.value.startsWith("[") ? "#5E6AD2" : "#E8E8E8" }}>{line.value}</span>
            </motion.div>
          ))}
          <p className="font-mono text-text-muted" style={{ fontSize: "0.875rem" }}>{"}"}</p>
          <p className="font-mono" style={{ fontSize: "0.875rem", color: "#5E6AD2" }}>
            █
            <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }}>
              |
            </motion.span>
          </p>
        </div>
      </motion.div>
    </section>
  );
};
