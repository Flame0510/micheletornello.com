import type { Metadata } from 'next';
import { Geist, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: '400',
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
        className={`${geistSans.variable} ${instrumentSerif.variable} font-sans antialiased bg-background text-text-main`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
