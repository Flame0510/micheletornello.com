# micheletornello.com

Personal portfolio of Michele Tornello — System Architect, Product Engineer, and Technical Educator based in Catania, Italy.

Built with Next.js 16 (App Router), React 19, TypeScript, SCSS, Tailwind v4, Framer Motion, and GSAP.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.x (App Router, Turbopack) |
| Language | TypeScript 5 |
| Styling | SCSS modules + Tailwind CSS v4 |
| Animation | Framer Motion 12, GSAP 3 (ScrollTrigger) |
| Icons | Lucide React |
| Email | Resend v6 (transactional) |
| Analytics | Google Analytics 4 (GA4), consent-gated |
| Deployment | Vercel (`michele-tornellos-projects`) |
| Package manager | npm |

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, enterprise stats, services, portfolio, contact |
| `/showcases` | Full project showcase grid |
| `/lab` | Experimental side projects (AI, tools, games) |
| `/speaker` | Speaker page with booking form |
| `/academy` | Teaching / Steve Jobs Academy Catania |
| `/portfolio/[slug]` | Dynamic case study pages |
| `/privacy` | Privacy policy (GDPR compliant, GA4 section) |
| `/sitemap.xml` | Auto-generated sitemap |
| `/api/contact` | POST — contact form (Resend) |
| `/api/speaker` | POST — speaker booking form (Resend) |

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages + API routes
│   ├── api/
│   │   ├── contact/        # Contact form endpoint
│   │   └── speaker/        # Speaker booking endpoint
│   ├── lab/                # /lab page
│   ├── showcases/          # /showcases page
│   ├── speaker/            # /speaker page
│   ├── academy/            # /academy page
│   ├── portfolio/[slug]/   # Dynamic case study page
│   ├── privacy/            # Privacy policy
│   ├── layout.tsx          # Root layout (fonts, GA, cookie consent)
│   ├── page.tsx            # Homepage
│   ├── sitemap.ts          # Sitemap generator
│   └── globals.scss        # Global styles + SCSS variables
│
├── components/
│   ├── layout/             # Navbar, Footer, ClientOnlyComponents
│   ├── sections/           # Full-page sections (Hero, Enterprise, etc.)
│   ├── ui/                 # Reusable UI primitives
│   ├── academy/            # Academy-specific components
│   └── analytics/          # GoogleAnalytics component
│
├── hooks/                  # Custom React hooks
│   ├── useCookieConsent.ts
│   ├── useCounter.ts
│   ├── useMagneticEffect.ts
│   ├── useParallax.ts
│   └── useReducedMotion.ts
│
└── lib/                    # Data, config, utilities
    ├── config.ts           # Environment variable exports (single source of truth)
    ├── data.ts             # Site-wide static data (contact, social links)
    ├── translations.ts     # i18n strings (IT/EN)
    ├── case-studies.ts     # Portfolio case study data
    ├── showcases-data.ts   # Showcases grid data
    ├── lab-data.ts         # Lab projects data
    ├── press-data.ts       # Press/media mentions
    ├── speaker-data.tsx    # Speaker page data (topics, bio, credentials)
    ├── enterprise-data.ts  # Enterprise sector tags
    ├── email.ts            # Resend lazy singleton + HTML escape utility
    ├── animations.ts       # Shared Framer Motion variants
    ├── gsap.ts             # GSAP lazy loader
    └── LanguageContext.tsx # i18n context (IT/EN toggle)
```

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in all values before running locally.

```bash
cp .env.example .env.local
```

| Variable | Scope | Description |
|---|---|---|
| `RESEND_API_KEY` | Server | Resend API key for transactional email |
| `NEXT_PUBLIC_GA_ID` | Client | Google Analytics 4 Measurement ID (e.g. `G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Client+Server | Destination email for form submissions and UI links |
| `NEXT_PUBLIC_WHATSAPP_URL` | Client | WhatsApp deep-link URL (e.g. `https://wa.me/39XXXXXXXXXX`) |
| `NEXT_PUBLIC_SITE_URL` | Client | Production domain (e.g. `https://micheletornello.com`) |

All configurable values are exported from `src/lib/config.ts`. Never read `process.env` directly in components — always import from `config.ts` or use the values already pre-applied in data files.

---

## Development

```bash
# Install dependencies
npm install

# Run dev server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint
npm run lint
```

The dev server runs at `http://localhost:3000`.

---

## Architecture Notes

### Server / Client Split
Pages are React Server Components by default. Client interactivity is isolated in `*PageClient.tsx` files co-located with the page. Data files in `src/lib/` are pure TypeScript with no framework directives and can be imported anywhere.

### GoF Patterns Applied
- **Singleton (Lazy)** — `src/lib/email.ts` exports `getResend()`. Resend is instantiated only on first request to avoid crashing at build time when `RESEND_API_KEY` is undefined.
- **Single Source of Truth / DRY** — `CRED_ITEMS` in `page.tsx` defined once and spread twice for the marquee. `ENTERPRISE_SECTORS` in `enterprise-data.ts` shared between server (`page.tsx`) and client (`EnterpriseSection.tsx`) components.
- **Strategy** — `isNavActive()` in `Navbar.tsx` handles both anchor-based (`#section`) and path-based (`/page`) navigation generically.

### Styling Conventions
- SCSS variables in `globals.scss`: `$mobile`, `$tablet`, `$mobile-md`, `$mobile-sm`, `$mobile-xs`
- CSS custom properties: `--accent-primary`, `--accent-lab`, `--accent-green`, `--bg-base`, `--bg-card`, etc.
- Component CSS namespacing: `shw_` (showcases), `lab_` (lab), `pGamma_` (proof section), `entG_` (enterprise), `chiB_` (chi sono), `credStrip_` (marquee), `press-card` (press)

### Internationalization
The site is bilingual (IT/EN). Language is controlled by `LanguageContext`. UI text is in `src/lib/translations.ts`. All code, comments, and documentation are in English — only user-facing content strings are in Italian/English.

### Analytics & Privacy
GA4 is loaded only after the user explicitly accepts cookies via `CookieConsent`. The `useCookieConsent` hook stores consent in localStorage. If analytics consent is revoked, the page reloads to flush GA cookies.

---

## Deployment

The project is deployed on Vercel under the `michele-tornellos-projects` scope.

```bash
# Link to existing project (first time on a new machine)
vercel link

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

All environment variables must also be set in Vercel:
```bash
vercel env add RESEND_API_KEY
vercel env add NEXT_PUBLIC_GA_ID
vercel env add NEXT_PUBLIC_CONTACT_EMAIL
vercel env add NEXT_PUBLIC_WHATSAPP_URL
vercel env add NEXT_PUBLIC_SITE_URL
```
