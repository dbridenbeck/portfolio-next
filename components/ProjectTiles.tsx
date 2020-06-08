import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { ProjectModel } from "../models/appState";

const projectVariants = {
  initial: {
    height: "20%",
    padding: "2.5% 2.5%",
    margin: "2.5% 2.5%",
    border: "2px solid #3BC9D1",
  },
  expanded: (color) => ({
    height: "60%",
    padding: "0% 2.5%",
    margin: "0% 2.5%",
    border: `2px solid ${color}`,
  }),
  collapsed: {
    height: "10%",
    padding: "0 2.5%",
    margin: "1% 2.5%",
    border: "2px solid #3BC9D1",
  },
};

const infoContainerVariants = {
  initial: {
    opacity: 0,
    height: "0%"
  },
  animate: {
    opacity: 1,
    height: "100%",
  },
  exit: {
    opacity: 0,
    height: "0%",
  }
}

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`;

const Project = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.5%;
  margin: 2.5%;
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

const ProjectInfoContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: hidden;
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
      const updateProjectHoverIndex = () => handleProjectHover(index);
      return (
        <Project
          key={project.url}
          onClick={updateProjectHoverIndex}
          initial="initial"
          custom={project.color}
          variants={projectVariants}
          animate={
            isProjectHovered
              ? "expanded"
              : projectHoveredIndex === -1
              ? "initial"
              : "collapsed"
          }
        >
          <TitleTypeContainer>
            <Title>{project.title}</Title>
            <ProjectType>{project.type}</ProjectType>
          </TitleTypeContainer>
          <AnimatePresence initial={false}>
            {isProjectHovered && (
              <ProjectInfoContainer
                isProjectHovered={isProjectHovered}
                projectHoveredIndex={projectHoveredIndex}
                initial="initial"
                exit="exit"
                animate="animate"
                variants={infoContainerVariants}
              >
                <TechPills>
                  {project.tech.map((singleTech) => (
                    <TechPill color={project.color} key={singleTech}>
                      {singleTech}
                    </TechPill>
                  ))}
                </TechPills>
                <InfoP>
                  <BoldSpan color={project.color}>Goals:</BoldSpan>{" "}
                  {project.goals}
                </InfoP>
                <InfoP>
                  <BoldSpan color={project.color}>Details:</BoldSpan>{" "}
                  {project.projectDetail}
                </InfoP>
              </ProjectInfoContainer>
            )}
          </AnimatePresence>
        </Project>
      );
    })}
  </ProjectsContainer>
);

export default ProjectTiles;
