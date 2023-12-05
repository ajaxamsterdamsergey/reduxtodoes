import styled from 'styled-components';
import { motion } from 'framer-motion';

export const DeleteTodo = styled.div`
width: 12px; 
height: 12px; 
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
&:before,
  &:after {
    content: '';
    position: absolute;
    height: 12px;
    width: 2px;
    background-color: #bd5454;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
  &:hover {
    transform: scale(1.2);
  }
`;

export const Wrapper = styled(motion.div)`
  background-color: ${({ $completed }) => ($completed === 'true' ? '#99ff99' : '#ff9999')};

  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 30%;
  height: 186px;
  padding: 8px;
  box-sizing: border-box;
  margin: 20px auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  opacity: 1;

  // Combined transition for both opacity and transform
  transition: opacity 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    cursor: crosshair; // Changes cursor to crosshair on hover
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1); // Increases box-shadow on hover
    transform: translateY(-10px); // Moves the element slightly upwards on hover

    ${DeleteTodo} {
      opacity: 1;
      background-color: #fff;
    }
  }
`;



export const Title = styled.p`
margin: 10px 0;
font-size: 14px;
  color: #344552;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3; /* Количество строк для отображения */
  max-height: 155px; /* Максимальная высота текста */
  max-height: 155px;
  @media (max-width: 460px) {
    font-size: 12px;
  }
`;
export const Text = styled.p`
  font-size: 14px;
  margin: 10px 0;
  color: #344552;
  white-space: nowrap;
  overflow: hidden; 
  text-overflow: ellipsis;
  @media (max-width: 460px) {
    font-size: 12px;
  }
`;
export const BtnChangeStatus = styled.button`
    font-size: 11px;
    margin: 0 auto;
    padding: 8px;
    border: none;
    border-radius: 5px;
    background-color: #677288;
    color: rgb(228, 216, 216);
    cursor: pointer;
    transition: background-color 0.3s ease;
    @media (max-width: 460px) {
    padding: 4px;
    font-size: 10px;
  }
`;

