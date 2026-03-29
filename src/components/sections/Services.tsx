"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { Card } from "../ui/Card";
import { fadeUp, stagger } from "../../lib/animations";
import { Network, Code2, GraduationCap, CheckCircle2, ChevronRight, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const icons = [
  <Network size={24} className="text-accent" key="network" />,
  <Code2 size={24} className="text-accent" key="code" />,
  <GraduationCap size={24} className="text-accent" key="grad" />,
];

export const Services = () => {
  const { lang } = useLang();
  const t = translations.services[lang];
  const items = t.items;

  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <SectionTitle prefix="// 02" title={t.title} subtitle={t.subtitle} />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {items.map((service, i) => (
          <motion.div key={i} variants={fadeUp} className="h-full">
            <Card className="h-full flex flex-col border-b-2 hover:border-accent transition-colors group">
              {/* Header */}
              <span className="text-xs font-mono text-accent/40 mb-2 block">0{i + 1} / {service.title.toUpperCase()}</span>
              <div className="mb-4 p-3 w-fit bg-accent/10 rounded-lg group-hover:scale-110 transition-transform">
                {icons[i]}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>

              {/* Problem statement */}
              {"problem" in service && (
                <p className="text-sm text-accent/70 font-medium mb-3 italic leading-snug">{(service as { problem: string }).problem}</p>
              )}

              {/* Description */}
              <p className="text-text-muted leading-relaxed text-sm mb-5">{service.description}</p>

              {/* Deliverables */}
              {"deliverables" in service && (
                <div className="mb-4">
                  <p className="text-xs font-mono text-accent/50 uppercase tracking-widest mb-2">Deliverable</p>
                  <ul className="space-y-1.5">
                    {(service as { deliverables: string[] }).deliverables.map((d, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-text-muted">
                        <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Process */}
              {"process" in service && (
                <div className="mb-6">
                  <p className="text-xs font-mono text-accent/50 uppercase tracking-widest mb-2">Processo</p>
                  <div className="flex flex-wrap items-center gap-1 text-xs text-text-muted">
                    {(service as { process: string[] }).process.map((step, j) => (
                      <span key={j} className="flex items-center gap-1">
                        <span className="bg-accent/10 text-accent/80 px-2 py-0.5 rounded font-mono">{step}</span>
                        {j < (service as { process: string[] }).process.length - 1 && (
                          <ChevronRight size={12} className="text-accent/30" />
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="mt-auto pt-4 border-t border-border/30">
                {"cta" in service && (
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors group/cta"
                  >
                    {(service as { cta: string }).cta}
                    <ArrowRight size={14} className="group-hover/cta:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
