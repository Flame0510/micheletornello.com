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
    tech: ['React', 'Next.js', 'TypeScript', 'ESP8266', 'IoT'],
    content: {
      it: {
        title: 'REC Security',
        subtitle: 'Sito vetrina + prototipo sistema sirene domotiche custom su ESP8266',
        overview: 'REC Security è un progetto personale composto da due parti: un sito vetrina sviluppato in React/Next.js, e un esperimento hardware con sirene domotiche custom basate su microcontrollore ESP8266. Il sistema di allarme è rimasto a livello prototipale — il sito è live su recsecurity.it.',
        challenge: [
          'Progettare un sito vetrina professionale per un\'azienda di sicurezza, con focus su chiarezza e affidabilità visiva.',
          'Sul lato hardware: esplorare la fattibilità di un sistema di allerta IoT low-cost basato su ESP8266, con comunicazione via Wi-Fi e controllo remoto delle sirene.',
          'Il prototipo hardware non è mai arrivato in produzione — il progetto si è fermato alla fase di sperimentazione.',
        ],
        solution: [
          { label: 'Sito', description: 'React + Next.js, design orientato alla fiducia e alla chiarezza' },
          { label: 'Hardware', description: 'ESP8266 come microcontrollore principale, sirene controllate via GPIO, OTA update' },
          { label: 'Stato', description: 'Sito live su recsecurity.it — prototipo sirene completato ma non deployato in produzione' },
        ],
        results: [
          { metric: 'Sito', value: 'Live su recsecurity.it' },
          { metric: 'Prototipo IoT', value: 'Completato in lab, non in produzione' },
        ],
        lesson: 'Un buon sito da solo non basta per validare un prodotto hardware. Il vero collo di bottiglia non era il codice — era la catena di distribuzione e certificazione del device fisico.',
      },
      en: {
        title: 'REC Security',
        subtitle: 'Landing site + custom IoT siren prototype on ESP8266',
        overview: 'REC Security is a personal project with two parts: a landing site built in React/Next.js, and a hardware experiment with custom IoT sirens based on the ESP8266 microcontroller. The alarm system remained at prototype stage — the website is live at recsecurity.it.',
        challenge: [
          'Design a professional landing site for a security company, focused on clarity and visual trustworthiness.',
          'On the hardware side: explore the feasibility of a low-cost IoT alert system based on ESP8266, with Wi-Fi communication and remote siren control.',
          'The hardware prototype never reached production — the project stopped at the experimentation phase.',
        ],
        solution: [
          { label: 'Site', description: 'React + Next.js, trust-oriented design' },
          { label: 'Hardware', description: 'ESP8266 microcontroller, GPIO-controlled sirens, OTA update' },
          { label: 'Status', description: 'Site live at recsecurity.it — IoT prototype complete but not in production' },
        ],
        results: [
          { metric: 'Website', value: 'Live at recsecurity.it' },
          { metric: 'IoT Prototype', value: 'Completed in lab, not in production' },
        ],
        lesson: 'A good website alone is not enough to validate a hardware product. The real bottleneck was not the code — it was the physical device distribution and certification chain.',
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
    tech: ['Nuxt 3', 'Node.js', 'PostgreSQL', 'Tailwind'],
    content: {
      it: {
        title: 'Cashbee',
        subtitle: 'Piattaforma di cashback e marketing digitale per PMI',
        overview: 'Startup Lab — suite di strumenti (cashback, gestionale, advertising, CRM) per digitalizzare le piccole imprese. App online, sviluppo in standby.',
        challenge: ['Creazione di un motore di cashback modulare.', 'Integrazione di sistemi di pagamento e CRM.', 'Scalabilità per gestire flussi di transazioni elevati.'],
        solution: [
          { label: 'Stack', description: 'Nuxt 3, Node.js, PostgreSQL' },
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
          { label: 'Stack', description: 'Nuxt 3, Node.js, PostgreSQL' },
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
