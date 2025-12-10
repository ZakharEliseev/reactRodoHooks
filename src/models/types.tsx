export interface Task {
  id: number;
  text: string;
  isComplete: boolean;
}

export interface TodoItemProps {
 task: Task
}

export interface TodoListItemProps {
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
}

export interface TodoPaginatorProps {
  onSetCurrentPage: (page: number) => void;
  totalPages: number;
  currentPage: number;
}
