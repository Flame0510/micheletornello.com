export interface Showcase {
  id: string;
  title: string;
  type: 'EDU-PLATFORM' | 'GAMIFIED' | 'TOOL';
  status: 'LIVE' | 'BETA' | 'IN DEV';
  stack: string[];
  description: string;
  context: string | null;
  liveUrl: string | null;
  repoUrl: string;
}

export const showcases: Showcase[] = [
  {
    id: 'SHW-001',
    title: 'AI Fundamentals',
    type: 'EDU-PLATFORM',
    status: 'LIVE',
    stack: ['Next.js 15', 'TypeScript', 'Tailwind v4', 'Monaco Editor'],
    description:
      'Piattaforma interattiva per imparare AI e Machine Learning dal principio. 15 capitoli strutturati con quizzes, lab Python scaricabili e risorse linkate. Niente teoria passiva — learning by doing.',
    context: 'Steve Jobs Academy',
    liveUrl: 'https://ai-fundamentals.micheletornello.com',
    repoUrl: 'https://github.com/MT-Showcases/ai-fundamentals-showcase',
  },
  {
    id: 'SHW-002',
    title: 'Operating Systems',
    type: 'EDU-PLATFORM',
    status: 'LIVE',
    stack: ['Next.js 15', 'TypeScript', 'Tailwind v4', 'AI Tutor'],
    description:
      'Showcase educativo sui Sistemi Operativi per la Steve Jobs Academy. Capitoli interattivi su OS, CPU, processi e memoria. Glossario ricercabile e AI tutor integrato per domande contestuali.',
    context: 'Steve Jobs Academy',
    liveUrl: 'https://operating-systems-showcase-kappa.vercel.app/',
    repoUrl: 'https://github.com/MT-Showcases/operating-systems-showcase',
  },
  {
    id: 'SHW-003',
    title: 'Design Pattern',
    type: 'GAMIFIED',
    status: 'LIVE',
    stack: ['Next.js 15', 'Redux Toolkit', 'Monaco Editor', 'Ant Design'],
    description:
      'Quiz game a squadre per imparare i GoF Design Pattern su codice reale. 200+ esempi da codebase di produzione, 4 categorie pattern, match viewer real-time su secondo schermo. Si impara riconoscendo, non memorizzando.',
    context: null,
    liveUrl: 'https://design-patterns-showcase.micheletornello.com/',
    repoUrl: 'https://github.com/Flame0510/development-design-pattern-showcase',
  },
  {
    id: 'SHW-004',
    title: 'Angular Showcase',
    type: 'EDU-PLATFORM',
    status: 'IN DEV',
    stack: ['Angular 18+', 'NgRx', 'RxJS', 'TypeScript'],
    description:
      'Piattaforma di apprendimento Angular con architettura a progressive disclosure. Modal espandibili, side panel, sandbox live — tutto senza mai lasciare la pagina. Copre Signals, HTTP, Forms e architettura modulare.',
    context: null,
    liveUrl: null,
    repoUrl: 'https://github.com/Flame0510/angular-showcase',
  },
];
