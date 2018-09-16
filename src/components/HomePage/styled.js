import styled from 'styled-components';

import Text from '../Text';
import SocialLinks from '../SocialLinks';

export const Wrapper = styled.div`
  position: relative;
  height: ${({ theme }) => `calc(100vh - ${theme?.header?.height})`};
  width: 100%;
`;

export const FlexContainer = styled.div`
  position: relative;
  z-index: 5;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-end;
  padding: ${({ theme }) => `${theme?.spacing?.medium}`};

  ${({ theme }) => theme.media.xLargeUp`
    align-content: center;
  `};
`;

export const StyledHeader = styled(Text).attrs({
  size: 'large',
  tag: 'h1',
})`
  flex-basis: 100%;
  margin: 0;
  max-width: 100%;

  ${({ theme }) => theme.media.mediumUp`
    font-size: ${theme?.fontSize['xl']} !important;
  `};
  ${({ theme }) => theme.media.largeUp`
    font-size: ${theme?.fontSize['xxl']} !important;
  `};
`;

export const StyledSocialLinks = styled(SocialLinks)`
  display: none;
  position: absolute;
  right: ${({ theme }) => theme?.spacing?.medium};
  bottom: ${({ theme }) => theme?.spacing?.medium};

  ${({ theme }) => theme.media.mediumUp`
    display: block;
  `};
`;
