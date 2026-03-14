"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { fadeUp, stagger } from "../../lib/animations";
import { academy } from "../../lib/data";
import { GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export const AcademyPreview = () => {
  const { lang } = useLang();
  const t = translations.academyPreview[lang];

  return (
    <section id="academy" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden relative">
      <SectionTitle prefix="// 04" title={t.title} subtitle={t.subtitle} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={fadeUp}
          initial="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          className="space-y-8"
        >
          <div className="p-4 w-fit bg-accent/10 rounded-2xl mb-6">
            <GraduationCap size={40} className="text-accent" />
          </div>
          <p className="text-xl text-text-muted leading-relaxed">{t.intro}</p>
          
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="font-mono text-[10px] py-0 px-2 uppercase border-accent/30 text-accent/80">Catania</Badge>
            <Badge variant="outline" className="font-mono text-[10px] py-0 px-2 uppercase border-accent/30 text-accent/80">Caltagirone</Badge>
            <Badge variant="outline" className="font-mono text-[10px] py-0 px-2 uppercase border-accent/30 text-accent/80">Palermo</Badge>
          </div>

          <Link href="/academy" className="inline-block mt-8">
            <Button variant="outline" className="gap-2">
              {t.cta} <ArrowRight size={18} />
            </Button>
          </Link>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          className="grid grid-cols-2 gap-4"
        >
          {academy.subjects.slice(0, 4).map((subject, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Card className="p-6 h-full text-center hover:bg-accent/5 transition-colors border-dashed border-accent/20">
                <h4 className="font-bold text-lg mb-2 text-accent">{subject.name}</h4>
                <p className="text-xs text-text-muted">{t.courseLabel}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 blur-[100px] rounded-full -z-10" />
    </section>
  );
};
