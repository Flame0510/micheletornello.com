"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { fadeUp, stagger } from "../../lib/animations";
import { Quote } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

export const Testimonials = () => {
  const { lang } = useLang();

  const content = {
    it: {
      title: "Dicono di me",
      subtitle: "Feedback in arrivo. Lavoro in corso.",
      note: "Questa sezione sarà aggiornata con testimonianze reali di clienti e collaboratori.",
      cta: "Hai lavorato con me? Scrivimi.",
    },
    en: {
      title: "What they say",
      subtitle: "Feedback incoming. Work in progress.",
      note: "This section will be updated with real testimonials from clients and collaborators.",
      cta: "Have we worked together? Let me know.",
    },
  };

  const t = content[lang];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionTitle title={t.title} subtitle={t.subtitle} />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        className="flex flex-col md:flex-row items-center gap-6 p-8 border border-border/50 rounded-xl bg-surface/30"
      >
        <Quote size={32} className="text-accent/30 shrink-0" />
        <div className="space-y-2">
          <p className="text-text-muted leading-relaxed">{t.note}</p>
          <a
            href="#contact"
            className="text-sm text-accent hover:text-accent-hover font-medium transition-colors"
          >
            {t.cta} →
          </a>
        </div>
      </motion.div>
    </section>
  );
};
