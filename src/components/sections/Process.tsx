"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { fadeUp, stagger } from "../../lib/animations";
import { process } from "../../lib/data";

export const Process = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <SectionTitle
        title="Come lavoro"
        subtitle="Un processo chiaro, dall'idea al deploy."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
      >
        {process.map((step, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="relative flex flex-col gap-4 p-6 bg-surface border border-border rounded-xl group hover:border-accent/40 transition-colors duration-300"
          >
            <span className="font-mono text-4xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors">
              {step.step}
            </span>
            <h3 className="text-xl font-bold text-text-main">{step.title}</h3>
            <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>

            {/* Connector line (hidden on last item) */}
            {i < process.length - 1 && (
              <div className="hidden lg:block absolute top-10 -right-3 w-6 h-[1px] bg-border" />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
