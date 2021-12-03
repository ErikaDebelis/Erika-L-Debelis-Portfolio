import React, {
  useState,
  useRef,
  useEffect
} from 'react';

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode
} from './TimeLineStyles';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle
} from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);
      setActiveItem(index);
    }
  }

  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
        <p>
          After graduating high school, I attended college for 2 years. During those early years I never felt inspired or drawn to any particular career path. 
          After completing the required gen-ed courses it became apparent that I lacked the direction I craved in my pursuit of higher education. 
          This prompted me to pause my education until I achieved the necessary inspiration and insight into who I am professionally and what career path compliments this facet of my personality.
          In the interim, I had several jobs and they provided me with the professional and personal insights I needed to gain clarity about my strengths and how to identify and negate my weaknesses. 
          This work experience ultimately helped me realize that I both enjoy and have a knack for technical and computer work. Where others would tend to get frustrated; I was intrigued. I soon led team meetings for members of my team struggling to understand and navigate the DOS-based finance software in my time at Wells Fargo. It became clear to me that I needed to lean into this strength and make a change and harness my potential. 
          The path to my professional future became more focused. Utilizing my affinity for math coupled with my keen aesthetic eye and attention to detail, I made the decision to devote my energies to learning software engineering. 
          Reenergized, I researched educational programs and career options that led me to discovering software development bootcamps and Epicodus. 
          Ultimately I chose to enrolled in the Full-Time, Full-Stack program for C#, Javascript/React, CSS, and HTML5. Throughout my training at Epicodus, my motivation and intellectual abilities; including problem-solving skills, organizational, and time management skills, have been enhanced as a result of the rigorous and meticulous nature of the program. 
          The experience has increased my desire to secure a position in software development. I have now emerged into the tech field with my new skills as a Software Engineer Intern at HealthSaaS Inc. It is in this role that I began a true deep dive into Backend C# development, with .Net Core 5 + 6 and the performance benefits of functional-style programming- even within Object-oriented languages.
        </p>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}>
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}>
                <CarouselItemTitle>
                  {`${item.year}`}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fill-opacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop
                          offset="0.79478"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((index) => {
          return (
            <CarouselButton
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              type="button">
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
          );
        })}
      </CarouselButtons>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
