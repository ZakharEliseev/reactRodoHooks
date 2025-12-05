import { FilterState } from '@/models/constants';
import { TodoFiltersProps } from '@/models/types';

import classes from './TodoFilters.module.scss';

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

export const TodoFilters = ({ onSetActiveFilter }: TodoFiltersProps) => {
  return (
    <div className={classes.todoFilters}>
      {filtersMap.map(({ label, value }) => (
        <button
          key={value}
          title={label}
          onClick={(): void => onSetActiveFilter(value)}>
          {label}
        </button>
      ))}
    </div>
  );
};
