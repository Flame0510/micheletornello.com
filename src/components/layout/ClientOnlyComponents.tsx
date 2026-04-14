'use client';

import dynamic from 'next/dynamic';

export const PageLoader = dynamic(
  () => import('@/components/ui/PageLoader').then((m) => m.PageLoader),
  { ssr: false }
);

export const CustomCursor = dynamic(
  () => import('@/components/ui/CustomCursor').then((m) => m.CustomCursor),
  { ssr: false }
);

export const ContactTrigger = dynamic(
  () => import('@/components/ui/ContactTrigger'),
  { ssr: false }
);
