"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../lib/animations";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export const Metrics = () => {
  const { lang } = useLang();
  // Only show the 2 metrics that are strong and credible
  const all = translations.metrics[lang];
  // "Ore di docenza" (index 2) and keep it minimal — 2 numbers max
  const metrics = [all[2], all[3]]; // 500+ ore docenza, 3 sedi Academy

  return (
    <section className="py-12 px-6 border-y border-border/50">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        className="max-w-7xl mx-auto flex flex-wrap justify-center gap-16 md:gap-24"
      >
        {metrics.map((m, i) => (
          <motion.div key={i} variants={fadeUp} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-1 tracking-tight">{m.value}</div>
            <div className="text-sm text-text-muted tracking-wide">{m.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
