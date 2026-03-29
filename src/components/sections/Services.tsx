"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { fadeUp, stagger } from "../../lib/animations";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

/* ── Services section ── */
export const Services = () => {
  const { lang } = useLang();
  const t = translations.services[lang];
  const items = t.items;

  const serviceKeys = ["SERVICE_01", "SERVICE_02", "SERVICE_03"];

  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <SectionTitle prefix="// 02" title={t.title} subtitle={t.subtitle} />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
      >
        {items.map((service, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="pGamma_card rounded-xl h-full flex flex-col relative overflow-hidden"
          >

            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Header secondario — > SERVICE_0X */}
            <span
              className="block font-mono uppercase mb-1"
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.15em",
                color: "var(--color-brand)",
                opacity: 0.35,
              }}
            >
              &gt; {serviceKeys[i]}
            </span>

            {/* Label // 01 */}
            <span
              className="block font-mono mb-3"
              style={{
                fontSize: "0.72rem",
                color: "var(--color-brand)",
                opacity: 0.6,
                letterSpacing: "0.04em",
              }}
            >
              // 0{i + 1}
            </span>

            {/* Titolo */}
            <h3
              className="mb-2 font-display font-normal leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.4rem, 2.2vw, 1.75rem)",
                color: "#ffffff",
                lineHeight: 1.15,
              }}
            >
              {service.title}
            </h3>

            {/* Problem — italic dim */}
            {"problem" in service && (
              <p
                className="italic mb-4 leading-snug"
                style={{
                  fontSize: "0.82rem",
                  color: "var(--color-text-55)",
                }}
              >
                {(service as { problem: string }).problem}
              </p>
            )}

            {/* Divider rame tenue */}
            <div
              className="mb-4"
              style={{
                height: "1px",
                backgroundColor: "rgba(184,115,51,0.1)",
                width: "100%",
              }}
            />

            {/* Descrizione */}
            <p
              className="mb-5 leading-relaxed"
              style={{
                fontSize: "0.87rem",
                color: "var(--color-text-70)",
              }}
            >
              {service.description}
            </p>

            {/* Deliverables */}
            {"deliverables" in service && (
              <div className="mb-5">
                <ul className="space-y-1.5">
                  {(service as { deliverables: string[] }).deliverables.map(
                    (d, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2"
                        style={{ fontSize: "0.82rem", color: "var(--color-text-70)" }}
                      >
                        <span
                          className="shrink-0 mt-0.5"
                          style={{
                            color: "var(--color-brand)",
                            fontSize: "0.6rem",
                            lineHeight: "1.6",
                          }}
                        >
                          ◆
                        </span>
                        <span>{d}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}

            {/* Processo */}
            {"process" in service && (
              <div className="mb-6 mt-auto">
                <div
                  className="flex flex-wrap items-center gap-1 font-mono"
                  style={{ fontSize: "0.68rem", color: "var(--color-text-40)" }}
                >
                  {(service as { process: string[] }).process.map(
                    (step, j, arr) => (
                      <span key={j} className="flex items-center gap-1">
                        <span
                          style={{
                            border: "1px solid rgba(184,115,51,0.2)",
                            padding: "0.15rem 0.5rem",
                            borderRadius: "2px",
                            color: "var(--color-text-55)",
                          }}
                        >
                          {step}
                        </span>
                        {j < arr.length - 1 && (
                          <span style={{ color: "rgba(184,115,51,0.35)" }}>→</span>
                        )}
                      </span>
                    )
                  )}
                </div>
              </div>
            )}

            {/* CTA */}
            {"cta" in service && (
              <div
                className="pt-4"
                style={{ borderTop: "1px solid rgba(184,115,51,0.1)", marginTop: "auto" }}
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 font-semibold transition-all group/cta hover:underline"
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--color-brand)",
                    textDecorationColor: "var(--color-brand)",
                  }}
                >
                  {(service as { cta: string }).cta}
                  <span
                    className="transition-transform group-hover/cta:translate-x-0.5"
                    style={{ fontSize: "0.9rem" }}
                  >
                    →
                  </span>
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
