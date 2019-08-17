import React from 'react';
import fbt from 'fbt';

import { BreadText, Wrapper, Image, List, ListItem, EmailLink } from './styled';
import profileImage from './images/profilepic-lowres.jpg';
const AboutPage = () => (
  <Wrapper>
    <Image src={profileImage} />
    <BreadText>
      <fbt desc="about body text">
        My name is Adam Ramberg and I&apos;m a freelance web and game developer
        from Gothenburg, Sweden. Since the fall of 2017 I run my own company
        called Mambo Jambo Studios AB. Through my company I do contract and
        freelance jobs.
      </fbt>
    </BreadText>
    <List>
      <ListItem>
        <span role="img" aria-label="coding">
          👨‍💻
        </span>
        <fbt desc="about li coding skills">
          Prefer to work with Unity3D / C#, javascript, CSS, React, Redux, AWS
          and Node.js.
        </fbt>
      </ListItem>
      <ListItem>
        <span role="img" aria-label="coffee">
          ☕
        </span>
        <fbt desc="about li inspired">
          Inspired by a hot cup of coffee and excellent music.
        </fbt>
      </ListItem>
      <ListItem>
        <span role="img" aria-label="hobbies">
          🐶
        </span>
        <fbt desc="about li hobbies">
          Enjoy spending time with my dog Mimmi.
        </fbt>
      </ListItem>
    </List>
    <BreadText>
      <fbt desc="about contact text">
        Do you want to work together or just want to chat?
      </fbt>
      &nbsp;
      <EmailLink mailTo="adam@mambojambostudios.com">
        <fbt desc="about email link">Send me an email.</fbt>
      </EmailLink>
    </BreadText>
  </Wrapper>
);

export default AboutPage;
