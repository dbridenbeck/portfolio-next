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
  updateProjectSelected: (projectIndex) => void;
}

const Projects: React.FC<ProjectsProps> = ({
  projects,
  updateProjectSelected,
}) => (
  <ProjectsContainer>
    {projects.map((project: ProjectModel, index: number) => {
      return (
        <Project
          key={project.url}
          index={index}
          project={project}
          handleProjectClick={updateProjectSelected}
        />
      );
    })}
  </ProjectsContainer>
);

export default Projects;
