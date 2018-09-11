import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const Link = styled.a`
  margin: 0 0 0
    ${({ theme, leftMargin }) => (leftMargin ? theme?.spacing?.medium : 0)};
  transition: all 0.2s ease-in-out;

  &:hover > * {
    fill: ${({ theme, hoverColor }) => hoverColor || theme?.colors?.accent};
    transform: scale(1.1);
  }
`;
