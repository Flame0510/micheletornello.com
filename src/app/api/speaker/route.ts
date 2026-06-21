import { NextResponse } from 'next/server';
import { getResend, escapeHtml } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const { name, organization, email, eventType, eventDate, city, topic, attendees, notes } = await req.json();

    if (!name || !email || !eventType) {
      return NextResponse.json({ error: 'Campi mancanti' }, { status: 400 });
    }

    const esc = (v: unknown) => escapeHtml(String(v ?? '—'));

    await getResend().emails.send({
      from: 'Speaker Request <onboarding@resend.dev>',
      to: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '',
      replyTo: email,
      subject: `Richiesta Speaker — ${esc(eventType)} — ${esc(name)}`,
      html: `
        <div style="font-family: monospace; padding: 32px; max-width: 600px; background: #080808; color: #E8E8E8;">
          <p style="color: #B87333; font-size: 12px; letter-spacing: 0.1em;">// RICHIESTA SPEAKER — micheletornello.com</p>
          <p><strong>Nome:</strong> ${esc(name)}</p>
          <p><strong>Organizzazione:</strong> ${esc(organization)}</p>
          <p><strong>Email:</strong> <a href="mailto:${esc(email)}" style="color: #B87333;">${esc(email)}</a></p>
          <hr style="border-color: rgba(242,237,232,0.1); margin: 24px 0;" />
          <p><strong>Tipo evento:</strong> ${esc(eventType)}</p>
          <p><strong>Data prevista:</strong> ${esc(eventDate)}</p>
          <p><strong>Città:</strong> ${esc(city)}</p>
          <p><strong>Topic preferito:</strong> ${esc(topic)}</p>
          <p><strong>Partecipanti stimati:</strong> ${esc(attendees)}</p>
          <hr style="border-color: rgba(242,237,232,0.1); margin: 24px 0;" />
          <p><strong>Note aggiuntive:</strong></p>
          <p style="white-space: pre-wrap;">${esc(notes)}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Speaker booking error:', error);
    return NextResponse.json({ error: 'Errore invio' }, { status: 500 });
  }
}
