import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { ProjectModel } from "../../models/appState";
import ProjectInfo from "./ProjectInfo";

const projectVariants = {
  initial: {
    height: "27%",
    border: "2px solid #3BC9D1",
  },
  expanded: (color) => ({
    height: "60%",
    border: `2px solid ${color}`,
  }),
  collapsed: {
    height: "22%",
    border: "2px solid #3BC9D1",
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
  padding: 1% 2.5%;
  margin: 0.5% 2.5%;
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

const LiveLink = styled.a`
  font-size: 0.925em;
  margin: 0;
  display: ${({ isProjectHovered }) => (isProjectHovered ? "block" : "none")};
`;

const ProjectType = styled.h4`
  padding: 0;
  margin: 0;
`;

const TechPills = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.975em;
`;

const TechPill = styled.div`
  border: ${({ color, isProjectHovered }) =>
    isProjectHovered ? `1px solid ${color}` : `1px solid #7f7f7f`};
  padding: 0 0.725em;
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
      custom={project.color}
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
