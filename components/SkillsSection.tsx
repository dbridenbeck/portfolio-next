import styled from "styled-components";
import Pill from "./SharedComponents/Pill";
import { devices } from "../utils/cssBreakpoints";

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  @media ${devices.mobileLandscape} {
    font-size: 1.125em;
  }
  @media ${devices.largeScreen} {
    font-size: 1.25em;
  }
`;

const Headline = styled.h2`
  font-size: 1.75em;
  font-weight: 600;
  margin: 0;
  padding: 0;
`;

const Info = styled.p`
  font-size: 0.875em;
  line-height: 1.5em;
  margin: 0;
  padding: 0;
`;

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 0.825em;
`;

const Styledh3 = styled.h3`
  margin: 0.5em 0;
  padding: 0;
  font-size: 0.825em;
`;

const languagesAndTools = [
  "JavaScript ES6",
  "TypeScript",
  "NodeJS",
  "Python",
  "React",
  "Redux",
  "Gatsby.js",
  "Next.js",
  "Styled-Components",
  "Webpack",
  "Express",
  "RESTful API's",
  "MongoDB",
  "Mongoose",
  "Socket.io",
  "Jest",
  "Github",
  "TDD",
  "Figma",
  "Adobe Creative Suite",
  "Shopify",
];

const SkillsSection: React.FC = () => (
  <SkillsContainer>
    <Headline>I use code to bring people together and have fun.</Headline>
    <Info>
      I am a detail oriented and intrinsically motivated software engineer with
      five years’ experience creating custom websites using HTML/CSS/JavaScript,
      and eight years’ experience working directly with clients to solve complex
      technical challenges.
    </Info>
    <div>
      <Styledh3>Languages and Tools:</Styledh3>
      <TechContainer>
        {languagesAndTools.map((techName) => (
          <Pill key={techName} setMargin={"0.25em"}>
            {techName}
          </Pill>
        ))}
      </TechContainer>
    </div>
  </SkillsContainer>
);

export default SkillsSection;
