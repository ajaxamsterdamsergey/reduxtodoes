import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const dropDown = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
`;

const combined = keyframes`
  from { transform: scale(1) translateX(0); opacity: 1; }
  to { transform: scale(0) translateX(100%); opacity: 0; }
`;

export const Body = styled.div`
  margin: 0;
  padding: 0;
  font-family: Rubik;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #677288;
  padding: 10px;
`;

export const Logo = styled.div`
  font-size: 24px;
`;

export const Navigation = styled.div`
  display: flex;
`;

export const Main = styled.div`
  display: flex;
  padding: 20px;
  flex: 1;
`;

export const Todos = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
`;

export const NewTodo = styled.div`
  height: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  border: 2px solid #ddd;
  background-color: #677288;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const NewTodoContainer = styled.div`
  border: 1px solid #ddd;
  background-color: #677288;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const SelectOption = styled.option`
  color: rgb(161, 158, 158);
`;

export const InputField = styled.div`
  width: 274px;
  position: relative;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  position: absolute;
  top: 8px;
  left: 10px;
  font-size: 16px;
  color: #cacfdb;
  transition: all 0.1s ease-in-out;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid #ffffff;
  outline: none;
  transition: border-bottom-color 0.3s ease;
  background-color: transparent;
`;

export const Select = styled.select`
  appearance: none;
  outline: none;
  cursor: pointer;
`;

export const AddTodoButton = styled.button`
  font-family: Rubik;
  background-color: #334467;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    background-color: #192a4d;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const StatusTitle = styled.div`
  font-size: 24px;
  color: #334467;
  text-align: center;
  margin-bottom: 20px;
`;

export const StatusContainer = styled.div`
  width: 30%;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const DeleteTodoButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #e6d0d0;
  color: #bd5454;
  background-color: #fff;
  font-weight: bold;
  text-align: center;
  line-height: 18px;
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;

  &:hover {
    opacity: 1;
    background-color: #fff;
    transform: scale(1.2);
  }
`;

export const TodoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 94%;
  padding: 15px;
  box-sizing: border-box;
  margin: 20px auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  opacity: 1;
  transform: scale(1) translateX(0);
  transition: opacity 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transform: translateY(-10px);
  }
`;

export const TodoText = styled.div`
  margin: 10px 0;
  color: #344552;
`;

export const TodoButton = styled.button`
  margin: 0 auto;
  padding: 8px;
  border: none;
  border-radius: 5px;
  background-color: #677288;
  color: rgb(228, 216, 216);
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #8a9cb3;
  }
`;

export const TodoForm = styled.div`
  flex-basis: 30%;
`;

export const TodoLists = styled.div`
  flex-basis: 65%;
  display: flex;
  justify-content: space-between;
`;

export const TodoList = styled.div`
  width: 30%;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Footer = styled.div`
  background-color: #677288;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterNavigation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavigationLink = styled.a`
  text-decoration: none;
  margin-right: 10px;
  color: #fff;
  transition: color 0.3s, transform 0.3s;

  &:hover {
    color: #ff0000;
    transform: scale(1.2);
  }
`;

export const FooterLink = styled.a`
  text-decoration: none;
  margin-bottom: 10px;
  color: #fff;
  transition: color 0.3s, transform 0.3s;

  &:hover {
    color: #00ff00;
    transform: scale(1.2);
  }
`;

export const ActiveLink = styled.a`
  font-weight: bold;
  color: #0000ff;
  transform: scale(1.1);
`;

export const FooterLogo = styled.div`
  font-size: 24px;
`;

export const DeletedTodo = styled.div`
  animation-name: ${combined};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
`;

export const FadedOutTodo = styled.div`
  animation-name: ${fadeOut};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
`;

export const FadedInTodo = styled.div`
  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

export const NewTodoAnimation = styled.div`
  animation: ${dropDown} 1s ease-in-out;
  animation-fill-mode: forwards;
`;

// Медиа запросы
export const MediaQuery = styled.div`
  @media screen and (max-width: 480px) {
    body,h2{
      font-size: 10px;
    }
    .main{
      flex-direction: column;
      gap: 16px;
    }
    .status-title{
      font-size: 12px;
    }
    #todo-priority,#todo-name,#todo-description,.input-field .label {
      font-size: 12px;
    }
    .main__new-todo{
      height: 75%;
    }
    .input-field .input:valid ~ .label,
    .input-field .input:focus ~ .label {
      font-size: 10px;
      color: #ffffff;
      transform: translateY(-20px);
    }
    .todo {
      padding: 8px;
    }
    .todo button {
      width: 80%;
      padding: 4px;
      font-size: 10px;
    }
  }
`;

