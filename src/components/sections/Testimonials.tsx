"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { fadeUp, stagger } from "../../lib/animations";
import { testimonials } from "../../lib/data";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionTitle
        title="Cosa dicono"
        subtitle="Il risultato lo misurano i clienti, non noi."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="relative flex flex-col gap-4 p-8 bg-surface border border-border rounded-xl"
          >
            <Quote size={24} className="text-accent opacity-50" />
            <p className="text-text-main text-lg leading-relaxed italic">"{t.text}"</p>
            <div className="flex items-center gap-3 mt-2">
              <div className="w-9 h-9 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-accent text-xs font-mono font-bold">
                {t.avatar}
              </div>
              <span className="text-text-muted text-sm">{t.author}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
