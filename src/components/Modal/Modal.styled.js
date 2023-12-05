import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.h3`
  margin: 0;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const TodoFormContainer = styled.div`
  height: 280px;
  border: 1px solid #ddd;
  background-color: #677288;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const TodoFormMain = styled.form`
  height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 32px;
  border: 2px solid #ddd;
  background-color: #677288;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
  width: 274px;
  height: 36px;
  font-family: Rubik;
  box-sizing: border-box;
  padding-left: 10px;
  font-size: medium;
  color: #ffffff;
  border: solid 2px #fff;
  border-radius: 6px;
  border-bottom: 2px solid #ffffff;
  outline: none;
  transition: border-bottom-color 0.3s ease;
  background-color: transparent;


  &:valid ~ ${Label}, &:focus ~ ${Label} {
    font-size: 12px;
    color: #ffffff;
    transform: translateY(-20px);
  }
`;

export const Select = styled.select`
  width: 274px;
  height: 36px;
  padding-left: 10px;
  appearance: none;
  outline: none;
  cursor: pointer;
  color: #ffffff;
  border: solid 2px #fff;
  border-radius: 6px;
  border-bottom: 2px solid #ffffff;
  outline: none;
  transition: border-bottom-color 0.3s ease;
  background-color: transparent;

  option {
    color: rgb(161, 158, 158);
  }

  &:valid ~ ${Label}, &:focus ~ ${Label} {
    font-size: 12px;
    color: #ffffff;
    transform: translateY(-20px);
  }
`;

export const AddTodoButton = styled.button`
  font-family: Rubik;
  background-color: #334467;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    background-color: #192a4d;
  }

  &:active {
    transform: scale(0.95);
  }
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;