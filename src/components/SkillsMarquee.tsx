import { skillGroups } from '../data/portfolio';

interface SkillsMarqueeProps {
  selectedCategories?: string[];
}

export default function SkillsMarquee({ selectedCategories = [] }: SkillsMarqueeProps) {
  const visibleGroups = selectedCategories.length
    ? skillGroups.filter((group) => selectedCategories.includes(group.id))
    : skillGroups;

  return (
    <div className="skill-listing">
      <p className="sr-only" role="status">
        {visibleGroups.length} {visibleGroups.length === 1 ? 'skill area' : 'skill areas'} shown
      </p>
      {visibleGroups.map((group) => (
        <article className="skill-row" key={group.id} aria-labelledby={`skill-${group.id}-title`}>
          <div className="skill-row-heading">
            <h3 id={`skill-${group.id}-title`}>{group.label}</h3>
            <p>{group.description}</p>
          </div>
          <ul className="skill-items" aria-label={`${group.label} tools and methods`}>
            {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </article>
      ))}
    </div>
  );
}
