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

const ProjectInfoContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: hidden;
  margin: 0;
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
  >
    <InfoP>
      <BoldSpan color={project.color}>Goals:</BoldSpan> {project.goals}
    </InfoP>
    <InfoP>
      <BoldSpan color={project.color}>Details:</BoldSpan>{" "}
      {project.projectDetail}
    </InfoP>
  </ProjectInfoContainer>

export default ProjectInfo;
