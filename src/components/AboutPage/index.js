import React from 'react';

import { BreadText, Wrapper, Image, List, ListItem, EmailLink } from './styled';
import profileImage from './images/profilepic-lowres.jpg';
const AboutPage = () => (
  <Wrapper>
    <Image src={profileImage} />
    <BreadText>
      My name is Adam Ramberg and I&apos;m a freelance web and game developer
      from Gothenburg, Sweden. Since the fall of 2017 I run my own company
      called Mambo Jambo Studios AB. Through my company I do contract and
      freelance jobs.
    </BreadText>
    <List>
      <ListItem>
        <span role="img" aria-label="coding">
          👨‍💻
        </span>
        Prefer to work with Unity3D / C#, javascript, CSS, React, Redux, AWS and
        Node.js.
      </ListItem>
      <ListItem>
        <span role="img" aria-label="coffee">
          ☕
        </span>
        Inspired by a hot cup of coffee and excellent music.
      </ListItem>
      <ListItem>
        <span role="img" aria-label="hobbies">
          🐶
        </span>
        Enjoy spending time with my dog Mimmi.
      </ListItem>
    </List>
    <BreadText>
      Do you want to work together or just want to chat?&nbsp;
      <EmailLink mailTo="adam@mambojambostudios.com">
        Send me an email.
      </EmailLink>
    </BreadText>
  </Wrapper>
);

export default AboutPage;
