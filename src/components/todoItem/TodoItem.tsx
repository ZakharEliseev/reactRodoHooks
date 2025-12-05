import { TodoItemProps } from "@/models/types";

export const TodoItem = ({ task, onDelete }: TodoItemProps) => {
  return (
    <li>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <p>{task.text}</p>
      <button>Complete</button>
    </li>
  );
};