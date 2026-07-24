import { useState } from 'react';
import { ArrowUpRight, Check, ChevronDown, Github } from 'lucide-react';
import type { PortfolioProject } from '../data/portfolio';

interface ProjectCardProps {
  project: PortfolioProject;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const detailsId = `${project.id}-details`;
  const visual = (
    <>
      <img src={project.image} alt={project.imageAlt} loading="lazy" />
      <span className="project-status">{project.status}</span>
      {project.liveUrl && (
        <span className="project-visual-action">Open live project <ArrowUpRight aria-hidden="true" /></span>
      )}
    </>
  );

  return (
    <article className={`project-card project-card--${project.accent}`}>
      {project.liveUrl ? (
        <a
          className="project-visual"
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open the ${project.title} live project`}
        >
          {visual}
        </a>
      ) : (
        <div className="project-visual">{visual}</div>
      )}

      <div className="project-content">
        <div className="project-topline">
          <span className="project-kicker">{project.kicker}</span>
          <span className="project-number">/0{index + 1}</span>
        </div>

        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <p className="project-role"><span>My role</span>{project.role}</p>

        <div className="evidence-list" aria-label="Project evidence">
          {project.evidence.map((item) => (
            <span key={item}><Check aria-hidden="true" /> {item}</span>
          ))}
        </div>

        <div className="project-stack" aria-label="Technologies used">
          {project.stack.map((technology) => <span key={technology}>{technology}</span>)}
        </div>

        <div className="project-actions">
          <button
            type="button"
            className="text-button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            aria-controls={detailsId}
          >
            {expanded ? 'Hide case study' : 'Read case study'}
            <ChevronDown className={expanded ? 'rotate-180' : ''} aria-hidden="true" />
          </button>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="icon-text-link">
              <Github aria-hidden="true" /> GitHub
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="icon-text-link">
              Live <ArrowUpRight aria-hidden="true" />
            </a>
          )}
        </div>

        <div id={detailsId} className={`project-details ${expanded ? 'project-details--open' : ''}`}>
          <div className="project-detail-grid">
            <div>
              <span className="detail-label">The problem</span>
              <p>{project.problem}</p>
            </div>
            <div>
              <span className="detail-label">What I did</span>
              <ol>
                {project.approach.map((step) => <li key={step}>{step}</li>)}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
