import { FilterState, INITIAL_PAGE } from '@/models/constants';
import { TodoFiltersProps } from '@/models/types';

import classes from './index.module.scss';

const filtersMap = [
  {
    label: 'All',
    value: FilterState.ALL,
  },
  {
    label: 'Active',
    value: FilterState.ACTIVE,
  },
  {
    label: 'Complete',
    value: FilterState.COMPLETE,
  },
];

export const Filters = ({ onSetActiveFilter, activeFilter }: TodoFiltersProps) => {
  return (
    <div className={classes.todoFilters}>
      {filtersMap.map(({ label, value }) => (
        <button
          className={activeFilter === value ? classes.activeButton : ''}
          key={value}
          title={label}
          onClick={(): void => {
            onSetActiveFilter(value);          }}>
          {label}
        </button>
      ))}
    </div>
  );
};
