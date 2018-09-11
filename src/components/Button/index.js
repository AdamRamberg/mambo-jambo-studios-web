import React from 'react';
import { oneOfType, func, string, arrayOf, node } from 'prop-types';

import { StyledButton } from './styled';

const Button = ({
  children,
  onClick,
  primaryColor,
  secondaryColor,
  ...rest
}) => (
  <StyledButton
    onClick={onClick}
    mainColor={primaryColor}
    secondaryColor={secondaryColor}
    {...rest}
  >
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  onClick: func.isRequired,
  primaryColor: string,
  secondaryColor: string,
};

Button.defaultProps = {
  children: null,
};

export default Button;
