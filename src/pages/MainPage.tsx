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
    await navigator.clipboard.writeText(contact.email);
    setEmailCopied(true);
    window.setTimeout(() => setEmailCopied(false), 1800);
  };

  return (
    <div>
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-orb hero-orb--one" aria-hidden="true" />
        <div className="hero-orb hero-orb--two" aria-hidden="true" />
        <div className="page-shell hero-grid">
          <div className="hero-copy">
            <div className="availability-pill">
              <span aria-hidden="true" /> Open to analyst, product, and technical roles
            </div>
            <p className="hero-kicker">Business analysis · Product thinking · Technical delivery</p>
            <h1 id="hero-title">Business analyst thinking, with the ability to ship.</h1>
            <p className="hero-description">
              I&apos;m Saisrujan Mishra, a VIT Computer Science graduate who turns ambiguous requirements into
              structured decisions, clear workflows, and working digital products.
            </p>

            <div className="role-fit-row" aria-label="Target roles">
              <span>Business Analyst</span>
              <span>Product Analyst</span>
              <span>Technical Analyst</span>
            </div>

            <div className="hero-actions">
              <Link to="/projects" className="primary-button">
                Explore my work <ArrowRight aria-hidden="true" />
              </Link>
              <a href={contact.resume} className="secondary-button" download>
                Download resume <ArrowDown aria-hidden="true" />
              </a>
            </div>

            <div className="hero-contact-row">
              <span><MapPin aria-hidden="true" /> Mumbai, India · Open to remote</span>
              <div className="hero-socials">
                <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github /></a>
                <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin /></a>
                <a href={`mailto:${contact.email}`} aria-label="Send email"><Mail /></a>
                <button type="button" onClick={copyEmail} aria-label="Copy email address">
                  {emailCopied ? <Check /> : <Copy />}
                  <span>{emailCopied ? 'Copied' : 'Copy email'}</span>
                </button>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Profile and working method">
            <div className="portrait-card">
              <img src="/Sai2.jpg" alt="Saisrujan Mishra" />
              <div className="portrait-label">
                <span>Currently exploring</span>
                <strong>Product & business analytics</strong>
              </div>
            </div>
            <div className="decision-card decision-card--top">
              <span>01 / Understand</span>
              <strong>Requirements · journeys · metrics</strong>
            </div>
            <div className="decision-card decision-card--bottom">
              <span>02 / Deliver</span>
              <strong>Insights · workflows · products</strong>
            </div>
            <div className="signal-card">
              <span>Working principle</span>
              <strong>Evidence before assumptions.</strong>
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
          <div><strong>4</strong><span>Product & data projects</span></div>
          <div><strong>2</strong><span>Cloud certifications</span></div>
          <div><strong>1</strong><span>Hybrid analyst-builder profile</span></div>
        </div>
      </section>

      <About />
      <ProjectsGallery preview />

      <section className="section-block section-block--dark" aria-labelledby="skills-title">
        <div className="page-shell">
          <div className="section-intro section-intro--split">
            <div>
              <p className="eyebrow">Working toolkit</p>
              <h2 id="skills-title">From question to shipped answer.</h2>
            </div>
            <p>
              A cross-functional toolkit for investigating the problem, documenting the decision, and building
              the solution. Filter it by the part of the workflow you care about.
            </p>
          </div>
          <SkillsFilter selectedFilters={selectedFilters} onFilterChange={setSelectedFilters} />
          <SkillsMarquee selectedCategories={selectedFilters} />
        </div>
      </section>

      <section className="section-block" aria-labelledby="next-title">
        <div className="page-shell next-panel">
          <div>
            <p className="eyebrow">Next opportunity</p>
            <h2 id="next-title">Looking for a team that values curious, structured problem-solving.</h2>
          </div>
          <div>
            <p>
              I&apos;m targeting business analyst, product analyst, technical analyst, and product-minded developer
              opportunities where I can learn quickly and contribute across functions.
            </p>
            <a className="primary-button" href={`mailto:${contact.email}`}>
              Start a conversation <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
