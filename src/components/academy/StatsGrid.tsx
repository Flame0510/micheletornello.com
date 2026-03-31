"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Users, MapPin, Clock, Mic, Calendar, TrendingUp } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const iconsList = [Users, MapPin, Clock, Mic, Calendar, TrendingUp];

export default function StatsGrid() {
  const { lang } = useLang();
  const t = translations.academyStats[lang];
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="px-6 max-w-[1120px] mx-auto py-12 md:py-16">
      <p className="section-label mb-3">
        02
      </p>
      <h2 className="section-title mb-8">{t.title}</h2>
      <p className="section-subtitle mb-10">{t.subtitle}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.stats.map((stat, i) => {
          const Icon = iconsList[i];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0.1 : 0.5, delay: shouldReduceMotion ? 0 : i * 0.1 }}
              className="relative p-8 rounded-lg"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
              whileHover={{ borderColor: "var(--accent-copper)", transition: { duration: 0.2 } }}
            >
              <div className="absolute top-6 right-6">
                <Icon size={24} style={{ color: "var(--accent-copper)", opacity: 0.5 }} />
              </div>
              <div className="font-display text-5xl md:text-6xl font-bold mb-2" style={{ color: "var(--accent-copper)" }}>
                {stat.value}
              </div>
              <div className="font-mono text-sm uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="mt-12 text-center">
        <p className="text-xl mb-8" style={{ color: "var(--color-text)" }}>
          {t.cta}
        </p>
        <a
          href={`mailto:micheletornello5@gmail.com?subject=${encodeURIComponent(lang === 'it' ? 'Info Academy' : 'Academy Info')}`}
          className="btn-primary"
        >
          {t.ctaButton}
        </a>
      </div>
    </section>
  );
}