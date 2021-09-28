import React from 'react';
import {
  Section,
  SectionDivider,
  SectionTitle
} from '../../styles/GlobalComponents';
import {
  Box,
  Boxes,
  BoxNum,
  BoxText
} from './AccomplishmentsStyles';

const data = [
  { number: 82, text: 'GitHub Repositories'},
  { number: 1000, text: 'Commits in the last year'},
  { number: 11, text: 'Github Followers'},
  { number: 19, text: 'Github Stars'}
];

const Accomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider colorAlt/>
  </Section>
);

export default Accomplishments;
