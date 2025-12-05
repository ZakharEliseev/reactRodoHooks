import { TodoItemProps } from "@/models/types";

import classes from './TodoItem.module.scss';

export const TodoItem = ({ task, onDelete, onComplete }: TodoItemProps) => {
  return (
    <li>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <p className={task.isComplete ? classes.todoCompleteTask : ''}>{task.text}</p>
      <button onClick={() => onComplete(task.id)}>Complete</button>
    </li>
  );
};