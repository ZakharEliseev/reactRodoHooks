import { Task } from '@/store/todoSlice';

import { Item } from '../Item';

import classes from './index.module.scss';

interface TodoListItemProps {
  list: Task[];
}

export const List = ({ list}: TodoListItemProps) => {
  return (
    <ul className={classes.todoList}>
      {list.map((task) => (
         <Item task={task} key={task.id}  />
      ))}
    </ul>
  );
};
