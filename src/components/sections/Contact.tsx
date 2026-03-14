"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { fadeUp } from "../../lib/animations";
import { Mail, Send } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export const Contact = () => {
  const { lang } = useLang();
  const t = translations.contact[lang];

  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto overflow-hidden text-center">
      <SectionTitle prefix="08" title={t.title} subtitle={`${t.subtitle} ${t.note}`} className="text-center flex flex-col items-center" />

      <motion.div
        variants={fadeUp}
        initial="visible"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        className="space-y-12"
      >
        <Card className="p-8 md:p-12 text-left bg-surface-hover/30 border-accent/20">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-muted">{t.name}</label>
                <input
                  type="text"
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-accent transition-colors"
                  placeholder={t.name}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-muted">{t.email}</label>
                <input
                  type="email"
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-accent transition-colors"
                  placeholder="email@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-muted">{t.message}</label>
              <textarea
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-accent transition-colors min-h-[150px]"
                placeholder={t.message}
              />
            </div>
            <Button className="w-full gap-2">
              {t.submit} <Send size={18} />
            </Button>
          </form>
        </Card>

        <div className="flex flex-col items-center gap-4">
          <p className="text-text-muted">{t.directEmail}</p>
          <a
            href="mailto:info@micheletornello.com"
            className="flex items-center gap-2 text-accent hover:text-accent-hover font-bold text-xl transition-colors"
          >
            <Mail size={24} /> info@micheletornello.com
          </a>
        </div>
      </motion.div>
    </section>
  );
};
