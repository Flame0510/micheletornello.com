"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export const Stack = () => {
  const { lang } = useLang();
  const t = translations.stack[lang];

  return (
    <section id="stack" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <SectionTitle prefix="// 02" title={t.title} subtitle={t.subtitle} />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {t.columns.map((column, index) => (
          <motion.div
            key={column.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: index * 0.15 }}
            className="space-y-5"
          >
            <h3 className="font-mono text-xs md:text-sm uppercase tracking-[0.16em] text-accent/60">{column.title}</h3>
            <ul className="space-y-2">
              {column.items.map((item) => (
                <li key={item} className="text-text-muted hover:text-text-main transition-colors duration-200">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
