export type Lang = 'it' | 'en';

export const translations = {
  meta: {
    it: {
      title: 'Michele Tornello — Product Engineer & System Architect',
      description:
        'Full-Stack Development, System Architecture e consulenza tecnica per startup e aziende. Docente Steve Jobs Academy in Sicilia.',
    },
    en: {
      title: 'Michele Tornello — Product Engineer & System Architect',
      description:
        'Full-Stack Development, System Architecture and tech consulting for startups and enterprises. Steve Jobs Academy instructor in Sicily.',
    },
  },
  navbar: {
    it: {
      about: 'Chi Sono',
      services: 'Servizi',
      portfolio: 'Portfolio',
      academy: 'Academy',
      contact: 'Contatti',
      cta: 'Parliamo',
    },
    en: {
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      academy: 'Academy',
      contact: 'Contact',
      cta: "Let's Talk",
    },
  },
  hero: {
    it: {
      tagline: 'Trasformo visioni complesse in architetture software scalabili.',
      badge: 'Product Engineer',
      gradientWord: 'architetture',
      ctaPrimary: 'Esplora i lavori',
      ctaSecondary: 'Scarica CV',
    },
    en: {
      tagline: 'I turn complex visions into scalable software architectures.',
      badge: 'Product Engineer',
      gradientWord: 'scalable',
      ctaPrimary: 'Explore work',
      ctaSecondary: 'Download CV',
    },
  },
  metrics: {
    it: [
      { value: '5+', label: 'Anni di esperienza' },
      { value: '15+', label: 'Progetti completati' },
      { value: '500+', label: 'Ore di docenza' },
      { value: '3', label: 'Sedi Academy' },
    ],
    en: [
      { value: '5+', label: 'Years of experience' },
      { value: '15+', label: 'Projects delivered' },
      { value: '500+', label: 'Teaching hours' },
      { value: '3', label: 'Academy locations' },
    ],
  },
  about: {
    it: {
      title: 'Chi Sono',
      subtitle: 'Ingegnere, non solo sviluppatore.',
      bio: "Con un background che unisce la solidità dell'ingegneria informatica alla velocità dello sviluppo freelance, aiuto startup e aziende a costruire prodotti digitali che durano nel tempo. Non scrivo solo codice: progetto sistemi. Insegno quello che costruisco — in aula, in presenza, alla Steve Jobs Academy.",
      pathLabel: 'Il mio percorso',
      education: [
        { label: 'Perito Industriale Informatico', detail: '' },
        { label: 'Diplomato Steve Jobs Academy', detail: 'Catania' },
        { label: 'Laurea L8 Ingegneria Informatica', detail: 'Conseguita lavorando' },
      ],
    },
    en: {
      title: 'About',
      subtitle: 'Engineer, not just a developer.',
      bio: "With a background that combines the rigor of computer engineering with the speed of freelance development, I help startups and companies build digital products that last. I don't just write code — I design systems. I teach what I build, in person, at the Steve Jobs Academy.",
      pathLabel: 'My path',
      education: [
        { label: 'Industrial Technical Diploma (Computer Science)', detail: '' },
        { label: 'Steve Jobs Academy Graduate', detail: 'Catania' },
        { label: 'BSc in Computer Engineering (L8)', detail: 'Earned while working' },
      ],
    },
  },
  services: {
    it: {
      title: 'Servizi',
      subtitle: 'Quello che faccio, fatto bene.',
      items: [
        {
          title: 'Full-Stack Development',
          description:
            "Dal database all'interfaccia, costruisco applicazioni web e mobile complete. Stack moderno, codice manutenibile, zero debito tecnico nascosto.",
        },
        {
          title: 'System Architecture',
          description:
            "Disegno l'infrastruttura prima che diventi un problema. Microservizi, API, database, deploy — progettati per scalare dal giorno uno.",
        },
        {
          title: 'Consulenza Tecnica',
          description:
            'Audit del codice esistente, scelte tecnologiche, roadmap di prodotto. Ti dico cosa funziona, cosa no, e come sistemarlo.',
        },
      ],
    },
    en: {
      title: 'Services',
      subtitle: 'What I do, done right.',
      items: [
        {
          title: 'Full-Stack Development',
          description:
            'From database to interface, I build complete web and mobile applications. Modern stack, maintainable code, zero hidden tech debt.',
        },
        {
          title: 'System Architecture',
          description:
            'I design infrastructure before it becomes a problem. Microservices, APIs, databases, deploy — built to scale from day one.',
        },
        {
          title: 'Tech Consulting',
          description:
            "Codebase audits, technology decisions, product roadmaps. I tell you what works, what doesn't, and how to fix it.",
        },
      ],
    },
  },
  process: {
    it: {
      title: 'Come Lavoro',
      subtitle: "Un processo chiaro, dall'idea al prodotto.",
      steps: [
        {
          step: '01',
          title: 'Discovery',
          description:
            'Ascolto il problema, studio il contesto, definisco vincoli e obiettivi reali — non quelli di fantasia.',
        },
        {
          step: '02',
          title: 'Architettura',
          description:
            'Disegno il sistema: stack tecnologico, struttura dati, flussi, integrazioni. Tutto prima di scrivere una riga di codice.',
        },
        {
          step: '03',
          title: 'Sviluppo',
          description:
            'Costruisco in sprint iterativi con rilasci frequenti. Vedi il progresso, dai feedback, correggiamo in corsa.',
        },
        {
          step: '04',
          title: 'Deploy & Oltre',
          description:
            'Metto in produzione, configuro monitoring e CI/CD. Resto disponibile per evoluzioni e manutenzione.',
        },
      ],
    },
    en: {
      title: 'How I Work',
      subtitle: 'A clear process, from idea to product.',
      steps: [
        {
          step: '01',
          title: 'Discovery',
          description:
            'I listen to the problem, study the context, define real constraints and goals — not wishful thinking.',
        },
        {
          step: '02',
          title: 'Architecture',
          description:
            'I design the system: tech stack, data structure, flows, integrations. Everything before writing a single line of code.',
        },
        {
          step: '03',
          title: 'Development',
          description:
            'I build in iterative sprints with frequent releases. You see the progress, give feedback, we course-correct together.',
        },
        {
          step: '04',
          title: 'Deploy & Beyond',
          description:
            'I ship to production, set up monitoring and CI/CD. I stay available for evolution and maintenance.',
        },
      ],
    },
  },
  portfolio: {
    it: {
      title: 'Portfolio',
      subtitle: 'Alcuni progetti recenti.',
      items: [
        {
          title: 'REC Security',
          description:
            "Sistema gestionale completo per un'azienda di sicurezza: turni, operatori, reportistica in tempo reale.",
          tech: ['Next.js', 'TypeScript', 'Tailwind'],
          gradient: 'from-blue-600/20 to-cyan-500/20',
        },
        {
          title: 'Casa Vacanze Kastalia',
          description:
            'Piattaforma di prenotazione diretta per una struttura ricettiva siciliana, con gestione calendario e pagamenti.',
          tech: ['React', 'Node.js', 'PostgreSQL'],
          gradient: 'from-orange-500/20 to-red-500/20',
        },
        {
          title: 'Ludelist',
          description:
            'App per organizzare e tracciare collezioni di giochi da tavolo, con catalogo condiviso e lista desideri.',
          tech: ['PHP', 'Laravel', 'Vue.js'],
          gradient: 'from-purple-600/20 to-pink-500/20',
        },
      ],
    },
    en: {
      title: 'Portfolio',
      subtitle: 'Some recent projects.',
      items: [
        {
          title: 'REC Security',
          description:
            'End-to-end management system for a security company: shift scheduling, operator tracking, real-time reporting.',
          tech: ['Next.js', 'TypeScript', 'Tailwind'],
          gradient: 'from-blue-600/20 to-cyan-500/20',
        },
        {
          title: 'Casa Vacanze Kastalia',
          description:
            'Direct booking platform for a Sicilian vacation rental, with calendar management and payments.',
          tech: ['React', 'Node.js', 'PostgreSQL'],
          gradient: 'from-orange-500/20 to-red-500/20',
        },
        {
          title: 'Ludelist',
          description:
            'App for organizing and tracking board game collections, with shared catalog and wishlist.',
          tech: ['PHP', 'Laravel', 'Vue.js'],
          gradient: 'from-purple-600/20 to-pink-500/20',
        },
      ],
    },
  },
  testimonials: {
    it: {
      title: 'Dicono di me',
      subtitle: 'Feedback da chi ha lavorato con me.',
      items: [
        {
          text: "Michele ha preso un'idea confusa e l'ha trasformata in un prodotto funzionante in tre mesi. Non ci ha venduto funzionalità inutili — ci ha detto cosa serviva davvero e l'ha costruito.",
          author: 'Marco R.',
          role: 'Co-founder @ startup SaaS',
          avatar: 'MR',
        },
        {
          text: 'Lo abbiamo chiamato per un audit tecnico su un progetto in difficoltà. Ha individuato i colli di bottiglia in due giorni e ci ha proposto un piano di rientro realistico. Lavoro pulito.',
          author: 'Alessandra V.',
          role: 'CTO @ agenzia digitale',
          avatar: 'AV',
        },
      ],
    },
    en: {
      title: 'What they say',
      subtitle: "Feedback from people I've worked with.",
      items: [
        {
          text: "Michele took a messy idea and turned it into a working product in three months. He didn't sell us features we didn't need — he told us what actually mattered and built it.",
          author: 'Marco R.',
          role: 'Co-founder @ SaaS startup',
          avatar: 'MR',
        },
        {
          text: 'We brought him in for a technical audit on a struggling project. He identified the bottlenecks in two days and proposed a realistic recovery plan. Clean work.',
          author: 'Alessandra V.',
          role: 'CTO @ digital agency',
          avatar: 'AV',
        },
      ],
    },
  },
  academyPreview: {
    it: {
      title: 'Academy',
      subtitle: 'Insegno quello che costruisco.',
      intro:
        'Docente alla Steve Jobs Academy in tre sedi siciliane. Corsi in presenza su sviluppo software, architetture e metodologie reali — non teoria da manuale.',
      cta: 'Scopri i corsi',
      courseLabel: 'Corso 2025/26',
    },
    en: {
      title: 'Academy',
      subtitle: 'I teach what I build.',
      intro:
        'Instructor at the Steve Jobs Academy across three locations in Sicily. In-person courses on software development, architecture and real-world methodologies — not textbook theory.',
      cta: 'Explore courses',
      courseLabel: 'Course 2025/26',
    },
  },
  academyPage: {
    it: {
      backHome: 'Torna alla Home',
      badge: 'Docenza Steve Jobs Academy',
      heroTitle: 'Steve Jobs Academy',
      heroSubtitle: 'Formazione tecnica in presenza, in Sicilia.',
      intro:
        'Insegno sviluppo software e architettura dei sistemi alla Steve Jobs Academy. Lezioni in aula, esercitazioni pratiche, progetti reali. Quello che porto in classe è lo stesso approccio che uso con i miei clienti: risolvere problemi concreti con strumenti concreti.',
      infoTitle: 'Info Corsi',
      infoCard: {
        yearLabel: 'Anno Accademico',
        locationsLabel: 'Sedi',
        formatLabel: 'Modalità',
        formatValue: 'In presenza',
        cta: 'Vuoi saperne di più? Contattami.',
      },
      resourcesLabel: 'Slides & Risorse',
      repositoryLabel: 'Repository',
      comingSoon: 'coming soon',
    },
    en: {
      backHome: 'Back to Home',
      badge: 'Steve Jobs Academy Instructor',
      heroTitle: 'Steve Jobs Academy',
      heroSubtitle: 'In-person technical training, in Sicily.',
      intro:
        'I teach software development and system architecture at the Steve Jobs Academy. Classroom lectures, hands-on exercises, real projects. What I bring to class is the same approach I use with my clients: solving real problems with real tools.',
      infoTitle: 'Course Info',
      infoCard: {
        yearLabel: 'Academic Year',
        locationsLabel: 'Locations',
        formatLabel: 'Format',
        formatValue: 'In person',
        cta: 'Want to know more? Get in touch.',
      },
      resourcesLabel: 'Slides & Resources',
      repositoryLabel: 'Repository',
      comingSoon: 'coming soon',
    },
  },
  contact: {
    it: {
      title: 'Contatti',
      subtitle: 'Hai un progetto in testa? Parliamone.',
      name: 'Nome',
      email: 'Email',
      message: 'Messaggio',
      submit: 'Invia messaggio',
      note: 'Rispondo entro 24-48 ore lavorative.',
      directEmail: 'Oppure scrivi direttamente a:',
    },
    en: {
      title: 'Contact',
      subtitle: "Have a project in mind? Let's talk.",
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send message',
      note: 'I reply within 24-48 business hours.',
      directEmail: 'Or write directly to:',
    },
  },
  footer: {
    it: {
      tagline: 'Codice solido, architetture che durano.',
      copyright: `© ${new Date().getFullYear()} Michele Tornello. Tutti i diritti riservati.`,
    },
    en: {
      tagline: 'Solid code, architectures that last.',
      copyright: `© ${new Date().getFullYear()} Michele Tornello. All rights reserved.`,
    },
  },
};
