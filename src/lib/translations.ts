export type Lang = 'it' | 'en';

export const translations = {
  meta: {
    it: {
      title: 'Michele Tornello — System Architect · Software Engineer',
      description:
        'System Architecture, Software Engineering e consulenza tecnica per startup e aziende. Docente Steve Jobs Academy in Sicilia.',
    },
    en: {
      title: 'Michele Tornello — System Architect · Software Engineer',
      description:
        'System Architecture, Software Engineering and tech consulting for startups and enterprises. Steve Jobs Academy instructor in Sicily.',
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
      versionLine: 'SYSTEM ARCHITECT · SOFTWARE ENGINEER · TECH EDUCATOR',
      roleLine: 'Costruisco prodotti digitali scalabili, dal concept al deploy.',
      briefBio:
        "Aiuto startup e aziende a trasformare requisiti complessi in software affidabile. Architettura prima, codice pulito dopo.",
      ctaProjects: 'Vedi progetti',
      ctaContact: 'Contattami',
      ctaAcademy: 'Academy',
    },
    en: {
      versionLine: 'SYSTEM ARCHITECT · SOFTWARE ENGINEER · TECH EDUCATOR',
      roleLine: 'I build scalable digital products, from concept to deployment.',
      briefBio:
        'I help startups and companies turn complex requirements into reliable software. Architecture first, clean code second.',
      ctaProjects: 'See projects',
      ctaContact: 'Get in touch',
      ctaAcademy: 'Academy',
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
      subtitle: 'System Architect, non solo sviluppatore.',
      bio: "Con un background che unisce la solidità dell'architettura software alla velocità dello sviluppo enterprise, aiuto startup e aziende a costruire prodotti digitali che durano nel tempo. Non scrivo solo codice: progetto sistemi. Insegno quello che costruisco — in aula, in presenza, alla Steve Jobs Academy.",
      pathLabel: 'Il mio percorso',
      education: [
        { label: 'Perito Industriale Informatico', detail: '' },
        { label: 'Diplomato Steve Jobs Academy', detail: 'Catania' },
        { label: 'Laurea L8 Ingegneria Informatica', detail: 'Conseguita lavorando' },
      ],
    },
    en: {
      title: 'About',
      subtitle: 'System Architect, not just a developer.',
      bio: "With a background that combines the rigor of software architecture with the speed of enterprise development, I help startups and companies build digital products that last. I don't just write code — I design systems. I teach what I build, in person, at the Steve Jobs Academy.",
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
          title: 'Software Engineering',
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
          title: 'Software Engineering',
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
      subtitle: 'Progetti live e Startup Lab.',
      githubBanner: {
        text: 'Tutto il resto vive su GitHub.',
        cta: 'github.com/Flame0510'
      },
      items: [
        {
          id: 'MT-OP-005',
          title: 'Watching Stars',
          description: 'Piattaforma di memoriali digitali che unisce fisico e digitale tramite tecnologia NFC e QR Code. Gestione completa B2C e B2B con pagamenti Stripe e profili AI-driven.',
          tech: ['Next.js', 'AI', 'Stripe', 'NFC'],
        },
        {
          id: 'MT-OP-006',
          title: 'Memory Cloud',
          description: 'Soluzione multi-tenant dedicata alla Pubblica Amministrazione per la digitalizzazione dei servizi cimiteriali. Architettura scalabile per la gestione di migliaia di record e comuni.',
          tech: ['Next.js', 'Node.js', 'PostgreSQL'],
        },
      ],
    },
    en: {
      title: 'Portfolio',
      subtitle: 'Live projects and Startup Lab.',
      githubBanner: {
        text: 'Everything else lives on GitHub.',
        cta: 'github.com/Flame0510'
      },
      items: [
        {
          id: 'MT-OP-005',
          title: 'Watching Stars',
          description: 'Digital memorial platform bridging physical and digital through NFC and QR technology. Full B2C and B2B management with Stripe payments and AI-driven profiles.',
          tech: ['Next.js', 'AI', 'Stripe', 'NFC'],
        },
        {
          id: 'MT-OP-006',
          title: 'Memory Cloud',
          description: 'Multi-tenant Gov-Tech solution for public administration cemetery services. Scalable architecture designed to manage thousands of records across multiple municipalities.',
          tech: ['Next.js', 'Node.js', 'PostgreSQL'],
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
  stack: {
    it: {
      title: 'Stack',
      subtitle: 'Tecnologie che uso in produzione — nessuna moda, tutto verificato.',
      categories: {
        web_mobile: 'Web & Mobile',
        backend: 'Backend',
        infra: 'Infra & DevOps',
      },
      columns: [
        {
          title: 'Web & Mobile',
          items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        },
        {
          title: 'Backend',
          items: ['Node.js', 'NestJS', 'Laravel', 'PostgreSQL', 'REST API'],
        },
        {
          title: 'Infra & DevOps',
          items: ['Docker', 'GitHub Actions', 'Vercel', 'Linux', 'Monitoring'],
        },
      ],
    },
    en: {
      title: 'Stack',
      subtitle: 'Technologies I use in production — no hype, all battle-tested.',
      categories: {
        web_mobile: 'Web & Mobile',
        backend: 'Backend',
        infra: 'Infra & DevOps',
      },
      columns: [
        {
          title: 'Web & Mobile',
          items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        },
        {
          title: 'Backend',
          items: ['Node.js', 'NestJS', 'Laravel', 'PostgreSQL', 'REST API'],
        },
        {
          title: 'Infra & DevOps',
          items: ['Docker', 'GitHub Actions', 'Vercel', 'Linux', 'Monitoring'],
        },
      ],
    },
  },
  academyPreview: {
    it: {
      title: 'Academy',
      subtitle: 'Insegno quello che costruisco.',
      intro: 'Da studente a docente. Nella stessa aula.',
      cta: 'Scopri i corsi',
      courseLabel: 'Corso 2025/26',
    },
    en: {
      title: 'Academy',
      subtitle: 'I teach what I build.',
      intro: 'From student to teacher. In the same classroom.',
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
