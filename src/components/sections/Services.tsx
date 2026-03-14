"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { Card } from "../ui/Card";
import { fadeUp, stagger } from "../../lib/animations";
import { Layout, Database, Zap } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const icons = {
  Layout: <Layout size={24} className="text-accent" />,
  Database: <Database size={24} className="text-accent" />,
  Zap: <Zap size={24} className="text-accent" />,
};

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
          <motion.div key={i} variants={fadeUp}>
            <Card className="h-full border-b-2 hover:border-accent transition-colors group group-hover:border-accent/30 transition-colors">
              <span className="text-xs font-mono text-accent/40 mb-2 block">0{i+1} / {service.title.toUpperCase()}</span>
              <div className="mb-6 p-3 w-fit bg-accent/10 rounded-lg group-hover:scale-110 transition-transform">
                {icons[["Layout", "Database", "Zap"][i] as keyof typeof icons]}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-text-muted leading-relaxed">{service.description}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
