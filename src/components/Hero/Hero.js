import React from 'react';
import Link from 'next/link';
import {
  Section,
  SectionText,
  SectionTitle
} from '../../styles/GlobalComponents';
import { motion } from 'framer-motion';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <motion.div initial="hidden" animate="visible" variants={{
          hidden:{
            scale: 0.3,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.2,
              duration: 5,
            }
          },
        }}>
          <SectionTitle main center>
            Welcome To <br />
            My Personal Portfolio
          </SectionTitle>
        </motion.div>
        <SectionText>
          My name is Erika Debelis and this portfolio site was designed to provide employers and clients with insight into my professional skills and  potential as a developer. I have also included some personal information so that others may understand my motivations that led me to choose the career of software engineering.
        </SectionText>
        <Link href="#about">
          <Button type= "button">Learn More</Button>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;