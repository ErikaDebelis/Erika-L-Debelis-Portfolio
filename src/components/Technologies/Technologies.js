import React from 'react'
import {
  DiFirebase,
  DiReact,
  DiZend
} from "react-icons/di"
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle
} from '../../styles/GlobalComponents'
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle
} from "./TechnologiesStyles";

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="4rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with C# and Javascript:<br />
            VB.Net,
            React.js,
            Vue.js,
            Next.js,
            JQuery,
            CSS,
            Bootstrap,
            HTML5
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="4rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with C# and Javascript:<br />
            .Net Core 5 + 6,
            ASP .Net MVC,
            Entity Framework Core,
            Node.js,
            MySQL,
            NoSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
