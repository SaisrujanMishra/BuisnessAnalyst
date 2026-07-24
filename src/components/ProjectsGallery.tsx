import { useMemo, useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/portfolio';
import ProjectCard from './ProjectCard';

interface ProjectsGalleryProps {
  preview?: boolean;
}

const categories = ['All', 'Product', 'Data / ML', 'Full stack', 'Real-time', 'Portfolio'] as const;

export default function ProjectsGallery({ preview = false }: ProjectsGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All');
  const [query, setQuery] = useState('');

  const visibleProjects = useMemo(() => {
    const source = preview ? projects.filter((project) => project.featured).slice(0, 2) : projects;
    const normalizedQuery = query.trim().toLowerCase();

    return source.filter((project) => {
      const matchesCategory = activeCategory === 'All' || project.categories.includes(activeCategory);
      const searchable = [project.title, project.kicker, project.summary, ...project.stack].join(' ').toLowerCase();
      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [activeCategory, preview, query]);

  return (
    <section className="section-block" aria-labelledby={preview ? 'selected-work-title' : 'project-gallery-title'}>
      <div className="page-shell">
        <div className="section-intro section-intro--split">
          <div>
            <p className="eyebrow">{preview ? 'Selected work' : 'Project library'}</p>
            <h2 id={preview ? 'selected-work-title' : 'project-gallery-title'}>
              {preview ? 'Built around a real user need.' : 'Evidence before decoration.'}
            </h2>
          </div>
          <p>
            Each case study separates the problem, the implementation, and the evidence so a reviewer can
            understand the work without guessing.
          </p>
        </div>

        {!preview && (
          <div className="project-toolbar">
            <div className="filter-row" aria-label="Filter projects by category">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={activeCategory === category ? 'filter-chip filter-chip--active' : 'filter-chip'}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>
            <label className="project-search">
              <Search aria-hidden="true" />
              <span className="sr-only">Search projects</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by skill or project"
                type="search"
              />
            </label>
          </div>
        )}

        <div className="project-list" aria-live="polite">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <div className="empty-state">
            <p>No project matches that filter yet.</p>
            <button type="button" className="text-button" onClick={() => { setActiveCategory('All'); setQuery(''); }}>
              Clear filters
            </button>
          </div>
        )}

        {preview && (
          <Link className="section-link" to="/projects">
            View all case studies <ArrowRight aria-hidden="true" />
          </Link>
        )}
      </div>
    </section>
  );
}
