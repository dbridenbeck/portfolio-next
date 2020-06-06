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
  height: ${({ isProjectHovered }) => (isProjectHovered ? "60%" : "2em")};
  padding: 0.15em 2.5%;
  margin: 1% 2.5%;
  justify-content: flex-start;
  border: ${({ isProjectHovered, color }) =>
    isProjectHovered ? `2px solid ${color}` : `2px solid #3bc9d1`};
  transition: all 0.75s ease-in-out;
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
  justify-content: space-around;
  padding: 0;
  margin: 0;
  overflow: hidden;
`;

const TechPills = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.825em;
`;

const TechPill = styled.div`
  border: ${({ color }) => `1px solid ${color}`};
  border-radius: 1000px;
  padding: 0 0.725em;
  margin: 0;
`;

const BoldSpan = styled.span`
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
          color={project.color}
        >
          <TitleTypeContainer>
            <Title>{project.title}</Title>
            <ProjectType>{project.type}</ProjectType>
          </TitleTypeContainer>
          <ProjectInfoContainer isProjectHovered={isProjectHovered}>
            <TechPills>
              {project.tech.map((singleTech) => (
                <TechPill color={project.color}>{singleTech}</TechPill>
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
