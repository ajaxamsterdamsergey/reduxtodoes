import React, { useState } from 'react';
import { TodoCategory } from '../TodoCategory/TodoCategory';
import { Loader } from '../Loader/Loader';
import {Modal} from '../Modal/Modal'; // Путь к вашему компоненту Modal
import { Wrapper } from './TodoList.styled';

export const TodoList = ({ todos, users }) => {
  // Состояние для управления выбранной задачей и видимостью модального окна
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Обработчик для открытия модального окна и установки выбранной задачи
  const handleTodoClick = (todo) => {
    setSelectedTodo(todo);
    setIsModalOpen(true);
  };

  // Обработчик для закрытия модального окна и сброса выбранной задачи
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTodo(null);
  };

  // Отображение загрузчика, если задачи еще не загружены или их слишком мало
  if (!todos || todos.length <= 1) {
    return <Wrapper><Loader /></Wrapper>;
  }

  // Фильтрация задач на выполненные и невыполненные
  const notCompletedTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);


  return (
    <Wrapper>
       {notCompletedTodos.length > 0 && (
      <TodoCategory
        todos={notCompletedTodos}
        categoryTitle="Not Completed"
        handleTodoClick={handleTodoClick}
        users={users}
      />
    )}
    {completedTodos.length > 0 && (
      <TodoCategory
        todos={completedTodos}
        categoryTitle="Completed"
        handleTodoClick={handleTodoClick}
        users={users}
      />
    )}
      {isModalOpen && selectedTodo && (
        <Modal
          item={selectedTodo}
          onClose={handleCloseModal}
          users={users}
        />
      )}
      {isModalOpen && selectedTodo && (
        <Modal
          item={selectedTodo}
          onClose={handleCloseModal}
          users={users}
        />
      )}
    </Wrapper>
  );
};
