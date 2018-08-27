import React from 'react';

import { FlexContainer, StyledHeader, Wrapper } from './styles';
import TextCarousel from '../TextCarousel';
import ThreeContainer from '../ThreeContainer';

const textCarouselItems = [
  { text: 'web apps', id: 0, backgroundColor: '#09ffbf' },
  { text: 'games', id: 1, backgroundColor: '#ffbde7' },
  { text: 'AR apps', id: 2, backgroundColor: '#09e5ff' },
  { text: 'VR experiences', id: 3, backgroundColor: '#ffd909' },
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
