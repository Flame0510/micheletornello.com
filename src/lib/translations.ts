export type Lang = 'it' | 'en';

export const translations = {
  meta: {
    it: {
      title: 'Michele Tornello — System Architect · Product Engineer',
      description:
        'System Architecture, Product Engineering e consulenza tecnica per startup e aziende. Docente Steve Jobs Academy in Sicilia.',
    },
    en: {
      title: 'Michele Tornello — System Architect · Product Engineer',
      description:
        'System Architecture, Product Engineering and tech consulting for startups and enterprises. Steve Jobs Academy instructor in Sicily.',
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
      subtitle: 'Decisioni tecniche critiche, esecuzione concreta, team che crescono.',
      items: [
        {
          title: 'Tech Lead & System Architecture',
          problem: 'Il tuo progetto ha bisogno di qualcuno che progetti il sistema e guidi le decisioni tecniche critiche — non solo di qualcuno che scriva codice.',
          description:
            'Progetto l\'architettura del sistema, scelgo lo stack, definisco i pattern e guido le decisioni tecnologiche che impattano il prodotto nel lungo periodo.',
          deliverables: ['Documento architetturale', 'Roadmap tecnica', 'Raccomandazioni su stack e pattern'],
          process: ['Discovery call', 'Analisi architettura esistente', 'Piano strutturato'],
          cta: 'Prenota una consulenza',
        },
        {
          title: 'Full-Stack Development',
          problem: 'Hai bisogno di esecuzione diretta e concreta — non di un\'altra consulenza che resta ferma sulla carta.',
          description:
            'Costruisco il prodotto dall\'inizio alla fine: frontend, backend, database, deploy. Codice strutturato, documentato e pronto a evolvere.',
          deliverables: ['Prodotto funzionante', 'Codice strutturato e documentato', 'Architettura scalabile'],
          process: ['Discovery call', 'Progettazione tecnica', 'Sviluppo iterativo con rilasci frequenti'],
          cta: 'Prenota una consulenza',
        },
        {
          title: 'Training & Formazione Aziendale',
          problem: 'Il tuo team ha gap tecnici su architettura software, React/React Native o sistemi moderni — e la formazione standard non è abbastanza.',
          description:
            'Formo il team con un percorso costruito sulle loro esigenze reali: architettura software, React, React Native, sistemi scalabili. Sessioni pratiche, non slide.',
          deliverables: ['Corso su misura per il team', 'Materiali didattici', 'Sessioni pratiche hands-on'],
          process: ['Assessment del team', 'Piano formativo personalizzato', 'Erogazione con esercizi reali'],
          cta: 'Prenota una consulenza',
        },
      ],
    },
    en: {
      title: 'Services',
      subtitle: 'Critical technical decisions, concrete execution, teams that grow.',
      items: [
        {
          title: 'Tech Lead & System Architecture',
          problem: 'Your project needs someone who designs the system and drives critical technical decisions — not just someone who writes code.',
          description:
            'I architect the system, choose the stack, define patterns, and lead the technology decisions that shape your product long-term.',
          deliverables: ['Architecture document', 'Technical roadmap', 'Stack and pattern recommendations'],
          process: ['Discovery call', 'Architecture analysis', 'Structured plan'],
          cta: 'Book a consultation',
        },
        {
          title: 'Full-Stack Development',
          problem: 'You need direct, concrete execution — not another consulting engagement that stays on paper.',
          description:
            'I build the product end to end: frontend, backend, database, deployment. Structured, documented code that\'s ready to scale.',
          deliverables: ['Working product', 'Structured and documented code', 'Scalable architecture'],
          process: ['Discovery call', 'Technical design', 'Iterative development with frequent releases'],
          cta: 'Book a consultation',
        },
        {
          title: 'Corporate Training',
          problem: 'Your team has technical gaps in software architecture, React/React Native, or modern systems — and generic training isn\'t cutting it.',
          description:
            'I train your team with a path built around their real needs: software architecture, React, React Native, scalable systems. Hands-on sessions, not slides.',
          deliverables: ['Custom team curriculum', 'Learning materials', 'Hands-on practical sessions'],
          process: ['Team assessment', 'Personalized training plan', 'Delivery with real exercises'],
          cta: 'Book a consultation',
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
      startupLab: {
        title: '// STARTUP LAB',
        subtitle: 'Prodotti indipendenti in sviluppo',
        items: [
          {
            id: 'SL-001',
            title: 'Cashbee',
            status: '// COMPLETED V1',
            tech: 'Nuxt 3',
            description: {
              it: 'Piattaforma di cashback e marketing digitale per PMI. Suite modulare per bar, ristoranti e piccole imprese.',
              en: 'Cashback and digital marketing platform for SMEs. Modular suite for bars, restaurants and small businesses.'
            },
            target: ['B2C', 'PMI']
          },
          {
            id: 'SL-002',
            title: 'Ludelist',
            status: '// IN DEVELOPMENT',
            tech: 'TBD',
            description: {
              it: 'Social network per videogiocatori con ricerca avanzata per gioco, piattaforma e regione. Visione: matchmaking automatico via API gaming.',
              en: 'Social network for gamers with advanced search by game, platform and region. Vision: automatic matchmaking via gaming APIs.'
            },
            target: ['B2C', 'Gaming']
          }
        ]
      },
      githubBanner: {
        text: 'Tutto il resto vive su GitHub.',
        cta: 'github.com/Flame0510'
      },
      items: [
        {
          id: 'PRJ-001',
          title: 'Watching Stars',
          sector: {
            it: 'Memorial Tech',
            en: 'Memorial Tech'
          },
          description: {
            it: 'Piattaforma di tributi digitali con NFC, QR Code e Stripe. Soluzione per onoranze funebri e famiglie.',
            en: 'Digital tribute platform with NFC, QR Code, and Stripe. Solution for funeral homes and families.'
          },
          tech: ['Next.js', 'AI', 'Stripe', 'NFC'],
          target: ['B2B', 'B2C'],
          link: 'https://www.watchingstars.it'
        },
        {
          id: 'PRJ-002',
          title: 'Memory Cloud',
          sector: {
            it: 'Memorial Tech · Gov-Tech',
            en: 'Memorial Tech · Gov-Tech'
          },
          description: {
            it: 'Software gestionale per la digitalizzazione dei servizi cimiteriali nella Pubblica Amministrazione. Multi-tenant, scalabile.',
            en: 'Management software for digitalizing cemetery services in Public Administration. Multi-tenant, scalable.'
          },
          tech: ['Next.js', 'Node.js', 'PostgreSQL'],
          target: ['B2G', 'PA'],
          link: 'https://memorycloud.it'
        },
      ],
    },
    en: {
      title: 'Portfolio',
      subtitle: 'Live projects and Startup Lab.',
      startupLab: {
        title: '// STARTUP LAB',
        subtitle: 'Independent products in development',
        items: [
          {
            id: 'SL-001',
            title: 'Cashbee',
            status: '// COMPLETED V1',
            tech: 'Nuxt 3',
            description: {
              it: 'Piattaforma di cashback e marketing digitale per PMI. Suite modulare per bar, ristoranti e piccole imprese.',
              en: 'Cashback and digital marketing platform for SMEs. Modular suite for bars, restaurants and small businesses.'
            },
            target: ['B2C', 'PMI']
          },
          {
            id: 'SL-002',
            title: 'Ludelist',
            status: '// IN DEVELOPMENT',
            tech: 'TBD',
            description: {
              it: 'Social network per videogiocatori con ricerca avanzata per gioco, piattaforma e regione. Visione: matchmaking automatico via API gaming.',
              en: 'Social network for gamers with advanced search by game, platform and region. Vision: automatic matchmaking via gaming APIs.'
            },
            target: ['B2C', 'Gaming']
          }
        ]
      },
      githubBanner: {
        text: 'Everything else lives on GitHub.',
        cta: 'github.com/Flame0510'
      },
      items: [
        {
          id: 'PRJ-001',
          title: 'Watching Stars',
          sector: {
            it: 'Memorial Tech',
            en: 'Memorial Tech'
          },
          description: {
            it: 'Piattaforma di tributi digitali con NFC, QR Code e Stripe. Soluzione per onoranze funebri e famiglie.',
            en: 'Digital tribute platform with NFC, QR Code, and Stripe. Solution for funeral homes and families.'
          },
          tech: ['Next.js', 'AI', 'Stripe', 'NFC'],
          target: ['B2B', 'B2C'],
          link: 'https://www.watchingstars.it'
        },
        {
          id: 'PRJ-002',
          title: 'Memory Cloud',
          sector: {
            it: 'Memorial Tech · Gov-Tech',
            en: 'Memorial Tech · Gov-Tech'
          },
          description: {
            it: 'Software gestionale per la digitalizzazione dei servizi cimiteriali nella Pubblica Amministrazione. Multi-tenant, scalabile.',
            en: 'Management software for digitalizing cemetery services in Public Administration. Multi-tenant, scalable.'
          },
          tech: ['Next.js', 'Node.js', 'PostgreSQL'],
          target: ['B2G', 'PA'],
          link: 'https://memorycloud.it'
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
      heroTitle: 'Steve Jobs Academy – Dove la teoria incontra il codice.',
      heroSubtitle: 'Formazione tecnica in presenza, in Sicilia.',
      intro:
        'Insegno sviluppo software e architettura dei sistemi alla Steve Jobs Academy. Lezioni in aula, esercitazioni pratiche, progetti reali. Più di 150 studenti formati, 3 sedi in Sicilia, 1 talk universitario e 2 workshop. Trasferisco l’esperienza concreta di chi costruisce software per professione.',
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
      heroTitle: 'Steve Jobs Academy – Where theory meets code.',
      heroSubtitle: 'In-person technical training, in Sicily.',
      intro:
        'I teach software development and system architecture at the Steve Jobs Academy. Classroom lectures, hands‑on exercises, real projects. Over 150 students trained, 3 locations in Sicily, 1 university talk and 2 workshops. I transfer the concrete experience of someone who builds software for a living.',
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
  academyStats: {
    it: {
      title: 'Impatto Reale',
      subtitle: 'Numeri che raccontano il percorso.',
      stats: [
        { value: '150+', label: 'Studenti formati' },
        { value: '3', label: 'Sedi attive' },
        { value: '500+', label: 'Ore di docenza' },
        { value: '1', label: 'Talk universitario' },
        { value: '2', label: 'Workshop organizzati' },
        { value: 'RTL', label: 'Intervista nazionale' },
      ],
      cta: 'Vuoi portare questa esperienza nella tua università o azienda?',
      ctaButton: 'Contattami',
    },
    en: {
      title: 'Real Impact',
      subtitle: 'Numbers that tell the journey.',
      stats: [
        { value: '150+', label: 'Students trained' },
        { value: '3', label: 'Active locations' },
        { value: '500+', label: 'Teaching hours' },
        { value: '1', label: 'University talk' },
        { value: '2', label: 'Workshops organized' },
        { value: 'RTL', label: 'National interview' },
      ],
      cta: 'Want to bring this experience to your university or company?',
      ctaButton: 'Get in touch',
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
