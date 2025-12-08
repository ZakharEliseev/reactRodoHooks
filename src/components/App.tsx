import { useState } from 'react';

import { INITIAL_PAGE, TASK_PER_PAGE } from '@/models/constants';
import { FilterState, Task } from '@/models/types';

import { Filters } from './Filters';
import { Form } from './Form';
import { List } from './List';
import { Pagination } from './Pagination';

import classes from './App.module.scss';

export const App = () => {
  const [list, setList] = useState<Task[]>([]);
  const [text, setText] = useState('');
  const [activeFilter, setFilter] = useState(FilterState.ALL);
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);

  const handleAddTask = (e: React.FormEvent<Element>): void => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      text: text,
      isComplete: false,
    };
    setList((prev: Task[]) => [...prev, newTask]);
    setText('');
  };

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

  const handleSetActiveFilter = (filterName: FilterState): void => {
    setFilter(filterName);
  };

  const handleGetFilteredList = (): Task[] => {
    if (activeFilter === FilterState.ALL) {
      return list;
    }
    return list.filter((task) =>
      activeFilter === FilterState.COMPLETE ? task.isComplete : !task.isComplete,
    );
  };

  const getPaginatedTask = (): Task[] => {
    const start = (currentPage - INITIAL_PAGE) * TASK_PER_PAGE;
    const end = currentPage * TASK_PER_PAGE;
    return handleGetFilteredList().slice(start, end);
  }

  const handleSetCurrentPage = (page: number): void => {
    setCurrentPage(page)
  }

  const totalPages = Math.ceil(handleGetFilteredList().length / TASK_PER_PAGE);

  return (
    <>
      <h1 className={classes.header}>ToDo</h1>
      <Form onSubmit={handleAddTask} task={text} onInputChange={setText} />
      <List list={getPaginatedTask()} onDelete={handleDeleteTask} onComplete={toggleStatus} />
      <Filters
        onSetActiveFilter={handleSetActiveFilter}
        onCurrentFilter={activeFilter}
        onSetCurrentPage={handleSetCurrentPage}
      />
      <Pagination
        list={getPaginatedTask()}
        totalPages={totalPages}
        currentPage={currentPage}
        onSetCurrentPage={handleSetCurrentPage}
      />
    </>
  );
};
