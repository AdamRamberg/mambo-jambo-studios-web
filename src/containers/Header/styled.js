import styled from 'styled-components';
import { Link } from '@reach/router';

import Hamburger from '../Hamburger';
import SocialLinks from '../../components/SocialLinks';

const HEADER_HEIGHT = '64px';

export const HeaderWrapper = styled.header`
  position: relative;
  height: ${({ theme }) => theme?.header?.height || HEADER_HEIGHT};
  width: 100%;

  ${({ theme }) => theme.media.mediumUp`
    display: flex;
    overflow: hidden;
  `};
`;

export const Logo = styled.img`
  height: ${({ theme }) => theme?.header?.height || HEADER_HEIGHT};
  width: auto;
  padding: 8px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Nav = styled.nav`
  position: absolute;
  z-index: 10;
  height: 100vh;
  overflow: hidden;
  background: ${({ theme }) => theme?.colors?.transparentPrimary};
  top: 0;
  width: 100vw;
  right: ${({ isOpen }) => (isOpen ? 0 : 'calc(100vw)')};
  transition: 0.1s linear;

  ${({ theme }) => theme.media.mediumUp`
    transition: 0;
    width: 100%;
    height: auto;
    right: 0;
    position: relative;
    top: none;
    background: none;
    width: auto;
    height: auto;
    flex-basis: 100%;
  `};
`;

export const List = styled.ul`
  list-style: none;
  margin: ${({ theme }) => theme?.spacing?.m};
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.media.mediumUp`
    margin: 0;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  `};
`;

export const ListItem = styled.li`
  padding: ${({ theme }) => `${theme?.spacing?.m} ${theme?.spacing?.l} `};
  width: 100%;
  text-align: right;
  font-size: ${({ theme }) => `${theme?.fontSize['large']};`};

  ${({ theme }) => theme.media.mediumUp`
    font-size: ${theme?.fontSize['default']};
    text-align: center;
    padding: 0 ${theme?.spacing?.m}
    width: auto;
  `};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme?.colors?.text?.primary};
  transition: all 0.2s ease-in-out;
  border-bottom: 5px solid transparent;

  &:hover {
    border-bottom: 5px solid ${({ theme }) => theme?.colors?.accent};
  }
`;

export const LogoHamburgerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${({ theme }) => theme.media.mediumUp`
      width: auto;
  `};
`;

export const StyledHamburger = styled(Hamburger)`
  height: ${props => props?.theme?.theme?.height || HEADER_HEIGHT};
  width: ${props => props?.theme?.theme?.height || HEADER_HEIGHT};
  z-index: 20;
  position: relative;

  ${({ theme }) => theme.media.mediumUp`
    display: none;
  `};
`;

export const StyledSocialLinks = styled(SocialLinks)`
  display: block;
  position: absolute;
  bottom: ${({ theme }) => theme?.spacing?.m};
  right: ${({ theme }) => theme?.spacing?.xl};

  ${({ theme }) => theme.media.mediumUp`
    display: none;
  `};
`;
