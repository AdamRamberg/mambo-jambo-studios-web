import PropTypes from 'prop-types';
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
`;

Text.propTypes = {
  tag: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
};

export default withDynamicTag(Text);
