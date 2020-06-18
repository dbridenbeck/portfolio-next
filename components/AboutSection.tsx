import styled from "styled-components";
import { devices } from "../utils/cssBreakpoints";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
`;

const Headline = styled.h2`
  font-size: 1.75em;
  font-weight: 600;
  margin: 0.5em 0;
  @media ${devices.mobileLandscape} {
    margin: 0.125em 0;
    font-size: 2.25em;
  }
  @media ${devices.largeScreen} {
    margin: 0.5em 0;
  }
`;

const Info = styled.p`
  font-size: 0.825em;
  margin: 0.325em 0;
  @media ${devices.mobileLandscape} {
    margin: 0.75em 0;
    font-size: 0.85em;
  }
  @media ${devices.largeScreen} {
    font-size: 1em;
    margin: 1em 0;
  }
`;

const SkillsSection: React.FC = () => (
  <AboutContainer>
    <Headline>
      My background is in life coaching, solutions engineering, vendor
      management, and sales.
    </Headline>
    <Info>
      When I’m not working, I’m hanging out with my wife and daughter, playing
      pinball, or rollerskating.
    </Info>
    <Info>
      You can also find me volunteering for the{" "}
      <a href="https://github.com/codeforpdx/dwellingly-app" target="_blank">
        Dwelling.ly
      </a>{" "}
      project at Code for PDX and participating in coding meetups like Portland
      ReactJS and Mentorship Saturdays.
    </Info>
  </AboutContainer>
);

export default SkillsSection;
