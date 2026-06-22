"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Code, Users, Briefcase, Globe } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

type Proposition = { icon: React.ElementType; title: string; description: ReactNode };

const propositions: Record<'it' | 'en', Proposition[]> = {
  it: [
    {
      icon: Code,
      title: "Docente nel settore",
      description: <>Insegno tecnologie che uso ogni giorno in <strong>progetti reali</strong>. Niente teoria slegata dalla pratica.</>,
    },
    {
      icon: Users,
      title: "Network di ex-allievi",
      description: <>Entri in una <strong>community di sviluppatori</strong> già attivi in aziende locali e internazionali.</>,
    },
    {
      icon: Briefcase,
      title: "Progetti reali",
      description: <>Ogni corso include un <strong>progetto concreto</strong> — dal concept al deploy — da aggiungere al tuo portfolio.</>,
    },
    {
      icon: Globe,
      title: "Sicilia e oltre",
      description: <>Lezioni in presenza a <strong>Catania, Caltagirone e Palermo</strong>. Talk in tutta Italia.</>,
    },
  ],
  en: [
    {
      icon: Code,
      title: "Industry Practitioner",
      description: <>I teach technologies I use every day on <strong>real projects</strong>. No theory disconnected from practice.</>,
    },
    {
      icon: Users,
      title: "Alumni Network",
      description: <>You join a <strong>community of developers</strong> already working in local and international companies.</>,
    },
    {
      icon: Briefcase,
      title: "Real Projects",
      description: <>Every course includes a <strong>concrete project</strong> — from concept to deploy — to add to your portfolio.</>,
    },
    {
      icon: Globe,
      title: "Sicily & Beyond",
      description: <>In‑person classes in <strong>Catania, Caltagirone and Palermo</strong>. Talks across Italy.</>,
    },
  ],
};

export default function ValueProposition() {
  const { lang } = useLang();
  const items = propositions[lang];
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="container py-16 md:py-20">
      <p className="section-label mb-3">
        03
      </p>
      <h2 className="section-title mb-12">
        {lang === "it" ? "Perché scegliere questa Academy" : "Why Choose This Academy"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.5, delay: shouldReduceMotion ? 0 : i * 0.1 }}
            className="relative p-8 rounded-lg"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
            whileHover={{ borderColor: "var(--accent-primary)", transition: { duration: 0.2 } }}
          >
            <div className="mb-6">
              <item.icon size={32} style={{ color: "var(--accent-primary)" }} />
            </div>
            <h3 className="font-display text-xl mb-4" style={{ color: "var(--text-primary)" }}>
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}