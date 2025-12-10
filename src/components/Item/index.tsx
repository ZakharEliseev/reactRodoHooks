import { useDispatch } from "react-redux";

import { Task, deleteTask, toggleStatusTask } from '@/store/todoSlice';

import classes from './index.module.scss';

interface TodoItemProps {
  task: Task;
}

export const Item = ({ task: { text, id, isComplete } }: TodoItemProps) => {
  const dispatch = useDispatch();
  
  return (
    <li>
      <button onClick={() => dispatch(deleteTask({ id }))}>Delete</button>
      <p className={isComplete ? classes.todoCompleteTask : ''}>{text}</p>
      <button onClick={() => dispatch(toggleStatusTask({ id }))}>Complete</button>
    </li>
  );
};