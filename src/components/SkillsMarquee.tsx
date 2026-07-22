import { BarChart3, Braces, CloudCog, Workflow } from 'lucide-react';
import { skillGroups } from '../data/portfolio';

interface SkillsMarqueeProps {
  selectedCategories?: string[];
}

const icons = {
  analysis: BarChart3,
  product: Workflow,
  build: Braces,
  platform: CloudCog,
};

export default function SkillsMarquee({ selectedCategories = [] }: SkillsMarqueeProps) {
  const visibleGroups = selectedCategories.length
    ? skillGroups.filter((group) => selectedCategories.includes(group.id))
    : skillGroups;

  return (
    <div className="skill-grid" aria-live="polite">
      {visibleGroups.map((group, index) => {
        const Icon = icons[group.id];
        return (
          <article className="skill-card" key={group.id}>
            <div className="skill-card-heading">
              <span className="skill-icon"><Icon aria-hidden="true" /></span>
              <span className="skill-index">0{index + 1}</span>
            </div>
            <h3>{group.label}</h3>
            <p>{group.description}</p>
            <div className="skill-list">
              {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </article>
        );
      })}
    </div>
  );
}
