import React, { Component } from 'react';
import { object } from 'prop-types';
import { withTheme } from 'styled-components';
import { Link } from '@reach/router';

import {
  HeaderWrapper,
  Logo,
  ListItem,
  List,
  Nav,
  StyledLink,
  LogoHamburgerContainer,
  StyledHamburger,
  StyledSocialLinks,
} from './styled';
import Image from '../../assets/images/mjs-logo-200x200-allwhite.png';

class Header extends Component {
  state = {
    isOpen: false,
  };

  closeNav = () => {
    this.setState({ isOpen: false });
  };

  toggleNav = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { isOpen } = this.state;
    const { primary: hamburgerColor } = this.props.theme.colors.text;
    return (
      <HeaderWrapper>
        <LogoHamburgerContainer>
          <Link to="/">
            <Logo src={Image} />
          </Link>
          <StyledHamburger
            open={isOpen}
            onClick={this.toggleNav}
            animationType="elastic"
            color={hamburgerColor}
          />
        </LogoHamburgerContainer>
        <Nav isOpen={isOpen}>
          <List>
            <ListItem>
              <StyledLink onClick={this.closeNav} to="/about">
                About
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink onClick={this.closeNav} to="/portfolio">
                Portfolio
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink
                tag="a"
                onClick={this.closeNav}
                target="_blank"
                href="https://medium.com/@adamramberg/"
              >
                Blog
              </StyledLink>
            </ListItem>
          </List>
          <StyledSocialLinks />
        </Nav>
      </HeaderWrapper>
    );
  }
}

Header.propTypes = {
  theme: object,
};

export default withTheme(Header);
