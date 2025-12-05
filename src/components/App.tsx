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
    setList([...list, newTask]);
    setTask('')
  }

  const deleteTask = (id: string|number) => {
    console.log('>>', id)
  }

  return (
    <>
      <h1 className={classes.header}>ToDo</h1>
      <TodoForm onSubmit={addTask} task={task} onChange={setTask} />
      <TodoListItems list={list} onDelete={deleteTask} />
      <TodoFilters />
    </>
  );
};
