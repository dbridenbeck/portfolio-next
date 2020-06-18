import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { ProjectModel } from "../../models/appState";
import ProjectInfo from "./ProjectInfo";
import Pill from "../SharedComponents/Pill";
import { devices } from "../../utils/cssBreakpoints";

const projectVariants = {
  initial: {
    height: "27%",
  },
  expanded: {
    height: "60%",
  }
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
  @media ${devices.largeScreen} {
    font-size: 1rem;
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

interface ProjectProps {
  project: ProjectModel;
  handleProjectClick: (projectIndex) => void;
  index: number;
}

const Project: React.FC<ProjectProps> = ({
  project,
  handleProjectClick,
  index,
}) => {
  const updateProjectOnClick = () => handleProjectClick(index);
  return (
    <ProjectContainer
      key={project.url}
      onClick={updateProjectOnClick}
      initial="initial"
      variants={projectVariants}
      animate={
        project.open
          ? "expanded"
          : "initial"
      }
      transition={projectTransition}
    >
      <ProjectOverview>
        <ProjectHeader>
          <Title>{project.title}</Title>
          <ProjectType>{project.type}</ProjectType>
          {project.open ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </ProjectHeader>
        <TechPills>
          {project.tech.map((techName) => (
            <Pill key={techName} setMargin={"0 0.75em 0 0"}>{techName}</Pill>
          ))}
        </TechPills>
      </ProjectOverview>

      <AnimatePresence initial={false}>
        {project.open && (
          <ProjectInfo project={project} />
        )}
      </AnimatePresence>
    </ProjectContainer>
  );
};

export default Project;
