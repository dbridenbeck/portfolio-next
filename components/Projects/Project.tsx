import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { ProjectModel } from "../../models/appState";
import ProjectInfo from "./ProjectInfo";

const projectVariants = {
  initial: {
    height: "27%",
  },
  expanded: {
    height: "60%",
  },
  collapsed: {
    height: "22%",
  },
};

const projectTransition = {
  type: "spring",
  damping: 50
}

const ProjectContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding: 1.5rem 1.625rem;
  margin: 0 0 1.5rem 0;
  border: 1px solid #373636;
`;

const TitleTypeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 1rem 0;
  padding: 0;
`;

const Title = styled.h3`
  font-size: 1.125rem;
  padding: 0;
  margin: 0 2em 0 0;
  color: #3d3838;
`;

const LiveLink = styled.a`
  margin: 0;
  display: ${({ isProjectHovered }) => (isProjectHovered ? "block" : "none")};
`;

const ProjectType = styled.h4`
  padding: 0;
  margin: 0 auto 0 0;
  font-size: 0.875rem;
  font-weight: 300;
  color: #333333;
`;

const TechPills = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.975em;
  margin: 0;
  padding: 0;
`;

const TechPill = styled.div`
  height: 1.5rem;
  padding: 0.133rem 0.725rem;
  color: #584D4D;
  background-color: #f2f2f2;
  border-radius: 1000px;
  font-size: 0.825em;
`;

interface ProjectProps {
  project: ProjectModel;
  handleProjectHover: (projectIndex) => void;
  isProjectHovered: boolean;
  projectHoveredIndex: number;
  index: number;
}

const Project: React.FC<ProjectProps> = ({
  project,
  isProjectHovered,
  handleProjectHover,
  projectHoveredIndex,
  index,
}) => {
  const updateProjectHoverIndex = () => handleProjectHover(index);
  return (
    <ProjectContainer
      key={project.url}
      onClick={updateProjectHoverIndex}
      initial="initial"
      variants={projectVariants}
      animate={
        isProjectHovered
          ? "expanded"
          : projectHoveredIndex === -1
          ? "initial"
          : "collapsed"
        }
      transition={projectTransition}
    >
      <TitleTypeContainer>
        <Title>{project.title}</Title>
        <LiveLink
          href={project.url}
          target="_blank"
          isProjectHovered={isProjectHovered}
        >
          (Visit Site)
        </LiveLink>
        <ProjectType>{project.type}</ProjectType>
      </TitleTypeContainer>
      <TechPills>
        {project.tech.map((singleTech) => (
          <TechPill
            color={project.color}
            key={singleTech}
            isProjectHovered={isProjectHovered}
          >
            {singleTech}
          </TechPill>
        ))}
      </TechPills>
      <AnimatePresence initial={false}>
        {isProjectHovered && (
          <ProjectInfo project={project} isProjectHovered={isProjectHovered} />
        )}
      </AnimatePresence>
    </ProjectContainer>
  );
};

export default Project;
