import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY ?? '');

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Campi mancanti' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Sito micheletornello.com <onboarding@resend.dev>',
      to: 'micheletornello5@gmail.com',
      replyTo: email,
      subject: `Nuovo messaggio dal sito — ${name}`,
      html: `
        <div style="font-family: monospace; background: var(--color-bg); color: var(--color-text); padding: 32px; max-width: 600px;">
          <p style="color: var(--color-brand); font-size: 12px; letter-spacing: 0.1em;">// NUOVO MESSAGGIO — micheletornello.com</p>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: var(--color-brand);">${email}</a></p>
          <hr style="border-color: rgba(242,237,232,0.1); margin: 24px 0;" />
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Errore invio' }, { status: 500 });
  }
}
