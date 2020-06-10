import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { ProjectModel } from "../../models/appState";
import ProjectInfo from "./ProjectInfo";
import { devices } from "../../utils/cssBreakpoints";

const projectVariants = {
  initial: {
    height: "27%",
  },
  expanded: {
    height: "60%",
  },
  collapsed: {
    height: "27%",
  },
};

const projectTransition = {
  type: "spring",
  stiffness: 50,
  damping: 20
}

const ProjectContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  font-size: 0.75rem;
  padding: 1em 1.25em;
  margin: 0 0 0.75em 0;
  border: 1px solid #373636;
  :last-child {
    margin: 0;
  }
  @media ${devices.mobileLandscape} {
    font-size: 0.875rem;
  }
`;

const ProjectOverview = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 0.5em 0;
  padding: 0;
`;

const Title = styled.h3`
  font-size: 1.125em;
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
  font-size: 0.875em;
  font-weight: 300;
  color: #333333;
`;

const TechPills = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0;
`;

const TechPill = styled.div`
  height: 2em;
  padding: 0.133em 0.825em;
  margin: 0 0.75em 0 0;
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
      <ProjectOverview>
        <ProjectHeader>
          <Title>{project.title}</Title>
          {/* <LiveLink
            href={project.url}
            target="_blank"
            isProjectHovered={isProjectHovered}
          >
            (Visit Site)
          </LiveLink> */}
          <ProjectType>{project.type}</ProjectType>
        </ProjectHeader>
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
        <FontAwesomeIcon icon={faChevronDown} />
      </ProjectOverview>

      <AnimatePresence initial={false}>
        {isProjectHovered && (
          <ProjectInfo project={project} isProjectHovered={isProjectHovered} />
        )}
      </AnimatePresence>
    </ProjectContainer>
  );
};

export default Project;
