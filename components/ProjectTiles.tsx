import styled, { keyframes, css } from "styled-components";
import { ProjectModel } from "../models/appState";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    height: 0%;
  }
  10% {
    height: 100%;
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
  100% {
    opacity: 0;
    height: 0%;
  }
`;

const fadeInAnimation = () => (
  css`
    animation: ${fadeIn} 1s ease-in-out forwards;
  `
);

const fadeOutAnimation = () => (
  css`
    animation: ${fadeOut} 0.5s ease-in-out forwards;
`
);

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ isProjectHovered }) => (isProjectHovered ? "100%" : "10%")};
  justify-content: flex-start;
  /* padding: 0.5em 5%;
  margin: 0.5em 0; */
  border: 1px solid #3bc9d1;
  transition: height 0.75s ease-in-out;
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
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

const Tech = styled.span`
  padding: 0;
  margin: 0;
`;

const InfoP = styled.p`
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
        >
          <TitleTypeContainer>
            <Title>{project.title}</Title>
            <ProjectType>{project.type}</ProjectType>
          </TitleTypeContainer>
          <ProjectInfoContainer isProjectHovered={isProjectHovered}>
            <Tech>{project.tech}</Tech>
            <InfoP>Goals: {project.goals}</InfoP>
            <InfoP>Details: {project.projectDetail}</InfoP>
          </ProjectInfoContainer>
        </Project>
      );
    })}
  </ProjectsContainer>
);

export default ProjectTiles;
