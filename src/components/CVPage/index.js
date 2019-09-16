import React from 'react';
import fbt from 'fbt';
import { Wrapper, BreadText, H1, H2, H3, Details, ListItem } from './styled';

export default () => (
  <Wrapper>
    <Details>
      Adam Ramberg <br />
      Storgatan 41B 871 30, Härnösand <br />
      +46 723 26 85 86 <br />
      <a href="mailto:adam@mambojambostudios.com">adam@mambojambostudios.com</a>
    </Details>
    <H1>
      <fbt desc="cv.heading">Senior React & Node.js developer</fbt>
    </H1>
    <H2>
      <fbt desc="cv.summary.heading">Summary</fbt>
    </H2>
    <BreadText>
      <fbt desc="cv.summary.body">
        Ever since I programmed a race between a turtle and a rabbit in Visual
        Basics in school I have been motivated to use my problem solving skills,
        creativity and knowledge to create digital experiences, products and
        solutions. I like responsibilities and it excites me when me and my team
        have the opportunity to influence and to take ownership of the solution
        we deliver. An environment where I am encouraged to try new ideas and
        question the way problems are currently solved in order to improve is
        where I thrive the most. Since I value freedom and choice, I started my
        own company in 2015 in order to work as a consultant and freelancer to
        be able to pick work that really motivates me.
      </fbt>
    </BreadText>
    <H2>
      <fbt desc="cv.experience.heading">Experience</fbt>
    </H2>
    <H3>
      <fbt desc="cv.experience.vgcs.heading">
        2017 - curent. Senior frontend developer at VGCS (Volvo) - self employed
      </fbt>
    </H3>
    <BreadText>
      <fbt desc="cv.experience.vgcs.body">
        In the winter of 2017 I started my current contract as a senior frontend
        framework developer at VGCS (Volvo Group Connected Solutions) located at
        Lindholmen, Gothenburg. The contract started on site. but since me and
        my wife moved to another city in the early 2019, I have worked remotely.
        The work has been focused on building Volvo Connect, Volvo’s next
        generation digital platform offering digital services to its customers.
        I have been part of the UI Framework team, which means that I have
        worked with common libraries (UI, data layer, data fetching, etc.), best
        practices, infrastructure (CI/CD), but I have also developed components
        and views in React. I have used the following tech and frameworks (among
        others): React, Redux, Redux-Saga, Express.js, AWS, Webpack, Jest, etc.
        During a period of 6 months I was also the scrum master of my team.
      </fbt>
    </BreadText>
    <H3>
      <fbt desc="cv.experience.maverick.heading">
        2017 (3 months). Frontend developer at Maverick by Sigma - self employed
      </fbt>
    </H3>
    <BreadText>
      <fbt desc="cv.experience.maverick.body">
        In the fall of 2017 I did my first full-time contract as a freelancer /
        consultant and it was for a communication and web agency called Maverick
        by Sigma. At Maverick I worked together with art and UX designers to
        produce a white label website that was suited and rebrandable for 7
        different brands. The tech stack used was Javascript, Sass and Webpack.
      </fbt>
    </BreadText>
    <H3>
      <fbt desc="cv.experience.annevo.heading">
        2017. Fullstack developer at Annevo - employed
      </fbt>
    </H3>
    <BreadText>
      <fbt desc="cv.experience.annevo.body">
        In the beginning of 2017 I started to work at a consulting agency called
        Annevo. During my time at Annevo I worked on 3 projects: an online
        multiplayer mobile game in Unity3d, a mobile app developed in React
        Native, and on a route optimization system developed in React (frontend)
        and in C# (backend). I also gained experience using Azure, AWS and mLab
        (MongoDB).
      </fbt>
    </BreadText>
    <H3>
      <fbt desc="cv.experience.astro.heading">
        2017. The Astro - self made / self published game
      </fbt>
    </H3>
    <BreadText>
      <fbt desc="cv.experience.astro.body">
        In the spring of 2017 I worked together with the YouTuber Erik Thorsell
        (also known as Hazardous) to develop a casual mobile game in Unity3D
        (C#). It was released for both iOS and Android and was downloaded more
        than 30000 times.
      </fbt>
    </BreadText>
    <H3>
      <fbt desc="cv.experience.fordonsgas.heading">
        2015. FordonsGas Sverige (mobile app) - self employed
      </fbt>
    </H3>
    <BreadText>
      <fbt desc="cv.experience.fordonsgas.body">
        During the fall of 2015 I started my career working in my own company as
        a consultant / freelancer. My first job was to develop a mobile app for
        FordonsGas Sverige where one could find all their gas stations. I was
        responsible for the full process, for example gather requirements,
        design, development, testing and release. The tech used was Objective-C,
        Java (Android), AWS and MongoDB.
      </fbt>
    </BreadText>
    <H2>
      <fbt desc="cv.other-experience.heading">Other experiences</fbt>
    </H2>
    <ul>
      <ListItem>
        <fbt desc="cv.other-experience.cellmark">
          2015 - 2016. Developer at CellMark (C# and SQL).
        </fbt>
      </ListItem>
      <ListItem>
        <fbt desc="cv.other-experience-noventus">
          2013 - 2015. Developer at Noventus (C++, C#, SQL).
        </fbt>
      </ListItem>
      <ListItem>
        <fbt desc="cv.other-experience-postman">
          2008 - 2009. Posten - postman.
        </fbt>
      </ListItem>
    </ul>
    <H2>
      <fbt desc="cv.education.heading">Education</fbt>
    </H2>
    <ul>
      <ListItem>
        <fbt desc="cv.education.stjohns">
          2009 - 2013. Bachelor degrees from Saint John’s University (Minnesota,
          USA) majoring in Computer Science and minioring in art.
        </fbt>
      </ListItem>
      <ListItem>
        <fbt desc="cv.education.porthalla">
          2005 - 2008. High school degree in science and athletics from
          Porthälla Gymnasium.
        </fbt>
      </ListItem>
    </ul>
    <H2>
      <fbt desc="cv.acamdemic-merits.heading">Academic Merits</fbt>
    </H2>
    <ul>
      <ListItem>
        <fbt desc="cv.acamdemic-merits.magnacumlaude">
          Magna Cum Laude (graduated with grades above 3.75)
        </fbt>
      </ListItem>
    </ul>
    <H2>
      <fbt desc="cv.knowledge.heading">Technical Knowledge</fbt>
    </H2>
    <BreadText>
      <fbt desc="cv.knowledge.body">
        Prefer to work with Javascript, Node.js, React, CSS, HTML and C#. I also
        have knowledge in AWS, React Native, Gatsby, Next.js, Unity3D, Git,
        Photoshop, SQL / NoSQL.
      </fbt>
    </BreadText>
    <H2>
      <fbt desc="cv.other.heading">Other</fbt>
    </H2>
    <ul>
      <ListItem>
        <fbt desc="cv.other.language">Fluent in Swedish and English</fbt>
      </ListItem>
      <ListItem>
        <fbt desc="cv.other.driverslicense">Drivers license</fbt>
      </ListItem>
    </ul>
    <H2>
      <fbt desc="cv.refs.heading">References and certificates</fbt>
    </H2>
    <BreadText>
      <fbt desc="cv.refs.body">Available upon request.</fbt>
    </BreadText>
    <H2>
      <fbt desc="cv.portfolio.heading">Portfolio</fbt>
    </H2>
    <ul>
      <ListItem>
        <fbt desc="cv.portfolio.github">
          Github:
          <a href="https://github.com/AdamRamberg">
            https://github.com/AdamRamberg
          </a>
        </fbt>
      </ListItem>
      <ListItem>
        <fbt desc="cv.portfolio.medium">
          Technical blog:
          <a href="https://medium.com/@adamramberg/">
            https://medium.com/@adamramberg/
          </a>
        </fbt>
      </ListItem>
      <ListItem>
        <fbt desc="cv.portfolio.interactive">
          Interactive portfolio from 2017 developed in Unity3D:
          <a href="http://portfolio.mambojambostudios.com/">
            http://portfolio.mambojambostudios.com/
          </a>
        </fbt>
      </ListItem>
    </ul>
  </Wrapper>
);
