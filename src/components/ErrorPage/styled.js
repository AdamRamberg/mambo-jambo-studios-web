import styled from 'styled-components';

import Text from '../Text';

export const Wrapper = styled.div`
  padding: ${({ theme }) => `${theme?.spacing?.medium}`};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Heading = styled(Text).attrs({
  size: 'large',
  tag: 'h1',
})``;
