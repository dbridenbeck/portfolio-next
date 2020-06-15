import styled from "styled-components";
import Projects from "./Projects";
import SkillsSection from "./SkillsSection";
import AboutSection from "./AboutSection";
import { ProjectModel } from "../models/appState";
import { devices } from "../utils/cssBreakpoints";

const InfoTextContainer = styled.div`
  position: relative;
  width: 100%;
  height: 52%;
  margin: 0 auto;
  font-family: "Muli", sans-serif;
  font-weight: 400;
  color: #333333;
  @media ${devices.mobileLandscape} {
    height: 53%;
  }
`;

interface InfoTextProps {
  projects: ProjectModel[];
  currentPage: string;
  updateProjectSelectedIndex: (projectIndex: number) => void;
}

const InfoText: React.FC<InfoTextProps> = ({
  projects,
  currentPage,
  updateProjectSelectedIndex,
}) =>
  currentPage === "skills" ? (
    <InfoTextContainer
    >
      <SkillsSection />
    </InfoTextContainer>
  ) : currentPage === "about" ? (
    <InfoTextContainer
    >
     <AboutSection />
    </InfoTextContainer>
  ) : (
    <InfoTextContainer>
      <Projects
        projects={projects}
        updateProjectSelectedIndex={updateProjectSelectedIndex}
      />
    </InfoTextContainer>
  );

export default InfoText;