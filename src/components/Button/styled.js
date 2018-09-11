import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: ${({ theme }) =>
    `${theme?.spacing?.small} ${theme?.spacing?.medium}`};
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

  &:hover {
    background-color: ${({ secondaryColor, theme }) =>
      secondaryColor || theme?.colors?.secondary || 'black'};
    color: ${({ primaryColor, theme }) =>
      primaryColor || theme?.colors?.primary || 'white'};
    transform: scale(1.1);
  }
`;
