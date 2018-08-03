import React, { Component } from 'react';

import {
  HeaderWrapper,
  Logo,
  ListItem,
  List,
  Nav,
  InnerHeaderWrapper,
  StyledLink,
  HamburgerContainer,
  HamburgerBar,
  LogoHamburgerContainer,
} from './styles';
import Image from '../../assets/images/mjs-logo-black-512x512.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  closeNav = () => {
    this.setState({ isOpen: false });
  };

  toggleNav = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { isOpen } = this.state;
    return (
      <HeaderWrapper>
        <InnerHeaderWrapper>
          <LogoHamburgerContainer>
            <StyledLink to="/">
              <Logo src={Image} />
            </StyledLink>
            <HamburgerContainer onClick={this.toggleNav}>
              <HamburgerBar />
              <HamburgerBar />
              <HamburgerBar />
            </HamburgerContainer>
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
                <StyledLink onClick={this.closeNav} to="/blog">
                  Blog
                </StyledLink>
              </ListItem>
            </List>
          </Nav>
        </InnerHeaderWrapper>
      </HeaderWrapper>
    );
  }
}

export default Header;
