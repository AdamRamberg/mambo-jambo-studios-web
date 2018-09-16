import { string, oneOf } from 'prop-types';
import styled from 'styled-components';

import { WHITE } from '../../theme/colors';

const Link = styled.a`
  color: ${({ color, theme }) => color || theme?.colors?.accent || WHITE};
  font-size: ${({ size, theme }) =>
    theme?.fontSize[size] || theme?.fontSize?.default || '1rem'};
  line-height: 1.2;
  font-weight: ${({ fontWeight }) => fontWeight};

  &:hover {
    color: ${({ hoverColor, theme }) =>
      hoverColor || theme?.colors?.brightAccent || WHITE};
  }
`;

Link.defaultProps = {
  size: 'default',
};

Link.propTypes = {
  color: string,
  hoverColor: string,
  size: string,
  fontWeight: oneOf([
    'normal',
    'bold',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ]),
};

export default Link;
