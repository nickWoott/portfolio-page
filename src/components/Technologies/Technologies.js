import React from 'react';
import { DiFirebase, DiReact, DiZend, DiJavascript } from 'react-icons/di';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Here you will find a list of my personal and professional projects.{' '}
    </SectionText>
    <List>
      <ListItem>
        <DiJavascript size='3rem' />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Javascript <br />
            HTML5 <br />
            CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with: <br />
            React.js
            <br />
            Next.js
            <br /> Tailwind
            <br />
            Bootstrap
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with: <br />
            PSQL <br />
            Firebase
            <br /> Express <br />
            Axios <br />
            Google Cloud Platform
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
