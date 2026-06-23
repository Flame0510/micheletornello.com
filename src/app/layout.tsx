import type { Metadata } from 'next';
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.scss';
import { LanguageProvider } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import { PageLoader, CustomCursor, ContactTrigger } from '@/components/layout/ClientOnlyComponents';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://micheletornello.com'),
  title: translations.meta.it.title,
  description: translations.meta.it.description,
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.png',
  },
  openGraph: {
    title: 'Michele Tornello — System Architect · Product Engineer · Tech Educator',
    description: 'Architetture scalabili, sviluppo web e mobile, formazione di nuovi sviluppatori.',
    url: 'https://micheletornello.com',
    siteName: 'Michele Tornello',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Michele Tornello — System Architect · Product Engineer · Tech Educator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Michele Tornello — System Architect · Product Engineer · Tech Educator',
    description: 'Architetture scalabili, sviluppo web e mobile, formazione di nuovi sviluppatori.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://micheletornello.com',
  },
};

import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import { CookieConsent } from '@/components/ui/CookieConsent';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <head>
        {/* Preload hero LCP background image */}
        <link rel="preload" href="/desk-setup.webp" as="image" fetchPriority="high" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${jetBrainsMono.variable} font-sans antialiased`}
        style={{ background: 'var(--bg-base)', color: 'var(--text-primary)' }}
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded focus:text-sm focus:font-semibold focus:bg-white focus:text-[var(--accent-primary)] focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
        >
          Salta al contenuto
        </a>
        <PageLoader />
        <CustomCursor />
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
          <ContactTrigger />
        </LanguageProvider>
        <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_ID ?? ''} />
        <CookieConsent />
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            zIndex: 9999,
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.4\'/%3E%3C/svg%3E")',
            opacity: 0.03,
            mixBlendMode: 'overlay',
          }}
          aria-hidden="true"
        />
      </body>
    </html>
  );
}
