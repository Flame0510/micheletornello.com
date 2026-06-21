import { config } from './config';

export interface AcademySubject {
  name: string;
  description: string;
  slidesUrl?: string;
  showcaseUrl?: string;
}

export interface AcademySubjectGroup {
  label: string;
  subjects: AcademySubject[];
}

export const bio = {
  name: "Michele Tornello",
  role: "Product Engineer | Full-Stack & System Architecture",
  description: "Con un background che unisce la solidità dell'ingegneria informatica alla velocità dello sviluppo freelance, aiuto startup e aziende a costruire prodotti digitali che durano nel tempo. Non scrivo solo codice: progetto sistemi.",
  path: "Perito Informatico → Steve Jobs Academy → Ing. Informatica (L8) → Freelancer & Docente",
  education: [
    { label: "Perito Industriale Informatico", detail: "" },
    { label: "Diplomato Steve Jobs Academy", detail: "Catania" },
    { label: "Laurea L8 Ingegneria Informatica", detail: "Conseguita lavorando" },
  ]
};

export const hero = {
  tagline: "Trasformo visioni complesse in architetture software scalabili.",
  badge: "Disponibile per nuovi progetti"
};

export const metrics = [
  { value: "5+", label: "Anni di esperienza" },
  { value: "15+", label: "Progetti completati" },
  { value: "500+", label: "Ore di docenza" },
  { value: "3", label: "Sedi Academy" },
];

export const testimonials = [
  {
    text: "Michele sa tradurre requisiti complessi in soluzioni tecniche chiare ed efficaci. Un riferimento solido per chi costruisce prodotti ambiziosi.",
    author: "Cliente — Startup SaaS",
    avatar: "CS"
  },
  {
    text: "Ho apprezzato il suo approccio metodico: prima capisce il problema, poi costruisce la soluzione. Non si improvvisa mai.",
    author: "Partner — Agenzia Digitale",
    avatar: "PA"
  }
];

export const process = [
  {
    step: "01",
    title: "Discovery",
    description: "Analizziamo insieme il tuo progetto, i requisiti tecnici e gli obiettivi di business. Nessun dettaglio è banale.",
  },
  {
    step: "02",
    title: "Architettura",
    description: "Definisco lo stack, la struttura del sistema e le scelte tecniche. Tutto documentato e motivato.",
  },
  {
    step: "03",
    title: "Sviluppo",
    description: "Iterazioni rapide, codice pulito, testing continuo. Ti tengo aggiornato ad ogni milestone.",
  },
  {
    step: "04",
    title: "Deploy & Oltre",
    description: "Rilascio in produzione, monitoring e supporto post-lancio. Il lavoro non finisce al deploy.",
  },
];

export const services = [
  {
    title: "Full-Stack Development",
    description: "Architetture web scalabili da zero al deploy, con focus su performance, sicurezza e maintainability.",
    icon: "Layout"
  },
  {
    title: "System Architecture",
    description: "Design di sistemi distribuiti, microservizi e infrastrutture cloud-native per prodotti che scalano.",
    icon: "Database"
  },
  {
    title: "Tech Consulting",
    description: "Strategia tecnologica per startup e PMI: scelte architetturali, team building e roadmap di prodotto.",
    icon: "Zap"
  }
];

export const portfolio = [
  {
    title: "REC Security",
    description: "Piattaforma di sicurezza avanzata",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    gradient: "from-blue-600/20 to-cyan-500/20"
  },
  {
    title: "Casa Vacanze Kastalia",
    description: "Sistema di prenotazione e gestione turistica",
    tech: ["React", "Node.js", "PostgreSQL"],
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "Ludelist",
    description: "Piattaforma social per gamer",
    tech: ["PHP", "Laravel", "Vue.js"],
    gradient: "from-purple-600/20 to-pink-500/20"
  }
];

export const academy = {
  intro: "Docente presso Steve Jobs Academy, trasmetto competenze tecniche su tecnologie moderne e architetture software a studenti di Catania, Caltagirone e Palermo.",
  locations: ["Catania", "Caltagirone", "Palermo"],
  year: "A.A. 2025 / 2026",
  subjectGroups: [
    {
      label: "Web & Mobile",
      subjects: [
        {
          name: "Angular",
          description: "Architetture SPA aziendali con Angular: componenti, RxJS, routing e gestione dello stato.",
          slidesUrl: "https://canva.link/xjv4xbs3s1jw69f",
        },
        {
          name: "React",
          description: "UI moderne con React 19: hooks, gestione dello stato, composizione di componenti e API REST.",
          slidesUrl: "https://canva.link/dqe787p11wuqv0u",
        },
        {
          name: "React Native",
          description: "App mobile cross-platform con React Native: componenti nativi, navigazione e API di sistema.",
          slidesUrl: "https://canva.link/tvcvl1pg7sfwgco",
        },
      ],
    },
    {
      label: "Backend & Infrastructure",
      subjects: [
        {
          name: "PHP",
          description: "Backend con PHP moderno: OOP, framework MVC, autenticazione e progettazione di API REST.",
          slidesUrl: "https://gamma.app/docs/u5u4mxmnguhrpx3",
        },
        {
          name: "Sistemi Operativi",
          description: "Architetture, processi, gestione della memoria e risorse di sistema su Linux e Windows.",
          showcaseUrl: "https://operating-systems-showcase-kappa.vercel.app/",
        },
        {
          name: "Cloud Computing",
          description: "Cloud su AWS e GCP: containerizzazione con Docker, orchestrazione e deployment scalabile.",
          slidesUrl: "https://canva.link/4mey8gtfy5qtzjl",
        },
      ],
    },
    {
      label: "Software Engineering",
      subjects: [
        {
          name: "Programmazione 1",
          description: "Introduzione alla logica di programmazione: algoritmi, strutture dati e problem solving.",
          slidesUrl: "https://gamma.app/docs/5vuk49rj0p22avv",
        },
        {
          name: "Design Pattern",
          description: "Pattern GoF e architetturali: soluzioni riutilizzabili ai problemi classici del software.",
          slidesUrl: "https://canva.link/xb6xaw5dzo4a7p3",
          showcaseUrl: "https://design-patterns-showcase.micheletornello.com/",
        },
        {
          name: "Fondamenti di AI",
          description: "Intelligenza artificiale e machine learning dal principio: algoritmi, reti neurali e dati.",
          showcaseUrl: "https://ai-fundamentals.micheletornello.com",
        },
        {
          name: "Git & Versioning",
          description: "Git avanzato e workflow collaborativi: GitFlow, PR review, CI/CD e standard di qualità.",
          slidesUrl: "https://canva.link/xlyig79hhzbteya",
        },
        {
          name: "Metodologie Agile",
          description: "Agile, Scrum, Kanban e DevOps: metodologie operative per team di sviluppo professionali.",
          slidesUrl: "https://canva.link/rlr3tn06lt8sx2q",
        },
      ],
    },
  ] as AcademySubjectGroup[],
};

export const contact = {
  email: config.contact.email,
  whatsappUrl: config.contact.whatsapp,
};

export const social = {
  linkedin: "https://www.linkedin.com/in/michele-tornello-06a6341aa/",
  github: "https://github.com/Flame0510",
  instagram: "https://www.instagram.com/michele_tornello",
  whatsapp: config.contact.whatsapp,
};
