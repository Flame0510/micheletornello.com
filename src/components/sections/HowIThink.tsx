"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { useLang } from "@/lib/LanguageContext";

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
          <motion.div
            key={i}
            className="flex gap-8 items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="font-display shrink-0 select-none"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#1A1A1A",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                minWidth: "3rem",
              }}
            >
              {p.num}
            </span>
            <div className="space-y-3 pt-1">
              <h3 className="text-xl md:text-2xl font-semibold text-text-main leading-snug">{p.title}</h3>
              <p className="text-text-muted leading-relaxed text-lg">{p.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
