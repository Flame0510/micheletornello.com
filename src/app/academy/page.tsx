"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { fadeUp, stagger } from "@/lib/animations";
import { academy } from "@/lib/data";
import { ArrowLeft, BookOpen, ExternalLink, GraduationCap } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function AcademyPage() {
  const { lang } = useLang();
  const t = translations.academyPage[lang];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto overflow-hidden">
        <Link href="/" className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors mb-8 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> {t.backHome}
        </Link>

        <div className="flex flex-col lg:flex-row gap-12 items-start mb-20">
          <div className="flex-1 space-y-6">
            <Badge variant="outline" className="gap-2">
              <GraduationCap size={14} /> {t.badge}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Steve Jobs <span className="text-accent">Academy</span>
            </h1>
            <p className="text-xl text-text-muted max-w-2xl leading-relaxed">{t.intro}</p>
          </div>

          <Card className="lg:w-80 bg-accent/5 border-accent/20 border-dashed">
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <BookOpen size={20} className="text-accent" /> {t.infoTitle}
            </h4>
            <ul className="space-y-3 text-sm text-text-muted">
              <li>
                • {t.infoCard.yearLabel}: {academy.year}
              </li>
              <li>
                • {t.infoCard.locationsLabel}: {academy.locations.join(" · ")}
              </li>
              <li>
                • {t.infoCard.formatLabel}: {t.infoCard.formatValue}
              </li>
              <li>• {t.infoCard.cta}</li>
            </ul>
          </Card>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {academy.subjects.map((subject, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Card className="h-full group hover:border-accent transition-all duration-500">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{subject.name}</h3>
                  </div>
                  <p className="text-text-muted leading-relaxed">{subject.description}</p>

                  <div className="pt-6 border-t border-border flex flex-col gap-2">
                    <Button variant="ghost" disabled className="text-xs justify-between group/btn px-2">
                      <span className="flex items-center gap-2">
                        {t.resourcesLabel} <ExternalLink size={12} />
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-surface border border-border text-text-muted">
                        {t.comingSoon}
                      </span>
                    </Button>
                    <Button variant="ghost" disabled className="text-xs justify-between group/btn px-2">
                      <span className="flex items-center gap-2">
                        {t.repositoryLabel} <ExternalLink size={12} />
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-surface border border-border text-text-muted">
                        {t.comingSoon}
                      </span>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
