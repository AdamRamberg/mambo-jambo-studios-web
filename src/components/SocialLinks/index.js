import React from 'react';

import { Wrapper, Link } from './styled';
import SVGIcon from '../SVGIcon';
import './icons/github.svg';
import './icons/gmail.svg';
import './icons/linkedin.svg';

const SocialLinks = () => (
  <Wrapper>
    <Link target="_blank" href="https://github.com/AdamRamberg">
      <SVGIcon name="github" />
    </Link>
    <Link
      leftMargin
      target="_blank"
      href="https://www.linkedin.com/in/adam-ramberg-261b1162/"
    >
      <SVGIcon name="linkedin" />
    </Link>
    <Link leftMargin href="mailto:adam@mambojambostudios.com">
      <SVGIcon name="gmail" />
    </Link>
  </Wrapper>
);

export default SocialLinks;
