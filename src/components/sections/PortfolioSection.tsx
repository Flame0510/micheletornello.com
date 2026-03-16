'use client';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const projects = [
  {
    id: 'MT-OP-001',
    num: '01',
    name: 'REC Security',
    tagline: 'Sito vetrina + prototipo sistema sirene IoT (ESP8266).',
    stack: ['IoT', 'Next.js', 'C++'],
    year: '2022',
    metric: 'HARDWARE+WEB',
    featured: true,
  },
  {
    id: 'MT-OP-005',
    num: '02',
    name: 'Watching Stars',
    tagline: 'Memoriali digitali B2C+B2B con AI, NFC e Stripe.',
    stack: ['Next.js', 'AI', 'Stripe'],
    year: '2024',
    metric: 'B2C+B2B',
  },
  {
    id: 'MT-OP-006',
    num: '03',
    name: 'Memory Cloud',
    tagline: 'Soluzione multi-tenant per PA e comuni.',
    stack: ['Next.js', 'Node.js'],
    year: '2024',
    metric: 'GOV-TECH',
  },
  {
    id: 'MT-OP-002',
    num: '04',
    name: 'Paradigma.me',
    tagline: 'Sviluppato durante gli anni in Paradigma SPA.',
    stack: ['Enterprise', 'System'],
    year: '2022',
    metric: 'PARADIGMA',
  },
];

const startupLab = [
  {
    id: 'LAB-001',
    name: 'Cashbee',
    url: 'cashbee.it',
    description: 'Piattaforma cashback e marketing digitale per PMI (bar, ristoranti, negozi). Visione: suite modulare per digitalizzare le piccole imprese ancora su carta.',
    stack: ['React Native', 'App'],
    status: '// COMPLETED V1',
    standby: true
  },
  {
    id: 'LAB-002',
    name: 'Ludelist',
    description: 'Social network per videogiocatori — trova un player per il tuo gioco in 3 passaggi: titolo, piattaforma, regione. Lista immediata + chat real-time. Visione futura: matchmaking automatico via API gaming.',
    stack: ['Web', 'Real-time'],
    status: '// STANDBY'
  }
];

function ProjectItem({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const isActive = useInView(ref, {
    margin: '-10% 0px -30% 0px',
    amount: 0.4,
  });

  return (
    <a
      ref={ref}
      href={`#${project.id}`}
      className="pA3_item"
      style={{
        boxShadow: isActive ? 'inset 2px 0 0 0 #B87333' : 'inset 0px 0 0 0 #B87333',
        backgroundColor: isActive ? 'rgba(184,115,51,0.02)' : 'transparent',
        transition: 'box-shadow 0.3s ease-out, background-color 0.3s ease-out, transform 0.4s cubic-bezier(0.23,1,0.32,1)',
        paddingLeft: '20px',
      }}
    >
      <div
        className="pA3_hover_code"
        style={{ opacity: undefined }} // reset CSS opacity — gestito dall'hover CSS
      >
        {project.id}
      </div>
      <div
        className="pA3_item_num"
        style={{ opacity: isActive ? 0.4 : 0.25, transition: 'opacity 0.3s ease-out' }}
      >
        {project.num}
      </div>
      <div className="pA3_item_content">
        <h4 className="pA3_item_name">{project.name}</h4>
        <p className="pA3_item_tagline">{project.tagline}</p>

        {/* Log line — appare solo quando attivo */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginTop: '8px',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.72rem',
            textTransform: 'uppercase',
            flexWrap: 'wrap',
            opacity: isActive ? 1 : 0,
            transform: isActive ? 'translateY(0)' : 'translateY(6px)',
            transition: 'opacity 0.3s ease-out 0.05s, transform 0.3s ease-out 0.05s',
            pointerEvents: 'none',
          }}
        >
          <span>
            <span style={{ opacity: 0.4, marginRight: '6px' }}>METRIC</span>
            <span style={{ color: '#B87333' }}>{project.metric}</span>
          </span>
          <span>
            <span style={{ opacity: 0.4, marginRight: '6px' }}>STACK</span>
            <span>{project.stack.join(' · ')}</span>
          </span>
          <span>
            <span style={{ opacity: 0.4, marginRight: '6px' }}>YEAR</span>
            <span style={{ color: '#B87333' }}>{project.year}</span>
          </span>
        </div>

        <div className="pA3_pills" style={{ marginTop: isActive ? '10px' : '10px' }}>
          {project.stack.map(t => (
            <span key={t} className="pA3_pill">{t}</span>
          ))}
        </div>
      </div>
      <div className="pA3_item_year">{project.year}</div>
    </a>
  );
}

