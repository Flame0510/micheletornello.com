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
      manifesto: "Costruisco sistemi, non pagine.",
      about: "Sono partito da un'idea semplice: la tecnologia serve solo se risolve problemi veri. Mi sono laureato in Ingegneria Informatica, ho iniziato come freelance nel 2019, e in poco tempo ho capito che non mi bastava scrivere codice per altri — volevo costruire cose mie. Ho creato piattaforme per la gestione di turni nella sicurezza privata, sistemi di prenotazione per strutture ricettive, un social network per giocatori da tavolo. Dal 2022 insegno alla Steve Jobs Academy in tre sedi siciliane, perché trasferire quello che sai è il modo più onesto di verificare se lo sai davvero. Oggi lavoro all'intersezione tra ingegneria, prodotto e AI — e ogni progetto che accetto deve avere una ragione di esistere più forte di 'ci serve un sito'.",
      rubik: "Problem solver by nature — anche il Rubik's cube sulla scrivania è un work in progress.",
      teaching: "Docente · Steve Jobs Academy · Catania, Caltagirone, Palermo",
    },
    en: {
      title: "About",
      manifesto: "I build systems, not pages.",
      about: "I started from a simple idea: technology only matters if it solves real problems. I got my degree in Computer Engineering, went freelance in 2019, and quickly realized writing code for others wasn't enough — I wanted to build my own things. I've created platforms for shift management in private security, direct booking systems for vacation rentals, a social network for board gamers. Since 2022 I teach at Steve Jobs Academy across three campuses in Sicily, because passing on what you know is the most honest way to test if you really know it. Today I work at the intersection of engineering, product, and AI — and every project I take on needs a reason to exist stronger than 'we need a website'.",
      rubik: "Problem solver by nature — even the Rubik's cube on my desk is a work in progress.",
      teaching: "Teacher · Steve Jobs Academy · Catania, Caltagirone, Palermo",
    }
  };

  const t = content[lang];

  return (
    <section id="about" className="py-24 px-6 md:px-12">
      <div className="max-w-[1120px] mx-auto">
        <SectionTitle prefix="02" title={t.title} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-display text-text-main text-2xl md:text-3xl leading-tight" style={{ letterSpacing: "-0.02em" }}>
              {t.manifesto}
            </p>
            <p className="text-text-muted leading-relaxed text-lg">
              {t.about}
            </p>
          </motion.div>

          {/* Right: photo + details */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Photo */}
            <div className="flex items-start gap-6">
              <div className="relative shrink-0" style={{ width: 96, height: 128 }}>
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

            {/* Stack minimale */}
            <div className="space-y-2" style={{ borderTop: "1px solid #1A1A1A", paddingTop: "1.5rem" }}>
              <p className="font-mono text-text-muted" style={{ fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>Stack</p>
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
