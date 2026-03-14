"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { MagneticButton } from "../ui/MagneticButton";
import { useLang } from "@/lib/LanguageContext";

export const Press = () => {
  const { lang } = useLang();

  return (
    <section id="press" className="py-24 px-6 max-w-[1120px] mx-auto">
      <SectionTitle
        prefix="01"
        title={lang === "it" ? "Nel mondo" : "Out there"}
        subtitle={lang === "it" ? "Media, eventi, università." : "Media, events, university."}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-12">
        <motion.a
          href="https://play.rtl.it/ospiti/1/michele-tornello-il-post-in-fabbrica-mercoledi-27-marzo-2024/"
          target="_blank"
          rel="noopener noreferrer"
          className="lg:col-span-2 group block p-8 border border-white/8 rounded-sm hover:border-white/15 transition-colors"
          style={{ background: "#0a0a0a" }}
          initial={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
          whileInView={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0 * 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "#C9A84C" }}>
              RTL 102.5
            </span>
            <span className="font-mono text-xs text-text-muted">· Non Stop News · Marzo 2024</span>
          </div>
          <blockquote
            className="font-display text-text-main leading-snug mb-8"
            style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", fontStyle: "italic" }}
          >
            "Michele Tornello, 22 anni, assunto a tempo indeterminato, insegna nello stesso ITS in cui si è diplomato."
          </blockquote>
          <MagneticButton strength={0.22}>
            <div className="flex items-center gap-2 font-mono text-sm text-text-muted group-hover:text-text-main transition-colors">
              <span>{lang === "it" ? "Ascolta l'intervista" : "Listen to the interview"}</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </MagneticButton>
        </motion.a>

        <motion.div
          className="relative overflow-hidden rounded-sm border border-white/8"
          style={{ minHeight: 280 }}
          initial={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
          whileInView={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 1 * 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/react-native-seminar.jpg"
            alt="Seminario React Native - Università di Catania"
            fill
            className="object-cover grayscale contrast-110 opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(6,6,6,0.9) 0%, transparent 60%)" }} />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="font-mono text-xs uppercase tracking-widest text-white/70">React Native · Università di Catania</p>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-3 relative overflow-hidden rounded-sm border border-white/8"
          style={{ height: 400 }}
          initial={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
          whileInView={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 2 * 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/tedx-catania.jpg"
            alt="TEDx Catania"
            fill
            className="object-cover object-center grayscale contrast-110 opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(6,6,6,0.8) 0%, transparent 60%)" }} />
          <div className="absolute left-6 top-1/2 -translate-y-1/2">
            <p className="font-display text-white/90" style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)", fontStyle: "italic" }}>
              TEDx Catania
            </p>
            <p className="font-mono text-xs uppercase tracking-widest text-white/50 mt-2">Staff Volontario · 2024</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
