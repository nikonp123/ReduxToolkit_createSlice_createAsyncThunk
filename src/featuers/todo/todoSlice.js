import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};
const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addToDo(state, action) {
      state.todos.push(action.payload);
    },
    toggleCompleted(state, action) {
      console.log(action.payload);
      const toggleToDo = state.todos.find((todo) => todo.id === action.payload);
      toggleToDo.completed = !toggleToDo.completed;
    },
    removeToDo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export default todoSlice.reducer;
export const { addToDo, toggleCompleted, removeToDo } = todoSlice.actions;
