import { useState } from 'react';
import { ArrowDown, ArrowRight, Check, Copy, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import About from '../components/About';
import ProjectsGallery from '../components/ProjectsGallery';
import SkillsFilter from '../components/SkillsFilter';
import SkillsMarquee from '../components/SkillsMarquee';
import { contact } from '../data/portfolio';

export default function MainPage() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${contact.email}`;
    }
  };

  return (
    <div>
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-orb hero-orb--one" aria-hidden="true" />
        <div className="hero-orb hero-orb--two" aria-hidden="true" />
        <div className="page-shell hero-grid">
          <div className="hero-copy">
            <div className="availability-pill">
              <span aria-hidden="true" /> Open to business analyst and product roles
            </div>
            <p className="hero-kicker">Requirements · Data · Process · Delivery</p>
            <h1 id="hero-title">I turn requirements into clear workflows and working products.</h1>
            <p className="hero-description">
              I&apos;m Saisrujan Mishra, a VIT Computer Science graduate with full-stack and machine-learning
              project experience. My work covers requirements, user flows, implementation, and deployment.
            </p>

            <div className="role-fit-row" aria-label="Target roles">
              <span>Business Analyst</span>
              <span>Product Analyst</span>
              <span>Technical Analyst</span>
            </div>

            <div className="hero-actions">
              <Link to="/projects" className="primary-button">
                View projects <ArrowRight aria-hidden="true" />
              </Link>
              <a href={contact.resume} className="secondary-button" download>
                Download resume <ArrowDown aria-hidden="true" />
              </a>
            </div>

            <div className="hero-contact-row">
              <span><MapPin aria-hidden="true" /> Mumbai, India · Open to remote</span>
              <div className="hero-socials">
                <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github aria-hidden="true" /></a>
                <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin aria-hidden="true" /></a>
                <a href={`mailto:${contact.email}`} aria-label="Send email"><Mail aria-hidden="true" /></a>
                <button type="button" onClick={copyEmail} aria-label="Copy email address">
                  {emailCopied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
                  <span aria-live="polite">{emailCopied ? 'Copied' : 'Copy email'}</span>
                </button>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-card">
              <img
                src="/Sai2.webp"
                alt="Saisrujan Mishra"
                width="900"
                height="1200"
                fetchPriority="high"
                decoding="async"
              />
              <div className="portrait-label">
                <span>Current focus</span>
                <strong>Business and product analysis</strong>
              </div>
            </div>
            <div className="decision-card decision-card--top" aria-hidden="true">
              <span>01 / Define</span>
              <strong>Users · scope · acceptance criteria</strong>
            </div>
            <div className="decision-card decision-card--bottom" aria-hidden="true">
              <span>02 / Deliver</span>
              <strong>Models · APIs · interfaces</strong>
            </div>
            <div className="signal-card" aria-hidden="true">
              <span>Working principle</span>
              <strong>Show the evidence.</strong>
              <div>
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
        </div>

        <div className="page-shell proof-strip" aria-label="Profile highlights">
          <div><strong>2025</strong><span>VIT CSE graduate</span></div>
          <div><strong>8</strong><span>Project records</span></div>
          <div><strong>4</strong><span>Documented builds</span></div>
          <div><strong>2</strong><span>Cloud credentials</span></div>
        </div>
      </section>

      <About />
      <ProjectsGallery preview />

      <section className="section-block section-block--dark" aria-labelledby="skills-title">
        <div className="page-shell">
          <div className="section-intro section-intro--split">
            <div>
              <p className="eyebrow">Working toolkit</p>
              <h2 id="skills-title">Skills by work area</h2>
            </div>
            <p>Filter the tools I use for analysis, product work, development, and delivery.</p>
          </div>
          <SkillsFilter selectedFilters={selectedFilters} onFilterChange={setSelectedFilters} />
          <SkillsMarquee selectedCategories={selectedFilters} />
        </div>
      </section>

      <section className="section-block" aria-labelledby="next-title">
        <div className="page-shell next-panel">
          <div>
            <p className="eyebrow">Availability</p>
            <h2 id="next-title">Open to analyst roles and project work.</h2>
          </div>
          <div>
            <p>
              I&apos;m seeking Business Analyst, Product Analyst, and Technical Analyst opportunities where I can
              contribute across requirements, data, product, and delivery.
            </p>
            <a className="primary-button" href={`mailto:${contact.email}`}>
              Email me <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
