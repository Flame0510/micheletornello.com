import type { Metadata } from 'next';
import { getCaseStudy } from '@/lib/case-studies';
import CaseStudyPageClient from './CaseStudyPageClient';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);

  if (!cs) {
    return {
      title: 'Portfolio | Michele Tornello',
    };
  }

  const title = cs.content.it.title;
  const subtitle = cs.content.it.subtitle;

  return {
    title: `${title} | Portfolio | Michele Tornello`,
    description: subtitle,
    openGraph: {
      title: `${title} | Portfolio | Michele Tornello`,
      description: subtitle,
      url: `https://micheletornello.com/portfolio/${slug}`,
      siteName: 'Michele Tornello',
      locale: 'it_IT',
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${title} | Michele Tornello` }],
    },
    alternates: {
      canonical: `https://micheletornello.com/portfolio/${slug}`,
    },
  };
}

export default function CaseStudyPage({ params }: Props) {
  return <CaseStudyPageClient params={params} />;
}
