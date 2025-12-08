import { useEffect, useMemo, useState } from 'react';

import { INITIAL_PAGE, TASK_PER_PAGE } from '@/models/constants';
import { FilterState, Task } from '@/models/types';

import { Filters } from './Filters';
import { Form } from './Form';
import { List } from './List';
import { Pagination } from './Pagination';

import classes from './App.module.scss';

export const App = () => {
  const [list, setList] = useState<Task[]>([]);
  const [activeFilter, setFilter] = useState(FilterState.ALL);
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);

  const onSubmit = (task: Task): void => setList((prev: Task[]): Task[] => [...prev, task]);

  const handleDeleteTask = (id: number): void => {
    setList((prev) => prev.filter((task: Task) => task.id !== id));
  };

  const toggleStatus = (id: number): void => {
    setList(
      list.map((task: Task) => {
        return {
          ...task,
          isComplete: task.id === id ? !task.isComplete : task.isComplete,
        };
      }),
    );
  };

  useEffect(() => {
    setCurrentPage(INITIAL_PAGE);
  }, [activeFilter]);

  const handleSetActiveFilter = (filterName: FilterState): void => {
    setFilter(filterName);
  };

  const getFilteredList = useMemo((): Task[] => {
    if (activeFilter === FilterState.ALL) {
      return list;
    }
    return list.filter((task) =>
      activeFilter === FilterState.COMPLETE ? task.isComplete : !task.isComplete,
    );
  }, [list, activeFilter]);

  const paginatedTask = useMemo((): Task[] => {
    const start = (currentPage - INITIAL_PAGE) * TASK_PER_PAGE;
    const end = currentPage * TASK_PER_PAGE;
    return getFilteredList.slice(start, end);
  }, [getFilteredList, currentPage]);

  const totalPages = Math.ceil(getFilteredList.length / TASK_PER_PAGE);

  return (
    <>
      <h1 className={classes.header}>ToDo</h1>
      <Form onSubmit={onSubmit} />
      <List list={paginatedTask} onDelete={handleDeleteTask} onComplete={toggleStatus} />
      <Filters
        onSetActiveFilter={handleSetActiveFilter}
        activeFilter={activeFilter}
      />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onSetCurrentPage={setCurrentPage}
      />
    </>
  );
};
