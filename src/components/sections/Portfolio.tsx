"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { fadeUp, stagger } from "../../lib/animations";
import { portfolio } from "../../lib/data";
import { ExternalLink } from "lucide-react";

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <SectionTitle 
        title="Portfolio" 
        subtitle="Alcuni dei lavori più significativi realizzati negli ultimi anni." 
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {portfolio.map((project, i) => (
          <motion.div key={i} variants={fadeUp}>
            <Card className="h-full group p-0 overflow-hidden flex flex-col">
              <div className={`h-48 bg-gradient-to-br ${project.gradient} p-8 flex items-center justify-center relative overflow-hidden`}>
                <div className="text-2xl font-bold text-text-muted/20 opacity-30 select-none">
                  IMAGE PLACEHOLDER
                </div>
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ExternalLink size={32} className="text-white" />
                </div>
              </div>

              <div className="p-8 space-y-4 flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-[10px]">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-text-muted leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
