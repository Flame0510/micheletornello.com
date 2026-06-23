"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideProps } from "lucide-react";
import { ExternalLink, Code, Server, Cpu, Cloud, GitBranch, Atom, Smartphone, Component, Network, Kanban, Brain } from "lucide-react";
import { academy } from "@/lib/data";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import type { FC } from "react";

const iconMap: Record<string, FC<LucideProps>> = {
  Angular: Component,
  React: Atom,
  "React Native": Smartphone,
  PHP: Server,
  "Sistemi Operativi": Cpu,
  "Cloud Computing": Cloud,
  "Programmazione 1": Code,
  "Design Pattern": Network,
  "Git & Versioning": GitBranch,
  "Metodologie Agile": Kanban,
  "Fondamenti di AI": Brain,
};

export default function CourseGrid() {
  const { lang } = useLang();
  const t = translations.academyPage[lang];
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="container py-16 md:py-20">
      <h2 className="section-title mb-16">
        {lang === "it" ? "Materie" : "Subjects"}
      </h2>

      <div className="flex flex-col gap-20">
        {academy.subjectGroups.map((group) => (
          <div key={group.label}>
            <div className="flex items-center gap-4 mb-10">
              <span
                className="font-mono text-xs uppercase tracking-widest"
                style={{ color: "var(--accent-primary)" }}
              >
                {group.label}
              </span>
              <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.subjects.map((subject, i) => {
                const Icon = iconMap[subject.name];
                return (
                  <motion.div
                    key={subject.name}
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: shouldReduceMotion ? 0.1 : 0.5, delay: shouldReduceMotion ? 0 : i * 0.1 }}
                    className="relative overflow-hidden rounded-lg card-hoverable"
                    style={{ background: "var(--bg-card)" }}
                  >
                    <div className="p-8 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <span className="font-mono text-xs" style={{ color: "var(--accent-primary)" }}>
                            0{i + 1}
                          </span>
                          <h3 className="font-display text-2xl mt-2" style={{ color: "var(--text-primary)" }}>
                            {subject.name}
                          </h3>
                        </div>
                        {Icon && <Icon size={32} style={{ color: "var(--accent-primary)", opacity: 0.7 }} />}
                      </div>

                      <p className="text-sm leading-relaxed mb-8 flex-1" style={{ color: "var(--text-muted)" }}>
                        {subject.description}
                      </p>

                      <footer className="shw_card_footer" style={{ padding: 0, paddingTop: "1.5rem", marginTop: 0 }}>
                        {!subject.slidesUrl && !subject.showcaseUrl && (
                          <span className="font-mono text-xs" style={{ color: "var(--text-muted)", opacity: 0.5 }}>
                            {t.comingSoon}
                          </span>
                        )}
                        {subject.slidesUrl && (
                          <a
                            href={subject.slidesUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shw_btn shw_btn_ghost"
                          >
                            Slides <ExternalLink size={10} />
                          </a>
                        )}
                        {subject.showcaseUrl && (
                          <a
                            href={subject.showcaseUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shw_btn shw_btn_accent"
                          >
                            Showcase <ExternalLink size={10} />
                          </a>
                        )}
                      </footer>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