export default function PortfolioSection() {
  const featured = projects[0];
  const list = projects.slice(1);

  return (
    <section id="lavori" className="pA3_container">
      <style>{`
        .pA3_container { background-color:#080808; color:#F2EDE8; padding:100px 0 60px; font-family:'JetBrains Mono',monospace; }
        .pA3_inner { max-width:1400px; margin:0 auto; padding:0 5%; }
        .pA3_header { display:flex; align-items:center; gap:15px; margin-bottom:80px; border-bottom:1px solid rgba(184,115,51,.2); padding-bottom:20px; }
        .pA3_title { font-size:1.1rem; text-transform:uppercase; letter-spacing:2px; color:#F2EDE8; margin:0; }
        .pA3_counter { color:#B87333; font-weight:700; }
        .pA3_featured { position:relative; border-left:4px solid #B87333; padding:40px 40px; background:rgba(184,115,51,.02); margin-bottom:80px; overflow:hidden; }
        .pA3_featured_watermark { position:absolute; bottom:-2rem; right:2rem; font-size:clamp(8rem,16vw,16rem); font-family:'Instrument Serif',serif; color:#B87333; opacity:.05; line-height:1; pointer-events:none; }
        .pA3_featured_label { font-size:.8rem; opacity:.6; margin-bottom:10px; }
        .pA3_featured_status { color:#B87333; font-size:.8rem; font-weight:800; margin-bottom:20px; }
        .pA3_featured_name { font-family:'Instrument Serif',serif; font-size:clamp(2.5rem,5vw,7rem); line-height:1; margin:20px 0 40px; font-style:italic; }
        .pA3_featured_log { display:flex; gap:30px; font-size:.85rem; text-transform:uppercase; flex-wrap:wrap; }
        .pA3_log_item { display:flex; flex-direction:column; gap:5px; }
        .pA3_log_label { opacity:.4; font-size:.7rem; }
        .pA3_log_value { color:#F2EDE8; }
        .pA3_log_accent { color:#B87333; }
        .pA3_list { display:flex; flex-direction:column; }
        .pA3_item { position:relative; display:grid; grid-template-columns:80px 1fr auto; align-items:center; padding:40px 0; border-bottom:1px solid rgba(242,237,232,.1); text-decoration:none; color:inherit; }
        .pA3_item:first-child { border-top:1px solid rgba(242,237,232,.1); }
        .pA3_item:hover { transform:translateX(-20px); }
        .pA3_item:hover .pA3_hover_code { opacity:1; }
        .pA3_item_num { font-family:'Instrument Serif',serif; font-style:italic; font-size:3.5rem; opacity:.25; transition:opacity .3s ease-out; }
        .pA3_item_content { display:flex; flex-direction:column; gap:8px; }
        .pA3_item_name { font-family:'Instrument Serif',serif; font-size:2.2rem; line-height:1.2; }
        .pA3_item_tagline { font-size:.9rem; opacity:.5; max-width:600px; }
        .pA3_pills { display:flex; gap:10px; flex-wrap:wrap; }
        .pA3_pill { font-size:.7rem; padding:2px 10px; border:1.5px solid #B87333; color:#B87333; text-transform:uppercase; border-radius:100px; background:transparent; }
        .pA3_item_year { font-size:1.2rem; color:#B87333; font-weight:600; }
        .pA3_hover_code { position:absolute; top:20px; right:0; font-size:.7rem; color:#B87333; opacity:0; transition:opacity .3s ease; pointer-events:none; }
        .pA3_footer { margin-top:100px; padding-top:40px; border-top:1px solid rgba(184,115,51,.3); text-align:center; }
        .pA3_footer_text { color:#B87333; opacity:.5; font-size:.8rem; letter-spacing:1px; }

        /* STARTUP LAB */
        .startupLab_container { margin-top: 120px; padding-top: 60px; border-top: 1px dashed rgba(184,115,51,0.2); }
        .startupLab_header { margin-bottom: 40px; }
        .startupLab_title { font-family: 'Instrument Serif', serif; font-size: 3rem; font-style: italic; color: #F2EDE8; margin-bottom: 10px; }
        .startupLab_headline { font-size: 0.9rem; color: #B87333; font-family: 'JetBrains Mono', monospace; opacity: 0.8; max-width: 500px; line-height: 1.6; }
        .startupLab_grid { display: grid; grid-template-cols: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
        .startupLab_card { position: relative; border: 1px dashed rgba(242,237,232,0.2); padding: 30px; background: rgba(242,237,232,0.02); transition: all 0.3s ease; }
        .startupLab_card:hover { border-color: #B87333; background: rgba(184,115,51,0.03); transform: translateY(-5px); }
        .startupLab_badge { position: absolute; top: 20px; right: 20px; font-size: 0.7rem; color: #B87333; font-weight: 800; }
        .startupLab_name { font-family: 'Instrument Serif', serif; font-size: 2rem; color: #F2EDE8; margin-bottom: 15px; }
        .startupLab_desc { font-size: 0.85rem; color: #F2EDE8; opacity: 0.6; line-height: 1.6; margin-bottom: 25px; min-height: 80px; }
        .startupLab_footer { display: flex; justify-content: space-between; align-items: flex-end; border-top: 1px solid rgba(242,237,232,0.1); padding-top: 15px; }
        .startupLab_stack { display: flex; gap: 8px; }
        .startupLab_pill { font-size: 0.65rem; color: #F2EDE8; opacity: 0.4; text-transform: uppercase; }
        .startupLab_url { font-size: 0.7rem; color: #B87333; opacity: 0.6; }
        @media(max-width:768px){ .pA3_item { grid-template-columns:1fr; gap:16px; padding-left:16px !important; } .pA3_item_num { display:none; } .pA3_featured { padding:40px 20px; } .startupLab_grid { grid-template-cols: 1fr; } }
      `}</style>

      <div className="pA3_inner">
        <header className="pA3_header">
          <h2 className="pA3_title">// selected_operations <span className="pA3_counter">[06]</span></h2>
        </header>

        {/* FEATURED */}
        <div className="pA3_featured">
          <div className="pA3_featured_watermark">01</div>
          <div className="pA3_featured_label">Featured Project [{featured.id}]</div>
          <div className="pA3_featured_status">// MISSION CRITICAL</div>
          <h3 className="pA3_featured_name">{featured.name}</h3>
          <div className="pA3_featured_log">
            <div className="pA3_log_item"><span className="pA3_log_label">METRIC</span><span className="pA3_log_accent">{featured.metric}</span></div>
            <div className="pA3_log_item"><span className="pA3_log_label">STACK</span><span className="pA3_log_value">{featured.stack.join(' · ')}</span></div>
            <div className="pA3_log_item"><span className="pA3_log_label">YEAR</span><span className="pA3_log_accent">{featured.year}</span></div>
          </div>
        </div>

        {/* LIST */}
        <div className="pA3_list">
          {list.map((p, i) => (
            <ProjectItem key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* STARTUP LAB */}
        <div className="startupLab_container">
          <header className="startupLab_header">
            <h3 className="startupLab_title">Startup Lab</h3>
            <p className="startupLab_headline">Idee che hanno trovato il mercato ma non (ancora) il momento giusto.</p>
          </header>

          <div className="startupLab_grid">
            {startupLab.map((lab) => (
              <div key={lab.id} className="startupLab_card" style={lab.standby ? { opacity: 0.8 } : {}}>
                <div className="startupLab_badge" style={lab.id === 'LAB-001' ? { color: '#B87333' } : {}}>{lab.status}</div>
                <h4 className="startupLab_name">{lab.name}</h4>
                <p className="startupLab_desc">{lab.description}</p>
                <div className="startupLab_footer">
                  <div className="startupLab_stack">
                    {lab.stack.map(s => <span key={s} className="startupLab_pill">{s}</span>)}
                  </div>
                  {lab.url && <span className="startupLab_url">{lab.url}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer className="pA3_footer">
          <div className="pA3_footer_text">TOTAL OPERATIONS: {projects.length} · PERIOD: 2022—{new Date().getFullYear()} · SYSTEM STATUS: OPTIMAL</div>
        </footer>
      </div>
    </section>
  );
}
