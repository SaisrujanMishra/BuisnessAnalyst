import { useState } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import About from '../components/About';
import ProjectsGallery from '../components/ProjectsGallery';
import SkillsFilter from '../components/SkillsFilter';
import SkillsMarquee from '../components/SkillsMarquee';
import { contact } from '../data/portfolio';

export default function MainPage() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  return (
    <div>
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-media">
          <img
            src="/Sai-hero.webp"
            srcSet="/Sai2.webp 900w, /Sai-hero.webp 1800w"
            sizes="(max-width: 760px) 125vw, 140vw"
            alt="Saisrujan Mishra standing in front of a textured wall"
            width="1800"
            height="2400"
            decoding="async"
          />
        </div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="page-shell hero-content">
          <h1 id="hero-title" className="hero-name">
            <span>Saisrujan</span>
            <span>Mishra<span className="hero-period">.</span></span>
          </h1>
          <h2 className="hero-headline">Business analysis.<br />Practical delivery.</h2>
          <p className="hero-description">
            Computer Science graduate working across requirements, data, and full-stack development.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="primary-button">
              View my work <ArrowUpRight aria-hidden="true" />
            </Link>
            <a href={contact.resume} className="hero-resume-link" download>
              Download resume <ArrowDown aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <About />
      <ProjectsGallery preview />

      <section className="section-block skills-section" aria-labelledby="skills-title">
        <div className="page-shell">
          <div className="section-intro" data-reveal>
            <p className="eyebrow">03 / Toolkit</p>
            <h2 id="skills-title">Tools for each stage of the work.</h2>
            <p>From analysis and requirements to the systems behind the interface.</p>
          </div>
          <SkillsFilter selectedFilters={selectedFilters} onFilterChange={setSelectedFilters} />
          <SkillsMarquee selectedCategories={selectedFilters} />
        </div>
      </section>
    </div>
  );
}
