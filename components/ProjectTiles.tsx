import styled from "styled-components";
import { ProjectModel } from "../models/appState";

const Project = styled.div`

`;

const Title = styled.h3`

`;

const ProjectType = styled.h4`

`;

const ProjectInfoContainer = styled.div`

`;

const Tech = styled.span`

`;

const InfoP = styled.p`

`;

interface ProjectTilesProps {
  projects: [ProjectModel, ProjectModel, ProjectModel];
}

const ProjectTiles: React.FC<ProjectTilesProps> = ({
  projects,
}) => 
  <>
    {projects.map(project => (
      <Project key={project.url}>
        <Title>{project.title}</Title>
        <ProjectType></ProjectType>
        <ProjectInfoContainer>
          <Tech></Tech>
          <InfoP></InfoP>
          <InfoP></InfoP>
        </ProjectInfoContainer>
      </Project>
    ))}
  </>
  
export default ProjectTiles;
