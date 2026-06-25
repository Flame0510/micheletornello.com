import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy & Cookie Policy — Michele Tornello',
  description: 'Informativa sul trattamento dei dati personali e utilizzo dei cookie su micheletornello.com',
};

export default function PrivacyPage() {
  return (
    <main style={{background:'var(--color-bg)', minHeight:'100vh', padding:'6rem 1.5rem', maxWidth:'800px', margin:'0 auto'}}>
      <p style={{fontFamily:'JetBrains Mono, monospace', fontSize:'0.7rem', letterSpacing:'0.15em', color:'var(--color-brand)', marginBottom:'2rem'}}>
        // LEGAL_DOCS · Ultimo aggiornamento: Giugno 2026
      </p>
      <h1 style={{fontFamily:'Instrument Serif, serif', fontSize:'clamp(2rem,4vw,3rem)', color:'var(--color-text)', marginBottom:'3rem', lineHeight:1.1}}>
        Privacy &<br/><em style={{color:'var(--color-brand)', fontStyle:'italic'}}>Cookie Policy</em>
      </h1>

      <div style={{fontFamily:'system-ui, sans-serif', fontSize:'0.95rem', color:'rgba(242,237,232,0.75)', lineHeight:1.8}}>

        <p>Benvenuto su micheletornello.com. La protezione dei tuoi dati personali è una priorità. Questa informativa spiega come vengono raccolti, utilizzati e protetti i tuoi dati durante la navigazione.</p>

        <h2 style={{fontFamily:'Instrument Serif, serif', color:'var(--color-text)', fontSize:'1.4rem', marginTop:'2.5rem', marginBottom:'1rem'}}>1. Titolare del Trattamento</h2>
        <p><strong style={{color:'var(--color-text)'}}>Michele Tornello</strong><br/>P.IVA: 06217000873<br/>Email: <a href="mailto:micheletornello5@gmail.com" style={{color:'var(--color-brand)'}}>micheletornello5@gmail.com</a></p>

        <h2 style={{fontFamily:'Instrument Serif, serif', color:'var(--color-text)', fontSize:'1.4rem', marginTop:'2.5rem', marginBottom:'1rem'}}>2. Dati Raccolti e Finalità</h2>
        <ul style={{paddingLeft:'1.5rem'}}>
          <li><strong style={{color:'var(--color-text)'}}>Form contatti:</strong> nome, email, messaggio — per rispondere alla tua richiesta.</li>
          <li><strong style={{color:'var(--color-text)'}}>Newsletter:</strong> indirizzo email — per inviarti aggiornamenti tecnici (solo previo consenso).</li>
          <li><strong style={{color:'var(--color-text)'}}>Google Analytics (GA4):</strong> dati di navigazione anonimizzati — solo previo tuo consenso esplicito.</li>
          <li><strong style={{color:'var(--color-text)'}}>Vercel Analytics:</strong> metriche di navigazione aggregate e anonime (pageview, paese, browser, OS) — senza cookie, senza dati personali identificabili, non richiede consenso.</li>
          <li><strong style={{color:'var(--color-text)'}}>Vercel Speed Insights:</strong> metriche di performance reale (Core Web Vitals: LCP, CLS, FID) raccolte in forma anonima e aggregata — senza cookie, senza dati personali identificabili, non richiede consenso.</li>
        </ul>

        <h2 style={{fontFamily:'Instrument Serif, serif', color:'var(--color-text)', fontSize:'1.4rem', marginTop:'2.5rem', marginBottom:'1rem'}}>3. Base Giuridica</h2>
        <ul style={{paddingLeft:'1.5rem'}}>
          <li><strong style={{color:'var(--color-text)'}}>Misure precontrattuali:</strong> risposta alle richieste via form contatti.</li>
          <li><strong style={{color:'var(--color-text)'}}>Consenso:</strong> newsletter e cookie analitici.</li>
          <li><strong style={{color:'var(--color-text)'}}>Legittimo interesse:</strong> sicurezza e funzionamento tecnico del sito.</li>
        </ul>

        <h2 style={{fontFamily:'Instrument Serif, serif', color:'var(--color-text)', fontSize:'1.4rem', marginTop:'2.5rem', marginBottom:'1rem'}}>4. Destinatari e Trasferimenti Extra-UE</h2>
        <ul style={{paddingLeft:'1.5rem'}}>
          <li><strong style={{color:'var(--color-text)'}}>Vercel Inc.</strong> (hosting + Vercel Analytics) — USA, aderisce al DPF EU-US.</li>
          <li><strong style={{color:'var(--color-text)'}}>Resend Inc.</strong> (form email) — USA, Clausole Contrattuali Standard (SCC).</li>
          <li><strong style={{color:'var(--color-text)'}}>Beehiiv Inc.</strong> (newsletter) — USA, SCC.</li>
          <li><strong style={{color:'var(--color-text)'}}>Google LLC</strong> (Analytics GA4) — USA, aderisce al DPF EU-US.</li>
        </ul>

        <h2 style={{fontFamily:'Instrument Serif, serif', color:'var(--color-text)', fontSize:'1.4rem', marginTop:'2.5rem', marginBottom:'1rem'}}>5. Periodo di Conservazione</h2>
        <ul style={{paddingLeft:'1.5rem'}}>
          <li><strong style={{color:'var(--color-text)'}}>Contatti:</strong> max 24 mesi dalla richiesta.</li>
          <li><strong style={{color:'var(--color-text)'}}>Newsletter:</strong> fino alla disiscrizione.</li>
          <li><strong style={{color:'var(--color-text)'}}>Analytics:</strong> 2 anni (impostazione GA4).</li>
        </ul>

        <h2 style={{fontFamily:'Instrument Serif, serif', color:'var(--color-text)', fontSize:'1.4rem', marginTop:'2.5rem', marginBottom:'1rem'}}>6. I Tuoi Diritti</h2>
        <p>Ai sensi del GDPR (Artt. 15-22) puoi richiedere accesso, rettifica, cancellazione, limitazione, portabilità o opporti al trattamento. Puoi revocare il consenso in qualsiasi momento.</p>
        <p>Scrivi a: <a href="mailto:micheletornello5@gmail.com" style={{color:'var(--color-brand)'}}>micheletornello5@gmail.com</a></p>
        <p>Hai diritto di proporre reclamo al <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" style={{color:'var(--color-brand)'}}>Garante per la Protezione dei Dati Personali</a>.</p>

        <h2 style={{fontFamily:'Instrument Serif, serif', color:'var(--color-text)', fontSize:'1.4rem', marginTop:'2.5rem', marginBottom:'1rem'}}>7. Cookie Policy</h2>
        <p>I cookie sono piccoli file salvati sul tuo browser. Questo sito utilizza:</p>
        <table style={{width:'100%', borderCollapse:'collapse', marginTop:'1rem', fontSize:'0.85rem'}}>
          <thead>
            <tr style={{borderBottom:'1px solid var(--border-accent)'}}>
              <th style={{textAlign:'left', padding:'0.5rem', color:'var(--color-brand)', fontFamily:'JetBrains Mono, monospace', fontWeight:'normal'}}>Nome</th>
              <th style={{textAlign:'left', padding:'0.5rem', color:'var(--color-brand)', fontFamily:'JetBrains Mono, monospace', fontWeight:'normal'}}>Tipo</th>
              <th style={{textAlign:'left', padding:'0.5rem', color:'var(--color-brand)', fontFamily:'JetBrains Mono, monospace', fontWeight:'normal'}}>Finalità</th>
              <th style={{textAlign:'left', padding:'0.5rem', color:'var(--color-brand)', fontFamily:'JetBrains Mono, monospace', fontWeight:'normal'}}>Durata</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{borderBottom:'1px solid rgba(242,237,232,0.05)'}}>
              <td style={{padding:'0.5rem', fontFamily:'JetBrains Mono, monospace', fontSize:'0.8rem'}}>mt_cookie_consent</td>
              <td style={{padding:'0.5rem'}}>Tecnico</td>
              <td style={{padding:'0.5rem'}}>Salva le tue preferenze cookie</td>
              <td style={{padding:'0.5rem'}}>1 anno</td>
            </tr>
            <tr style={{borderBottom:'1px solid rgba(242,237,232,0.05)'}}>
              <td style={{padding:'0.5rem', fontFamily:'JetBrains Mono, monospace', fontSize:'0.8rem'}}>_ga</td>
              <td style={{padding:'0.5rem'}}>Analitico (3ª parti)</td>
              <td style={{padding:'0.5rem'}}>ID utente univoco anonimo (Google)</td>
              <td style={{padding:'0.5rem'}}>2 anni</td>
            </tr>
            <tr style={{borderBottom:'1px solid rgba(242,237,232,0.05)'}}>
              <td style={{padding:'0.5rem', fontFamily:'JetBrains Mono, monospace', fontSize:'0.8rem'}}>_ga_G-6SQB1T42VN</td>
              <td style={{padding:'0.5rem'}}>Analitico (3ª parti)</td>
              <td style={{padding:'0.5rem'}}>Stato sessione GA4 (Google)</td>
              <td style={{padding:'0.5rem'}}>2 anni</td>
            </tr>
            <tr style={{borderBottom:'1px solid rgba(242,237,232,0.05)'}}>
              <td style={{padding:'0.5rem', fontFamily:'JetBrains Mono, monospace', fontSize:'0.8rem'}}>—</td>
              <td style={{padding:'0.5rem'}}>Analitico (1ª parte)</td>
              <td style={{padding:'0.5rem'}}>Vercel Analytics — cookieless, dati aggregati anonimi</td>
              <td style={{padding:'0.5rem'}}>Nessun cookie</td>
            </tr>
            <tr>
              <td style={{padding:'0.5rem', fontFamily:'JetBrains Mono, monospace', fontSize:'0.8rem'}}>—</td>
              <td style={{padding:'0.5rem'}}>Performance (1ª parte)</td>
              <td style={{padding:'0.5rem'}}>Vercel Speed Insights — Core Web Vitals anonimi</td>
              <td style={{padding:'0.5rem'}}>Nessun cookie</td>
            </tr>
          </tbody>
        </table>
        <p style={{marginTop:'1.5rem'}}>Puoi gestire o revocare il consenso in qualsiasi momento tramite il pulsante <strong style={{color:'var(--color-brand)', fontFamily:'JetBrains Mono, monospace'}}>[PRIVACY]</strong> in basso a sinistra.</p>
      </div>
    </main>
  );
}
