import { useState } from 'react';

import { TodoFormProps } from '@/models/types';

import classes from './index.module.scss';

export const Form = ({ onSubmit }: TodoFormProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent<Element>): void => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      text: text,
      isComplete: false,
    };
    onSubmit(newTask);
    setText('');
  };

  return (
    <form className={classes.todoForm} onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        placeholder="add your task here..."
        className={classes.todoFormInput}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};
