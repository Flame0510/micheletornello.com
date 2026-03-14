"use client";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

export const Hero = () => {
  const { lang } = useLang();

  const content = {
    it: {
      role: "System Architect · Full-Stack Developer · Docente",
      tagline: "Costruisco sistemi.",
      tagline2: "Formo chi li costruirà.",
      scroll: "scorri",
    },
    en: {
      role: "System Architect · Full-Stack Developer · Teacher",
      tagline: "I build systems.",
      tagline2: "I train those who will build them.",
      scroll: "scroll",
    },
  };

  const t = content[lang];

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        backgroundImage: "url(/desk-setup.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #060606 0%, rgba(6,6,6,0.5) 50%, rgba(6,6,6,0.3) 100%)", zIndex: 0 }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(6,6,6,0.7) 0%, transparent 20%)", zIndex: 0 }} />

      <div className="relative max-w-[1120px] mx-auto w-full px-6 md:px-12 pt-24" style={{ zIndex: 1 }}>
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
            >
              _
            </motion.span>
          </h1>
        </motion.div>

        <motion.div
          className="max-w-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-2xl md:text-3xl text-text-main font-medium leading-snug mb-1">{t.tagline}</p>
          <p className="text-2xl md:text-3xl text-text-muted font-medium leading-snug">{t.tagline2}</p>
        </motion.div>

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
              {i < arr.length - 1 && <span style={{ color: "#5E6AD2", margin: "0 0.5em" }}>·</span>}
            </span>
          ))}
        </motion.p>

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
