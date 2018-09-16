import styled, { css } from 'styled-components';
import { Link } from '@reach/router';

const styling = css`
  padding: ${({ theme }) => `${theme?.spacing?.sm} ${theme?.spacing?.m}`};
  text-align: center;
  border: 5px solid
    ${({ secondaryColor, theme }) =>
      secondaryColor || theme?.colors?.secondary || 'black'};
  background-color: ${({ primaryColor, theme }) =>
    primaryColor || theme?.colors?.primary || 'white'};
  font-size: ${({ theme }) => theme?.fontSize['medium']};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  outline: none;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    background-color: ${({ secondaryColor, theme }) =>
      secondaryColor || theme?.colors?.secondary || 'black'};
    color: ${({ primaryColor, theme }) =>
      primaryColor || theme?.colors?.primary || 'white'};
    transform: scale(1.1);
  }
`;

export const StyledButton = styled.button`
  ${styling};
`;

export const StyledLink = styled(Link)`
  ${styling};
`;
