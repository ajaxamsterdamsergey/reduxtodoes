import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: space-evenly;
flex-direction: column;
height: 90vh;
@media (max-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;;
    align-items: center;
    height: 280px;
  }
  @media (max-width: 460px) {
    flex-direction: column;
    height: 70vh;
  }
`;

export const TodoFormContainer = styled.div`
  height: 260px;
  border: 1px solid #ddd;
  background-color: #677288;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
export const FilterFormContainer = styled.div`
  height: 172px;
  border: 1px solid #ddd;
  background-color: #677288;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const TodoFormMain = styled.form`
  height: 91%;
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
export const FilterForm = styled.div`
  height: 87%;
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
  width: 180px;
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
  width: 180px;
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
  width: 180px;
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
