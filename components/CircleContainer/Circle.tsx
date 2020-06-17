import styled from "styled-components";
import { motion } from "framer-motion";
import Video from './Video';
import CircleAnimation from "../../animations/CircleAnimation";
import { ProjectModel } from "../../models/appState";
import { devices } from "../../utils/cssBreakpoints";

const StyledCircle = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border-radius: 10000px;
  overflow: hidden;
  background-color: ${({ color }) =>
    color === "grey"
      ? "#4A505F"
      : color === "yellow"
      ? "#F9E44D"
      : color === "reddish"
      ? "#883B38"
      : "white"};
  transition: background-color 0.5s;
  transform: translate3d(0, 0, 0);
  z-index: 5;
`;

const StyledVideo = styled(motion.video)`
  position: relative;
  display: block;
  height: 100%;
  margin: ${({ hidden }) => (hidden ? "-9999px" : "0 auto")};
  z-index: 1;
  @media ${devices.mobileLandscape} {
    position: absolute;
    height: auto;
    bottom: 0;
  }
`;

interface CircleProps {
  currentPage: string;
  pageClickedOnce: boolean;
  projects: ProjectModel[];
  openProject: ProjectModel;
}

const Circle: React.FC<CircleProps> = ({
  currentPage,
  pageClickedOnce,
  projects,
  openProject,
}) => {
  return (
    <CircleAnimation
      currentPage={currentPage}
      pageClickedOnce={pageClickedOnce}
    >
      <StyledCircle
        color={
          currentPage === "skills"
            ? "grey"
            : currentPage === "about"
            ? "yellow"
            : openProject
            ? "white"
            : "reddish"
        }
        pageClickedOnce={pageClickedOnce}
        currentPage={currentPage}
        projects={projects}
      >
        {openProject && (
          <Video openProject={openProject} />
        )}

        {/* Calling the thumb files here to pre-load them so they are ready when a project is opened */}
        {projects.map(project => <img style={{display: "none"}} src={project.thumb} alt={project.thumbAlt} key={project.thumb}/>)}
      </StyledCircle>
    </CircleAnimation>
  );
};
export default Circle;
