"use client";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

const events = [
  { year: "2020", it: "Studente — Steve Jobs Academy, Catania", en: "Student — Steve Jobs Academy, Catania" },
  { year: "2022", it: "Assunto — Paradigma SPA (tempo indeterminato)", en: "Hired — Paradigma SPA (permanent contract)" },
  { year: "2024", it: "Docente — Steve Jobs Academy", en: "Teacher — Steve Jobs Academy" },
  { year: "2024", it: "Speaker — React Native · Università di Catania", en: "Speaker — React Native · University of Catania" },
  { year: "2024", it: "RTL 102.5 — Intervista in diretta nazionale", en: "RTL 102.5 — National live radio interview" },
];

export const Timeline = () => {
  const { lang } = useLang();
  return (
    <section id="percorso" className="py-24 px-6 max-w-[1120px] mx-auto">
      <div className="mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-text-muted">02</span>
        <div className="h-px bg-white/5 mt-2 w-full" />
      </div>

      <div className="relative">
        <div className="absolute left-[80px] top-0 bottom-0 w-px bg-white/10" />

        <div className="space-y-0">
          {events.map((e, i) => (
            <motion.div key={i} initial={{ opacity: 1 }} className="relative flex items-start gap-8 py-6">
              <div className="w-[80px] shrink-0 text-right">
                <span className="font-mono text-sm" style={{ color: "#C9A84C" }}>
                  {e.year}
                </span>
              </div>

              <div className="absolute left-[76px] top-[26px] w-2 h-2 rounded-full border border-white/20 bg-[#060606]" />

              <div className="pt-0.5 pl-6">
                <p className="text-text-main text-base leading-relaxed">{lang === "it" ? e.it : e.en}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
