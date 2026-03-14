"use client";

import { motion } from "framer-motion";
import { FloatingNav } from "@/components/sections/FloatingNav";
import { Footer } from "@/components/sections/Footer";
import { fadeUp } from "@/lib/animations";
import { academy } from "@/lib/data";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import Image from "next/image";

export default function AcademyPage() {
  const { lang } = useLang();
  const t = translations.academyPage[lang];

  return (
    <main className="min-h-screen" style={{ background: "#060606" }}>
      <FloatingNav />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 max-w-[1120px] mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest transition-colors mb-16 group"
          style={{ color: "#707070" }}
        >
          <motion.span
            className="inline-block"
            animate={{ x: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ←
          </motion.span>
          <span className="group-hover:text-white transition-colors">{t.backHome}</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest mb-6" style={{ color: "#C9A84C" }}>
              Docenza · Steve Jobs Academy
            </p>
            <h1 className="font-display leading-[0.9] tracking-tight mb-8" style={{ fontSize: "clamp(3rem, 7vw, 6rem)", color: "#E8E8E8", letterSpacing: "-0.03em" }}>
              Steve Jobs<br />
              <span style={{ color: "#C9A84C" }}>Academy</span>
            </h1>
            <p className="text-lg leading-relaxed max-w-xl" style={{ color: "#707070" }}>
              {t.intro}
            </p>
          </div>

          {/* Info box */}
          <div
            className="rounded-sm p-6 space-y-4"
            style={{ border: "1px solid rgba(201,168,76,0.15)", background: "rgba(201,168,76,0.03)" }}
          >
            <p className="font-mono text-xs uppercase tracking-widest" style={{ color: "#C9A84C" }}>
              {t.infoTitle}
            </p>
            <ul className="space-y-3">
              {[
                `${t.infoCard.yearLabel}: ${academy.year}`,
                `${t.infoCard.locationsLabel}: ${academy.locations.join(" · ")}`,
                `${t.infoCard.formatLabel}: ${t.infoCard.formatValue}`,
                t.infoCard.cta,
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#707070" }}>
                  <span style={{ color: "#C9A84C" }}>·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <div className="relative h-64 overflow-hidden mb-24">
        <Image
          src="/academy-class.jpg"
          alt="Classe Steve Jobs Academy"
          fill
          className="object-cover object-center"
          style={{ filter: "grayscale(80%) contrast(1.1)", opacity: 0.6 }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #060606 0%, transparent 30%, transparent 70%, #060606 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #060606 0%, transparent 20%, transparent 80%, #060606 100%)" }} />
      </div>

      {/* Corsi */}
      <section className="px-6 max-w-[1120px] mx-auto pb-24">
        <p className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: "#C9A84C" }}>03</p>
        <h2 className="font-display mb-16" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#E8E8E8", letterSpacing: "-0.02em" }}>
          {lang === "it" ? "Materie" : "Subjects"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
          {academy.subjects.map((subject, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="visible"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 space-y-4"
              style={{ background: "#060606" }}
            >
              <span className="font-mono text-xs" style={{ color: "#C9A84C" }}>0{i + 1}</span>
              <h3 className="font-display text-2xl" style={{ color: "#E8E8E8" }}>{subject.name}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>{subject.description}</p>

              <div className="pt-6 space-y-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-mono text-xs" style={{ color: "#707070" }}>
                    {t.resourcesLabel} <ExternalLink size={10} />
                  </span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded" style={{ color: "#404040", border: "1px solid rgba(255,255,255,0.06)" }}>
                    {t.comingSoon}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-mono text-xs" style={{ color: "#707070" }}>
                    {t.repositoryLabel} <ExternalLink size={10} />
                  </span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded" style={{ color: "#404040", border: "1px solid rgba(255,255,255,0.06)" }}>
                    {t.comingSoon}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
