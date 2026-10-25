import { startTransition } from 'react';

const categories = [
  { id: 'analysis', label: 'Analysis' },
  { id: 'product', label: 'Product' },
  { id: 'build', label: 'Build' },
  { id: 'platform', label: 'Platform' },
];

interface SkillsFilterProps {
  selectedFilters: string[];
  onFilterChange: (filters: string[]) => void;
}

export default function SkillsFilter({ selectedFilters, onFilterChange }: SkillsFilterProps) {
  const selectCategory = (categoryId: string) => {
    startTransition(() => onFilterChange(selectedFilters.includes(categoryId) ? [] : [categoryId]));
  };

  return (
    <div className="skill-tabs" role="group" aria-label="Filter skills by working area">
      <button
        type="button"
        className={selectedFilters.length === 0 ? 'skill-tab skill-tab--active' : 'skill-tab'}
        onClick={() => startTransition(() => onFilterChange([]))}
        aria-pressed={selectedFilters.length === 0}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          type="button"
          key={category.id}
          onClick={() => selectCategory(category.id)}
          className={selectedFilters.includes(category.id) ? 'skill-tab skill-tab--active' : 'skill-tab'}
          aria-pressed={selectedFilters.includes(category.id)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
