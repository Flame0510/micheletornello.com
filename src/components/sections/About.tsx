"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionTitle } from "../ui/SectionTitle";
import { Card } from "../ui/Card";
import { fadeUp } from "../../lib/animations";
import { bio } from "../../lib/data";

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <SectionTitle 
        title="Chi Sono" 
        subtitle="Dal codice alla strategia di prodotto." 
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          className="space-y-6 text-lg text-text-muted leading-relaxed"
        >
          <p>{bio.description}</p>

          {/* Percorso formativo — verticale su mobile per evitare overflow */}
          <div className="flex flex-col gap-3 py-4 border-l-2 border-accent pl-6 bg-accent/5 rounded-r-xl">
            <span className="text-sm font-mono text-accent uppercase tracking-widest mb-1">
              Percorso
            </span>
            {bio.education.map((step, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-text-main font-medium text-base">{step.label}</span>
                {step.detail && <span className="text-text-muted text-sm">{step.detail}</span>}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          className="relative flex flex-col gap-6"
        >
          {/* Profile photo */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-border">
            <Image
              src="/michele-profile.png"
              alt="Michele Tornello"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Terminal card — with mb on tablet */}
          <Card className="font-mono text-sm bg-surface-hover/50 backdrop-blur-sm group mt-2 lg:mt-0">
            <div className="flex gap-2 mb-4 opacity-50">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            
            <pre className="text-accent leading-6 overflow-x-auto text-xs">
{`{
  "name": "${bio.name}",
  "expertise": [
    "Full-Stack Development",
    "System Architecture",
    "Cloud & AI",
    "Technical Education"
  ],
  "teaching": "Steve Jobs Academy"
}`}
            </pre>
          </Card>
          
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 blur-2xl -z-10" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 blur-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};
