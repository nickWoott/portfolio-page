import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Nick Wootton{" "}
      </SectionTitle>
      <SectionTitle>Software Developer</SectionTitle>
      <SectionText>Hi there.</SectionText>
      <SectionText>
        I'm currently making some improvements to my site.
      </SectionText>
      <SectionText>Check back soon.</SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
