"use client";

import { motion } from "framer-motion";
import { Users, MapPin, Clock, Mic, Calendar, TrendingUp } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const iconsList = [Users, MapPin, Clock, Mic, Calendar, TrendingUp];

export default function StatsGrid() {
  const { lang } = useLang();
  const t = translations.academyStats[lang];

  return (
    <section className="px-6 max-w-[1120px] mx-auto py-24">
      <p className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: "#B87333" }}>
        02
      </p>
      <h2 className="font-display mb-12" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#E8E8E8", letterSpacing: "-0.02em" }}>
        {t.title}
      </h2>
      <p className="text-lg leading-relaxed max-w-2xl mb-16" style={{ color: "#707070" }}>
        {t.subtitle}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.stats.map((stat, i) => {
          const Icon = iconsList[i];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-8 rounded-lg"
              style={{
                background: "linear-gradient(145deg, rgba(184,115,51,0.05) 0%, rgba(184,115,51,0.01) 100%)",
                border: "1px solid rgba(184,115,51,0.1)",
              }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <div className="absolute top-6 right-6">
                <Icon size={24} style={{ color: "#B87333", opacity: 0.5 }} />
              </div>
              <div className="font-display text-5xl md:text-6xl font-bold mb-2" style={{ color: "#B87333" }}>
                {stat.value}
              </div>
              <div className="font-mono text-sm uppercase tracking-widest" style={{ color: "#707070" }}>
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="mt-24 text-center">
        <p className="text-xl mb-8" style={{ color: "#F2EDE8" }}>
          {t.cta}
        </p>
        <motion.a
          href={`mailto:micheletornello5@gmail.com?subject=${encodeURIComponent(lang === 'it' ? 'Info Academy' : 'Academy Info')}`}
          className="inline-flex items-center justify-center px-8 py-4 font-mono text-sm uppercase tracking-widest transition-colors"
          style={{ background: "#B87333", color: "#080808" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          {t.ctaButton}
        </motion.a>
      </div>
    </section>
  );
}