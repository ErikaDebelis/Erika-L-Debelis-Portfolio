import React from 'react';
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
          My purpose is to grow my knowledge and skills; development and innovation brought to the next level via creative apps in the tech industry.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;