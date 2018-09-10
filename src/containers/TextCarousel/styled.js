import styled from 'styled-components';

import Text from '../../components/Text';
import { media } from '../../utils/mixins';

export const Wrapper = styled.span`
  display: inline-block;
  width: 220px;

  ${media.xSmallUp`
    width: 320px;
  `};
`;

export const StyledText = styled(Text).attrs({
  size: 'large',
  tag: 'div',
})`
  ${({ color }) => color && `color: ${color};`}
  border: 5px solid ${({ color }) => color}
  padding: 0 1rem;
  text-align: center;
  transition: all 1s ease-in-out;
  ${({ textShadowColor }) =>
    textShadowColor && `text-shadow: 2px 2px ${textShadowColor};`}

  ${media.mediumUp`
    font-size: ${({ theme }) => `${theme?.fontSize['xl']} !important;`};
  `};
  ${media.largeUp`
    font-size: ${({ theme }) => `${theme?.fontSize['xxl']} !important;`};
  `};
`;
