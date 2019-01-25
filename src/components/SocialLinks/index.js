import React from 'react';

import { Wrapper, Link } from './styled';
import SVGIcon from '../SVGIcon';
import './icons/github.svg';
import './icons/twitter.svg';
import './icons/linkedin.svg';
import './icons/gmail.svg';
import { PURPLE, SUNSET, BLOOD_ORANGE, LOVE } from '../../theme/colors';

const SocialLinks = ({ ...rest }) => (
  <Wrapper {...rest}>
    <Link
      target="_blank"
      href="https://github.com/AdamRamberg"
      hoverColor={LOVE}
    >
      <SVGIcon name="github" />
    </Link>
    <Link
      leftMargin
      target="_blank"
      href="https://twitter.com/adamramberg1"
      hoverColor={SUNSET}
    >
      <SVGIcon name="twitter" />
    </Link>
    <Link
      leftMargin
      target="_blank"
      href="https://www.linkedin.com/in/adam-ramberg-261b1162/"
      hoverColor={PURPLE}
    >
      <SVGIcon name="linkedin" />
    </Link>
    <Link
      leftMargin
      href="mailto:adam@mambojambostudios.com"
      hoverColor={BLOOD_ORANGE}
    >
      <SVGIcon name="gmail" />
    </Link>
  </Wrapper>
);

export default SocialLinks;
