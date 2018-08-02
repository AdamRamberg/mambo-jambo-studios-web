import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withDynamicTag } from '../../utils/withDynamicTag';

const Text = styled.h1`
  color: ${({ color, theme }) => color || theme?.color || 'black'};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'transparent'};
  font-size: ${({ size, theme }) =>
    theme?.fontSize[size] || theme?.fontSize?.default || '1rem'};
`;

Text.propTypes = {
  tag: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
};

export default withDynamicTag(Text);
