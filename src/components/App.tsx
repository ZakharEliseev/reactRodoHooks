import { ReactElement} from 'react';

import { Filters } from './Filters';
import { Form } from './Form';
import { List } from './List';
import { Pagination } from './Pagination';
import { useTodo } from './useTodo';

import classes from './App.module.scss';

export const App = (): ReactElement => {
  const { tasks, totalPages, activeFilter, setFilter, currentPage, setCurrentPage } = useTodo();

  return (
    <>
      <h1 className={classes.header}>ToDo</h1>
      <Form />
      <List list={tasks} />
      <Filters onSetActiveFilter={setFilter} activeFilter={activeFilter} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onSetCurrentPage={setCurrentPage}
      />
    </>
  );
};
