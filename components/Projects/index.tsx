import styled from "styled-components";
import { ProjectModel } from "../../models/appState";
import Project from './Project';
import { devices } from "../../utils/cssBreakpoints";

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  @media ${devices.mobileLandscape} {
    justify-content: space-around;
  }
`;

interface ProjectsProps {
  projects: ProjectModel[];
  updateProjectHoveredIndex: (projectIndex) => void;
  projectHoveredIndex: number;
}

const Projects: React.FC<ProjectsProps> = ({
  projects,
  updateProjectHoveredIndex,
  projectHoveredIndex,
}) => (
  <ProjectsContainer>
    {projects.map((project: ProjectModel, index: number) => {
      const isProjectHovered = projectHoveredIndex === index;
      return (
        <Project
          key={project.url}
          index={index}
          project={project}
          handleProjectHover={updateProjectHoveredIndex}
          isProjectHovered={isProjectHovered}
          projectHoveredIndex={projectHoveredIndex}
        />
      );
    })}
  </ProjectsContainer>
);

export default Projects;
