import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${({ theme }) => `${theme?.spacing?.m}`};
  display: flex;
  align-items: center;
  flex-direction: column;
`;
