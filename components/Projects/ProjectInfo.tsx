import { motion } from "framer-motion";
import styled from "styled-components";
import { ProjectInfoProps } from "../../models/ProjectInfoModel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight	 } from "@fortawesome/free-solid-svg-icons";

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

const ProjectLink = styled.a`
  padding-left: 0.333em;
`;

const ProjectInfo: React.FC<ProjectInfoProps> = ({ project }) => (
  <ProjectInfoContainer
    initial="initial"
    exit="exit"
    animate="animate"
    variants={infoContainerVariants}
    transition={infoContainerTransition}
  >
    <InfoP>
      {project.projectDetail}
      <ProjectLink href={project.url} target="_blank">
        Visit the website <FontAwesomeIcon icon={faArrowRight} />
      </ProjectLink>
    </InfoP>
  </ProjectInfoContainer>
);

export default ProjectInfo;
