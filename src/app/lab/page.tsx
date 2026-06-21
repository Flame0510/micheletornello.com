import type { Metadata } from 'next';
import LabPageClient from './LabPageClient';

export const metadata: Metadata = {
  title: 'Lab | Michele Tornello',
  description:
    'Progetti sperimentali e side projects: AI, giochi, tool, grafica 3D. Olympus, Keeper, Snake Neon, Haunted House, Gitemmuort e altro.',
  openGraph: {
    title: 'Lab | Michele Tornello',
    description:
      'Progetti AI sperimentali — Olympus, Keeper e architetture emergenti in fase di ricerca e sviluppo.',
    url: 'https://micheletornello.com/lab',
    siteName: 'Michele Tornello',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Lab | Michele Tornello' }],
  },
  alternates: {
    canonical: 'https://micheletornello.com/lab',
  },
};

export default function LabPage() {
  return <LabPageClient />;
}
