"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../lib/animations";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export const Metrics = () => {
  const { lang } = useLang();
  const metrics = translations.metrics[lang];

  return (
    <section className="py-16 px-6 border-y border-border">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {metrics.map((m, i) => (
          <motion.div key={i} variants={fadeUp} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{m.value}</div>
            <div className="text-sm text-text-muted">{m.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
