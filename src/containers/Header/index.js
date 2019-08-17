import React, { useState } from 'react';
import fbt from 'fbt';
import { object } from 'prop-types';
import { withTheme } from 'styled-components';

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
  StyledHomeLink,
  LogoText,
} from './styled';
import Image from '../../assets/images/mjs-logo-200x200-allwhite.png';
import LocaleSelector from './localeSelector';

const Header = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeNav = () => setIsOpen(false);
  const toggleNav = () => setIsOpen(!isOpen);

  const { primary: hamburgerColor } = theme.colors.text;
  return (
    <HeaderWrapper>
      <LogoHamburgerContainer>
        <StyledHomeLink to="/">
          <Logo src={Image} />
          <LogoText>Mambo Jambo Studios</LogoText>
        </StyledHomeLink>
        <StyledHamburger
          open={isOpen}
          onClick={toggleNav}
          animationType="elastic"
          color={hamburgerColor}
        />
      </LogoHamburgerContainer>
      <Nav isOpen={isOpen}>
        <List>
          <ListItem>
            <StyledLink onClick={closeNav} to="/about">
              <fbt desc="header item about">About</fbt>
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink onClick={closeNav} to="/portfolio">
              <fbt desc="header item portfolio">Portfolio</fbt>
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink
              tag="a"
              onClick={closeNav}
              target="_blank"
              href="https://medium.com/@adamramberg/"
            >
              <fbt desc="header item blog">Blog</fbt>
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink onClick={closeNav} to="/cv">
              <fbt desc="header item cv">CV (SWE)</fbt>
            </StyledLink>
          </ListItem>
          <ListItem>
            <LocaleSelector />
          </ListItem>
        </List>
        <StyledSocialLinks />
      </Nav>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  theme: object,
};

export default withTheme(Header);
