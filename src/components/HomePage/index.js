import React from 'react';

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
    text: 'web apps',
    color: LOVE,
    textShadowColor,
    width: '220px',
  },
  {
    text: 'games',
    color: PURPLE,
    textShadowColor,
    width: '180px',
  },
  {
    text: 'AR apps',
    color: BLOOD_ORANGE,
    textShadowColor,
    width: '200px',
  },
  {
    text: 'VR experiences',
    color: SUNSET,
    textShadowColor,
    width: '320px',
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
      <StyledSocialLinks />
    </FlexContainer>
  </Wrapper>
);

export default HomePage;
