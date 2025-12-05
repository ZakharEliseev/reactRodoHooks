import { TodoFormProps } from '@/models/types';

import classes from './TodoForm.module.scss';



export const TodoForm = ({ task, onInputChange, onSubmit }: TodoFormProps) => {
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
