import styled from "styled-components";
import Projects from "./Projects";
import { ProjectModel } from "../models/appState";

const InfoTextContainer = styled.div`
  position: relative;
  width: 95%;
  height: 41%;
  max-height: 41%;
  margin: 0 auto;
  font-family: "Muli", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.5em;
  color: #333333;
  @media screen and (min-width: 1270px) {
    width: 80%;
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
    ></InfoTextContainer>
  ) : (
    <InfoTextContainer>
      <Projects
        projects={projects}
        updateProjectHoveredIndex={updateProjectHoveredIndex}
        projectHoveredIndex={projectHoveredIndex}
      />
    </InfoTextContainer>
  );

export default InfoText;