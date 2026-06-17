import type { Metadata } from 'next';
import ShowcasesPageClient from './ShowcasesPageClient';

export const metadata: Metadata = {
  title: 'Showcases | Michele Tornello',
  description:
    'Piattaforme interattive open source per la didattica: AI Fundamentals, Design Pattern Trainer, Angular Showcase e Operating Systems. Costruiti per la Steve Jobs Academy e per la community.',
  openGraph: {
    title: 'Showcases | Michele Tornello',
    description:
      'Piattaforme interattive open source per la didattica tecnica. AI, Design Pattern, Angular, Sistemi Operativi.',
    url: 'https://micheletornello.com/showcases',
    siteName: 'Michele Tornello',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Showcases | Michele Tornello' }],
  },
  alternates: {
    canonical: 'https://micheletornello.com/showcases',
  },
};

export default function ShowcasesPage() {
  return <ShowcasesPageClient />;
}
