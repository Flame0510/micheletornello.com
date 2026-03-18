'use client';
import { useLang } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

function GammaCard({ project, lang }: { project: any; lang: 'it' | 'en' }) {
  return (
    <div className="pGamma_card">
      <header className="pGamma_header">
        <span className="pGamma_id">{project.id}</span>
        <span className="pGamma_status">
          STATUS: <span className="pGamma_dot">●</span> LIVE
        </span>
      </header>
      
      <div className="pGamma_content">
        <h3 className="pGamma_title">{project.title}</h3>
        <div className="pGamma_sector">{project.sector[lang]}</div>
        <p className="pGamma_description">{project.description[lang]}</p>
      </div>

      <footer className="pGamma_footer">
        <div className="pGamma_target_wrapper">
          <span className="pGamma_label">TARGET_AUDIENCE:</span>
          <div className="pGamma_badges">
            {project.target.map((t: string) => (
              <span key={t} className="pGamma_badge">[{t}]</span>
            ))}
          </div>
        </div>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="pGamma_link"
        >
          ↗ {project.link.replace('https://', '')}
        </a>
      </footer>
    </div>
  );
}

export default function PortfolioSection() {
  const { lang } = useLang();
  const t = translations.portfolio[lang];

  return (
    <section id="lavori" className="pGamma_container">
      <div className="pGamma_inner">
        <header className="pGamma_section_header">
          <h2 className="pGamma_section_title">
            // {lang === 'it' ? 'portfolio_live' : 'live_portfolio'} 
            <span className="pGamma_counter">[{t.items.length.toString().padStart(2, '0')}]</span>
          </h2>
        </header>

        <div className="pGamma_grid">
          {t.items.map((project: any) => (
            <GammaCard key={project.id} project={project} lang={lang} />
          ))}
        </div>

        {/* GITHUB BANNER */}
        <div className="pA3_github_banner">
          <div className="pA3_github_text">{t.githubBanner.text}</div>
          <a href="https://github.com/Flame0510" target="_blank" rel="noopener noreferrer" className="pA3_github_link">
            → {t.githubBanner.cta}
          </a>
        </div>

        <footer className="pA3_summary_footer">
          <div className="pA3_summary_text">
            TOTAL OPERATIONS: {t.items.length} · SYSTEM STATUS: OPTIMAL
          </div>
        </footer>
      </div>
    </section>
  );
}
