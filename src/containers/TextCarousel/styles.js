import styled from 'styled-components';

import Text from '../../components/Text';

export const Wrapper = styled.span`
  display: inline-flex;
  width: ${({ width }) => width || '320px'};
  box-shadow: 5px 5px rgba(0, 0, 0, 0.2);
`;

export const StyledText = styled(Text).attrs({
  size: 'xxl',
  tag: 'div',
  color: 'white',
})`
  padding: ${({ visible }) => (visible ? '0 1rem' : '0')};
  transition: flex 0.2s ease-in-out;
  flex: ${({ visible }) => (visible ? '1' : '0')};
  overflow: hidden;
  text-align: center;
  text-overflow: clip;
  white-space: nowrap;
`;
