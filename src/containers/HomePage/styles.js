import styled from 'styled-components';

import Text from '../../components/Text';
import { media } from '../../utils/mixins';

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
  align-content: flex-end;
  padding: ${({ theme }) => `${theme?.spacing?.medium}`};

  ${media.xLargeUp`
    align-content: center;
  `};
`;

export const StyledHeader = styled(Text).attrs({
  size: 'large',
  tag: 'h1',
})`
  flex-basis: 100%;
  margin: 0;
  max-width: 100%;

  ${media.mediumUp`
    font-size: ${({ theme }) => `${theme?.fontSize['xl']} !important;`};
  `};
  ${media.largeUp`
    font-size: ${({ theme }) => `${theme?.fontSize['xxl']} !important;`};
  `};
`;
