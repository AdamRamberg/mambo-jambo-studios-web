import styled from 'styled-components';

import Text from '../../components/Text';
import { media } from '../../utils/mixins';

export const Wrapper = styled.span`
  display: inline-block;
  position: absolute;
`;

export const StyledText = styled(Text).attrs({
  size: 'large',
  tag: 'div',
})`
  ${({ color }) => color && `color: ${color};`}
  position: absolute;
  width: 320px;
  display: inline-block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: ${({ visible }) => (visible ? '1;' : `0;`)}
  padding: 0 0.3rem;
  transition: all 0.3s ease-in-out;
  ${({ textShadowColor }) =>
    textShadowColor && `text-shadow: 2px 2px ${textShadowColor};`}

  ${media.mediumUp`
    font-size: ${({ theme }) => `${theme?.fontSize['xl']} !important;`};
  `};
  ${media.largeUp`
    font-size: ${({ theme }) => `${theme?.fontSize['xxl']} !important;`};
  `};
`;
