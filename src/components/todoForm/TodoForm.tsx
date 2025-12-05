import { TodoFormProps } from '@/models/types';

import classes from './TodoForm.module.scss';



export const TodoForm = ({task, onChange, onSubmit}: TodoFormProps) => {

  return (
    <form className={classes.todoForm} onSubmit={onSubmit}>
      <input
        type="text"
        name="task"
        placeholder="add your task here..."
        className={classes.todoFormInput}
        value={task}
        onChange={(e) => onChange(e.target.value)}
      />
      <button type="submit">
        Add
      </button>
    </form>
  );
}; 
