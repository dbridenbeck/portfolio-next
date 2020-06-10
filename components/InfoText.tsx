import styled from "styled-components";
import Projects from "./Projects";
import { ProjectModel } from "../models/appState";

const InfoTextContainer = styled.div`
  position: relative;
  width: 95%;
  height: 46%;
  margin: 0 auto;
  font-family: "Muli", sans-serif;
  font-size: ${({ onProjectsPage }) => onProjectsPage ? "0.825rem" : "0.85rem"};
  font-weight: 400;
  line-height: 1.5em;
  color: #333333;
  @media screen and (min-width: 1270px) {
    width: 80%;
    height: 43%;
    margin: 0 auto;
    font-size: 0.875rem;
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
  currentPage !== "PORTFOLIO" ? (
    <InfoTextContainer
      currentPage={currentPage}
      dangerouslySetInnerHTML={infoText}
      onProjectsPage={false}
    ></InfoTextContainer>
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