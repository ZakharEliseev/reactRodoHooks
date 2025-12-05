import { useState } from 'react';

import { Task } from '@/models/types';

import { TodoFilters } from './todoFilters/TodoFilters';
import { TodoForm } from './todoForm/TodoForm';
import { TodoListItems } from './todoListItems/TodoListItems';


import classes from './App.module.scss';



export const App = () => {
  const [list, setList] = useState<Task[]>([]);
  const [task, setTask] = useState('');

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      text: task,
      isComplete: false,
    }
    setList((prev) => ([...prev, newTask]));
    setTask('')
  }

  const deleteTask = (id: number) => {
    setList(list.filter((task) => task.id !== id))
  }

  const toggleStatus = (id: number) => {
    setList(
      list.map((task) => {
        return {
          ...task,
          isComplete: task.id === id ? !task.isComplete : task.isComplete,
        };
      }),
    );
  }

  return (
    <>
      <h1 className={classes.header}>ToDo</h1>
      <TodoForm onSubmit={addTask} task={task} onChange={setTask} />
      <TodoListItems list={list} onDelete={deleteTask} onComplete={toggleStatus} />
      <TodoFilters />
    </>
  );
};
