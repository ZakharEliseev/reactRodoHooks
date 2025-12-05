export interface Task {
  id: number;
  text: string;
  isComplete: boolean
}

export interface TodoFormProps {
  task: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export interface TodoItemProps {
  onDelete: (id: string | number) => void;
  task: Task;
}

export interface TodoListItemProps {
  onDelete: (id: string | number) => void;
  list: Task[];
}