"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionTitle } from "../ui/SectionTitle";
import { useLang } from "@/lib/LanguageContext";

export const About = () => {
  const { lang } = useLang();

  const content = {
    it: {
      title: "Chi sono",
      about:
        "Ho iniziato alla Steve Jobs Academy di Catania nel 2020. Due anni dopo ero assunto a tempo indeterminato in Paradigma SPA. Oggi insegno nella stessa Academy dove mi sono formato, tengo seminari all'università, e continuo a costruire prodotti che risolvono problemi reali.\n\nNon ho seguito un percorso lineare.\nHo costruito il mio.",
      rubik: "Problem solver by nature — anche il Rubik's cube sulla scrivania è un work in progress.",
      teaching: "Docente · Steve Jobs Academy · Catania, Caltagirone, Palermo",
    },
    en: {
      title: "About",
      about:
        "I started at Steve Jobs Academy in Catania in 2020. Two years later I was hired full-time at Paradigma SPA. Today I teach at the same Academy where I trained, give seminars at university, and keep building products that solve real problems.\n\nI didn't follow a linear path.\nI built my own.",
      rubik: "Problem solver by nature — even the Rubik's cube on my desk is a work in progress.",
      teaching: "Teacher · Steve Jobs Academy · Catania, Caltagirone, Palermo",
    },
  };

  const t = content[lang];

  return (
    <section id="about" className="py-24 px-6 md:px-12">
      <div className="max-w-[1120px] mx-auto">
        <SectionTitle prefix="01" title={t.title} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-text-muted leading-relaxed text-lg whitespace-pre-line">{t.about}</p>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-start gap-6">
              <div className="relative shrink-0" style={{ width: 160, height: 213 }}>
                <Image
                  src="/profile-photo.png"
                  alt="Michele Tornello"
                  fill
                  className="object-cover rounded-sm grayscale contrast-125 opacity-85 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                />
              </div>
              <div className="space-y-3 pt-1">
                <p className="font-mono text-text-muted text-sm leading-relaxed" style={{ fontSize: "0.8125rem" }}>
                  {t.teaching}
                </p>
                <p className="font-mono leading-relaxed" style={{ fontSize: "0.75rem", color: "#C9A84C", fontStyle: "italic" }}>
                  {t.rubik}
                </p>
              </div>
            </div>

            <div className="space-y-2" style={{ borderTop: "1px solid #1A1A1A", paddingTop: "1.5rem" }}>
              <p className="font-mono text-text-muted" style={{ fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Stack
              </p>
              <p className="font-mono text-text-main" style={{ fontSize: "0.8125rem" }}>
                Next.js · TypeScript · React · Node.js · PHP/Laravel · PostgreSQL
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
