import styled from "styled-components";
import Projects from "./Projects";
import SkillsSection from "./SkillsSection";
import { ProjectModel } from "../models/appState";
import { devices } from "../utils/cssBreakpoints";

const InfoTextContainer = styled.div`
  position: relative;
  width: 100%;
  height: 57%;
  margin: 0 auto;
  font-family: "Muli", sans-serif;
  font-weight: 400;
  color: #333333;
  @media ${devices.mobileLandscape} {
    height: 53%;
  }
`;

interface InfoTextProps {
  infoText: {__html: string};
  projects: [ProjectModel, ProjectModel, ProjectModel];
  currentPage: string;
  projectHoveredIndex: number;
  updateProjectHoveredIndex: (projectIndex: number) => void;
}

const InfoText: React.FC<InfoTextProps> = ({
  infoText,
  projects,
  currentPage,
  updateProjectHoveredIndex,
  projectHoveredIndex,
}) =>
  currentPage === "skills" ? (
    <InfoTextContainer
    >
      <SkillsSection />
    </InfoTextContainer>
  ) : currentPage === "about" ? (
    <InfoTextContainer
    >
     about 
    </InfoTextContainer>
  ) : (
    <InfoTextContainer onProjectsPage={true}>
      <Projects
        projects={projects}
        updateProjectHoveredIndex={updateProjectHoveredIndex}
        projectHoveredIndex={projectHoveredIndex}
      />
    </InfoTextContainer>
  );

export default InfoText;