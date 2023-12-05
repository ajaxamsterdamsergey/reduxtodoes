import { fetchTodosByUser, fetchTodos} from '../../redux/todosSlice';
import {
  TodoFormContainer,
  TodoFormMain,
  InputField,
  Label,
  Input,
  Select,
  AddTodoButton,
  Container,
  FilterForm,
  FilterFormContainer
} from './TodoForm.styled';

export const TodoForm = ({ newTodo, setNewTodo, users, handleAddTodo, dispatch, selectedUserId, setSelectedUserId }) => {
  const handleTitleChange = (e) => {
    // Удаляем начальные пробелы из введенного значения
    const trimmedValue = e.target.value.replace(/^\s+/, "");
    setNewTodo({ ...newTodo, title: trimmedValue });
  };
  // Обработчик для применения фильтра задач по пользователю
  const handleApplyFilter = () => {
    if (selectedUserId) {
      // Загрузка задач по выбранному пользователю
      dispatch(fetchTodosByUser(selectedUserId));
    }
    else {
      // Загрузка всех задач, если пользователь не выбран
      dispatch(fetchTodos());
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвращаем стандартное поведение отправки формы
    if (newTodo.title && newTodo.userId) { // Проверяем, что поля не пустые
      handleAddTodo();
    } 
  };
  
  return (
    <Container>
    <TodoFormContainer>
      <TodoFormMain onSubmit={handleSubmit}>
        <InputField>
          <Input
            type="text"
            id="todo-name"
            placeholder="Title"
            required={true}
            value={newTodo.title}
            onChange={handleTitleChange}
          />
          <Label htmlFor="todo-name">Title</Label>
        </InputField>

        <InputField>
          <Select
            id="todo-priority"
            required={true}
            value={newTodo.userId}
            onChange={(e) => setNewTodo({ ...newTodo, userId: e.target.value })}
          >
            <option value="" disabled>
            </option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </Select>
          <Label htmlFor="todo-priority">User</Label>
        </InputField>

        <AddTodoButton type="submit">
          Add ToDo
        </AddTodoButton>
      </TodoFormMain>
      </TodoFormContainer>
      <FilterFormContainer>
      <FilterForm>
      <InputField>
      <Select
  id="filter"
  required={true}
  value={selectedUserId}
  onChange={(e) => setSelectedUserId(e.target.value)}
>
  <option value=""></option>
  {users.map((user) => (
    <option key={user.id} value={user.id}>{user.name}</option>
  ))}
</Select>

          <Label htmlFor="filter">User</Label>
        </InputField>

        <AddTodoButton id="apply-filter" onClick={handleApplyFilter}>
           apply filter
        </AddTodoButton>
      </FilterForm>
    </FilterFormContainer>
    </Container>
  );
};