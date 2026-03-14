"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { fadeUp, stagger } from "../../lib/animations";
import { useLang } from "@/lib/LanguageContext";

export const Process = () => {
  const { lang } = useLang();

  const content = {
    it: {
      title: "Come lavoro",
      subtitle: "Non vendo funzionalità. Risolvo problemi.",
      steps: [
        {
          step: "01",
          title: "Capisco prima di costruire",
          description: "Prima di aprire un editor, ascolto. Studio il contesto, le vincoli, i fallimenti precedenti. La maggior parte dei problemi tecnici ha una radice non tecnica.",
        },
        {
          step: "02",
          title: "Decido con criterio",
          description: "Scelgo lo stack in base al problema, non alle tendenze. Ogni scelta architetturale ha un trade-off — ti dico qual è, non ti vendo la moda del momento.",
        },
        {
          step: "03",
          title: "Costruisco in modo incrementale",
          description: "Rilasci frequenti, feedback continuo. Non sparisco per tre mesi e consegno un monolite. Lavoriamo insieme, non in sequenza.",
        },
        {
          step: "04",
          title: "Resto disponibile dopo il deploy",
          description: "Il deploy non è la fine. Monitoring, incidenti, evoluzioni — ci sono. Non passo il file zip e sparisco.",
        },
      ],
    },
    en: {
      title: "How I work",
      subtitle: "I don't sell features. I solve problems.",
      steps: [
        {
          step: "01",
          title: "Understand before building",
          description: "Before opening an editor, I listen. I study the context, the constraints, the previous failures. Most technical problems have a non-technical root.",
        },
        {
          step: "02",
          title: "Decide with intent",
          description: "I pick the stack based on the problem, not the trend. Every architectural choice has a trade-off — I'll tell you what it is, not sell you the hype.",
        },
        {
          step: "03",
          title: "Build incrementally",
          description: "Frequent releases, continuous feedback. I don't disappear for three months and deliver a monolith. We work together, not in sequence.",
        },
        {
          step: "04",
          title: "Stay available after launch",
          description: "Deploy is not the end. Monitoring, incidents, evolution — I'm there. I don't hand over the zip file and vanish.",
        },
      ],
    },
  };

  const t = content[lang];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <SectionTitle title={t.title} subtitle={t.subtitle} />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/40 rounded-xl overflow-hidden border border-border/40"
      >
        {t.steps.map((step, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="relative flex flex-col gap-4 p-8 bg-background hover:bg-surface transition-colors duration-300 group"
          >
            <span className="font-mono text-5xl font-bold text-border group-hover:text-accent/20 transition-colors duration-300">
              {step.step}
            </span>
            <h3 className="text-lg font-semibold text-text-main">{step.title}</h3>
            <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
