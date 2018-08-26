import styled from 'styled-components';

import Text from '../../components/Text';

const HEADER_HEIGHT = '64px';

export const Wrapper = styled.div`
  position: relative;
  height: ${props =>
    `calc(100vh - ${props?.theme?.height?.height || HEADER_HEIGHT})`};
  width: 100%;
`;

export const FlexContainer = styled.div`
  position: relative;
  z-index: 5;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  padding: ${({ theme }) => `0 ${theme?.spacing?.medium}`};
`;

export const StyledHeader = styled(Text).attrs({
  size: 'xxl',
  tag: 'h1',
})`
  flex-basis: 100%;
  margin: 0;
  max-width: 100%;
`;
