export interface Task {
  id: number;
  text: string;
  isComplete: boolean;
}

export interface TodoFormProps {
  onSubmit: (task: Task) => void;
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
  activeFilter: FilterState;
};

export interface TodoPaginatorProps {
  onSetCurrentPage: (page: number) => void;
  totalPages: number;
  currentPage: number;
}