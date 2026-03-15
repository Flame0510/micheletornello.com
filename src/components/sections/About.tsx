"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { SectionTitle } from "../ui/SectionTitle";
import { useLang } from "@/lib/LanguageContext";

export const About = () => {
  const { lang } = useLang();
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const content = {
    it: {
      title: "Chi sono",
      openingStatement: "Ho 24 anni e insegno nella stessa aula dove ho imparato.",
      about:
        "Ho iniziato alla Steve Jobs Academy di Catania nel 2020. Due anni dopo ero assunto a tempo indeterminato in Paradigma SPA. Oggi insegno nella stessa Academy dove mi sono formato, tengo seminari all'università, e continuo a costruire prodotti che risolvono problemi reali.\n\nNon ho seguito un percorso lineare.\nHo costruito il mio.",
      rubik: "Problem solver by nature — anche il Rubik's cube sulla scrivania è un work in progress.",
      teaching: "Docente · Steve Jobs Academy · Catania, Caltagirone, Palermo",
    },
    en: {
      title: "About",
      openingStatement: "I'm 24 and I teach in the same classroom where I learned.",
      about:
        "I started at Steve Jobs Academy in Catania in 2020. Two years later I was hired full-time at Paradigma SPA. Today I teach at the same Academy where I trained, give seminars at university, and keep building products that solve real problems.\n\nI didn't follow a linear path.\nI built my own.",
      rubik: "Problem solver by nature — even the Rubik's cube on my desk is a work in progress.",
      teaching: "Teacher · Steve Jobs Academy · Catania, Caltagirone, Palermo",
    },
  };

  const t = content[lang];

  return (
    <section id="chi-sono" className="py-24 px-6 max-w-[1120px] mx-auto">
      <SectionTitle prefix="02" title={t.title} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-16">
        <motion.div
          ref={imageRef}
          className="relative overflow-hidden rounded-sm"
          style={{ aspectRatio: "3/4", maxHeight: 600 }}
        >
          <motion.div className="absolute inset-0" style={{ y: imageY }}>
            <Image
              src="/react-native-seminar.jpg"
              alt="Michele Tornello"
              fill
              className="object-cover object-top grayscale contrast-110 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
          </motion.div>
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(6,6,6,0.4) 0%, transparent 60%)" }}
          />
        </motion.div>

        <div className="space-y-8 lg:pt-8">
          <p
            className="font-display text-text-main leading-tight"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontStyle: "italic" }}
          >
            {t.openingStatement}
          </p>

          <div className="space-y-4 text-text-muted leading-relaxed">
            <p className="text-lg whitespace-pre-line">{t.about}</p>
            <p className="font-mono text-sm leading-relaxed">{t.teaching}</p>
            <p className="font-mono leading-relaxed" style={{ fontSize: "0.75rem", color: "#C9A84C", fontStyle: "italic" }}>
              {t.rubik}
            </p>
          </div>

          <div className="space-y-2" style={{ borderTop: "1px solid #1A1A1A", paddingTop: "1.5rem" }}>
            <p
              className="font-mono text-text-muted"
              style={{ fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
            >
              Stack
            </p>
            <p className="font-mono text-text-main" style={{ fontSize: "0.8125rem" }}>
              Next.js · TypeScript · React · Node.js · PHP/Laravel · PostgreSQL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
