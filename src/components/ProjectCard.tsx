import { useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import type { PortfolioProject } from '../data/portfolio';

interface ProjectCardProps {
  project: PortfolioProject;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const detailsId = `${project.id}-details`;
  const titleId = `${project.id}-title`;

  return (
    <article
      className={`project-entry${project.image ? '' : ' project-entry--concept'}`}
      aria-labelledby={titleId}
      data-reveal
    >
      {project.image && (
        <div className="project-media">
          <img
            src={project.image}
            alt={project.imageAlt ?? ''}
            loading="lazy"
            decoding="async"
            width="1200"
            height="675"
          />
        </div>
      )}

      <div className="project-content">
        <div className="project-topline">
          <span className="project-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          <span className="project-kicker">{project.kicker}</span>
          <span className={`project-status project-status--${project.status.toLowerCase()}`}>{project.status}</span>
        </div>

        <h3 id={titleId}>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>

        <ul className="project-stack" aria-label={`${project.title} technologies`}>
          {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>

        <div className="project-actions">
          <button
            type="button"
            className="text-button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            aria-controls={detailsId}
            aria-label={`${expanded ? 'Hide' : 'View'} ${project.title} details`}
          >
            {expanded ? 'Hide details' : 'View details'}
            <ChevronDown className={expanded ? 'rotate-180' : ''} aria-hidden="true" />
          </button>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="icon-text-link"
              aria-label={`Open ${project.title} live project`}
            >
              Live project <ArrowUpRight aria-hidden="true" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="icon-text-link"
              aria-label={`View ${project.title} source on GitHub`}
            >
              Source <ArrowUpRight aria-hidden="true" />
            </a>
          )}
        </div>

        <div
          id={detailsId}
          className={`project-details${expanded ? ' project-details--open' : ''}`}
          aria-hidden={!expanded}
        >
          <div className="project-details-inner">
            <div className="project-detail-grid">
              <div>
                <span className="detail-label">Role</span>
                <p>{project.role}</p>
              </div>
              <div>
                <span className="detail-label">Problem</span>
                <p>{project.problem}</p>
              </div>
              <div>
                <span className="detail-label">{project.status === 'Concept' ? 'Planned approach' : 'Implementation'}</span>
                <ol>
                  {project.approach.map((step) => <li key={step}>{step}</li>)}
                </ol>
              </div>
              <div>
                <span className="detail-label">{project.status === 'Concept' ? 'Planned scope' : 'Highlights'}</span>
                <ul>
                  {project.highlights.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
