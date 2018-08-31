import styled from 'styled-components';

import Text from '../../components/Text';
import { media } from '../../utils/mixins';

export const Wrapper = styled.span`
  display: flex;
  width: 100%;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.5);

  ${media.xSmallUp`
    display: inline-flex;
    width: ${({ width }) => width || '320px'};
  `};
`;

export const StyledText = styled(Text).attrs({
  size: 'large',
  tag: 'div',
})`
  border-radius: 24px;
  ${({ color }) => color && `color: ${color};`}
  padding: ${({ visible }) => (visible ? '0 1rem' : '0')};
  transition: flex 0.2s ease-in-out;
  flex: ${({ visible }) => (visible ? '1' : '0')};
  overflow: hidden;
  text-align: center;
  text-overflow: clip;
  white-space: nowrap;
  ${({ textShadowColor }) =>
    textShadowColor && `text-shadow: 2px 2px ${textShadowColor};`}

  ${media.mediumUp`
    font-size: ${({ theme }) => `${theme?.fontSize['xl']} !important;`};
  `};
  ${media.largeUp`
    font-size: ${({ theme }) => `${theme?.fontSize['xxl']} !important;`};
  `};
`;
