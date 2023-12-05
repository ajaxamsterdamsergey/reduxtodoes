// src/App.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { Header } from './components/Header/Header';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';
import {TodoList} from './components/TodoList/TodoList';
import {TodoForm} from './components/TodoForm/TodoForm';
import { fetchTodos, addTodo} from './redux/todosSlice';
import {
  Main
} from './App.styled';

// Define or import the 'users' array here
const users = [
  { id: 1, name: 'John Smith' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Robert Johnson' },
  { id: 4, name: 'Emily Davis' },
  { id: 5, name: 'Michael Brown' },
  { id: 6, name: 'Sarah Wilson' },
  { id: 7, name: 'Christopher Miller' },
  { id: 8, name: 'Amanda Taylor' },
  { id: 9, name: 'Daniel Anderson' },
  { id: 10, name: 'Jessica Thomas' }
];

function App() {
  const [selectedUserId, setSelectedUserId] = useState('');

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const [newTodo, setNewTodo] = useState({
    title: '',
    userId: '',
    completed: false,
  });

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
 
  const handleAddTodo = () => {
    if (selectedUserId !== '') {
      setSelectedUserId('');
      dispatch(fetchTodos()); // Перезагрузка всех задач
    }
    const temporaryId = nanoid();
  
    dispatch(addTodo({
      ...newTodo,
      id: temporaryId,
      userId: parseInt(newTodo.userId, 10), // Преобразование в число
    }));
  
    setNewTodo({
      title: '',
      userId: '',
      completed: false,
    });
  };

  return (
    <ThemeProvider>
      <Header />
      <Main>
      <TodoForm
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        users={users}
        handleAddTodo={handleAddTodo}
        dispatch={dispatch}
        selectedUserId={selectedUserId}
        setSelectedUserId={setSelectedUserId}
      />
      <TodoList
        todos={todos}
        users={users}
      />
      </Main>
    </ThemeProvider>
  );
}

export default App;
