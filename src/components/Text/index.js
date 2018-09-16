import { string, oneOf } from 'prop-types';
import styled from 'styled-components';

import { BLACK } from '../../theme/colors';
import { withDynamicTag } from '../../utils/withDynamicTag';

const Text = styled.h1`
  color: ${({ color, theme }) =>
    color || theme?.colors?.text?.primary || BLACK};
  background: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  font-size: ${({ size, theme }) =>
    theme?.fontSize[size] || theme?.fontSize?.default || '1rem'};
  line-height: 1.2;
  font-weight: ${({ fontWeight }) => fontWeight};

  ${({ theme, size }) => theme.media.smallUp`
    font-size: ${theme?.fontSize[size] || theme?.fontSize?.default || '1rem'};
  `};
`;

Text.defaultProps = {
  fontWeight: 'normal',
  size: 'default',
};

Text.propTypes = {
  tag: string.isRequired,
  color: string,
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

export default withDynamicTag(Text);
