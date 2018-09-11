import React from 'react';

import { BreadText, Wrapper, Image } from './styled';
import profileImage from './images/profilepic.png';

const AboutPage = () => (
  <Wrapper>
    <Image src={profileImage} />
    <span role="img" aria-label="hobbies">
      👨‍💻🎮🐶
    </span>
    <BreadText>
      My name is Adam Ramberg and I&apos;m a freelance web and game developer
      from Gothenburg, Sweden.
    </BreadText>
  </Wrapper>
);

export default AboutPage;
