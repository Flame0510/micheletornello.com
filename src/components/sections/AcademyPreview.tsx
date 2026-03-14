"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { fadeUp, stagger } from "../../lib/animations";
import { GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export const AcademyPreview = () => {
  const { lang } = useLang();
  const t = translations.academyPreview[lang];

  return (
    <section id="academy" className="py-24 px-6 max-w-[1120px] mx-auto overflow-hidden relative">
      <SectionTitle prefix="07" title={t.title} subtitle={t.subtitle} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <motion.div
          variants={fadeUp}
          initial="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3">
            <GraduationCap size={28} style={{ color: "#C9A84C" }} />
            <span className="font-mono text-sm uppercase tracking-widest" style={{ color: "#C9A84C" }}>Steve Jobs Academy</span>
          </div>
          <p className="text-xl text-text-muted leading-relaxed">{t.intro}</p>

          <div className="flex gap-3 flex-wrap">
            {["Catania", "Caltagirone", "Palermo"].map((city) => (
              <span key={city} className="font-mono text-xs uppercase tracking-widest border border-white/10 rounded px-3 py-1 text-text-muted">{city}</span>
            ))}
          </div>

          <Link href="/academy" className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest" style={{ color: "#C9A84C" }}>
            {t.cta} <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Right: class photo */}
        <motion.div
          initial="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          className="relative"
        >
          <div className="relative rounded-sm overflow-hidden" style={{ aspectRatio: "3/4", maxHeight: 480 }}>
            <Image
              src="/academy-class.jpg"
              alt="Classe fine corso Steve Jobs Academy"
              fill
              className="object-cover object-top grayscale contrast-110 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(6,6,6,0.7) 0%, transparent 50%)" }} />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-mono text-xs text-white/60 uppercase tracking-widest">Fine corso · Inizio tirocini</p>
            </div>
          </div>
          {/* Decorative border */}
          <div className="absolute -bottom-2 -right-2 w-full h-full border border-white/5 rounded-sm -z-10" />
        </motion.div>
      </div>
    </section>
  );
};
