# CLAUDE.md — AI Collaboration Guide

This file is read automatically by Claude Code at the start of every session.
It describes the project, the conventions, and standing rules for AI-assisted work.

---

## Project Overview

Personal portfolio and professional identity site for Michele Tornello.
Stack: Next.js 16 App Router, React 19, TypeScript, SCSS + Tailwind v4, Framer Motion, GSAP.
Deployed on Vercel (`michele-tornellos-projects`, user `flame0510`).

---

## Critical Standing Rules

**NEVER commit or push without explicit instruction from the user.**
The user will always say "commit" or "push" explicitly. Until then, only edit files.

---

## Key Architectural Decisions

### Server vs Client components
- Pages default to React Server Components (RSC).
- Client logic lives in co-located `*PageClient.tsx` files.
- Data files in `src/lib/` have NO `'use client'` directive — they are safe to import from both server and client contexts.
- Never add `'use client'` to a file in `src/lib/`. If you need client-only state in a data file, create a new component instead.

### Turbopack boundary rule
Named exports from `'use client'` files cannot be statically imported in server components under Turbopack. If you need a constant used by both a server page and a client component, put it in `src/lib/` (no directive). See `enterprise-data.ts` as the canonical example.

### Lazy Singleton for runtime resources
`src/lib/email.ts` uses a lazy singleton for Resend. The reason: Next.js collects page data at build time, and Resend throws if instantiated with an empty API key. Always use `getResend()` — never `new Resend(...)` at module level.

### Environment variables
All configurable values live in `src/lib/config.ts`. Do not scatter `process.env.*` calls across components. The config object is the single source of truth. Add new env vars to both `config.ts` and `.env.example`.

### i18n
Language is `'it'` or `'en'`, controlled by `LanguageContext`. All UI strings go in `src/lib/translations.ts`. The `useLang()` hook gives access to `lang` and `setLang`.

---

## Code Conventions

### Language
All code, comments, variable names, function names, and documentation must be in English.
User-facing content strings (Italian text shown in the UI) are the only exception.

### CSS namespacing
Every component has a prefix for its CSS classes:
- `shw_` — showcases page
- `lab_` — lab page
- `pGamma_` — proof-of-work section (homepage)
- `entG_` — enterprise section
- `chiB_` — chi sono section
- `credStrip_` — credential marquee
- `press-card` — press section cards
- `proc_` — process section
- `ck_` — cookie consent

Never use generic class names without a prefix. Add new prefixes per component.

### SCSS breakpoints (defined in `globals.scss`)
```scss
$mobile:    "max-width: 768px"
$tablet:    "max-width: 1024px"
$mobile-md: "max-width: 600px"
$mobile-sm: "max-width: 560px"
$mobile-xs: "max-width: 480px"
```

### GoF patterns in use
- Lazy Singleton: `getResend()` in `email.ts`
- DRY / Single Source of Truth: shared data in `src/lib/*.ts`
- Strategy: `isNavActive()` in `Navbar.tsx`

---

## Data Files Reference

| File | Contents |
|---|---|
| `src/lib/config.ts` | All env-derived config (GA ID, email, WhatsApp, site URL) |
| `src/lib/data.ts` | Contact info, social links, portfolio metadata |
| `src/lib/translations.ts` | All bilingual (IT/EN) UI strings |
| `src/lib/case-studies.ts` | Portfolio case study data |
| `src/lib/showcases-data.ts` | Showcases grid cards |
| `src/lib/lab-data.ts` | Lab project cards (status, category, repo/live URLs) |
| `src/lib/press-data.ts` | Press/media mentions with optional URL |
| `src/lib/speaker-data.tsx` | Speaker page bio, topics, credentials |
| `src/lib/enterprise-data.ts` | Enterprise sector tag list |

---

## Lab Projects (`src/lib/lab-data.ts`)

Current projects:
- **Olympus** (AI, IN DEV) — OpenClaw management and visualization system
- **Keeper** (AI, BETA) — Personal AI narrative engine
- **Gitemmuort** (DEV_TOOL, EXPLORING) — Dead git branch cleanup tool
- **Snake Neon** (GAME, COMPLETED) — Neon snake game on Vercel
- **Haunted House** (3D, COMPLETED) — 3D interactive scene at `/haunted-house`
- **Stardew Cross-Save** (TOOL, COMPLETED) — Save file cross-platform tool

Status types: `'IN DEV' | 'BETA' | 'EXPLORING' | 'PAUSED' | 'COMPLETED'`
Category types: `'AI' | 'TOOL' | 'GAME' | '3D' | 'DEV_TOOL'`

---

## Vercel Deployment

- Scope: `michele-tornellos-projects`
- CLI user: `flame0510`
- Auth: GitHub OAuth (do not use email/password)

To re-link after cloning:
```bash
vercel link  # select michele-tornellos-projects > micheletornello-com
```

---

## Build Notes

- `npm run build` must pass with zero errors before any commit.
- The SCSS `@import "tailwindcss"` deprecation warning is expected — Tailwind v4 does not yet support `@use`. Do not suppress it or attempt to migrate.
- `whatsappNumber` was removed from `data.ts` — use `contact.whatsappUrl` instead.

---

## What NOT to do

- Do not add `'use client'` to files in `src/lib/`
- Do not call `new Resend(...)` at module level — always use `getResend()`
- Do not hardcode the GA ID, contact email, or WhatsApp URL — use `process.env.NEXT_PUBLIC_*`
- Do not write comments in Italian — English only
- Do not commit or push without explicit user instruction
- Do not create `*.md` documentation files unless explicitly asked
- Do not add features or abstractions beyond what was requested
