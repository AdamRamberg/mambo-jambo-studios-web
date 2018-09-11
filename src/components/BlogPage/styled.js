import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${({ theme }) => `${theme?.spacing?.medium}`};
  display: flex;
  align-items: center;
  flex-direction: column;
`;
