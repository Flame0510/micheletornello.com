"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ScrambleText } from "../ui/ScrambleText";
import { useLang } from "@/lib/LanguageContext";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const events = [
  { year: "2020", it: "Studente · Steve Jobs Academy, Catania", en: "Student · Steve Jobs Academy, Catania" },
  { year: "2022", it: "Assunto · Paradigma SPA (tempo indeterminato)", en: "Hired · Paradigma SPA (permanent contract)" },
  { year: "2024", it: "Docente · Steve Jobs Academy", en: "Teacher · Steve Jobs Academy" },
  { year: "2024", it: "Speaker · React Native · Università di Catania", en: "Speaker · React Native · University of Catania" },
  { year: "2024", it: "RTL 102.5 · Intervista in diretta nazionale", en: "RTL 102.5 · National live radio interview" },
];

export const Timeline = () => {
  const { lang } = useLang();
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const lineContainerRef = useRef<HTMLDivElement>(null);
  const lineFillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;

    let ctx: { revert: () => void } | undefined;

    const init = async () => {
      const { gsap } = await import("@/lib/gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      if (!sectionRef.current || !lineFillRef.current) return;

      gsap.registerPlugin(ScrollTrigger);
      gsap.set(lineFillRef.current, { scaleY: 0, transformOrigin: "top center" });

      ctx = gsap.context(() => {
        gsap.to(lineFillRef.current, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 40%",
            scrub: 0.8,
          },
        });
      }, sectionRef);
    };

    void init();

    return () => ctx?.revert();
  }, [reduced]);

  return (
    <section ref={sectionRef} id="percorso" className="py-24 px-6 max-w-[1120px] mx-auto">
      <div className="mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-text-muted">03</span>
        <div className="h-px bg-white/5 mt-2 w-full" />
      </div>

      <div className="relative">
        <div
          ref={lineContainerRef}
          className="absolute left-[80px] top-0 bottom-0 w-px"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          <div
            ref={lineFillRef}
            className="absolute inset-0"
            style={{ background: "rgba(201,168,76,0.5)", transformOrigin: "top center" }}
          />
        </div>

        <div className="space-y-0">
          {events.map((e, i) => (
            <motion.div
              key={`${e.year}-${i}`}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex items-start gap-8 py-6 overflow-hidden"
            >
              <div className="w-[80px] shrink-0 text-right relative z-10">
                <ScrambleText
                  text={e.year}
                  duration={400}
                  className="font-mono text-sm"
                  style={{ color: "#C9A84C", fontFeatureSettings: '"liga" 0, "calt" 0' }}
                />
              </div>
              <div
                className="absolute left-[76px] top-[26px] w-2 h-2 rounded-full"
                style={{ background: "#C9A84C", boxShadow: "0 0 8px rgba(201,168,76,0.6)", zIndex: 10 }}
              />
              <div className="pt-0.5 pl-6 flex-1 min-w-0 relative z-10">
                <p className="text-text-main text-base leading-relaxed" style={{ fontFeatureSettings: '"liga" 0, "calt" 0' }}>
                  {lang === "it" ? e.it : e.en}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
