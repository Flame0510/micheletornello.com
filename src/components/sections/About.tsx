"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { Card } from "../ui/Card";
import { fadeUp } from "../../lib/animations";
import { bio } from "../../lib/data";

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <SectionTitle 
        title="Chi Sono" 
        subtitle="Un viaggio tra bit e architetture scalabili." 
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-6 text-lg text-text-muted leading-relaxed"
        >
          <p>{bio.description}</p>
          <div className="flex items-center gap-4 py-4 border-l-2 border-accent pl-6 bg-accent/5 rounded-r-xl">
            <span className="text-sm font-mono text-accent uppercase tracking-widest">
              Percorso
            </span>
            <span className="text-text-main font-medium">{bio.path}</span>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative"
        >
          <Card className="font-mono text-sm bg-surface-hover/50 backdrop-blur-sm p-8 group">
            <div className="flex gap-2 mb-4 opacity-50">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            
            <pre className="text-accent leading-6 overflow-x-auto">
{`{
  "name": "${bio.name}",
  "expertise": [
    "Full-Stack Development",
    "System Architecture",
    "Cloud & AI",
    "Technical Education"
  ],
  "languages": [
    "TypeScript", "PHP", "Go",
    "Python", "SQL", "NoSQL"
  ],
  "teaching": "Steve Jobs Academy"
}`}
            </pre>
          </Card>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 blur-2xl -z-10" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 blur-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};
