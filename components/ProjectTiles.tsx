import { motion, AnimatePresence } from "framer-motion";
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

const projectVariants = {
  initial: {
    height: "20%",
    padding: "2.5% 2.5%",
    margin: "2.5% 2.5%",
    border: "2px solid green",
  },
  expanded: {
    height: "70%",
    padding: "0% 2.5%",
    margin: "0% 2.5%",
    border: "2px solid red",
  },
  collapsed: {
    height: "15%",
    padding: "1.5% 2.5%",
    margin: "2% 2.5%",
    border: "2px solid green",
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
          onClick={updateProjectHoverIndex}
          isProjectHovered={isProjectHovered}
          projectHoveredIndex={projectHoveredIndex}
          color={project.color}
          initial="initial"
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
