import { Mic2, Users, Terminal, Cpu, Radio, Briefcase } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const bio = {
  short: "Michele Tornello è System Architect, Product Engineer e docente presso la Steve Jobs Academy. Lavora alla progettazione di architetture scalabili per applicazioni web e mobile e sviluppa prodotti digitali indipendenti. È stato intervistato da RTL 102.5 e partecipa attivamente alla community tecnologica italiana.",
  long: "Michele Tornello è System Architect, Product Engineer e docente presso la Steve Jobs Academy. Laureato in Ingegneria Informatica, si occupa della progettazione di architetture software scalabili e dello sviluppo di applicazioni web e mobile utilizzate in contesti enterprise dal 2022.\n\nLavora con tecnologie moderne dell'ecosistema JavaScript come React, Next.js e React Native, oltre ad avere esperienza con Angular, Vue, Nuxt, PHP e Java. Parallelamente allo sviluppo professionale si dedica alla formazione di nuovi programmatori, contribuendo alla crescita della nuova generazione di sviluppatori.\n\nHa sviluppato diversi progetti digitali indipendenti e partecipa attivamente alla community tecnologica italiana. È stato intervistato da RTL 102.5 e ha collaborato come volontario con TEDx Catania.",
};

export interface Topic {
  title: string;
  subtitle: string;
  abstract: string;
  format: string;
  target: string;
  Icon: LucideIcon;
}

export const topics: Topic[] = [
  {
    title: "Sviluppo software e architetture enterprise",
    subtitle: "Dal primo prototipo alla produzione: come progettare codebase mantenibili e scalabili.",
    abstract: "Il passaggio da un prototipo a un prodotto in produzione richiede rigore architettonico. Questo talk esplora come progettare sistemi che durano nel tempo, concentrandosi su architettura di progetto, gestione dello stato, modularità del codice e risoluzione degli errori comuni che rallentano lo scaling.",
    format: "Talk tecnico (30-45 min)",
    target: "Web & Mobile Developer, Tech Lead",
    Icon: Cpu,
  },
  {
    title: "Architettura software pragmatica",
    subtitle: "Come progettare sistemi scalabili senza creare complessità inutile.",
    abstract: "Spesso l'over-engineering è il primo nemico della velocità. Michele condivide un approccio pragmatico alla scelta delle tecnologie e alla progettazione di servizi semplici ma robusti. Vedremo come far evolvere le architetture nel tempo, mantenendo la flessibilità necessaria per rispondere al business senza sacrificare la stabilità.",
    format: "Workshop pratico / Talk",
    target: "Architect, CTO, Senior Developer",
    Icon: Briefcase,
  },
  {
    title: "Costruire prodotti digitali indipendenti",
    subtitle: "Dallo sviluppo tecnico alla creazione di prodotti reali: come passare dall'idea al software funzionante.",
    abstract: "Sviluppare un prodotto non significa solo scrivere codice. Questo intervento analizza il percorso completo: dalla progettazione di un MVP efficace all'iterazione rapida basata sul feedback. Approfondiremo la gestione tecnica del prodotto, la scelta delle infrastrutture e le strategie per garantire la scalabilità fin dal primo giorno.",
    format: "Panel discussion / Talk",
    target: "Product Manager, Indie Hackers, Full-stack Developer",
    Icon: Radio,
  },
];

export interface Credential {
  label: string;
  detail: string;
  Icon: LucideIcon;
}

export const credentials: Credential[] = [
  { label: "System Architect", detail: "Software Design", Icon: Terminal },
  { label: "Docente SJA", detail: "Steve Jobs Academy", Icon: Users },
  { label: "RTL 102.5", detail: "Intervista Nazionale", Icon: Radio },
  { label: "Ing. Informatica", detail: "Laurea · 2024", Icon: Cpu },
];

export { Mic2, MapPin, Calendar, ArrowUpRight, ExternalLink, Users } from 'lucide-react';
