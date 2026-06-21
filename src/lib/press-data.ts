import type { Lang } from './translations';

export interface PressItem {
  label: string;
  title: Record<Lang, string>;
  year: string;
  url?: string;
}

export const pressItems: PressItem[] = [
  {
    label: 'RTL 102.5',
    title: { it: 'Intervista in diretta nazionale', en: 'National live interview' },
    year: '2024',
    url: 'https://play.rtl.it/ospiti/1/michele-tornello-il-post-in-fabbrica-mercoledi-27-marzo-2024/',
  },
  {
    label: 'Università di Catania',
    title: { it: 'Speaker · Architetture Mobile', en: 'Speaker · Mobile Architectures' },
    year: '2024',
  },
  {
    label: 'TEDx Catania',
    title: { it: 'Staff organizzativo', en: 'Organizing Staff' },
    year: '2023',
  },
];
