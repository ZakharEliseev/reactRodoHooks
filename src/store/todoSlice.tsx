import { Task } from '@/models/types';
import { createSlice } from '@reduxjs/toolkit';

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
      const toggledTodo = state.tasks.find((todo) => todo.id === action.payload.id);
      if (toggledTodo) toggledTodo.isComplete = !toggledTodo.isComplete;
    },
  },
});

export const { addTask, deleteTask, toggleStatusTask } = todoSlice.actions;
export default todoSlice.reducer;