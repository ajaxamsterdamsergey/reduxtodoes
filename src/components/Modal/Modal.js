import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { updateTodoAsync } from '../../redux/todosSlice';
import { Overlay, ModalContainer, InputField, Input, Label, Select, AddTodoButton, TodoFormContainer, TodoFormMain } from './Modal.styled';

// Элемент, в который будет помещен модальный компонент
const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, item, users }) => {
  const dispatch = useDispatch();

  // Локальное состояние для редактирования задачи
  const [editTodo, setEditTodo] = useState({ 
    id: item.id,
    title: item.title.trim(), // Убираем начальные пробелы
    userId: item.userId,
    completed: item.completed 
  });

  // Обработчик закрытия модального окна при нажатии клавиши Escape
  useEffect(() => {
    const handleEscapeKey = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);

  // Обработчик клика по фону модального окна для его закрытия
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  // Обработчик сохранения изменений задачи
  const handleSave = () => {
    dispatch(updateTodoAsync(editTodo));
    onClose(); 
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвращаем стандартное поведение формы
    if (editTodo.title && editTodo.userId) { // Проверяем, что поля не пустые
      handleSave();
    } 
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <TodoFormContainer>
          <TodoFormMain onSubmit={handleSubmit}>
            <InputField>
              <Input
                type="text"
                id="todo-title"
                placeholder="Title"
                required={true}
                value={editTodo.title}
                onChange={(e) => setEditTodo({ ...editTodo, title: e.target.value.trimStart() })} // Обновление заголовка задачи, убирая начальные пробелы
              />
              <Label htmlFor="todo-title">Title</Label>
            </InputField>

            <InputField>
              <Select
                id="todo-user"
                required={true}
                value={editTodo.userId}
                onChange={(e) => setEditTodo({ ...editTodo, userId: e.target.value })}
              >
                <option value="" disabled></option>
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </Select>
              <Label htmlFor="todo-user">User</Label>
            </InputField>

            <AddTodoButton type="submit">
              Save
            </AddTodoButton>
          </TodoFormMain>
        </TodoFormContainer>
      </ModalContainer>
    </Overlay>,
    modalRoot
  );
};
