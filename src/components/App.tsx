import { ReactElement, useEffect, useMemo, useState } from 'react';

import { useSelector } from 'react-redux';

import { FilterState, INITIAL_PAGE, TASK_PER_PAGE } from '@/models/constants';
import { Task } from '@/store/todoSlice';

import { Filters } from './Filters';
import { Form } from './Form';
import { List } from './List';
import { Pagination } from './Pagination';

import classes from './App.module.scss';

export const App = (): ReactElement => {
  const [activeFilter, setFilter] = useState(FilterState.ALL);
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
  const list: Task[] = useSelector((state: {tasks: {tasks: Task[]}}) => state.tasks.tasks)

  useEffect(() => {
    setCurrentPage(INITIAL_PAGE);
  }, [activeFilter]);

  const getFilteredList = useMemo((): Task[] => {
    if (activeFilter === FilterState.ALL) {
      return list;
    }
    return list.filter((task) =>
      activeFilter === FilterState.COMPLETE ? task.isComplete : !task.isComplete,
    );
  }, [list, activeFilter]);

  const start: number = (currentPage - INITIAL_PAGE) * TASK_PER_PAGE;
  const end: number = currentPage * TASK_PER_PAGE;
  const totalPages: number = Math.ceil(getFilteredList.length / TASK_PER_PAGE);
  const paginatedTask: Task[] = getFilteredList.slice(start, end);

  return (
    <>
      <h1 className={classes.header}>ToDo</h1>
      <Form/>
      <List list={paginatedTask}/>
      <Filters onSetActiveFilter={setFilter} activeFilter={activeFilter} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onSetCurrentPage={setCurrentPage}
      />
    </>
  );
};
