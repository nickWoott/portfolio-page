import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br /> My Portfolio
      </SectionTitle>
      <SectionText>
        Hi there. My name's Nick and I'm a Manchester based Software Developer.
        I'm a recent graduate of the Northcoders bootcamp and I'm looking for my
        first role in the industry. On this page you can learn a little about
        me, the projects I've worked on and the technolgies I've learned so far.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
