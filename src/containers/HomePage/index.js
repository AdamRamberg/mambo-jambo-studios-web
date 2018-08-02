import React from 'react';

import { FlexContainer, StyledHeader } from './styles';
import TextCarousel from '../TextCarousel';

const textCarouselItems = [
  { text: 'web apps', id: 0, backgroundColor: 'mediumaquamarine' },
  { text: 'games', id: 1, backgroundColor: 'hotpink' },
  { text: 'AR apps', id: 2, backgroundColor: 'lightskyblue' },
  { text: 'VR experiences', id: 3, backgroundColor: 'mediumpurple' },
];

const HomePage = () => (
  <FlexContainer>
    <StyledHeader>I&apos;m Adam Ramberg</StyledHeader>
    <StyledHeader>
      I create&thinsp;
      <TextCarousel items={textCarouselItems} />
    </StyledHeader>
  </FlexContainer>
);

export default HomePage;
