import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const Link = styled.a`
  margin: 0 0 0
    ${({ theme, leftMargin }) => (leftMargin ? theme?.spacing?.medium : 0)};
`;
