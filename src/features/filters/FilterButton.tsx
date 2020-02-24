import React from 'react';
import { VisibilityFilter } from './filter.model';

interface FilterButtonProps {
  filter: number;
  handleChange: (filter: number) => void;
  active: boolean;
}

const FilterButton: React.FC<FilterButtonProps> = ({ handleChange, filter, active }) => {
  const text = VisibilityFilter[filter];
  return (
    <button
      onClick={() => handleChange(filter)}
      className={active ? 'active' : ''}
    >
      {text}
    </button>
  );
};

export default FilterButton;
