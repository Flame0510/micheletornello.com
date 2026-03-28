import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY || '');
  try {
    const { name, organization, email, eventType, eventDate, city, topic, attendees, notes } = await req.json();

    if (!name || !email || !eventType) {
      return NextResponse.json({ error: 'Campi mancanti' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Speaker Request <onboarding@resend.dev>',
      to: 'micheletornello5@gmail.com',
      replyTo: email,
      subject: `Richiesta Speaker — ${eventType} — ${name}`,
      html: `
        <div style="font-family: monospace; padding: 32px; max-width: 600px; background: #080808; color: #E8E8E8;">
          <p style="color: #B87333; font-size: 12px; letter-spacing: 0.1em;">// RICHIESTA SPEAKER — micheletornello.com</p>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Organizzazione:</strong> ${organization || '—'}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #B87333;">${email}</a></p>
          <hr style="border-color: rgba(242,237,232,0.1); margin: 24px 0;" />
          <p><strong>Tipo evento:</strong> ${eventType}</p>
          <p><strong>Data prevista:</strong> ${eventDate || '—'}</p>
          <p><strong>Città:</strong> ${city || '—'}</p>
          <p><strong>Topic preferito:</strong> ${topic || '—'}</p>
          <p><strong>Partecipanti stimati:</strong> ${attendees || '—'}</p>
          <hr style="border-color: rgba(242,237,232,0.1); margin: 24px 0;" />
          <p><strong>Note aggiuntive:</strong></p>
          <p style="white-space: pre-wrap;">${notes || '—'}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Speaker booking error:', error);
    return NextResponse.json({ error: 'Errore invio' }, { status: 500 });
  }
}
