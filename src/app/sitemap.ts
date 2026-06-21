import { MetadataRoute } from 'next'
import { caseStudies } from '@/lib/case-studies'

export default function sitemap(): MetadataRoute.Sitemap {
  const portfolioRoutes = caseStudies.map((cs) => ({
    url: `https://micheletornello.com/portfolio/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: 'https://micheletornello.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://micheletornello.com/speaker',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://micheletornello.com/academy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://micheletornello.com/showcases',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://micheletornello.com/lab',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://micheletornello.com/privacy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...portfolioRoutes,
  ]
}
