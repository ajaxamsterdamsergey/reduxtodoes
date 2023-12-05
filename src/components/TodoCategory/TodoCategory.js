import React, { useState } from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import { useTheme } from '../ThemeProvider/ThemeProvider';
import { Wrapper, MainWrapper, PaginationWrapper, PageButton } from './TodoCategory.styled';

export const TodoCategory = ({ todos, categoryTitle, handleTodoClick, users }) => {
  // Локальное состояние для управления текущей страницей пагинации
  const [currentPage, setCurrentPage] = useState(1);
  // Установка количества задач на одной странице
  const todosPerPage = 9; 

  // Получение текущей темы
  const { theme } = useTheme();

  // Фильтрация задач в зависимости от их статуса и выбранной категории
  const filteredTodos = todos.filter((todo) => todo.completed === (categoryTitle === 'Completed'));
  // Вычисление общего количества страниц
  const pageCount = Math.ceil(filteredTodos.length / todosPerPage);

  // Определение индексов для пагинации
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  // Получение текущих задач для отображения на странице
  const currentTodos = filteredTodos.slice(indexOfFirstTodo, indexOfLastTodo);

  // Функция для изменения текущей страницы
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Генерация списка номеров страниц для пагинации
  const generatePageNumbers = (totalPages, currentPage) => {
    const pages = [];
    const showPages = 5; // Количество отображаемых номеров страниц

    // Логика для отображения списка страниц
    if (totalPages <= showPages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      pages.push(1);
      if (startPage > 2) {
        pages.push('...');
      }
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      if (endPage < totalPages - 1) {
        pages.push('...');
      }
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <MainWrapper>
      <h2>{categoryTitle}</h2>
      <Wrapper theme={theme}>
        {currentTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleTodoClick={handleTodoClick}
            users={users}
            todos={todos}
            categoryTitle={categoryTitle}
            currentPage={currentPage}
            todosPerPage={todosPerPage}
            setCurrentPage={setCurrentPage}
          />
        ))}
        <PaginationWrapper>
          {generatePageNumbers(pageCount, currentPage).map((number, index) => (
            number === '...' ? 
              <span key={index}>...</span> : 
              <PageButton key={index} onClick={() => paginate(number)} disabled={number === currentPage}>
                {number}
              </PageButton>
          ))}
          {currentPage < pageCount && (
            <PageButton onClick={() => paginate(currentPage + 1)}>{'>'}</PageButton>
          )}
        </PaginationWrapper>
      </Wrapper>
    </MainWrapper>
  );
};
