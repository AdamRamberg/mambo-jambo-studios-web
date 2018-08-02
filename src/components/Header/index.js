import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderWrapper, Logo, ListItem, List } from './styles';
import Image from '../../assets/images/mjs-logo-black-512x512.png';

const Header = () => (
  <HeaderWrapper>
    <nav>
      <Link to="/">
        <Logo src={Image} />
      </Link>
      <List>
        <ListItem>
          <Link to="/about">About</Link>
        </ListItem>
        <ListItem>
          <Link to="/portfolio">Portfolio</Link>
        </ListItem>
        <ListItem>
          <Link to="/blog">Blog</Link>
        </ListItem>
      </List>
    </nav>
  </HeaderWrapper>
);

export default Header;
