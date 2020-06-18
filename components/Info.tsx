import styled from "styled-components";
import Projects from "./Projects";
import SkillsSection from "./SkillsSection";
import AboutSection from "./AboutSection";
import { ProjectModel } from "../models/appState";
import { devices } from "../utils/cssBreakpoints";

const InfoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  margin: 0 auto;
  font-family: "Muli", sans-serif;
  font-weight: 400;
  color: #333333;
  @media ${devices.mobileLandscape} {
    height: 53%;
  }
`;

interface InfoProps {
  projects: ProjectModel[];
  currentPage: string;
  updateProjectSelected: (projectIndex: number) => void;
}

const Info: React.FC<InfoProps> = ({
  projects,
  currentPage,
  updateProjectSelected,
}) =>
  currentPage === "skills" ? (
    <InfoContainer
    >
      <SkillsSection />
    </InfoContainer>
  ) : currentPage === "about" ? (
    <InfoContainer
    >
     <AboutSection />
    </InfoContainer>
  ) : (
    <InfoContainer>
      <Projects
        projects={projects}
        updateProjectSelected={updateProjectSelected}
      />
    </InfoContainer>
  );

export default Info;