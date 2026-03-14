"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import { metrics } from "@/lib/data";

export const Hero = () => {
  const { lang } = useLang();
  const t = translations.hero[lang];
  const stats = translations.metrics[lang] ?? metrics;

  return (
    <section className="min-h-[92vh] flex items-center relative overflow-hidden px-6 pt-28 pb-16">
      <div className="absolute top-20 right-[10%] w-[340px] h-[340px] bg-accent/10 blur-[130px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-[8%] w-[260px] h-[260px] bg-accent/8 blur-[110px] rounded-full -z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-7xl mx-auto"
      >
        <p className="font-mono text-xs md:text-sm tracking-[0.14em] text-text-muted">{t.versionLine}</p>

        <h1 className="mt-5 text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[0.95]">
          <span className="block">Michele</span>
          <span className="block">Tornello</span>
        </h1>

        <p className="mt-6 font-mono text-sm md:text-base text-text-muted">
          {t.roleLine}
          <span className="inline-block ml-1 animate-pulse text-accent">|</span>
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <p className="text-text-muted leading-relaxed max-w-2xl">{t.briefBio}</p>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {stats.map((item) => (
              <div key={item.label} className="border-l border-border pl-4">
                <p className="text-2xl md:text-3xl font-semibold tracking-tight">{item.value}</p>
                <p className="text-sm text-text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-border" />

        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm md:text-base">
          <Link href="#portfolio" className="text-text-muted hover:text-text-main transition-colors">
            {t.ctaProjects} <span className="text-accent">→</span>
          </Link>
          <span className="text-text-muted/40">·</span>
          <Link href="#contact" className="text-text-muted hover:text-text-main transition-colors">
            {t.ctaContact} <span className="text-accent">→</span>
          </Link>
          <span className="text-text-muted/40">·</span>
          <Link href="/academy" className="text-text-muted hover:text-text-main transition-colors">
            {t.ctaAcademy} <span className="text-accent">→</span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};
