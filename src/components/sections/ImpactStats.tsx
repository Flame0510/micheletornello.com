"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { useLang } from "@/lib/LanguageContext";

interface Stat {
  value: string;
  numericValue?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
}

const stats: { it: Stat[]; en: Stat[] } = {
  it: [
    { value: "150+", numericValue: 150, suffix: "+", label: "sviluppatori formati", sublabel: "SJA Catania" },
    { value: "3", numericValue: 3, label: "sistemi live in produzione", sublabel: "personali" },
    { value: "3", numericValue: 3, label: "anni enterprise", sublabel: "Paradigma SPA" },
    { value: "5", numericValue: 5, label: "settori industry", sublabel: "2022–2024" },
  ],
  en: [
    { value: "150+", numericValue: 150, suffix: "+", label: "developers trained", sublabel: "SJA Catania" },
    { value: "3", numericValue: 3, label: "live systems in production", sublabel: "personal projects" },
    { value: "3", numericValue: 3, label: "enterprise years", sublabel: "Paradigma SPA" },
    { value: "5", numericValue: 5, label: "industry sectors", sublabel: "2022–2024" },
  ],
};

const CountUp = ({ stat, trigger }: { stat: Stat; trigger: boolean }) => {
  const [current, setCurrent] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!trigger || started.current || !stat.numericValue) return;
    started.current = true;
    const target = stat.numericValue;
    const duration = 1200;
    const start = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
      setCurrent(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
      else setCurrent(target);
    };
    requestAnimationFrame(animate);
  }, [trigger, stat.numericValue]);

  if (!stat.numericValue) return <>{stat.value}</>;
  return <>{stat.prefix}{current}{stat.suffix}</>;
};

export const ImpactStats = () => {
  const { lang } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const data = stats[lang];

  return (
    <section className="py-24 px-6 max-w-[1120px] mx-auto">
      <SectionTitle
        prefix="05"
        title={lang === "it" ? "Numeri, non parole." : "Numbers, not words."}
        subtitle={lang === "it" ? "Impatto misurabile su progetti reali." : "Measurable impact on real projects."}
      />

      <div
        ref={ref}
        className="grid grid-cols-2 lg:grid-cols-4 gap-px mt-16"
        style={{ border: "1px solid rgba(255,255,255,0.06)" }}
      >
        {data.map((stat, i) => (
          <motion.div
            key={i}
            className="p-8 space-y-2"
            style={{
              background: "#060606",
              borderRight: i < data.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div
              className="font-display leading-none"
              style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", color: "#C9A84C", letterSpacing: "-0.03em" }}
            >
              <CountUp stat={stat} trigger={isInView} />
            </div>
            <p className="font-mono text-sm" style={{ color: "#E8E8E8" }}>{stat.label}</p>
            <p className="font-mono text-xs" style={{ color: "#404040" }}>{stat.sublabel}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
