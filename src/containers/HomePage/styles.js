import styled from 'styled-components';

import Text from '../../components/Text';

export const FlexContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  padding: ${props => `0 ${props?.theme?.spacing?.large}`};
`;

export const StyledHeader = styled(Text).attrs({
  size: 'xxl',
  tag: 'h1',
})`
  flex-basis: 100%;
  margin: 0;
`;
