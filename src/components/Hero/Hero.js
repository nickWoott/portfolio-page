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
        Hi there. My name's Nick and I'm a Manchester based full-stack
        software-engineer. Welcome to my site, where you can find out a little
        bit more about my proficiencies and links to my personal and
        professional projects.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
