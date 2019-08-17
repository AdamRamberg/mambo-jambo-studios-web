import React from 'react';
import fbt from 'fbt';

import {
  FlexContainer,
  StyledHeader,
  Wrapper,
  StyledSocialLinks,
} from './styled';
import TextCarousel from '../../containers/TextCarousel';
import ThreeContainer from '../../containers/ThreeContainer';
import { LOVE, PURPLE, BLOOD_ORANGE, SUNSET } from '../../theme/colors';

const textShadowColor = 'rgba(0,0,0,0.1)';

const textCarouselItems = [
  {
    text: <fbt desc="text carousel item web apps">web apps</fbt>,
    color: LOVE,
    textShadowColor,
    width: '220px',
  },
  {
    text: <fbt desc="text carousel item games">games</fbt>,
    color: PURPLE,
    textShadowColor,
    width: '180px',
  },
  {
    text: <fbt desc="text carousel item AR apps">AR apps</fbt>,
    color: BLOOD_ORANGE,
    textShadowColor,
    width: '200px',
  },
  {
    text: <fbt desc="text carousel item VR experiences">VR experiences</fbt>,
    color: SUNSET,
    textShadowColor,
    width: '320px',
  },
];

const HomePage = () => (
  <Wrapper>
    <ThreeContainer />
    <FlexContainer>
      <StyledHeader>
        <fbt desc="home page howdy title">Howdy! I&apos;m Adam Ramberg</fbt>
      </StyledHeader>
      <StyledHeader>
        <fbt desc="home page I create">I create</fbt>
        &thinsp;
        <TextCarousel items={textCarouselItems} />
      </StyledHeader>
      <StyledSocialLinks />
    </FlexContainer>
  </Wrapper>
);

export default HomePage;
