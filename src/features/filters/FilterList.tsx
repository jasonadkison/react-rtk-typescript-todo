import React from 'react';
import { connect } from 'react-redux';

import FilterButton from './FilterButton';
import { VisibilityFilter } from './filter.model';
import { setVisibilityFilter } from './filters.slice';

interface FilterListProps {
  activeFilter: number;
  changeFilter: (filter: number) => void;
}

const FilterList: React.FC<FilterListProps> = ({ activeFilter, changeFilter }) => {
  return (
    <div className="filters">
      <FilterButton
        active={activeFilter === VisibilityFilter.ALL}
        filter={VisibilityFilter.ALL}
        handleChange={changeFilter}
      />
      <FilterButton
        active={activeFilter === VisibilityFilter.COMPLETED}
        filter={VisibilityFilter.COMPLETED}
        handleChange={changeFilter}
      />
      <FilterButton
        active={activeFilter === VisibilityFilter.ACTIVE}
        filter={VisibilityFilter.ACTIVE}
        handleChange={changeFilter}
      />
    </div>
  );
};

export default connect(
  (state: { filter: number }) => ({ activeFilter: state.filter }),
  { changeFilter: setVisibilityFilter }
)(FilterList);
