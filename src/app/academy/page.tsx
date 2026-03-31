import type { Metadata } from 'next';
import AcademyPageClient from './AcademyPageClient';

export const metadata: Metadata = {
  title: 'Academy | Michele Tornello',
  description: 'Formazione pratica in architetture software, React Native e sviluppo web. Michele Tornello insegna alla Steve Jobs Academy di Catania e forma developer con metodo enterprise.',
  openGraph: {
    title: 'Academy | Michele Tornello',
    description: 'Formazione pratica in architetture software, React Native e sviluppo web. Michele Tornello insegna alla Steve Jobs Academy di Catania.',
    url: 'https://micheletornello.com/academy',
    siteName: 'Michele Tornello',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Academy | Michele Tornello' }],
  },
  alternates: {
    canonical: 'https://micheletornello.com/academy',
  },
};

export default function AcademyPage() {
  return <AcademyPageClient />;
}
