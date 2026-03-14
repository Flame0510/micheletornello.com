"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { fadeUp, stagger } from "../../lib/animations";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import { caseStudies } from "@/lib/case-studies";

export const Portfolio = () => {
  const { lang } = useLang();
  const t = translations.portfolio[lang];

  return (
    <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <SectionTitle prefix="04" title={t.title} subtitle={t.subtitle} />

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
          const hasCaseStudy = study.slug !== "pong";

          return (
            <motion.div key={study.slug} variants={fadeUp}>
              <Card className="h-full group p-0 overflow-hidden flex flex-col">
                <div className="h-48 p-0 flex items-center justify-center relative overflow-hidden">
                  <Image src={study.image} alt={title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
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
                  {hasCaseStudy ? (
                    <Link
                      href={`/portfolio/${study.slug}`}
                      className="text-sm text-accent/60 hover:text-accent transition-colors font-mono mt-auto flex items-center gap-1 group/link"
                    >
                      Case study <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  ) : null}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};
