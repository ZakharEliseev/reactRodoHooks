import { TodoListItemProps } from '@/models/types';

import { Item } from '../Item';

import classes from './index.module.scss';

export const List = ({ list}: TodoListItemProps) => {
  return (
    <ul className={classes.todoList}>
      {list.map((task) => {
        return <Item task={task} key={task.id}  />;
      })}
    </ul>
  );
};
