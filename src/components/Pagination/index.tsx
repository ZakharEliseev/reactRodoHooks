import { INDEX_SHIFT } from '@/models/constants';
import { TodoPaginatorProps } from '@/models/types';

import classes from './index.module.scss';

export const Pagination = ({ totalPages, currentPage, onSetCurrentPage }: TodoPaginatorProps) => {
  const pages: number[] = Array.from({ length: totalPages }, (_: unknown, index: number) => index + INDEX_SHIFT);
  return (
    <div className={classes.todoPaging}>
      {pages.map((page: number) => (
        <button
          className={currentPage === page ? classes.activeButton : ''}
          key={page}
          onClick={(): void => onSetCurrentPage(page)}>
          {page}
        </button>
      ))}
    </div>
  );
};
