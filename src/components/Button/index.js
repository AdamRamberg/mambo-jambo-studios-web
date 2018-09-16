import React from 'react';
import {
  oneOfType,
  func,
  string,
  arrayOf,
  node,
  object,
  bool,
} from 'prop-types';

import { StyledButton, StyledLink } from './styled';

const Button = ({ children, reachRouterLink, ...rest }) =>
  reachRouterLink ? (
    <StyledLink {...rest}>{children}</StyledLink>
  ) : (
    <StyledButton {...rest}>{children}</StyledButton>
  );

Button.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  onClick: func,
  primaryColor: string,
  secondaryColor: string,
  tag: oneOfType([string, node, object]),
  reachRouterLink: bool,
};

Button.defaultProps = {
  children: null,
  tag: undefined,
  reachRouterLink: false,
};

export default Button;
