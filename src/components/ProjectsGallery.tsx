import { startTransition, useDeferredValue, useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/portfolio';
import ProjectCard from './ProjectCard';

interface ProjectsGalleryProps {
  preview?: boolean;
}

const categories = ['All', 'Product', 'Data / ML', 'Backend', 'Full stack', 'Real-time', 'Portfolio'] as const;
const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

export default function ProjectsGallery({ preview = false }: ProjectsGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All');
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const GalleryHeading = preview ? 'h2' : 'h1';
  const source = preview ? featuredProjects : projects;
  const normalizedQuery = deferredQuery.trim().toLowerCase();
  const visibleProjects = source.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.categories.includes(activeCategory);
    const searchable = [project.title, project.kicker, project.summary, project.status, ...project.stack]
      .join(' ')
      .toLowerCase();
    return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
  });

  const resetFilters = () => {
    setQuery('');
    startTransition(() => setActiveCategory('All'));
  };

  return (
    <section className="section-block project-section" aria-labelledby={preview ? 'selected-work-title' : 'project-gallery-title'}>
      <div className="page-shell">
        <div className="section-intro" data-reveal>
          {preview && <p className="eyebrow">02 / Projects</p>}
          <GalleryHeading id={preview ? 'selected-work-title' : 'project-gallery-title'}>
            {preview ? 'Selected work' : 'Projects'}
          </GalleryHeading>
          <p>
            {preview
              ? 'Applications and research, from the first requirement to the finished build.'
              : 'Working applications, research, and clearly labelled system concepts.'}
          </p>
        </div>

        {!preview && (
          <>
            <div className="project-toolbar">
              <div className="filter-row" role="group" aria-label="Filter projects by category">
                {categories.map((category) => (
                  <button
                    type="button"
                    key={category}
                    className={activeCategory === category ? 'filter-chip filter-chip--active' : 'filter-chip'}
                    onClick={() => startTransition(() => setActiveCategory(category))}
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
                  placeholder="Search projects or tools"
                  type="search"
                />
              </label>
            </div>
            <p className="project-result-count" role="status">
              {visibleProjects.length} {visibleProjects.length === 1 ? 'project' : 'projects'} shown
            </p>
          </>
        )}

        <div
          className={preview ? 'project-list project-list--preview' : 'project-list'}
          aria-busy={query !== deferredQuery}
        >
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} index={projects.indexOf(project)} />
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <div className="empty-state">
            <p>No project matches that filter.</p>
            <button type="button" className="text-button" onClick={resetFilters}>Clear filters</button>
          </div>
        )}

        {preview && (
          <Link className="section-link" to="/projects">
            Explore all projects <ArrowRight aria-hidden="true" />
          </Link>
        )}
      </div>
    </section>
  );
}
