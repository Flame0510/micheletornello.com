"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const events = [
  { year: "2020", it: "Studente — Steve Jobs Academy, Catania", en: "Student — Steve Jobs Academy, Catania" },
  { year: "2022", it: "Assunto — Paradigma SPA (tempo indeterminato)", en: "Hired — Paradigma SPA (permanent contract)" },
  { year: "2024", it: "Docente — Steve Jobs Academy", en: "Teacher — Steve Jobs Academy" },
  { year: "2024", it: "Speaker — React Native · Università di Catania", en: "Speaker — React Native · University of Catania" },
  { year: "2024", it: "RTL 102.5 — Intervista in diretta nazionale", en: "RTL 102.5 — National live radio interview" },
];

export const Timeline = () => {
  const { lang } = useLang();
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    if (reduced) return;

    let ctx: { revert: () => void } | undefined;

    const init = async () => {
      const { gsap } = await import("@/lib/gsap");
      await import("gsap/ScrollTrigger");

      if (!sectionRef.current || !lineRef.current) return;

      const line = lineRef.current;
      const totalLength = line.getTotalLength();

      gsap.set(line, {
        strokeDasharray: totalLength,
        strokeDashoffset: totalLength,
      });

      ctx = gsap.context(() => {
        gsap.to(line, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
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
        <svg className="absolute left-[80px] top-0 bottom-0" width="2" style={{ height: "100%" }} overflow="visible">
          <line
            ref={lineRef}
            x1="1"
            y1="0"
            x2="1"
            y2="100%"
            stroke="rgba(201,168,76,0.4)"
            strokeWidth="1"
          />
        </svg>

        <div className="space-y-0">
          {events.map((e, i) => (
            <motion.div
              key={`${e.year}-${i}`}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex items-start gap-8 py-6"
            >
              <div className="w-[80px] shrink-0 text-right">
                <span className="font-mono text-sm" style={{ color: "#C9A84C" }}>
                  {e.year}
                </span>
              </div>
              <div
                className="absolute left-[76px] top-[26px] w-2 h-2 rounded-full"
                style={{ background: "#C9A84C", boxShadow: "0 0 8px rgba(201,168,76,0.6)" }}
              />
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
