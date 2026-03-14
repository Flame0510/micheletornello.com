export type Lang = 'it' | 'en';

export interface CaseStudy {
  slug: string;
  gradient: string;
  tech: string[];
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
    tech: ['Astro', 'React', 'Supabase', 'Stripe', 'Vercel'],
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
    slug: 'ludelist',
    gradient: 'from-purple-600/20 to-pink-500/20',
    tech: ['PHP', 'Laravel', 'Vue.js', 'PostgreSQL'],
    content: {
      it: {
        title: 'Ludelist',
        subtitle: 'App per organizzare collezioni di giochi da tavolo e coordinare serate di gioco',
        overview: 'Nato come side project per un problema personale: avevo una collezione di 120+ giochi da tavolo e nessun modo decente per gestirla con il mio gruppo di gioco. BoardGameGeek esiste, ma è progettato per collezionisti ossessivi — non per coordinare chi porta cosa il venerdì sera.',
        challenge: [
          'Il dataset di giochi da tavolo è grande: BGG cataloga oltre 150.000 titoli. Costruire un proprio catalogo era fuori questione. Ho integrato l\'API pubblica di BGG (XMLAPI2) come fonte di verità per i dati dei giochi — titolo, immagine, numero giocatori, durata, meccaniche. Il problema: BGG non ha rate limiting documentato ma ti blocca se fai troppo scraping. Ho implementato un layer di caching su Redis con TTL di 7 giorni per i dati statici dei giochi e 24 ore per i rating.',
          'Il feature che ha richiesto più iterazioni: "chi è disponibile stasera?" Ho iniziato con un sistema di disponibilità settimanale, poi l\'ho semplificato in un semplice toggle "disponibile questa settimana" per ciascun membro del gruppo. Real-time con Laravel WebSockets (Pusher-compatible) — quando qualcuno si segna disponibile, tutti i membri del gruppo vedono l\'aggiornamento istantaneamente.',
          'Performance con collezioni grandi. Un utente con 500 giochi che filtra per numero di giocatori, tempo di gioco e meccaniche deve avere risposta in <200ms. Ho usato PostgreSQL con indici GIN per i campi array (meccaniche, categorie) e full-text search per il nome. La query più complessa — "giochi che possono giocare in 4, durata max 60 min, che non abbiamo giocato nelle ultime 3 settimane" — si risolve in ~40ms.',
        ],
        solution: [
          { label: 'Stack', description: 'Laravel (backend API), Vue.js 3 (frontend SPA), PostgreSQL, Redis per caching, Laravel WebSockets' },
          { label: 'Dati giochi', description: 'Integrazione BGG XMLAPI2 con caching Redis 7 giorni per dati statici, 24h per rating' },
          { label: 'Real-time', description: 'Laravel WebSockets per disponibilità e notifiche sessione' },
          { label: 'Search', description: 'PostgreSQL full-text search + indici GIN per array (meccaniche, categorie), query complesse <200ms' },
          { label: 'Feature principale', description: 'Wishlist condivisa per gruppo, tracking partite giocate, suggerimento automatico basato su disponibilità' },
        ],
        results: [
          { metric: 'Utenti attivi mensili', value: '340 (crescita organica)' },
          { metric: 'Sessioni organizzate', value: '1.200+ in 12 mesi' },
          { metric: 'Giochi tracciati', value: '8.500+ nella piattaforma' },
          { metric: 'Performance search', value: 'P95 < 180ms' },
        ],
        lesson: 'La differenza principale tra costruire per te e costruire per altri: le tue assunzioni non valgono. Avevo costruito l\'interfaccia basandomi su come io uso i giochi da tavolo — e avevo torto su quasi tutto. I primi utenti hanno usato l\'app in modi che non avevo previsto. Il feature più usato (la wishlist condivisa) non era nei requisiti originali — è emerso da una richiesta durante i beta test.',
      },
      en: {
        title: 'Ludelist',
        subtitle: 'App for organizing board game collections and coordinating game nights',
        overview: 'Born as a side project to solve a personal problem: I had a collection of 120+ board games and no decent way to manage it with my play group. BoardGameGeek exists, but it\'s designed for obsessive collectors — not for coordinating who brings what on Friday night.',
        challenge: [
          'The board game dataset is large: BGG catalogs over 150,000 titles. Building my own catalog was out of the question. I integrated the public BGG API (XMLAPI2) as the source of truth for game data — title, image, player count, duration, mechanics. Problem: BGG has no documented rate limiting but blocks you if you scrape too aggressively. I implemented a Redis caching layer with 7-day TTL for static game data and 24-hour TTL for ratings.',
          'The feature that required the most iteration: "who\'s available tonight?" I started with a weekly availability system, then simplified it to a "available this week" toggle for each group member. Real-time with Laravel WebSockets (Pusher-compatible) — when someone marks themselves available, all group members see the update instantly.',
          'Performance with large collections. A user with 500 games filtering by player count, play time, and mechanics needs a response in <200ms. I used PostgreSQL with GIN indexes for array fields (mechanics, categories) and full-text search for names. The most complex query — "games that 4 people can play, max 60 min, that we haven\'t played in the last 3 weeks" — resolves in ~40ms.',
        ],
        solution: [
          { label: 'Stack', description: 'Laravel (backend API), Vue.js 3 (frontend SPA), PostgreSQL, Redis for caching, Laravel WebSockets' },
          { label: 'Game data', description: 'BGG XMLAPI2 integration with Redis caching 7 days for static data, 24h for ratings' },
          { label: 'Real-time', description: 'Laravel WebSockets for availability and session notifications' },
          { label: 'Search', description: 'PostgreSQL full-text search + GIN indexes for arrays (mechanics, categories), complex queries <200ms' },
          { label: 'Key feature', description: 'Shared group wishlist, played games tracking, automatic suggestions based on availability' },
        ],
        results: [
          { metric: 'Monthly active users', value: '340 (organic growth)' },
          { metric: 'Sessions organized', value: '1,200+ in 12 months' },
          { metric: 'Games tracked', value: '8,500+ on the platform' },
          { metric: 'Search performance', value: 'P95 < 180ms' },
        ],
        lesson: 'The main difference between building for yourself and building for others: your assumptions don\'t hold. I built the interface based on how I use board games — and I was wrong about almost everything. The first users used the app in ways I hadn\'t anticipated. The most-used feature (shared wishlist) wasn\'t in the original requirements — it emerged from a request during beta testing.',
      },
    },
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find(cs => cs.slug === slug);
