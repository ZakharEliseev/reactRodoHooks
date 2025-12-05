import { useState } from 'react';

import { INITIAL_PAGE, TASK_PER_PAGE } from '@/models/constants';
import { FilterState, Task } from '@/models/types';

import { TodoFilters } from './todoFilters/TodoFilters';
import { TodoForm } from './todoForm/TodoForm';
import { TodoListItems } from './todoListItems/TodoListItems';
import { TodoPaginator } from './todoPaginator/TodoPaginator';

import classes from './App.module.scss';

export const App = () => {
  const [list, setList] = useState<Task[]>([]);
  const [text, setText] = useState('');
  const [activeFilter, setFilter] = useState(FilterState.ALL);
  const [currentPage, setActivePage] = useState(INITIAL_PAGE);

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

  const totalPages = Math.ceil(handleGetFilteredList().length / TASK_PER_PAGE);
  console.log(handleGetFilteredList().length);
  return (
    <>
      <h1 className={classes.header}>ToDo</h1>
      <TodoForm onSubmit={handleAddTask} task={text} onInputChange={setText} />
      <TodoListItems
        list={getPaginatedTask()}
        onDelete={handleDeleteTask}
        onComplete={toggleStatus}
      />
      <TodoFilters onSetActiveFilter={handleSetActiveFilter} onCurrentFilter={activeFilter} />
      <TodoPaginator list={getPaginatedTask()} totalPages={totalPages} />
    </>
  );
};
