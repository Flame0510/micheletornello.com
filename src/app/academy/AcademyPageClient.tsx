"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import StatsGrid from "@/components/academy/StatsGrid";
import ValueProposition from "@/components/academy/ValueProposition";
import CourseGrid from "@/components/academy/CourseGrid";
import SectionLabel from '@/components/ui/SectionLabel';
import SJAWatermark from '@/components/ui/SJAWatermark';

export default function AcademyPageClient() {
  const { lang } = useLang();
  const t = translations.academyPage[lang];

  const photoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: photoProgress } = useScroll({ target: photoRef, offset: ["start end", "end start"] });
  const imageY = useTransform(photoProgress, [0, 1], [-150, 150]);

  return (
    <main className="min-h-screen" style={{ background: "var(--bg-base)" }}>
      <SJAWatermark />

      {/* Hero con gradiente */}
      <section className="container pt-32 md:pt-40 pb-12 md:pb-16 relative">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 30% 50%, var(--accent-primary-subtle) 0%, transparent 50%)",
          }}
        />
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest transition-colors mb-8 group relative z-10"
          style={{ color: "var(--text-muted)" }}
        >
          <motion.span
            className="inline-block"
            animate={{ x: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ←
          </motion.span>
          <span className="group-hover:text-[var(--accent-primary)] transition-colors">{t.backHome}</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 items-start relative z-10">
          <div>
            <SectionLabel className="mb-6">
              Docenza · Steve Jobs Academy
            </SectionLabel>
            <h1 className="leading-[0.9] tracking-tight mb-8" style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)", color: "var(--text-primary)", letterSpacing: "-0.03em", fontFamily: "var(--font-heading)" }}>
              {lang === 'it' ? (
                <>Steve Jobs Academy –<br /><em style={{ fontStyle: 'italic', color: 'var(--accent-primary)' }}>Dove la teoria incontra il codice.</em></>
              ) : (
                <>Steve Jobs Academy –<br /><em style={{ fontStyle: 'italic', color: 'var(--accent-primary)' }}>Where theory meets code.</em></>
              )}
            </h1>
            <p className="text-lg leading-relaxed max-w-xl" style={{ color: "var(--text-muted)" }}>
              {lang === 'it' ? (
                <>Insegno sviluppo software e architettura dei sistemi alla Steve Jobs Academy. Lezioni in aula, esercitazioni pratiche, progetti reali. Più di <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>150 studenti formati</strong>, <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>3 sedi in Sicilia</strong>, 1 talk universitario e 2 workshop. Trasferisco l'esperienza concreta di chi costruisce software per professione.</>
              ) : (
                <>I teach software development and system architecture at the Steve Jobs Academy. Classroom lectures, hands‑on exercises, real projects. Over <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>150 students trained</strong>, <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>3 locations in Sicily</strong>, 1 university talk and 2 workshops. I transfer the concrete experience of someone who builds software for a living.</>
              )}
            </p>
          </div>

          {/* Info box */}
          <div
            className="rounded-2xl p-6 space-y-4"
            style={{ background: "var(--bg-card)" }}
          >
            <p className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--accent-primary)" }}>
              {t.infoTitle}
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                <span style={{ color: "var(--accent-primary)" }}>·</span>
                {`${t.infoCard.locationsLabel}: Catania, Caltagirone, Palermo`}
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                <span style={{ color: "var(--accent-primary)" }}>·</span>
                {`${t.infoCard.formatLabel}: ${t.infoCard.formatValue}`}
              </li>
              <li className="flex items-start gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                <span style={{ color: "var(--accent-primary)" }}>·</span>
                <span>
                  {lang === 'it' ? 'Vuoi saperne di più? ' : 'Want to know more? '}
                  <a href="/#contatto" style={{ color: "var(--accent-primary)", textDecoration: "underline", fontWeight: 600 }}>
                    {lang === 'it' ? 'Contattami' : 'Contact me'}
                  </a>
                  .
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <StatsGrid />

      {/* Value Proposition */}
      <ValueProposition />

      {/* Photo strip with parallax */}
      <div className="container my-20">
        <div ref={photoRef} className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '3/4', width: '100%' }}>
          <motion.div
            className="absolute inset-x-0"
            style={{ y: imageY, top: '-150px', bottom: '-150px' }}
          >
            <Image
              src="/academy-class.webp"
              alt="Classe Steve Jobs Academy"
              fill
              className="object-cover object-center"
              style={{ filter: 'grayscale(80%) contrast(1.1)', opacity: 0.6 }}
            />
          </motion.div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, var(--bg-base) 0%, transparent 20%, transparent 80%, var(--bg-base) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, var(--bg-base) 0%, transparent 12%, transparent 88%, var(--bg-base) 100%)' }} />
        </div>
      </div>

      {/* Course Grid */}
      <CourseGrid />

      {/* CTA finale */}
      <section className="container py-12 md:py-16 text-center">
        <h2 className="section-title mb-8">
          {lang === "it" ? "Pronto a iniziare?" : "Ready to start?"}
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
          {lang === "it"
            ? "Scrivimi per informazioni sui corsi, disponibilità per talk o workshop."
            : "Contact me for course info, talk or workshop availability."}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? ''}?subject=${encodeURIComponent(lang === 'it' ? 'Info Academy' : 'Academy Info')}`}
            className="btn-primary"
          >
            {lang === "it" ? "Contattami via email" : "Email me"}
          </a>
          <a
            href={process.env.NEXT_PUBLIC_WHATSAPP_URL ?? ''}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            {lang === "it" ? "Scrivimi su WhatsApp" : "Message on WhatsApp"}
          </a>
        </div>
      </section>
    </main>
  );
}