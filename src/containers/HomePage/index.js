import React from 'react';

import { FlexContainer, StyledHeader, Wrapper } from './styles';
import TextCarousel from '../TextCarousel';
import ThreeContainer from '../ThreeContainer';
import { WHITE, LOVE, PURPLE, BLOOD_ORANGE, SUNSET } from '../../theme/colors';

const textShadowColor = 'rgba(0,0,0,0.1)';

const textCarouselItems = [
  {
    text: 'web apps',
    id: 0,
    backgroundColor: LOVE,
    color: WHITE,
    textShadowColor,
  },
  {
    text: 'games',
    id: 1,
    backgroundColor: PURPLE,
    color: WHITE,
    textShadowColor,
  },
  {
    text: 'AR apps',
    id: 2,
    backgroundColor: BLOOD_ORANGE,
    color: WHITE,
    textShadowColor,
  },
  {
    text: 'VR experiences',
    id: 3,
    backgroundColor: SUNSET,
    color: WHITE,
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
    </FlexContainer>
  </Wrapper>
);

export default HomePage;
