import type { Metadata } from 'next';
import { Geist, Instrument_Serif, Playfair_Display } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import { PageLoader } from '@/components/ui/PageLoader';
import { CustomCursor } from '@/components/ui/CustomCursor';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: '400',
});

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: translations.meta.it.title,
  description: translations.meta.it.description,
  icons: {
    icon: '/logo-mt.jpg',
    shortcut: '/logo-mt.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${instrumentSerif.variable} ${playfairDisplay.variable} font-sans antialiased bg-background text-text-main`}
      >
        <PageLoader />
        <CustomCursor />
        <LanguageProvider>{children}</LanguageProvider>
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
