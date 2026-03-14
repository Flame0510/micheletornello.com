"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { useLang } from "@/lib/LanguageContext";

export const About = () => {
  const { lang } = useLang();

  const content = {
    it: {
      title: "About",
      subtitle: "Chi sono, come lavoro, perché costruisco.",
      manifesto:
        "Costruisco sistemi, non pagine. Ogni prodotto che lancio nasce da un problema reale che nessuno stava risolvendo bene. Uso l'AI come leva, non come scorciatoia — perché la visione non si delega a un prompt. Sono ingegnere, docente, imprenditore. Siciliano. E no, non sono 'uno sviluppatore'.",
      about:
        "Sono partito da un'idea semplice: la tecnologia serve solo se risolve problemi veri. Mi sono laureato in Ingegneria Informatica, ho iniziato a lavorare come freelance nel 2019, e in poco tempo ho capito che non mi bastava scrivere codice per altri — volevo costruire cose mie. Ho creato piattaforme per la gestione di turni nella sicurezza privata, sistemi di prenotazione diretta per strutture ricettive, un social network per giocatori da tavolo. Dal 2022 insegno alla Steve Jobs Academy in tre sedi siciliane, perché trasferire quello che sai è il modo più onesto di verificare se lo sai davvero. Oggi lavoro all'intersezione tra ingegneria, prodotto e AI — e ogni progetto che accetto deve avere una ragione di esistere più forte di 'ci serve un sito'.",
    },
    en: {
      title: "About",
      subtitle: "Who I am, how I work, why I build.",
      manifesto:
        "I build systems, not pages. Every product I ship starts from a real problem nobody was solving well. I use AI as leverage, not a shortcut — because vision can't be outsourced to a prompt. I'm an engineer, a teacher, a founder. Sicilian. And no, I'm not 'just a developer'.",
      about:
        "I started from a simple idea: technology only matters if it solves real problems. I got my degree in Computer Engineering, went freelance in 2019, and quickly realized writing code for others wasn't enough — I wanted to build my own things. I've created platforms for shift management in private security, direct booking systems for vacation rentals, a social network for board gamers. Since 2022 I teach at Steve Jobs Academy across three campuses in Sicily, because passing on what you know is the most honest way to test if you really know it. Today I work at the intersection of engineering, product, and AI — and every project I take on needs a reason to exist stronger than 'we need a website'.",
    },
  };

  const t = content[lang];

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-[1120px] mx-auto">
      <SectionTitle prefix="// 02" title={t.title} subtitle={t.subtitle} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <blockquote className="text-text-main text-lg md:text-xl leading-relaxed font-semibold border-l-2 pl-5" style={{ borderColor: "#1A1A1A" }}>
            {t.manifesto}
          </blockquote>

          <p className="text-text-muted text-lg leading-relaxed">{t.about}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-lg overflow-hidden"
          style={{ background: "#0A0A0A", border: "1px solid #1A1A1A", borderRadius: "8px", fontFamily: "JetBrains Mono, monospace" }}
        >
          <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid #1A1A1A" }}>
            <div className="w-3 h-3 rounded-full" style={{ background: "#E8734A", opacity: 0.8 }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#707070", opacity: 0.4 }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#707070", opacity: 0.4 }} />
            <span className="ml-2" style={{ color: "#707070", fontSize: "0.75rem" }}>
              profile.json
            </span>
          </div>

          <div className="p-6 space-y-2" style={{ fontSize: "0.875rem" }}>
            <p style={{ color: "#707070" }}>{"{"}</p>
            <p className="pl-4"><span style={{ color: "#707070" }}>&quot;role&quot;:</span> <span style={{ color: "#E8E8E8" }}>&quot;System Architect & Builder&quot;</span>,</p>
            <p className="pl-4"><span style={{ color: "#707070" }}>&quot;based_in&quot;:</span> <span style={{ color: "#E8E8E8" }}>&quot;Sicilia, IT → Global&quot;</span>,</p>
            <p className="pl-4"><span style={{ color: "#707070" }}>&quot;freelance_since&quot;:</span> <span style={{ color: "#E8E8E8" }}>&quot;2019&quot;</span>,</p>
            <p className="pl-4"><span style={{ color: "#707070" }}>&quot;teaching&quot;:</span> <span style={{ color: "#707070" }}>{"{"}</span></p>
            <p className="pl-8"><span style={{ color: "#707070" }}>&quot;institution&quot;:</span> <span style={{ color: "#E8E8E8" }}>&quot;Steve Jobs Academy&quot;</span>,</p>
            <p className="pl-8"><span style={{ color: "#707070" }}>&quot;sedi&quot;:</span> <span style={{ color: "#5E6AD2" }}>[&quot;Catania&quot;, &quot;Caltagirone&quot;, &quot;Palermo&quot;]</span>,</p>
            <p className="pl-8"><span style={{ color: "#707070" }}>&quot;since&quot;:</span> <span style={{ color: "#E8E8E8" }}>&quot;2022&quot;</span></p>
            <p className="pl-4"><span style={{ color: "#707070" }}>{"}"}</span>,</p>
            <p className="pl-4"><span style={{ color: "#707070" }}>&quot;stack&quot;:</span> <span style={{ color: "#707070" }}>{"{"}</span></p>
            <p className="pl-8"><span style={{ color: "#707070" }}>&quot;frontend&quot;:</span> <span style={{ color: "#5E6AD2" }}>[&quot;Next.js&quot;, &quot;React&quot;, &quot;TypeScript&quot;]</span>,</p>
            <p className="pl-8"><span style={{ color: "#707070" }}>&quot;backend&quot;:</span> <span style={{ color: "#5E6AD2" }}>[&quot;Node.js&quot;, &quot;PHP/Laravel&quot;, &quot;PostgreSQL&quot;]</span>,</p>
            <p className="pl-8"><span style={{ color: "#707070" }}>&quot;infra&quot;:</span> <span style={{ color: "#5E6AD2" }}>[&quot;Vercel&quot;, &quot;Docker&quot;, &quot;Linux&quot;]</span></p>
            <p className="pl-4"><span style={{ color: "#707070" }}>{"}"}</span>,</p>
            <p className="pl-4"><span style={{ color: "#707070" }}>&quot;ai_usage&quot;:</span> <span style={{ color: "#E8E8E8" }}>&quot;moltiplicatore, non stampella&quot;</span>,</p>
            <p className="pl-4"><span style={{ color: "#707070" }}>&quot;status&quot;:</span> <span style={{ color: "#E8E8E8" }}>&quot;open_to_interesting_problems&quot;</span></p>
            <p style={{ color: "#707070" }}>{"}"}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
