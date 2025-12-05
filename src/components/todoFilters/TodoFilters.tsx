
import { FilterState } from '@/models/constants';

import classes from './TodoFilters.module.scss'

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

  export const TodoFilters: React.FC = () => {
  return (
    <div className={classes.todoFilters}>
      {
        filtersMap.map(({label, value}) => (
          <button key={value}>{label}</button>
        ))
      }
    </div>
  );
}