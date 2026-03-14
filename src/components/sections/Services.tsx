"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { Card } from "../ui/Card";
import { fadeUp, stagger } from "../../lib/animations";
import { services } from "../../lib/data";
import { Layout, Database, Zap } from "lucide-react";

const icons = {
  Layout: <Layout size={24} className="text-accent" />,
  Database: <Database size={24} className="text-accent" />,
  Zap: <Zap size={24} className="text-accent" />,
};

export const Services = () => {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <SectionTitle 
        title="I Miei Servizi" 
        subtitle="Competenze multidisciplinari per il successo del tuo prodotto digitale." 
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {services.map((service, i) => (
          <motion.div key={i} variants={fadeUp}>
            <Card className="h-full border-b-2 hover:border-accent transition-colors">
              <div className="mb-6 p-3 w-fit bg-accent/10 rounded-lg group-hover:scale-110 transition-transform">
                {icons[service.icon as keyof typeof icons]}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-text-muted leading-relaxed">
                {service.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
