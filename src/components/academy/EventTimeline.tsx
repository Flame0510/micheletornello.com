"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const events = {
  it: [
    {
      date: "Maggio 2026",
      title: "Workshop React Native",
      location: "Università di Catania",
      description: "Costruire app cross‑platform con React Native e Expo.",
      link: "#",
    },
    {
      date: "Giugno 2026",
      title: "Panel speaker – Future of Web",
      location: "Google Developer Group Catania",
      description: "Discussione sulle tendenze del development moderno.",
      link: "#",
    },
    {
      date: "Settembre 2026",
      title: "Talk – Architetture Microservizi",
      location: "Steve Jobs Academy, Palermo",
      description: "Come progettare sistemi scalabili per startup.",
      link: "#",
    },
  ],
  en: [
    {
      date: "May 2026",
      title: "React Native Workshop",
      location: "University of Catania",
      description: "Building cross‑platform apps with React Native and Expo.",
      link: "#",
    },
    {
      date: "June 2026",
      title: "Speaker Panel – Future of Web",
      location: "Google Developer Group Catania",
      description: "Discussion on modern development trends.",
      link: "#",
    },
    {
      date: "September 2026",
      title: "Talk – Microservices Architecture",
      location: "Steve Jobs Academy, Palermo",
      description: "How to design scalable systems for startups.",
      link: "#",
    },
  ],
};

export default function EventTimeline() {
  const { lang } = useLang();
  const items = events[lang];
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="px-6 max-w-[1120px] mx-auto py-24">
      <p className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: "var(--accent-copper)" }}>
        05
      </p>
      <h2 className="font-display mb-16" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
        {lang === "it" ? "Prossimi eventi" : "Upcoming Events"}
      </h2>
      <div className="relative">
        {/* Linea verticale */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5" style={{ background: "rgba(184,115,51,0.3)" }} />
        {items.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.5, delay: shouldReduceMotion ? 0 : i * 0.2 }}
            className="relative pl-24 pb-16 last:pb-0"
          >
            {/* Punto sulla timeline */}
            <div
              className="absolute left-4 top-2 w-8 h-8 rounded-full border-2 flex items-center justify-center"
              style={{ borderColor: "var(--accent-copper)", background: "var(--bg-base)" }}
            >
              <div className="w-2 h-2 rounded-full" style={{ background: "var(--accent-copper)" }} />
            </div>
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Calendar size={16} style={{ color: "var(--accent-copper)" }} />
                  <span className="font-mono text-sm uppercase tracking-widest" style={{ color: "var(--accent-copper)" }}>
                    {event.date}
                  </span>
                </div>
                <h3 className="font-display text-2xl mb-2" style={{ color: "var(--text-primary)" }}>
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin size={14} style={{ color: "var(--text-muted)" }} />
                  <span className="font-mono text-sm" style={{ color: "var(--text-muted)" }}>
                    {event.location}
                  </span>
                </div>
                <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "var(--text-muted)" }}>
                  {event.description}
                </p>
              </div>
              <motion.a
                href={event.link}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-4 py-2 self-start"
                style={{ color: "var(--accent-copper)", border: "1px solid var(--accent-copper)" }}
                whileHover={{ background: "var(--accent-copper)", color: "var(--bg-base)" }}
              >
                <span>{lang === "it" ? "Scopri di più" : "Learn more"}</span>
                <ExternalLink size={12} />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}