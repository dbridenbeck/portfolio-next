import styled, { keyframes, css } from "styled-components";
import { ProjectModel } from "../models/appState";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    height: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    height: 100%;
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    height: 100%;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    height: 0%;
  }
`;

const fadeInAnimation = () =>
  css`
    animation: ${fadeIn} 0.75s ease-in-out forwards;
  `;

const fadeOutAnimation = () =>
  css`
    animation: ${fadeOut} 0.75s ease-in-out forwards;
  `;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ isProjectHovered, projectHoveredIndex }) =>
    isProjectHovered ? "70%" : projectHoveredIndex === -1 ? "4em" : "1.825em"};
  padding: ${({ isProjectHovered, projectHoveredIndex }) =>
    isProjectHovered
      ? "0 2.5%"
      : projectHoveredIndex === -1
      ? "1em"
      : "0 2.5%"};
  margin: 0.5% 2.5%;
  justify-content: flex-start;
  border: ${({ isProjectHovered, color }) =>
    isProjectHovered ? `2px solid ${color}` : `2px solid #3bc9d1`};
  transition: all 0.75s ease-in-out;
  overflow: hidden;
`;

const TitleTypeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`;

const Title = styled.h3`
  padding: 0;
  margin: 0;
`;

const ProjectType = styled.h4`
  padding: 0;
  margin: 0;
`;

const ProjectInfoContainer = styled.div`
  ${({ isProjectHovered }) =>
    isProjectHovered ? fadeInAnimation : fadeOutAnimation};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-top: ${({ isProjectHovered, projectHoveredIndex }) =>
    isProjectHovered
      ? "0"
      : !isProjectHovered && projectHoveredIndex === -1
      ? "8em"
      : "0"};
  margin: 0;
`;

const TechPills = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TechPill = styled.div`
  border: ${({ color }) => `1px solid ${color}`};
  padding: 0 0.725em;
  margin: 0;
  border-radius: 1000px;
  font-size: 0.825em;
`;

const BoldSpan = styled.span`
  font-weight: 600;
  color: ${({ color }) => color};
`;

const InfoP = styled.p`
  font-weight: normal;
  padding: 0;
  margin: 0;
`;

interface ProjectTilesProps {
  projects: ProjectModel[];
  handleProjectHover: (projectIndex) => void;
  projectHoveredIndex: number;
}

const ProjectTiles: React.FC<ProjectTilesProps> = ({
  projects,
  handleProjectHover,
  projectHoveredIndex,
}) => (
  <ProjectsContainer>
    {projects.map((project: ProjectModel, index: number) => {
      const isProjectHovered = projectHoveredIndex === index;
      // look into useCallback! and useMemo! look at formatOnSave and add esLint!
      const updateProjectHoverIndex = () => handleProjectHover(index);
      return (
        <Project
          key={project.url}
          onMouseEnter={updateProjectHoverIndex}
          isProjectHovered={isProjectHovered}
          projectHoveredIndex={projectHoveredIndex}
          color={project.color}
        >
          <TitleTypeContainer>
            <Title>{project.title}</Title>
            <ProjectType>{project.type}</ProjectType>
          </TitleTypeContainer>
          <ProjectInfoContainer
            isProjectHovered={isProjectHovered}
            projectHoveredIndex={projectHoveredIndex}
          >
            <TechPills>
              {project.tech.map((singleTech) => (
                <TechPill color={project.color} key={singleTech}>
                  {singleTech}
                </TechPill>
              ))}
            </TechPills>
            <InfoP>
              <BoldSpan color={project.color}>Goals:</BoldSpan> {project.goals}
            </InfoP>
            <InfoP>
              <BoldSpan color={project.color}>Details:</BoldSpan>{" "}
              {project.projectDetail}
            </InfoP>
          </ProjectInfoContainer>
        </Project>
      );
    })}
  </ProjectsContainer>
);

export default ProjectTiles;
