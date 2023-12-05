import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';

// Асинхронный экшен для получения всех задач
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  return data;
});

// Асинхронный экшен для получения задач по ID пользователя
export const fetchTodosByUser = createAsyncThunk('todos/fetchByUser', async (userId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
  const data = await response.json();
  return data;
});

// Асинхронный экшен для удаления задачи
export const deleteTodoAsync = createAsyncThunk(
  'todos/deleteTodo',
  async (todoId, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Could not delete todo');
      }
      return todoId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// экшен для локального обновления задачи
export const updateTodoLocally = createAction('todos/updateTodoLocally');

// Асинхронный экшен для переключения статуса задачи
export const toggleTodoStatus = createAsyncThunk(
  'todos/toggleStatus',
  async ({ todoId, newStatus }, { dispatch, getState, rejectWithValue }) => {
    // Поиск и обновление задачи локально
    const todo = getState().todos.todos.find(todo => todo.id === todoId);
    if (todo) {
      const updatedTodo = { ...todo, completed: newStatus };
      dispatch(updateTodoLocally(updatedTodo));
    }
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          completed: newStatus,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (!response.ok) {
        throw new Error('Could not update todo status');
      }
      const updatedTodo = await response.json();
      return updatedTodo;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Асинхронный экшен для обновления задачи
export const updateTodoAsync = createAsyncThunk(
  'todos/updateTodo',
  async (todoData, { dispatch, rejectWithValue  }) => {
    dispatch(updateTodoLocally(todoData));
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoData.id}`, {
        method: 'PUT',
        body: JSON.stringify(todoData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (!response.ok) {
        throw new Error('Could not update todo');
      }
      const updatedTodo = await response.json();
      return updatedTodo;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Асинхронный экшен для добавления новой задачи
export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async (todoData, { rejectWithValue }) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(todoData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (!response.ok) {
        throw new Error('Could not add new todo');
      }
      const newTodo = await response.json();
      return newTodo;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const todosSlice = createSlice({
  name: 'todos',
  initialState: { todos: [], status: 'idle', error: null },
  reducers: {
    // Редьюсер для обновления задачи локально
    updateTodoLocally: (state, action) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateTodoAsync.fulfilled, (state, action) => {
        // Обработка успешного обновления задачи
        const index = state.todos.findIndex(todo => todo.id === action.payload.id);
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      })
      .addCase(updateTodoAsync.rejected, (state, action) => {
        // Обработка ошибки при обновлении задачи
        state.error = action.payload;
      })
      .addCase(fetchTodosByUser.fulfilled, (state, action) => {
        // Обновление списка задач по ID пользователя
        state.todos = action.payload;
      })
      .addCase(toggleTodoStatus.fulfilled, (state, action) => {
        // Обработка успешного переключения статуса задачи
        const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      })
      .addCase(toggleTodoStatus.rejected, (state, action) => {
        // Обработка ошибки при переключении статуса задачи
        state.error = action.payload;
      })
      .addCase(deleteTodoAsync.fulfilled, (state, action) => {
        // Удаление задачи из состояния
        state.todos = state.todos.filter(todo => todo.id !== action.payload);
      })
      .addCase(deleteTodoAsync.rejected, (state, action) => {
        // Обработка ошибки при удалении задачи
        state.error = action.payload;
      })
      .addCase(fetchTodos.pending, (state) => {
        // Обработка начала загрузки задач
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        // Обработка успешной загрузки задач
        state.status = 'succeeded';
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        // Обработка ошибки загрузки задач
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        // Добавление новой задачи в состояние
        state.todos.push(action.payload);
      })
      .addCase(addTodo.rejected, (state, action) => {
        // Обработка ошибки при добавлении новой задачи
        state.error = action.payload;
      });
  },
});

const { reducer } = todosSlice;
export default reducer;
