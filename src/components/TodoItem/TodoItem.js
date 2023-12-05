import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodoAsync, toggleTodoStatus  } from '../../redux/todosSlice';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrapper, Title, Text, BtnChangeStatus, DeleteTodo } from './TodoItem.styled';

export const TodoItem = ({ todo, handleTodoClick, users, todos, categoryTitle, currentPage, todosPerPage, setCurrentPage }) => {
  // Локальное состояние для отслеживания процесса удаления
  const [isDeleting, setIsDeleting] = useState(false);
  // Использование диспетчера Redux
  const dispatch = useDispatch();

  // Обработчик клика для изменения статуса задачи
  const handleStatusChangeClick = (e) => {
    e.stopPropagation(); // Предотвращение всплытия события
    dispatch(toggleTodoStatus({ todoId: todo.id, newStatus: !todo.completed }));
  };

  // Обработчик начала удаления задачи
  const startDeletion = (e) => {
    e.stopPropagation(); // Предотвращение всплытия события
    setIsDeleting(true); // Установка флага удаления
    dispatch(deleteTodoAsync(todo.id)).then(() => {
      // Обновление пагинации после удаления
      const updatedFilteredTodos = todos.filter((todo) => todo.completed === (categoryTitle === 'Completed'));
      if (currentPage > 1 && updatedFilteredTodos.length-1 <= (currentPage - 1) * todosPerPage) {
        setCurrentPage(currentPage - 1);
      }
    });
  };

  

  return (
    <AnimatePresence>
      {!isDeleting && (
        <Wrapper
          as={motion.div}
          layout
          $completed={todo.completed ? 'true' : 'false'}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100, transition: { duration: 0.5 } }}
          transition={{ duration: 0.5 }}
          onClick={() => handleTodoClick(todo)}
        >
          <Title>Title: {todo.title}</Title>
          <Text>User: {users.find((user) => user.id === Number(todo.userId))?.name || 'Unknown User'}</Text>
          <Text>Completed: {todo.completed.toString()}</Text>
          <BtnChangeStatus onClick={handleStatusChangeClick}>Change Status</BtnChangeStatus>
          <DeleteTodo onClick={startDeletion}></DeleteTodo>
        </Wrapper>
      )}
    </AnimatePresence>
  );
};
