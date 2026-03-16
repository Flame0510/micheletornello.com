export type Lang = 'it' | 'en';

export interface CaseStudy {
  slug: string;
  gradient: string;
  image: string;
  status?: string;
  tech: string[];
  impactNumber?: string;
  impactLabel?: string;
  content: {
    it: CaseStudyContent;
    en: CaseStudyContent;
  };
}

export interface CaseStudyContent {
  title: string;
  subtitle: string;
  overview: string;
  challenge: string[];
  solution: { label: string; description: string }[];
  results: { metric: string; value: string }[];
  lesson: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'rec-security',
    gradient: 'from-blue-600/20 to-cyan-500/20',
    image: '/rec-security.jpg',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Supabase', 'Vercel'],
    content: {
      it: {
        title: 'REC Security',
        subtitle: 'Gestione turni e presenze per 80 operatori di sicurezza privata',
        overview: 'REC Security gestiva turni e presenze di 80 operatori su fogli Excel condivisi via WhatsApp. Il coordinatore spendeva 4-6 ore a settimana solo per i report. I turni doppi erano un problema ricorrente — 2-3 volte al mese nessuno si presentava o due operatori arrivavano allo stesso presidio.',
        challenge: [
          'Il workflow esistente era un file Excel su Google Drive con 14 tab (una per zona), aggiornato a mano e screenshottato su WhatsApp. Ricostruire le conferme era lavoro investigativo.',
          'Budget contenuto, 3 mesi di timeline. Vincolo non negoziabile: gli operatori usano smartphone Android di fascia bassa con connessioni instabili. Niente app nativa.',
          'Ho scelto Next.js con App Router per un motivo concreto: API Routes + frontend in un unico deploy Vercel, SSR per velocità su device lenti, auth con PIN a 6 cifre via SMS. PostgreSQL su Supabase con Row Level Security per i permessi a tre livelli.',
          'Il problema più interessante: real-time sulla vista turni del coordinatore. Ho scelto Server-Sent Events invece di WebSockets — connessione unidirezionale, funziona su HTTP/1.1, nessun problema con proxy aziendali. Fallback: polling ogni 30 secondi. Risultato: il dot passa da giallo a verde in 1-2 secondi quando l\'operatore conferma.',
        ],
        solution: [
          { label: 'Stack', description: 'Next.js 14 (App Router), TypeScript, PostgreSQL su Supabase, Tailwind CSS, Vercel' },
          { label: 'Auth', description: 'NextAuth credentials + PIN a 6 cifre via SMS — zero password da ricordare' },
          { label: 'Real-time', description: 'Server-Sent Events per le conferme turni, fallback polling 30s' },
          { label: 'Calendario', description: 'Vista drag-and-drop settimanale per il coordinatore (dnd-kit), lista giornaliera per gli operatori' },
          { label: 'Report', description: 'PDF automatico a fine settimana con @react-pdf/renderer, generato server-side' },
          { label: 'Notifiche', description: 'Webhook verso bot Telegram dedicato — più affidabile delle PWA push' },
          { label: 'Scope cut', description: 'Niente GPS tracking (GDPR), niente gestione buste paga (fuori scope)' },
        ],
        results: [
          { metric: 'Tempo reportistica', value: 'Da 4-6 ore/sett. a ~20 min' },
          { metric: 'Turni scoperti o doppi', value: 'Da 2-3/mese a zero' },
          { metric: 'Onboarding operatori', value: '80 attivi in 3 settimane' },
          { metric: 'Uptime', value: '99.7% nei primi 6 mesi' },
        ],
        lesson: 'Ho sottovalutato quanto tempo avrei speso sulla UX mobile. Avevo progettato su desktop e poi adattato — errore classico. Dopo la prima settimana di test con gli operatori, ho rifatto la vista da zero: layout card-based, bottoni grandi, conferma in un tap. Se rifacessi il progetto, partirei mobile-first dal giorno zero.',
      },
      en: {
        title: 'REC Security',
        subtitle: 'Shift and attendance management for 80 private security operators',
        overview: 'REC Security managed shifts and attendance for 80 operators on Excel spreadsheets shared via WhatsApp. The coordinator spent 4-6 hours per week just on reports. Double-booked shifts were a recurring issue — 2-3 times a month, either nobody showed up or two operators arrived at the same site.',
        challenge: [
          'The existing workflow was a Google Drive Excel file with 14 tabs (one per zone), manually updated and screenshotted to WhatsApp. Reconstructing confirmations was detective work.',
          'Tight budget, 3-month timeline. Non-negotiable constraint: operators use low-end Android phones with spotty connections. No native app.',
          'I chose Next.js App Router for concrete reasons: API Routes + frontend in a single Vercel deploy, SSR for speed on slow devices, auth with 6-digit SMS PIN. PostgreSQL on Supabase with Row Level Security for three-tier permissions.',
          'Most interesting problem: real-time on the coordinator\'s shift view. I chose Server-Sent Events over WebSockets — unidirectional, works over HTTP/1.1, no corporate proxy issues. Fallback: 30-second polling. Result: the dot goes from yellow to green in 1-2 seconds when an operator confirms.',
        ],
        solution: [
          { label: 'Stack', description: 'Next.js 14 (App Router), TypeScript, PostgreSQL on Supabase, Tailwind CSS, Vercel' },
          { label: 'Auth', description: 'NextAuth credentials + 6-digit SMS PIN — zero passwords to remember' },
          { label: 'Real-time', description: 'Server-Sent Events for shift confirmations, 30s polling fallback' },
          { label: 'Calendar', description: 'Weekly drag-and-drop view for coordinator (dnd-kit), daily list for operators' },
          { label: 'Reporting', description: 'Automatic weekly PDF with @react-pdf/renderer, generated server-side' },
          { label: 'Notifications', description: 'Webhook to dedicated Telegram bot — more reliable than PWA push' },
          { label: 'Scope cut', description: 'No GPS tracking (GDPR), no payroll management (out of scope)' },
        ],
        results: [
          { metric: 'Reporting time', value: 'From 4-6 hrs/week to ~20 min' },
          { metric: 'Missed or double-booked shifts', value: 'From 2-3/month to zero' },
          { metric: 'Operator onboarding', value: '80 active in 3 weeks' },
          { metric: 'Uptime', value: '99.7% in the first 6 months' },
        ],
        lesson: 'I underestimated how much time I\'d spend on mobile UX. I designed on desktop and adapted — classic mistake. After the first week of testing with actual operators, I rebuilt the view from scratch: card-based layout, large buttons, one-tap confirmation. If I did this again, I\'d start mobile-first from day zero.',
      },
    },
  },
  {
    slug: 'kastalia',
    gradient: 'from-orange-500/20 to-red-500/20',
    image: '/kastalia.jpg',
    tech: ['Astro', 'React', 'Supabase', 'Stripe', 'Vercel'],
    impactNumber: '+40%',
    impactLabel: 'prenotazioni dirette',
    content: {
      it: {
        title: 'Casa Vacanze Kastalia',
        subtitle: 'Prenotazioni dirette per una struttura ricettiva siciliana — addio commissioni OTA',
        overview: 'Kastalia è una struttura a Siracusa con 8 appartamenti in centro storico. Il proprietario cedeva il 15-18% di commissioni a Booking.com e Airbnb su ogni prenotazione. Voleva un canale diretto per i clienti fedeli — ma non aveva competenze tecniche e doveva gestire tutto da solo.',
        challenge: [
          'Il proprietario aveva già un sito WordPress con un plugin di booking rotto. Nessuno prenotava da lì perché il calendario non era mai aggiornato: richieste per date occupate, risposte manuali, clienti frustrati che tornavano su Booking.',
          'Vincolo principale: non poteva smettere di usare Booking e Airbnb (ancora 80% del fatturato). Il sito diretto doveva convivere con le OTA senza double booking. Ho usato iCal sync: cron job ogni 15 minuti che importa i feed delle OTA, con buffer di 1 giorno sulle date adiacenti per coprire i ritardi di sincronizzazione (fino a 6 ore).',
          'Pagamenti con Stripe Checkout: 30% caparra alla prenotazione, saldo a 7 giorni dall\'arrivo, rimborso completo entro 14 giorni. Tutto gestito via webhook — conferma automatica, fattura autogenerata. Zero intervento manuale.',
          'La dashboard di gestione è stata la parte più impegnativa in termini di design. Il proprietario ha 58 anni, usa il telefono per WhatsApp e poco altro. Regola progettuale: ogni decisione partiva dalla domanda "si capisce in 3 secondi sul telefono?" Risultato: 4 sezioni, zero configurazioni.',
        ],
        solution: [
          { label: 'Stack', description: 'Astro (sito pubblico, statico, SEO), React (dashboard admin), Supabase, Stripe, Vercel' },
          { label: 'Sync calendario', description: 'Cron job 15 min, import iCal con ical.js da Booking e Airbnb, export iCal inverso per bloccare le date' },
          { label: 'Pagamenti', description: 'Stripe Checkout + webhooks. Caparra 30%, saldo automatico, rimborso full entro 14 gg' },
          { label: 'Dashboard', description: '4 sezioni: Oggi, Calendario, Messaggi, Guadagni. Progettata per non-tecnici su mobile' },
          { label: 'SEO', description: 'Sito statico con Astro: ottimizzazione meta, schema markup strutturato, Core Web Vitals green' },
        ],
        results: [
          { metric: 'Prenotazioni dirette', value: '23% del totale dopo 4 mesi' },
          { metric: 'Risparmio commissioni', value: '~€4.200/anno stimato' },
          { metric: 'Tempo gestione admin', value: 'Da 2 ore/giorno a 15 min' },
          { metric: 'Double booking', value: 'Zero in 8 mesi di operatività' },
        ],
        lesson: 'Progettare per utenti non tecnici è più difficile che progettare per sviluppatori. Ogni feature che aggiungevo sembrava "utile" ma rischiava di confondere Marco. Ho imparato a rimuovere prima di aggiungere — e a testare con l\'utente reale, non con la mia idea di come "un utente" userebbe il sistema.',
      },
      en: {
        title: 'Casa Vacanze Kastalia',
        subtitle: 'Direct bookings for a Sicilian vacation rental — no more OTA commissions',
        overview: 'Kastalia is a property in Syracuse with 8 apartments in the historic center. The owner was paying 15-18% commissions to Booking.com and Airbnb on every reservation. He wanted a direct channel for returning guests — but had no technical skills and had to manage everything alone.',
        challenge: [
          'The owner already had a WordPress site with a broken booking plugin. Nobody booked through it because the calendar was never updated: requests for occupied dates, manual replies, frustrated guests going back to Booking.',
          'Main constraint: he couldn\'t stop using Booking and Airbnb (still 80% of revenue). The direct site had to coexist with OTAs without double booking. I used iCal sync: a cron job every 15 minutes importing OTA feeds, with a 1-day buffer on adjacent dates to cover sync delays (up to 6 hours).',
          'Payments with Stripe Checkout: 30% deposit at booking, balance 7 days before arrival, full refund within 14 days. All managed via webhooks — automatic confirmation, self-generated invoice. Zero manual intervention.',
          'The management dashboard was the most demanding part in terms of design. The owner is 58, uses his phone for WhatsApp and little else. Design rule: every decision started with "does this make sense in 3 seconds on a phone?" Result: 4 sections, zero configurations.',
        ],
        solution: [
          { label: 'Stack', description: 'Astro (public site, static, SEO), React (admin dashboard), Supabase, Stripe, Vercel' },
          { label: 'Calendar sync', description: '15-min cron job, iCal import with ical.js from Booking and Airbnb, reverse iCal export to block dates' },
          { label: 'Payments', description: 'Stripe Checkout + webhooks. 30% deposit, automatic balance, full refund within 14 days' },
          { label: 'Dashboard', description: '4 sections: Today, Calendar, Messages, Revenue. Designed for non-technical users on mobile' },
          { label: 'SEO', description: 'Static site with Astro: meta optimization, structured schema markup, green Core Web Vitals' },
        ],
        results: [
          { metric: 'Direct bookings', value: '23% of total after 4 months' },
          { metric: 'Commission savings', value: '~€4,200/year estimated' },
          { metric: 'Admin management time', value: 'From 2 hrs/day to 15 min' },
          { metric: 'Double bookings', value: 'Zero in 8 months of operation' },
        ],
        lesson: 'Designing for non-technical users is harder than designing for developers. Every feature I added seemed "useful" but risked confusing the owner. I learned to remove before adding — and to test with the actual user, not my idea of how "a user" would use the system.',
      },
    },
  },
  {
    slug: 'cashbee',
    gradient: 'from-green-600/20 to-emerald-500/20',
    image: '/cashbee.jpg',
    status: 'standby',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind'],
    content: {
      it: {
        title: 'Cashbee',
        subtitle: 'Piattaforma di cashback e marketing digitale per PMI',
        overview: 'Startup Lab — suite di strumenti (cashback, gestionale, advertising, CRM) per digitalizzare le piccole imprese. App online, sviluppo in standby.',
        challenge: ['Creazione di un motore di cashback modulare.', 'Integrazione di sistemi di pagamento e CRM.', 'Scalabilità per gestire flussi di transazioni elevati.'],
        solution: [
          { label: 'Stack', description: 'Next.js, Node.js, PostgreSQL' },
          { label: 'Core', description: 'Motore di cashback e CRM integrato' },
        ],
        results: [
          { metric: 'Stato', value: 'Standby' },
          { metric: 'Focus', value: 'Digitalizzazione PMI' },
        ],
        lesson: 'La complessità di un sistema di cashback risiede nella gestione atomica delle transazioni e nella semplicità d\'uso per l\'esercente.',
      },
      en: {
        title: 'Cashbee',
        subtitle: 'Digital marketing and cashback platform for SMEs',
        overview: 'Startup Lab — suite of tools (cashback, management, advertising, CRM) to digitalize small businesses. App online, development on standby.',
        challenge: ['Building a modular cashback engine.', 'Payment and CRM systems integration.', 'Scalability for high transaction volumes.'],
        solution: [
          { label: 'Stack', description: 'Next.js, Node.js, PostgreSQL' },
          { label: 'Core', description: 'Integrated cashback engine and CRM' },
        ],
        results: [
          { metric: 'Status', value: 'Standby' },
          { metric: 'Focus', value: 'SME Digitalization' },
        ],
        lesson: 'The complexity of a cashback system lies in atomic transaction management and merchant ease of use.',
      },
    },
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((cs) => cs.slug === slug);
