export type LabStatus = 'IN DEV' | 'BETA' | 'EXPLORING' | 'PAUSED' | 'COMPLETED';
export type LabCategory = 'AI' | 'TOOL' | 'GAME' | '3D' | 'DEV_TOOL';

export interface LabProject {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  status: LabStatus;
  category: LabCategory;
  repoUrl?: string;
  liveUrl?: string;
}

export const labProjects: LabProject[] = [
  {
    id: 'LAB-001',
    name: 'Olympus',
    tagline: 'UI alternativa per OpenClaw',
    description:
      'Dashboard di gestione e visualizzazione per istanze OpenClaw. Estende le API ufficiali con automazione workflow, board Kanban, chat diretta con gli agenti e orchestrazione multi-agent in un\'interfaccia unificata.',
    stack: ['Next.js', 'TypeScript', 'OpenClaw API', 'Tailwind'],
    status: 'IN DEV',
    category: 'AI',
  },
  {
    id: 'LAB-002',
    name: 'Keeper',
    tagline: 'AI Narrative Engine',
    description:
      'Master AI per campagne RPG. Supporta qualsiasi livello di complessità — dalle scelte semplici narrative alle regole complete di D&D. Multiplayer locale e fisico: niente dadi, niente fogli, solo storia.',
    stack: ['Next.js', 'TypeScript', 'AI'],
    status: 'BETA',
    category: 'AI',
  },
  {
    id: 'LAB-003',
    name: 'Gitemmuort',
    tagline: 'Terminale Git in napoletano',
    description:
      'Wrapper CLI per Git con comandi in dialetto napoletano. Alias rapidi, automazioni e un po\' di personalità per chi fa commit anche sotto il sole di Napoli.',
    stack: ['Shell', 'Bash'],
    status: 'EXPLORING',
    category: 'DEV_TOOL',
    repoUrl: 'https://github.com/Flame0510/Gitemmuort',
  },
  {
    id: 'LAB-004',
    name: 'Snake Neon',
    tagline: 'Snake arcade con architettura GoF',
    description:
      'Snake classico con estetica neon, costruito in vanilla JS ES6 con pattern State, Observer e Factory. Zero dipendenze, Canvas 2D puro. Un esperimento di architettura pulita su un gioco semplice.',
    stack: ['JavaScript', 'Canvas 2D', 'HTML', 'CSS'],
    status: 'COMPLETED',
    category: 'GAME',
    repoUrl: 'https://github.com/Flame0510/snake-neon',
    liveUrl: 'https://snake-neon-hazel.vercel.app',
  },
  {
    id: 'LAB-005',
    name: 'Haunted House',
    tagline: 'Scena 3D interattiva con Three.js',
    description:
      'Casa stregata renderizzata in tempo reale con Three.js. Illuminazione dinamica, ombre, geometrie custom e animazioni. 30+ commit di iterazioni su shading e atmosfera.',
    stack: ['Three.js', 'JavaScript', 'SCSS', 'WebGL'],
    status: 'COMPLETED',
    category: '3D',
    repoUrl: 'https://github.com/Flame0510/haunted-house-ThreeJs',
    liveUrl: 'https://micheletornello.com/haunted-house',
  },
  {
    id: 'LAB-006',
    name: 'Stardew Cross-Save',
    tagline: 'Sync dei salvataggi Stardew Valley cross-platform',
    description:
      'Tool Python per sincronizzare i salvataggi di Stardew Valley tra PC, Mac e Steam Deck via cloud storage. Multi-piattaforma, con release versionate fino alla v2.1.1.',
    stack: ['Python', 'Shell', 'Batch'],
    status: 'COMPLETED',
    category: 'TOOL',
    repoUrl: 'https://github.com/Flame0510/Stardew-Valley-Cross-Save-Tool',
  },
];
