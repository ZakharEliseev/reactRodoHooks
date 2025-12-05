import { TodoListItemProps } from '@/models/types';

import { TodoItem } from '../todoItem/TodoItem';

import classes from './TodoListItems.module.scss';

export const TodoListItems = ({ list, onDelete, onComplete }: TodoListItemProps) => {
  return (
    <ul className={classes.todoList}>
      {list.map((task) => {
        return <TodoItem task={task} key={task.id} onDelete={onDelete} onComplete={onComplete} />;
      })}
    </ul>
  );
};
