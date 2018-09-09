import React from 'react';

import { FlexContainer, StyledHeader, Wrapper } from './styled';
import TextCarousel from '../../containers/TextCarousel';
import ThreeContainer from '../../containers/ThreeContainer';
import { LOVE, PURPLE, BLOOD_ORANGE, SUNSET } from '../../theme/colors';
import SocialLinks from '../SocialLinks';

const textShadowColor = 'rgba(0,0,0,0.1)';

const textCarouselItems = [
  {
    text: 'web apps',
    id: 0,
    color: LOVE,
    textShadowColor,
  },
  {
    text: 'games',
    id: 1,
    color: PURPLE,
    textShadowColor,
  },
  {
    text: 'AR apps',
    id: 2,
    color: BLOOD_ORANGE,
    textShadowColor,
  },
  {
    text: 'VR experiences',
    id: 3,
    color: SUNSET,
    textShadowColor,
  },
];

const HomePage = () => (
  <Wrapper>
    <ThreeContainer />
    <FlexContainer>
      <StyledHeader>Howdy! I&apos;m Adam Ramberg</StyledHeader>
      <StyledHeader>
        I create&thinsp;
        <TextCarousel items={textCarouselItems} />
      </StyledHeader>
      <SocialLinks />
    </FlexContainer>
  </Wrapper>
);

export default HomePage;
