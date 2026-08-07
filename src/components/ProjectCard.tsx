import { useState } from 'react';
import {
  ArrowUpRight,
  BrainCircuit,
  Check,
  ChevronDown,
  FileSearch,
  Github,
  Link2,
  ListChecks,
  MessageSquareMore,
  PanelsTopLeft,
  Plane,
  ShoppingCart,
} from 'lucide-react';
import type { PortfolioProject, ProjectIcon } from '../data/portfolio';

interface ProjectCardProps {
  project: PortfolioProject;
  index: number;
}

const iconMap: Record<ProjectIcon, typeof BrainCircuit> = {
  tasks: ListChecks,
  brain: BrainCircuit,
  chat: MessageSquareMore,
  portfolio: PanelsTopLeft,
  flight: Plane,
  link: Link2,
  resume: FileSearch,
  commerce: ShoppingCart,
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const detailsId = `${project.id}-details`;
  const ProjectIcon = iconMap[project.icon];
  const detailLabel = project.status === 'Concept' ? 'Planned approach' : 'Implementation';

  return (
    <article className={`project-card project-card--${project.accent}`}>
      <div className="project-visual">
        {project.image ? (
          <img
            src={project.image}
            alt={project.imageAlt ?? ''}
            loading="lazy"
            decoding="async"
            width="1200"
            height="675"
          />
        ) : (
          <div className="project-visual-placeholder" aria-hidden="true">
            <span><ProjectIcon /></span>
            <strong>{project.visualLabel}</strong>
          </div>
        )}
        <span className={`project-status project-status--${project.status.toLowerCase()}`}>{project.status}</span>
      </div>

      <div className="project-content">
        <div className="project-topline">
          <span className="project-kicker">{project.kicker}</span>
          <span className="project-number" aria-hidden="true">/{String(index + 1).padStart(2, '0')}</span>
        </div>

        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <p className="project-role"><span>Role</span>{project.role}</p>

        <ul className="evidence-list" aria-label={`${project.title} highlights`}>
          {project.highlights.map((item) => (
            <li key={item}><Check aria-hidden="true" /> {item}</li>
          ))}
        </ul>

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
          >
            {expanded ? 'Hide details' : 'View details'}
            <ChevronDown className={expanded ? 'rotate-180' : ''} aria-hidden="true" />
          </button>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="icon-text-link"
              aria-label={`View ${project.title} source on GitHub`}
            >
              <Github aria-hidden="true" /> Source
            </a>
          )}
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
        </div>

        <div
          id={detailsId}
          className={`project-details ${expanded ? 'project-details--open' : ''}`}
          aria-hidden={!expanded}
        >
          <div className="project-details-inner">
            <div className="project-detail-grid">
              <div>
                <span className="detail-label">Problem</span>
                <p>{project.problem}</p>
              </div>
              <div>
                <span className="detail-label">{detailLabel}</span>
                <ol>
                  {project.approach.map((step) => <li key={step}>{step}</li>)}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
