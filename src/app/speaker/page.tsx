import type { Metadata } from 'next';
import SpeakerPageClient from './SpeakerPageClient';

export const metadata: Metadata = {
  title: 'Speaker | Michele Tornello',
  description: 'Michele Tornello come speaker tecnico: talk su architetture software, React Native e prodotti digitali. Disponibile per conferenze, università e community tech.',
  openGraph: {
    title: 'Speaker | Michele Tornello',
    description: 'Michele Tornello come speaker tecnico: talk su architetture software, React Native e prodotti digitali.',
    url: 'https://micheletornello.com/speaker',
    siteName: 'Michele Tornello',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Speaker | Michele Tornello' }],
  },
  alternates: {
    canonical: 'https://micheletornello.com/speaker',
  },
};

export default function SpeakerPage() {
  return <SpeakerPageClient />;
}
