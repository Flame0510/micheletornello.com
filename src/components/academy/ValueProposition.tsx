"use client";

import { motion } from "framer-motion";
import { Code, Users, Briefcase, Globe } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const propositions = {
  it: [
    {
      icon: Code,
      title: "Docente nel settore",
      description: "Insegno tecnologie che uso ogni giorno in progetti reali. Niente teoria slegata dalla pratica.",
    },
    {
      icon: Users,
      title: "Network di ex-allievi",
      description: "Entri in una community di sviluppatori che già lavorano in aziende locali e internazionali.",
    },
    {
      icon: Briefcase,
      title: "Progetti reali",
      description: "Ogni corso include un progetto concreto, dal concept al deploy, da aggiungere al tuo portfolio.",
    },
    {
      icon: Globe,
      title: "Sicilia e oltre",
      description: "Lezioni in presenza a Catania, Caltagirone e Palermo. Talk in tutta Italia.",
    },
  ],
  en: [
    {
      icon: Code,
      title: "Industry Practitioner",
      description: "I teach technologies I use every day on real projects. No theory disconnected from practice.",
    },
    {
      icon: Users,
      title: "Alumni Network",
      description: "You join a community of developers already working in local and international companies.",
    },
    {
      icon: Briefcase,
      title: "Real Projects",
      description: "Each course includes a concrete project, from concept to deploy, to add to your portfolio.",
    },
    {
      icon: Globe,
      title: "Sicily & Beyond",
      description: "In‑person classes in Catania, Caltagirone and Palermo. Talks across Italy.",
    },
  ],
};

export default function ValueProposition() {
  const { lang } = useLang();
  const items = propositions[lang];

  return (
    <section className="px-6 max-w-[1120px] mx-auto py-24">
      <p className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: "#B87333" }}>
        03
      </p>
      <h2 className="font-display mb-12" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#E8E8E8", letterSpacing: "-0.02em" }}>
        {lang === "it" ? "Perché scegliere questa Academy" : "Why Choose This Academy"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative p-8 rounded-lg"
            style={{
              background: "linear-gradient(145deg, rgba(184,115,51,0.03) 0%, rgba(184,115,51,0) 100%)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
          >
            <div className="mb-6">
              <item.icon size={32} style={{ color: "#B87333" }} />
            </div>
            <h3 className="font-display text-xl mb-4" style={{ color: "#E8E8E8" }}>
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#707070" }}>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}