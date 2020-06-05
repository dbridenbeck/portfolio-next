import styled from "styled-components";
import { ProjectModel } from "../models/appState";

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5%;
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
  <ProjectsContainer>
    {projects.map(project => (
      <Project key={project.url}>
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
    ))}
  </ProjectsContainer>
  
export default ProjectTiles;
