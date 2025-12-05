import { INDEX_SHIFT } from '@/models/constants';
import { TodoPaginatorProps } from '@/models/types';

import classes from './TodoPaginator.module.scss';

export const TodoPaginator = ({totalPages }: TodoPaginatorProps) => {
  const pages = Array.from({length: totalPages}, (_, index) => index + INDEX_SHIFT);
  return (
    <div className={classes.todoPaging}>
      {pages.map((page) => (
        <button>{page}</button>
      ))}
    </div>
  );
};
