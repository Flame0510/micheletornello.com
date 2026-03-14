"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { fadeUp } from "../../lib/animations";
import { Mail, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto overflow-hidden text-center">
      <SectionTitle 
        title="Iniziamo a costruire" 
        subtitle="Hai un progetto ambizioso o vuoi semplicemente fare due chiacchiere? Scrivimi!" 
        className="text-center flex flex-col items-center"
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        className="space-y-12"
      >
        <Card className="p-8 md:p-12 text-left bg-surface-hover/30 border-accent/20">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-muted">Nome</label>
                <input 
                  type="text" 
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-accent transition-colors"
                  placeholder="Il tuo nome"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-muted">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-accent transition-colors"
                  placeholder="tuaemail@esempio.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-muted">Messaggio</label>
              <textarea 
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-accent transition-colors min-h-[150px]"
                placeholder="Di cosa vuoi parlare?"
              />
            </div>
            <Button className="w-full gap-2">
              Invia messaggio <Send size={18} />
            </Button>
          </form>
        </Card>

        <div className="flex flex-col items-center gap-4">
          <p className="text-text-muted">Oppure scrivi direttamente a:</p>
          <a href="mailto:michele.tornello@example.com" className="flex items-center gap-2 text-accent hover:text-accent-hover font-bold text-xl transition-colors">
            <Mail size={24} /> michele.tornello@example.com
          </a>
        </div>
      </motion.div>
    </section>
  );
};
