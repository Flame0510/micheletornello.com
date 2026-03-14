"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { useLang } from "@/lib/LanguageContext";

export const WhatIBuild = () => {
  const { lang } = useLang();

  const content = {
    it: {
      title: "Cosa costruisco",
      subtitle: "Non vendo servizi. Risolvo problemi con output concreti.",
      items: [
        {
          num: "01",
          title: "Architetture che funzionano",
          description:
            "Piattaforme, prodotti digitali, web app — progettati per risolvere un problema specifico, non per riempire un portfolio. Stack moderno, architettura pensata per scalare, deploy su infrastruttura reale.",
          tags: ["Next.js", "TypeScript", "PostgreSQL", "Vercel"],
        },
        {
          num: "02",
          title: "Insegnare costruendo",
          description:
            "Docente alla Steve Jobs Academy su tre sedi in Sicilia. Non faccio lezioni teoriche — insegno a costruire, perché l'unico modo per imparare il software è spedire qualcosa di vero.",
          tags: ["Web Dev", "Product Thinking", "AI Tools"],
        },
        {
          num: "03",
          title: "Sistemi che moltiplicano",
          description:
            "Automazioni, integrazioni AI, processi digitali che eliminano il lavoro stupido. L'obiettivo non è aggiungere tecnologia — è togliere attrito.",
          tags: ["API Integration", "Automazioni", "LLM"],
        },
      ],
    },
    en: {
      title: "What I build",
      subtitle: "I don't sell services. I solve problems with concrete outputs.",
      items: [
        {
          num: "01",
          title: "Architectures that work",
          description:
            "Platforms, digital products, web apps — designed to solve a specific problem, not to fill a portfolio. Modern stack, architecture built to scale, deployed on real infrastructure.",
          tags: ["Next.js", "TypeScript", "PostgreSQL", "Vercel"],
        },
        {
          num: "02",
          title: "Teaching by building",
          description:
            "Instructor at Steve Jobs Academy across three campuses in Sicily. I don't give theory lectures — I teach people to build, because the only way to learn software is to ship something real.",
          tags: ["Web Dev", "Product Thinking", "AI Tools"],
        },
        {
          num: "03",
          title: "Systems that multiply",
          description:
            "Automations, AI integrations, digital processes that kill busywork. The goal isn't adding technology — it's removing friction.",
          tags: ["API Integration", "Automations", "LLM"],
        },
      ],
    },
  };

  const t = content[lang];

  return (
    <section id="services" className="py-24 px-6 md:px-12 max-w-[1120px] mx-auto">
      <SectionTitle prefix="03" title={t.title} subtitle={t.subtitle} />

      <div className="space-y-px" style={{ border: "1px solid #1A1A1A", borderRadius: "12px", overflow: "hidden" }}>
        {t.items.map((item, i) => (
          <motion.div
            key={i}
            className="group relative p-8 flex flex-col md:flex-row gap-6"
            style={{
              background: "#0A0A0A",
              borderBottom: i < t.items.length - 1 ? "1px solid #1A1A1A" : "none",
            }}
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ backgroundColor: "#111111" }}
          >
            <span
              className="font-mono shrink-0"
              style={{ fontSize: "3rem", fontWeight: 300, color: "#1A1A1A", lineHeight: 1, transition: "color 300ms" }}
            >
              {item.num}
            </span>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-text-main">{item.title}</h3>
              <p className="text-text-muted leading-relaxed">{item.description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2 py-1 rounded"
                    style={{ background: "#111111", color: "#707070", border: "1px solid #1A1A1A", fontSize: "0.75rem" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
