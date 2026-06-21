// Single source of truth for all environment-derived configuration.
// Client-safe values use NEXT_PUBLIC_ prefix.
// Never import process.env directly elsewhere — use this module.

export const config = {
  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://micheletornello.com',
  },
  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID ?? '',
  },
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '',
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? '',
  },
} as const;
