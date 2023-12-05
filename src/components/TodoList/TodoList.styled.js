import styled from 'styled-components';

export const Wrapper = styled.div`
flex-grow: 1;
display: flex;
justify-content: space-around;
@media (max-width: 840px) {
    flex-direction: column;
        align-items: center;
  }
`;