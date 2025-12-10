import { createSlice } from '@reduxjs/toolkit';

export interface Task {
  id: number;
  text: string;
  isComplete: boolean;
}

const todoSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [] as Task[],
  },
  reducers: {
    addTask(state, action): void {
      state.tasks.push({
        id: Date.now(),
        text: action.payload.text,
        isComplete: false,
      });
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
    toggleStatusTask(state, action) {
      state.tasks = state.tasks.map((task: Task) => (
        task.id === action.payload.id ? {...task, isComplete: !task.isComplete} : task
      ))
    },
  },
});

export const { addTask, deleteTask, toggleStatusTask } = todoSlice.actions;
export default todoSlice.reducer;