import styled from 'styled-components';

export const Main = styled.main`
display: flex;
padding: 20px;
flex: 1;
@media (max-width: 1024px) {
    flex-direction: column;
  }
`;