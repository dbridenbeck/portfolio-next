import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { ProjectModel } from "../../models/appState";

const infoContainerVariants = {
  initial: {
    opacity: 0,
    height: "0%",
  },
  animate: {
    opacity: 1,
    height: "100%",
  },
  exit: {
    opacity: 0,
    height: "0%",
  },
};

const infoContainerTransition = {
  type: "spring",
  stiffness: 125,
  damping: 20,
};

const ProjectInfoContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: hidden;
  margin: 0;
`;

const InfoP = styled.p`
  padding: 0;
  margin: 0;
  font-weight: normal;
  font-size: 0.975em;
`;

interface ProjectProps {
  project: ProjectModel;
  isProjectHovered: boolean;
}

const ProjectInfo: React.FC<ProjectProps> = ({
  project,
  isProjectHovered,
}) =>
  <ProjectInfoContainer
    isProjectHovered={isProjectHovered}
    initial="initial"
    exit="exit"
    animate="animate"
    variants={infoContainerVariants}
    transition={infoContainerTransition}
  >
    <InfoP>
      {project.goals}
    </InfoP>
    <InfoP>
      {project.projectDetail}
    </InfoP>
  </ProjectInfoContainer>

export default ProjectInfo;
