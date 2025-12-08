import { TodoFormProps } from '@/models/types';

import classes from './index.module.scss';



export const Form = ({ task, onInputChange, onSubmit }: TodoFormProps) => {
  return (
    <form className={classes.todoForm} onSubmit={onSubmit}>
      <input
        type="text"
        name="task"
        placeholder="add your task here..."
        className={classes.todoFormInput}
        value={task}
        onChange={(e) => onInputChange(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}; 
