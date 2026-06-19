import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY ?? '');

export const escapeHtml = (str: string): string =>
  str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
