import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { addTask } from '@/store/todoSlice';

import classes from './index.module.scss';

export const Form = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addText = (e: React.FormEvent): void => {
    e.preventDefault();
    dispatch(addTask({ text }));
    setText('');
  };

  return (
    <form className={classes.todoForm} onSubmit={addText}>
      <input
        type="text"
        name="task"
        placeholder="add your task here..."
        className={classes.todoFormInput}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};
