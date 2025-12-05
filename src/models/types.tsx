export interface Task {
  id: number;
  text: string;
  isComplete: boolean;
}

export interface TodoFormProps {
  task: string;
  onInputChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export interface TodoItemProps {
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
  task: Task;
}

export interface TodoListItemProps {
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
  list: Task[];
}

export enum FilterState {
  ALL = 'all',
  COMPLETE = 'complete',
  ACTIVE = 'active',
}

export interface TodoFiltersProps {
  onSetActiveFilter: (filterName: FilterState) => void;
};