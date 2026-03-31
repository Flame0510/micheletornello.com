"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import StatsGrid from "@/components/academy/StatsGrid";
import ValueProposition from "@/components/academy/ValueProposition";
import CourseGrid from "@/components/academy/CourseGrid";
import EventTimeline from "@/components/academy/EventTimeline";

export default function AcademyPage() {
  const { lang } = useLang();
  const t = translations.academyPage[lang];

  return (
    <main className="min-h-screen" style={{ background: "var(--bg-base)" }}>
      {/* Hero con gradiente */}
      <section className="pt-40 pb-24 px-6 max-w-[1120px] mx-auto relative">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 30% 50%, rgba(37,99,235,0.3) 0%, transparent 50%)",
          }}
        />
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest transition-colors mb-16 group relative z-10"
          style={{ color: "var(--text-muted)" }}
        >
          <motion.span
            className="inline-block"
            animate={{ x: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ←
          </motion.span>
          <span className="group-hover:text-[var(--accent-copper)] transition-colors">{t.backHome}</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 items-start relative z-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest mb-6" style={{ color: "var(--accent-copper)" }}>
              Docenza · Steve Jobs Academy
            </p>
            <h1 className="font-display leading-[0.9] tracking-tight mb-8" style={{ fontSize: "clamp(3rem, 7vw, 6rem)", color: "var(--text-primary)", letterSpacing: "-0.03em", fontFamily: "var(--font-heading)" }}>
              {t.heroTitle}
            </h1>
            <p className="text-lg leading-relaxed max-w-xl" style={{ color: "var(--text-muted)" }}>
              {t.intro}
            </p>
          </div>

          {/* Info box */}
          <div
            className="rounded-2xl p-6 space-y-4"
            style={{ border: "1px solid var(--border-accent)", background: "var(--bg-card)", boxShadow: "var(--shadow-card)" }}
          >
            <p className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--accent-copper)" }}>
              {t.infoTitle}
            </p>
            <ul className="space-y-3">
              {[
                `${t.infoCard.yearLabel}: ${translations.academyStats[lang].stats[1].value}`,
                `${t.infoCard.locationsLabel}: Catania, Caltagirone, Palermo`,
                `${t.infoCard.formatLabel}: ${t.infoCard.formatValue}`,
                t.infoCard.cta,
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                  <span style={{ color: "var(--accent-copper)" }}>·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <StatsGrid />

      {/* Value Proposition */}
      <ValueProposition />

      {/* Photo strip */}
      <div className="relative h-64 overflow-hidden my-24">
        <Image
          src="/academy-class.jpg"
          alt="Classe Steve Jobs Academy"
          fill
          className="object-cover object-center"
          style={{ filter: "grayscale(80%) contrast(1.1)", opacity: 0.6 }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--bg-base) 0%, transparent 30%, transparent 70%, var(--bg-base) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--bg-base) 0%, transparent 20%, transparent 80%, var(--bg-base) 100%)" }} />
      </div>

      {/* Course Grid */}
      <CourseGrid />

      {/* Event Timeline */}
      <EventTimeline />

      {/* CTA finale */}
      <section className="px-6 max-w-[1120px] mx-auto pb-24 text-center">
        <h2 className="font-display mb-8" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text-primary)", letterSpacing: "-0.02em", fontFamily: "var(--font-heading)" }}>
          {lang === "it" ? "Pronto a iniziare?" : "Ready to start?"}
        </h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
          {lang === "it"
            ? "Scrivimi per informazioni sui corsi, disponibilità per talk o workshop."
            : "Contact me for course info, talk or workshop availability."}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <motion.a
            href={`mailto:micheletornello5@gmail.com?subject=${encodeURIComponent(lang === 'it' ? 'Info Academy' : 'Academy Info')}`}
            className="inline-flex items-center justify-center px-8 py-4 font-mono text-sm uppercase tracking-widest transition-colors"
            style={{ background: "var(--accent-copper)", color: "#fff" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {lang === "it" ? "Contattami via email" : "Email me"}
          </motion.a>
          <motion.a
            href="https://wa.me/393341593912"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 font-mono text-sm uppercase tracking-widest transition-colors"
            style={{ border: "1px solid var(--border-accent)", color: "var(--accent-copper)" }}
            whileHover={{ background: "var(--accent-copper)", color: "#fff" }}
            whileTap={{ scale: 0.98 }}
          >
            {lang === "it" ? "Scrivimi su WhatsApp" : "Message on WhatsApp"}
          </motion.a>
        </div>
      </section>
    </main>
  );
}