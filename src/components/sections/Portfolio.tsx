"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { fadeUp, stagger } from "../../lib/animations";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import { caseStudies } from "@/lib/case-studies";

export const Portfolio = () => {
  const { lang } = useLang();
  const t = translations.portfolio[lang];

  return (
    <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <SectionTitle prefix="// 03" title={t.title} subtitle={t.subtitle} />

      <motion.div
        variants={stagger}
        initial="visible"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {caseStudies.map((study, i) => {
          const project = t.items[i];
          const title = study.content[lang].title;

          return (
            <motion.div key={study.slug} variants={fadeUp}>
              <Card className="h-full group p-0 overflow-hidden flex flex-col">
                <div className={`h-48 bg-gradient-to-br ${study.gradient} p-8 flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-2xl font-bold text-text-muted/20 opacity-30 select-none">IMAGE PLACEHOLDER</div>
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ExternalLink size={32} className="text-white" />
                  </div>
                </div>

                <div className="p-8 space-y-4 flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {study.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold">{title}</h3>
                  <p className="text-text-muted leading-relaxed">{project.description}</p>
                  <Link
                    href={`/portfolio/${study.slug}`}
                    className="text-sm text-accent/60 hover:text-accent transition-colors font-mono mt-auto flex items-center gap-1 group/link"
                  >
                    Case study <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};
