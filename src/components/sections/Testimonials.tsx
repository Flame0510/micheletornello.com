"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { fadeUp, stagger } from "../../lib/animations";
import { Quote } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export const Testimonials = () => {
  const { lang } = useLang();
  const t = translations.testimonials[lang];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionTitle title={t.title} subtitle={t.subtitle} />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
      >
        {t.items.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="relative flex flex-col gap-4 p-8 bg-surface border border-border rounded-xl"
          >
            <Quote size={24} className="text-accent opacity-50" />
            <p className="text-text-main text-lg leading-relaxed italic">"{item.text}"</p>
            <div className="flex items-center gap-3 mt-2">
              <div className="w-9 h-9 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-accent text-xs font-mono font-bold">
                {item.avatar}
              </div>
              <div className="flex flex-col">
                <span className="text-text-main text-sm">{item.author}</span>
                <span className="text-text-muted text-xs">{item.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
