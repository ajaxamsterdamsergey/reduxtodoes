// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todosSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});