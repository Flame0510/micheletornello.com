"use client";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import Image from "next/image";

export const Hero = () => {
  const { lang } = useLang();

  const content = {
    it: {
      role: "System Architect · Full-Stack Developer · Docente",
      tagline: "Costruisco prodotti.",
      tagline2: "Il codice è solo il mezzo.",
      scroll: "scorri",
    },
    en: {
      role: "System Architect · Full-Stack Developer · Teacher",
      tagline: "I build products.",
      tagline2: "Code is just the medium.",
      scroll: "scroll",
    },
  };

  const t = content[lang];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background: desk photo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/desk-setup.png"
          alt="Michele's workspace"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/60 to-[#060606]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060606]/70 via-transparent to-transparent" style={{ height: '8rem' }} />
      </div>

      <div className="relative max-w-[1120px] mx-auto w-full px-6 md:px-12 pt-24">
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1
            className="font-display text-text-main leading-[0.9] tracking-tight mb-8 select-none"
            style={{ fontSize: "clamp(4rem, 9vw, 8rem)", letterSpacing: "-0.03em" }}
          >
            Michele
            <br />
            <span>Tornello</span>
            <motion.span
              className="inline-block ml-2"
              style={{ color: "#C9A84C", fontFamily: "JetBrains Mono", fontSize: "0.5em" }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            >_</motion.span>
          </h1>
        </motion.div>

        {/* Tagline — in posizione prominente */}
        <motion.div
          className="max-w-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-2xl md:text-3xl text-text-main font-medium leading-snug mb-1">
            {t.tagline}
          </p>
          <p className="text-2xl md:text-3xl text-text-muted font-medium leading-snug">
            {t.tagline2}
          </p>
        </motion.div>

        {/* Role — sotto la tagline, meno prominente */}
        <motion.p
          className="font-mono text-text-muted"
          style={{ fontSize: "0.8125rem", letterSpacing: "0.05em" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {t.role.split(" · ").map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && (
                <span style={{ color: "#5E6AD2", margin: "0 0.5em" }}>·</span>
              )}
            </span>
          ))}
        </motion.p>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{
            opacity: { delay: 1.2, duration: 0.5 },
            y: { delay: 1.2, duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <span className="font-mono-label">{t.scroll}</span>
          <span className="text-text-muted text-xs">↓</span>
        </motion.div>
      </div>
    </section>
  );
};
