import { NextResponse } from 'next/server';
import { resend, escapeHtml } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Campi mancanti' }, { status: 400 });
    }

    const n = escapeHtml(String(name));
    const e = escapeHtml(String(email));
    const m = escapeHtml(String(message));

    await resend.emails.send({
      from: 'Sito micheletornello.com <onboarding@resend.dev>',
      to: 'micheletornello5@gmail.com',
      replyTo: email,
      subject: `Nuovo messaggio dal sito — ${n}`,
      html: `
        <div style="font-family: monospace; padding: 32px; max-width: 600px;">
          <p style="color: #2563EB; font-size: 12px; letter-spacing: 0.1em;">// NUOVO MESSAGGIO — micheletornello.com</p>
          <p><strong>Nome:</strong> ${n}</p>
          <p><strong>Email:</strong> <a href="mailto:${e}" style="color: #2563EB;">${e}</a></p>
          <hr style="border-color: #E5E7EB; margin: 24px 0;" />
          <p style="white-space: pre-wrap;">${m}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Errore invio' }, { status: 500 });
  }
}
