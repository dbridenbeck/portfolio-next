import styled from "styled-components";
import { ProjectModel } from "../models/appState";
import { ReactElement } from "react";

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: ${({ isProjectHovered }) => (isProjectHovered ? "2" : "0")};
  justify-content: space-around;
  padding: 2% 5%;
  margin: 1% 0;
  border: 1px solid #3bc9d1;
`;

const TitleTypeContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
  display: none;
`;

const Tech = styled.span``;

const InfoP = styled.p``;

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
          isProjectHovered={projectHoveredIndex === index}
        >
          <TitleTypeContainer>
            <Title>{project.title}</Title>
            <ProjectType>{project.type}</ProjectType>
          </TitleTypeContainer>
          <ProjectInfoContainer>
            <Tech></Tech>
            <InfoP></InfoP>
            <InfoP></InfoP>
          </ProjectInfoContainer>
        </Project>
      );
    })}
  </ProjectsContainer>
);

export default ProjectTiles;
