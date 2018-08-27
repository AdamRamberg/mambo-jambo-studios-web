import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { media } from '../../utils/mixins';
import Hamburger from '../../components/Hamburger';

const HEADER_HEIGHT = '64px';

export const HeaderWrapper = styled.header`
  position: sticky;
  height: ${props => props?.theme?.theme?.height || HEADER_HEIGHT};
  width: 100%;
`;

export const InnerHeaderWrapper = styled.div`
  padding: 0 8px;
  width: 100%;

  ${media.mediumUp`
    display: flex;
  `};
`;

export const Logo = styled.img`
  height: ${props => props?.theme?.theme?.height || HEADER_HEIGHT};
  width: auto;
  padding: 8px;
`;

export const Nav = styled.nav`
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? `auto` : `0px`)};
  overflow: hidden;

  ${media.mediumUp`
    width: auto;
    height: auto;
    flex-basis: 100%;
  `};
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.mediumUp`
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  `};
`;

export const ListItem = styled.li`
  padding: ${({ theme }) => `${theme?.spacing?.small} 0`};

  ${media.mediumUp`
    padding: ${({ theme }) => `0 ${theme?.spacing?.medium}`};
  `};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme?.colors?.text?.primary};
`;

export const LogoHamburgerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${media.mediumUp`
      width: auto;
  `};
`;

export const StyledHamburger = styled(Hamburger)`
  height: ${props => props?.theme?.theme?.height || HEADER_HEIGHT};
  width: ${props => props?.theme?.theme?.height || HEADER_HEIGHT};

  ${media.mediumUp`
    display: none;
  `};
`;
