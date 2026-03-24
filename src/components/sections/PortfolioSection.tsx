'use client';
import { useLang } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

interface LocalizedString {
  it: string;
  en: string;
}

interface PortfolioProject {
  id: string;
  title: string;
  sector: LocalizedString;
  description: LocalizedString;
  tech: string[];
  target: string[];
  link: string;
}

interface StartupProject {
  id: string;
  title: string;
  status: string;
  tech: string;
  description: LocalizedString;
  target: string[];
}

function GammaCard({ project, lang }: { project: PortfolioProject; lang: 'it' | 'en' }) {
  return (
    <div className="pGamma_card group">
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
          className="pGamma_link text-[var(--color-text)] hover:text-[var(--color-brand)] transition-colors"
        >
          ↗ {project.link.replace('https://', '').replace('www.', '')}
        </a>
      </footer>
    </div>
  );
}

function StartupCard({ project, lang }: { project: StartupProject; lang: 'it' | 'en' }) {
  return (
    <div className="pGamma_card opacity-80" style={{ borderColor: 'rgba(184, 115, 51, 0.2)' }}>
      <header className="pGamma_header">
        <span className="pGamma_id">{project.id}</span>
        <span className="pGamma_status" style={{ color: '#707070', fontFamily: 'var(--font-jetbrains-mono)' }}>
          {project.status}
        </span>
      </header>
      
      <div className="pGamma_content">
        <h3 className="pGamma_title">{project.title}</h3>
        <div className="pGamma_sector" style={{ color: 'var(--color-brand)', fontSize: '0.8rem', letterSpacing: '0.05em' }}>
          STACK: {project.tech}
        </div>
        <p className="pGamma_description">{project.description[lang]}</p>
      </div>

      <footer className="pGamma_footer">
        <div className="pGamma_target_wrapper">
          <span className="pGamma_label">TARGET:</span>
          <div className="pGamma_badges">
            {project.target.map((t: string) => (
              <span key={t} className="pGamma_badge">[{t}]</span>
            ))}
          </div>
        </div>
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
        {/* LIVE PROJECTS */}
        <header className="pGamma_section_header">
          <h2 className="pGamma_section_title">
            // {lang === 'it' ? 'portfolio_live' : 'live_portfolio'} 
            <span className="pGamma_counter">[{t.items.length.toString().padStart(2, '0')}]</span>
          </h2>
        </header>

        <div className="pGamma_grid">
          {t.items.map((project: PortfolioProject) => (
            <GammaCard key={project.id} project={project} lang={lang} />
          ))}
        </div>

        {/* SEPARATOR */}
        <div style={{ height: '4rem' }} />

        {/* STARTUP LAB */}
        <header className="pGamma_section_header">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <h2 className="pGamma_section_title" style={{ color: 'var(--color-brand)' }}>
              {t.startupLab.title}
            </h2>
            <p style={{ 
              fontSize: '0.9rem', 
              color: 'var(--text-dim)', 
              fontFamily: 'var(--font-mono)',
              opacity: 0.7 
            }}>
              {t.startupLab.subtitle}
            </p>
          </div>
        </header>

        <div className="pGamma_grid">
          {t.startupLab.items.map((project: StartupProject) => (
            <StartupCard key={project.id} project={project} lang={lang} />
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
            TOTAL OPERATIONS: {t.items.length + t.startupLab.items.length} · SYSTEM STATUS: OPTIMAL
          </div>
        </footer>
      </div>
    </section>
  );
}
