"use client";

import { useRef } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { ScrambleText } from "../ui/ScrambleText";
import { useLang } from "@/lib/LanguageContext";

const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.05 } },
};

const wordVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

type PrincipleBlockProps = {
  number: string;
  title: string;
  desc: string;
  i: number;
};

const PrincipleBlock = ({ number, title, desc, i }: PrincipleBlockProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const numberY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <motion.div
      ref={ref}
      className="relative flex gap-8 items-start overflow-hidden"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={number}
          className="font-display shrink-0 select-none pointer-events-none"
          style={{
            y: numberY,
            fontSize: "clamp(4rem, 12vw, 8rem)",
            color: "#E8E8E8",
            opacity: 0.04,
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            minWidth: "clamp(4rem, 10vw, 6rem)",
          }}
          variants={wordVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          {number.split("").map((char, idx) => (
            <motion.span key={`${number}-${idx}`} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>

      <motion.div
        className="space-y-3 pt-1 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <ScrambleText
          text={title}
          duration={500}
          delay={i * 100}
          className="text-xl md:text-2xl font-semibold text-text-main leading-snug"
        />
        <p className="text-text-muted leading-relaxed text-lg">{desc}</p>
      </motion.div>
    </motion.div>
  );
};

export const HowIThink = () => {
  const { lang } = useLang();

  const content = {
    it: {
      title: "Come penso",
      subtitle: "Opinioni, non best practice.",
      principles: [
        {
          num: "I.",
          title: "Se non ha un perché, non lo costruisco",
          body: "Non mi interessa il progetto tecnicamente figo che non serve a nessuno. Prima viene il problema. Se il problema non è chiaro, il codice può aspettare.",
        },
        {
          num: "II.",
          title: "Spedisci, poi migliora",
          body: "La perfezione in locale non esiste. Preferisco un sistema in produzione con un difetto visibile che un prototipo impeccabile nel mio repository. Il feedback reale batte qualsiasi review interna.",
        },
        {
          num: "III.",
          title: "L'AI amplifica, non sostituisce",
          body: "Uso l'intelligenza artificiale ogni giorno. Ma la uso io — con criterio, con contesto, con una direzione precisa. Un tool senza visione produce solo rumore veloce.",
        },
      ],
    },
    en: {
      title: "How I think",
      subtitle: "Opinions, not best practices.",
      principles: [
        {
          num: "I.",
          title: "No why, no build",
          body: "I'm not interested in the technically cool project that serves nobody. The problem comes first. If the problem isn't clear, the code can wait.",
        },
        {
          num: "II.",
          title: "Ship, then improve",
          body: "Perfection in localhost doesn't exist. I'd rather have a system in production with a visible flaw than a flawless prototype sitting in my repo. Real feedback beats any internal review.",
        },
        {
          num: "III.",
          title: "AI amplifies, it doesn't replace",
          body: "I use artificial intelligence every day. But I'm the one using it — with judgment, context, and a clear direction. A tool without vision just produces noise faster.",
        },
      ],
    },
  };

  const t = content[lang];

  return (
    <section id="principles" className="py-24 px-6 md:px-12 max-w-[1120px] mx-auto">
      <SectionTitle prefix="06" title={t.title} subtitle={t.subtitle} />

      <div className="space-y-12">
        {t.principles.map((p, i) => (
          <PrincipleBlock key={`${p.num}-${i}`} number={p.num} title={p.title} desc={p.body} i={i} />
        ))}
      </div>
    </section>
  );
};
