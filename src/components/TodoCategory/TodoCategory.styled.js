
import styled from 'styled-components';

export const Wrapper = styled.div`
background-color: ${(props) => (props.theme === 'light' ? 'white' : '#45433e')};
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 95%;
 border: 1px solid ${(props) => (props.theme === 'light' ? '#ddd' : '#605e5c')};
border-radius: 10px;
padding: 10px;
 box-shadow: ${(props) => (props.theme === 'light' ? '0 0 10px rgba(0,0,0,0.5)' : '0 0 10px rgba(255,255,255,0.5)')};
`;
export const MainWrapper = styled.div`
text-align: center;
width: 35vw;
@media (max-width: 1024px) {
    width: 44vw;
  }
  @media (max-width: 848px) {
    width: 43vw;
  }
  @media (max-width: 840px) {
    width: 90vw;
  }
`;

export const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PageButton = styled.button`
  border: none;
  background-color: #f0f0f0;
  margin: 0 5px;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #dcdcdc;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 3px blue;
  }
`;